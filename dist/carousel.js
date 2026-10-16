(()=>{var rc=0,Bo=1,ac=2;var yi=1,oc=2,ns=3,ei=0,Ce=1,Ge=2,bn=0,is=1,zo=2,Vo=3,Ho=4,lc=5;var Mi=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,Go=204,ko=205,_c=206,xc=207,vc=208,yc=209,Mc=210,Sc=211,bc=212,Ec=213,Tc=214,Nr=0,Ur=1,Fr=2,Xi=3,Or=4,Br=5,zr=6,Vr=7,ca=0,wc=1,Ac=2,ln=0,Wo=1,Xo=2,qo=3,Ys=4,Yo=5,Zo=6,Jo=7;var $o=300,ni=301,Si=302,ha=303,ua=304,Zs=306,qi=1e3,gn=1001,Hr=1002,Te=1003,Rc=1004;var Js=1005;var Re=1006,da=1007;var ii=1008;var ke=1009,Ko=1010,Qo=1011,ss=1012,fa=1013,cn=1014,je=1015,hn=1016,pa=1017,ma=1018,rs=1020,jo=35902,tl=35899,el=1021,nl=1022,tn=1023,_n=1026,si=1027,ga=1028,_a=1029,ri=1030,xa=1031;var va=1033,$s=33776,Ks=33777,Qs=33778,js=33779,ya=35840,Ma=35841,Sa=35842,ba=35843,Ea=36196,Ta=37492,wa=37496,Aa=37488,Ra=37489,tr=37490,Ca=37491,Ia=37808,Pa=37809,La=37810,Da=37811,Na=37812,Ua=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,Va=37818,Ha=37819,Ga=37820,ka=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,Za=36284,er=36285,Ja=36286;var Rs=2300,Gr=2301,Lr=2302,Co=2303,Io=2400,Po=2401,Lo=2402;var Cc=3200;var nr=0,Ic=1,Bn="",xe="srgb",Cs="srgb-linear",Is="linear",ne="srgb";var Dr=7680;var Pc=519,Lc=512,Dc=513,Nc=514,$a=515,Uc=516,Fc=517,Ka=518,Oc=519,Bc=35044;var il="300 es",an=2e3,Yi=2001;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Th(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){let i=Ps("canvas");return i.style.display="block",i}var Nl={},Zi=null;function sl(...i){let t="THREE."+i.shift();Zi?Zi("log",t,...i):console.log(t,...i)}function Vc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=Vc(i);let t="THREE."+i.shift();if(Zi)Zi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=Vc(i);let t="THREE."+i.shift();if(Zi)Zi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function pi(...i){let t=i.join(" ");t in Nl||(Nl[t]=!0,Pt(...i))}function Hc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gc={[Nr]:Ur,[Fr]:zr,[Or]:Vr,[Xi]:Br,[Ur]:Nr,[zr]:Fr,[Vr]:Or,[Br]:Xi},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=1234567,ws=Math.PI/180,mi=180/Math.PI;function as(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function rl(i,t){return(i%t+t)%t}function wh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ah(i,t,e){return i!==t?(e-i)/(t-i):0}function As(i,t,e){return(1-e)*i+e*t}function Rh(i,t,e,n){return As(i,t,1-Math.exp(-e*n))}function Ch(i,t=1){return t-Math.abs(rl(i,t*2)-t)}function Ih(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dh(i,t){return i+Math.random()*(t-i)}function Nh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(Ul=i);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fh(i){return i*ws}function Oh(i){return i*mi}function Bh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*u,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var al={DEG2RAD:ws,RAD2DEG:mi,generateUUID:as,clamp:qt,euclideanModulo:rl,mapLinear:wh,inverseLerp:Ah,lerp:As,damp:Rh,pingpong:Ch,smoothstep:Ih,smootherstep:Ph,randInt:Lh,randFloat:Dh,randFloatSpread:Nh,seededRandom:Uh,degToRad:Fh,radToDeg:Oh,isPowerOfTwo:Bh,ceilPowerOfTwo:zh,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Hh,normalize:Fe,denormalize:ki},ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;var Bt=ul,vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==p||u!==x){let _=l*h+c*p+u*x+d*M;_<0&&(h=-h,p=-p,x=-x,M=-M,_=-_);let f=1-o;if(_<.9995){let R=Math.acos(_),L=Math.sin(R);f=Math.sin(f*R)/L,o=Math.sin(o*R)/L,l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+M*o;let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*p-c*h,t[e+1]=l*x+u*h+c*d-o*p,t[e+2]=c*x+u*p+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dl=class dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;var V=dl,ao=new V,Fl=new vn,fl=class fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],M=s[0],_=s[3],f=s[6],R=s[1],L=s[4],y=s[7],S=s[2],T=s[5],P=s[8];return r[0]=a*M+o*R+l*S,r[3]=a*_+o*L+l*T,r[6]=a*f+o*y+l*P,r[1]=c*M+u*R+d*S,r[4]=c*_+u*L+d*T,r[7]=c*f+u*y+d*P,r[2]=h*M+p*R+x*S,r[5]=h*_+p*L+x*T,r[8]=h*f+p*y+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=e*d+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(t,e)),this}rotate(t){return pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;var Ot=fl,oo=new Ot,Ol=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){let i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),i}var Jt=Gh();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,kr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Ps("canvas")),Ci.width=t.width,Ci.height=t.height;let s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kh=0,Ji=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Wh=0,co=new V,Oe=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Re,a=ii,o=tn,l=ke,c=i.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=as(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=$o;Oe.DEFAULT_ANISOTROPY=1;var pl=class pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],M=l[2],_=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,y=(p+1)/2,S=(f+1)/2,T=(u+h)/4,P=(d+M)/4,v=(x+_)/4;return L>y&&L>S?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=T/n,r=P/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=P/r,s=v/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-x)*(_-x)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(d-M)/R,this.z=(h-u)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;var ue=pl,Wr=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ji(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends Wr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ls=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var la=class la{constructor(t,e,n,s,r,a,o,l,c,u,d,h,p,x,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,p,x,M,_)}set(t,e,n,s,r,a,o,l,c,u,d,h,p,x,M,_){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=M,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*d,x=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,x=c*u,M=c*d;e[0]=h+M*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,x=c*u,M=c*d;e[0]=h-M*o,e[4]=-a*d,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*d,x=o*u,M=o*d;e[0]=l*u,e[4]=x*c-p,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=M-h*d,e[8]=x*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+x,e[10]=h-M*d}else if(t.order==="XZY"){let h=a*l,p=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=a*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=o*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Wn.crossVectors(n,We),Wn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Wn.crossVectors(n,We)),Wn.normalize(),dr.crossVectors(We,Wn),s[0]=Wn.x,s[4]=dr.x,s[8]=We.x,s[1]=Wn.y,s[5]=dr.y,s[9]=We.y,s[2]=Wn.z,s[6]=dr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],M=n[6],_=n[10],f=n[14],R=n[3],L=n[7],y=n[11],S=n[15],T=s[0],P=s[4],v=s[8],w=s[12],D=s[1],O=s[5],z=s[9],H=s[13],N=s[2],k=s[6],Z=s[10],Q=s[14],at=s[3],J=s[7],nt=s[11],rt=s[15];return r[0]=a*T+o*D+l*N+c*at,r[4]=a*P+o*O+l*k+c*J,r[8]=a*v+o*z+l*Z+c*nt,r[12]=a*w+o*H+l*Q+c*rt,r[1]=u*T+d*D+h*N+p*at,r[5]=u*P+d*O+h*k+p*J,r[9]=u*v+d*z+h*Z+p*nt,r[13]=u*w+d*H+h*Q+p*rt,r[2]=x*T+M*D+_*N+f*at,r[6]=x*P+M*O+_*k+f*J,r[10]=x*v+M*z+_*Z+f*nt,r[14]=x*w+M*H+_*Q+f*rt,r[3]=R*T+L*D+y*N+S*at,r[7]=R*P+L*O+y*k+S*J,r[11]=R*v+L*z+y*Z+S*nt,r[15]=R*w+L*H+y*Q+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],M=t[7],_=t[11],f=t[15],R=l*p-c*h,L=o*p-c*d,y=o*h-l*d,S=a*p-c*u,T=a*h-l*u,P=a*d-o*u;return e*(M*R-_*L+f*y)-n*(x*R-_*S+f*T)+s*(x*L-M*S+f*P)-r*(x*y-M*T+_*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],M=t[13],_=t[14],f=t[15],R=e*o-n*a,L=e*l-s*a,y=e*c-r*a,S=n*l-s*o,T=n*c-r*o,P=s*c-r*l,v=u*M-d*x,w=u*_-h*x,D=u*f-p*x,O=d*_-h*M,z=d*f-p*M,H=h*f-p*_,N=R*H-L*z+y*O+S*D-T*w+P*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*H-l*z+c*O)*k,t[1]=(s*z-n*H-r*O)*k,t[2]=(M*P-_*T+f*S)*k,t[3]=(h*T-d*P-p*S)*k,t[4]=(l*D-a*H-c*w)*k,t[5]=(e*H-s*D+r*w)*k,t[6]=(_*y-x*P-f*L)*k,t[7]=(u*P-h*y+p*L)*k,t[8]=(a*z-o*D+c*v)*k,t[9]=(n*D-e*z-r*v)*k,t[10]=(x*T-M*y+f*R)*k,t[11]=(d*y-u*T-p*R)*k,t[12]=(o*w-a*O-l*v)*k,t[13]=(e*O-n*w+s*v)*k,t[14]=(M*L-x*S-_*R)*k,t[15]=(u*S-d*L+h*R)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,x=r*d,M=a*u,_=a*d,f=o*d,R=l*c,L=l*u,y=l*d,S=n.x,T=n.y,P=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+y)*S,s[2]=(x-L)*S,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(h+f))*T,s[6]=(_+R)*T,s[7]=0,s[8]=(x+L)*P,s[9]=(_-R)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);let c=1/a,u=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===an)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Yi)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=an,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===an)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Yi)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};la.prototype.isMatrix4=!0;var le=la,Ii=new V,nn=new le,Xh=new V(0,0,0),qh=new V(1,1,1),Wn=new V,dr=new V,We=new V,zl=new le,Vl=new vn,yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yh=0,Hl=new V,Pi=new vn,An=new le,fr=new V,vs=new V,Zh=new V,Jh=new vn,Gl=new V(1,0,0),kl=new V(0,1,0),Wl=new V(0,0,1),Xl={type:"added"},$h={type:"removed"},Li={type:"childadded",child:null},ho={type:"childremoved",child:null},pe=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new yn,n=new vn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(vs,fr,this.up):An.lookAt(fr,vs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),Li.child=t,this.dispatchEvent(Li),Li.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($h),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pe.DEFAULT_UP=new V(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kh={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let _=e.getJointPose(M,n),f=this._getHandJoint(c,M);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=rl(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Jt.workingToColorSpace(De.copy(this),t),Math.round(qt(De.r*255,0,255))*65536+Math.round(qt(De.g*255,0,255))*256+Math.round(qt(De.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=xe){Jt.workingToColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(pr);let n=As(Xn.h,pr.h,e),s=As(Xn.s,pr.s,e),r=As(Xn.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Dt;Dt.NAMES=kc;var Ns=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gi=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},sn=new V,Rn=new V,fo=new V,Cn=new V,Di=new V,Ni=new V,ql=new V,po=new V,mo=new V,go=new V,_o=new ue,xo=new ue,vo=new ue,Jn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Rn.subVectors(n,e),fo.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(Rn),l=sn.dot(fo),c=Rn.dot(Rn),u=Rn.dot(fo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Rn.subVectors(t,e),sn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Ni.subVectors(r,n),po.subVectors(t,n);let l=Di.dot(po),c=Ni.dot(po);if(l<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);let u=Di.dot(mo),d=Ni.dot(mo);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Di,a);go.subVectors(t,r);let p=Di.dot(go),x=Ni.dot(go);if(x>=0&&p<=x)return e.copy(r);let M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Ni,o);let _=u*x-p*d;if(_<=0&&d-u>=0&&p-x>=0)return ql.subVectors(r,s),o=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(ql,o);let f=1/(_+M+h);return a=M*f,o=h*f,e.copy(n).addScaledVector(Di,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),gr.subVectors(this.max,ys),Ui.subVectors(t.a,ys),Fi.subVectors(t.b,ys),Oi.subVectors(t.c,ys),qn.subVectors(Fi,Ui),Yn.subVectors(Oi,Fi),hi.subVectors(Ui,Oi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!yo(e,Ui,Fi,Oi,gr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ui,Fi,Oi,gr))?!1:(_r.crossVectors(qn,Yn),e=[_r.x,_r.y,_r.z],yo(e,Ui,Fi,Oi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},In=[new V,new V,new V,new V,new V,new V,new V,new V],rn=new V,mr=new Mn,Ui=new V,Fi=new V,Oi=new V,qn=new V,Yn=new V,hi=new V,ys=new V,gr=new V,_r=new V,ui=new V;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);let o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ye=new V,xr=new Bt,Qh=0,Ae=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Us=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fs=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},jh=new Mn,Ms=new V,Mo=new V,$n=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Mo)),this.expandByPoint(Ms.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tu=0,Qe=new le,So=new pe,Bi=new V,Xe=new Mn,Ss=new Mn,be=new V,Be=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Fs:Us)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Xe.min,Ss.min),Xe.expandByPoint(be),be.addVectors(Xe.max,Ss.max),Xe.expandByPoint(be)):(Xe.expandByPoint(Ss.min),Xe.expandByPoint(Ss.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)be.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),be.add(Bi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new V,l[v]=new V;let c=new V,u=new V,d=new V,h=new Bt,p=new Bt,x=new Bt,M=new V,_=new V;function f(v,w,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,D),u.sub(c),d.sub(c),p.sub(h),x.sub(h);let O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(O),_.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(O),o[v].add(M),o[w].add(M),o[D].add(M),l[v].add(_),l[w].add(_),l[D].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let v=0,w=R.length;v<w;++v){let D=R[v],O=D.start,z=D.count;for(let H=O,N=O+z;H<N;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let L=new V,y=new V,S=new V,T=new V;function P(v){S.fromBufferAttribute(s,v),T.copy(S);let w=o[v];L.copy(w),L.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);let O=y.dot(l[v])<0?-1:1;a.setXYZW(v,L.x,L.y,L.z,O)}for(let v=0,w=R.length;v<w;++v){let D=R[v],O=D.start,z=D.count;for(let H=O,N=O+z;H<N;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let h=0,p=t.count;h<p;h+=3){let x=t.getX(h+0),M=t.getX(h+1),_=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,_),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new Ae(h,u,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=new V,eu=new V,nu=new Ot,qe=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bo.subVectors(n,e).cross(eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nu.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},iu=0,Dn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=as(),this.name="",this.type="Material",this.blending=is,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=ko,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qe().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Pn=new V,Eo=new V,vr=new V,yr=new V,qr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),yr.copy(this.origin).sub(Eo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=yr.dot(this.direction),l=-yr.dot(vr),c=yr.lengthSq(),u=Math.abs(1-a*a),d,h,p,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Eo).addScaledVector(vr,h),p}intersectSphere(t,e){if(t.radius<0)return null;Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,M=e.y-a.y,_=e.z-a.z,f=n.x-a.x,R=n.y-a.y,L=n.z-a.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(u),P,v,w,D,O,z,H,N,k,Z,Q,at;if(y>=S&&y>=T?(w=l,z=d,k=x,at=f,l>=0?(P=c,v=u,D=h,O=p,H=M,N=_,Z=R,Q=L):(P=u,v=c,D=p,O=h,H=_,N=M,Z=L,Q=R)):S>=T?(w=c,z=h,k=M,at=R,c>=0?(P=u,v=l,D=p,O=d,H=_,N=x,Z=L,Q=f):(P=l,v=u,D=d,O=p,H=x,N=_,Z=f,Q=L)):(w=u,z=p,k=_,at=L,u>=0?(P=l,v=c,D=d,O=h,H=x,N=M,Z=f,Q=R):(P=c,v=l,D=h,O=d,H=M,N=x,Z=R,Q=f)),w===0)return null;let J=P/w,nt=v/w,rt=1/w,Ct=D-J*z,Et=O-nt*z,ie=H-J*k,Yt=N-nt*k,zt=Z-J*at,K=Q-nt*at,et=zt*Yt-K*ie,vt=Ct*K-Et*zt,Ut=ie*Et-Yt*Ct;if(s){if(et<0||vt<0||Ut<0)return null}else if((et<0||vt<0||Ut<0)&&(et>0||vt>0||Ut>0))return null;let yt=et+vt+Ut;if(yt===0)return null;let Ht=rt*(et*z+vt*k+Ut*at);return(yt>0?Ht<0:Ht>0)?null:this.at(Ht/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yl=new le,di=new qr,Mr=new $n,Zl=new V,Sr=new V,br=new V,Er=new V,To=new V,Tr=new V,Jl=new V,wr=new V,Lt=class extends pe{constructor(t=new Be,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(To.fromBufferAttribute(d,t),a?Tr.addScaledVector(To,u):Tr.addScaledVector(To.sub(e),u))}e.add(Tr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(Mr.containsPoint(di.origin)===!1&&(di.intersectSphere(Mr,Zl)===null||di.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),di.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let _=h[x],f=a[_.materialIndex],R=Math.max(_.start,p.start),L=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let y=R,S=L;y<S;y+=3){let T=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=Ar(this,f,t,n,c,u,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let _=x,f=M;_<f;_+=3){let R=o.getX(_),L=o.getX(_+1),y=o.getX(_+2);s=Ar(this,a,t,n,c,u,d,R,L,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let _=h[x],f=a[_.materialIndex],R=Math.max(_.start,p.start),L=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=R,S=L;y<S;y+=3){let T=y,P=y+1,v=y+2;s=Ar(this,f,t,n,c,u,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let _=x,f=M;_<f;_+=3){let R=_,L=_+1,y=_+2;s=Ar(this,a,t,n,c,u,d,R,L,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function su(i,t,e,n,s,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ei,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,br),i.getVertexPosition(c,Er);let u=su(i,t,e,n,Sr,br,Er,Jl);if(u){let d=new V;Jn.getBarycoord(Jl,Sr,br,Er,d),s&&(u.uv=Jn.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new V,materialIndex:0};Jn.getNormal(Sr,br,Er,h.normal),u.face=h,u.barycoord=d}return u}var Os=class extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Te,u=Te,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zi=new le,$l=new le,Rr=[],Kl=new Mn,ru=new le,bs=new Lt,Es=new $n,Nn=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ru)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Kl.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(Kl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Es.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),$l.multiplyMatrices(n,zi),bs.matrixWorld=$l,bs.raycast(t,Rr);for(let a=0,o=Rr.length;a<o;a++){let l=Rr[a];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Os(new Float32Array(s*this.count),s,this.count,ga,je));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fi=new $n,au=new Bt(.5,.5),Cr=new V,Qi=class{constructor(t=new qe,e=new qe,n=new qe,s=new qe,r=new qe,a=new qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],M=r[9],_=r[10],f=r[11],R=r[12],L=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,p-u,f-x,S-R).normalize(),s[1].setComponents(c+a,p+u,f+x,S+R).normalize(),s[2].setComponents(c+o,p+d,f+M,S+L).normalize(),s[3].setComponents(c-o,p-d,f-M,S-L).normalize(),n)s[4].setComponents(l,h,_,y).normalize(),s[5].setComponents(c-l,p-h,f-_,S-y).normalize();else if(s[4].setComponents(c-l,p-h,f-_,S-y).normalize(),e===an)s[5].setComponents(c+l,p+h,f+_,S+y).normalize();else if(e===Yi)s[5].setComponents(l,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);let e=au.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bs=class extends Oe{constructor(t=[],e=ni,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends Oe{constructor(t,e,n=cn,s,r,a,o=Te,l=Te,c,u=_n,d=1){if(u!==_n&&u!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yr=class extends Kn{constructor(t,e=cn,n=ni,s,r,a=Te,o=Te,l,c=_n){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zs=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},on=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(d,2));function x(M,_,f,R,L,y,S,T,P,v,w){let D=y/P,O=S/v,z=y/2,H=S/2,N=T/2,k=P+1,Z=v+1,Q=0,at=0,J=new V;for(let nt=0;nt<Z;nt++){let rt=nt*O-H;for(let Ct=0;Ct<k;Ct++){let Et=Ct*D-z;J[M]=Et*R,J[_]=rt*L,J[f]=N,c.push(J.x,J.y,J.z),J[M]=0,J[_]=0,J[f]=T>0?1:-1,u.push(J.x,J.y,J.z),d.push(Ct/P),d.push(1-nt/v),Q+=1}}for(let nt=0;nt<v;nt++)for(let rt=0;rt<P;rt++){let Ct=h+rt+k*nt,Et=h+rt+k*(nt+1),ie=h+(rt+1)+k*(nt+1),Yt=h+(rt+1)+k*nt;l.push(Ct,Et,Yt),l.push(Et,ie,Yt),at+=6}o.addGroup(p,at,w),p+=at,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var He=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],x=0,M=[],_=n/2,f=0;R(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2));function R(){let y=new V,S=new V,T=0,P=(e-t)/n;for(let v=0;v<=r;v++){let w=[],D=v/r,O=D*(e-t)+t;for(let z=0;z<=s;z++){let H=z/s,N=H*l+o,k=Math.sin(N),Z=Math.cos(N);S.x=O*k,S.y=-D*n+_,S.z=O*Z,d.push(S.x,S.y,S.z),y.set(k,P,Z).normalize(),h.push(y.x,y.y,y.z),p.push(H,1-D),w.push(x++)}M.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let D=M[w][v],O=M[w+1][v],z=M[w+1][v+1],H=M[w][v+1];(t>0||w!==0)&&(u.push(D,O,H),T+=3),(e>0||w!==r-1)&&(u.push(O,z,H),T+=3)}c.addGroup(f,T,0),f+=T}function L(y){let S=x,T=new Bt,P=new V,v=0,w=y===!0?t:e,D=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,_*D,0),h.push(0,D,0),p.push(.5,.5),x++;let O=x;for(let z=0;z<=s;z++){let N=z/s*l+o,k=Math.cos(N),Z=Math.sin(N);P.x=w*Z,P.y=_*D,P.z=w*k,d.push(P.x,P.y,P.z),h.push(0,D,0),T.x=k*.5+.5,T.y=Z*.5*D+.5,p.push(T.x,T.y),x++}for(let z=0;z<s;z++){let H=S+z,N=O+z;y===!0?u.push(N,N+1,H):u.push(N+1,N,H),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class i extends Be{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new V,h=new Bt,p=new V,x=new V,M=new V,_=0,f=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:_=t[R+1].x-t[R].x,f=t[R+1].y-t[R].y,p.x=f*1,p.y=-_,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:_=t[R+1].x-t[R].x,f=t[R+1].y-t[R].y,p.x=f*1,p.y=-_,p.z=f*0,x.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(x)}for(let R=0;R<=e;R++){let L=n+R*u*s,y=Math.sin(L),S=Math.cos(L);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*S,a.push(d.x,d.y,d.z),h.x=R/e,h.y=T/(t.length-1),o.push(h.x,h.y);let P=l[3*T+0]*y,v=l[3*T+1],w=l[3*T+0]*S;c.push(P,v,w)}}for(let R=0;R<e;R++)for(let L=0;L<t.length-1;L++){let y=L+R*t.length,S=y,T=y+t.length,P=y+t.length+1,v=y+1;r.push(S,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Fn=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],x=[],M=[],_=[];for(let f=0;f<u;f++){let R=f*h-a;for(let L=0;L<c;L++){let y=L*d-r;x.push(y,-R,0),M.push(0,0,1),_.push(L/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){let L=R+c*f,y=R+c*(f+1),S=R+1+c*(f+1),T=R+1+c*f;p.push(L,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ye=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new V,h=new V,p=[],x=[],M=[],_=[];for(let f=0;f<=n;f++){let R=[],L=f/n,y=a+L*o,S=t*Math.cos(y),T=Math.sqrt(t*t-S*S),P=0;f===0&&a===0?P=.5/e:f===n&&l===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){let w=v/e,D=s+w*r;d.x=-T*Math.cos(D),d.y=S,d.z=T*Math.sin(D),x.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),_.push(w+P,1-L),R.push(c++)}u.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){let L=u[f][R+1],y=u[f][R],S=u[f+1][R],T=u[f+1][R+1];(f!==0||a>0)&&p.push(L,y,T),(f!==n-1||l<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new me(x,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ql(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ql(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=bi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Wc={clone:bi,merge:Ne},lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zr=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Je=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},On=class extends Je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Vs=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jr=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$r=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Po:r=t,o=2*e-n;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Po:a=t,l=2*n-e;break;case Lo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),M=x*x,_=M*x,f=-h*_+2*h*M-h*x,R=(1+h)*_+(-1.5-2*h)*M+(-.5+h)*x+1,L=(-1-p)*_+(1.5+p)*M+.5*x,y=p*_-p*M;for(let S=0;S!==o;++S)r[S]=f*a[u+S]+R*a[c+S]+L*a[l+S]+y*a[d+S];return r}},Qr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},jr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ta=class extends Qn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(n-e)/(s-e),M=1-x;for(let _=0;_!==o;++_)r[_]=a[c+_]*M+a[l+_]*x;return r}let h=o*2,p=t-1;for(let x=0;x!==o;++x){let M=a[c+x],_=a[l+x],f=p*h+x*2,R=d[f],L=d[f+1],y=t*h+x*2,S=u[y],T=u[y+1],P=uu(n,e,R,S,s);r[x]=Xc(P,M,L,T,_)}return r}};function Xc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function hu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function uu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Xc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vi(e,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vi(t.times,Array),values:Vi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wo(t.settings)&&(n.settings={inTangents:Vi(t.settings.inTangents,Array),outTangents:Vi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Gr:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break;case Co:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return Lr;case this.InterpolantFactoryMethodBezier:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wo(this.settings)&&(jl(this.settings.inTangents,t),jl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Th(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,p=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[h+x]||M!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Gr;var jn=class extends $e{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Rs;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="color";var na=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="number";var ia=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hs=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ia(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends $e{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Rs;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="vector";var Ts={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(tc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!tc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ra=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qc=new ra,Gs=class{constructor(t){this.manager=t!==void 0?t:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ks=class extends xi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ao=new le,ec=new V,nc=new V,ji=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=ke,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ao,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Yi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ir=new V,Pr=new vn,mn=new V,Ws=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ir,Pr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Pr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ir,Pr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Pr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zn=new V,ic=new Bt,sc=new Bt,Ee=class extends Ws{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mi*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Do=class extends ji{constructor(){super(new Ee(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=mi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Xs=class extends xi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Do}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},No=class extends ji{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0}},vi=class extends xi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new No}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ts=class extends Ws{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uo=class extends ji{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends xi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Uo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ro=new WeakMap,qs=class extends Gs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ts.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Ro.has(a)===!0?(s&&s(Ro.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ts.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Ro.set(l,c),Ts.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Ts.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hi=-90,Gi=1,aa=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(Hi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(Hi,Gi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Hi,Gi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Hi,Gi,t,e);o.layers=this.layers,this.add(o);let l=new Ee(Hi,Gi,t,e);l.layers=this.layers,this.add(l);let c=new Ee(Hi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},oa=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ll="\\[\\]\\.:\\/",du=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",fu="[^"+ll.replace("\\.","")+"]",pu=/((?:WC+[\/:])*)/.source.replace("WC",cl),mu=/(WCOD+)?/.source.replace("WCOD",fu),gu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),_u=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),xu=new RegExp("^"+pu+mu+gu+_u+"$"),vu=["material","materials","bones","map"],Fo=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(du,"")}static parseTrackName(t){let e=xu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Fo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);var ml=class ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ml.prototype.isMatrix2=!0;var Oo=ml;function hl(i,t,e,n){let s=yu(n);switch(e){case el:return i*t;case ga:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case ri:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case nl:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case va:return i*t*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case ba:return Math.max(i,16)*Math.max(t,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case tr:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case er:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yu(i){switch(i){case ke:case Ko:return{byteLength:1,components:1};case ss:case Qo:case hn:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case cn:case fa:case je:return{byteLength:4,components:1};case jo:case tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ph(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){let x=d[h],M=d[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){let M=d[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Iu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Nu,aomap_pars_fragment:Uu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:$u,common:Ku,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:yd,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:vd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:bd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:wd,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,lightprobes_pars_fragment:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Nd,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Hd,morphcolor_vertex:Gd,morphnormal_vertex:kd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:xf,specularmap_fragment:vf,specularmap_pars_fragment:yf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Rf,background_vert:Cf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Nf,depth_vert:Uf,depth_frag:Ff,distance_vert:Of,distance_frag:Bf,equirect_vert:zf,equirect_frag:Vf,linedashed_vert:Hf,linedashed_frag:Gf,meshbasic_vert:kf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:Qf,meshphysical_vert:jf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},_t={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Tn={basic:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ne([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ne([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Dt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ne([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ne([_t.points,_t.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ne([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ne([_t.common,_t.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ne([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ne([_t.sprite,_t.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ne([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ne([_t.lights,_t.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Tn.physical={uniforms:Ne([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Qa={r:0,b:0,g:0},cp=new le,mh=new Ot;mh.set(-1,0,0,0,1,0,0,0,1);function hp(i,t,e,n,s,r){let a=new Dt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){let y=R.backgroundBlurriness>0;L=t.get(L,y)}return L}function x(R){let L=!1,y=p(R);y===null?_(a,o):y&&y.isColor&&(_(y,1),L=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(R,L){let y=p(L);y&&(y.isCubeTexture||y.mapping===Zs)?(c===void 0&&(c=new Lt(new on(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:bi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(L.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mh),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ne,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new Fn(2,2),new Ze({name:"BackgroundMaterial",uniforms:bi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function _(R,L){R.getRGB(Qa,ol(i)),e.buffers.color.setClear(Qa.r,Qa.g,Qa.b,L,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,L=1){a.set(R),o=L,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,_(a,o)},render:x,addToRenderList:M,dispose:f}}function up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(O,z,H,N,k){let Z=!1,Q=d(O,N,H,z);r!==Q&&(r=Q,c(r.object)),Z=p(O,N,H,k),Z&&x(O,N,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(O,z,H,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function d(O,z,H,N){let k=N.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let Q=O.isInstancedMesh===!0?O.id:0,at=Z[Q];at===void 0&&(at={},Z[Q]=at);let J=at[H.id];J===void 0&&(J={},at[H.id]=J);let nt=J[k];return nt===void 0&&(nt=h(l()),J[k]=nt),nt}function h(O){let z=[],H=[],N=[];for(let k=0;k<e;k++)z[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:N,object:O,attributes:{},index:null}}function p(O,z,H,N){let k=r.attributes,Z=z.attributes,Q=0,at=H.getAttributes();for(let J in at)if(at[J].location>=0){let rt=k[J],Ct=Z[J];if(Ct===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(Ct=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(Ct=O.instanceColor)),rt===void 0||rt.attribute!==Ct||Ct&&rt.data!==Ct.data)return!0;Q++}return r.attributesNum!==Q||r.index!==N}function x(O,z,H,N){let k={},Z=z.attributes,Q=0,at=H.getAttributes();for(let J in at)if(at[J].location>=0){let rt=Z[J];rt===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor));let Ct={};Ct.attribute=rt,rt&&rt.data&&(Ct.data=rt.data),k[J]=Ct,Q++}r.attributes=k,r.attributesNum=Q,r.index=N}function M(){let O=r.newAttributes;for(let z=0,H=O.length;z<H;z++)O[z]=0}function _(O){f(O,0)}function f(O,z){let H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[O]=1,N[O]===0&&(i.enableVertexAttribArray(O),N[O]=1),k[O]!==z&&(i.vertexAttribDivisor(O,z),k[O]=z)}function R(){let O=r.newAttributes,z=r.enabledAttributes;for(let H=0,N=z.length;H<N;H++)z[H]!==O[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function L(O,z,H,N,k,Z,Q){Q===!0?i.vertexAttribIPointer(O,z,H,k,Z):i.vertexAttribPointer(O,z,H,N,k,Z)}function y(O,z,H,N){M();let k=N.attributes,Z=H.getAttributes(),Q=z.defaultAttributeValues;for(let at in Z){let J=Z[at];if(J.location>=0){let nt=k[at];if(nt===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(nt=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(nt=O.instanceColor)),nt!==void 0){let rt=nt.normalized,Ct=nt.itemSize,Et=t.get(nt);if(Et===void 0)continue;let ie=Et.buffer,Yt=Et.type,zt=Et.bytesPerElement,K=Yt===i.INT||Yt===i.UNSIGNED_INT||nt.gpuType===fa;if(nt.isInterleavedBufferAttribute){let et=nt.data,vt=et.stride,Ut=nt.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<J.locationSize;yt++)f(J.location+yt,et.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<J.locationSize;yt++)_(J.location+yt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let yt=0;yt<J.locationSize;yt++)L(J.location+yt,Ct/J.locationSize,Yt,rt,vt*zt,(Ut+Ct/J.locationSize*yt)*zt,K)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)f(J.location+et,nt.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<J.locationSize;et++)_(J.location+et);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let et=0;et<J.locationSize;et++)L(J.location+et,Ct/J.locationSize,Yt,rt,Ct*zt,Ct/J.locationSize*et*zt,K)}}else if(Q!==void 0){let rt=Q[at];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(J.location,rt);break;case 3:i.vertexAttrib3fv(J.location,rt);break;case 4:i.vertexAttrib4fv(J.location,rt);break;default:i.vertexAttrib1fv(J.location,rt)}}}}R()}function S(){w();for(let O in n){let z=n[O];for(let H in z){let N=z[H];for(let k in N){let Z=N[k];for(let Q in Z)u(Z[Q].object),delete Z[Q];delete N[k]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let z=n[O.id];for(let H in z){let N=z[H];for(let k in N){let Z=N[k];for(let Q in Z)u(Z[Q].object),delete Z[Q];delete N[k]}}delete n[O.id]}function P(O){for(let z in n){let H=n[z];for(let N in H){let k=H[N];if(k[O.id]===void 0)continue;let Z=k[O.id];for(let Q in Z)u(Z[Q].object),delete Z[Q];delete k[O.id]}}}function v(O){for(let z in n){let H=n[z],N=O.isInstancedMesh===!0?O.id:0,k=H[N];if(k!==void 0){for(let Z in k){let Q=k[Z];for(let at in Q)u(Q[at].object),delete Q[at];delete k[Z]}delete H[N],Object.keys(H).length===0&&delete n[z]}}}function w(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:_,disableUnusedAttributes:R}}function dp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ke&&P!==je&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:y,maxSamples:S,samples:T}}function pp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new qe,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let x=d.clippingPlanes,M=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!_)r?u(null):c();else{let R=r?0:n,L=R*4,y=f.clippingState||null;l.value=y,y=u(x,h,L,p);for(let S=0;S!==L;++S)y[S]=e[S];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,x){let M=d!==null?d.length:0,_=null;if(M!==0){if(_=l.value,x!==!0||_===null){let f=p+M*4,R=h.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<f)&&(_=new Float32Array(f));for(let L=0,y=p;L!==M;++L,y+=4)a.copy(d[L]).applyMatrix4(R,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}var ls=4,mp=6,gp=20,_p=256,ir=new ts,Yc=new Dt,gl=null,_l=0,xl=0,vl=!1,xp=new V,Ei=new V,hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=xp}=r;gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,_l,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:hn,format:tn,colorSpace:Cs,depthBuffer:!1},s=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vp(r)),this._blurMaterial=Mp(r,t,e),this._ggxMaterial=yp(r,t,e)}return s}_compileMaterial(t){let e=new Lt(new Be,t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,s,r){let l=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Yc),d.toneMapping=ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new on,new _i({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,_=M.material,f=!1,R=t.background;R?R.isColor&&(_.color.copy(R),t.background=null,f=!0):(_.color.copy(Yc),f=!0);for(let L=0;L<6;L++){let y=L%3;y===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):y===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));let S=this._cubeSize;os(s,y*S,L>2?S:0,S,S),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ni||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:x}=this,M=this._sizeLods[n],_=3*M*(n>x-ls?n-x+ls:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,os(r,_,f,3*M,2*M),s.setRenderTarget(r),s.render(o,ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,os(t,_,f,3*M,2*M),s.setRenderTarget(t),s.render(o,ir)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ls?s-this._lodMax+ls:0),h=4*(this._cubeSize-u);os(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,ir)}};function vp(i){let t=[],e=[],n=i,s=i-ls+1+mp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,x=new Float32Array(p*h*d),M=new Float32Array(p*h*d);for(let f=0;f<d;f++){let R=f%3*2/3-1,L=f>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(y,p*h*f);for(let S=0;S<h;S++){let T=u[S*2]*2-1,P=u[S*2+1]*2-1;f===0?Ei.set(1,P,T):f===1?Ei.set(-T,1,-P):f===2?Ei.set(-T,P,1):f===3?Ei.set(-1,P,-T):f===4?Ei.set(-T,-1,P):Ei.set(T,P,-1),Ei.toArray(M,(f*h+S)*p)}}let _=new Be;_.setAttribute("position",new Ae(x,p)),_.setAttribute("outputDirection",new Ae(M,p)),e.push(new Lt(_,null)),n>ls&&n--}return{lodMeshes:e,sizeLods:t}}function Zc(i,t,e){let n=new Ve(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yp(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Mp(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Jc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $c(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var to=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:bn});r.uniforms.tEquirect.value=e;let a=new Lt(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Re),new aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Sp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ha||p===ua)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new to(x.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===ha||p===ua,M=p===ni||p===Si;if(x||M){let _=e.get(h),f=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new hs(i)),_=x?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{let R=h.image;return x&&R&&R.height>0||M&&R&&l(R)?(n===null&&(n=new hs(i)),_=x?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function o(h,p){return p===ha?h.mapping=ni:p===ua&&(h.mapping=Si),h}function l(h){let p=0,x=6;for(let M=0;M<x;M++)h[M]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ep(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,x=d.attributes.position,M=0;if(x===void 0)return;if(p!==null){let R=p.array;M=p.version;for(let L=0,y=R.length;L<y;L+=3){let S=R[L+0],T=R[L+1],P=R[L+2];h.push(S,T,T,P,P,S)}}else{let R=x.array;M=x.version;for(let L=0,y=R.length/3-1;L<y;L+=3){let S=L+0,T=L+1,P=L+2;h.push(S,T,T,P,P,S)}}let _=new(x.count>=65535?Fs:Us)(h,1);_.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,_)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Tp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let M=0;for(let _=0;_<p;_++)M+=h[_];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ap(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],L=0;p===!0&&(L=1),x===!0&&(L=2),M===!0&&(L=3);let y=o.attributes.position.count*L,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*d),P=new Ls(T,y,S,d);P.type=je,P.needsUpdate=!0;let v=L*4;for(let D=0;D<d;D++){let O=_[D],z=f[D],H=R[D],N=y*S*4*D;for(let k=0;k<O.count;k++){let Z=k*v;p===!0&&(s.fromBufferAttribute(O,k),T[N+Z+0]=s.x,T[N+Z+1]=s.y,T[N+Z+2]=s.z,T[N+Z+3]=0),x===!0&&(s.fromBufferAttribute(z,k),T[N+Z+4]=s.x,T[N+Z+5]=s.y,T[N+Z+6]=s.z,T[N+Z+7]=0),M===!0&&(s.fromBufferAttribute(H,k),T[N+Z+8]=s.x,T[N+Z+9]=s.y,T[N+Z+10]=s.z,T[N+Z+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new Bt(y,S)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rp(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Cp={[Wo]:"LINEAR_TONE_MAPPING",[Xo]:"REINHARD_TONE_MAPPING",[qo]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[Zo]:"AGX_TONE_MAPPING",[Jo]:"NEUTRAL_TONE_MAPPING",[Yo]:"CUSTOM_TONE_MAPPING"};function Ip(i,t,e,n,s,r){let a=new Ve(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Be;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let u=new Zr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(c,u),h=new ts(-1,1,1,-1,0,1),p=null,x=null,M=!1,_,f=null,R=[],L=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<R.length;T++){let P=R[T];P.setSize&&P.setSize(y,S)}},this.setEffects=function(y){R=y,L=R.length>0&&R[0].isRenderPass===!0;let S=a.width,T=a.height;R.length>0&&o===null&&(o=new Ve(S,T,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Ve(S,T,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<R.length;P++){let v=R[P];v.setSize&&v.setSize(S,T)}},this.begin=function(y,S){if(M||y.toneMapping===ln&&R.length===0)return!1;if(f=S,S!==null){let T=S.width,P=S.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return L===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=ln,!0},this.hasRenderPass=function(){return L},this.end=function(y,S){y.toneMapping=_,M=!0;let T=a,P=o;for(let v=0;v<R.length;v++){let w=R[v];w.enabled!==!1&&(w.render(y,P,T,S),w.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,u.defines={},Jt.getTransfer(p)===ne&&(u.defines.SRGB_TRANSFER="");let v=Cp[x];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(f),y.render(d,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var gh=new Oe,Sl=new Kn(1,1),_h=new Ls,xh=new Xr,vh=new Bs,Kc=[],Qc=[],jc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Se(e,n)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Se(e,n)}}function Op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Se(e,n)}}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=e.isReversedDepthBuffer()?Ka:$a,r=Sl):r=gh,e.setTexture2D(t||r,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xh,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vh,s)}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_h,s)}function $p(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Dp;case 35666:return Np;case 35674:return Up;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return kp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Kp(i,t){i.uniform1fv(this.addr,t)}function Qp(i,t){let e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function jp(i,t){let e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function tm(i,t){let e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function em(i,t){let e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nm(i,t){let e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function im(i,t){let e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sm(i,t){i.uniform1iv(this.addr,t)}function rm(i,t){i.uniform2iv(this.addr,t)}function am(i,t){i.uniform3iv(this.addr,t)}function om(i,t){i.uniform4iv(this.addr,t)}function lm(i,t){i.uniform1uiv(this.addr,t)}function cm(i,t){i.uniform2uiv(this.addr,t)}function hm(i,t){i.uniform3uiv(this.addr,t)}function um(i,t){i.uniform4uiv(this.addr,t)}function dm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sl:a=gh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xh,r[a])}function pm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vh,r[a])}function mm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_h,r[a])}function gm(i){switch(i){case 5126:return Kp;case 35664:return Qp;case 35665:return jp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}var bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(e,c===void 0?new bl(o,i,t):new El(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Tl(o),nh(e,d)),e=d}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_m(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ih(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xm=37297,vm=0;function ym(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var sh=new Ot;function Mm(i){Jt._getMatrix(sh,Jt.workingColorSpace,i);let t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ym(i.getShaderSource(t),o)}else return r}function Sm(i,t){let e=Mm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var bm={[Wo]:"Linear",[Xo]:"Reinhard",[qo]:"Cineon",[Ys]:"ACESFilmic",[Zo]:"AgX",[Jo]:"Neutral",[Yo]:"Custom"};function Em(i,t){let e=bm[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ja=new V;function Tm(){Jt.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Am(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rr(i){return i!==""}function ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(Cm,Pm)}var Im=new Map;function Pm(i,t){let e=kt[t];if(e===void 0){let n=Im.get(t);if(n!==void 0)e=kt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wl(e)}var Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(Lm,Dm)}function Dm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Nm={[yi]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function Um(i){return Nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fm={[ni]:"ENVMAP_TYPE_CUBE",[Si]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function Om(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bm={[Si]:"ENVMAP_MODE_REFRACTION"};function zm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vm={[ca]:"ENVMAP_BLENDING_MULTIPLY",[wc]:"ENVMAP_BLENDING_MIX",[Ac]:"ENVMAP_BLENDING_ADD"};function Hm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vm[i.combine]||"ENVMAP_BLENDING_NONE"}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function km(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Um(e),c=Om(e),u=zm(e),d=Hm(e),h=Gm(e),p=wm(e),x=Am(r),M=s.createProgram(),_,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(rr).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(rr).join(`
`),f.length>0&&(f+=`
`)):(_=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),f=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?kt.tonemapping_pars_fragment:"",e.toneMapping!==ln?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Sm("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),a=wl(a),a=ah(a,e),a=oh(a,e),o=wl(o),o=ah(o,e),o=oh(o,e),a=lh(a),o=lh(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let L=R+_+a,y=R+f+o,S=ih(s,s.VERTEX_SHADER,L),T=ih(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(O){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",H=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(T)||"",k=z.trim(),Z=H.trim(),Q=N.trim(),at=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,T);else{let nt=rh(s,S,"vertex"),rt=rh(s,T,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+nt+`
`+rt)}else k!==""?Pt("WebGLProgram: Program Info Log:",k):(Z===""||Q==="")&&(J=!1);J&&(O.diagnostics={runnable:at,programLog:k,vertexShader:{log:Z,prefix:_},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(S),s.deleteShader(T),v=new cs(s,M),w=Rm(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,xm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}var Wm=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}};function Xm(i){return i===ri||i===tr||i===er}function qm(i,t,e,n,s,r){let a=new Ds,o=new Al,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,D,O,z,H){let N=O.fog,k=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||Z,Q),J=at&&at.mapping===Zs?at.image.height:null,nt=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Pt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=rt!==void 0?rt.length:0,Et=0;k.morphAttributes.position!==void 0&&(Et=1),k.morphAttributes.normal!==void 0&&(Et=2),k.morphAttributes.color!==void 0&&(Et=3);let ie,Yt,zt,K;if(nt){let se=Tn[nt];ie=se.vertexShader,Yt=se.fragmentShader}else{ie=v.vertexShader,Yt=v.fragmentShader;let se=o.getVertexShaderStage(v),Kt=o.getFragmentShaderStage(v);o.update(v,se,Kt),zt=se.id,K=Kt.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Ht=!!v.map,de=!!v.matcap,Wt=!!at,$t=!!v.aoMap,te=!!v.lightMap,Gt=!!v.bumpMap&&v.wireframe===!1,ae=!!v.normalMap,ge=!!v.displacementMap,Ie=!!v.emissiveMap,Zt=!!v.metalnessMap,xt=!!v.roughnessMap,F=v.anisotropy>0,fe=v.clearcoat>0,Xt=v.dispersion>0,A=v.retroreflectivity>0,g=v.iridescence>0,B=v.sheen>0,W=v.transmission>0,Y=F&&!!v.anisotropyMap,ct=fe&&!!v.clearcoatMap,ut=fe&&!!v.clearcoatNormalMap,$=fe&&!!v.clearcoatRoughnessMap,tt=g&&!!v.iridescenceMap,ht=g&&!!v.iridescenceThicknessMap,Rt=B&&!!v.sheenColorMap,lt=B&&!!v.sheenRoughnessMap,dt=!!v.specularMap,wt=!!v.specularColorMap,It=!!v.specularIntensityMap,Ft=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,ft=!!v.gradientMap,j=!!v.alphaMap,pt=v.alphaTest>0,gt=!!v.alphaHash,it=!!v.extensions,At=ln;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(At=i.toneMapping);let bt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:Yt,defines:v.defines,customVertexShaderID:zt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:de,envMap:Wt,envMapMode:Wt&&at.mapping,envMapCubeUVHeight:J,aoMap:$t,lightMap:te,bumpMap:Gt,normalMap:ae,displacementMap:ge,emissiveMap:Ie,normalMapObjectSpace:ae&&v.normalMapType===Ic,normalMapTangentSpace:ae&&v.normalMapType===nr,packedNormalMap:ae&&v.normalMapType===nr&&Xm(v.normalMap.format),metalnessMap:Zt,roughnessMap:xt,anisotropy:F,anisotropyMap:Y,clearcoat:fe,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:$,dispersion:Xt,retroreflection:A,iridescence:g,iridescenceMap:tt,iridescenceThicknessMap:ht,sheen:B,sheenColorMap:Rt,sheenRoughnessMap:lt,specularMap:dt,specularColorMap:wt,specularIntensityMap:It,transmission:W,transmissionMap:Ft,thicknessMap:U,gradientMap:ft,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:gt,combine:v.combine,mapUv:Ht&&x(v.map.channel),aoMapUv:$t&&x(v.aoMap.channel),lightMapUv:te&&x(v.lightMap.channel),bumpMapUv:Gt&&x(v.bumpMap.channel),normalMapUv:ae&&x(v.normalMap.channel),displacementMapUv:ge&&x(v.displacementMap.channel),emissiveMapUv:Ie&&x(v.emissiveMap.channel),metalnessMapUv:Zt&&x(v.metalnessMap.channel),roughnessMapUv:xt&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:ct&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(v.sheenRoughnessMap.channel),specularMapUv:dt&&x(v.specularMap.channel),specularColorMapUv:wt&&x(v.specularColorMap.channel),specularIntensityMapUv:It&&x(v.specularIntensityMap.channel),transmissionMapUv:Ft&&x(v.transmissionMap.channel),thicknessMapUv:U&&x(v.thicknessMap.channel),alphaMapUv:j&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ae||F),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Ht||j),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ne,decodeVideoTextureEmissive:Ie&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ge,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function _(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(f(w,v),R(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function f(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function R(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function L(v){let w=p[v.type],D;if(w){let O=Tn[w];D=Wc.clone(O.uniforms)}else D=v.uniforms;return D}function y(v,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new km(i,w,v,s),c.push(D),u.set(w,D)),D}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:P}}function Ym(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,M,_,f){let R=i[t];return R===void 0?(R={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:_,group:f},i[t]=R):(R.id=h.id,R.object=h,R.geometry=p,R.material=x,R.materialVariant=a(h),R.groupOrder=M,R.renderOrder=h.renderOrder,R.z=_,R.group=f),t++,R}function l(h,p,x,M,_,f,R){R.reversedDepth===!0&&(_=-_);let L=o(h,p,x,M,_,f);x.transmission>0?n.push(L):x.transparent===!0?s.push(L):e.push(L)}function c(h,p,x,M,_,f){let R=o(h,p,x,M,_,f);x.transmission>0?n.unshift(R):x.transparent===!0?s.unshift(R):e.unshift(R)}function u(h,p){e.length>1&&e.sort(h||Zm),n.length>1&&n.sort(p||hh),s.length>1&&s.sort(p||hh)}function d(){for(let h=t,p=i.length;h<p;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new uh,i.set(n,[a])):s>=r.length?(a=new uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Dt};break;case"SpotLight":e={position:new V,direction:new V,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qm=0;function jm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new le,a=new le;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,x=0,M=0,_=0,f=0,R=0,L=0,y=0,S=0,T=0,P=0,v=0,w=0,D=0;c.sort(jm);for(let z=0,H=c.length;z<H;z++){let N=c[z],k=N.color,Z=N.intensity,Q=N.distance,at=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ri?at=N.shadow.map.texture:at=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*Z,d+=k.g*Z,h+=k.b*Z;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Z);D++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,rt=e.get(N);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[x]=rt,n.sunShadowMap[x]=at;let Ct=nt.getViewportCount();for(let Et=0;Et<Ct;Et++)n.sunShadowMatrix[M+Et]=nt.getMatrix(Et),n.sunShadowCascade[M+Et]=nt._cascadeData[Et];M+=Ct,x++}n.sun[p]=J,p++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,rt=e.get(N);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[_]=rt,n.directionalShadowMap[_]=at,n.directionalShadowMatrix[_]=N.shadow.matrix,S++}n.directional[_]=J,_++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(k).multiplyScalar(Z),J.distance=Q,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[R]=J;let nt=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,nt.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[R]=nt.matrix,N.castShadow){let rt=e.get(N);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[R]=rt,n.spotShadowMap[R]=at,P++}R++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(k).multiplyScalar(Z),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[L]=J,L++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let nt=N.shadow,rt=e.get(N);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[f]=rt,n.pointShadowMap[f]=at,n.pointShadowMatrix[f]=N.shadow.matrix,T++}n.point[f]=J,f++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(Z),J.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[y]=J,y++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let O=n.hash;(O.sunLength!==p||O.directionalLength!==_||O.pointLength!==f||O.spotLength!==R||O.rectAreaLength!==L||O.hemiLength!==y||O.numSunShadows!==x||O.numDirectionalShadows!==S||O.numPointShadows!==T||O.numSpotShadows!==P||O.numSpotMaps!==v||O.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=_,n.spot.length=R,n.rectArea.length=L,n.point.length=f,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=D,O.sunLength=p,O.directionalLength=_,O.pointLength=f,O.spotLength=R,O.rectAreaLength=L,O.hemiLength=y,O.numSunShadows=x,O.numDirectionalShadows=S,O.numPointShadows=T,O.numSpotShadows=P,O.numSpotMaps=v,O.numLightProbes=D,n.version=Qm++)}function l(c,u){let d=0,h=0,p=0,x=0,M=0,_=0,f=u.matrixWorldInverse;for(let R=0,L=c.length;R<L;R++){let y=c[R];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(y.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),x++}else if(y.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function dh(i){let t=new tg(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new dh(i),t.set(s,[o])):r>=a.length?(o=new dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],rg=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],fh=new le,sr=new V,Ml=new V;function ag(i,t,e){let n=new Qi,s=new Bt,r=new Bt,a=new ue,o=new Jr,l=new $r,c={},u=e.maxTextureSize,d={[ei]:Ce,[Ce]:ei,[Ge]:Ge},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Be;x.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Lt(x,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yi;let f=this.type;this.render=function(T,P,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===oc&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yi);let w=i.getRenderTarget(),D=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=f!==this.type;H&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=T.length;N<k;N++){let Z=T[N],Q=Z.shadow;if(Q===void 0){Pt("WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let at=Q.getFrameExtents();s.multiply(at),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,Q.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=J,Q.map===null||H===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ns){if(Z.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ve(s.x,s.y,{format:ri,type:hn,minFilter:Re,magFilter:Re,generateMipmaps:!1}),Q.map.texture.name=Z.name+".shadowMap",Q.map.depthTexture=new Kn(s.x,s.y,je),Q.map.depthTexture.name=Z.name+".shadowMapDepth",Q.map.depthTexture.format=_n,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Te,Q.map.depthTexture.magFilter=Te}else Z.isPointLight?(Q.map=new to(s.x),Q.map.depthTexture=new Yr(s.x,cn)):(Q.map=new Ve(s.x,s.y),Q.map.depthTexture=new Kn(s.x,s.y,cn)),Q.map.depthTexture.name=Z.name+".shadowMap",Q.map.depthTexture.format=_n,this.type===yi?(Q.map.depthTexture.compareFunction=J?Ka:$a,Q.map.depthTexture.minFilter=Re,Q.map.depthTexture.magFilter=Re):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Te,Q.map.depthTexture.magFilter=Te);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let nt=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();Z.isPointLight!==!0&&Q.updateMatrices(Z,v);for(let rt=0;rt<nt;rt++){let Ct=Q.getCamera(rt);if(Z.isPointLight){let Et=Q.camera,ie=Q.matrix,Yt=Z.distance||Et.far;Yt!==Et.far&&(Et.far=Yt,Et.updateProjectionMatrix()),sr.setFromMatrixPosition(Z.matrixWorld),Et.position.copy(sr),Ml.copy(Et.position),Ml.add(sg[rt]),Et.up.copy(rg[rt]),Et.lookAt(Ml),Et.updateMatrixWorld(),ie.makeTranslation(-sr.x,-sr.y,-sr.z),fh.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(fh,Et.coordinateSystem,Et.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(Q.map),i.clear());let Et=Q.getViewport(rt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),z.viewport(a)}n=Q.getFrustum(rt),y(P,v,Ct,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===ns&&R(Q,v),Q.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(w,D,O)};function R(T,P){let v=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ve(s.x,s.y,{format:ri,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,p,M,null)}function L(T,P,v,w){let D=null,O=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)D=O;else if(D=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=D.uuid,H=P.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let k=N[H];k===void 0&&(k=D.clone(),N[H]=k,P.addEventListener("dispose",S)),D=k}if(D.visible=P.visible,D.wireframe=P.wireframe,w===ns?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:d[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=i.properties.get(D);z.light=v}return D}function y(T,P,v,w,D){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ns)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let H=t.update(T),N=T.material;if(Array.isArray(N)){let k=H.groups;for(let Z=0,Q=k.length;Z<Q;Z++){let at=k[Z],J=N[at.materialIndex];if(J&&J.visible){let nt=L(T,J,w,D);T.onBeforeShadow(i,T,P,v,H,nt,at),i.renderBufferDirect(v,null,H,nt,T,at),T.onAfterShadow(i,T,P,v,H,nt,at)}}}else if(N.visible){let k=L(T,N,w,D);T.onBeforeShadow(i,T,P,v,H,k,null),i.renderBufferDirect(v,null,H,k,T,null),T.onAfterShadow(i,T,P,v,H,k,null)}}let z=T.children;for(let H=0,N=z.length;H<N;H++)y(z[H],P,v,w,D)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],D=T.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function og(i,t){function e(){let U=!1,ft=new ue,j=null,pt=new ue(0,0,0,0);return{setMask:function(gt){j!==gt&&!U&&(i.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){U=gt},setClear:function(gt,it,At,bt,se){se===!0&&(gt*=bt,it*=bt,At*=bt),ft.set(gt,it,At,bt),pt.equals(ft)===!1&&(i.clearColor(gt,it,At,bt),pt.copy(ft))},reset:function(){U=!1,j=null,pt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,j=null,pt=null,gt=null;return{setReversed:function(it){if(ft!==it){let At=t.get("EXT_clip_control");it?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ft=it;let bt=gt;gt=null,this.setClear(bt)}},getReversed:function(){return ft},setTest:function(it){it?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(it){j!==it&&!U&&(i.depthMask(it),j=it)},setFunc:function(it){if(ft&&(it=Gc[it]),pt!==it){switch(it){case Nr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case Br:i.depthFunc(i.GEQUAL);break;case zr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){U=it},setClear:function(it){gt!==it&&(gt=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,j=null,pt=null,gt=null,ft=!1}}}function s(){let U=!1,ft=null,j=null,pt=null,gt=null,it=null,At=null,bt=null,se=null;return{setTest:function(Kt){U||(Kt?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Kt){ft!==Kt&&!U&&(i.stencilMask(Kt),ft=Kt)},setFunc:function(Kt,ze,Pe){(j!==Kt||pt!==ze||gt!==Pe)&&(i.stencilFunc(Kt,ze,Pe),j=Kt,pt=ze,gt=Pe)},setOp:function(Kt,ze,Pe){(it!==Kt||At!==ze||bt!==Pe)&&(i.stencilOp(Kt,ze,Pe),it=Kt,At=ze,bt=Pe)},setLocked:function(Kt){U=Kt},setClear:function(Kt){se!==Kt&&(i.clearStencil(Kt),se=Kt)},reset:function(){U=!1,ft=null,j=null,pt=null,gt=null,it=null,At=null,bt=null,se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,x=[],M=null,_=!1,f=null,R=null,L=null,y=null,S=null,T=null,P=null,v=new Dt(0,0,0),w=0,D=!1,O=null,z=null,H=null,N=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,at=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=at>=1):J.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=at>=2);let nt=null,rt={},Ct=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),ie=new ue().fromArray(Ct),Yt=new ue().fromArray(Et);function zt(U,ft,j,pt){let gt=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<j;At++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ft+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return it}let K={};K[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Xi),Gt(!1),ae(Bo),et(i.CULL_FACE),$t(bn);function et(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function vt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ut(U,ft){return h[U]!==ft?(i.bindFramebuffer(U,ft),h[U]=ft,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function yt(U,ft){let j=x,pt=!1;if(U){j=p.get(ft),j===void 0&&(j=[],p.set(ft,j));let gt=U.textures;if(j.length!==gt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let it=0,At=gt.length;it<At;it++)j[it]=i.COLOR_ATTACHMENT0+it;j.length=gt.length,pt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,pt=!0);pt&&i.drawBuffers(j)}function Ht(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let de={[Mi]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};de[uc]=i.MIN,de[dc]=i.MAX;let Wt={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(U,ft,j,pt,gt,it,At,bt,se,Kt){if(U===bn){_===!0&&(vt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),U!==lc){if(U!==f||Kt!==D){if((R!==Mi||S!==Mi)&&(i.blendEquation(i.FUNC_ADD),R=Mi,S=Mi),Kt)switch(U){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",U);break}else switch(U){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vo:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",U);break}L=null,y=null,T=null,P=null,v.set(0,0,0),w=0,f=U,D=Kt}return}gt=gt||ft,it=it||j,At=At||pt,(ft!==R||gt!==S)&&(i.blendEquationSeparate(de[ft],de[gt]),R=ft,S=gt),(j!==L||pt!==y||it!==T||At!==P)&&(i.blendFuncSeparate(Wt[j],Wt[pt],Wt[it],Wt[At]),L=j,y=pt,T=it,P=At),(bt.equals(v)===!1||se!==w)&&(i.blendColor(bt.r,bt.g,bt.b,se),v.copy(bt),w=se),f=U,D=!1}function te(U,ft){U.side===Ge?vt(i.CULL_FACE):et(i.CULL_FACE);let j=U.side===Ce;ft&&(j=!j),Gt(j),U.blending===is&&U.transparent===!1?$t(bn):$t(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pt=U.stencilWrite;o.setTest(pt),pt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function ae(U){U!==rc?(et(i.CULL_FACE),U!==z&&(U===Bo?i.cullFace(i.BACK):U===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),z=U}function ge(U){U!==H&&(Q&&i.lineWidth(U),H=U)}function Ie(U,ft,j){U?(et(i.POLYGON_OFFSET_FILL),(N!==ft||k!==j)&&(N=ft,k=j,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,j))):vt(i.POLYGON_OFFSET_FILL)}function Zt(U){U?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function xt(U){U===void 0&&(U=i.TEXTURE0+Z-1),nt!==U&&(i.activeTexture(U),nt=U)}function F(U,ft,j){j===void 0&&(nt===null?j=i.TEXTURE0+Z-1:j=nt);let pt=rt[j];pt===void 0&&(pt={type:void 0,texture:void 0},rt[j]=pt),(pt.type!==U||pt.texture!==ft)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(U,ft||K[U]),pt.type=U,pt.texture=ft)}function fe(){let U=rt[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ct(){try{i.texStorage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ut(){try{i.texStorage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function tt(){try{i.texImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ht(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Rt(U,ft){d[U]!==ft&&(i.pixelStorei(U,ft),d[U]=ft)}function lt(U){ie.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function dt(U){Yt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function wt(U,ft){let j=c.get(ft);j===void 0&&(j=new WeakMap,c.set(ft,j));let pt=j.get(U);pt===void 0&&(pt=i.getUniformBlockIndex(ft,U.name),j.set(U,pt))}function It(U,ft){let pt=c.get(ft).get(U);l.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,U.__bindingPointIndex),l.set(ft,pt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,rt={},h={},p=new WeakMap,x=[],M=null,_=!1,f=null,R=null,L=null,y=null,S=null,T=null,P=null,v=new Dt(0,0,0),w=0,D=!1,O=null,z=null,H=null,N=null,k=null,ie.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Ut,drawBuffers:yt,useProgram:Ht,setBlending:$t,setMaterial:te,setFlipSided:Gt,setCullFace:ae,setLineWidth:ge,setPolygonOffset:Ie,setScissorTest:Zt,activeTexture:xt,bindTexture:F,unbindTexture:fe,compressedTexImage2D:Xt,compressedTexImage3D:A,texImage2D:$,texImage3D:tt,pixelStorei:Rt,getParameter:ht,updateUBOMapping:wt,uniformBlockBinding:It,texStorage2D:ct,texStorage3D:ut,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:lt,viewport:dt,reset:Ft}}function lg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap,d=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return x?new OffscreenCanvas(A,g):Ps("canvas")}function _(A,g,B){let W=1,Y=Xt(A);if((Y.width>B||Y.height>B)&&(W=B/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(W*Y.width),ut=Math.floor(W*Y.height);h===void 0&&(h=M(ct,ut));let $=g?M(ct,ut):h;return $.width=ct,$.height=ut,$.getContext("2d").drawImage(A,0,0,ct,ut),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ct+"x"+ut+")."),$}else return"data"in A&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function f(A){return A.generateMipmaps}function R(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,g,B,W,Y,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;W&&(ut=t.get("EXT_texture_norm16"),ut||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ut&&($=ut.R16_EXT),B===i.SHORT&&ut&&($=ut.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RG16_EXT),B===i.SHORT&&ut&&($=ut.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&($=ut.RGB16_EXT),B===i.SHORT&&ut&&($=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let tt=ct?Is:Jt.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=tt===ne?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RGBA16_EXT),B===i.SHORT&&ut&&($=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(A,g){let B;return A?g===null||g===cn||g===rs?B=i.DEPTH24_STENCIL8:g===je?B=i.DEPTH32F_STENCIL8:g===ss&&(B=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===cn||g===rs?B=i.DEPTH_COMPONENT24:g===je?B=i.DEPTH_COMPONENT32F:g===ss&&(B=i.DEPTH_COMPONENT16),B}function T(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Te&&A.minFilter!==Re?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function P(A){let g=A.target;g.removeEventListener("dispose",P),w(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function v(A){let g=A.target;g.removeEventListener("dispose",v),O(g)}function w(A){let g=n.get(A);if(g.__webglInit===void 0)return;let B=A.source,W=p.get(B);if(W){let Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(A),Object.keys(W).length===0&&p.delete(B)}n.remove(A)}function D(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let B=A.source,W=p.get(B);delete W[g.__cacheKey],a.memory.textures--}function O(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=A.textures;for(let W=0,Y=B.length;W<Y;W++){let ct=n.get(B[W]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(A)}let z=0;function H(){z=0}function N(){return z}function k(A){z=A}function Z(){let A=z;return A>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function Q(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function at(A,g){let B=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let W=A.image;if(W===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,A,g);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function J(A,g){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,g);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function nt(A,g){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function rt(A,g){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ut(B,A,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let Ct={[qi]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},Et={[Te]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Re]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ie={[Lc]:i.NEVER,[Oc]:i.ALWAYS,[Dc]:i.LESS,[$a]:i.LEQUAL,[Nc]:i.EQUAL,[Ka]:i.GEQUAL,[Uc]:i.GREATER,[Fc]:i.NOTEQUAL};function Yt(A,g){if(g.type===je&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Re||g.magFilter===da||g.magFilter===Js||g.magFilter===ii||g.minFilter===Re||g.minFilter===da||g.minFilter===Js||g.minFilter===ii)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ct[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ct[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ct[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ie[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Te||g.minFilter!==Js&&g.minFilter!==ii||g.type===je&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function zt(A,g){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",P));let W=g.source,Y=p.get(W);Y===void 0&&(Y={},p.set(W,Y));let ct=Q(g);if(ct!==A.__cacheKey){Y[ct]===void 0&&(Y[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[ct].usedTimes++;let ut=Y[A.__cacheKey];ut!==void 0&&(Y[A.__cacheKey].usedTimes--,ut.usedTimes===0&&D(g)),A.__cacheKey=ct,A.__webglTexture=Y[ct].texture}return B}function K(A,g,B){return Math.floor(Math.floor(A/B)/g)}function et(A,g,B,W){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,W,g.data);else{ct.sort((Rt,lt)=>Rt.start-lt.start);let ut=0;for(let Rt=1;Rt<ct.length;Rt++){let lt=ct[ut],dt=ct[Rt],wt=lt.start+lt.count,It=K(dt.start,g.width,4),Ft=K(lt.start,g.width,4);dt.start<=wt+1&&It===Ft&&K(dt.start+dt.count-1,g.width,4)===It?lt.count=Math.max(lt.count,dt.start+dt.count-lt.start):(++ut,ct[ut]=dt)}ct.length=ut+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Rt=0,lt=ct.length;Rt<lt;Rt++){let dt=ct[Rt],wt=Math.floor(dt.start/4),It=Math.ceil(dt.count/4),Ft=wt%g.width,U=Math.floor(wt/g.width),ft=It,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ft,U,ft,j,B,W,g.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function vt(A,g,B){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Y=zt(A,g),ct=g.source;e.bindTexture(W,A.__webglTexture,i.TEXTURE0+B);let ut=n.get(ct);if(ct.version!==ut.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=Jt.getPrimaries(Jt.workingColorSpace),pt=g.colorSpace===Bn?null:Jt.getPrimaries(g.colorSpace),gt=g.colorSpace===Bn||j===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let tt=_(g.image,!1,s.maxTextureSize);tt=fe(g,tt);let ht=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type),lt=y(g.internalFormat,ht,Rt,g.normalized,g.colorSpace,g.isVideoTexture);Yt(W,g);let dt,wt=g.mipmaps,It=g.isVideoTexture!==!0,Ft=ut.__version===void 0||Y===!0,U=ct.dataReady,ft=T(g,tt);if(g.isDepthTexture)lt=S(g.format===si,g.type),Ft&&(It?e.texStorage2D(i.TEXTURE_2D,1,lt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,lt,tt.width,tt.height,0,ht,Rt,null));else if(g.isDataTexture)if(wt.length>0){It&&Ft&&e.texStorage2D(i.TEXTURE_2D,ft,lt,wt[0].width,wt[0].height);for(let j=0,pt=wt.length;j<pt;j++)dt=wt[j],It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,ht,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,j,lt,dt.width,dt.height,0,ht,Rt,dt.data);g.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(i.TEXTURE_2D,ft,lt,tt.width,tt.height),U&&et(g,tt,ht,Rt)):e.texImage2D(i.TEXTURE_2D,0,lt,tt.width,tt.height,0,ht,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,lt,wt[0].width,wt[0].height,tt.depth);for(let j=0,pt=wt.length;j<pt;j++)if(dt=wt[j],g.format!==tn)if(ht!==null)if(It){if(U)if(g.layerUpdates.size>0){let gt=hl(dt.width,dt.height,g.format,g.type);for(let it of g.layerUpdates){let At=dt.data.subarray(it*gt/dt.data.BYTES_PER_ELEMENT,(it+1)*gt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,it,dt.width,dt.height,1,ht,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ht,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,lt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ht,Rt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,lt,dt.width,dt.height,tt.depth,0,ht,Rt,dt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{It&&Ft&&e.texStorage2D(i.TEXTURE_2D,ft,lt,wt[0].width,wt[0].height);for(let j=0,pt=wt.length;j<pt;j++)dt=wt[j],g.format!==tn?ht!==null?It?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,lt,dt.width,dt.height,0,dt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,ht,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,j,lt,dt.width,dt.height,0,ht,Rt,dt.data)}else if(g.isDataArrayTexture)if(It){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,lt,tt.width,tt.height,tt.depth),U)if(g.layerUpdates.size>0){let j=hl(tt.width,tt.height,g.format,g.type);for(let pt of g.layerUpdates){let gt=tt.data.subarray(pt*j/tt.data.BYTES_PER_ELEMENT,(pt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,tt.width,tt.height,1,ht,Rt,gt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,tt.width,tt.height,tt.depth,0,ht,Rt,tt.data);else if(g.isData3DTexture)It?(Ft&&e.texStorage3D(i.TEXTURE_3D,ft,lt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,lt,tt.width,tt.height,tt.depth,0,ht,Rt,tt.data);else if(g.isFramebufferTexture){if(Ft)if(It)e.texStorage2D(i.TEXTURE_2D,ft,lt,tt.width,tt.height);else{let j=tt.width,pt=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,lt,j,pt,0,ht,Rt,null),j>>=1,pt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),d.add(g),j.onpaint=pt=>{let gt=pt.changedElements;for(let it of d)gt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let gt=i.RGBA,it=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,it,At,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(It&&Ft){let j=Xt(wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,lt,j.width,j.height)}for(let j=0,pt=wt.length;j<pt;j++)dt=wt[j],It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ht,Rt,dt):e.texImage2D(i.TEXTURE_2D,j,lt,ht,Rt,dt);g.generateMipmaps=!1}else if(It){if(Ft){let j=Xt(tt);e.texStorage2D(i.TEXTURE_2D,ft,lt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,lt,ht,Rt,tt);f(g)&&R(W),ut.__version=ct.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ut(A,g,B){if(g.image.length!==6)return;let W=zt(A,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ct=n.get(Y);if(Y.version!==ct.__version||W===!0){e.activeTexture(i.TEXTURE0+B);let ut=Jt.getPrimaries(Jt.workingColorSpace),$=g.colorSpace===Bn?null:Jt.getPrimaries(g.colorSpace),tt=g.colorSpace===Bn||ut===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ht=g.isCompressedTexture||g.image[0].isCompressedTexture,Rt=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let it=0;it<6;it++)!ht&&!Rt?lt[it]=_(g.image[it],!0,s.maxCubemapSize):lt[it]=Rt?g.image[it].image:g.image[it],lt[it]=fe(g,lt[it]);let dt=lt[0],wt=r.convert(g.format,g.colorSpace),It=r.convert(g.type),Ft=y(g.internalFormat,wt,It,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,ft=ct.__version===void 0||W===!0,j=Y.dataReady,pt=T(g,dt);Yt(i.TEXTURE_CUBE_MAP,g);let gt;if(ht){U&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ft,dt.width,dt.height);for(let it=0;it<6;it++){gt=lt[it].mipmaps;for(let At=0;At<gt.length;At++){let bt=gt[At];g.format!==tn?wt!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,Ft,bt.width,bt.height,0,bt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,bt.width,bt.height,wt,It,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,Ft,bt.width,bt.height,0,wt,It,bt.data)}}}else{if(gt=g.mipmaps,U&&ft){gt.length>0&&pt++;let it=Xt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt[it].width,lt[it].height,wt,It,lt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,lt[it].width,lt[it].height,0,wt,It,lt[it].data);for(let At=0;At<gt.length;At++){let se=gt[At].image[it].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,se.width,se.height,wt,It,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,Ft,se.width,se.height,0,wt,It,se.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt,It,lt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,wt,It,lt[it]);for(let At=0;At<gt.length;At++){let bt=gt[At];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,wt,It,bt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,Ft,wt,It,bt.image[it])}}}f(g)&&R(i.TEXTURE_CUBE_MAP),ct.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function yt(A,g,B,W,Y,ct){let ut=r.convert(B.format,B.colorSpace),$=r.convert(B.type),tt=y(B.internalFormat,ut,$,B.normalized,B.colorSpace),ht=n.get(g),Rt=n.get(B);if(Rt.__renderTarget=g,!ht.__hasExternalTextures){let lt=Math.max(1,g.width>>ct),dt=Math.max(1,g.height>>ct);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ct,tt,lt,dt,g.depth,0,ut,$,null):e.texImage2D(Y,ct,tt,lt,dt,0,ut,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Rt.__webglTexture,0,Zt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Rt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(A,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,ct=S(g.stencilBuffer,Y),ut=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(g),ct,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(g),ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,A)}else{let W=g.textures;for(let Y=0;Y<W.length;Y++){let ct=W[Y],ut=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),tt=y(ct.internalFormat,ut,$,ct.normalized,ct.colorSpace);xt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(g),tt,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(g),tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,tt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,g,B){let W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,g.depthTexture);let ht=r.convert(g.depthTexture.format),Rt=r.convert(g.depthTexture.type),lt;g.depthTexture.format===_n?lt=i.DEPTH_COMPONENT24:g.depthTexture.format===si&&(lt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,g.width,g.height,0,ht,Rt,null)}}else at(g.depthTexture,0);let ct=Y.__webglTexture,ut=Zt(g),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=g.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===_n)xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,ct,0);else if(g.depthTexture.format===si)xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(A){let g=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)de(g.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?de(g.__webglFramebuffer[0],A,0):de(g.__webglFramebuffer,A,0)}else if(B){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ht(g.__webglDepthbuffer[W],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ht(g.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,g,B){let W=n.get(A);g!==void 0&&yt(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(A)}function te(A){let g=A.texture,B=n.get(A),W=n.get(g);A.addEventListener("dispose",v);let Y=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ut=Y.length>1;if(ut||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let tt=0;tt<g.mipmaps.length;tt++)B.__webglFramebuffer[$][tt]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let $=0,tt=Y.length;$<tt;$++){let ht=n.get(Y[$]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let tt=Y[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let ht=r.convert(tt.format,tt.colorSpace),Rt=r.convert(tt.type),lt=y(tt.internalFormat,ht,Rt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),dt=Zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let tt=0;tt<g.mipmaps.length;tt++)yt(B.__webglFramebuffer[$][tt],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else yt(B.__webglFramebuffer[$],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let $=0,tt=Y.length;$<tt;$++){let ht=Y[$],Rt=n.get(ht),lt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Rt.__webglTexture),Yt(lt,ht),yt(B.__webglFramebuffer,A,ht,i.COLOR_ATTACHMENT0+$,lt,0),f(ht)&&R(lt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,W.__webglTexture),Yt($,g),g.mipmaps&&g.mipmaps.length>0)for(let tt=0;tt<g.mipmaps.length;tt++)yt(B.__webglFramebuffer[tt],A,g,i.COLOR_ATTACHMENT0,$,tt);else yt(B.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,$,0);f(g)&&R($),e.unbindTexture()}A.depthBuffer&&Wt(A)}function Gt(A){let g=A.textures;for(let B=0,W=g.length;B<W;B++){let Y=g[B];if(f(Y)){let ct=L(A),ut=n.get(Y).__webglTexture;e.bindTexture(ct,ut),R(ct),e.unbindTexture()}}}let ae=[],ge=[];function Ie(A){if(A.samples>0){if(xt(A)===!1){let g=A.textures,B=A.width,W=A.height,Y=i.COLOR_BUFFER_BIT,ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(A),$=g.length>1;if($)for(let ht=0;ht<g.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ht=0;ht<g.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Rt=n.get(g[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Y,i.NEAREST),l===!0&&(ae.length=0,ge.length=0,ae.push(i.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ae.push(ct),ge.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ht=0;ht<g.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Rt=n.get(g[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Zt(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let g=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(A){let g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function fe(A,g){let B=A.colorSpace,W=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Cs&&B!==Bn&&(Jt.getTransfer(B)===ne?(W!==tn||Y!==ke)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",B)),g}function Xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=rt,this.rebindTextures=$t,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cg(i,t){function e(n,s=Bn){let r,a=Jt.getTransfer(s);if(n===ke)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ko)return i.BYTE;if(n===Qo)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===tn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===ga)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===va)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===Qs||n===js)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ma||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===tr||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===Ha||n===Ga||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===Za||n===er||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null,M=typeof XRWebGLBinding<"u",_=new Cl,f={},R=e.getContextAttributes(),L=null,y=null,S=[],T=[],P=new Bt,v=null,w=null,D=new Ee;D.viewport=new ue;let O=new Ee;O.viewport=new ue;let z=[D,O],H=new oa,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=S[K];return et===void 0&&(et=new $i,S[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=S[K];return et===void 0&&(et=new $i,S[K]=et),et.getGripSpace()},this.getHand=function(K){let et=S[K];return et===void 0&&(et=new $i,S[K]=et),et.getHandSpace()};function Z(K){let et=T.indexOf(K.inputSource);if(et===-1)return;let vt=S[et];vt!==void 0&&(vt.update(K.inputSource,K.frame,c||a),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",at);for(let K=0;K<S.length;K++){let et=T[K];et!==null&&(T[K]=null,S[K].disconnect(et))}N=null,k=null,_.reset();for(let K in f)delete f[K];if(t.setRenderTarget(L),p=null,h=null,d=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",at),R.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,yt=null;R.depth&&(yt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=R.stencil?si:_n,Ut=R.stencil?rs:cn);let Ht={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ve(h.textureWidth,h.textureHeight,{format:tn,type:ke,depthTexture:new Kn(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ve(p.framebufferWidth,p.framebufferHeight,{format:tn,type:ke,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(K){for(let et=0;et<K.removed.length;et++){let vt=K.removed[et],Ut=T.indexOf(vt);Ut>=0&&(T[Ut]=null,S[Ut].disconnect(vt))}for(let et=0;et<K.added.length;et++){let vt=K.added[et],Ut=T.indexOf(vt);if(Ut===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=T.length){T.push(vt),Ut=Ht;break}else if(T[Ht]===null){T[Ht]=vt,Ut=Ht;break}if(Ut===-1)break}let yt=S[Ut];yt&&yt.connect(vt)}}let J=new V,nt=new V;function rt(K,et,vt){J.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(vt.matrixWorld);let Ut=J.distanceTo(nt),yt=et.projectionMatrix.elements,Ht=vt.projectionMatrix.elements,de=yt[14]/(yt[10]-1),Wt=yt[14]/(yt[10]+1),$t=(yt[9]+1)/yt[5],te=(yt[9]-1)/yt[5],Gt=(yt[8]-1)/yt[0],ae=(Ht[8]+1)/Ht[0],ge=de*Gt,Ie=de*ae,Zt=Ut/(-Gt+ae),xt=Zt*-Gt;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xt),K.translateZ(Zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),yt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let F=de+Zt,fe=Wt+Zt,Xt=ge-xt,A=Ie+(Ut-xt),g=$t*Wt/fe*F,B=te*Wt/fe*F;K.projectionMatrix.makePerspective(Xt,A,g,B,F,fe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,vt=K.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),H.near=O.near=D.near=et,H.far=O.far=D.far=vt,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=K.layers.mask|6,D.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;let Ut=K.parent,yt=H.cameras;Ct(H,Ut);for(let Ht=0;Ht<yt.length;Ht++)Ct(yt[Ht],Ut);yt.length===2?rt(H,D,O):H.projectionMatrix.copy(D.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Et(K,H,Ut)};function Et(K,et,vt){vt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(H)},this.getCameraTexture=function(K){return f[K]};let ie=null;function Yt(K,et){if(u=et.getViewerPose(c||a),x=et,u!==null){let vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let Wt=0;Wt<vt.length;Wt++){let $t=vt[Wt],te=null;if(p!==null)te=p.getViewport($t);else{let ae=d.getViewSubImage(h,$t);te=ae.viewport,Wt===0&&(t.setRenderTargetTextures(y,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(y))}let Gt=z[Wt];Gt===void 0&&(Gt=new Ee,Gt.layers.enable(Wt),Gt.viewport=new ue,z[Wt]=Gt),Gt.matrix.fromArray($t.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray($t.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(te.x,te.y,te.width,te.height),Wt===0&&(H.matrix.copy(Gt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(Gt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Wt=d.getDepthInformation(vt[0]);Wt&&Wt.isValid&&Wt.texture&&_.init(Wt,s.renderState)}if(yt&&yt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<vt.length;Wt++){let $t=vt[Wt].camera;if($t){let te=f[$t];te||(te=new zs,f[$t]=te);let Gt=d.getCameraImage($t);te.sourceTexture=Gt}}}}for(let vt=0;vt<S.length;vt++){let Ut=T[vt],yt=S[vt];Ut!==null&&yt!==void 0&&yt.update(Ut,et,c||a)}ie&&ie(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let zt=new ph;zt.setAnimationLoop(Yt),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},dg=new le,yh=new Ot;yh.set(-1,0,0,0,1,0,0,0,1);function fg(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,ol(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,R,L,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(_,f):f.isMeshLambertMaterial?(r(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),u(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(_,f),h(_,f),f.isMeshPhysicalMaterial&&p(_,f,y)):f.isMeshMatcapMaterial?(r(_,f),x(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),M(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,R,L):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Ce&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Ce&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let R=t.get(f),L=R.envMap,y=R.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(y)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(yh),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,R,L){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*R,_.scale.value=L*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,R){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.retroreflectivity>0&&(_.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,f){f.matcap&&(_.matcap.value=f.matcap)}function M(_,f){let R=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function c(y,S){let T=s[y.id];T===void 0&&(_(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",R));let P=S.program;n.updateUBOMapping(y,P);let v=t.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let S=d();y.__bindingPointIndex=S;let T=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],T=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,w=T.length;v<w;v++){let D=T[v];if(Array.isArray(D))for(let O=0,z=D.length;O<z;O++)p(D[O],v,O,P);else p(D,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,T,P){if(M(y,S,T,P)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let D=0;for(let O=0;O<w.length;O++){let z=w[O],H=f(z);x(z,y.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function x(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function M(y,S,T,P){let v=y.value,w=S+"_"+T;if(P[w]===void 0)return typeof v=="number"||typeof v=="boolean"?P[w]=v:ArrayBuffer.isView(v)?P[w]=v.slice():P[w]=v.clone(),!0;{let D=P[w];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return P[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function _(y){let S=y.uniforms,T=0,P=16;for(let w=0,D=S.length;w<D;w++){let O=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,H=O.length;z<H;z++){let N=O[z],k=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,Q=k.length;Z<Q;Z++){let at=k[Z],J=f(at),nt=T%P,rt=nt%J.boundary,Ct=nt+rt;T+=rt,Ct!==0&&P-Ct<J.storage&&(T+=P-Ct),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=J.storage}}}let v=T%P;return v>0&&(T+=P-v),y.__size=T,y.__cache={},this}function f(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",y),S}function R(y){let S=y.target;S.removeEventListener("dispose",R);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}var mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),En=null;function gg(){return En===null&&(En=new Os(mg,16,16,ri,hn),En.name="DFG_LUT",En.minFilter=Re,En.magFilter=Re,En.wrapS=gn,En.wrapT=gn,En.generateMipmaps=!1,En.needsUpdate=!0),En}var eo=class{constructor(t={}){let{canvas:e=zc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ke}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=p,_=new Set([va,xa,_a]),f=new Set([ke,cn,ss,rs,pa,ma]),R=new Uint32Array(4),L=new Int32Array(4),y=new V,S=null,T=null,P=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,z=null,H=null,N=null,k=null;this._outputColorSpace=xe;let Z=0,Q=0,at=null,J=-1,nt=null,rt=new ue,Ct=new ue,Et=null,ie=new Dt(0),Yt=0,zt=e.width,K=e.height,et=1,vt=null,Ut=null,yt=new ue(0,0,zt,K),Ht=new ue(0,0,zt,K),de=!1,Wt=new Qi,$t=!1,te=!1,Gt=new le,ae=new V,ge=new ue,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function xt(){return at===null?et:1}let F=n;function fe(m,b){return e.getContext(m,b)}let Xt,A,g,B,W,Y,ct,ut,$,tt,ht,Rt,lt,dt,wt,It,Ft,U,ft,j,pt,gt,it;try{let m={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",ze,!1),F===null){let b="webgl2";if(F=fe(b,m),F===null)throw fe(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(m){throw e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),Nt("WebGLRenderer: "+m.message),m}function At(){Xt=new bp(F),Xt.init(),pt=new cg(F,Xt),A=new fp(F,Xt,t,pt),g=new og(F,Xt),A.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),H=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),B=new wp(F),W=new Ym,Y=new lg(F,Xt,g,W,A,pt,B),ct=new Sp(D),ut=new Au(F),gt=new up(F,ut),$=new Ep(F,ut,B,gt),tt=new Rp(F,$,ut,gt,B),U=new Ap(F,A,Y),wt=new pp(W),ht=new qm(D,ct,Xt,A,gt,wt),Rt=new fg(D,W),lt=new Jm,dt=new eg(Xt),Ft=new hp(D,ct,g,tt,x,l),It=new ag(D,tt,A),it=new pg(F,B,A,g),ft=new dp(F,Xt,B),j=new Tp(F,Xt,B),B.programs=ht.programs,D.capabilities=A,D.extensions=Xt,D.properties=W,D.renderLists=lt,D.shadowMap=It,D.state=g,D.info=B}M!==ke&&(w=new Ip(M,e.width,e.height,o,s,r));let bt=new Il(D,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let m=Xt.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){let m=Xt.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(m){m!==void 0&&(et=m,this.setSize(zt,K,!1))},this.getSize=function(m){return m.set(zt,K)},this.setSize=function(m,b,I=!0){if(bt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=m,K=b,e.width=Math.floor(m*et),e.height=Math.floor(b*et),I===!0&&(e.style.width=m+"px",e.style.height=b+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,m,b)},this.getDrawingBufferSize=function(m){return m.set(zt*et,K*et).floor()},this.setDrawingBufferSize=function(m,b,I){zt=m,K=b,et=I,e.width=Math.floor(m*I),e.height=Math.floor(b*I),this.setViewport(0,0,m,b)},this.setEffects=function(m){if(M===ke){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(m){for(let b=0;b<m.length;b++)if(m[b].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(m||[])},this.getCurrentViewport=function(m){return m.copy(rt)},this.getViewport=function(m){return m.copy(yt)},this.setViewport=function(m,b,I,E){m.isVector4?yt.set(m.x,m.y,m.z,m.w):yt.set(m,b,I,E),g.viewport(rt.copy(yt).multiplyScalar(et).round())},this.getScissor=function(m){return m.copy(Ht)},this.setScissor=function(m,b,I,E){m.isVector4?Ht.set(m.x,m.y,m.z,m.w):Ht.set(m,b,I,E),g.scissor(Ct.copy(Ht).multiplyScalar(et).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(m){g.setScissorTest(de=m)},this.setOpaqueSort=function(m){vt=m},this.setTransparentSort=function(m){Ut=m},this.getClearColor=function(m){return m.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(m=!0,b=!0,I=!0){let E=0;if(m){let C=!1;if(at!==null){let G=at.texture.format;C=_.has(G)}if(C){let G=at.texture.type,q=f.has(G),X=Ft.getClearColor(),st=Ft.getClearAlpha(),ot=X.r,St=X.g,Tt=X.b;q?(R[0]=ot,R[1]=St,R[2]=Tt,R[3]=st,F.clearBufferuiv(F.COLOR,0,R)):(L[0]=ot,L[1]=St,L[2]=Tt,L[3]=st,F.clearBufferiv(F.COLOR,0,L))}else E|=F.COLOR_BUFFER_BIT}b&&(E|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(E|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E!==0&&F.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(m){m.setRenderer(this),z=m},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),Ft.dispose(),lt.dispose(),dt.dispose(),W.dispose(),ct.dispose(),tt.dispose(),gt.dispose(),it.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ms),bt.removeEventListener("sessionend",gs),fn.stop()};function se(m){m.preventDefault(),sl("WebGLRenderer: Context Lost."),O=!0}function Kt(){sl("WebGLRenderer: Context Restored."),O=!1;let m=B.autoReset,b=It.enabled,I=It.autoUpdate,E=It.needsUpdate,C=It.type;At(),B.autoReset=m,It.enabled=b,It.autoUpdate=I,It.needsUpdate=E,It.type=C}function ze(m){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function Pe(m){let b=m.target;b.removeEventListener("dispose",Pe),oi(b)}function oi(m){or(m),W.remove(m)}function or(m){let b=W.get(m).programs;b!==void 0&&(b.forEach(function(I){ht.releaseProgram(I)}),m.isShaderMaterial&&ht.releaseShaderCache(m))}this.renderBufferDirect=function(m,b,I,E,C,G){b===null&&(b=Ie);let q=C.isMesh&&C.matrixWorld.determinantAffine()<0,X=wn(m,b,I,E,C);g.setMaterial(E,q);let st=I.index,ot=1;if(E.wireframe===!0){if(st=$.getWireframeAttribute(I),st===void 0)return;ot=2}let St=I.drawRange,Tt=I.attributes.position,mt=St.start*ot,Vt=(St.start+St.count)*ot;G!==null&&(mt=Math.max(mt,G.start*ot),Vt=Math.min(Vt,(G.start+G.count)*ot)),st!==null?(mt=Math.max(mt,0),Vt=Math.min(Vt,st.count)):Tt!=null&&(mt=Math.max(mt,0),Vt=Math.min(Vt,Tt.count));let he=Vt-mt;if(he<0||he===1/0)return;gt.setup(C,E,X,I,st);let ee,jt=ft;if(st!==null&&(ee=ut.get(st),jt=j,jt.setIndex(ee)),C.isMesh)E.wireframe===!0?(g.setLineWidth(E.wireframeLinewidth*xt()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(C.isLine){let ve=E.linewidth;ve===void 0&&(ve=1),g.setLineWidth(ve*xt()),C.isLineSegments?jt.setMode(F.LINES):C.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else C.isPoints?jt.setMode(F.POINTS):C.isSprite&&jt.setMode(F.TRIANGLES);if(C.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))jt.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let ve=C._multiDrawStarts,Mt=C._multiDrawCounts,Ue=C._multiDrawCount,Qt=st?ut.get(st).bytesPerElement:1,Ke=W.get(E).currentProgram.getUniforms();for(let pn=0;pn<Ue;pn++)Ke.setValue(F,"_gl_DrawID",pn),jt.render(ve[pn]/Qt,Mt[pn])}else if(C.isInstancedMesh)jt.renderInstances(mt,he,C.count);else if(I.isInstancedBufferGeometry){let ve=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Mt=Math.min(I.instanceCount,ve);jt.renderInstances(mt,he,Mt)}else jt.render(mt,he)};function en(m,b,I,E){z!==null&&m.isNodeMaterial&&z.setObject(E,m),$t===!0&&wt.setState(m,I,!1),m.transparent===!0&&m.side===Ge&&m.forceSinglePass===!1?(m.side=Ce,m.needsUpdate=!0,Vn(m,b,E),m.side=ei,m.needsUpdate=!0,Vn(m,b,E),m.side=Ge):Vn(m,b,E)}this.compile=function(m,b,I=null){I===null&&(I=m),z!==null&&z.renderStart(m,b,I),T=dt.get(I),T.init(b),v.push(T),I.traverseVisible(function(C){C.isLight&&C.layers.test(b.layers)&&(T.pushLight(C),C.castShadow&&T.pushShadow(C))}),m!==I&&m.traverseVisible(function(C){C.isLight&&C.layers.test(b.layers)&&(T.pushLight(C),C.castShadow&&T.pushShadow(C))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),te=this.localClippingEnabled,$t=wt.init(this.clippingPlanes,te),$t===!0&&wt.setGlobalState(this.clippingPlanes,b),z!==null&&It.render(T.state.shadowsArray,I,b);let E=new Set;return m.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let G=C.material;if(G)if(Array.isArray(G))for(let q=0;q<G.length;q++){let X=G[q];en(X,I,b,C),E.add(X)}else en(G,I,b,C),E.add(G)}),T=v.pop(),z!==null&&z.renderEnd(),E},this.compileAsync=function(m,b,I=null){let E=this.compile(m,b,I);return new Promise(C=>{function G(){if(E.forEach(function(q){let st=W.get(q).currentProgram;(st===void 0||st.isReady())&&E.delete(q)}),E.size===0){C(m);return}setTimeout(G,10)}Xt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let ps=null;function dn(m){ps&&ps(m)}function ms(){fn.stop()}function gs(){fn.start()}let fn=new ph;fn.setAnimationLoop(dn),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(m){ps=m,bt.setAnimationLoop(m),m===null?fn.stop():fn.start()},bt.addEventListener("sessionstart",ms),bt.addEventListener("sessionend",gs),this.render=function(m,b){if(b!==void 0&&b.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(m,b);let I=bt.enabled===!0&&bt.isPresenting===!0,E=w!==null&&(at===null||I)&&w.begin(D,at);if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(b),b=bt.getCamera()),m.isScene===!0&&m.onBeforeRender(D,m,b,at),T=dt.get(m,v.length),T.init(b),T.state.textureUnits=Y.getTextureUnits(),v.push(T),Gt.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Wt.setFromProjectionMatrix(Gt,an,b.reversedDepth),te=this.localClippingEnabled,$t=wt.init(this.clippingPlanes,te),S=lt.get(m,P.length),S.init(),P.push(S),bt.enabled===!0&&bt.isPresenting===!0){let q=D.xr.getDepthSensingMesh();q!==null&&Ti(q,b,-1/0,D.sortObjects)}Ti(m,b,0,D.sortObjects),S.finish(),z!==null&&z.updateLights(T.state.lightsArray),D.sortObjects===!0&&S.sort(vt,Ut),Zt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Zt&&Ft.addToRenderList(S,m),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&wt.beginShadows();let C=T.state.shadowsArray;if(It.render(C,m,b),$t===!0&&wt.endShadows(),(E&&w.hasRenderPass())===!1){let q=S.opaque,X=S.transmissive;if(T.setupLights(),b.isArrayCamera){let st=b.cameras;if(X.length>0)for(let ot=0,St=st.length;ot<St;ot++){let Tt=st[ot];lr(q,X,m,Tt)}Zt&&Ft.render(m);for(let ot=0,St=st.length;ot<St;ot++){let Tt=st[ot];_s(S,m,Tt,Tt.viewport)}}else X.length>0&&lr(q,X,m,b),Zt&&Ft.render(m),_s(S,m,b)}at!==null&&Q===0&&(Y.updateMultisampleRenderTarget(at),Y.updateRenderTargetMipmap(at)),E&&w.end(D),m.isScene===!0&&m.onAfterRender(D,m,b),gt.resetDefaultState(),J=-1,nt=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),$t===!0&&wt.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,z!==null&&z.renderEnd()};function Ti(m,b,I,E){if(m.visible===!1)return;if(m.layers.test(b.layers)){if(m.isGroup)I=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(b);else if(m.isLightProbeGrid)T.pushLightProbeGrid(m);else if(m.isLight)T.pushLight(m),m.castShadow&&T.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||m.intersectsFrustum(Wt)){E&&ge.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Gt);let q=tt.update(m),X=m.material;X.visible&&S.push(m,q,X,I,ge.z,null,b)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||m.intersectsFrustum(Wt))){let q=tt.update(m),X=m.material;if(E&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),ge.copy(m.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),ge.copy(q.boundingSphere.center)),ge.applyMatrix4(m.matrixWorld).applyMatrix4(Gt)),Array.isArray(X)){let st=q.groups;for(let ot=0,St=st.length;ot<St;ot++){let Tt=st[ot],mt=X[Tt.materialIndex];mt&&mt.visible&&S.push(m,q,mt,I,ge.z,Tt,b)}}else X.visible&&S.push(m,q,X,I,ge.z,null,b)}}let G=m.children;for(let q=0,X=G.length;q<X;q++)Ti(G[q],b,I,E)}function _s(m,b,I,E){let{opaque:C,transmissive:G,transparent:q}=m;T.setupLightsView(I),$t===!0&&wt.setGlobalState(D.clippingPlanes,I),E&&g.viewport(rt.copy(E)),C.length>0&&li(C,b,I),G.length>0&&li(G,b,I),q.length>0&&li(q,b,I),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function lr(m,b,I,E){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[E.id]===void 0){let mt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[E.id]=new Ve(1,1,{generateMipmaps:!0,type:mt?hn:ke,minFilter:ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let G=T.state.transmissionRenderTarget[E.id],q=E.viewport||rt;G.setSize(q.z*D.transmissionResolutionScale,q.w*D.transmissionResolutionScale);let X=D.getRenderTarget(),st=D.getActiveCubeFace(),ot=D.getActiveMipmapLevel();D.setRenderTarget(G),D.getClearColor(ie),Yt=D.getClearAlpha(),Yt<1&&D.setClearColor(16777215,.5),D.clear(),Zt&&Ft.render(I);let St=D.toneMapping;D.toneMapping=ln;let Tt=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),T.setupLightsView(E),$t===!0&&wt.setGlobalState(D.clippingPlanes,E),li(m,I,E),Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Vt=0,he=b.length;Vt<he;Vt++){let ee=b[Vt],{object:jt,geometry:ve,material:Mt,group:Ue}=ee;if(Mt.side===Ge&&jt.layers.test(E.layers)){let Qt=Mt.side;Mt.side=Ce,Mt.needsUpdate=!0,zn(jt,I,E,ve,Mt,Ue),Mt.side=Qt,Mt.needsUpdate=!0,mt=!0}}mt===!0&&(Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G))}D.setRenderTarget(X,st,ot),D.setClearColor(ie,Yt),Tt!==void 0&&(E.viewport=Tt),D.toneMapping=St}function li(m,b,I){let E=b.isScene===!0?b.overrideMaterial:null;for(let C=0,G=m.length;C<G;C++){let q=m[C],{object:X,geometry:st,group:ot}=q,St=q.material;St.allowOverride===!0&&E!==null&&(St=E),X.layers.test(I.layers)&&zn(X,b,I,st,St,ot)}}function zn(m,b,I,E,C,G){z!==null&&C.isNodeMaterial&&z.setObject(m,C),m.onBeforeRender(D,b,I,E,C,G),m.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),C.onBeforeRender(D,b,I,E,m,G),C.transparent===!0&&C.side===Ge&&C.forceSinglePass===!1?(C.side=Ce,C.needsUpdate=!0,D.renderBufferDirect(I,b,E,C,m,G),C.side=ei,C.needsUpdate=!0,D.renderBufferDirect(I,b,E,C,m,G),C.side=Ge):D.renderBufferDirect(I,b,E,C,m,G),m.onAfterRender(D,b,I,E,C,G)}function Vn(m,b,I){b.isScene!==!0&&(b=Ie);let E=W.get(m),C=T.state.lights,G=T.state.shadowsArray,q=C.state.version,X=ht.getParameters(m,C.state,G,b,I,T.state.lightProbeGridArray),st=ht.getProgramCacheKey(X),ot=E.programs;E.environment=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?b.environment:null,E.fog=b.fog;let St=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap;E.envMap=ct.get(m.envMap||E.environment,St),E.envMapRotation=E.environment!==null&&m.envMap===null?b.environmentRotation:m.envMapRotation,ot===void 0&&(m.addEventListener("dispose",Pe),ot=new Map,E.programs=ot);let Tt=ot.get(st);if(Tt!==void 0){if(E.currentProgram===Tt&&E.lightsStateVersion===q)return hr(m,X),Tt}else X.uniforms=ht.getUniforms(m),z!==null&&m.isNodeMaterial&&z.build(m,I,X),m.onBeforeCompile(X,D),Tt=ht.acquireProgram(X,st),ot.set(st,Tt),E.uniforms=X.uniforms;let mt=E.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(mt.clippingPlanes=wt.uniform),hr(m,X),E.needsLights=xs(m),E.lightsStateVersion=q,E.needsLights&&(mt.ambientLightColor.value=C.state.ambient,mt.lightProbe.value=C.state.probe,mt.sunLights.value=C.state.sun,mt.sunLightShadows.value=C.state.sunShadow,mt.directionalLights.value=C.state.directional,mt.directionalLightShadows.value=C.state.directionalShadow,mt.spotLights.value=C.state.spot,mt.spotLightShadows.value=C.state.spotShadow,mt.rectAreaLights.value=C.state.rectArea,mt.ltc_1.value=C.state.rectAreaLTC1,mt.ltc_2.value=C.state.rectAreaLTC2,mt.pointLights.value=C.state.point,mt.pointLightShadows.value=C.state.pointShadow,mt.hemisphereLights.value=C.state.hemi,mt.sunShadowMatrix.value=C.state.sunShadowMatrix,mt.sunShadowCascade.value=C.state.sunShadowCascade,mt.directionalShadowMatrix.value=C.state.directionalShadowMatrix,mt.spotLightMatrix.value=C.state.spotLightMatrix,mt.spotLightMap.value=C.state.spotLightMap,mt.pointShadowMatrix.value=C.state.pointShadowMatrix),E.lightProbeGrid=T.state.lightProbeGridArray.length>0,E.currentProgram=Tt,E.uniformsList=null,Tt}function cr(m){if(m.uniformsList===null){let b=m.currentProgram.getUniforms();m.uniformsList=cs.seqWithValue(b.seq,m.uniforms)}return m.uniformsList}function hr(m,b){let I=W.get(m);I.outputColorSpace=b.outputColorSpace,I.batching=b.batching,I.batchingColor=b.batchingColor,I.instancing=b.instancing,I.instancingColor=b.instancingColor,I.instancingMorph=b.instancingMorph,I.skinning=b.skinning,I.morphTargets=b.morphTargets,I.morphNormals=b.morphNormals,I.morphColors=b.morphColors,I.morphTargetsCount=b.morphTargetsCount,I.numClippingPlanes=b.numClippingPlanes,I.numIntersection=b.numClipIntersection,I.vertexAlphas=b.vertexAlphas,I.vertexTangents=b.vertexTangents,I.toneMapping=b.toneMapping}function wi(m,b){if(m.length===0)return null;if(m.length===1)return m[0].texture!==null?m[0]:null;y.setFromMatrixPosition(b.matrixWorld);for(let I=0,E=m.length;I<E;I++){let C=m[I];if(C.texture!==null&&C.boundingBox.containsPoint(y))return C}return null}function wn(m,b,I,E,C){b.isScene!==!0&&(b=Ie),Y.resetTextureUnits();let G=b.fog,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?b.environment:null,X=at===null?D.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Jt.workingColorSpace,st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ot=ct.get(E.envMap||q,st),St=E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Tt=!!I.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),mt=!!I.morphAttributes.position,Vt=!!I.morphAttributes.normal,he=!!I.morphAttributes.color,ee=ln;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ee=D.toneMapping);let jt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ve=jt!==void 0?jt.length:0,Mt=W.get(E),Ue=T.state.lights;if($t===!0&&(te===!0||m!==nt)){let oe=m===nt&&E.id===J;wt.setState(E,m,oe)}let Qt=!1;E.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ue.state.version||Mt.outputColorSpace!==X||C.isBatchedMesh&&Mt.batching===!1||!C.isBatchedMesh&&Mt.batching===!0||C.isBatchedMesh&&Mt.batchingColor===!0&&C._colorsTexture===null||C.isBatchedMesh&&Mt.batchingColor===!1&&C._colorsTexture!==null||C.isInstancedMesh&&Mt.instancing===!1||!C.isInstancedMesh&&Mt.instancing===!0||C.isSkinnedMesh&&Mt.skinning===!1||!C.isSkinnedMesh&&Mt.skinning===!0||C.isInstancedMesh&&Mt.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Mt.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Mt.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Mt.instancingMorph===!1&&C.morphTexture!==null||Mt.envMap!==ot||E.fog===!0&&Mt.fog!==G||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==wt.numPlanes||Mt.numIntersection!==wt.numIntersection)||Mt.vertexAlphas!==St||Mt.vertexTangents!==Tt||Mt.morphTargets!==mt||Mt.morphNormals!==Vt||Mt.morphColors!==he||Mt.toneMapping!==ee||Mt.morphTargetsCount!==ve||!!Mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,Mt.__version=E.version);let Ke=Mt.currentProgram;Qt===!0&&(Ke=Vn(E,b,C),z&&E.isNodeMaterial&&z.onUpdateProgram(E,Ke,Mt));let pn=!1,Hn=!1,Ai=!1,re=Ke.getUniforms(),_e=Mt.uniforms;if(g.useProgram(Ke.program)&&(pn=!0,Hn=!0,Ai=!0),E.id!==J&&(J=E.id,Hn=!0),Mt.needsLights){let oe=wi(T.state.lightProbeGridArray,C);Mt.lightProbeGrid!==oe&&(Mt.lightProbeGrid=oe,Hn=!0)}if(pn||nt!==m){g.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),re.setValue(F,"projectionMatrix",m.projectionMatrix),re.setValue(F,"viewMatrix",m.matrixWorldInverse);let kn=re.map.cameraPosition;kn!==void 0&&kn.setValue(F,ae.setFromMatrixPosition(m.matrixWorld)),A.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&re.setValue(F,"isOrthographic",m.isOrthographicCamera===!0),nt!==m&&(nt=m,Hn=!0,Ai=!0)}if(Mt.needsLights&&(Ue.state.sunShadowMap.length>0&&re.setValue(F,"sunShadowMap",Ue.state.sunShadowMap,Y),Ue.state.directionalShadowMap.length>0&&re.setValue(F,"directionalShadowMap",Ue.state.directionalShadowMap,Y),Ue.state.spotShadowMap.length>0&&re.setValue(F,"spotShadowMap",Ue.state.spotShadowMap,Y),Ue.state.pointShadowMap.length>0&&re.setValue(F,"pointShadowMap",Ue.state.pointShadowMap,Y)),C.isSkinnedMesh){re.setOptional(F,C,"bindMatrix"),re.setOptional(F,C,"bindMatrixInverse");let oe=C.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),re.setValue(F,"boneTexture",oe.boneTexture,Y))}C.isBatchedMesh&&(re.setOptional(F,C,"batchingTexture"),re.setValue(F,"batchingTexture",C._matricesTexture,Y),re.setOptional(F,C,"batchingIdTexture"),re.setValue(F,"batchingIdTexture",C._indirectTexture,Y),re.setOptional(F,C,"batchingColorTexture"),C._colorsTexture!==null&&re.setValue(F,"batchingColorTexture",C._colorsTexture,Y));let Gn=I.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&U.update(C,I,Ke),(Hn||Mt.receiveShadow!==C.receiveShadow)&&(Mt.receiveShadow=C.receiveShadow,re.setValue(F,"receiveShadow",C.receiveShadow)),(E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial)&&E.envMap===null&&b.environment!==null&&(_e.envMapIntensity.value=b.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=gg()),Hn){if(re.setValue(F,"toneMappingExposure",D.toneMappingExposure),Mt.needsLights&&ur(_e,Ai),G&&E.fog===!0&&Rt.refreshFogUniforms(_e,G),Rt.refreshMaterialUniforms(_e,E,et,K,T.state.transmissionRenderTarget[m.id]),Mt.needsLights&&Mt.lightProbeGrid){let oe=Mt.lightProbeGrid;_e.probesSH.value=oe.texture,_e.probesMin.value.copy(oe.boundingBox.min),_e.probesMax.value.copy(oe.boundingBox.max),_e.probesResolution.value.copy(oe.resolution)}cs.upload(F,cr(Mt),_e,Y)}if(E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(cs.upload(F,cr(Mt),_e,Y),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&re.setValue(F,"center",C.center),re.setValue(F,"modelViewMatrix",C.modelViewMatrix),re.setValue(F,"normalMatrix",C.normalMatrix),re.setValue(F,"modelMatrix",C.matrixWorld),E.uniformsGroups!==void 0){let oe=E.uniformsGroups;for(let kn=0,Ri=oe.length;kn<Ri;kn++){let Dl=oe[kn];it.update(Dl,Ke),it.bind(Dl,Ke)}}return Ke}function ur(m,b){m.ambientLightColor.needsUpdate=b,m.lightProbe.needsUpdate=b,m.sunLights.needsUpdate=b,m.sunLightShadows.needsUpdate=b,m.directionalLights.needsUpdate=b,m.directionalLightShadows.needsUpdate=b,m.pointLights.needsUpdate=b,m.pointLightShadows.needsUpdate=b,m.spotLights.needsUpdate=b,m.spotLightShadows.needsUpdate=b,m.rectAreaLights.needsUpdate=b,m.hemisphereLights.needsUpdate=b}function xs(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(m,b,I){let E=W.get(m);E.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,E.__autoAllocateDepthBuffer===!1&&(E.__useRenderToTexture=!1),W.get(m.texture).__webglTexture=b,W.get(m.depthTexture).__webglTexture=E.__autoAllocateDepthBuffer?void 0:I,E.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,b){let I=W.get(m);I.__webglFramebuffer=b,I.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(m,b=0,I=0){at=m,Z=b,Q=I;let E=null,C=!1,G=!1;if(m){let X=W.get(m);if(X.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,X.__webglFramebuffer),rt.copy(m.viewport),Ct.copy(m.scissor),Et=m.scissorTest,g.viewport(rt),g.scissor(Ct),g.setScissorTest(Et),J=-1;return}else if(X.__webglFramebuffer===void 0)Y.setupRenderTarget(m);else if(X.__hasExternalTextures)Y.rebindTextures(m,W.get(m.texture).__webglTexture,W.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){let St=m.depthTexture;if(X.__boundDepthTexture!==St){if(St!==null&&W.has(St)&&(m.width!==St.image.width||m.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(m)}}let st=m.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(G=!0);let ot=W.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(ot[b])?E=ot[b][I]:E=ot[b],C=!0):m.samples>0&&Y.useMultisampledRTT(m)===!1?E=W.get(m).__webglMultisampledFramebuffer:Array.isArray(ot)?E=ot[I]:E=ot,rt.copy(m.viewport),Ct.copy(m.scissor),Et=m.scissorTest}else rt.copy(yt).multiplyScalar(et).floor(),Ct.copy(Ht).multiplyScalar(et).floor(),Et=de;if(I!==0&&(E=H),g.bindFramebuffer(F.FRAMEBUFFER,E)&&g.drawBuffers(m,E),g.viewport(rt),g.scissor(Ct),g.setScissorTest(Et),C){let X=W.get(m.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+b,X.__webglTexture,I)}else if(G){let X=b;for(let st=0;st<m.textures.length;st++){let ot=W.get(m.textures[st]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+st,ot.__webglTexture,I,X)}}else if(m!==null&&I!==0){let X=W.get(m.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,X.__webglTexture,I)}J=-1};function ci(m){let b=W.get(m);return(b.__readFormat!==m.format||b.__readType!==m.type)&&(b.__readFormat=m.format,b.__readType=m.type,b.__formatReadable=A.textureFormatReadable(m.format),b.__typeReadable=A.textureTypeReadable(m.type)),b}this.readRenderTargetPixels=function(m,b,I,E,C,G,q,X=0){if(!(m&&m.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=W.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&q!==void 0&&(st=st[q]),st){g.bindFramebuffer(F.FRAMEBUFFER,st);try{let ot=m.textures[X],St=ot.format,Tt=ot.type;m.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+X);let mt=ci(ot);if(mt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(mt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=m.width-E&&I>=0&&I<=m.height-C&&F.readPixels(b,I,E,C,pt.convert(St),pt.convert(Tt),G)}finally{let ot=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(m,b,I,E,C,G,q,X=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=W.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&q!==void 0&&(st=st[q]),st)if(b>=0&&b<=m.width-E&&I>=0&&I<=m.height-C){g.bindFramebuffer(F.FRAMEBUFFER,st);let ot=m.textures[X],St=ot.format,Tt=ot.type;m.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+X);let mt=ci(ot);if(mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,G.byteLength,F.STREAM_READ),F.readPixels(b,I,E,C,pt.convert(St),pt.convert(Tt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let he=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,he);let ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hc(F,ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,G),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Vt),F.deleteSync(ee),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,b=null,I=0){let E=Math.pow(2,-I),C=Math.floor(m.image.width*E),G=Math.floor(m.image.height*E),q=b!==null?b.x:0,X=b!==null?b.y:0;Y.setTexture2D(m,0),F.copyTexSubImage2D(F.TEXTURE_2D,I,0,0,q,X,C,G),g.unbindTexture()},this.copyTextureToTexture=function(m,b,I=null,E=null,C=0,G=0){let q,X,st,ot,St,Tt,mt,Vt,he,ee=m.isCompressedTexture?m.mipmaps[G]:m.image;if(I!==null)q=I.max.x-I.min.x,X=I.max.y-I.min.y,st=I.isBox3?I.max.z-I.min.z:1,ot=I.min.x,St=I.min.y,Tt=I.isBox3?I.min.z:0;else{let _e=Math.pow(2,-C);q=Math.floor(ee.width*_e),X=Math.floor(ee.height*_e),m.isDataArrayTexture?st=ee.depth:m.isData3DTexture?st=Math.floor(ee.depth*_e):st=1,ot=0,St=0,Tt=0}E!==null?(mt=E.x,Vt=E.y,he=E.z):(mt=0,Vt=0,he=0);let jt=pt.convert(b.format),ve=pt.convert(b.type),Mt;b.isData3DTexture?(Y.setTexture3D(b,0),Mt=F.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Y.setTexture2DArray(b,0),Mt=F.TEXTURE_2D_ARRAY):(Y.setTexture2D(b,0),Mt=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,b.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,b.unpackAlignment);let Ue=g.getParameter(F.UNPACK_ROW_LENGTH),Qt=g.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=g.getParameter(F.UNPACK_SKIP_PIXELS),pn=g.getParameter(F.UNPACK_SKIP_ROWS),Hn=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,ee.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),g.pixelStorei(F.UNPACK_SKIP_ROWS,St),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Tt);let Ai=m.isDataArrayTexture||m.isData3DTexture,re=b.isDataArrayTexture||b.isData3DTexture;if(m.isDepthTexture){let _e=W.get(m),Gn=W.get(b),oe=W.get(_e.__renderTarget),kn=W.get(Gn.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,oe.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Ri=0;Ri<st;Ri++)Ai&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(m).__webglTexture,C,Tt+Ri),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,he+Ri)),F.blitFramebuffer(ot,St,q,X,mt,Vt,q,X,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(C!==0||m.isRenderTargetTexture||W.has(m)){let _e=W.get(m),Gn=W.get(b);g.bindFramebuffer(F.READ_FRAMEBUFFER,N),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let oe=0;oe<st;oe++)Ai?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.__webglTexture,C,Tt+oe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_e.__webglTexture,C),re?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gn.__webglTexture,G,he+oe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gn.__webglTexture,G),C!==0?F.blitFramebuffer(ot,St,q,X,mt,Vt,q,X,F.COLOR_BUFFER_BIT,F.NEAREST):re?F.copyTexSubImage3D(Mt,G,mt,Vt,he+oe,ot,St,q,X):F.copyTexSubImage2D(Mt,G,mt,Vt,ot,St,q,X);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else re?m.isDataTexture||m.isData3DTexture?F.texSubImage3D(Mt,G,mt,Vt,he,q,X,st,jt,ve,ee.data):b.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,G,mt,Vt,he,q,X,st,jt,ee.data):F.texSubImage3D(Mt,G,mt,Vt,he,q,X,st,jt,ve,ee):m.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,mt,Vt,q,X,jt,ve,ee.data):m.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,mt,Vt,ee.width,ee.height,jt,ee.data):F.texSubImage2D(F.TEXTURE_2D,G,mt,Vt,q,X,jt,ve,ee);g.pixelStorei(F.UNPACK_ROW_LENGTH,Ue),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),g.pixelStorei(F.UNPACK_SKIP_ROWS,pn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Hn),G===0&&b.generateMipmaps&&F.generateMipmap(Mt),g.unbindTexture()},this.initRenderTarget=function(m){W.get(m).__webglFramebuffer===void 0&&Y.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?Y.setTextureCube(m,0):m.isData3DTexture?Y.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?Y.setTexture2DArray(m,0):Y.setTexture2D(m,0),g.unbindTexture()},this.resetState=function(){Z=0,Q=0,at=null,g.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var so=class extends gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new on;t.deleteAttribute("uv");let e=new Je({side:Ce}),n=new Je,s=new vi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Nn(t,n,6),o=new pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Lt(t,ds(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Lt(t,ds(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Lt(t,ds(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Lt(t,ds(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Lt(t,ds(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new Lt(t,ds(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ds(i){return new Vs({color:0,emissive:16777215,emissiveIntensity:i})}function Sh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Be,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Mh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let M=0;M<a[u].length;++M)p.push(a[u][M][h]);let x=Mh(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}}return l}function Mh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,p=u.count;h<p;h++)for(let x=0;x<e;x++){let M=u.getComponent(h,x);o.setComponent(h+d,x,M)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Pl=document.currentScript,bh=Pl&&Pl.src?Pl.src.replace(/[^/]*$/,""):"./",ro=33;function Ll(i){return i<11?60+260*(i/11)**2:i<14?110-90*((i-11)/3):i<22?20+320*((i-14)/8)**2:340-280*(1-(1-(i-22)/11)**2)}var ar=1/120,fs=Math.round(ro/ar),ai=new Float32Array(fs+1);(()=>{let t=n=>{if(n>10.3&&n<11.7){let s=Ll(10.3),r=Ll(11+.7),a=(n-(11-.7))/(2*.7);return s+(r-s)*a*a*(3-2*a)}return Ll(n)};for(let n=1;n<=fs;n++)ai[n]=ai[n-1]+.42*(t((n-1)*ar)+t(n*ar))/2*ar;let e=Math.round(ai[fs]/360)*360/ai[fs];for(let n=0;n<=fs;n++)ai[n]*=e})();var xg=i=>{let t=i/ar,e=Math.floor(t),n=t-e;return(ai[e]+(ai[Math.min(e+1,fs)]-ai[e])*n)*Math.PI/180},un=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function vg(i){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}vg(async()=>{let i=document.querySelector(".cpw-stage");if(!i||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=document.createElement("canvas");if(!(t.getContext("webgl2")||t.getContext("webgl")))return;let e=[...i.querySelectorAll(".cpw-card")].map((m,b)=>({i:b,n:(m.querySelector(".cpw-n")||{}).textContent||"",t:(m.querySelector(".cpw-ct")||{}).textContent||"",l:(m.querySelector(".cpw-cl")||{}).textContent||"",tasks:[...m.querySelectorAll(".cpw-bub li")].map(I=>I.textContent.trim()).filter(Boolean)}));if(!e.length)return;try{await Promise.race([Promise.all([document.fonts.load('60px "Classy Vogue"'),document.fonts.load("24px Inter"),document.fonts.load("80px Hurricane")]),new Promise(m=>setTimeout(m,1500))])}catch{}let n='"Classy Vogue", Georgia, serif',s="Inter, Helvetica, Arial, sans-serif",r=new eo({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,1.75)),r.outputColorSpace=xe,r.toneMapping=Ys,r.toneMappingExposure=1.05,r.shadowMap.enabled=!0,r.shadowMap.type=yi,r.localClippingEnabled=!0;let a=r.domElement;a.className="cpw-gl-canvas",a.setAttribute("aria-hidden","true");let o=1.18;Object.assign(a.style,{position:"absolute",left:"0",right:"0",bottom:"0",top:(1-o)*100+"%",width:"100%",height:o*100+"%",zIndex:"1",pointerEvents:"none",opacity:"0",transition:"opacity 1.2s ease"}),(()=>{let I=document.createElement("canvas");I.width=800,I.height=450;let E=I.getContext("2d"),C=11,G=()=>(C=C*16807%2147483647)/2147483647,q=E.createRadialGradient(800/2,450*.45,40,800/2,450*.5,800*.65);q.addColorStop(0,"#4a2e18"),q.addColorStop(.55,"#24170f"),q.addColorStop(1,"#0b0e1a"),E.fillStyle=q,E.fillRect(0,0,800,450);for(let Tt=0;Tt<700;Tt++){let mt=800*(.08+.84*G()),Vt=450*.62*Math.pow(G(),.8),he=1+G()*3.5;E.fillStyle=`rgba(255,${200+G()*40|0},${140+G()*60|0},${.12+G()*.45})`,E.beginPath(),E.arc(mt,Vt,he,0,7),E.fill()}let X=["rgba(214,92,96,.75)","rgba(236,170,160,.7)","rgba(250,236,226,.7)","rgba(178,58,52,.7)","rgba(240,150,90,.6)"];[[.1,.58],[.26,.66],[.78,.6],[.92,.66],[.6,.72],[.4,.74]].forEach(([Tt,mt])=>{for(let Vt=0;Vt<40;Vt++)E.fillStyle=X[Vt%X.length],E.beginPath(),E.arc(800*Tt+(G()-.5)*95,450*mt+(G()-.5)*60,7+G()*13,0,7),E.fill();E.fillStyle="rgba(60,80,40,.5)";for(let Vt=0;Vt<12;Vt++)E.beginPath(),E.arc(800*Tt+(G()-.5)*110,450*mt+(G()-.2)*65,5+G()*9,0,7),E.fill()});let st=E.createLinearGradient(0,450*.78,0,450);st.addColorStop(0,"rgba(70,45,25,.9)"),st.addColorStop(.08,"rgba(255,214,160,.35)"),st.addColorStop(.14,"rgba(30,20,12,.95)"),st.addColorStop(1,"rgba(12,10,12,1)"),E.fillStyle=st,E.fillRect(0,450*.78,800,450*.22);for(let Tt=0;Tt<40;Tt++)E.fillStyle=`rgba(255,220,170,${.15+G()*.3})`,E.beginPath(),E.arc(800*G(),450*(.82+G()*.15),2+G()*4.5,0,7),E.fill();{let Tt=document.createElement("canvas");Tt.width=800,Tt.height=450;let mt=Tt.getContext("2d");mt.filter="blur(9px)",mt.drawImage(I,0,0),E.clearRect(0,0,800,450),E.drawImage(Tt,0,0)}E.globalCompositeOperation="destination-in";let ot=E.createRadialGradient(800/2,450*.55,450*.3,800/2,450*.55,800*.56);ot.addColorStop(0,"rgba(0,0,0,1)"),ot.addColorStop(.7,"rgba(0,0,0,.85)"),ot.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=ot,E.fillRect(0,0,800,450);let St=E.createLinearGradient(0,0,0,450);St.addColorStop(0,"rgba(0,0,0,0)"),St.addColorStop(.42,"rgba(0,0,0,1)"),St.addColorStop(.9,"rgba(0,0,0,1)"),St.addColorStop(1,"rgba(0,0,0,0)"),St.addColorStop(1,"rgba(0,0,0,1)"),E.fillStyle=St,E.fillRect(0,0,800,450),a.style.backgroundImage=`url(${I.toDataURL("image/png")})`,a.style.backgroundSize="cover",a.style.backgroundPosition="center"})();let l=new gi;l.fog=new Ns(1971213,3.2,6.4);let c=new hs(r);l.environment=c.fromScene(new so,.04).texture,l.environmentIntensity=.55;let u=new Ee(28,2,.1,30),d=1,h=2*Math.PI*d/e.length*.86,p=h*1.6,x=p/2,M=new qs;M.setOptions({imageOrientation:"none"});function _(m,b,I){let E=document.createElement("canvas");E.width=E.height=m;let C=E.getContext("2d");C.fillStyle="#fbfaf7",C.fillRect(0,0,m,m);let G=b,q=()=>(G=G*16807%2147483647)/2147483647;for(let st=0;st<I;st++){let ot=q()*m,St=q()*m,Tt=q()*Math.PI*2;C.strokeStyle=`rgba(150,145,138,${.03+q()*.07})`,C.lineWidth=.6+q()*2,C.beginPath(),C.moveTo(ot,St);for(let mt=0;mt<50;mt++)Tt+=(q()-.5)*.7,ot+=Math.cos(Tt)*m*.012,St+=Math.sin(Tt)*m*.012,C.lineTo(ot,St);C.stroke()}let X=new Sn(E);return X.colorSpace=xe,X.anisotropy=4,X.wrapS=X.wrapT=qi,X}let f=new On({map:_(512,7,10),color:16645111,roughness:.62,sheen:.6,sheenColor:new Dt(16777215),clearcoat:.15}),R=new On({color:16776438,roughness:.18,metalness:0,clearcoat:1,sheen:1,sheenColor:new Dt(16773856),iridescence:.35});function L(m,b,I,E,C){let G=new Nn(new Ye(I,14,10),R,E),q=new pe;for(let X=0;X<E;X++){let st=X/E*Math.PI*2;q.position.set(Math.sin(st)*m,b,Math.cos(st)*m),q.updateMatrix(),G.setMatrixAt(X,q.matrix)}return G.castShadow=!0,C.add(G),G}let y=new we;l.add(y);let S=new we;l.add(S);let T=new Lt(new He(d-.035,d-.035,p,128,1,!0),f);S.add(T);let P=new Lt(new He(d+.03,d+.03,.05,128),f);P.position.y=x+.025,P.castShadow=!0,P.receiveShadow=!0,S.add(P),L(d+.03,x+.05,.014,150,S),L(d+.035,x+.002,.012,170,S);let v=new Lt(new He(d+.07,d+.09,.06,128),f);v.position.y=-x-.03,v.receiveShadow=!0,S.add(v),L(d+.075,-x+.004,.013,170,S);let w=d*1.34,D=p*.74,O=new Lt(new He(w,w,D,160),f);O.position.y=-x-.06-D/2,O.receiveShadow=!0,S.add(O),L(w+.004,-x-.06-.012,.015,220,S),L(w+.004,-x-.06-D+.01,.013,220,S);let z=new we;l.add(z),(()=>{let m=D*.86,b=m*.75,I=18,E=-x-.06-D*.5,C=w+.004,G=new On({color:16776697,roughness:.4,sheen:1,sheenColor:new Dt(16777215)});for(let q=0;q<I;q++){let X=q/I*Math.PI*2,st=b/C,ot=new Lt(new He(C,C,m+.02,12,1,!0,X-st/2-.008,st+.016),G);ot.position.y=E,z.add(ot);let St=new Je({color:16777215,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}),Tt=new Lt(new He(C+.002,C+.002,m,12,1,!0,X-st/2,st),St);Tt.position.y=E,z.add(Tt),M.load(bh+"wed/"+(q%12+1)+".webp",he=>{let ee=document.createElement("canvas");ee.width=360,ee.height=480;let jt=ee.getContext("2d");jt.drawImage(he,0,0,360,480),jt.strokeStyle="rgba(255,255,255,.9)",jt.lineWidth=6,jt.strokeRect(10,10,340,460);let ve=new Sn(ee);ve.colorSpace=xe,ve.anisotropy=4,St.map=ve,St.needsUpdate=!0},void 0,()=>{});let mt=new Lt(new Ye(.014,12,8),R),Vt=X+Math.PI/I;mt.position.set(Math.sin(Vt)*(C+.01),E,Math.cos(Vt)*(C+.01)),z.add(mt)}})();let H=d*.6,N=p*.42,k=new Lt(new He(H,H,N,128),f);k.position.y=x+.05+N/2,k.castShadow=!0,k.receiveShadow=!0,S.add(k),L(H+.004,x+.05+.012,.012,110,S),L(H+.004,x+.05+N-.004,.011,110,S);let Z=x+.05+N;(()=>{let I=document.createElement("canvas");I.width=4096,I.height=512;let E=I.getContext("2d");E.textAlign="center",E.textBaseline="middle",E.font='400 330px Hurricane, "Great Vibes", cursive',E.fillStyle="rgba(120,60,30,.18)",E.fillText("Viva gli sposi",4096/2+4,512/2+6),E.fillStyle="#e25b1e",E.fillText("Viva gli sposi",4096/2,512/2);let C=new Sn(I);C.colorSpace=xe,C.anisotropy=8;let G=new Lt(new He(H+.004,H+.004,N*.62,128,1,!0),new Je({map:C,transparent:!0,depthWrite:!1,roughness:.5}));G.position.y=x+.05+N*.47,G.rotation.y=Math.PI,G.renderOrder=3,S.add(G)})();let Q=new On({color:16777215,vertexColors:!0,roughness:.55,sheen:1,sheenColor:new Dt(16774126),sheenRoughness:.4,side:Ge}),at=new Je({color:5073468,roughness:.6,side:Ge});function J(){let m=[];for(let I=0;I<18;I++){let E=I/17,C=.008+.03*Math.pow(E,.7),G=new Ye(C,12,8,-.45-.25*E,.9+.5*E,.55-.2*E,1);G.translate(0,-C*.35,0),G.rotateX(-.15-.95*E*E),G.translate(0,0,C*.35*E),G.rotateY(I*2.399);let q=new Dt().setHSL(.985,.5+.25*(1-E),.78-.14*(1-E)),X=new Float32Array(G.attributes.position.count*3);for(let st=0;st<X.length;st+=3)X[st]=q.r,X[st+1]=q.g,X[st+2]=q.b;G.setAttribute("color",new Ae(X,3)),G.deleteAttribute("uv"),m.push(G)}return Sh(m)}function nt(){let m=new Fn(.03,.075,4,8),b=m.attributes.position;for(let I=0;I<b.count;I++){let E=b.getX(I),C=b.getY(I),G=Math.cos(C/.075*Math.PI)*.5+.5;b.setX(I,E*(.25+G)),b.setZ(I,-Math.abs(E)*.6+C*C*2.2)}return m.translate(0,.0375,0),m.computeVertexNormals(),m}let rt=J(),Ct=nt(),Et=[];for(let m=0;m<11;m++){let b=m/10,I=.75-b*.85,E=b<.45,C=E?H+.02:d+.02,G=E?Z-b*N*1.9:x+.06;Et.push([Math.sin(I)*C,G,Math.cos(I)*C,.75+.5*Math.sin(m*1.7)**2])}for(let m=0;m<9;m++){let b=-.55+m*.13,I=w-.06-m%2*.05;Et.push([Math.sin(b)*I,-x-.04,Math.cos(b)*I,.7+.45*(m*7%5)/5])}for(let m=0;m<5;m++){let b=Math.PI*.75+m*.32;Et.push([Math.sin(b)*H*.55,Z+.01,Math.cos(b)*H*.55,.55+.1*m%.3])}let ie=new Nn(rt,Q,Et.length),Yt=new Nn(Ct,at,Et.length*3),zt=new pe,K=0;Et.forEach(([m,b,I,E],C)=>{zt.position.set(m,b,I),zt.rotation.set(Math.sin(C)*.3,C*1.3,Math.cos(C*2)*.3),zt.scale.setScalar(E*2.5),zt.updateMatrix(),ie.setMatrixAt(C,zt.matrix);for(let G=0;G<3;G++)zt.rotation.set(1.1+Math.sin(C+G)*.3,C*1.3+G*2.1,0),zt.scale.setScalar(E*1.8),zt.position.set(m,b-.015,I),zt.updateMatrix(),Yt.setMatrixAt(K++,zt.matrix)}),S.add(ie,Yt);function et(m,b,I,E,C,G){let q=b.split(/\s+/),X="";for(let st of q){let ot=X?X+" "+st:st;m.measureText(ot).width>C&&X?(m.fillText(X,I,E),E+=G,X=st):X=ot}return X&&m.fillText(X,I,E),E}function vt(m,b,I,E,C,G){m.beginPath(),m.moveTo(b+G,I),m.arcTo(b+E,I,b+E,I+C,G),m.arcTo(b+E,I+C,b,I+C,G),m.arcTo(b,I+C,b,I,G),m.arcTo(b,I,b+E,I,G),m.closePath()}function Ut(m,b){let E=Math.round(1024),C=document.createElement("canvas");C.width=640,C.height=E;let G=C.getContext("2d");if(vt(G,0,0,640,E,22),G.clip(),G.fillStyle="#1b1c22",G.fillRect(0,0,640,E),b){let St=Math.max(640/b.width,E/b.height),Tt=b.width*St,mt=b.height*St;G.drawImage(b,(640-Tt)/2,(E-mt)/2,Tt,mt)}let q=G.createLinearGradient(0,E*.45,0,E);q.addColorStop(0,"rgba(8,8,12,0)"),q.addColorStop(.45,"rgba(8,8,12,.86)"),q.addColorStop(1,"rgba(8,8,12,.94)"),G.fillStyle=q,G.fillRect(0,E*.45,640,E*.55);let X=38,st=E*.72;G.fillStyle="rgba(255,255,255,.75)",G.font=`500 22px ${s}`,G.fillText(m.n.trim(),X,st),G.font=`400 58px ${n}`,G.fillStyle="#ffffff",st=et(G,m.t.toUpperCase(),X,st+64,640-X*2,60),G.fillStyle="#e25b1e",G.fillRect(X,st+22,54,3),G.font=`400 27px ${s}`,G.fillStyle="rgba(255,255,255,.86)",et(G,m.l,X,st+74,640-X*2,38);let ot=new Sn(C);return ot.colorSpace=xe,ot.anisotropy=r.capabilities.getMaxAnisotropy(),ot}function yt(){let I=document.createElement("canvas");I.width=320,I.height=512;let E=I.getContext("2d");vt(E,0,0,320,512,11),E.clip(),E.fillStyle="#f4f1ec",E.fillRect(0,0,320,512),E.strokeStyle="rgba(17,17,17,.16)",E.lineWidth=2,vt(E,18,18,284,476,8),E.stroke(),E.fillStyle="rgba(17,17,17,.5)",E.font=`400 30px ${n}`,E.textAlign="center",E.fillText("COVER PAGE",320/2,512/2);let C=new Sn(I);return C.colorSpace=xe,C}let Ht=new Je({map:yt(),roughness:.7,transparent:!0,alphaTest:.5}),de=new Map;function Wt(m,b){let I=m+b;if(de.has(I))return de.get(I);let E=document.createElement("canvas"),C=E.getContext("2d"),G=`400 34px ${s}`;C.font=G;let q=Math.ceil(C.measureText(m).width)+56,X=70;E.width=q,E.height=X+22,C.font=G,C.fillStyle=b?"rgba(226,91,30,.94)":"rgba(255,253,249,.95)",vt(C,2,2,q-4,X-4,(X-4)/2),C.fill(),C.beginPath(),C.arc(26,X+4,7,0,7),C.fill(),C.beginPath(),C.arc(16,X+15,4,0,7),C.fill(),C.fillStyle=b?"#ffffff":"#141311",C.textBaseline="middle",C.fillText(m,28,X/2+1);let st=new Sn(E);st.colorSpace=xe;let ot={t:st,a:E.width/E.height};return de.set(I,ot),ot}let $t=[],te=[],Gt=new Fn(h,p);Gt.translate(0,p/2,0);let ae=new Fn(1,1),ge=[];e.forEach((m,b)=>{let I=b/e.length*Math.PI*2,E=new we;E.position.set(Math.sin(I)*d,-x,Math.cos(I)*d),E.rotation.y=I,y.add(E);let C=new we;E.add(C),te.push(C);let G=new Je({color:16777215,roughness:.55,transparent:!0,alphaTest:.5,map:Ut(m,null)}),q=new Lt(Gt,G);q.castShadow=!0,C.add(q),ge.push({card:m,mat:G});let X=new Lt(Gt,Ht);X.rotation.y=Math.PI,X.position.z=-.002,C.add(X);let st=.85+b*37%45/100;for(let ot=0;ot<3;ot++){let St=new Lt(ae,new _i({transparent:!0,depthWrite:!1,opacity:0,fog:!0}));St.position.z=.012,St.renderOrder=2,C.add(St),$t.push({mesh:St,card:m,k:ot,i:b,start:-ot*1.25*st,dur:(2.8+(b+ot*7)%5*.35)*st,idx:(ot*3+b)%Math.max(1,m.tasks.length),x:0})}}),ge.forEach(({card:m,mat:b})=>{M.load(bh+"img/"+(m.i+1)+".webp",I=>{let E=b.map;b.map=Ut(m,I),b.needsUpdate=!0,E&&E.dispose()},void 0,()=>{})});let Ie=new qe(new V(0,1,0),-Z+.001),Zt=(m,b)=>new On(Object.assign({color:m,roughness:.45,sheen:.8,sheenColor:new Dt(16777215),clearcoat:.35,clippingPlanes:[Ie],clipShadows:!0},b||{})),xt=p*1,F=(m,b)=>m.map(([I,E])=>new Bt(I*xt*b,E*xt)),fe=new we;l.add(fe);let Xt=new we;Xt.position.x=.085*xt,fe.add(Xt);let A=Zt(15984348),g=Zt(14271405),B=new Lt(new Un(F([[0,0],[.3,0],[.32,.03],[.28,.12],[.21,.28],[.13,.45],[.08,.58],[.07,.62]],.62),80),g);B.castShadow=!0,Xt.add(B);let W=new Lt(new Un(F([[.07,.62],[.085,.7],[.095,.76],[.07,.8],[.035,.82],[.03,.85]],.62),48),g);W.castShadow=!0,Xt.add(W);let Y=new Lt(new Ye(.045*xt,40,28),A);Y.position.y=.9*xt,Y.scale.set(.9,1.08,.95),Y.castShadow=!0,Xt.add(Y);let ct=Zt(7033923),ut=new Lt(new Ye(.024*xt,20,14),ct);ut.position.set(0,.935*xt,-.033*xt),Xt.add(ut);let $=Zt(16777215,{transparent:!0,opacity:0,side:Ge,depthWrite:!1,roughness:.6}),tt=new Lt(new Un(F([[.02,.95],[.06,.86],[.11,.6],[.16,.3],[.22,.04]],.62),48,Math.PI*.55,Math.PI*.9),$);Xt.add(tt);let ht=new we,Rt=Zt(16777215);for(let m=0;m<9;m++){let b=new Lt(new Ye(.016*xt,14,10),Rt);b.position.set(Math.cos(m*2.4)*.02*xt,Math.sin(m*1.7)*.012*xt,Math.sin(m*2.4)*.02*xt),ht.add(b)}ht.position.set(-.02*xt,.64*xt,.07*xt),Xt.add(ht);let lt=new we;lt.position.x=-.085*xt,fe.add(lt);let dt=Zt(4149102),wt=Zt(12372182),It=Zt(15654093),Ft=Zt(2761244),U=new He(.026*xt,.022*xt,.5*xt,20);U.translate(0,.25*xt,0);let ft=new Lt(U,dt);ft.position.x=-.03*xt,lt.add(ft);let j=new Lt(U,dt);j.position.x=.03*xt,lt.add(j),[-.03,.03].forEach(m=>{let b=new Lt(new on(.05*xt,.025*xt,.08*xt),Ft);b.position.set(m*xt,.012*xt,.012*xt),lt.add(b)});let pt=new Lt(new Un(F([[.06,.48],[.085,.52],[.09,.6],[.1,.72],[.105,.78],[.05,.82],[.03,.84]],.95),40),wt);pt.castShadow=!0,lt.add(pt);let gt=new He(.02*xt,.018*xt,.3*xt,14);gt.translate(0,-.15*xt,0);let it=new Lt(gt,wt);it.position.set(-.105*xt,.78*xt,0),it.rotation.z=-.12,lt.add(it);let At=new Lt(gt,wt);At.position.set(.105*xt,.78*xt,0),At.rotation.z=.35,At.rotation.x=-.2,lt.add(At);let bt=new Lt(new Ye(.047*xt,40,28),It);bt.position.y=.9*xt,bt.scale.set(.92,1.08,.96),bt.castShadow=!0,lt.add(bt);let se=new Lt(new Ye(.049*xt,30,20,0,Math.PI*2,0,Math.PI*.5),ct);se.position.y=.915*xt,lt.add(se);let Kt=Zt(1382173,{transparent:!0,opacity:0,roughness:.38}),ze=new Lt(new Un(F([[.07,.42],[.095,.5],[.098,.6],[.106,.72],[.11,.785],[.055,.82]],.97),40,Math.PI*.12,Math.PI*1.76),Kt);lt.add(ze);let Pe=new Lt(new on(.05*xt,.018*xt,.012*xt),Zt(855570,{transparent:!0,opacity:0}));Pe.position.set(0,.812*xt,.068*xt),lt.add(Pe);let oi=new Lt(new Ye(.013*xt,12,10),Zt(16777215,{transparent:!0,opacity:0}));oi.position.set(.055*xt,.74*xt,.085*xt),lt.add(oi),fe.position.y=Z;let or=new vi(16775408,.7,1.4,2);or.position.set(0,Z+.5*xt,.3),l.add(or);let en=m=>new Dt(m),ps=[[g,en(14271405),en(16777215)],[dt,en(4149102),en(1382173)],[wt,en(12372182),en(16777215)],[Ft,en(7031347),en(855312)]];l.add(new ks(16777215,2106426,.55));let dn=new Xs(16774890,26,12,Math.PI/6.5,.6,1.6);dn.position.set(1.6,3.6,3.2),dn.target.position.set(0,x,0),dn.castShadow=!0,dn.shadow.mapSize.set(1024,1024),dn.shadow.bias=-4e-4,dn.shadow.normalBias=.02,l.add(dn,dn.target);let ms=new es(13621503,.9);ms.position.set(-2.5,1.6,-3),l.add(ms);let gs=new es(16777215,.35);gs.position.set(-2,.6,2.5),l.add(gs);let fn=-x-.06-D-.16,Ti=Z+xt*1,_s=new V(0,(fn+Ti)/2,0),lr=new V(0,.15,1).normalize();function li(){let m=i.clientWidth,b=i.clientHeight*o;if(!m||!b)return;r.setSize(m,b,!1),u.aspect=m/b;let I=al.degToRad(u.fov),E=2*Math.atan(Math.tan(I/2)*u.aspect),C=(w+.06)*2,G=(Ti-fn)*1.04,q=Math.max(C/2/Math.tan(E/2),G/2/Math.tan(I/2))+d*1.1;u.position.copy(_s).addScaledVector(lr,q),u.lookAt(_s),u.updateProjectionMatrix(),l.fog.near=q-d*.2,l.fog.far=q+d*2.6}li(),new ResizeObserver(li).observe(i),i.appendChild(a);let zn=i.querySelector(".cpw-shade");zn&&(zn.style.top=(1-o)*100+"%");let Vn=zn&&zn.getAnimations?zn.getAnimations()[0]:null,cr=performance.now(),hr=()=>((Vn&&Vn.currentTime!=null?Number(Vn.currentTime):performance.now()-cr)/1e3%ro+ro)%ro,wi=!0,wn=0,ur=!1,xs=0;new IntersectionObserver(m=>{wi=m[0].isIntersecting,wi&&!wn&&(wn=requestAnimationFrame(ci))},{rootMargin:"100px"}).observe(i),document.addEventListener("visibilitychange",()=>{!document.hidden&&wi&&!wn&&(wn=requestAnimationFrame(ci))});function ci(m){if(wn=0,!wi||document.hidden)return;let b=hr();y.rotation.y=-xg(b),z.rotation.y=-m/1e3*.06,te.forEach((q,X)=>{let st=un(.4+X*.11,1.4+X*.11,b)*(1-un(30.4+X*.1,31.2+X*.1,b));q.rotation.x=(1-st)*Math.PI*.5});let I=un(.2,3.4,b)*(1-un(31,32.8,b));fe.position.y=Z-(1-I)*xt*1.05,fe.rotation.y=Math.sin(m/1e3*.6)*.45;let E=un(4,20,b);for(let[q,X,st]of ps)q.color.copy(X).lerp(st,E);let C=.55+.45*un(6,18,b);B.scale.set(C,1,C),$.opacity=.34*un(12,20,b),ht.scale.setScalar(Math.max(.001,un(14,21,b))),Kt.opacity=un(8,16,b),Pe.material.opacity=un(12,17,b),oi.material.opacity=un(15,20,b),ze.visible=Kt.opacity>.01,Pe.visible=Pe.material.opacity>.01,oi.visible=oi.material.opacity>.01;let G=Math.min(.05,xs?(m-xs)/1e3:.016);xs=m;for(let q of $t){q.start+=G;let X=q.start/q.dur;if(X<0){q.mesh.material.opacity=0;continue}X>=1&&(q.start=0,X=0,q.idx=(q.idx+3)%Math.max(1,q.card.tasks.length));let st=q.card.tasks[q.idx];if(!st)continue;let ot=Wt(st,q.idx%3===2);q.mesh.material.map!==ot.t&&(q.mesh.material.map=ot.t,q.mesh.material.needsUpdate=!0,q.x=(q.idx*53%40/100-.2)*h);let St=h*.17;q.mesh.scale.set(St*ot.a,St,1),q.mesh.position.x=q.x+Math.sin(X*3.1+q.k)*h*.04,q.mesh.position.y=p*.44+X*p*.3;let Tt=1-te[q.i].rotation.x/(Math.PI*.5);q.mesh.material.opacity=(X<.18?X/.18:X>.7?Math.max(0,(1-X)/.3):1)*Tt}r.render(l,u),ur||(ur=!0,requestAnimationFrame(()=>{a.style.opacity="1",i.classList.add("cpw-gl"),i.style.overflow="visible",i.style.contain="none"})),wn=requestAnimationFrame(ci)}wn=requestAnimationFrame(ci)});})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
