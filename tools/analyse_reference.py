#!/usr/bin/env python3
"""Turn a reference screen recording into a starting preset for Cover Page motion.
Usage: python3 tools/analyse_reference.py ref.mp4 [out_dir]
Writes: sheet.jpg (1 frame per second), audio.wav, preset.json (suggested settings), and prints a summary.
Needs ffmpeg, numpy, scipy, pillow. Technique only: never reuse the reference's footage, music or names."""
import sys, os, json, subprocess, numpy as np
from PIL import Image
import scipy.io.wavfile as wav, scipy.signal as sg
src = sys.argv[1]; out = sys.argv[2] if len(sys.argv) > 2 else os.path.splitext(src)[0] + '_ref'
os.makedirs(out, exist_ok=True)
def ff(*a): subprocess.run(['ffmpeg', '-v', 'error', '-y', *a], check=True)
ff('-i', src, '-vf', 'fps=1,scale=258:-1,tile=6x4', '-frames:v', '1', f'{out}/sheet.jpg')
ff('-i', src, '-vf', 'fps=4,scale=96:-1', f'{out}/f_%04d.png')
ff('-i', src, '-vn', '-ac', '1', '-ar', '22050', f'{out}/audio.wav')
frames = sorted(x for x in os.listdir(out) if x.startswith('f_'))
arr = [np.asarray(Image.open(f'{out}/{x}').convert('RGB'), dtype=np.float32) / 255 for x in frames]
for x in frames: os.remove(f'{out}/{x}')
A = np.stack(arr); lum = A @ np.array([.299, .587, .114])
motion = float(np.abs(np.diff(lum, axis=0)).mean()) if len(lum) > 1 else 0
bright = float(np.median(lum)); light_bg = bright > 0.55
px = A.reshape(-1, 3); idx = np.random.default_rng(1).choice(len(px), min(20000, len(px)), replace=False); px = px[idx]
# palette: k means, 6 colours
c = px[np.random.default_rng(2).choice(len(px), 6, replace=False)]
for _ in range(12):
    lab = ((px[:, None] - c[None]) ** 2).sum(-1).argmin(1)
    c = np.array([px[lab == k].mean(0) if (lab == k).any() else c[k] for k in range(6)])
share = np.bincount(lab, minlength=6) / len(lab); order = share.argsort()[::-1]
hexs = ['#%02x%02x%02x' % tuple(int(v * 255) for v in c[k]) for k in order]
sr, x = wav.read(f'{out}/audio.wav'); x = x.astype(np.float32) / 32768
f, t, Z = sg.stft(x, sr, nperseg=2048, noverlap=1536); M = np.abs(Z)
flux = np.maximum(0, np.diff(M, axis=1)).sum(0); o = flux - flux.mean()
ac = np.correlate(o, o, 'full')[len(o) - 1:]; lags = np.arange(len(ac)) * 512 / sr; m = (lags > .3) & (lags < 1.5)
bpm = round(60 / lags[m][ac[m].argmax()], 1) if m.any() else 0
spec = M.mean(1); peaks = [round(float(v), 1) for v in f[np.argsort(spec * (f > 30))[-6:]][::-1]]
bands = [(20, 120), (120, 500), (500, 2000), (2000, 6000), (6000, 11000)]
be = np.array([spec[(f >= a) & (f < b)].sum() for a, b in bands]); be = (be / be.sum()).round(2).tolist()
rms = np.sqrt((x[: len(x) // 512 * 512].reshape(-1, 512) ** 2).mean(1)); ps = int(sr / 512)
env = [round(float(rms[i:i + ps].mean()), 3) for i in range(0, len(rms), ps)]
# breathing period from the loudness curve
e = np.array(env) - np.mean(env); acs = np.correlate(e, e, 'full')[len(e) - 1:]
period = int(np.argmax(acs[2:8]) + 2) if len(acs) > 8 else 4
report = {
  'visual': {'median_brightness': round(bright, 2), 'light_background': light_bg, 'motion_energy': round(motion, 4), 'palette': hexs, 'palette_share': share[order].round(2).tolist()},
  'audio': {'tempo_bpm': bpm, 'peak_hz': peaks, 'band_share_sub_low_mid_hi_air': be, 'loudness_per_second': env, 'swell_period_s': period},
  'suggested_preset': {
    'paper': hexs[0] if light_bg else '#0b0e1a', 'ink': hexs[-1] if light_bg else hexs[0], 'colors': hexs[1:],
    'bpm': bpm, 'period': period, 'drone': min(peaks) if peaks else 55, 'notes': sorted(peaks)[:5],
    'family_hint': 'ink or echo (light ground)' if light_bg else 'tunnel or constellation (dark ground)'
  }
}
json.dump(report, open(f'{out}/preset.json', 'w'), indent=1)
print(json.dumps(report, indent=1)); print('sheet:', f'{out}/sheet.jpg')
