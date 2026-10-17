(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="169",$h=0,Ml=1,Jh=2,Oc=1,zc=2,qn=3,ci=0,hn=1,_n=2,$n=0,Ri=1,Fn=2,Sl=3,wl=4,jh=5,Ti=100,Qh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,au=203,no=204,io=205,ou=206,lu=207,cu=208,hu=209,uu=210,du=211,fu=212,pu=213,mu=214,so=0,ro=1,ao=2,cs=3,oo=4,lo=5,co=6,ho=7,Bc=0,gu=1,vu=2,ai=0,kc=1,Vc=2,Hc=3,$o=4,xu=5,Gc=6,Wc=7,Xc=300,hs=301,us=302,Wr=303,uo=304,ea=306,ds=1e3,Rn=1001,fo=1002,Sn=1003,_u=1004,sr=1005,An=1006,va=1007,Ai=1008,jn=1009,qc=1010,Yc=1011,Hs=1012,Jo=1013,Pi=1014,Kn=1015,Jn=1016,jo=1017,Qo=1018,fs=1020,Kc=35902,Zc=1021,$c=1022,Pn=1023,Jc=1024,jc=1025,as=1026,ps=1027,Qc=1028,tl=1029,th=1030,el=1031,nl=1033,Or=33776,zr=33777,Br=33778,kr=33779,po=35840,mo=35841,go=35842,vo=35843,xo=36196,_o=37492,yo=37496,Mo=37808,So=37809,wo=37810,bo=37811,To=37812,Eo=37813,Ao=37814,Co=37815,Ro=37816,Po=37817,Lo=37818,Do=37819,Io=37820,Uo=37821,Vr=36492,No=36494,Fo=36495,eh=36283,Oo=36284,zo=36285,Bo=36286,yu=3200,Mu=3201,nh=0,Su=1,Yn="",nn="srgb",hi="srgb-linear",il="display-p3",na="display-p3-linear",Xr="linear",Ce="srgb",qr="rec709",Yr="p3",zi=7680,bl=519,wu=512,bu=513,Tu=514,ih=515,Eu=516,Au=517,Cu=518,Ru=519,ko=35044,Tl="300 es",Zn=2e3,Kr=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const Fs=Math.PI/180,Gs=180/Math.PI;function On(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i,t){return(i%t+t)%t}function Pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lu(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function Du(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function Iu(i,t=1){return t-Math.abs(sl(i,t*2)-t)}function Uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Fu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ou(i,t){return i+Math.random()*(t-i)}function zu(i){return i*(.5-Math.random())}function Bu(i){i!==void 0&&(El=i);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ku(i){return i*Fs}function Vu(i){return i*Gs}function Hu(i){return(i&i-1)===0&&i!==0}function Gu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:Fs,RAD2DEG:Gs,generateUUID:On,clamp:Ye,euclideanModulo:sl,mapLinear:Pu,inverseLerp:Lu,lerp:Os,damp:Du,pingpong:Iu,smoothstep:Uu,smootherstep:Nu,randInt:Fu,randFloat:Ou,randFloatSpread:zu,seededRandom:Bu,degToRad:ku,radToDeg:Vu,isPowerOfTwo:Hu,ceilPowerOfTwo:Gu,floorPowerOfTwo:Wu,setQuaternionFromProperEuler:Xu,normalize:_e,denormalize:Cn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,a,o,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],w=s[1],_=s[4],y=s[7],L=s[2],R=s[5],A=s[8];return r[0]=a*v+o*w+l*L,r[3]=a*p+o*_+l*R,r[6]=a*m+o*y+l*A,r[1]=c*v+h*w+d*L,r[4]=c*p+h*_+d*R,r[7]=c*m+h*y+d*A,r[2]=u*v+f*w+g*L,r[5]=u*p+f*_+g*R,r[8]=u*m+f*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new se;function sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qu(){const i=Zr("canvas");return i.style.display="block",i}const Al={};function Hr(i){i in Al||(Al[i]=!0,console.warn(i))}function Yu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ku(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cl=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[hi]:{transfer:Xr,primaries:qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[nn]:{transfer:Ce,primaries:qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[na]:{transfer:Xr,primaries:Yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl)},[il]:{transfer:Ce,primaries:Yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl).convertLinearToSRGB()}},$u=new Set([hi,na]),ve={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$u.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ss[t].toReference,s=Ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ss[i].primaries},getTransfer:function(i){return i===Yn?Xr:Ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ss[t].luminanceCoefficients)}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Ju{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Zr("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ju=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;class un extends xs{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=Rn,s=Rn,r=An,a=Ai,o=Pn,l=jn,c=un.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=On(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Xc;un.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,L=(m+1)/2,R=(h+u)/4,A=(d+v)/4,P=(g+p)/4;return _>y&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=A/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ah extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let p=1-o;const m=l*u+c*f+h*g+d*v,w=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const L=Math.sqrt(_),R=Math.atan2(L,m*w);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}const y=o*w;if(l=l*p+u*y,c=c*p+f*y,h=h*p+g*y,d=d*p+v*y,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new T,Pl=new $s;class Js{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ar.subVectors(this.max,ws),ki.subVectors(t.a,ws),Vi.subVectors(t.b,ws),Hi.subVectors(t.c,ws),ti.subVectors(Vi,ki),ei.subVectors(Hi,Vi),gi.subVectors(ki,Hi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!Sa(e,ki,Vi,Hi,ar)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,ki,Vi,Hi,ar))?!1:(or.crossVectors(ti,ei),e=[or.x,or.y,or.z],Sa(e,ki,Vi,Hi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new T,new T,new T,new T,new T,new T,new T,new T],bn=new T,rr=new Js,ki=new T,Vi=new T,Hi=new T,ti=new T,ei=new T,gi=new T,ws=new T,ar=new T,or=new T,vi=new T;function Sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nd=new Js,bs=new T,wa=new T;class js{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(wa)),this.expandByPoint(bs.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new T,ba=new T,lr=new T,ni=new T,Ta=new T,cr=new T,Ea=new T;class Qs{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=ni.dot(this.direction),l=-ni.dot(lr),c=ni.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ba).addScaledVector(lr,u),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),cr.subVectors(n,t),Ea.crossVectors(Ta,cr);let a=this.direction.dot(Ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(ni,cr));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(ni));if(c<0||l+c>a)return null;const h=-o*ni.dot(Ea);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ii.crossVectors(n,pn),ii.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ii.crossVectors(n,pn)),ii.normalize(),hr.crossVectors(pn,ii),s[0]=ii.x,s[4]=hr.x,s[8]=pn.x,s[1]=ii.y,s[5]=hr.y,s[9]=pn.y,s[2]=ii.z,s[6]=hr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],w=n[3],_=n[7],y=n[11],L=n[15],R=s[0],A=s[4],P=s[8],Y=s[12],x=s[1],S=s[5],z=s[9],N=s[13],G=s[2],K=s[6],B=s[10],tt=s[14],X=s[3],Mt=s[7],St=s[11],bt=s[15];return r[0]=a*R+o*x+l*G+c*X,r[4]=a*A+o*S+l*K+c*Mt,r[8]=a*P+o*z+l*B+c*St,r[12]=a*Y+o*N+l*tt+c*bt,r[1]=h*R+d*x+u*G+f*X,r[5]=h*A+d*S+u*K+f*Mt,r[9]=h*P+d*z+u*B+f*St,r[13]=h*Y+d*N+u*tt+f*bt,r[2]=g*R+v*x+p*G+m*X,r[6]=g*A+v*S+p*K+m*Mt,r[10]=g*P+v*z+p*B+m*St,r[14]=g*Y+v*N+p*tt+m*bt,r[3]=w*R+_*x+y*G+L*X,r[7]=w*A+_*S+y*K+L*Mt,r[11]=w*P+_*z+y*B+L*St,r[15]=w*Y+_*N+y*tt+L*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+v*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+p*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],w=d*p*c-v*u*c+v*l*f-o*p*f-d*l*m+o*u*m,_=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,y=h*v*c-g*d*c+g*o*f-a*v*f-h*o*m+a*d*m,L=g*d*l-h*v*l-g*o*u+a*v*u+h*o*p-a*d*p,R=e*w+n*_+s*y+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=w*A,t[1]=(v*u*r-d*p*r-v*s*f+n*p*f+d*s*m-n*u*m)*A,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*A,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*A,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*A,t[8]=y*A,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*m-e*d*m)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*A,t[12]=L*A,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*p+e*d*p)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*A,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,p=a*d,m=o*d,w=l*c,_=l*h,y=l*d,L=n.x,R=n.y,A=n.z;return s[0]=(1-(v+m))*L,s[1]=(f+y)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(u+m))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+_)*A,s[9]=(p-w)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const c=1/r,h=1/a,d=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Zn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===Zn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Kr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Zn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let g,v;if(o===Zn)g=(a+r)*d,v=-2*d;else if(o===Kr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new T,Tn=new we,id=new T(0,0,0),sd=new T(1,1,1),ii=new T,hr=new T,pn=new T,Ll=new we,Dl=new $s;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rd=0;const Il=new T,Wi=new $s,Gn=new we,ur=new T,Ts=new T,ad=new T,od=new $s,Ul=new T(1,0,0),Nl=new T(0,1,0),Fl=new T(0,0,1),Ol={type:"added"},ld={type:"removed"},Xi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Pe extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new T,e=new zn,n=new $s,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new se}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ts,ur,this.up):Gn.lookAt(ur,Ts,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new T(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new T,Wn=new T,Ca=new T,Xn=new T,qi=new T,Yi=new T,zl=new T,Ra=new T,Pa=new T,La=new T,Da=new Se,Ia=new Se,Ua=new Se;class yn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Wn.subVectors(n,e),Ca.subVectors(t,e);const a=En.dot(En),o=En.dot(Wn),l=En.dot(Ca),c=Wn.dot(Wn),h=Wn.dot(Ca),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Da.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Wn.subVectors(t,e),En.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,n),Yi.subVectors(r,n),Ra.subVectors(t,n);const l=qi.dot(Ra),c=Yi.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Pa.subVectors(t,s);const h=qi.dot(Pa),d=Yi.dot(Pa);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(qi,a);La.subVectors(t,r);const f=qi.dot(La),g=Yi.dot(La);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Yi,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return zl.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(zl,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=sl(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return ve.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ye(tn.r*255,0,255))*65536+Math.round(Ye(tn.g*255,0,255))*256+Math.round(Ye(tn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=nn){ve.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,s=tn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(dr);const n=Os(si.h,dr.h,e),s=Os(si.s,dr.s,e),r=Os(si.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Wt;Wt.NAMES=oh;let cd=0;class ui extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ri,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mn extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new T,fr=new st;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class lh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ch extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hd=0;const vn=new we,Fa=new Pe,Ki=new T,mn=new Js,Es=new Js,Xe=new T;class ze extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?ch:lh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mn.min,Es.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,Es.max),mn.expandByPoint(Xe)):(mn.expandByPoint(Es.min),mn.expandByPoint(Es.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),Xe.add(Ki)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,d=new T,u=new st,f=new st,g=new st,v=new T,p=new T;function m(P,Y,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,Y),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[P].add(v),o[Y].add(v),o[x].add(v),l[P].add(p),l[Y].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,Y=w.length;P<Y;++P){const x=w[P],S=x.start,z=x.count;for(let N=S,G=S+z;N<G;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new T,y=new T,L=new T,R=new T;function A(P){L.fromBufferAttribute(s,P),R.copy(L);const Y=o[P];_.copy(Y),_.sub(L.multiplyScalar(L.dot(Y))).normalize(),y.crossVectors(R,Y);const S=y.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,S)}for(let P=0,Y=w.length;P<Y;++P){const x=w[P],S=x.start,z=x.count;for(let N=S,G=S+z;N<G;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new we,xi=new Qs,pr=new js,kl=new T,mr=new T,gr=new T,vr=new T,Oa=new T,xr=new T,Vl=new T,_r=new T;class ut extends Pe{constructor(t=new ze,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Oa.fromBufferAttribute(d,t),a?xr.addScaledVector(Oa,h):xr.addScaledVector(Oa.sub(e),h))}e.add(xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(pr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(pr,kl)===null||xi.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Bl.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,L=_;y<L;y+=3){const R=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);s=yr(this,m,t,n,c,h,d,R,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const w=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);s=yr(this,a,t,n,c,h,d,w,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,L=_;y<L;y+=3){const R=y,A=y+1,P=y+2;s=yr(this,m,t,n,c,h,d,R,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const w=p,_=p+1,y=p+2;s=yr(this,a,t,n,c,h,d,w,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ud(i,t,e,n,s,r,a,o){let l;if(t.side===hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const h=ud(i,t,e,n,mr,gr,vr,Vl);if(h){const d=new T;yn.getBarycoord(Vl,mr,gr,vr,d),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,d,new st)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new T,materialIndex:0};yn.getNormal(mr,gr,vr,u.normal),h.face=u,h.barycoord=d}return h}class Ee extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function g(v,p,m,w,_,y,L,R,A,P,Y){const x=y/A,S=L/P,z=y/2,N=L/2,G=R/2,K=A+1,B=P+1;let tt=0,X=0;const Mt=new T;for(let St=0;St<B;St++){const bt=St*S-N;for(let ae=0;ae<K;ae++){const fe=ae*x-z;Mt[v]=fe*w,Mt[p]=bt*_,Mt[m]=G,c.push(Mt.x,Mt.y,Mt.z),Mt[v]=0,Mt[p]=0,Mt[m]=R>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),d.push(ae/A),d.push(1-St/P),tt+=1}}for(let St=0;St<P;St++)for(let bt=0;bt<A;bt++){const ae=u+bt+K*St,fe=u+bt+K*(St+1),Z=u+(bt+1)+K*(St+1),it=u+(bt+1)+K*St;l.push(ae,fe,it),l.push(fe,Z,it),X+=6}o.addGroup(f,X,Y),f+=X,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=ms(i[e]);for(const s in n)t[s]=n[s]}return t}function dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Ws={clone:ms,merge:an};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new T,Hl=new st,Gl=new st;class fn extends uh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Gl),e.subVectors(Gl,Hl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,$i=1;class md extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Zi,$i,t,e);s.layers=this.layers,this.add(s);const r=new fn(Zi,$i,t,e);r.layers=this.layers,this.add(r);const a=new fn(Zi,$i,t,e);a.layers=this.layers,this.add(a);const o=new fn(Zi,$i,t,e);o.layers=this.layers,this.add(o);const l=new fn(Zi,$i,t,e);l.layers=this.layers,this.add(l);const c=new fn(Zi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dh extends un{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:$n});r.uniforms.tEquirect.value=e;const a=new ut(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=An),new md(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const za=new T,vd=new T,xd=new se;class wi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xd.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new js,Mr=new T;class al{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],w=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,p-f,y-m).normalize(),n[1].setComponents(l+r,u+c,p+f,y+m).normalize(),n[2].setComponents(l+a,u+h,p+g,y+w).normalize(),n[3].setComponents(l-a,u-h,p-g,y-w).normalize(),n[4].setComponents(l-o,u-d,p-v,y-_).normalize(),e===Zn)n[5].setComponents(l+o,u+d,p+v,y+_).normalize();else if(e===Kr)n[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _d(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class on extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const w=m*u-a;for(let _=0;_<c;_++){const y=_*d-r;g.push(y,-w,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){const _=w+c*m,y=w+c*(m+1),L=w+1+c*(m+1),R=w+1+c*m;f.push(_,y,R),f.push(y,L,R)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cp=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,zp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hp=`#define PHONG
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
}`,Gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Kp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:yd,alphahash_pars_fragment:Md,alphamap_fragment:Sd,alphamap_pars_fragment:wd,alphatest_fragment:bd,alphatest_pars_fragment:Td,aomap_fragment:Ed,aomap_pars_fragment:Ad,batching_pars_vertex:Cd,batching_vertex:Rd,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Dd,iridescence_fragment:Id,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:zd,color_fragment:Bd,color_pars_fragment:kd,color_pars_vertex:Vd,color_vertex:Hd,common:Gd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:Kd,emissivemap_pars_fragment:Zd,colorspace_fragment:$d,colorspace_pars_fragment:Jd,envmap_fragment:jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:tf,envmap_pars_vertex:ef,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:of,gradientmap_pars_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:_f,lights_fragment_begin:yf,lights_fragment_maps:Mf,lights_fragment_end:Sf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Ef,map_fragment:Af,map_pars_fragment:Cf,map_particle_fragment:Rf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Df,morphinstance_vertex:If,morphcolor_vertex:Uf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Ff,morphtarget_vertex:Of,normal_fragment_begin:zf,normal_fragment_maps:Bf,normal_pars_fragment:kf,normal_pars_vertex:Vf,normal_vertex:Hf,normalmap_pars_fragment:Gf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Yf,opaque_fragment:Kf,packing:Zf,premultiplied_alpha_fragment:$f,project_vertex:Jf,dithering_fragment:jf,dithering_pars_fragment:Qf,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:vp,uv_vertex:xp,worldpos_vertex:_p,background_vert:yp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:wp,cube_vert:bp,cube_frag:Tp,depth_vert:Ep,depth_frag:Ap,distanceRGBA_vert:Cp,distanceRGBA_frag:Rp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Dp,linedashed_frag:Ip,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Fp,meshlambert_frag:Op,meshmatcap_vert:zp,meshmatcap_frag:Bp,meshnormal_vert:kp,meshnormal_frag:Vp,meshphong_vert:Hp,meshphong_frag:Gp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:Kp,points_frag:Zp,shadow_vert:$p,shadow_frag:Jp,sprite_vert:jp,sprite_frag:Qp},xt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Nn={basic:{uniforms:an([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:an([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:an([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:an([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:an([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:an([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:an([xt.points,xt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:an([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:an([xt.common,xt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:an([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:an([xt.sprite,xt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:an([xt.common,xt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:an([xt.lights,xt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Nn.physical={uniforms:an([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Sr={r:0,b:0,g:0},yi=new zn,t0=new we;function e0(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const y=g(w);y===null?m(o,l):y&&y.isColor&&(m(y,1),_=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===ea)?(h===void 0&&(h=new ut(new Ee(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ms(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(yi)),h.material.toneMapped=ve.getTransfer(y.colorSpace)!==Ce,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new on(2,2),new ke({name:"BackgroundMaterial",uniforms:ms(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ve.getTransfer(y.colorSpace)!==Ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,_){w.getRGB(Sr,hh(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:v,addToRenderList:p}}function n0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,S,z,N,G){let K=!1;const B=d(N,z,S);r!==B&&(r=B,c(r.object)),K=f(x,N,z,G),K&&g(x,N,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(x,S,z,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,S,z){const N=z.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let K=G[S.id];K===void 0&&(K={},G[S.id]=K);let B=K[N];return B===void 0&&(B=u(l()),K[N]=B),B}function u(x){const S=[],z=[],N=[];for(let G=0;G<e;G++)S[G]=0,z[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,S,z,N){const G=r.attributes,K=S.attributes;let B=0;const tt=z.getAttributes();for(const X in tt)if(tt[X].location>=0){const St=G[X];let bt=K[X];if(bt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(bt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(bt=x.instanceColor)),St===void 0||St.attribute!==bt||bt&&St.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(x,S,z,N){const G={},K=S.attributes;let B=0;const tt=z.getAttributes();for(const X in tt)if(tt[X].location>=0){let St=K[X];St===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(St=x.instanceColor));const bt={};bt.attribute=St,St&&St.data&&(bt.data=St.data),G[X]=bt,B++}r.attributes=G,r.attributesNum=B,r.index=N}function v(){const x=r.newAttributes;for(let S=0,z=x.length;S<z;S++)x[S]=0}function p(x){m(x,0)}function m(x,S){const z=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;z[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),G[x]!==S&&(i.vertexAttribDivisor(x,S),G[x]=S)}function w(){const x=r.newAttributes,S=r.enabledAttributes;for(let z=0,N=S.length;z<N;z++)S[z]!==x[z]&&(i.disableVertexAttribArray(z),S[z]=0)}function _(x,S,z,N,G,K,B){B===!0?i.vertexAttribIPointer(x,S,z,G,K):i.vertexAttribPointer(x,S,z,N,G,K)}function y(x,S,z,N){v();const G=N.attributes,K=z.getAttributes(),B=S.defaultAttributeValues;for(const tt in K){const X=K[tt];if(X.location>=0){let Mt=G[tt];if(Mt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),Mt!==void 0){const St=Mt.normalized,bt=Mt.itemSize,ae=t.get(Mt);if(ae===void 0)continue;const fe=ae.buffer,Z=ae.type,it=ae.bytesPerElement,Rt=Z===i.INT||Z===i.UNSIGNED_INT||Mt.gpuType===Jo;if(Mt.isInterleavedBufferAttribute){const ht=Mt.data,qt=ht.stride,Ht=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let jt=0;jt<X.locationSize;jt++)m(X.location+jt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let jt=0;jt<X.locationSize;jt++)p(X.location+jt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let jt=0;jt<X.locationSize;jt++)_(X.location+jt,bt/X.locationSize,Z,St,qt*it,(Ht+bt/X.locationSize*jt)*it,Rt)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,Mt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ht=0;ht<X.locationSize;ht++)_(X.location+ht,bt/X.locationSize,Z,St,bt*it,bt/X.locationSize*ht*it,Rt)}}else if(B!==void 0){const St=B[tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(X.location,St);break;case 3:i.vertexAttrib3fv(X.location,St);break;case 4:i.vertexAttrib4fv(X.location,St);break;default:i.vertexAttrib1fv(X.location,St)}}}}w()}function L(){P();for(const x in n){const S=n[x];for(const z in S){const N=S[z];for(const G in N)h(N[G].object),delete N[G];delete S[z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const z in S){const N=S[z];for(const G in N)h(N[G].object),delete N[G];delete S[z]}delete n[x.id]}function A(x){for(const S in n){const z=n[S];if(z[x.id]===void 0)continue;const N=z[x.id];for(const G in N)h(N[G].object),delete N[G];delete z[x.id]}}function P(){Y(),a=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function i0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function s0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function r0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new wi,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const w=r?0:n,_=w*4;let y=m.clippingState||null;l.value=y,y=h(g,u,_,f);for(let L=0;L!==_;++L)y[L]=e[L];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=f;_!==v;++_,y+=4)a.copy(d[_]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function a0(i){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=hs:o===uo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===uo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ol extends uh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,Wl=[.125,.215,.35,.446,.526,.582],Ei=20,Ba=new ol,Xl=new Wt;let ka=null,Va=0,Ha=0,Ga=!1;const bi=(1+Math.sqrt(5))/2,Ji=1/bi,ql=[new T(-bi,Ji,0),new T(bi,Ji,0),new T(-Ji,0,bi),new T(Ji,0,bi),new T(0,bi,-Ji),new T(0,bi,Ji),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Va,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Jn,format:Pn,colorSpace:hi,depthBuffer:!1},s=Yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o0(r)),this._blurMaterial=l0(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){const o=new fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Xl),h.toneMapping=ai,h.autoClear=!1;const f=new Mn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ut(new Ee,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(Xl),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;wr(s,w*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ut(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Ei;p>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const m=[];let w=0;for(let A=0;A<Ei;++A){const P=A/v,Y=Math.exp(-P*P/2);m.push(Y),A===0?w+=Y:A<p&&(w+=2*Y)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const y=this._sizeLods[s],L=3*y*(s>_-ss?s-_+ss:0),R=4*(this._cubeSize-y);wr(e,L,R,3*y,2*y),l.setRenderTarget(e),l.render(d,Ba)}}function o0(i){const t=[],e=[],n=[];let s=i;const r=i-ss+1+Wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ss?l=Wl[a-i+ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,w=new Float32Array(v*g*f),_=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,P=R>2?0:-1,Y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(Y,v*g*R),_.set(u,p*g*R);const x=[R,R,R,R,R,R];y.set(x,m*g*R)}const L=new ze;L.setAttribute("position",new cn(w,v)),L.setAttribute("uv",new cn(_,p)),L.setAttribute("faceIndex",new cn(y,m)),t.push(L),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yl(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l0(i,t,e){const n=new Float32Array(Ei),s=new T(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Kl(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Zl(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wr||l===uo,h=l===hs||l===us;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Vo(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Vo(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function h0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let _=0,y=w.length;_<y;_+=3){const L=w[_+0],R=w[_+1],A=w[_+2];u.push(L,R,R,A,A,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,y=w.length/3-1;_<y;_+=3){const L=_+0,R=_+1,A=_+2;u.push(L,R,R,A,A,L)}}else return;const p=new(sh(u)?ch:lh)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function d0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=f[w];for(let w=0;w<v.length;w++)e.update(m,n,v[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function f0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p0(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let L=o.attributes.position.count*y,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*R*4*d),P=new ah(A,L,R,d);P.type=Kn,P.needsUpdate=!0;const Y=y*4;for(let S=0;S<d;S++){const z=m[S],N=w[S],G=_[S],K=L*R*4*S;for(let B=0;B<z.count;B++){const tt=B*Y;g===!0&&(s.fromBufferAttribute(z,B),A[K+tt+0]=s.x,A[K+tt+1]=s.y,A[K+tt+2]=s.z,A[K+tt+3]=0),v===!0&&(s.fromBufferAttribute(N,B),A[K+tt+4]=s.x,A[K+tt+5]=s.y,A[K+tt+6]=s.z,A[K+tt+7]=0),p===!0&&(s.fromBufferAttribute(G,B),A[K+tt+8]=s.x,A[K+tt+9]=s.y,A[K+tt+10]=s.z,A[K+tt+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new st(L,R)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function m0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ph extends un{constructor(t,e,n,s,r,a,o,l,c,h=as){if(h!==as&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Pi),n===void 0&&h===ps&&(n=fs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mh=new un,$l=new ph(1,1),gh=new ah,vh=new ed,xh=new dh,Jl=[],jl=[],Ql=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function _s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),Ge(e,n)}}function M0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),Ge(e,n)}}function S0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),Ge(e,n)}}function w0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function A0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function L0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=ih,r=$l):r=mh,e.setTexture2D(t||r,s)}function D0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vh,s)}function I0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xh,s)}function U0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gh,s)}function N0(i){switch(i){case 5126:return g0;case 35664:return v0;case 35665:return x0;case 35666:return _0;case 35674:return y0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return b0;case 35668:case 35672:return T0;case 35669:case 35673:return E0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return U0}}function F0(i,t){i.uniform1fv(this.addr,t)}function O0(i,t){const e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function z0(i,t){const e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function B0(i,t){const e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function k0(i,t){const e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V0(i,t){const e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H0(i,t){const e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function G0(i,t){i.uniform1iv(this.addr,t)}function W0(i,t){i.uniform2iv(this.addr,t)}function X0(i,t){i.uniform3iv(this.addr,t)}function q0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function K0(i,t){i.uniform2uiv(this.addr,t)}function Z0(i,t){i.uniform3uiv(this.addr,t)}function $0(i,t){i.uniform4uiv(this.addr,t)}function J0(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||mh,r[a])}function j0(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vh,r[a])}function Q0(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xh,r[a])}function tm(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gh,r[a])}function em(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return z0;case 35666:return B0;case 35674:return k0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return K0;case 36295:return Z0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tm}}class nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N0(e.type)}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=em(e.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function nc(i,t){i.seq.push(t),i.map[t.id]=t}function rm(i,t,e){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),a=Wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nc(e,c===void 0?new nm(o,i,t):new im(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new sm(o),nc(e,d)),e=d}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);rm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const am=37297;let om=0;function lm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function cm(i){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i);let n;switch(t===e?n="":t===Yr&&e===qr?n="LinearDisplayP3ToLinearSRGB":t===qr&&e===Yr&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case na:return[n,"LinearTransferOETF"];case nn:case il:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lm(i.getShaderSource(t),a)}else return s}function hm(i,t){const e=cm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function um(i,t){let e;switch(t){case kc:e="Linear";break;case Vc:e="Reinhard";break;case Hc:e="Cineon";break;case $o:e="ACESFilmic";break;case Gc:e="AgX";break;case Wc:e="Neutral";break;case xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new T;function dm(){ve.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function pm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function rc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(gm,xm)}const vm=new Map;function xm(i,t){let e=ie[t];if(e===void 0){const n=vm.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(_m,ym)}function ym(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function bm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function Tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Em(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mm(e),c=Sm(e),h=wm(e),d=bm(e),u=Tm(e),f=fm(e),g=pm(r),v=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(p=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==ai?um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,hm("linearToOutputTexel",e.outputColorSpace),dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Ho(a),a=rc(a,e),a=ac(a,e),o=Ho(o),o=rc(o,e),o=ac(o,e),a=oc(a),o=oc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=w+p+a,y=w+m+o,L=ic(s,s.VERTEX_SHADER,_),R=ic(s,s.FRAGMENT_SHADER,y);s.attachShader(v,L),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(R).trim();let K=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,R);else{const tt=sc(s,L,"vertex"),X=sc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+tt+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||G==="")&&(B=!1);B&&(S.diagnostics={runnable:K,programLog:z,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(L),s.deleteShader(R),P=new Gr(s,v),Y=mm(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let Y;this.getAttributes=function(){return Y===void 0&&A(this),Y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,am)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=om++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Am=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rm(t),e.set(t,n)),n}}class Rm{constructor(t){this.id=Am++,this.code=t,this.usedTimes=0}}function Pm(i,t,e,n,s,r,a){const o=new rl,l=new Cm,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,z,N,G){const K=N.fog,B=G.geometry,tt=x.isMeshStandardMaterial?N.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||tt),Mt=X&&X.mapping===ea?X.image.height:null,St=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=bt!==void 0?bt.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let Z,it,Rt,ht;if(St){const $e=Nn[St];Z=$e.vertexShader,it=$e.fragmentShader}else Z=x.vertexShader,it=x.fragmentShader,l.update(x),Rt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const qt=i.getRenderTarget(),Ht=G.isInstancedMesh===!0,jt=G.isBatchedMesh===!0,ne=!!x.map,Q=!!x.matcap,C=!!X,dt=!!x.aoMap,ft=!!x.lightMap,rt=!!x.bumpMap,pt=!!x.normalMap,kt=!!x.displacementMap,Tt=!!x.emissiveMap,E=!!x.metalnessMap,M=!!x.roughnessMap,O=x.anisotropy>0,$=x.clearcoat>0,et=x.dispersion>0,J=x.iridescence>0,Ut=x.sheen>0,mt=x.transmission>0,Et=O&&!!x.anisotropyMap,oe=$&&!!x.clearcoatMap,ot=$&&!!x.clearcoatNormalMap,At=$&&!!x.clearcoatRoughnessMap,Pt=J&&!!x.iridescenceMap,$t=J&&!!x.iridescenceThicknessMap,Lt=Ut&&!!x.sheenColorMap,le=Ut&&!!x.sheenRoughnessMap,Qt=!!x.specularMap,ye=!!x.specularColorMap,I=!!x.specularIntensityMap,Ct=mt&&!!x.transmissionMap,W=mt&&!!x.thicknessMap,nt=!!x.gradientMap,_t=!!x.alphaMap,wt=x.alphaTest>0,ce=!!x.alphaHash,Le=!!x.extensions;let Ze=ai;x.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const te={shaderID:St,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:it,defines:x.defines,customVertexShaderID:Rt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:jt,batchingColor:jt&&G._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&G.instanceColor!==null,instancingMorph:Ht&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:qt===null?i.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:hi,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:Q,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:Mt,aoMap:dt,lightMap:ft,bumpMap:rt,normalMap:pt,displacementMap:f&&kt,emissiveMap:Tt,normalMapObjectSpace:pt&&x.normalMapType===Su,normalMapTangentSpace:pt&&x.normalMapType===nh,metalnessMap:E,roughnessMap:M,anisotropy:O,anisotropyMap:Et,clearcoat:$,clearcoatMap:oe,clearcoatNormalMap:ot,clearcoatRoughnessMap:At,dispersion:et,iridescence:J,iridescenceMap:Pt,iridescenceThicknessMap:$t,sheen:Ut,sheenColorMap:Lt,sheenRoughnessMap:le,specularMap:Qt,specularColorMap:ye,specularIntensityMap:I,transmission:mt,transmissionMap:Ct,thicknessMap:W,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Ri&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:ce,combine:x.combine,mapUv:ne&&p(x.map.channel),aoMapUv:dt&&p(x.aoMap.channel),lightMapUv:ft&&p(x.lightMap.channel),bumpMapUv:rt&&p(x.bumpMap.channel),normalMapUv:pt&&p(x.normalMap.channel),displacementMapUv:kt&&p(x.displacementMap.channel),emissiveMapUv:Tt&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:M&&p(x.roughnessMap.channel),anisotropyMapUv:Et&&p(x.anisotropyMap.channel),clearcoatMapUv:oe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(x.sheenRoughnessMap.channel),specularMapUv:Qt&&p(x.specularMap.channel),specularColorMapUv:ye&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:Ct&&p(x.transmissionMap.channel),thicknessMapUv:W&&p(x.thicknessMap.channel),alphaMapUv:_t&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(ne||_t),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function w(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)S.push(z),S.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){const S=v[x.type];let z;if(S){const N=Nn[S];z=Ws.clone(N.uniforms)}else z=x.uniforms;return z}function R(x,S){let z;for(let N=0,G=h.length;N<G;N++){const K=h[N];if(K.cacheKey===S){z=K,++z.usedTimes;break}}return z===void 0&&(z=new Em(i,S,x,r),h.push(z)),z}function A(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:L,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:Y}}function Lm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,v,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function o(d,u,f,g,v,p){const m=a(d,u,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,v,p){const m=a(d,u,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Dm),n.length>1&&n.sort(u||cc),s.length>1&&s.sort(u||cc)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Im(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new hc,i.set(n,[a])):s>=r.length?(a=new hc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Wt};break;case"SpotLight":e={position:new T,direction:new T,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Nm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Fm=0;function Om(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zm(i){const t=new Um,e=Nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new we,a=new we;function o(c){let h=0,d=0,u=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,w=0,_=0,y=0,L=0,R=0,A=0;c.sort(Om);for(let Y=0,x=c.length;Y<x;Y++){const S=c[Y],z=S.color,N=S.intensity,G=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=z.r*N,d+=z.g*N,u+=z.b*N;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],N);A++}else if(S.isDirectionalLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const tt=S.shadow,X=e.get(S);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=S.shadow.matrix,w++}n.directional[f]=B,f++}else if(S.isSpotLight){const B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(z).multiplyScalar(N),B.distance=G,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[v]=B;const tt=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,tt.updateMatrices(S),S.castShadow&&R++),n.spotLightMatrix[v]=tt.matrix,S.castShadow){const X=e.get(S);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=K,y++}v++}else if(S.isRectAreaLight){const B=t.get(S);B.color.copy(z).multiplyScalar(N),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=B,p++}else if(S.isPointLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const tt=S.shadow,X=e.get(S);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=B,g++}else if(S.isHemisphereLight){const B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(N),B.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==w||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=w,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=A,n.version=Fm++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const _=c[m];if(_.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function uc(i){const t=new zm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new uc(i),t.set(s,[o])):r>=a.length?(o=new uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class km extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vm extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wm(i,t,e){let n=new al;const s=new st,r=new st,a=new Se,o=new km({depthPacking:Mu}),l=new Vm,c={},h=e.maxTextureSize,d={[ci]:hn,[hn]:ci,[_n]:_n},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let m=this.type;this.render=function(R,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const Y=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),z=i.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=m!==qn&&this.type===qn,G=m===qn&&this.type!==qn;for(let K=0,B=R.length;K<B;K++){const tt=R[K],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Mt=X.getFrameExtents();if(s.multiply(Mt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,X.mapSize.y=r.y)),X.map===null||N===!0||G===!0){const bt=this.type!==qn?{minFilter:Sn,magFilter:Sn}:{};X.map!==null&&X.map.dispose(),X.map=new Ln(s.x,s.y,bt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const St=X.getViewportCount();for(let bt=0;bt<St;bt++){const ae=X.getViewport(bt);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),z.viewport(a),X.updateMatrices(tt,bt),n=X.getFrustum(),y(A,P,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===qn&&w(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Y,x,S)};function w(R,A){const P=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ln(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,u,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,f,v,null)}function _(R,A,P,Y){let x=null;const S=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)x=S;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,N=A.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let K=G[N];K===void 0&&(K=x.clone(),G[N]=K,A.addEventListener("dispose",L)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,Y===qn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=P}return x}function y(R,A,P,Y,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const N=t.update(R),G=R.material;if(Array.isArray(G)){const K=N.groups;for(let B=0,tt=K.length;B<tt;B++){const X=K[B],Mt=G[X.materialIndex];if(Mt&&Mt.visible){const St=_(R,Mt,Y,x);R.onBeforeShadow(i,R,A,P,N,St,X),i.renderBufferDirect(P,null,N,St,R,X),R.onAfterShadow(i,R,A,P,N,St,X)}}}else if(G.visible){const K=_(R,G,Y,x);R.onBeforeShadow(i,R,A,P,N,K,null),i.renderBufferDirect(P,null,N,K,R,null),R.onAfterShadow(i,R,A,P,N,K,null)}}const z=R.children;for(let N=0,G=z.length;N<G;N++)y(z[N],A,P,Y,x)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const Y=c[P],x=R.target.uuid;x in Y&&(Y[x].dispose(),delete Y[x])}}}const Xm={[so]:ro,[ao]:co,[oo]:ho,[cs]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:cs};function qm(i){function t(){let I=!1;const Ct=new Se;let W=null;const nt=new Se(0,0,0,0);return{setMask:function(_t){W!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),W=_t)},setLocked:function(_t){I=_t},setClear:function(_t,wt,ce,Le,Ze){Ze===!0&&(_t*=Le,wt*=Le,ce*=Le),Ct.set(_t,wt,ce,Le),nt.equals(Ct)===!1&&(i.clearColor(_t,wt,ce,Le),nt.copy(Ct))},reset:function(){I=!1,W=null,nt.set(-1,0,0,0)}}}function e(){let I=!1,Ct=!1,W=null,nt=null,_t=null;return{setReversed:function(wt){Ct=wt},setTest:function(wt){wt?Rt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(wt){W!==wt&&!I&&(i.depthMask(wt),W=wt)},setFunc:function(wt){if(Ct&&(wt=Xm[wt]),nt!==wt){switch(wt){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=wt}},setLocked:function(wt){I=wt},setClear:function(wt){_t!==wt&&(i.clearDepth(wt),_t=wt)},reset:function(){I=!1,W=null,nt=null,_t=null}}}function n(){let I=!1,Ct=null,W=null,nt=null,_t=null,wt=null,ce=null,Le=null,Ze=null;return{setTest:function(te){I||(te?Rt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(te){Ct!==te&&!I&&(i.stencilMask(te),Ct=te)},setFunc:function(te,$e,wn){(W!==te||nt!==$e||_t!==wn)&&(i.stencilFunc(te,$e,wn),W=te,nt=$e,_t=wn)},setOp:function(te,$e,wn){(wt!==te||ce!==$e||Le!==wn)&&(i.stencilOp(te,$e,wn),wt=te,ce=$e,Le=wn)},setLocked:function(te){I=te},setClear:function(te){Ze!==te&&(i.clearStencil(te),Ze=te)},reset:function(){I=!1,Ct=null,W=null,nt=null,_t=null,wt=null,ce=null,Le=null,Ze=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,w=null,_=null,y=null,L=null,R=new Wt(0,0,0),A=0,P=!1,Y=null,x=null,S=null,z=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=B>=1):tt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=B>=2);let X=null,Mt={};const St=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),ae=new Se().fromArray(St),fe=new Se().fromArray(bt);function Z(I,Ct,W,nt){const _t=new Uint8Array(4),wt=i.createTexture();i.bindTexture(I,wt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<W;ce++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(Ct+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return wt}const it={};it[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Rt(i.DEPTH_TEST),r.setFunc(cs),ft(!1),rt(Ml),Rt(i.CULL_FACE),C($n);function Rt(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ht(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function qt(I,Ct){return h[I]!==Ct?(i.bindFramebuffer(I,Ct),h[I]=Ct,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Ht(I,Ct){let W=u,nt=!1;if(I){W=d.get(Ct),W===void 0&&(W=[],d.set(Ct,W));const _t=I.textures;if(W.length!==_t.length||W[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,ce=_t.length;wt<ce;wt++)W[wt]=i.COLOR_ATTACHMENT0+wt;W.length=_t.length,nt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,nt=!0);nt&&i.drawBuffers(W)}function jt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const ne={[Ti]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};ne[eu]=i.MIN,ne[nu]=i.MAX;const Q={[iu]:i.ZERO,[su]:i.ONE,[ru]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[uu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[hu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[fu]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(I,Ct,W,nt,_t,wt,ce,Le,Ze,te){if(I===$n){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(Rt(i.BLEND),g=!0),I!==jh){if(I!==v||te!==P){if((p!==Ti||_!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,_=Ti),te)switch(I){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,w=null,y=null,L=null,R.set(0,0,0),A=0,v=I,P=te}return}_t=_t||Ct,wt=wt||W,ce=ce||nt,(Ct!==p||_t!==_)&&(i.blendEquationSeparate(ne[Ct],ne[_t]),p=Ct,_=_t),(W!==m||nt!==w||wt!==y||ce!==L)&&(i.blendFuncSeparate(Q[W],Q[nt],Q[wt],Q[ce]),m=W,w=nt,y=wt,L=ce),(Le.equals(R)===!1||Ze!==A)&&(i.blendColor(Le.r,Le.g,Le.b,Ze),R.copy(Le),A=Ze),v=I,P=!1}function dt(I,Ct){I.side===_n?ht(i.CULL_FACE):Rt(i.CULL_FACE);let W=I.side===hn;Ct&&(W=!W),ft(W),I.blending===Ri&&I.transparent===!1?C($n):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const nt=I.stencilWrite;a.setTest(nt),nt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Rt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(I){Y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Y=I)}function rt(I){I!==$h?(Rt(i.CULL_FACE),I!==x&&(I===Ml?i.cullFace(i.BACK):I===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),x=I}function pt(I){I!==S&&(K&&i.lineWidth(I),S=I)}function kt(I,Ct,W){I?(Rt(i.POLYGON_OFFSET_FILL),(z!==Ct||N!==W)&&(i.polygonOffset(Ct,W),z=Ct,N=W)):ht(i.POLYGON_OFFSET_FILL)}function Tt(I){I?Rt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+G-1),X!==I&&(i.activeTexture(I),X=I)}function M(I,Ct,W){W===void 0&&(X===null?W=i.TEXTURE0+G-1:W=X);let nt=Mt[W];nt===void 0&&(nt={type:void 0,texture:void 0},Mt[W]=nt),(nt.type!==I||nt.texture!==Ct)&&(X!==W&&(i.activeTexture(W),X=W),i.bindTexture(I,Ct||it[I]),nt.type=I,nt.texture=Ct)}function O(){const I=Mt[X];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(I){ae.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function Lt(I){fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),fe.copy(I))}function le(I,Ct){let W=l.get(Ct);W===void 0&&(W=new WeakMap,l.set(Ct,W));let nt=W.get(I);nt===void 0&&(nt=i.getUniformBlockIndex(Ct,I.name),W.set(I,nt))}function Qt(I,Ct){const nt=l.get(Ct).get(I);o.get(Ct)!==nt&&(i.uniformBlockBinding(Ct,nt,I.__bindingPointIndex),o.set(Ct,nt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,Mt={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,w=null,_=null,y=null,L=null,R=new Wt(0,0,0),A=0,P=!1,Y=null,x=null,S=null,z=null,N=null,ae.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Rt,disable:ht,bindFramebuffer:qt,drawBuffers:Ht,useProgram:jt,setBlending:C,setMaterial:dt,setFlipSided:ft,setCullFace:rt,setLineWidth:pt,setPolygonOffset:kt,setScissorTest:Tt,activeTexture:E,bindTexture:M,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:At,texImage3D:Pt,updateUBOMapping:le,uniformBlockBinding:Qt,texStorage2D:oe,texStorage3D:ot,texSubImage2D:J,texSubImage3D:Ut,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:$t,viewport:Lt,reset:ye}}function dc(i,t,e,n){const s=Ym(n);switch(e){case Zc:return i*t;case Jc:return i*t;case jc:return i*t*2;case Qc:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case $c:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case vo:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eh:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(i){switch(i){case jn:case qc:return{byteLength:1,components:1};case Hs:case Yc:case Jn:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case Pi:case Jo:case Kn:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Km(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):Zr("canvas")}function v(E,M,O){let $=1;const et=Tt(E);if((et.width>O||et.height>O)&&($=O/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor($*et.width),Ut=Math.floor($*et.height);d===void 0&&(d=g(J,Ut));const mt=M?g(J,Ut):d;return mt.width=J,mt.height=Ut,mt.getContext("2d").drawImage(E,0,0,J,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Ut+")."),mt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Sn&&E.minFilter!==An}function m(E){i.generateMipmap(E)}function w(E,M,O,$,et=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=M;if(M===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),M===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),M===i.RGBA){const Ut=et?Xr:ve.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Ut===Ce?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(E,M){let O;return E?M===null||M===Pi||M===fs?O=i.DEPTH24_STENCIL8:M===Kn?O=i.DEPTH32F_STENCIL8:M===Hs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===fs?O=i.DEPTH_COMPONENT24:M===Kn?O=i.DEPTH_COMPONENT32F:M===Hs&&(O=i.DEPTH_COMPONENT16),O}function y(E,M){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Sn&&E.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){const M=E.target;M.removeEventListener("dispose",L),A(M),M.isVideoTexture&&h.delete(M)}function R(E){const M=E.target;M.removeEventListener("dispose",R),Y(M)}function A(E){const M=n.get(E);if(M.__webglInit===void 0)return;const O=E.source,$=u.get(O);if($){const et=$[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(E),Object.keys($).length===0&&u.delete(O)}n.remove(E)}function P(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const O=E.source,$=u.get(O);delete $[M.__cacheKey],a.memory.textures--}function Y(E){const M=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let et=0;et<M.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(M.__webglFramebuffer[$][et]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=E.textures;for(let $=0,et=O.length;$<et;$++){const J=n.get(O[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(E)}let x=0;function S(){x=0}function z(){const E=x;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),x+=1,E}function N(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function G(E,M){const O=n.get(E);if(E.isVideoTexture&&pt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,E,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function K(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){fe(O,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function B(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){fe(O,E,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function tt(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const X={[ds]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},Mt={[Sn]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},St={[wu]:i.NEVER,[Ru]:i.ALWAYS,[bu]:i.LESS,[ih]:i.LEQUAL,[Tu]:i.EQUAL,[Cu]:i.GEQUAL,[Eu]:i.GREATER,[Au]:i.NOTEQUAL};function bt(E,M){if(M.type===Kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===va||M.magFilter===sr||M.magFilter===Ai||M.minFilter===An||M.minFilter===va||M.minFilter===sr||M.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,X[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,X[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,X[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Mt[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Mt[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==sr&&M.minFilter!==Ai||M.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(E,M){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",L));const $=M.source;let et=u.get($);et===void 0&&(et={},u.set($,et));const J=N(M);if(J!==E.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[J].usedTimes++;const Ut=et[E.__cacheKey];Ut!==void 0&&(et[E.__cacheKey].usedTimes--,Ut.usedTimes===0&&P(M)),E.__cacheKey=J,E.__webglTexture=et[J].texture}return O}function fe(E,M,O){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const et=ae(E,M),J=M.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);const Ut=n.get(J);if(J.version!==Ut.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const mt=ve.getPrimaries(ve.workingColorSpace),Et=M.colorSpace===Yn?null:ve.getPrimaries(M.colorSpace),oe=M.colorSpace===Yn||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ot=v(M.image,!1,s.maxTextureSize);ot=kt(M,ot);const At=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type);let $t=w(M.internalFormat,At,Pt,M.colorSpace,M.isVideoTexture);bt($,M);let Lt;const le=M.mipmaps,Qt=M.isVideoTexture!==!0,ye=Ut.__version===void 0||et===!0,I=J.dataReady,Ct=y(M,ot);if(M.isDepthTexture)$t=_(M.format===ps,M.type),ye&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,$t,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,$t,ot.width,ot.height,0,At,Pt,null));else if(M.isDataTexture)if(le.length>0){Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,le[0].width,le[0].height);for(let W=0,nt=le.length;W<nt;W++)Lt=le[W],Qt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Lt.width,Lt.height,At,Pt,Lt.data):e.texImage2D(i.TEXTURE_2D,W,$t,Lt.width,Lt.height,0,At,Pt,Lt.data);M.generateMipmaps=!1}else Qt?(ye&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,ot.width,ot.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,At,Pt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,$t,ot.width,ot.height,0,At,Pt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,$t,le[0].width,le[0].height,ot.depth);for(let W=0,nt=le.length;W<nt;W++)if(Lt=le[W],M.format!==Pn)if(At!==null)if(Qt){if(I)if(M.layerUpdates.size>0){const _t=dc(Lt.width,Lt.height,M.format,M.type);for(const wt of M.layerUpdates){const ce=Lt.data.subarray(wt*_t/Lt.data.BYTES_PER_ELEMENT,(wt+1)*_t/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,wt,Lt.width,Lt.height,1,At,ce,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Lt.width,Lt.height,ot.depth,At,Lt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,$t,Lt.width,Lt.height,ot.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Lt.width,Lt.height,ot.depth,At,Pt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,$t,Lt.width,Lt.height,ot.depth,0,At,Pt,Lt.data)}else{Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,Ct,$t,le[0].width,le[0].height);for(let W=0,nt=le.length;W<nt;W++)Lt=le[W],M.format!==Pn?At!==null?Qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Lt.width,Lt.height,At,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,$t,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Lt.width,Lt.height,At,Pt,Lt.data):e.texImage2D(i.TEXTURE_2D,W,$t,Lt.width,Lt.height,0,At,Pt,Lt.data)}else if(M.isDataArrayTexture)if(Qt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,$t,ot.width,ot.height,ot.depth),I)if(M.layerUpdates.size>0){const W=dc(ot.width,ot.height,M.format,M.type);for(const nt of M.layerUpdates){const _t=ot.data.subarray(nt*W/ot.data.BYTES_PER_ELEMENT,(nt+1)*W/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ot.width,ot.height,1,At,Pt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,At,Pt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,ot.width,ot.height,ot.depth,0,At,Pt,ot.data);else if(M.isData3DTexture)Qt?(ye&&e.texStorage3D(i.TEXTURE_3D,Ct,$t,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,At,Pt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,$t,ot.width,ot.height,ot.depth,0,At,Pt,ot.data);else if(M.isFramebufferTexture){if(ye)if(Qt)e.texStorage2D(i.TEXTURE_2D,Ct,$t,ot.width,ot.height);else{let W=ot.width,nt=ot.height;for(let _t=0;_t<Ct;_t++)e.texImage2D(i.TEXTURE_2D,_t,$t,W,nt,0,At,Pt,null),W>>=1,nt>>=1}}else if(le.length>0){if(Qt&&ye){const W=Tt(le[0]);e.texStorage2D(i.TEXTURE_2D,Ct,$t,W.width,W.height)}for(let W=0,nt=le.length;W<nt;W++)Lt=le[W],Qt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,At,Pt,Lt):e.texImage2D(i.TEXTURE_2D,W,$t,At,Pt,Lt);M.generateMipmaps=!1}else if(Qt){if(ye){const W=Tt(ot);e.texStorage2D(i.TEXTURE_2D,Ct,$t,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Pt,ot)}else e.texImage2D(i.TEXTURE_2D,0,$t,At,Pt,ot);p(M)&&m($),Ut.__version=J.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Z(E,M,O){if(M.image.length!==6)return;const $=ae(E,M),et=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const J=n.get(et);if(et.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const Ut=ve.getPrimaries(ve.workingColorSpace),mt=M.colorSpace===Yn?null:ve.getPrimaries(M.colorSpace),Et=M.colorSpace===Yn||Ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,At=[];for(let nt=0;nt<6;nt++)!oe&&!ot?At[nt]=v(M.image[nt],!0,s.maxCubemapSize):At[nt]=ot?M.image[nt].image:M.image[nt],At[nt]=kt(M,At[nt]);const Pt=At[0],$t=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),le=w(M.internalFormat,$t,Lt,M.colorSpace),Qt=M.isVideoTexture!==!0,ye=J.__version===void 0||$===!0,I=et.dataReady;let Ct=y(M,Pt);bt(i.TEXTURE_CUBE_MAP,M);let W;if(oe){Qt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,le,Pt.width,Pt.height);for(let nt=0;nt<6;nt++){W=At[nt].mipmaps;for(let _t=0;_t<W.length;_t++){const wt=W[_t];M.format!==Pn?$t!==null?Qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,wt.width,wt.height,$t,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,le,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,wt.width,wt.height,$t,Lt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,le,wt.width,wt.height,0,$t,Lt,wt.data)}}}else{if(W=M.mipmaps,Qt&&ye){W.length>0&&Ct++;const nt=Tt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,le,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ot){Qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At[nt].width,At[nt].height,$t,Lt,At[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,le,At[nt].width,At[nt].height,0,$t,Lt,At[nt].data);for(let _t=0;_t<W.length;_t++){const ce=W[_t].image[nt].image;Qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,ce.width,ce.height,$t,Lt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,le,ce.width,ce.height,0,$t,Lt,ce.data)}}else{Qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,$t,Lt,At[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,le,$t,Lt,At[nt]);for(let _t=0;_t<W.length;_t++){const wt=W[_t];Qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,$t,Lt,wt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,le,$t,Lt,wt.image[nt])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),J.__version=et.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function it(E,M,O,$,et,J){const Ut=r.convert(O.format,O.colorSpace),mt=r.convert(O.type),Et=w(O.internalFormat,Ut,mt,O.colorSpace);if(!n.get(M).__hasExternalTextures){const ot=Math.max(1,M.width>>J),At=Math.max(1,M.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,Et,ot,At,M.depth,0,Ut,mt,null):e.texImage2D(et,J,Et,ot,At,0,Ut,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),rt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,n.get(O).__webglTexture,0,ft(M)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,n.get(O).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(E,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const $=M.depthTexture,et=$&&$.isDepthTexture?$.type:null,J=_(M.stencilBuffer,et),Ut=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=ft(M);rt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,E)}else{const $=M.textures;for(let et=0;et<$.length;et++){const J=$[et],Ut=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),Et=w(J.internalFormat,Ut,mt,J.colorSpace),oe=ft(M);O&&rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Et,M.width,M.height):rt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,et=ft(M);if(M.depthTexture.format===as)rt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===ps)rt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function qt(E){const M=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=$}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,E)}else if(O){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),Rt(M.__webglDepthbuffer[$],E,!1);else{const et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Rt(M.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(E,M,O){const $=n.get(E);M!==void 0&&it($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qt(E)}function jt(E){const M=E.texture,O=n.get(E),$=n.get(M);E.addEventListener("dispose",R);const et=E.textures,J=E.isWebGLCubeRenderTarget===!0,Ut=et.length>1;if(Ut||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),J){O.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[mt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)O.__webglFramebuffer[mt][Et]=i.createFramebuffer()}else O.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)O.__webglFramebuffer[mt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let mt=0,Et=et.length;mt<Et;mt++){const oe=n.get(et[mt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&rt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const Et=et[mt];O.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[mt]);const oe=r.convert(Et.format,Et.colorSpace),ot=r.convert(Et.type),At=w(Et.internalFormat,oe,ot,Et.colorSpace,E.isXRRenderTarget===!0),Pt=ft(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,At,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,O.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),bt(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)it(O.__webglFramebuffer[mt][Et],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else it(O.__webglFramebuffer[mt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let mt=0,Et=et.length;mt<Et;mt++){const oe=et[mt],ot=n.get(oe);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),bt(i.TEXTURE_2D,oe),it(O.__webglFramebuffer,E,oe,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(oe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),bt(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)it(O.__webglFramebuffer[Et],E,M,i.COLOR_ATTACHMENT0,mt,Et);else it(O.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,mt,0);p(M)&&m(mt),e.unbindTexture()}E.depthBuffer&&qt(E)}function ne(E){const M=E.textures;for(let O=0,$=M.length;O<$;O++){const et=M[O];if(p(et)){const J=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ut=n.get(et).__webglTexture;e.bindTexture(J,Ut),m(J),e.unbindTexture()}}}const Q=[],C=[];function dt(E){if(E.samples>0){if(rt(E)===!1){const M=E.textures,O=E.width,$=E.height;let et=i.COLOR_BUFFER_BIT;const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(E),mt=M.length>1;if(mt)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Et]);const oe=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,et,i.NEAREST),l===!0&&(Q.length=0,C.length=0,Q.push(i.COLOR_ATTACHMENT0+Et),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Et]);const oe=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ft(E){return Math.min(s.maxSamples,E.samples)}function rt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function kt(E,M){const O=E.colorSpace,$=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==hi&&O!==Yn&&(ve.getTransfer(O)===Ce?($!==Pn||et!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=Ht,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=rt}function Zm(i,t){function e(n,s=Yn){let r;const a=ve.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===$c)return i.RGB;if(n===Pn)return i.RGBA;if(n===Jc)return i.LUMINANCE;if(n===jc)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===th)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===Or||n===zr||n===Br||n===kr)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===_o||n===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===_o)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===wo||n===bo||n===To||n===Eo||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Io)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===No||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===Oo||n===zo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $m extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends xs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new tg,p=e.getContextAttributes();let m=null,w=null;const _=[],y=[],L=new st;let R=null;const A=new fn;A.layers.enable(1),A.viewport=new Se;const P=new fn;P.layers.enable(2),P.viewport=new Se;const Y=[A,P],x=new $m;x.layers.enable(1),x.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=_[Z];return it===void 0&&(it=new Xa,_[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=_[Z];return it===void 0&&(it=new Xa,_[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=_[Z];return it===void 0&&(it=new Xa,_[Z]=it),it.getHandSpace()};function N(Z){const it=y.indexOf(Z.inputSource);if(it===-1)return;const Rt=_[it];Rt!==void 0&&(Rt.update(Z.inputSource,Z.frame,c||a),Rt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<_.length;Z++){const it=y[Z];it!==null&&(y[Z]=null,_[Z].disconnect(it))}S=null,z=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,w=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,Rt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?ps:as,Rt=p.stencil?fs:Pi);const qt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Ln(u.textureWidth,u.textureHeight,{format:Pn,type:jn,depthTexture:new ph(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Z){for(let it=0;it<Z.removed.length;it++){const Rt=Z.removed[it],ht=y.indexOf(Rt);ht>=0&&(y[ht]=null,_[ht].disconnect(Rt))}for(let it=0;it<Z.added.length;it++){const Rt=Z.added[it];let ht=y.indexOf(Rt);if(ht===-1){for(let Ht=0;Ht<_.length;Ht++)if(Ht>=y.length){y.push(Rt),ht=Ht;break}else if(y[Ht]===null){y[Ht]=Rt,ht=Ht;break}if(ht===-1)break}const qt=_[ht];qt&&qt.connect(Rt)}}const B=new T,tt=new T;function X(Z,it,Rt){B.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(Rt.matrixWorld);const ht=B.distanceTo(tt),qt=it.projectionMatrix.elements,Ht=Rt.projectionMatrix.elements,jt=qt[14]/(qt[10]-1),ne=qt[14]/(qt[10]+1),Q=(qt[9]+1)/qt[5],C=(qt[9]-1)/qt[5],dt=(qt[8]-1)/qt[0],ft=(Ht[8]+1)/Ht[0],rt=jt*dt,pt=jt*ft,kt=ht/(-dt+ft),Tt=kt*-dt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),qt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const E=jt+kt,M=ne+kt,O=rt-Tt,$=pt+(ht-Tt),et=Q*ne/M*E,J=C*ne/M*E;Z.projectionMatrix.makePerspective(O,$,et,J,E,M),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,Rt=Z.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Rt=v.depthFar)),x.near=P.near=A.near=it,x.far=P.far=A.far=Rt,(S!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,z=x.far);const ht=Z.parent,qt=x.cameras;Mt(x,ht);for(let Ht=0;Ht<qt.length;Ht++)Mt(qt[Ht],ht);qt.length===2?X(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),St(Z,x,ht)};function St(Z,it,Rt){Rt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Rt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let bt=null;function ae(Z,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ht=!1;Rt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Ht=0;Ht<Rt.length;Ht++){const jt=Rt[Ht];let ne=null;if(f!==null)ne=f.getViewport(jt);else{const C=d.getViewSubImage(u,jt);ne=C.viewport,Ht===0&&(t.setRenderTargetTextures(w,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(w))}let Q=Y[Ht];Q===void 0&&(Q=new fn,Q.layers.enable(Ht),Q.viewport=new Se,Y[Ht]=Q),Q.matrix.fromArray(jt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(jt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),Ht===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Q)}const qt=s.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const Ht=d.getDepthInformation(Rt[0]);Ht&&Ht.isValid&&Ht.texture&&v.init(t,Ht,s.renderState)}}for(let Rt=0;Rt<_.length;Rt++){const ht=y[Rt],qt=_[Rt];ht!==null&&qt!==void 0&&qt.update(ht,it,c||a)}bt&&bt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const fe=new fh;fe.setAnimationLoop(ae),this.setAnimationLoop=function(Z){bt=Z},this.dispose=function(){}}}const Mi=new zn,ng=new we;function ig(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,hh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,w,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),_=w.envMap,y=w.envMapRotation;_&&(p.envMap.value=_,Mi.copy(y),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Mi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const y=_.program;n.uniformBlockBinding(w,y)}function c(w,_){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",p));const L=_.program;n.updateUBOMapping(w,L);const R=t.render.frame;r[w.id]!==R&&(u(w),r[w.id]=R)}function h(w){const _=d();w.__bindingPointIndex=_;const y=i.createBuffer(),L=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const _=s[w.id],y=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,A=y.length;R<A;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let Y=0,x=P.length;Y<x;Y++){const S=P[Y];if(f(S,R,Y,L)===!0){const z=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let G=0;for(let K=0;K<N.length;K++){const B=N[K],tt=v(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+G,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,G),G+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,_,y,L){const R=w.value,A=_+"_"+y;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const P=L[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(w){const _=w.uniforms;let y=0;const L=16;for(let A=0,P=_.length;A<P;A++){const Y=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,S=Y.length;x<S;x++){const z=Y[x],N=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=N.length;G<K;G++){const B=N[G],tt=v(B),X=y%L,Mt=X%tt.boundary,St=X+Mt;y+=Mt,St!==0&&L-St<tt.storage&&(y+=L-St),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=tt.storage}}}const R=y%L;return R>0&&(y+=L-R),w.__size=y,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class rg{constructor(t={}){const{canvas:e=qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let y=!1,L=0,R=0,A=null,P=-1,Y=null;const x=new Se,S=new Se;let z=null;const N=new Wt(0);let G=0,K=e.width,B=e.height,tt=1,X=null,Mt=null;const St=new Se(0,0,K,B),bt=new Se(0,0,K,B);let ae=!1;const fe=new al;let Z=!1,it=!1;const Rt=new we,ht=new we,qt=new T,Ht=new Se,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Q(){return A===null?tt:1}let C=n;function dt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",wt,!1),C===null){const U="webgl2";if(C=dt(U,b),C===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,rt,pt,kt,Tt,E,M,O,$,et,J,Ut,mt,Et,oe,ot,At,Pt,$t,Lt,le,Qt,ye,I;function Ct(){ft=new h0(C),ft.init(),Qt=new Zm(C,ft),rt=new s0(C,ft,t,Qt),pt=new qm(C),rt.reverseDepthBuffer&&pt.buffers.depth.setReversed(!0),kt=new f0(C),Tt=new Lm,E=new Km(C,ft,pt,Tt,rt,Qt,kt),M=new a0(_),O=new c0(_),$=new _d(C),ye=new n0(C,$),et=new u0(C,$,kt,ye),J=new m0(C,et,$,kt),$t=new p0(C,rt,E),ot=new r0(Tt),Ut=new Pm(_,M,O,ft,rt,ye,ot),mt=new ig(_,Tt),Et=new Im,oe=new Bm(ft),Pt=new e0(_,M,O,pt,J,u,l),At=new Wm(_,J,rt),I=new sg(C,kt,rt,pt),Lt=new i0(C,ft,kt),le=new d0(C,ft,kt),kt.programs=Ut.programs,_.capabilities=rt,_.extensions=ft,_.properties=Tt,_.renderLists=Et,_.shadowMap=At,_.state=pt,_.info=kt}Ct();const W=new eg(_,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(K,B,!1))},this.getSize=function(b){return b.set(K,B)},this.setSize=function(b,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,B=U,e.width=Math.floor(b*tt),e.height=Math.floor(U*tt),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(K*tt,B*tt).floor()},this.setDrawingBufferSize=function(b,U,k){K=b,B=U,tt=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,U,k,V){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,U,k,V),pt.viewport(x.copy(St).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(bt)},this.setScissor=function(b,U,k,V){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,U,k,V),pt.scissor(S.copy(bt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){pt.setScissorTest(ae=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,U=!0,k=!0){let V=0;if(b){let F=!1;if(A!==null){const ct=A.texture.format;F=ct===nl||ct===el||ct===tl}if(F){const ct=A.texture.type,vt=ct===jn||ct===Pi||ct===Hs||ct===fs||ct===jo||ct===Qo,Dt=Pt.getClearColor(),Nt=Pt.getClearAlpha(),Yt=Dt.r,Kt=Dt.g,zt=Dt.b;vt?(f[0]=Yt,f[1]=Kt,f[2]=zt,f[3]=Nt,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=Yt,g[1]=Kt,g[2]=zt,g[3]=Nt,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Et.dispose(),oe.dispose(),Tt.dispose(),M.dispose(),O.dispose(),J.dispose(),ye.dispose(),I.dispose(),Ut.dispose(),W.dispose(),W.removeEventListener("sessionstart",tr),W.removeEventListener("sessionend",Di),kn.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=kt.autoReset,U=At.enabled,k=At.autoUpdate,V=At.needsUpdate,F=At.type;Ct(),kt.autoReset=b,At.enabled=U,At.autoUpdate=k,At.needsUpdate=V,At.type=F}function wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ce(b){const U=b.target;U.removeEventListener("dispose",ce),Le(U)}function Le(b){Ze(b),Tt.remove(b)}function Ze(b){const U=Tt.get(b).programs;U!==void 0&&(U.forEach(function(k){Ut.releaseProgram(k)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,V,F,ct){U===null&&(U=jt);const vt=F.isMesh&&F.matrixWorld.determinant()<0,Dt=da(b,U,k,V,F);pt.setMaterial(V,vt);let Nt=k.index,Yt=1;if(V.wireframe===!0){if(Nt=et.getWireframeAttribute(k),Nt===void 0)return;Yt=2}const Kt=k.drawRange,zt=k.attributes.position;let ge=Kt.start*Yt,be=(Kt.start+Kt.count)*Yt;ct!==null&&(ge=Math.max(ge,ct.start*Yt),be=Math.min(be,(ct.start+ct.count)*Yt)),Nt!==null?(ge=Math.max(ge,0),be=Math.min(be,Nt.count)):zt!=null&&(ge=Math.max(ge,0),be=Math.min(be,zt.count));const Ae=be-ge;if(Ae<0||Ae===1/0)return;ye.setup(F,V,Dt,k,Nt);let De,ue=Lt;if(Nt!==null&&(De=$.get(Nt),ue=le,ue.setIndex(De)),F.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*Q()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(F.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),pt.setLineWidth(Bt*Q()),F.isLineSegments?ue.setMode(C.LINES):F.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else F.isPoints?ue.setMode(C.POINTS):F.isSprite&&ue.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Bt=F._multiDrawStarts,Fe=F._multiDrawCounts,pe=F._multiDrawCount,Je=Nt?$.get(Nt).bytesPerElement:1,In=Tt.get(V).currentProgram.getUniforms();for(let je=0;je<pe;je++)In.setValue(C,"_gl_DrawID",je),ue.render(Bt[je]/Je,Fe[je])}else if(F.isInstancedMesh)ue.renderInstances(ge,Ae,F.count);else if(k.isInstancedBufferGeometry){const Bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Fe=Math.min(k.instanceCount,Bt);ue.renderInstances(ge,Ae,Fe)}else ue.render(ge,Ae)};function te(b,U,k){b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,Ui(b,U,k),b.side=ci,b.needsUpdate=!0,Ui(b,U,k),b.side=_n):Ui(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=oe.get(k),p.init(U),w.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const Dt=ct[vt];te(Dt,k,F),V.add(Dt)}else te(ct,k,F),V.add(ct)}),w.pop(),p=null,V},this.compileAsync=function(b,U,k=null){const V=this.compile(b,U,k);return new Promise(F=>{function ct(){if(V.forEach(function(vt){Tt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){F(b);return}setTimeout(ct,10)}ft.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let $e=null;function wn(b){$e&&$e(b)}function tr(){kn.stop()}function Di(){kn.start()}const kn=new fh;kn.setAnimationLoop(wn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){$e=b,W.setAnimationLoop(b),b===null?kn.stop():kn.start()},W.addEventListener("sessionstart",tr),W.addEventListener("sessionend",Di),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),p=oe.get(b,w.length),p.init(U),w.push(p),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),fe.setFromProjectionMatrix(ht),it=this.localClippingEnabled,Z=ot.init(this.clippingPlanes,it),v=Et.get(b,m.length),v.init(),m.push(v),W.enabled===!0&&W.isPresenting===!0){const ct=_.xr.getDepthSensingMesh();ct!==null&&Ii(ct,U,-1/0,_.sortObjects)}Ii(b,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,Mt),ne=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ne&&Pt.addToRenderList(v,b),this.info.render.frame++,Z===!0&&ot.beginShadows();const k=p.state.shadowsArray;At.render(k,b,U),Z===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,F=v.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(F.length>0)for(let vt=0,Dt=ct.length;vt<Dt;vt++){const Nt=ct[vt];nr(V,F,b,Nt)}ne&&Pt.render(b);for(let vt=0,Dt=ct.length;vt<Dt;vt++){const Nt=ct[vt];er(v,b,Nt,Nt.viewport)}}else F.length>0&&nr(V,F,b,U),ne&&Pt.render(b),er(v,b,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),ye.resetDefaultState(),P=-1,Y=null,w.pop(),w.length>0?(p=w[w.length-1],Z===!0&&ot.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ii(b,U,k,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||fe.intersectsSprite(b)){V&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const vt=J.update(b),Dt=b.material;Dt.visible&&v.push(b,vt,Dt,k,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||fe.intersectsObject(b))){const vt=J.update(b),Dt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ht.copy(vt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(Dt)){const Nt=vt.groups;for(let Yt=0,Kt=Nt.length;Yt<Kt;Yt++){const zt=Nt[Yt],ge=Dt[zt.materialIndex];ge&&ge.visible&&v.push(b,vt,ge,k,Ht.z,zt)}}else Dt.visible&&v.push(b,vt,Dt,k,Ht.z,null)}}const ct=b.children;for(let vt=0,Dt=ct.length;vt<Dt;vt++)Ii(ct[vt],U,k,V)}function er(b,U,k,V){const F=b.opaque,ct=b.transmissive,vt=b.transparent;p.setupLightsView(k),Z===!0&&ot.setGlobalState(_.clippingPlanes,k),V&&pt.viewport(x.copy(V)),F.length>0&&di(F,U,k),ct.length>0&&di(ct,U,k),vt.length>0&&di(vt,U,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function nr(b,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ln(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Jn:jn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const ct=p.state.transmissionRenderTarget[V.id],vt=V.viewport||x;ct.setSize(vt.z,vt.w);const Dt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(N),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),ne&&Pt.render(k);const Nt=_.toneMapping;_.toneMapping=ai;const Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Z===!0&&ot.setGlobalState(_.clippingPlanes,V),di(b,k,V),E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let zt=0,ge=U.length;zt<ge;zt++){const be=U[zt],Ae=be.object,De=be.geometry,ue=be.material,Bt=be.group;if(ue.side===_n&&Ae.layers.test(V.layers)){const Fe=ue.side;ue.side=hn,ue.needsUpdate=!0,fi(Ae,k,V,De,ue,Bt),ue.side=Fe,ue.needsUpdate=!0,Kt=!0}}Kt===!0&&(E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct))}_.setRenderTarget(Dt),_.setClearColor(N,G),Yt!==void 0&&(V.viewport=Yt),_.toneMapping=Nt}function di(b,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ct=b.length;F<ct;F++){const vt=b[F],Dt=vt.object,Nt=vt.geometry,Yt=V===null?vt.material:V,Kt=vt.group;Dt.layers.test(k.layers)&&fi(Dt,U,k,Nt,Yt,Kt)}}function fi(b,U,k,V,F,ct){b.onBeforeRender(_,U,k,V,F,ct),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,U,k,V,b,ct),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=hn,F.needsUpdate=!0,_.renderBufferDirect(k,U,V,F,b,ct),F.side=ci,F.needsUpdate=!0,_.renderBufferDirect(k,U,V,F,b,ct),F.side=_n):_.renderBufferDirect(k,U,V,F,b,ct),b.onAfterRender(_,U,k,V,F,ct)}function Ui(b,U,k){U.isScene!==!0&&(U=jt);const V=Tt.get(b),F=p.state.lights,ct=p.state.shadowsArray,vt=F.state.version,Dt=Ut.getParameters(b,F.state,ct,U,k),Nt=Ut.getProgramCacheKey(Dt);let Yt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",ce),Yt=new Map,V.programs=Yt);let Kt=Yt.get(Nt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===vt)return We(b,Dt),Kt}else Dt.uniforms=Ut.getUniforms(b),b.onBeforeCompile(Dt,_),Kt=Ut.acquireProgram(Dt,Nt),Yt.set(Nt,Kt),V.uniforms=Dt.uniforms;const zt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ot.uniform),We(b,Dt),V.needsLights=pa(b),V.lightsStateVersion=vt,V.needsLights&&(zt.ambientLightColor.value=F.state.ambient,zt.lightProbe.value=F.state.probe,zt.directionalLights.value=F.state.directional,zt.directionalLightShadows.value=F.state.directionalShadow,zt.spotLights.value=F.state.spot,zt.spotLightShadows.value=F.state.spotShadow,zt.rectAreaLights.value=F.state.rectArea,zt.ltc_1.value=F.state.rectAreaLTC1,zt.ltc_2.value=F.state.rectAreaLTC2,zt.pointLights.value=F.state.point,zt.pointLightShadows.value=F.state.pointShadow,zt.hemisphereLights.value=F.state.hemi,zt.directionalShadowMap.value=F.state.directionalShadowMap,zt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,zt.spotShadowMap.value=F.state.spotShadowMap,zt.spotLightMatrix.value=F.state.spotLightMatrix,zt.spotLightMap.value=F.state.spotLightMap,zt.pointShadowMap.value=F.state.pointShadowMap,zt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Kt,V.uniformsList=null,Kt}function Ni(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Gr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function We(b,U){const k=Tt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function da(b,U,k,V,F){U.isScene!==!0&&(U=jt),E.resetTextureUnits();const ct=U.fog,vt=V.isMeshStandardMaterial?U.environment:null,Dt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hi,Nt=(V.isMeshStandardMaterial?O:M).get(V.envMap||vt),Yt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Kt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),zt=!!k.morphAttributes.position,ge=!!k.morphAttributes.normal,be=!!k.morphAttributes.color;let Ae=ai;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const De=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=De!==void 0?De.length:0,Bt=Tt.get(V),Fe=p.state.lights;if(Z===!0&&(it===!0||b!==Y)){const sn=b===Y&&V.id===P;ot.setState(V,b,sn)}let pe=!1;V.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Fe.state.version||Bt.outputColorSpace!==Dt||F.isBatchedMesh&&Bt.batching===!1||!F.isBatchedMesh&&Bt.batching===!0||F.isBatchedMesh&&Bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Bt.instancing===!1||!F.isInstancedMesh&&Bt.instancing===!0||F.isSkinnedMesh&&Bt.skinning===!1||!F.isSkinnedMesh&&Bt.skinning===!0||F.isInstancedMesh&&Bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Bt.instancingMorph===!1&&F.morphTexture!==null||Bt.envMap!==Nt||V.fog===!0&&Bt.fog!==ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ot.numPlanes||Bt.numIntersection!==ot.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Kt||Bt.morphTargets!==zt||Bt.morphNormals!==ge||Bt.morphColors!==be||Bt.toneMapping!==Ae||Bt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Bt.__version=V.version);let Je=Bt.currentProgram;pe===!0&&(Je=Ui(V,U,F));let In=!1,je=!1,Fi=!1;const Te=Je.getUniforms(),Un=Bt.uniforms;if(pt.useProgram(Je.program)&&(In=!0,je=!0,Fi=!0),V.id!==P&&(P=V.id,je=!0),In||Y!==b){rt.reverseDepthBuffer?(Rt.copy(b.projectionMatrix),Ku(Rt),Zu(Rt),Te.setValue(C,"projectionMatrix",Rt)):Te.setValue(C,"projectionMatrix",b.projectionMatrix),Te.setValue(C,"viewMatrix",b.matrixWorldInverse);const sn=Te.map.cameraPosition;sn!==void 0&&sn.setValue(C,qt.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Te.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,je=!0,Fi=!0)}if(F.isSkinnedMesh){Te.setOptional(C,F,"bindMatrix"),Te.setOptional(C,F,"bindMatrixInverse");const sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Te.setValue(C,"boneTexture",sn.boneTexture,E))}F.isBatchedMesh&&(Te.setOptional(C,F,"batchingTexture"),Te.setValue(C,"batchingTexture",F._matricesTexture,E),Te.setOptional(C,F,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",F._indirectTexture,E),Te.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",F._colorsTexture,E));const pi=k.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&$t.update(F,k,Je),(je||Bt.receiveShadow!==F.receiveShadow)&&(Bt.receiveShadow=F.receiveShadow,Te.setValue(C,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Un.envMap.value=Nt,Un.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),je&&(Te.setValue(C,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&fa(Un,Fi),ct&&V.fog===!0&&mt.refreshFogUniforms(Un,ct),mt.refreshMaterialUniforms(Un,V,tt,B,p.state.transmissionRenderTarget[b.id]),Gr.upload(C,Ni(Bt),Un,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gr.upload(C,Ni(Bt),Un,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Te.setValue(C,"center",F.center),Te.setValue(C,"modelViewMatrix",F.modelViewMatrix),Te.setValue(C,"normalMatrix",F.normalMatrix),Te.setValue(C,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let Oi=0,ma=sn.length;Oi<ma;Oi++){const Ms=sn[Oi];I.update(Ms,Je),I.bind(Ms,Je)}}return Je}function fa(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function pa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,k){Tt.get(b.texture).__webglTexture=U,Tt.get(b.depthTexture).__webglTexture=k;const V=Tt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const k=Tt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){A=b,L=U,R=k;let V=!0,F=null,ct=!1,vt=!1;if(b){const Nt=Tt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Nt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Nt.__hasExternalTextures)E.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&Tt.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(vt=!0);const Kt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[U])?F=Kt[U][k]:F=Kt[U],ct=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?F=Kt[k]:F=Kt,x.copy(b.viewport),S.copy(b.scissor),z=b.scissorTest}else x.copy(St).multiplyScalar(tt).floor(),S.copy(bt).multiplyScalar(tt).floor(),z=ae;if(pt.bindFramebuffer(C.FRAMEBUFFER,F)&&V&&pt.drawBuffers(b,F),pt.viewport(x),pt.scissor(S),pt.setScissorTest(z),ct){const Nt=Tt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Nt.__webglTexture,k)}else if(vt){const Nt=Tt.get(b.texture),Yt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nt.__webglTexture,k||0,Yt)}P=-1},this.readRenderTargetPixels=function(b,U,k,V,F,ct,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Dt=Dt[vt]),Dt){pt.bindFramebuffer(C.FRAMEBUFFER,Dt);try{const Nt=b.texture,Yt=Nt.format,Kt=Nt.type;if(!rt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&k>=0&&k<=b.height-F&&C.readPixels(U,k,V,F,Qt.convert(Yt),Qt.convert(Kt),ct)}finally{const Nt=A!==null?Tt.get(A).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,V,F,ct,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Dt=Dt[vt]),Dt){const Nt=b.texture,Yt=Nt.format,Kt=Nt.type;if(!rt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&k>=0&&k<=b.height-F){pt.bindFramebuffer(C.FRAMEBUFFER,Dt);const zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),C.readPixels(U,k,V,F,Qt.convert(Yt),Qt.convert(Kt),0);const ge=A!==null?Tt.get(A).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,ge);const be=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Yu(C,be,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(zt),C.deleteSync(be),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-k),F=Math.floor(b.image.width*V),ct=Math.floor(b.image.height*V),vt=U!==null?U.x:0,Dt=U!==null?U.y:0;E.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,vt,Dt,F,ct),pt.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,V=null,F=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let ct,vt,Dt,Nt,Yt,Kt;k!==null?(ct=k.max.x-k.min.x,vt=k.max.y-k.min.y,Dt=k.min.x,Nt=k.min.y):(ct=b.image.width,vt=b.image.height,Dt=0,Nt=0),V!==null?(Yt=V.x,Kt=V.y):(Yt=0,Kt=0);const zt=Qt.convert(U.format),ge=Qt.convert(U.type);E.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const be=C.getParameter(C.UNPACK_ROW_LENGTH),Ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),ue=C.getParameter(C.UNPACK_SKIP_ROWS),Bt=C.getParameter(C.UNPACK_SKIP_IMAGES),Fe=b.isCompressedTexture?b.mipmaps[F]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Yt,Kt,ct,vt,zt,ge,Fe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Yt,Kt,Fe.width,Fe.height,zt,Fe.data):C.texSubImage2D(C.TEXTURE_2D,F,Yt,Kt,ct,vt,zt,ge,Fe),C.pixelStorei(C.UNPACK_ROW_LENGTH,be),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt),F===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,V=null,F=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let ct,vt,Dt,Nt,Yt,Kt,zt,ge,be;const Ae=b.isCompressedTexture?b.mipmaps[F]:b.image;k!==null?(ct=k.max.x-k.min.x,vt=k.max.y-k.min.y,Dt=k.max.z-k.min.z,Nt=k.min.x,Yt=k.min.y,Kt=k.min.z):(ct=Ae.width,vt=Ae.height,Dt=Ae.depth,Nt=0,Yt=0,Kt=0),V!==null?(zt=V.x,ge=V.y,be=V.z):(zt=0,ge=0,be=0);const De=Qt.convert(U.format),ue=Qt.convert(U.type);let Bt;if(U.isData3DTexture)E.setTexture3D(U,0),Bt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)E.setTexture2DArray(U,0),Bt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Fe=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Je=C.getParameter(C.UNPACK_SKIP_PIXELS),In=C.getParameter(C.UNPACK_SKIP_ROWS),je=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Kt),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Bt,F,zt,ge,be,ct,vt,Dt,De,ue,Ae.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,F,zt,ge,be,ct,vt,Dt,De,Ae.data):C.texSubImage3D(Bt,F,zt,ge,be,ct,vt,Dt,De,ue,Ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,Fe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,In),C.pixelStorei(C.UNPACK_SKIP_IMAGES,je),F===0&&U.generateMipmaps&&C.generateMipmap(Bt),pt.unbindTexture()},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),pt.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,pt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===il?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===na?"display-p3":"srgb"}}class cl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _h extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new T;class $r{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oi extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const As=new T,Qi=new T,ts=new T,es=new st,Cs=new st,yh=new we,Tr=new T,Rs=new T,Er=new T,fc=new st,qa=new st,pc=new st;class li extends Pe{constructor(t=new oi){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new $r(n,3,0,!1)),ji.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(Tr.set(-.5,-.5,0),ts,a,Qi,s,r),Ar(Rs.set(.5,-.5,0),ts,a,Qi,s,r),Ar(Er.set(.5,.5,0),ts,a,Qi,s,r),fc.set(0,0),qa.set(1,0),pc.set(1,1);let o=t.ray.intersectTriangle(Tr,Rs,Er,!1,As);if(o===null&&(Ar(Rs.set(-.5,.5,0),ts,a,Qi,s,r),qa.set(0,1),o=t.ray.intersectTriangle(Tr,Er,Rs,!1,As),o===null))return;const l=t.ray.origin.distanceTo(As);l<t.near||l>t.far||e.push({distance:l,point:As.clone(),uv:yn.getInterpolation(As,Tr,Rs,Er,fc,qa,pc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*es.x-s*es.y,Cs.y=s*es.x+r*es.y):Cs.copy(es),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(yh)}class Mh extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jr=new T,jr=new T,mc=new we,Ps=new Qs,Cr=new js,Ya=new T,gc=new T;class og extends Pe{constructor(t=new ze,e=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),jr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(jr);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;mc.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),w=h.getX(v+1),_=Rr(this,t,Ps,l,m,w);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=Rr(this,t,Ps,l,v,p);m&&e.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){const m=Rr(this,t,Ps,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Rr(this,t,Ps,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Jr.fromBufferAttribute(a,s),jr.fromBufferAttribute(a,r),e.distanceSqToSegment(Jr,jr,Ya,gc)>n)return;Ya.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ya);if(!(l<t.near||l>t.far))return{distance:l,point:gc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class lg extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vc=new we,Go=new Qs,Pr=new js,Lr=new T;class cg extends Pe{constructor(t=new ze,e=new lg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;vc.copy(s).invert(),Go.copy(t.ray).applyMatrix4(vc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){const p=c.getX(g);Lr.fromBufferAttribute(d,p),xc(Lr,p,l,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Lr.fromBufferAttribute(d,g),xc(Lr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xc(i,t,e,n,s,r,a){const o=Go.distanceSqToPoint(i);if(o<e){const l=new T;Go.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xs extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],a=[],o=new T,l=new we;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hg extends hl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Dr=new T,Ka=new ul,Za=new ul,$a=new ul;class Sh extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),c=Dr);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ka.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),Za.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),$a.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Za.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),$a.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ka.calc(l),Za.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _c(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ug(i,t){const e=1-i;return e*e*t}function dg(i,t){return 2*(1-i)*i*t}function fg(i,t){return i*i*t}function zs(i,t,e,n){return ug(i,t)+dg(i,e)+fg(i,n)}function pg(i,t){const e=1-i;return e*e*e*t}function mg(i,t){const e=1-i;return 3*e*e*i*t}function gg(i,t){return 3*(1-i)*i*i*t}function vg(i,t){return i*i*i*t}function Bs(i,t,e,n,s){return pg(i,t)+mg(i,e)+gg(i,n)+vg(i,s)}class wh extends Bn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xg extends Bn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y),Bs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bh extends Bn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends Bn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Bn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends Bn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y),zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(_c(o,l.x,c.x,h.x,d.x),_c(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Qr=Object.freeze({__proto__:null,ArcCurve:hg,CatmullRomCurve3:Sh,CubicBezierCurve:wh,CubicBezierCurve3:xg,EllipseCurve:hl,LineCurve:bh,LineCurve3:_g,QuadraticBezierCurve:Th,QuadraticBezierCurve3:Eh,SplineCurve:Ah});class yg extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qr[s.type]().fromJSON(s))}return this}}class yc extends yg{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Th(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new wh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ah(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new hl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gs extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=n/2;let m=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function w(){const y=new T,L=new T;let R=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const Y=[],x=P/r,S=x*(e-t)+t;for(let z=0;z<=s;z++){const N=z/s,G=N*l+o,K=Math.sin(G),B=Math.cos(G);L.x=S*K,L.y=-x*n+p,L.z=S*B,d.push(L.x,L.y,L.z),y.set(K,A,B).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-x),Y.push(g++)}v.push(Y)}for(let P=0;P<s;P++)for(let Y=0;Y<r;Y++){const x=v[Y][P],S=v[Y+1][P],z=v[Y+1][P+1],N=v[Y][P+1];t>0&&(h.push(x,S,N),R+=3),e>0&&(h.push(S,z,N),R+=3)}c.addGroup(m,R,0),m+=R}function _(y){const L=g,R=new st,A=new T;let P=0;const Y=y===!0?t:e,x=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*x,0),u.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let z=0;z<=s;z++){const G=z/s*l+o,K=Math.cos(G),B=Math.sin(G);A.x=Y*B,A.y=p*x,A.z=Y*K,d.push(A.x,A.y,A.z),u.push(0,x,0),R.x=K*.5+.5,R.y=B*.5*x+.5,f.push(R.x,R.y),g++}for(let z=0;z<s;z++){const N=L+z,G=S+z;y===!0?h.push(G,G+1,N):h.push(G+1,G,N),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sa extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new sa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ch extends yc{constructor(t){super(t),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new yc().fromJSON(s))}return this}}const Mg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Rh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=Eg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return qs(r,a,e,o,l,f,0),a}};function Rh(i,t,e,n,s){let r,a;if(s===Og(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Mc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Mc(r,i[r],i[r+1],a);return a&&ra(a,a.next)&&(Ks(a),a=a.next),a}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Lg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?wg(i,n,s,r):Sg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bg(Li(i),t,e),qs(i,t,e,n,s,r,2)):a===2&&Tg(i,t,e,n,s,r):qs(Li(i),t,e,n,s,r,1);break}}}function Sg(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&rs(s,o,r,l,a,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=Wo(f,g,t,e,n),w=Wo(v,p,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=w;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&rs(o,h,l,d,c,u,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&rs(o,h,l,d,c,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&rs(o,h,l,d,c,u,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&rs(o,h,l,d,c,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ra(s,r)&&Ph(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return Li(n)}function Tg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ug(a,o)){let l=Lh(a,o);a=Li(a,a.next),l=Li(l,l.next),qs(a,t,e,n,s,r,0),qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Eg(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ig(c));for(s.sort(Ag),r=0;r<s.length;r++)e=Cg(s[r],e);return e}function Ag(i,t){return i.x-t.x}function Cg(i,t){const e=Rg(i,t);if(!e)return t;const n=Lh(e,i);return Li(n,n.next),Li(e,e.next)}function Rg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Ys(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Pg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function Pg(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Lg(i,t,e,n){let s=i;do s.z===0&&(s.z=Wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dg(s)}function Dg(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ig(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ng(i,t)&&(Ys(i,t)&&Ys(t,i)&&Fg(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||ra(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ra(i,t){return i.x===t.x&&i.y===t.y}function Ph(i,t,e,n){const s=Ur(Ue(i,t,e)),r=Ur(Ue(i,t,n)),a=Ur(Ue(e,n,i)),o=Ur(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&Ir(i,e,t)||r===0&&Ir(i,n,t)||a===0&&Ir(e,i,n)||o===0&&Ir(e,t,n))}function Ir(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ur(i){return i>0?1:i<0?-1:0}function Ng(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Fg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lh(i,t){const e=new Xo(i.i,i.x,i.y),n=new Xo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mc(i,t,e,n){const s=new Xo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Og(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sc(t),wc(n,t);let a=t.length;e.forEach(Sc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wc(n,e[l]);const o=Mg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Sc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class dl extends ze{constructor(t=new Ch([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:zg;let _,y=!1,L,R,A,P;m&&(_=m.getSpacedPoints(h),y=!0,u=!1,L=m.computeFrenetFrames(h,!1),R=new T,A=new T,P=new T),u||(p=0,f=0,g=0,v=0);const Y=o.extractPoints(c);let x=Y.shape;const S=Y.holes;if(!ks.isClockWise(x)){x=x.reverse();for(let Q=0,C=S.length;Q<C;Q++){const dt=S[Q];ks.isClockWise(dt)&&(S[Q]=dt.reverse())}}const N=ks.triangulateShape(x,S),G=x;for(let Q=0,C=S.length;Q<C;Q++){const dt=S[Q];x=x.concat(dt)}function K(Q,C,dt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(C,dt)}const B=x.length,tt=N.length;function X(Q,C,dt){let ft,rt,pt;const kt=Q.x-C.x,Tt=Q.y-C.y,E=dt.x-Q.x,M=dt.y-Q.y,O=kt*kt+Tt*Tt,$=kt*M-Tt*E;if(Math.abs($)>Number.EPSILON){const et=Math.sqrt(O),J=Math.sqrt(E*E+M*M),Ut=C.x-Tt/et,mt=C.y+kt/et,Et=dt.x-M/J,oe=dt.y+E/J,ot=((Et-Ut)*M-(oe-mt)*E)/(kt*M-Tt*E);ft=Ut+kt*ot-Q.x,rt=mt+Tt*ot-Q.y;const At=ft*ft+rt*rt;if(At<=2)return new st(ft,rt);pt=Math.sqrt(At/2)}else{let et=!1;kt>Number.EPSILON?E>Number.EPSILON&&(et=!0):kt<-Number.EPSILON?E<-Number.EPSILON&&(et=!0):Math.sign(Tt)===Math.sign(M)&&(et=!0),et?(ft=-Tt,rt=kt,pt=Math.sqrt(O)):(ft=kt,rt=Tt,pt=Math.sqrt(O/2))}return new st(ft/pt,rt/pt)}const Mt=[];for(let Q=0,C=G.length,dt=C-1,ft=Q+1;Q<C;Q++,dt++,ft++)dt===C&&(dt=0),ft===C&&(ft=0),Mt[Q]=X(G[Q],G[dt],G[ft]);const St=[];let bt,ae=Mt.concat();for(let Q=0,C=S.length;Q<C;Q++){const dt=S[Q];bt=[];for(let ft=0,rt=dt.length,pt=rt-1,kt=ft+1;ft<rt;ft++,pt++,kt++)pt===rt&&(pt=0),kt===rt&&(kt=0),bt[ft]=X(dt[ft],dt[pt],dt[kt]);St.push(bt),ae=ae.concat(bt)}for(let Q=0;Q<p;Q++){const C=Q/p,dt=f*Math.cos(C*Math.PI/2),ft=g*Math.sin(C*Math.PI/2)+v;for(let rt=0,pt=G.length;rt<pt;rt++){const kt=K(G[rt],Mt[rt],ft);ht(kt.x,kt.y,-dt)}for(let rt=0,pt=S.length;rt<pt;rt++){const kt=S[rt];bt=St[rt];for(let Tt=0,E=kt.length;Tt<E;Tt++){const M=K(kt[Tt],bt[Tt],ft);ht(M.x,M.y,-dt)}}}const fe=g+v;for(let Q=0;Q<B;Q++){const C=u?K(x[Q],ae[Q],fe):x[Q];y?(A.copy(L.normals[0]).multiplyScalar(C.x),R.copy(L.binormals[0]).multiplyScalar(C.y),P.copy(_[0]).add(A).add(R),ht(P.x,P.y,P.z)):ht(C.x,C.y,0)}for(let Q=1;Q<=h;Q++)for(let C=0;C<B;C++){const dt=u?K(x[C],ae[C],fe):x[C];y?(A.copy(L.normals[Q]).multiplyScalar(dt.x),R.copy(L.binormals[Q]).multiplyScalar(dt.y),P.copy(_[Q]).add(A).add(R),ht(P.x,P.y,P.z)):ht(dt.x,dt.y,d/h*Q)}for(let Q=p-1;Q>=0;Q--){const C=Q/p,dt=f*Math.cos(C*Math.PI/2),ft=g*Math.sin(C*Math.PI/2)+v;for(let rt=0,pt=G.length;rt<pt;rt++){const kt=K(G[rt],Mt[rt],ft);ht(kt.x,kt.y,d+dt)}for(let rt=0,pt=S.length;rt<pt;rt++){const kt=S[rt];bt=St[rt];for(let Tt=0,E=kt.length;Tt<E;Tt++){const M=K(kt[Tt],bt[Tt],ft);y?ht(M.x,M.y+_[h-1].y,_[h-1].x+dt):ht(M.x,M.y,d+dt)}}}Z(),it();function Z(){const Q=s.length/3;if(u){let C=0,dt=B*C;for(let ft=0;ft<tt;ft++){const rt=N[ft];qt(rt[2]+dt,rt[1]+dt,rt[0]+dt)}C=h+p*2,dt=B*C;for(let ft=0;ft<tt;ft++){const rt=N[ft];qt(rt[0]+dt,rt[1]+dt,rt[2]+dt)}}else{for(let C=0;C<tt;C++){const dt=N[C];qt(dt[2],dt[1],dt[0])}for(let C=0;C<tt;C++){const dt=N[C];qt(dt[0]+B*h,dt[1]+B*h,dt[2]+B*h)}}n.addGroup(Q,s.length/3-Q,0)}function it(){const Q=s.length/3;let C=0;Rt(G,C),C+=G.length;for(let dt=0,ft=S.length;dt<ft;dt++){const rt=S[dt];Rt(rt,C),C+=rt.length}n.addGroup(Q,s.length/3-Q,1)}function Rt(Q,C){let dt=Q.length;for(;--dt>=0;){const ft=dt;let rt=dt-1;rt<0&&(rt=Q.length-1);for(let pt=0,kt=h+p*2;pt<kt;pt++){const Tt=B*pt,E=B*(pt+1),M=C+ft+Tt,O=C+rt+Tt,$=C+rt+E,et=C+ft+E;Ht(M,O,$,et)}}}function ht(Q,C,dt){l.push(Q),l.push(C),l.push(dt)}function qt(Q,C,dt){jt(Q),jt(C),jt(dt);const ft=s.length/3,rt=w.generateTopUV(n,s,ft-3,ft-2,ft-1);ne(rt[0]),ne(rt[1]),ne(rt[2])}function Ht(Q,C,dt,ft){jt(Q),jt(C),jt(ft),jt(C),jt(dt),jt(ft);const rt=s.length/3,pt=w.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);ne(pt[0]),ne(pt[1]),ne(pt[3]),ne(pt[1]),ne(pt[2]),ne(pt[3])}function jt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ne(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qr[s.type]().fromJSON(s)),new dl(n,t.options)}}const zg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-d),new st(u,1-g),new st(v,1-m)]:[new st(o,1-l),new st(h,1-d),new st(f,1-g),new st(p,1-m)]}};function Bg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fl extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new T,g=new st;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const w=m+p,_=w,y=w+n+1,L=w+n+2,R=w+1;o.push(_,y,R),o.push(y,L,R)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const w=[],_=m/n;let y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const R=L/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(R+y,1-_),w.push(c++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const _=h[m][w+1],y=h[m][w],L=h[m+1][w],R=h[m+1][w+1];(m!==0||a>0)&&f.push(_,y,R),(m!==n-1||l<Math.PI)&&f.push(y,L,R)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Be extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new T,d=new T,u=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(v,p,w),a.push(p,m,w)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pl extends ze{constructor(t=new Eh(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new st;let h=new T;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function v(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),w(),m()}function p(_){h=t.getPointAt(_/e,h);const y=a.normals[_],L=a.binormals[_];for(let R=0;R<=s;R++){const A=R/s*Math.PI*2,P=Math.sin(A),Y=-Math.cos(A);l.x=Y*y.x+P*L.x,l.y=Y*y.y+P*L.y,l.z=Y*y.z+P*L.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const L=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),A=(s+1)*_+y,P=(s+1)*(_-1)+y;g.push(L,R,P),g.push(R,A,P)}}function w(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pl(new Qr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kg extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aa extends Ft{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class oa extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Dh extends oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new we,bc=new T,Tc=new T;class Ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ec=new we,Ls=new T,ja=new T;class Vg extends Ih{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec)}}class Vs extends oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hg extends Ih{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ta extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Hg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Uh extends oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ac(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ac();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ac(){return performance.now()}const Cc=new we;class Wg{constructor(t,e,n=0,s=1/0){this.ray=new Qs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(t,e=!0,n=[]){return qo(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)qo(t[s],this,n,e);return n.sort(Rc),n}}function Rc(i,t){return i.distance-t.distance}function qo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)qo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);const Nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xg=new ol(-1,1,1,-1,0,1);class qg extends ze{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}}const Yg=new qg;class ml{constructor(t){this._mesh=new ut(Yg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Xg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yo extends ys{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ws.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ml(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pc extends ys{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Kg extends ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Zg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(Nh),this.copyPass.material.blending=$n,this.clock=new Gg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pc!==void 0&&(a instanceof Pc?n=!0:a instanceof Kg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lc extends ys{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const $g={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class vs extends ys{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(r,a,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Ln(r,a,{type:Jn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Ln(r,a,{type:Jn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=$g;this.highPassUniforms=Ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nh;this.copyUniforms=Ws.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Wt,this.oldClearAlpha=1,this.basic=new Mn,this.fsQuad=new ml(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}vs.BlurDirectionX=new st(1,0);vs.BlurDirectionY=new st(0,1);const Jg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class jg extends ys{constructor(){super();const t=Jg;this.uniforms=Ws.clone(t.uniforms),this.material=new kg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ml(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Qg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new st(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Ds=new T;function xn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ds.copy(t),Ds[n]=0,Ds.normalize();const c=.5*a/(a+o),h=1-Ds.angleTo(i)/l;return Math.sign(Ds[e])===1?h*c:o/(a+o)+c+c*(1-h)}class gl extends Ee{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new T,l=new T,c=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new T,v=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[p+0]=c.x*Math.sign(o.x)+l.x*r,h[p+1]=c.y*Math.sign(o.y)+l.y*r,h[p+2]=c.z*Math.sign(o.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),u[m+0]=xn(g,l,"z","y",r,n),u[m+1]=1-xn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[m+0]=1-xn(g,l,"z","y",r,n),u[m+1]=1-xn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[m+0]=1-xn(g,l,"x","z",r,t),u[m+1]=xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[m+0]=1-xn(g,l,"x","z",r,t),u[m+1]=1-xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[m+0]=1-xn(g,l,"x","y",r,t),u[m+1]=1-xn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[m+0]=xn(g,l,"x","y",r,t),u[m+1]=1-xn(g,l,"y","x",r,e);break}}}const Ci=new Map;function Dn(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ve(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ke(i,{srgb:t=!0,repeat:e=null,aniso:n=8}={}){const s=new Xs(i);return s.colorSpace=t?nn:Yn,s.wrapS=s.wrapT=ds,s.anisotropy=n,e&&s.repeat.set(e[0],e[1]),s.needsUpdate=!0,s}function Qn(i,t,e,n,s=12,r=1){const a=Dn(n),o=i.getImageData(0,0,t,e),l=o.data;for(let c=0;c<l.length;c+=4){const h=(a()-.5)*s;l[c]=Ne.clamp(l[c]+h,0,255),l[c+1]=Ne.clamp(l[c+1]+h,0,255),l[c+2]=Ne.clamp(l[c+2]+h,0,255),r!==1&&(l[c+3]*=r)}i.putImageData(o,0,0)}function la(i,t,e,n,s,r=1){const a=Dn(s);i.save();for(let o=0;o<5;o++){const l=n*(.55+a()*.8),c=n*(.3+a()*.9),h=i.createRadialGradient(t+(a()-.5)*n,e+(a()-.5)*n,n*.05,t+(a()-.5)*n,e+(a()-.5)*n,l);h.addColorStop(0,`rgba(96,47,25,${.32*r})`),h.addColorStop(.45,`rgba(124,59,28,${.2*r})`),h.addColorStop(1,"rgba(80,46,25,0)"),i.fillStyle=h,i.beginPath(),i.ellipse(t,e,l,c,a()*6.28,0,Math.PI*2),i.fill()}i.restore()}function Fh(i,t,e,n,s=20,r="82,48,24"){const a=Dn(n);i.save();for(let o=0;o<s;o++){const l=a()*t,c=a()*e*.8,h=30+a()*e*.4,d=1+a()*5,u=i.createLinearGradient(l,c,l+(a()-.5)*8,c+h);u.addColorStop(0,`rgba(${r},${.18+a()*.2})`),u.addColorStop(.4,`rgba(${r},${.1+a()*.12})`),u.addColorStop(1,`rgba(${r},0)`),i.fillStyle=u,i.fillRect(l,c,d,h)}i.restore()}function ca(i,t,e,n,s=90){const r=Dn(n);i.save();for(let a=0;a<s;a++){const o=r()*t,l=r()*e;i.strokeStyle=`rgba(${r()>.5?"210,214,204":"36,38,34"},${.03+r()*.14})`,i.lineWidth=.5+r()*1.2,i.beginPath(),i.moveTo(o,l),i.lineTo(o+(r()-.5)*60,l+(r()-.5)*10),i.stroke()}i.restore()}function Oh(i,t=2,e=!1){const n=i.width,s=i.height,a=i.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,n,s).data,o=Ve(n,s),l=o.getContext("2d"),c=l.createImageData(n,s),h=c.data,d=(u,f)=>{const g=(u+n)%n,p=((f+s)%s*n+g)*4;return(a[p]*.299+a[p+1]*.587+a[p+2]*.114)/255};for(let u=0;u<s;u++)for(let f=0;f<n;f++){const g=(d(f+1,u)-d(f-1,u))*t,v=(d(f,u+1)-d(f,u-1))*t;let p=-g,m=v,w=1;const _=Math.hypot(p,m,w)||1;p/=_,m/=_,w/=_;const y=(u*n+f)*4;h[y]=(p*.5+.5)*255,h[y+1]=(m*.5+.5)*255,h[y+2]=(w*.5+.5)*255,h[y+3]=255}return l.putImageData(c,0,0),Ke(o,{srgb:e,repeat:null})}function Is(i="#c7cbc3",t=3,e=1){const n=`paint-${i}-${t}-${e}`;if(Ci.has(n))return Ci.get(n);const s=512,r=512,a=Ve(s,r),o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,s,r);const l=o.createLinearGradient(0,0,0,r);l.addColorStop(0,"rgba(255,255,255,0.07)"),l.addColorStop(.5,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(25,30,28,0.13)"),o.fillStyle=l,o.fillRect(0,0,s,r);const c=Dn(t);o.strokeStyle="rgba(35,40,37,0.22)",o.lineWidth=2;for(let g=64;g<r;g+=128)o.beginPath(),o.moveTo(0,g+Math.sin(g)*2),o.lineTo(s,g+Math.cos(g)*2),o.stroke();for(let g=128;g<s;g+=256)o.beginPath(),o.moveTo(g,0),o.lineTo(g,r),o.stroke();for(let g=0;g<18;g++)la(o,c()*s,c()*r,15+c()*55,t*13+g,.8*e);Fh(o,s,r,t+4,Math.round(12*e),"91,52,28"),ca(o,s,r,t+9,50);for(let g=0;g<100;g++){const v=c()*s,p=c()*r,m=1+c()*9,w=1+c()*4;o.fillStyle=c()>.45?"rgba(48,45,40,0.2)":"rgba(196,196,185,0.22)",o.beginPath(),o.ellipse(v,p,m,w,c()*6.28,0,Math.PI*2),o.fill()}Qn(o,s,r,t+22,12);const h=Ke(a),d=Ke(zh(a,t,.56),{srgb:!1}),u=Oh(tv(a,.25),.8),f={map:h,rough:d,normal:u};return Ci.set(n,f),f}function zh(i,t,e=.6){const r=Ve(256,256),a=r.getContext("2d"),o=Math.round(e*255);a.fillStyle=`rgb(${o},${o},${o})`,a.fillRect(0,0,256,256),Qn(a,256,256,t+99,32);const l=Dn(t+5);for(let c=0;c<35;c++){const h=l()*256,d=l()*256,u=4+l()*30,f=a.createRadialGradient(h,d,0,h,d,u);f.addColorStop(0,"rgba(38,38,38,0.35)"),f.addColorStop(1,"rgba(38,38,38,0)"),a.fillStyle=f,a.fillRect(h-u,d-u,u*2,u*2)}return r}function tv(i,t=.2){const s=Ve(512,512),r=s.getContext("2d");r.fillStyle="#777",r.fillRect(0,0,512,512);const a=Dn(421);for(let o=0;o<180;o++){const l=Math.round(110+(a()-.5)*60*t*4);r.fillStyle=`rgba(${l},${l},${l},0.25)`,r.beginPath(),r.ellipse(a()*512,a()*512,1+a()*10,.5+a()*3,a()*6.28,0,6.28),r.fill()}return s}const Qa=new Map;function ev(i="#a94a2e",t=8){const e=`${i}-${t}`;if(Qa.has(e))return Qa.get(e);const n=512,s=512,r=Ve(n,s),a=r.getContext("2d");a.fillStyle=i,a.fillRect(0,0,n,s);const o=18;for(let y=0;y<n;y+=o){const L=a.createLinearGradient(y,0,y+o,0);L.addColorStop(0,"rgba(0,0,0,0.16)"),L.addColorStop(.22,"rgba(255,255,255,0.13)"),L.addColorStop(.48,"rgba(255,255,255,0.03)"),L.addColorStop(.78,"rgba(0,0,0,0.05)"),L.addColorStop(1,"rgba(0,0,0,0.2)"),a.fillStyle=L,a.fillRect(y,0,o,s)}const l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"rgba(15,17,16,0.5)"),l.addColorStop(.055,"rgba(15,17,16,0.1)"),l.addColorStop(.92,"rgba(15,17,16,0.06)"),l.addColorStop(.97,"rgba(15,17,16,0.5)"),l.addColorStop(1,"rgba(15,17,16,0.6)"),a.fillStyle=l,a.fillRect(0,0,n,s);const c=Dn(t+100);for(let y=0;y<30;y++){const L=c()>.5,R=c()*n,A=L?s*(.68+c()*.32):c()*s;if(la(a,R,A,2+c()*13,t*7+y,.55),c()>.6){a.strokeStyle=`rgba(35,32,28,${.15+c()*.35})`,a.lineWidth=.5+c()*1.4;const P=R+(c()-.5)*20,Y=A+(c()-.5)*10;a.beginPath(),a.moveTo(P,Y),a.lineTo(P+(c()-.5)*23,Y+(c()-.5)*7),a.stroke()}}Fh(a,n,s,t+17,16,"102,55,28"),ca(a,n,s,t+31,55),a.save(),a.globalAlpha=.12,a.fillStyle="#efe6d2",a.font='700 30px "Barlow Condensed", sans-serif',a.rotate(-Math.PI/2),a.fillText("ANCHOR LINE  //  CARGO",-s*.78,44),a.restore(),Qn(a,n,s,t+42,10);const h=Ke(r),d=Ve(256,256),u=d.getContext("2d");u.fillStyle="rgb(148,148,148)",u.fillRect(0,0,256,256),Qn(u,256,256,t+66,48);for(let y=0;y<40;y++){const L=c()*256,R=c()*256,A=2+c()*16;u.fillStyle=`rgba(215,215,215,${.1+c()*.3})`,u.beginPath(),u.arc(L,R,A,0,6.28),u.fill()}const f=Ke(d,{srgb:!1}),g=Ve(512,512),v=g.getContext("2d"),p=v.createImageData(512,512),m=p.data;for(let y=0;y<512;y++)for(let L=0;L<512;L++){const R=L%18/18,P=-(Math.cos(R*Math.PI*2)*1.5)*.32,Y=1,x=Math.hypot(P,Y),S=(y*512+L)*4;m[S]=(P/x*.5+.5)*255,m[S+1]=128,m[S+2]=(Y/x*.5+.5)*255,m[S+3]=255}v.putImageData(p,0,0);const w=Ke(g,{srgb:!1}),_={map:h,rough:f,normal:w};return Qa.set(e,_),_}let Nr=null;function nv(){if(Nr)return Nr;const i=1024,t=2048,e=Ve(i,t),n=e.getContext("2d"),s=Dn(1989);n.fillStyle="#49524f",n.fillRect(0,0,i,t);const r=128;for(let v=0;v<t;v+=r){const p=n.createLinearGradient(0,v,0,v+r);p.addColorStop(0,`rgba(255,255,255,${.015+s()*.025})`),p.addColorStop(.5,"rgba(255,255,255,0)"),p.addColorStop(1,"rgba(0,0,0,0.1)"),n.fillStyle=p,n.fillRect(0,v,i,r),n.strokeStyle="rgba(15,19,18,0.5)",n.lineWidth=2,n.beginPath(),n.moveTo(0,v),n.lineTo(i,v),n.stroke(),n.strokeStyle="rgba(210,214,205,0.045)",n.lineWidth=1,n.beginPath(),n.moveTo(0,v+2),n.lineTo(i,v+2),n.stroke()}for(let v=0;v<t;v+=r){const p=Math.floor(v/r)%2*128;for(let m=p;m<i;m+=256)n.strokeStyle="rgba(15,19,18,0.45)",n.lineWidth=2,n.beginPath(),n.moveTo(m,v),n.lineTo(m,v+r),n.stroke()}n.fillStyle="rgba(22,26,24,0.55)";for(let v=10;v<t;v+=r)for(let p=10;p<i;p+=64)n.beginPath(),n.arc(p,v,2.1,0,6.28),n.fill();for(let v=0;v<6500;v++){const p=s()*i,m=s()*t;n.fillStyle=s()>.6?"rgba(210,215,207,0.045)":"rgba(10,12,11,0.08)",n.fillRect(p,m,1+s()*4,1)}const a=(v,p)=>{n.save(),n.globalAlpha=.62,n.fillStyle="#b69539",n.fillRect(v,0,18,t),n.strokeStyle="rgba(28,31,29,0.8)",n.lineWidth=9;for(let m=-40;m<t+40;m+=46)n.beginPath(),n.moveTo(v-2,m+(p?46:0)),n.lineTo(v+20,m+(p?25:-21)),n.stroke();n.globalAlpha=1,n.restore()};a(74,!1),a(i-92,!0),n.save(),n.globalAlpha=.35,n.strokeStyle="#d7bd67",n.lineWidth=5,n.setLineDash([48,34]),n.beginPath(),n.moveTo(i*.5,0),n.lineTo(i*.5,t),n.stroke(),n.restore();const o=(v,p,m,w,_=0,y=.5,L="#d8d3c1")=>{n.save(),n.translate(p,m),n.rotate(_),n.globalAlpha=y,n.fillStyle=L,n.font=`700 ${w}px "Barlow Condensed", sans-serif`,n.textAlign="center",n.fillText(v,0,0),n.restore()};o("09",i*.5,t*.24,270,Math.PI/2,.14),o("BAY  02",i*.68,t*.31,54,Math.PI/2,.32),o("KEEP CLEAR",i*.31,t*.67,48,Math.PI/2,.3),o("NO  SMOKING",i*.69,t*.78,40,Math.PI/2,.23),o("CARGO  DECK",i*.5,t*.93,56,Math.PI/2,.2),o("T-09",i*.37,t*.15,46,Math.PI/2,.35),n.save(),n.translate(i*.5,t*.48),n.rotate(Math.PI/2),n.strokeStyle="rgba(220,220,208,0.23)",n.lineWidth=4,n.strokeRect(-180,-110,360,220),n.globalAlpha=.2,n.fillStyle="#d7d4c6",n.font='600 26px "Barlow Condensed", sans-serif',n.fillText("ACCESS  HATCH  //  DO NOT OBSTRUCT",-166,-86),n.restore();for(let v=0;v<34;v++){const p=120+s()*(i-240),m=s()*t,w=30+s()*270;n.strokeStyle=`rgba(12,15,14,${.03+s()*.055})`,n.lineWidth=2+s()*16,n.beginPath(),n.moveTo(p,m),n.lineTo(p+(s()-.5)*30,m+w),n.stroke()}for(let v=0;v<60;v++)la(n,s()*i,s()*t,5+s()*48,900+v,.85);for(let v=0;v<20;v++){const p=s()*i,m=s()*t,w=6+s()*30,_=n.createRadialGradient(p,m,0,p,m,w);_.addColorStop(0,"rgba(12,14,14,0.35)"),_.addColorStop(.75,"rgba(12,14,14,0.15)"),_.addColorStop(1,"rgba(12,14,14,0)"),n.fillStyle=_,n.beginPath(),n.ellipse(p,m,w,w*(.35+s()*.7),s()*6.28,0,6.28),n.fill()}Qn(n,i,t,77,15);const l=Ve(512,1024),c=l.getContext("2d");c.fillStyle="rgb(162,162,162)",c.fillRect(0,0,512,1024),Qn(c,512,1024,771,34);for(let v=0;v<25;v++){const p=s()*512,m=s()*1024,w=10+s()*70,_=3+s()*20,y=c.createRadialGradient(p,m,0,p,m,w);y.addColorStop(0,"rgba(35,35,35,0.55)"),y.addColorStop(.65,"rgba(55,55,55,0.35)"),y.addColorStop(1,"rgba(55,55,55,0)"),c.fillStyle=y,c.beginPath(),c.ellipse(p,m,w,_,s()*6.28,0,6.28),c.fill()}const h=Ke(l,{srgb:!1}),d=Ke(e),u=Ve(512,1024),f=u.getContext("2d");f.fillStyle="#777",f.fillRect(0,0,512,1024);for(let v=0;v<900;v++){const p=Math.round(90+s()*90);f.fillStyle=`rgba(${p},${p},${p},0.35)`,f.fillRect(s()*512,s()*1024,1+s()*7,1+s()*2)}f.strokeStyle="rgba(30,30,30,0.8)",f.lineWidth=2;for(let v=0;v<1024;v+=64)f.beginPath(),f.moveTo(0,v),f.lineTo(512,v),f.stroke();const g=Oh(u,1.2);return Nr={map:d,rough:h,normal:g},Nr}function Bh(i=7){const t=`wood-${i}`;if(Ci.has(t))return Ci.get(t);const e=512,n=512,s=Ve(e,n),r=s.getContext("2d"),a=Dn(i);r.fillStyle="#6f5537",r.fillRect(0,0,e,n);for(let c=0;c<8;c++){const h=c*64;r.fillStyle=c%2?"rgba(255,230,185,0.035)":"rgba(30,20,12,0.04)",r.fillRect(0,h,e,64),r.strokeStyle="rgba(33,23,14,0.45)",r.lineWidth=3,r.beginPath(),r.moveTo(0,h),r.lineTo(e,h),r.stroke()}for(let c=0;c<220;c++){const h=a()*n;r.strokeStyle=`rgba(${a()>.5?"42,28,16":"166,136,94"},${.05+a()*.18})`,r.lineWidth=.5+a()*2,r.beginPath(),r.moveTo(0,h),r.bezierCurveTo(e*.3,h+(a()-.5)*18,e*.7,h+(a()-.5)*18,e,h+(a()-.5)*8),r.stroke()}for(let c=0;c<16;c++)la(r,a()*e,a()*n,3+a()*18,i+c,.4);ca(r,e,n,i+1,25),Qn(r,e,n,i+3,14);const o=Ke(s),l=Ke(zh(s,i+21,.78),{srgb:!1});return Ci.set(t,{map:o,rough:l,normal:null}),Ci.get(t)}function ns(i,t={}){const{width:e=1024,height:n=256,color:s="rgba(232,226,210,0.84)",font:r='700 122px "Barlow Condensed", sans-serif',sub:a="",subColor:o="rgba(232,226,210,0.55)",subFont:l='500 40px "Barlow Condensed", sans-serif',align:c="left",stitch:h=!1}=t,d=Ve(e,n),u=d.getContext("2d");u.clearRect(0,0,e,n),u.fillStyle=s,u.font=r,u.textAlign=c,u.textBaseline="middle";const f=c==="center"?e/2:24;u.fillText(i,f,a?n*.38:n/2),a&&(u.fillStyle=o,u.font=l,u.fillText(a,f,n*.73)),h&&(u.strokeStyle=s,u.lineWidth=4,u.strokeRect(14,14,e-28,n-28)),u.globalCompositeOperation="destination-out";const g=Dn(i.length*33+e);for(let p=0;p<900;p++)u.globalAlpha=.1+g()*.4,u.beginPath(),u.arc(g()*e,g()*n,g()*2.6,0,6.28),u.fill();u.globalCompositeOperation="source-over",u.globalAlpha=1;const v=Ke(d);return v.wrapS=v.wrapT=Rn,v}function to(i,t,e={}){const{danger:n=!0,width:s=512,height:r=256}=e,a=Ve(s,r),o=a.getContext("2d");o.fillStyle=n?"#b8432c":"#d0ad50",o.fillRect(0,0,s,r),o.fillStyle="rgba(20,22,20,0.9)",o.fillRect(12,12,s-24,r-24),o.strokeStyle=n?"#ddcbb2":"#1c1c1a",o.lineWidth=5,o.strokeRect(22,22,s-44,r-44),o.fillStyle="#e7d5bd",o.font='700 54px "Barlow Condensed", sans-serif',o.textAlign="center",o.fillText(i,s/2,r*.45),o.fillStyle=n?"#c85940":"#c1a24f",o.font='600 26px "Barlow Condensed", sans-serif',o.fillText(t,s/2,r*.68),Qn(o,s,r,82,18),ca(o,s,r,83,40);const l=Ke(a);return l.wrapS=l.wrapT=Rn,l}function iv(){const i=Ve(512,300),t=i.getContext("2d");t.fillStyle="#b74b29",t.fillRect(0,0,512,300),t.fillStyle="#e6ddc7",t.fillRect(0,0,512,28),t.fillRect(0,272,512,28),t.save(),t.translate(256,150),t.strokeStyle="#e6ddc7",t.lineWidth=11,t.beginPath(),t.arc(0,-34,33,0,6.28),t.stroke(),t.beginPath(),t.moveTo(0,0),t.lineTo(0,92),t.moveTo(-46,35),t.lineTo(46,35),t.stroke(),t.beginPath(),t.arc(0,-34,7,0,6.28),t.fillStyle="#e6ddc7",t.fill(),t.font='700 33px "Barlow Condensed", sans-serif',t.fillStyle="#e6ddc7",t.textAlign="center",t.fillText("ANCHOR LINE",0,126),t.restore(),Qn(t,512,300,51,12);const e=Ke(i);return e.wrapS=e.wrapT=Rn,e}function sv(){const i=Ve(64,64),t=i.getContext("2d");t.clearRect(0,0,64,64);const e=t.createRadialGradient(32,32,0,32,32,22);e.addColorStop(0,"rgba(9,9,8,0.96)"),e.addColorStop(.22,"rgba(18,16,14,0.92)"),e.addColorStop(.55,"rgba(50,40,31,0.5)"),e.addColorStop(1,"rgba(40,35,28,0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,25,0,6.28),t.fill(),t.strokeStyle="rgba(140,122,100,0.4)",t.lineWidth=1;for(let n=0;n<7;n++){const s=n/7*6.28+.3,r=9+Math.random()*16;t.beginPath(),t.moveTo(32+Math.cos(s)*5,32+Math.sin(s)*5),t.lineTo(32+Math.cos(s)*r,32+Math.sin(s)*r),t.stroke()}return Ke(i)}function rv(){const i=Ve(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,30);return e.addColorStop(0,"rgba(255,255,236,1)"),e.addColorStop(.16,"rgba(255,218,132,0.95)"),e.addColorStop(.5,"rgba(255,128,49,0.4)"),e.addColorStop(1,"rgba(255,90,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ke(i)}function av(){const i=Ve(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,61);return e.addColorStop(0,"rgba(198,199,192,0.68)"),e.addColorStop(.45,"rgba(160,163,157,0.27)"),e.addColorStop(1,"rgba(110,112,107,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ke(i)}function kh(){const i=Ve(128,128),t=i.getContext("2d");t.save(),t.translate(64,64);const e=t.createRadialGradient(0,0,0,0,0,60);e.addColorStop(0,"rgba(255,253,226,1)"),e.addColorStop(.22,"rgba(255,201,99,0.9)"),e.addColorStop(.55,"rgba(255,113,34,0.35)"),e.addColorStop(1,"rgba(255,66,0,0)"),t.fillStyle=e,t.beginPath();for(let n=0;n<12;n++){const s=n/12*6.28,r=n%2?22:55+Math.sin(n*2.1)*7;t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t.fill(),t.restore(),Ke(i)}function ov(i,t="blue"){const s=Ve(512,128),r=s.getContext("2d");r.clearRect(0,0,512,128),r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.fillStyle=t==="blue"?"#8bc9c5":"#e08a6d",r.fillRect(178,80,156,2),r.fillStyle="rgba(6,10,9,0.85)",r.font='600 42px "Noto Sans SC", "PingFang SC", sans-serif',r.fillText(i,256,47),r.strokeStyle="rgba(6,10,9,0.8)",r.lineWidth=7,r.strokeText(i,256,47),r.fillStyle="#efe9da",r.fillText(i,256,47),r.fillStyle="rgba(235,229,215,0.68)",r.font='500 20px "Barlow Condensed", sans-serif',r.fillText(t==="blue"?"F R I E N D L Y":"H O S T I L E",256,94);const a=Ke(s);return a.wrapS=a.wrapT=Rn,a}const lv={minX:-16.15,maxX:16.15,minZ:-30.7,maxZ:30.7},ls=new T(-.58,.36,.47).normalize(),Ko=new Wt("#a9bac0"),Dc={steel:"#303735",dark:"#191d1c"};function cv(i,t){const e=t==="high"?160:72,n=new on(1400,1400,e,e);n.rotateX(-Math.PI/2);const s=new ke({uniforms:{uTime:i,uSunDir:{value:ls.clone()},uFogColor:{value:Ko.clone()},uDeep:{value:new Wt("#12343b")},uShallow:{value:new Wt("#2b6268")},uSky:{value:new Wt("#8cb2c2")},uSun:{value:new Wt("#ffd7a1")}},vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vCrest;

      void main() {
        vec3 p = position;
        float t = uTime;
        float w1 = sin(p.x * 0.19 + t * 0.72) * 0.20;
        float w2 = sin(p.z * 0.27 - t * 0.58) * 0.14;
        float w3 = sin((p.x + p.z) * 0.53 + t * 1.12) * 0.055;
        float w4 = sin((p.x - p.z) * 0.96 - t * 1.55) * 0.022;
        float wave = w1 + w2 + w3 + w4;
        p.y += wave;
        vCrest = smoothstep(0.14, 0.38, wave);

        float dx = cos(p.x * 0.19 + t * 0.72) * 0.20 * 0.19
                 + cos((p.x + p.z) * 0.53 + t * 1.12) * 0.055 * 0.53
                 + cos((p.x - p.z) * 0.96 - t * 1.55) * 0.022 * 0.96;
        float dz = -cos(p.z * 0.27 - t * 0.58) * 0.14 * 0.27
                 + cos((p.x + p.z) * 0.53 + t * 1.12) * 0.055 * 0.53
                 - cos((p.x - p.z) * 0.96 - t * 1.55) * 0.022 * 0.96;
        vec3 n = normalize(vec3(-dx * 1.7, 1.0, -dz * 1.7));

        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        vNormalW = normalize(mat3(modelMatrix) * n);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 uSunDir;
      uniform vec3 uFogColor;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform vec3 uSun;
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying float vCrest;

      void main() {
        vec3 N = normalize(vNormalW);
        vec3 V = normalize(cameraPosition - vWorld);
        float fresnel = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 4.0);
        float facing = clamp(dot(N, normalize(vec3(0.0, 1.0, 0.0))), 0.0, 1.0);

        vec3 water = mix(uDeep, uShallow, 0.22 + facing * 0.55);
        vec3 skyReflect = mix(vec3(0.43, 0.53, 0.55), uSky, 0.55);
        water = mix(water, skyReflect, 0.18 + fresnel * 0.64);

        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 260.0) * 1.5;
        float broad = pow(max(dot(N, H), 0.0), 18.0) * 0.11;
        water += uSun * (spec + broad);

        // wind-ripped whitecaps, kept sparse
        float fleck = sin(vWorld.x * 3.9 + uTime * 0.7) * sin(vWorld.z * 4.7 - uTime * 0.4);
        float foam = smoothstep(0.91, 0.99, fleck * 0.5 + 0.5) * vCrest * 0.16;
        water = mix(water, vec3(0.7, 0.75, 0.73), foam);

        float dist = length(cameraPosition - vWorld);
        float fog = smoothstep(55.0, 460.0, dist);
        water = mix(water, uFogColor, fog * 0.86);
        gl_FragColor = vec4(water, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),r=new ut(n,s);return r.position.y=-.82,r.receiveShadow=!1,r.frustumCulled=!1,r.renderOrder=-3,r}function hv(i){const t=new gn(620,48,28),e=new ke({side:hn,depthWrite:!1,uniforms:{uTime:i,uSunDir:{value:ls.clone()},uHorizon:{value:new Wt("#d3cfbc")},uZenith:{value:new Wt("#397ba6")},uSun:{value:new Wt("#ffe9c8")}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
        gl_Position.z = gl_Position.w;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uHorizon;
      uniform vec3 uZenith;
      uniform vec3 uSun;
      varying vec3 vWorld;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
                   mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.56;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.03 + vec2(12.7, -7.3);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 dir = normalize(vWorld - cameraPosition);
        float h = max(dir.y, 0.0);

        vec3 sky = mix(uHorizon, uZenith, pow(h, 0.52));
        float sunDot = max(dot(dir, uSunDir), 0.0);
        vec3 col = sky + uSun * (pow(sunDot, 700.0) * 5.0 + pow(sunDot, 24.0) * 0.12);

        // cloud deck projected onto a plane above the ship
        if (dir.y > 0.005) {
          vec2 uv = dir.xz / (dir.y + 0.12) * 1.25;
          float drift = uTime * 0.006;
          float base = fbm(uv * 0.62 + vec2(drift, -drift * 0.4));
          float detail = fbm(uv * 1.7 + vec2(-drift * 1.4, 0.0));
          float cloudShape = smoothstep(0.50, 0.78, base * 0.8 + detail * 0.33);
          cloudShape *= smoothstep(0.015, 0.18, dir.y);
          float lightSide = smoothstep(0.1, 0.85, fbm(uv * 0.63 + uSunDir.xz * 0.8 + drift));
          vec3 cloud = mix(vec3(0.42, 0.45, 0.45), vec3(0.93, 0.90, 0.84), lightSide);
          cloud += uSun * pow(sunDot, 6.0) * 0.18;
          col = mix(col, cloud, cloudShape * 0.64);

          // thin high cirrus
          float cirrus = smoothstep(0.62, 0.9, fbm(uv * vec2(0.32, 1.8) + vec2(0.0, drift * 2.0)));
          col = mix(col, vec3(0.88, 0.86, 0.82), cirrus * 0.13 * smoothstep(0.1, 0.5, dir.y));
        } else {
          col = uHorizon * 0.78;
        }

        float horizonHaze = exp(-abs(dir.y) * 34.0);
        col = mix(col, uHorizon * 1.02, horizonHaze * 0.58);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),n=new ut(t,e);return n.frustumCulled=!1,n.renderOrder=-10,n}function uv(i){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#315f82"),n.addColorStop(.42,"#7699aa"),n.addColorStop(.53,"#c4c4b4"),n.addColorStop(.56,"#6d8186"),n.addColorStop(1,"#1e3034"),e.fillStyle=n,e.fillRect(0,0,1024,512);const s=(()=>{let c=91;return()=>(c=c*16807%2147483647)/2147483647})();for(let c=0;c<55;c++){const h=s()*1024,d=60+s()*180,u=40+s()*150,f=8+s()*30,g=e.createRadialGradient(h,d,0,h,d,u);g.addColorStop(0,"rgba(232,229,214,0.22)"),g.addColorStop(1,"rgba(232,229,214,0)"),e.fillStyle=g,e.save(),e.translate(h,d),e.scale(1,f/u),e.beginPath(),e.arc(0,0,u,0,Math.PI*2),e.fill(),e.restore()}const r=e.createRadialGradient(280,180,0,280,180,150);r.addColorStop(0,"rgba(255,237,204,0.95)"),r.addColorStop(.18,"rgba(255,218,166,0.42)"),r.addColorStop(1,"rgba(255,201,144,0)"),e.fillStyle=r,e.fillRect(0,0,600,400);const a=new Xs(t);a.mapping=Wr,a.colorSpace=nn;const o=new Vo(i);o.compileEquirectangularShader();const l=o.fromEquirectangular(a).texture;return o.dispose(),a.dispose(),l}function dv(i,t){const e=new Dh("#b7d3df","#4a4437",1.52);i.add(e);const n=new ta("#ffd3a1",3.7);n.position.copy(ls).multiplyScalar(95),n.target.position.set(0,0,0),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(t==="high"?2048:1024,t==="high"?2048:1024),n.shadow.camera.near=1,n.shadow.camera.far=190,n.shadow.camera.left=-49,n.shadow.camera.right=49,n.shadow.camera.top=50,n.shadow.camera.bottom=-50,n.shadow.bias=-35e-5,n.shadow.normalBias=.035,i.add(n);const s=new ta("#86adc0",.72);return s.position.set(35,26,-50),i.add(s),{sun:n,hemi:e,fill:s}}function yt(i,t,e,n,s,r,a,o={}){const l=o.rounded?new gl(i,t,e,2,Math.min(i,t,e)*.12):new Ee(i,t,e),c=new ut(l,n);return c.position.set(s,r,a),c.castShadow=o.cast!==!1,c.receiveShadow=o.receive!==!1,o.rotY&&(c.rotation.y=o.rotY),c}function is(i,t,e,n=20,s=!1){const r=new Sh(i,s),a=new pl(r,n,t,5,s),o=new ut(a,e);return o.castShadow=!0,o.receiveShadow=!0,o}function fv(i,t,e="high"){const n=new Vt;n.name="transport-ship",i.add(n);const s={value:0},r=[],a=[],o=[],l=[],c=uv(t);i.environment=c,i.environmentIntensity=.78,i.fog=new cl(Ko.clone(),55,360),i.background=Ko.clone();const h=hv(s);i.add(h);const d=cv(s,e);i.add(d);const u=dv(i,e),f=new Uh("#b9c8c4",.22);i.add(f);const g=nv();g.map.anisotropy=8,g.normal.anisotropy=8;const v=new Ft({map:g.map,roughnessMap:g.rough,normalMap:g.normal,normalScale:new st(.7,.7),metalness:.36,roughness:1,envMapIntensity:.62,color:"#c2c3ba"}),p=Is("#b9b9ae",7,1.35);p.map.repeat.set(9,1),p.rough.repeat.set(9,1),p.normal.repeat.set(9,1);const m=new Ft({map:p.map,roughnessMap:p.rough,normalMap:p.normal,metalness:.22,roughness:.88,envMapIntensity:.58}),w=Is("#cfcabd",12,.8);w.map.repeat.set(4,2),w.rough.repeat.set(4,2),w.normal.repeat.set(4,2);const _=new Ft({map:w.map,roughnessMap:w.rough,normalMap:w.normal,metalness:.15,roughness:.8,envMapIntensity:.55}),y=Is("#6c7472",23,1.7);y.map.repeat.set(8,2),y.rough.repeat.set(8,2),y.normal.repeat.set(8,2);const L=new Ft({map:y.map,roughnessMap:y.rough,normalMap:y.normal,metalness:.34,roughness:.9,envMapIntensity:.48,color:"#aeb1a8"}),R=new Ft({color:"#752f25",metalness:.38,roughness:.84,envMapIntensity:.4}),A=new Ft({color:Dc.steel,metalness:.72,roughness:.5,envMapIntensity:.85}),P=new Ft({color:Dc.dark,metalness:.65,roughness:.55,envMapIntensity:.7}),Y=new Ft({color:"#929892",metalness:.82,roughness:.47,envMapIntensity:.9}),x=new Ft({color:"#704027",metalness:.3,roughness:.92,envMapIntensity:.35}),S=new Ft({color:"#c5a041",metalness:.3,roughness:.67,envMapIntensity:.55}),z=Is("#b29236",63,1.5);z.map.repeat.set(5,1),z.rough.repeat.set(5,1),z.normal.repeat.set(5,1);const N=new Ft({map:z.map,roughnessMap:z.rough,normalMap:z.normal,metalness:.3,roughness:.82,envMapIntensity:.45}),G=new Ft({color:"#bd5b32",metalness:.25,roughness:.7,envMapIntensity:.5}),K=new Ft({color:"#d9d7ca",metalness:.22,roughness:.66,envMapIntensity:.5}),B=new Ft({color:"#131716",metalness:.42,roughness:.7}),tt=new aa({color:"#173139",metalness:.4,roughness:.15,transmission:.08,transparent:!0,opacity:.82,envMapIntensity:1.4}),X=new Ft({color:"#fff2ce",emissive:"#ffc272",emissiveIntensity:2.7,roughness:.32}),Mt=new Ft({color:"#8d7450",roughness:.95,metalness:.02}),St=Bh(5),bt=new Ft({map:St.map,roughnessMap:St.rough,roughness:1,metalness:.02,envMapIntensity:.2}),ae=new Ft({color:"#cfc7ae",roughness:.8}),Z=[{key:"a7462b",base:"#a7462b",trim:"#53372b",code:"ANCHOR 2049",sub:"DRY CARGO // 22G1"},{key:"2e6d68",base:"#2e6d68",trim:"#2a3734",code:"T-09 / 77",sub:"TRANSPORT SHIP // 45G1"},{key:"315570",base:"#315570",trim:"#2b333c",code:"SEA LINE 18",sub:"ISO 6346 // 30T"},{key:"677259",base:"#677259",trim:"#3d4136",code:"CARGO 12",sub:"DOOR TO DOOR // 20G1"},{key:"a89a7d",base:"#a89a7d",trim:"#4b4439",code:"ANCHOR 07",sub:"HIGH CUBE // 45HC"}].map((D,q)=>{const j=ev(D.base,10+q*9);return{mat:new Ft({map:j.map,roughnessMap:j.rough,normalMap:j.normal,normalScale:new st(.8,.8),metalness:.24,roughness:.76,envMapIntensity:.64}),palette:D,skin:j}}),it=(D,q,j,H,lt,gt,Ot={})=>{const It={minX:D,maxX:q,minY:j,maxY:H,minZ:lt,maxZ:gt,type:Ot.type||"solid",color:Ot.color||null,label:Ot.label||null,material:Ot.material||"metal"};return r.push(It),It},Rt=(D,q,j,H,lt,gt=0,Ot={},It=A,Xt={})=>{const Jt=yt(D,q,j,It,H,gt+q/2,lt,Xt);return n.add(Jt),it(H-D/2,H+D/2,gt,gt+q,lt-j/2,lt+j/2,Ot),Jt},ht=(D,q,j,H,lt,gt,Ot=0,It=0,Xt=.9)=>{const Jt=new Mn({map:D,transparent:!0,opacity:Xt,depthWrite:!1,toneMapped:!1,side:_n,polygonOffset:!0,polygonOffsetFactor:-2}),re=new ut(new on(q,j),Jt);return re.position.set(H,lt,gt),re.rotation.set(It,Ot,0),re.receiveShadow=!1,re.renderOrder=2,n.add(re),re},qt=new on(33.9,62.4,1,1);qt.rotateX(-Math.PI/2);const Ht=new ut(qt,v);Ht.position.set(0,.01,0),Ht.receiveShadow=!0,n.add(Ht);const jt=yt(37.2,.95,68.2,L,0,-.475,0,{cast:!1});n.add(jt);const ne=yt(23,1.15,55,R,0,-5.4,0,{cast:!1});n.add(ne);for(const D of[-1,1]){const q=yt(.5,6.6,66,L,D*18.2,-3.3,0,{cast:!1});n.add(q);const j=yt(.54,1.8,66.2,R,D*18.22,-6.4,0,{cast:!1});n.add(j);for(let H=-28;H<=28;H+=8){const lt=yt(.16,5.8,.3,A,D*18.44,-3.2,H,{cast:!1});lt.material=P,n.add(lt)}}const Q=new Ch;Q.moveTo(-18.2,0),Q.lineTo(18.2,0),Q.lineTo(11,11.5),Q.lineTo(-11,11.5),Q.closePath();const C=new dl(Q,{depth:.9,bevelEnabled:!1});C.rotateX(Math.PI/2);const dt=new ut(C,L);dt.position.set(0,.5,30.2),dt.castShadow=!1,dt.receiveShadow=!0,n.add(dt),Rt(.45,.5,62.5,-16.95,0,0,{type:"edge"},A),Rt(.45,.5,62.5,16.95,0,0,{type:"edge"},A);for(const D of[-1,1]){const q=yt(.34,1.28,61.8,m,D*17.15,.8,0);n.add(q);const j=yt(.52,.12,61.8,Y,D*17.15,1.47,0);n.add(j),it(D*17.15-.2,D*17.15+.2,0,1.5,-30.9,30.9,{type:"bulwark"});for(let Ot=-29;Ot<=29;Ot+=4.2){const It=yt(.18,1.18,.28,A,D*16.92,.66,Ot);It.material=P,n.add(It)}const H=is([new T(D*17.16,1.78,-30.8),new T(D*17.16,1.78,30.8)],.036,Y,2);n.add(H);const lt=is([new T(D*17.16,1.61,-30.8),new T(D*17.16,1.61,30.8)],.025,Y,2);n.add(lt);for(let Ot=-30;Ot<=30;Ot+=3){const It=yt(.055,.98,.055,Y,D*17.16,1.76,Ot);It.castShadow=!1,n.add(It)}const gt=ns("T-09",{width:1024,height:320,font:'700 250px "Barlow Condensed", sans-serif',color:"rgba(230,224,208,0.72)",align:"center",sub:"ANCHOR LINE  //  CARGO",subFont:'500 42px "Barlow Condensed", sans-serif',subColor:"rgba(230,224,208,0.45)"});ht(gt,4.4,1.4,D*17.02,.75,13.5,D===1?-Math.PI/2:Math.PI/2),ht(gt,3.3,1.05,D*17.02,.75,-20,D===1?-Math.PI/2:Math.PI/2,0,.55)}Rt(33.6,.5,.45,0,31.15,0,{type:"edge"},A),Rt(33.6,.5,.45,0,-31.15,0,{type:"edge"},A),it(-17,17,0,3.2,30.9,33,{type:"boundary"}),it(-17,17,0,3.2,-33,-30.9,{type:"boundary"});for(const D of[-21,-8,6,19]){const q=yt(32.6,.035,.12,P,0,.035,D,{cast:!1,receive:!0});n.add(q)}const ft=ns("GLOBAL RISK",{width:1024,height:256,font:'700 150px "Barlow Condensed", sans-serif',color:"rgba(94,169,175,0.5)",align:"center",sub:"保卫者  //  AFT DEPLOYMENT",subFont:'600 38px "Noto Sans SC", sans-serif',subColor:"rgba(94,169,175,0.42)"}),rt=ns("BLACK LIST",{width:1024,height:256,font:'700 150px "Barlow Condensed", sans-serif',color:"rgba(185,84,55,0.5)",align:"center",sub:"潜伏者  //  FORWARD DEPLOYMENT",subFont:'600 38px "Noto Sans SC", sans-serif',subColor:"rgba(185,84,55,0.42)"});ht(ft,8.4,2.6,0,.045,26.9,0,-Math.PI/2,.8),ht(rt,8.4,2.6,0,.045,-26.9,0,-Math.PI/2,.8);for(const D of[-1,1])for(const[q,j]of[[27.6,"#4e969b"],[-27.6,"#a34f38"]]){const H=yt(.13,.025,5.6,new Ft({color:j,roughness:.7,metalness:.2,emissive:j,emissiveIntensity:.12}),D*8.3,.04,q,{cast:!1,receive:!0});n.add(H)}const pt=[{x:-11.35,z:17.1,rot:0,mat:0,levels:1,code:"ANCHOR 2049"},{x:4.4,z:12.4,rot:Math.PI/2,mat:1,levels:1,code:"CF-77 / 09"},{x:-5.3,z:6.4,rot:Math.PI/2,mat:2,levels:1,code:"SEA LINE 18"},{x:9.9,z:4.5,rot:0,mat:3,levels:1,code:"CARGO 12"},{x:13.35,z:13.3,rot:Math.PI/2,mat:1,levels:2,code:"DANGER / 77"},{x:0,z:0,rot:0,mat:0,levels:1,code:"ANCHOR // T-09",central:!0},{x:12.4,z:24.6,rot:0,mat:4,levels:1,code:"HIGH CUBE",low:!0}];for(const D of[...pt])D.x===0&&D.z===0||pt.push({...D,x:-D.x,z:-D.z,mirror:!0});const kt=D=>{const lt=Z[D.mat%Z.length],gt=new Vt;gt.position.set(D.x,0,D.z),gt.rotation.y=D.rot||0,gt.userData.kind="container";const Ot=Math.abs(Math.cos(D.rot||0))>.5,It=Ot?6.06:2.42,Xt=Ot?2.42:6.06;for(let Jt=0;Jt<(D.levels||1);Jt++){const re=Jt*2.615,Ie=new ut(new Ee(6.06,2.58,2.42),lt.mat);Ie.position.set(0,re+2.58/2,0),Ie.castShadow=!0,Ie.receiveShadow=!0,gt.add(Ie);for(const de of[-1,1])for(const he of[-1,1]){const Me=yt(.14,2.66,.14,P,de*2.9949999999999997,re+1.29,he*1.175);gt.add(Me)}for(const de of[.035,2.58-.035]){const he=yt(6.119999999999999,.13,.13,P,0,re+de,1.175),Me=yt(6.06+.06,.13,.13,P,0,re+de,-2.42/2+.035),dn=yt(.13,.13,2.42,P,6.06/2-.035,re+de,0),mi=yt(.13,.13,2.42,P,-6.06/2+.035,re+de,0);gt.add(he,Me,dn,mi)}for(let de=0;de<4;de++){const he=yt(.035,2.1672,.05,Y,3.0479999999999996,re+1.2384,-.8228000000000001+de*.5445);he.castShadow=!1,gt.add(he);const Me=yt(.07,.09,.12,P,6.06/2+.02,re+2.58*.31,-2.42*.34+de*(2.42*.225));gt.add(Me)}const me=yt(.014,2.58*.75,.03,B,6.06/2+.02,re+2.58*.5,0);if(gt.add(me),Jt===0){const de=ns(lt.palette.code,{width:1024,height:256,font:'700 118px "Barlow Condensed", sans-serif',color:"rgba(236,229,211,0.72)",sub:lt.palette.sub,subFont:'500 32px "Barlow Condensed", sans-serif',subColor:"rgba(236,229,211,0.45)",align:"center"});for(const Me of[-1,1]){const dn=new ut(new on(3.35,.86),new Mn({map:de,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3}));dn.position.set(-.35,re+2.58*.6,Me*(2.42/2+.014)),Me<0&&(dn.rotation.y=Math.PI),gt.add(dn)}const he=new ut(new on(.46,.31),new Mn({map:to("DANGER","KEEP CLEAR",{width:256,height:180}),transparent:!0,depthWrite:!1,toneMapped:!1}));he.position.set(6.06/2+.045,re+1.45,2.42/2-.32),he.rotation.y=Math.PI/2,gt.add(he)}}return gt.traverse(Jt=>{Jt.isMesh&&(Jt.userData.world=!0)}),n.add(gt),l.push(gt),it(D.x-It/2,D.x+It/2,0,2.58*(D.levels||1)+.04,D.z-Xt/2,D.z+Xt/2,{type:"container",color:lt.palette.base,label:lt.palette.code}),a.push({type:"container",x:D.x,z:D.z,w:It,d:Xt,color:lt.palette.base}),gt};for(const D of pt)kt(D);const Tt=ns("ANCHOR",{width:512,height:256,font:'700 92px "Barlow Condensed", sans-serif',color:"rgba(35,32,25,0.58)",align:"center",sub:"FRAGILE // 09",subFont:'600 34px "Barlow Condensed", sans-serif',subColor:"rgba(35,32,25,0.42)"}),E=(D,q,j,H,lt,gt,Ot=0)=>{const It=new Vt;It.position.set(D,0,q),It.rotation.y=Ot;for(let Xt=0;Xt<gt;Xt++){const Jt=Xt*(lt+.02),re=yt(j,lt,H,bt,0,Jt+lt/2,0);It.add(re);for(const me of[-1,1])for(const de of[-1,1]){const he=yt(.075,lt+.02,.075,P,me*(j/2-.02),Jt+lt/2,de*(H/2-.02));It.add(he)}for(const me of[Jt+.055,Jt+lt-.055]){const de=yt(j+.02,.055,.06,P,0,me,H/2),he=yt(j+.02,.055,.06,P,0,me,-H/2);It.add(de,he)}const Ie=new ut(new on(j*.72,lt*.5),new Mn({map:Tt,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Ie.position.set(0,Jt+lt*.52,H/2+.045),It.add(Ie)}return It.traverse(Xt=>{Xt.isMesh&&(Xt.userData.world=!0)}),n.add(It),l.push(It),it(D-j/2,D+j/2,0,lt*gt+.02,q-H/2,q+H/2,{type:"crate",color:"#776042"}),a.push({type:"crate",x:D,z:q,w:j,d:H,color:"#776042"}),It},M=[{x:-8.7,z:24.1,w:1.85,d:1.35,h:1.15,levels:2},{x:12.2,z:22.4,w:1.3,d:1.8,h:1,levels:1},{x:-13.1,z:9,w:1.5,d:1.5,h:1.15,levels:2},{x:3.7,z:2.15,w:1.2,d:1.2,h:1,levels:1},{x:-10.6,z:-22.7,w:1.5,d:1.15,h:1.05,levels:1}],O=[...M];for(const D of M)D.x===3.7&&D.z===2.15?O.push({...D,x:-3.7,z:-2.15}):O.push({...D,x:-D.x,z:-D.z});for(const D of O)E(D.x,D.z,D.w,D.d,D.h,D.levels);const $=[{x:11.2,z:8.9,colors:["#4e5e55","#827151","#8b422d"]},{x:-14.2,z:19.7,colors:["#8b422d","#4f5651","#806d4e"]},{x:-11.2,z:-8.9,colors:["#8b422d","#4e5e55","#827151"]},{x:14.2,z:-19.7,colors:["#4f5651","#8b422d","#4e5e55"]},{x:15,z:-4.5,colors:["#827151","#4e5e55"]},{x:-15,z:4.5,colors:["#8b422d","#827151"]}],et=new ee(.36,.4,1.06,16,1),J=new ee(.31,.31,.045,16),Ut=new Be(.37,.018,5,18);Ut.rotateX(Math.PI/2);for(const D of $)D.colors.forEach((q,j)=>{const H=j/D.colors.length*Math.PI*2,lt=j===0?0:.46,gt=D.x+Math.cos(H)*lt,Ot=D.z+Math.sin(H)*lt,It=new Ft({color:q,metalness:.62,roughness:.68,envMapIntensity:.55}),Xt=new ut(et,It);Xt.position.set(gt,.55,Ot),Xt.rotation.y=j*1.7,Xt.castShadow=!0,Xt.receiveShadow=!0,n.add(Xt);const Jt=new ut(J,Y);Jt.position.set(gt,1.095,Ot),Jt.castShadow=!0,n.add(Jt);for(const re of[.35,.8]){const Ie=new ut(Ut,P);Ie.position.set(gt,re,Ot),n.add(Ie)}it(gt-.37,gt+.37,0,1.1,Ot-.37,Ot+.37,{type:"barrel",color:q})}),a.push({type:"prop",x:D.x,z:D.z,w:1.5,d:1.5,color:"#5b5c50"});const mt=(D,q)=>{const j=new Vt;j.position.set(D,0,q);const H=new Vt;H.rotation.z=Math.PI/2,H.position.y=.83;const lt=new ee(.85,.85,.1,20);for(const It of[-.58,.58]){const Xt=new ut(lt,bt);Xt.position.y=It,Xt.castShadow=!0,Xt.receiveShadow=!0,H.add(Xt);for(let Jt=0;Jt<4;Jt++){const re=yt(.08,.08,1.2,P,0,It,0);re.rotation.set(0,Jt*Math.PI/4,Math.PI/2),re.castShadow=!1,H.add(re)}}const gt=new ut(new ee(.55,.55,1.05,16),B);gt.castShadow=!0,H.add(gt);const Ot=new ut(new Be(.64,.09,6,24),P);Ot.rotation.x=Math.PI/2,Ot.scale.y=.72,Ot.position.y=.16,H.add(Ot),j.add(H),j.traverse(It=>{It.isMesh&&(It.userData.world=!0)}),n.add(j),l.push(j),it(D-.95,D+.95,0,1.72,q-.95,q+.95,{type:"prop"}),a.push({type:"prop",x:D,z:q,w:1.9,d:1.9,color:"#6b5b42"})};mt(-13.7,12.6),mt(13.7,-12.6);const Et=[],oe=(D,q)=>{const j=new Vt;j.position.set(D,0,q);const H=yt(1,.18,1,P,0,.09,0);j.add(H);const lt=new ut(new ee(.39,.46,1.85,14),new Ft({color:"#9c9a8c",metalness:.55,roughness:.74}));lt.position.y=1.08,lt.castShadow=!0,j.add(lt);const gt=new ut(new ee(.55,.4,.22,14),G);gt.position.y=2.08,gt.castShadow=!0,j.add(gt);const Ot=new ut(new Be(.43,.035,5,18),P);Ot.rotation.x=Math.PI/2,Ot.position.y=1.5,j.add(Ot),j.traverse(It=>{It.isMesh&&(It.userData.world=!0)}),n.add(j),l.push(j),it(D-.5,D+.5,0,2.15,q-.5,q+.5,{type:"prop"}),Et.push({x:D,z:q,y:2.15}),a.push({type:"prop",x:D,z:q,w:1.1,d:1.1,color:"#7e7e73"})};oe(15.1,2),oe(-15.1,-2);const ot=(D,q,j=0)=>{const H=new Vt;H.position.set(D,0,q),H.rotation.y=j;const lt=yt(2.3,.24,1.35,P,0,.12,0);H.add(lt);const gt=new Vt;gt.position.y=.75,gt.rotation.z=Math.PI/2;const Ot=new ut(new ee(.46,.46,1.5,16),S);Ot.castShadow=!0,gt.add(Ot);for(const me of[-.78,.78]){const de=new ut(new ee(.65,.65,.09,18),P);de.position.y=me,gt.add(de)}H.add(gt);const It=yt(.7,.65,.55,A,.9,.62,0);H.add(It);const Xt=new ut(new Be(.5,.065,5,20),P);Xt.rotation.x=Math.PI/2,Xt.scale.y=.65,Xt.position.y=.75,H.add(Xt);const Jt=yt(.06,.52,.06,x,-.3,1.2,.62);Jt.rotation.x=.35,H.add(Jt),H.traverse(me=>{me.isMesh&&(me.userData.world=!0)}),n.add(H),l.push(H);const re=Math.abs(Math.cos(j))>.5?2.5:1.6,Ie=Math.abs(Math.cos(j))>.5?1.6:2.5;it(D-re/2,D+re/2,0,1.35,q-Ie/2,q+Ie/2,{type:"prop"}),a.push({type:"prop",x:D,z:q,w:re,d:Ie,color:"#847338"})};ot(-13.8,27.3,Math.PI/2),ot(13.8,-27.3,Math.PI/2);const At=(D,q,j)=>{const H=new Vt;H.position.set(D,0,q),H.rotation.y=j;const lt=new Ft({color:"#1b1d1b",roughness:.86,metalness:.08}),gt=new Ft({color:"#b3933e",metalness:.35,roughness:.7}),Ot=yt(1.25,.42,1.9,gt,0,.55,0,{rounded:!0});H.add(Ot);const It=yt(1.2,.72,.85,gt,0,1,.55,{rounded:!0});H.add(It);const Xt=yt(.55,.18,.52,B,0,1.38,.48);H.add(Xt);const Jt=yt(.55,.55,.14,B,0,1.7,.75);H.add(Jt);for(const me of[-1,1]){for(const he of[-1,1]){const Me=new ut(new ee(.32,.32,.22,14),lt);Me.rotation.z=Math.PI/2,Me.position.set(me*.67,.36,he*.6),Me.castShadow=!0,H.add(Me)}const de=yt(.1,2.1,.12,P,me*.36,1.3,-.92);H.add(de)}const re=yt(.86,.12,.14,P,0,2.3,-.92);H.add(re);for(const me of[-1,1]){const de=yt(.13,.07,1.25,Y,me*.25,.15,-1.48);H.add(de);const he=yt(.13,.6,.07,Y,me*.25,.45,-2.05);H.add(he)}const Ie=is([new T(-.35,1.8,.9),new T(-.35,2.1,.1),new T(.35,2.1,.1),new T(.35,1.8,.9)],.04,B,10);H.add(Ie),H.traverse(me=>{me.isMesh&&(me.userData.world=!0)}),n.add(H),l.push(H),it(D-.95,D+.95,0,2.4,q-1.7,q+1.7,{type:"prop"}),a.push({type:"prop",x:D,z:q,w:1.9,d:3.2,color:"#a58a3f"})};At(12.5,20,.1),At(-12.5,-20,Math.PI+.1);const Pt=new Vt;Pt.position.set(0,0,35.5);const $t=yt(21,4.7,7.2,_,0,2.35,0);Pt.add($t);const Lt=yt(13,2.6,5.2,_,0,6,.3);Pt.add(Lt);for(const D of[-1,1]){const q=yt(3.6,2,4.6,_,D*8.2,4.8,.5);Pt.add(q)}for(let D=0;D<9;D++){const q=yt(1.35,.72,.08,tt,-7.2+D*1.8,3.35,-3.64);q.castShadow=!1,Pt.add(q)}for(let D=0;D<6;D++){const q=yt(1.4,.9,.08,tt,-4.8+D*1.9,6.25,-2.32);q.castShadow=!1,Pt.add(q)}const le=yt(1,2.15,.12,A,0,1.18,-3.65);Pt.add(le);const Qt=yt(1.22,2.35,.09,P,0,1.23,-3.62);Pt.add(Qt);const ye=yt(21.02,.24,7.22,new Ft({color:"#8d3d2b",roughness:.8}),0,1.85,0);Pt.add(ye);const I=new ut(new ee(.18,.28,8.2,10),K);I.position.set(0,10.2,.8),I.castShadow=!0,Pt.add(I);const Ct=yt(5.6,.14,.14,K,0,12.6,.8);Pt.add(Ct);const W=new Vt;W.position.set(0,13.5,.8);const nt=yt(3.7,.18,.65,B,0,0,0);W.add(nt);const _t=new ut(new ee(.28,.32,.35,10),P);_t.rotation.z=Math.PI/2,W.add(_t),Pt.add(W),o.push({type:"radar",object:W,speed:.42});const wt=new ut(new ee(.8,1,3.2,12),K);wt.position.set(6.5,8.5,.2),wt.castShadow=!0,Pt.add(wt);const ce=new ut(new ee(.84,.84,.45,12),B);ce.position.set(6.5,10.2,.2),Pt.add(ce);const Le=new ut(new ee(.88,.9,.55,12),new Ft({color:"#a64a31",roughness:.8}));Le.position.set(6.5,8.8,.2),Pt.add(Le);for(const D of[-1,1]){const q=yt(.06,.9,7.2,Y,D*10.45,5,0);q.castShadow=!1,Pt.add(q)}for(const D of[-7.4,7.4]){const q=yt(.28,.38,.3,P,D,4.3,-3.7);Pt.add(q);const j=yt(.18,.22,.04,X,D,4.28,-3.86,{cast:!1});Pt.add(j);const H=new Vs("#ffbd7a",9,15,2);H.position.set(D,4.25,-4.2),Pt.add(H)}it(-11,11,0,9,31.7,39.4,{type:"structure"}),n.add(Pt),a.push({type:"structure",x:0,z:35.5,w:21,d:7.2,color:"#c9c5b8"});const Ze=new Vt;for(let D=0;D<12;D++){const q=new ut(new Be(.13,.035,4,8),x);q.rotation.y=D*Math.PI/2,q.position.set(12,.14,32.2+D*.15),q.rotation.x=Math.PI/2,Ze.add(q)}n.add(Ze);const te=new Vt;te.position.set(0,0,-35.2);const $e=yt(25,1.15,9.8,A,0,.58,0);te.add($e);const wn=yt(24,.18,8.8,new Ft({map:Is("#69716e",44,1.3).map,roughness:.76,metalness:.48}),0,1.25,0);te.add(wn);const tr=yt(25.2,.2,10,S,0,1.1,0);te.add(tr);for(let D=0;D<7;D++){const q=yt(23,.08,.2,P,0,1.37,-3.8+D*1.25);te.add(q)}const Di=new ut(new ee(.42,.55,12,12),S);Di.position.set(-8.5,6,4.6),Di.castShadow=!0,te.add(Di);const kn=is([new T(-8.5,10.4,4.6),new T(-1.2,7.2,1.6)],.22,S,3);te.add(kn);const Ii=new Vt;Ii.position.set(-1.2,7.2,1.6),te.add(Ii);const er=is([new T(-1.2,7.2,1.6),new T(-1.2,4.5,1.6),new T(-.7,4.1,1.6),new T(-.7,4.7,1.6)],.055,P,18);te.add(er);const nr=yt(.5,.65,.4,x,-1.2,4.4,1.6);te.add(nr);const di=new Vs("#ffc47e",7,13,2);di.position.set(-4,3.8,-4),te.add(di),it(-12.5,12.5,0,3,-40.2,-30.3,{type:"structure"}),n.add(te),a.push({type:"structure",x:0,z:-35.2,w:25,d:10,color:"#8e8e7e"});const fi=new Vt,Ui=yt(3.2,1,1.5,P,0,.5,0);fi.add(Ui);const Ni=new ut(new ee(.55,.55,2.5,14),x);Ni.rotation.z=Math.PI/2,Ni.position.y=.9,fi.add(Ni),fi.position.set(-10.5,0,33),n.add(fi);const We=new Vt;We.position.set(0,0,0);for(const D of[-1,1]){const q=yt(.65,9.2,.8,N,D*18.5,4.6,0);We.add(q);const j=yt(1.7,.35,1.7,P,D*18.5,.18,0);We.add(j);const H=yt(.28,4.4,.28,S,D*18.5,6.4,0);H.rotation.z=D*.43,We.add(H)}const da=yt(38.2,.9,1.4,N,0,9,0);We.add(da);const fa=yt(38.2,.25,.7,P,0,9.6,0);We.add(fa);for(let D=0;D<9;D++){const q=yt(.2,2.1,.2,N,-16+D*4,8.1,.4);q.rotation.z=(D%2?-1:1)*.55,We.add(q)}const pa=yt(1.7,.55,1.8,P,3.5,8.7,0),b=ns("SWL 40 T",{width:1024,height:256,font:'700 130px "Barlow Condensed", sans-serif',color:"rgba(26,28,24,0.66)",align:"center",sub:"T-09 // PORTAL CRANE",subFont:'500 34px "Barlow Condensed", sans-serif',subColor:"rgba(26,28,24,0.45)"}),U=new ut(new on(5.4,1.35),new Mn({map:b,transparent:!0,depthWrite:!1}));U.position.set(7,9,.72),We.add(U);const k=U.clone();k.position.set(7,9,-.72),k.rotation.y=Math.PI,We.add(k),We.add(pa);const V=new ut(new ee(.022,.022,4.1,5),B);V.position.set(3.5,6.5,0),We.add(V);const F=yt(4.8,.42,1.6,S,3.5,4.3,0);We.add(F);const ct=new ut(new Be(.35,.1,8,16,Math.PI*1.4),P);ct.position.set(3.5,4,0),ct.rotation.z=Math.PI*.2,We.add(ct),We.traverse(D=>{D.isMesh&&(D.userData.world=!0)}),n.add(We);const vt=new Vt;vt.position.set(16.4,0,-27.5);const Dt=new ut(new ee(.12,.2,17,10),K);Dt.position.y=8.5,Dt.castShadow=!0,vt.add(Dt);const Nt=yt(5.4,.13,.13,K,0,13.2,0);vt.add(Nt);const Yt=yt(3.4,.1,.1,K,0,15.4,0);vt.add(Yt);const Kt=new ut(new gn(.14,8,8),new Ft({color:"#ff7f59",emissive:"#ff4b2c",emissiveIntensity:3}));Kt.position.set(0,17.1,0),vt.add(Kt),n.add(vt);const zt=iv(),ge=new on(2.4,1.42,18,8),be=new ke({uniforms:{uTime:s,uMap:{value:zt}},side:_n,vertexShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.z += sin(p.x * 3.2 + uTime * 3.4) * 0.10 * (p.x + 1.2) * 0.38;
        p.y += sin(p.x * 2.1 + uTime * 2.2) * 0.035 * (p.x + 1.2);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(uMap, vUv);
        gl_FragColor = c;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),Ae=new ut(ge,be);Ae.position.set(-14.9,13.7,-27.5),Ae.rotation.y=Math.PI/2,n.add(Ae);const De=new Vt,ue=new ut(new gn(1,18,12),G);ue.scale.set(1.1,.62,3.1),ue.position.y=0,ue.castShadow=!0,De.add(ue);const Bt=new ut(new Ee(1.7,.26,4.6),ae);Bt.position.y=.37,De.add(Bt);const Fe=new ut(new Ee(1.35,.65,1.9),K);Fe.position.set(0,.75,-.2),De.add(Fe);for(const D of[-1,1]){const q=yt(.9,.22,.03,tt,0,.82,D*.62,{cast:!1});q.position.z+=-.2,De.add(q)}const pe=new ut(new Ee(2.1,.07,4.1),K);pe.position.y=.16,De.add(pe),De.position.set(19.2,3,8.5),De.rotation.z=.03,n.add(De);const Je=new Vt;for(const D of[5.4,11.6]){const q=new ut(new ee(.13,.16,4.2,8),K);q.position.set(17.5,2.1,D),q.castShadow=!0,Je.add(q);const j=is([new T(17.5,4.2,D),new T(18,4.9,D),new T(19.2,4.6,D)],.1,K,10);Je.add(j);const H=new ut(new ee(.018,.018,1.3,4),Mt);H.position.set(19.2,4,D),Je.add(H)}n.add(Je);const In=new Vt;for(const[D,q,j]of[[-17.02,23,Math.PI/2],[17.02,-22,-Math.PI/2],[-17.02,-6,Math.PI/2],[17.02,5,-Math.PI/2]]){const H=new ut(new Be(.38,.11,6,20),G);H.position.set(D,1.05,q),H.rotation.y=j,H.rotation.x=Math.PI/2,In.add(H);for(let lt=0;lt<4;lt++){const gt=new ut(new Be(.39,.115,5,5,Math.PI/4),K);gt.position.copy(H.position),gt.rotation.copy(H.rotation),gt.rotateZ(lt*Math.PI/2+.38),In.add(gt)}}n.add(In);for(const[D,q,j]of[[-15.6,12,1],[15.6,-12,-1],[-15.6,-13,1],[15.6,13,-1]]){const H=new ut(new ee(.07,.1,4,8),P);H.position.set(D,2,q),H.castShadow=!0,n.add(H);const lt=new Vt;lt.position.set(D-j*.28,3.85,q);const gt=new ut(new gn(.16,8,8),X);lt.add(gt);for(let Xt=0;Xt<4;Xt++){const Jt=new ut(new ee(.012,.012,.48,4),P);Jt.rotation.z=Math.PI/2,Jt.rotation.y=Xt*Math.PI/4,Jt.position.y=-.18,lt.add(Jt)}const Ot=new ut(new sa(.3,.22,10),P);Ot.position.y=.25,lt.add(Ot),n.add(lt);const It=new Vs("#ffc98d",6,11,2);It.position.set(D-j*.3,3.7,q),n.add(It)}for(let D=-28;D<=28;D+=7)for(const q of[-1,1]){const j=new ut(new ee(.16,.2,.55,10),P);j.position.set(q*15.6,.28,D),j.castShadow=!0,n.add(j);const H=new ut(new ee(.25,.25,.12,10),Y);H.position.set(q*15.6,.58,D),n.add(H)}for(const D of[.55,.82]){const q=new ut(new ee(.09,.09,43,8),new Ft({color:D>.7?"#876d42":"#64716e",metalness:.6,roughness:.56}));q.rotation.x=Math.PI/2,q.position.set(-16.75,D,-5),q.castShadow=!0,n.add(q);for(let j=-24;j<15;j+=6){const H=yt(.16,.22,.1,P,-16.84,D-.1,j);n.add(H)}}for(const[D,q,j]of[[-16.2,.5,Math.PI/2],[16.2,-.5,-Math.PI/2]]){const H=new Vt;H.position.set(D,1,q),H.rotation.y=j;const lt=new ut(new ee(.48,.48,.34,16),new Ft({color:"#913d2b",metalness:.4,roughness:.62}));lt.rotation.z=Math.PI/2,H.add(lt);const gt=new ut(new Be(.38,.055,5,18),P);gt.rotation.y=Math.PI/2,H.add(gt),n.add(H)}const je=to("DANGER","HIGH VOLTAGE",{danger:!0});ht(je,.72,.46,2.98,1.45,12.42,0,0,.9),ht(je,.72,.46,-13.3,1.6,1.2,Math.PI,0,.9);const Fi=to("NO SMOKING","CARGO DECK",{danger:!1});ht(Fi,.8,.44,16.91,1.12,24,-Math.PI/2,0,.9),ht(Fi,.8,.44,-16.91,1.12,-18,Math.PI/2,0,.9);const Te=new Vt;Te.position.set(6.8,0,29.2);const Un=yt(.9,.5,.7,x,0,.25,0);Te.add(Un);const pi=new ut(new Be(.24,.04,6,16),S);pi.position.set(0,.65,.2),pi.rotation.x=Math.PI/2,Te.add(pi);const sn=new ut(new ee(.06,.06,.9,6),A);sn.position.set(.2,.65,0),Te.add(sn),n.add(Te),it(6.35,7.25,0,.8,28.85,29.55,{type:"prop"});const Oi=[],ma=new Mh({color:"#e3e0d5",transparent:!0,opacity:.65});for(let D=0;D<8;D++){const q=[new T(-.55,.12,0),new T(0,0,.16),new T(.55,.12,0)],j=new ze().setFromPoints(q),H=new og(j,ma);H.userData={angle:D*.78+.3,radius:18+D*4.4,height:12+D%4*4.2,speed:.035+D%3*.012,phase:D*1.7},Oi.push(H),i.add(H)}const Ms=new Vt,ga=new Ft({color:"#586b6d",roughness:.9,metalness:.15,transparent:!0,opacity:.72});for(const[D,q,j,H]of[[-240,-180,1.4,.4],[290,-70,.9,-.9],[110,310,1.1,2.6]]){const lt=new Vt,gt=yt(18*j,5*j,5*j,ga,0,0,0,{cast:!1});lt.add(gt);const Ot=yt(3*j,8*j,3.2*j,ga,-3*j,5*j,0,{cast:!1});lt.add(Ot);for(let It=0;It<4;It++){const Xt=yt(4*j,2.2*j,2.4*j,ga,-6*j+It*4.2*j,3.4*j,0,{cast:!1});lt.add(Xt)}lt.position.set(D,-1.5,q),lt.rotation.y=H,Ms.add(lt)}i.add(Ms);const vl=[],Gh=(()=>{const D=document.createElement("canvas");D.width=D.height=64;const q=D.getContext("2d"),j=q.createRadialGradient(32,32,0,32,32,32);j.addColorStop(0,"rgba(225,225,217,0.32)"),j.addColorStop(1,"rgba(205,205,196,0)"),q.fillStyle=j,q.fillRect(0,0,64,64);const H=new Xs(D);return H.colorSpace=nn,H})();for(const D of Et)for(let q=0;q<4;q++){const j=new oi({map:Gh,transparent:!0,opacity:0,depthWrite:!1}),H=new li(j);H.userData={seed:Math.random()*10,x:D.x,y:D.y,z:D.z},H.scale.setScalar(.5),i.add(H),vl.push(H)}const Wh=(()=>{const D=document.createElement("canvas");D.width=D.height=256;const q=D.getContext("2d"),j=q.createRadialGradient(128,128,0,128,128,128);j.addColorStop(0,"rgba(255,241,204,0.85)"),j.addColorStop(.18,"rgba(255,213,152,0.3)"),j.addColorStop(.55,"rgba(255,190,130,0.08)"),j.addColorStop(1,"rgba(255,176,110,0)"),q.fillStyle=j,q.fillRect(0,0,256,256);const H=new Xs(D);return H.colorSpace=nn,H})(),ir=new li(new oi({map:Wh,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:Fn,toneMapped:!1}));ir.scale.setScalar(80),ir.position.copy(ls).multiplyScalar(430),i.add(ir);const Xh={bounds:lv,colliders:r,features:a,width:33,depth:62,blueSpawn:{x:0,z:27.2},redSpawn:{x:0,z:-27.2}},qh=new Qs,xl=new T,_l=new T;function yl(D,q,j=220){qh.set(D,q);let H=j,lt=null,gt=null;for(let Ot=0;Ot<r.length;Ot++){const It=r[Ot];let Xt=0,Jt=H,re=-1,Ie=1;const me=D,de=q;if(Math.abs(de.x)<1e-8){if(me.x<It.minX||me.x>It.maxX)continue}else{let he=(It.minX-me.x)/de.x,Me=(It.maxX-me.x)/de.x,dn=-1;if(he>Me){const mi=he;he=Me,Me=mi,dn=1}if(he>Xt&&(Xt=he,re=0,Ie=dn),Jt=Math.min(Jt,Me),Xt>Jt)continue}if(Math.abs(de.y)<1e-8){if(me.y<It.minY||me.y>It.maxY)continue}else{let he=(It.minY-me.y)/de.y,Me=(It.maxY-me.y)/de.y,dn=-1;if(he>Me){const mi=he;he=Me,Me=mi,dn=1}if(he>Xt&&(Xt=he,re=1,Ie=dn),Jt=Math.min(Jt,Me),Xt>Jt)continue}if(Math.abs(de.z)<1e-8){if(me.z<It.minZ||me.z>It.maxZ)continue}else{let he=(It.minZ-me.z)/de.z,Me=(It.maxZ-me.z)/de.z,dn=-1;if(he>Me){const mi=he;he=Me,Me=mi,dn=1}if(he>Xt&&(Xt=he,re=2,Ie=dn),Jt=Math.min(Jt,Me),Xt>Jt)continue}Xt>.02&&Xt<H&&(H=Xt,gt=It,re===0?lt=new T(Ie,0,0):re===1?lt=new T(0,Ie,0):re===2?lt=new T(0,0,Ie):lt=new T(0,1,0))}if(q.y<-1e-5){const Ot=(.012-D.y)/q.y;Ot>.02&&Ot<H&&(H=Ot,lt=new T(0,1,0),gt={type:"deck",material:"metal"})}if(q.y<-1e-5){const Ot=(-.82-D.y)/q.y;Ot>.02&&Ot<H&&(H=Ot,lt=new T(0,1,0),gt={type:"water",material:"water"})}return gt?(xl.copy(D).addScaledVector(q,H),_l.copy(lt),{distance:H,point:xl,normal:_l,collider:gt}):null}function Yh(D,q){const j=new T().subVectors(q,D),H=j.length();if(H<.001)return!0;j.divideScalar(H);const lt=yl(D,j,H+.1);return!lt||lt.distance>=H-.12}function Kh(D,q){s.value=q;for(const H of o)H.type==="radar"&&(H.object.rotation.y+=H.speed*D);for(const H of Oi){const lt=H.userData;lt.angle+=D*lt.speed;const gt=Math.cos(lt.angle)*lt.radius,Ot=Math.sin(lt.angle)*lt.radius-5;H.position.set(gt,lt.height+Math.sin(q*.4+lt.phase)*1.2,Ot),H.rotation.y=-lt.angle+Math.PI/2;const It=Math.sin(q*6+lt.phase)*.12;H.scale.set(1,1+It,1)}for(const H of vl){const lt=H.userData,gt=(q*.14+lt.seed*.16)%1;H.position.set(lt.x+Math.sin(q*.5+lt.seed)*.18+gt*.4,lt.y+gt*4.2,lt.z+Math.cos(q*.3+lt.seed)*.18+gt*.7),H.scale.setScalar(.35+gt*2.2),H.material.opacity=Math.sin(gt*Math.PI)*.1}const j=n.children.find(H=>H===De);j&&(j.rotation.z=.03+Math.sin(q*.45)*.012,j.position.y=3+Math.sin(q*.55)*.035),ir.position.copy(ls).multiplyScalar(430)}function Zh(D){h.position.copy(D.position),d.position.x=Math.round(D.position.x/40)*40,d.position.z=Math.round(D.position.z/40)*40}return{root:n,colliders:r,features:a,mapData:Xh,raycast:yl,pointVisible:Yh,update:Kh,updateSkyCamera:Zh,sunDir:ls.clone(),sun:u.sun,env:c,targets:l,ocean:d,sky:h}}const Zs={m4a1:{id:"m4a1",name:"M4A1",cn:"M4A1 卡宾枪",klass:"突击步枪",desc:"稳定的全自动卡宾枪，射速与控枪均衡。",caliber:"5.56 × 45",damage:32,headMul:2.35,limbMul:.78,rpm:680,mag:30,reserve:180,reload:2.15,mode:"auto",hipSpread:.013,adsSpread:.0018,moveSpread:.018,recoil:{pitch:.0082,yaw:.0034,kick:.032,recover:8.5},adsFov:51,ads:{pos:[0,-.074,-.47],rot:[0,0,0]},audio:"rifle",tracer:"#ffd6a0",selector:"AUTO"},ak47:{id:"ak47",name:"AK-47",cn:"AK-47 突击步枪",klass:"突击步枪",desc:"中距离威力凶猛，垂直后坐力显著。",caliber:"7.62 × 39",damage:39,headMul:2.5,limbMul:.82,rpm:600,mag:30,reserve:150,reload:2.55,mode:"auto",hipSpread:.017,adsSpread:.0026,moveSpread:.026,recoil:{pitch:.0135,yaw:.0052,kick:.044,recover:7.2},adsFov:51,ads:{pos:[0,-.079,-.48],rot:[0,0,0]},audio:"ak",tracer:"#ffcf91",selector:"AUTO"},awm:{id:"awm",name:"AWM",cn:"AWM 狙击步枪",klass:"狙击步枪",desc:"一击致命的栓动狙击步枪。占领高处，控制长走廊。",caliber:".300 WM",damage:128,headMul:2.2,limbMul:.9,rpm:44,mag:5,reserve:35,reload:3.25,mode:"bolt",hipSpread:.028,adsSpread:16e-5,moveSpread:.04,recoil:{pitch:.035,yaw:.008,kick:.08,recover:4.5},adsFov:16,scope:!0,ads:{pos:[0,-.068,-.53],rot:[0,0,0]},audio:"sniper",tracer:"#ffe9bd",selector:"BOLT"},deagle:{id:"deagle",name:"Desert Eagle",cn:"沙漠之鹰",klass:"手枪",desc:"大口径副武器。两发命中即可放倒无甲目标。",caliber:".50 AE",damage:56,headMul:2.1,limbMul:.8,rpm:250,mag:7,reserve:56,reload:1.9,mode:"semi",hipSpread:.014,adsSpread:.003,moveSpread:.02,recoil:{pitch:.021,yaw:.006,kick:.055,recover:9},adsFov:55,ads:{pos:[0,-.048,-.48],rot:[0,0,0]},audio:"pistol",tracer:"#ffdca6",selector:"SEMI"}};function Vh(){const t=Bh(3).map.clone();return t.needsUpdate=!0,t.repeat.set(3,1),t.wrapS=t.wrapT=ds,{metal:new Ft({color:"#383e3d",metalness:.76,roughness:.37,envMapIntensity:1.3}),metalDark:new Ft({color:"#222727",metalness:.68,roughness:.45,envMapIntensity:1.1}),metalLight:new Ft({color:"#5e6665",metalness:.9,roughness:.28,envMapIntensity:1.25}),polymer:new Ft({color:"#414744",metalness:.12,roughness:.62,envMapIntensity:.8}),polymerTan:new Ft({color:"#9c8865",metalness:.08,roughness:.7,envMapIntensity:.7}),grip:new Ft({color:"#202220",metalness:.1,roughness:.84}),glove:new Ft({color:"#181b16",metalness:.04,roughness:.94}),gloveDark:new Ft({color:"#0e100d",metalness:.05,roughness:.93}),sleeve:new Ft({color:"#41473c",metalness:.02,roughness:.96}),sleeveDark:new Ft({color:"#2c312b",metalness:.03,roughness:.94}),wood:new Ft({map:t,roughness:.68,metalness:.02,envMapIntensity:.35}),olive:new Ft({color:"#566047",metalness:.18,roughness:.7}),scopeGlass:new aa({color:"#73c4bd",emissive:"#1f7771",emissiveIntensity:.65,metalness:.3,roughness:.08,transparent:!0,opacity:.72}),redDot:new Ft({color:"#ff4b2e",emissive:"#ff3b1f",emissiveIntensity:2.6,metalness:.1,roughness:.2}),brass:new Ft({color:"#b28b43",metalness:.9,roughness:.28}),flash:new oi({map:kh(),color:"#fff2ca",transparent:!0,blending:Fn,depthWrite:!1,depthTest:!1,opacity:.95,toneMapped:!1})}}let qe=null;function at(i,t,e,n,s,r){const a=new ut(i,t);return a.position.set(e,n,s),r&&a.rotation.set(r.x||0,r.y||0,r.z||0),a.castShadow=!1,a.receiveShadow=!1,a}function Zt(i,t,e,n=.015){return new gl(i,t,e,2,Math.min(i,t,e)*Math.min(.44,n*.5))}function ln(i,t,e,n=12){const s=new ee(i,t,e,n);return s.rotateX(Math.PI/2),s}function ha(i,t={}){const e=qe,{right:n=[0,-.1,.03],left:s=[0,-.02,-.28]}=t,r=new Vt;r.position.set(...n),r.scale.setScalar(.82),r.add(at(Zt(.055,.085,.085,.35),e.glove,0,0,0)),r.add(at(Zt(.06,.026,.035,.3),e.gloveDark,.002,.036,-.025));for(let o=0;o<3;o++)r.add(at(Zt(.017,.055,.018,.3),e.glove,-.025+o*.017,.005,-.045));i.add(r);const a=new Vt;a.position.set(...s),a.scale.setScalar(.82),a.add(at(Zt(.075,.05,.105,.3),e.glove,0,0,0));for(let o=0;o<4;o++)a.add(at(Zt(.014,.026,.062,.3),e.glove,-.027+o*.018,.032,-.04));a.add(at(Zt(.05,.025,.035,.3),e.gloveDark,0,.035,.02)),i.add(a)}function pv(){const i=qe,t=new Vt,e=at(Zt(.058,.1,.3,.2),i.metal,0,0,0);t.add(e),t.add(at(Zt(.064,.045,.31,.2),i.metalDark,0,.064,-.015));for(let h=0;h<12;h++)t.add(at(new Ee(.052,.009,.012),i.metalDark,0,.092,-.15+h*.024));const n=at(Zt(.076,.076,.27,.2),i.polymerTan,0,.006,-.29);t.add(n);for(let h=0;h<5;h++)t.add(at(Zt(.083,.016,.022,.25),i.metalDark,0,.047,-.19-h*.05)),t.add(at(Zt(.083,.014,.022,.25),i.metalDark,0,-.031,-.19-h*.05));t.add(at(ln(.013,.013,.34),i.metalDark,0,.018,-.53)),t.add(at(ln(.024,.026,.075),i.metal,0,.018,-.71));for(let h=0;h<3;h++)t.add(at(new Ee(.033,.008,.014),i.metalDark,0,.036,-.735+h*.016));t.add(at(Zt(.04,.06,.055,.2),i.metal,0,.05,-.49)),t.add(at(new sa(.013,.035,6),i.metalDark,0,.088,-.49)),t.add(at(ln(.025,.025,.19,8),i.metalDark,0,.015,.22));const s=at(Zt(.072,.112,.18,.28),i.polymer,0,-.005,.33);t.add(s);const r=at(Zt(.085,.13,.035,.25),i.polymer,0,-.01,.43);t.add(r),t.userData.stock=[s,r],t.add(at(Zt(.02,.035,.05,.3),i.metal,.037,.04,.02));const a=at(Zt(.04,.115,.057,.3),i.grip,0,-.105,.065);a.rotation.x=.25,t.add(a),t.add(at(new Be(.033,.006,4,10,Math.PI),i.metalDark,0,-.055,.018,{x:Math.PI/2}));const o=new Vt;o.position.set(0,-.075,-.035),o.add(at(Zt(.045,.14,.07,.2),i.metalDark,0,-.065,-.028)),o.add(at(Zt(.047,.02,.075,.2),i.polymer,0,-.135,-.033)),t.add(o);const l=new Vt;l.position.set(0,.118,-.045),l.add(at(Zt(.054,.045,.1,.2),i.metalDark,0,0,0)),l.add(at(new Ee(.054,.05,.013),i.metal,0,.036,-.043)),l.add(at(new Ee(.054,.05,.013),i.metal,0,.036,.043)),l.add(at(new on(.034,.032),new aa({color:"#26100c",metalness:.3,roughness:.08,transparent:!0,opacity:.34}),0,.031,.053)),l.add(at(new gs(.0028,10),i.redDot,0,.031,.055));for(const h of[-1,1])l.add(at(new Ee(.007,.065,.035),i.metalDark,h*.024,.012,0));t.add(l),t.add(at(Zt(.055,.016,.035,.3),i.metal,.002,.075,.14)),t.add(at(new Be(.015,.004,4,8),i.metal,0,-.012,-.4,{y:Math.PI/2})),ha(t,{right:[-.012,-.098,.058],left:[.008,-.035,-.265]});const c=new Pe;return c.position.set(0,.018,-.765),t.add(c),t.userData.muzzle=c,ua(t,c,.16),Object.assign(t.userData,{magazine:o,bolt:e,optic:l}),t}function mv(){const i=qe,t=new Vt;t.add(at(Zt(.06,.1,.32,.15),i.metal,0,0,-.01)),t.add(at(Zt(.064,.038,.32,.15),i.metalDark,0,.058,0)),t.add(at(ln(.016,.016,.33),i.metalDark,0,.02,-.45)),t.add(at(Zt(.083,.088,.24,.2),i.wood,0,-.002,-.285)),t.add(at(Zt(.07,.08,.09,.2),i.wood,0,.026,-.42)),t.add(at(ln(.012,.012,.28),i.metal,0,.065,-.31)),t.add(at(Zt(.035,.065,.035,.2),i.metalDark,0,.085,-.45)),t.add(at(ln(.026,.028,.06),i.metalDark,0,.02,-.64)),t.add(at(new Ee(.02,.085,.025),i.metalDark,0,.055,-.565)),t.add(at(new Be(.018,.004,4,8),i.metalDark,0,.103,-.565));const e=at(Zt(.075,.112,.24,.16),i.wood,0,-.018,.28);t.add(e);const n=at(Zt(.088,.14,.03,.15),i.metalDark,0,-.018,.41);t.add(n),t.userData.stock=[e,n],t.add(at(ln(.026,.026,.18),i.metalDark,0,.016,.18));const s=new Vt;s.position.set(0,-.065,-.045);for(let c=0;c<3;c++){const h=at(Zt(.048,.07,.07,.2),i.metalDark,0,-.03-c*.058,-.025-c*.026);h.rotation.x=.16*c,s.add(h)}s.add(at(Zt(.049,.022,.064,.2),i.metal,0,-.175,-.11)),t.add(s);const r=at(Zt(.042,.115,.06,.3),i.wood,0,-.1,.065);r.rotation.x=.22,t.add(r),t.add(at(new Ee(.008,.018,.11),i.metalLight,.036,.045,.01,{x:.2})),t.add(at(new Ee(.05,.018,.06),i.metalDark,0,.085,.07)),t.add(at(new Ee(.044,.028,.012),i.metalDark,0,.1,.095)),t.add(at(new Ee(.05,.014,.12),i.metalDark,0,.106,-.02));const a=new Vt;a.position.set(0,.15,-.02);const o=at(ln(.032,.032,.12,16),i.metalDark,0,0,0);a.add(o),a.add(at(new ee(.038,.032,.03,16).rotateX(Math.PI/2),i.metal,0,0,-.075)),a.add(at(new gs(.021,16),new aa({color:"#20150e",metalness:.2,roughness:.08,transparent:!0,opacity:.5}),0,0,-.092)),a.add(at(new gs(.003,10),i.redDot,0,0,-.094)),a.add(at(new Ee(.045,.045,.04),i.metalDark,0,-.045,0)),t.add(a),ha(t,{right:[-.005,-.09,.062],left:[.012,-.015,-.26]});const l=new Pe;return l.position.set(0,.02,-.68),t.add(l),t.userData.muzzle=l,ua(t,l,.18),Object.assign(t.userData,{magazine:s,bolt:null,optic:a}),t}function gv(){const i=qe,t=new Vt;t.add(at(Zt(.075,.11,.42,.15),i.olive,0,0,-.03)),t.add(at(Zt(.065,.055,.28,.15),i.metalDark,0,.07,.005)),t.add(at(ln(.018,.016,.59,14),i.metal,0,.02,-.5)),t.add(at(ln(.025,.025,.08,14),i.metalDark,0,.02,-.78));for(let m=0;m<6;m++)t.add(at(new ee(.031,.031,.003,14).rotateX(Math.PI/2),i.metalDark,0,.02,-.745-m*.012));const e=at(Zt(.082,.11,.28,.2),i.olive,0,-.01,.29);t.add(e);const n=at(Zt(.078,.05,.18,.3),i.olive,0,.07,.3);t.add(n);const s=at(Zt(.09,.15,.035,.2),i.polymer,0,-.025,.44);t.add(s),t.userData.stock=[e,n,s];const r=at(Zt(.064,.035,.16,.3),i.polymerTan,0,.115,.23);t.add(r),t.userData.stock=[...t.userData.stock||[],r];const a=at(Zt(.05,.125,.065,.3),i.polymer,0,-.105,.09);a.rotation.x=.22,t.add(a);const o=new Vt;o.position.set(0,.165,-.04);const l=new ut(new ee(.029,.029,.31,16),i.metalDark);l.rotation.x=Math.PI/2,o.add(l);const c=new ut(new ee(.044,.034,.095,18),i.metal);c.rotation.x=Math.PI/2,c.position.z=-.19,o.add(c);const h=new ut(new ee(.034,.03,.075,18),i.metal);h.rotation.x=Math.PI/2,h.position.z=.19,o.add(h);const d=new ut(new gs(.038,18),i.scopeGlass);d.position.z=-.238,o.add(d);for(const m of[-.1,.1]){const w=new ut(new Be(.038,.007,5,16),i.metal);w.position.z=m,o.add(w)}o.add(at(Zt(.055,.04,.05,.2),i.metalDark,0,-.043,0)),o.add(at(new ee(.012,.012,.04,8),i.metal,.04,0,0).rotateZ(Math.PI/2)),t.add(o);const u=new Vt;u.position.set(.048,.04,.11);const f=new ut(new ee(.007,.007,.09,6),i.metalLight);f.rotation.z=Math.PI/2-.2,u.add(f);const g=new ut(new gn(.018,8,8),i.metalDark);g.position.set(.055,.01,0),u.add(g),t.add(u);const v=new Vt;v.position.set(0,-.09,-.03),v.add(at(Zt(.055,.09,.09,.2),i.metalDark,0,-.03,0)),t.add(v),t.add(at(ln(.012,.012,.36),i.metalDark,.035,-.02,-.55)),t.add(at(ln(.012,.012,.36),i.metalDark,-.035,-.02,-.55)),t.add(at(new Be(.04,.006,4,10),i.polymer,0,-.08,.17,{y:Math.PI/2})),ha(t,{right:[-.008,-.095,.08],left:[.012,-.035,-.22]});const p=new Pe;return p.position.set(0,.02,-.83),t.add(p),t.userData.muzzle=p,ua(t,p,.22),Object.assign(t.userData,{magazine:v,bolt:u,scope:o}),t}function vv(){const i=qe,t=new Vt;t.add(at(Zt(.055,.085,.25,.2),i.metalLight,0,.015,-.03)),t.add(at(Zt(.06,.03,.25,.2),i.metal,0,.065,-.03)),t.add(at(ln(.023,.021,.08),i.metalDark,0,.035,-.18)),t.add(at(ln(.018,.018,.04),i.metal,0,.035,-.23));for(let r=0;r<6;r++)t.add(at(new Ee(.058,.04,.006),i.metalDark,0,.04,.02+r*.012));const e=at(Zt(.055,.17,.075,.2),i.grip,0,-.1,.07);e.rotation.x=.19,t.add(e),t.add(at(Zt(.053,.04,.078,.2),i.metal,0,-.19,.09)),t.add(at(new Be(.037,.007,4,12,Math.PI),i.metalDark,0,-.045,.01,{x:Math.PI/2,z:Math.PI}));const n=new Vt;n.add(at(new Ee(.012,.018,.018),i.metalDark,0,.09,-.14)),n.add(at(new Ee(.035,.014,.016),i.metalDark,0,.087,.06)),n.add(at(new on(.01,.01),i.redDot,0,.1,.052)),t.add(n),t.add(at(Zt(.028,.04,.02,.3),i.metalDark,0,.075,.09)),t.add(at(Zt(.045,.022,.065,.2),i.metalDark,0,-.21,.085)),ha(t,{right:[-.01,-.12,.075],left:[-.025,-.15,.03]});const s=new Pe;return s.position.set(0,.035,-.265),t.add(s),t.userData.muzzle=s,ua(t,s,.14),Object.assign(t.userData,{magazine:null,bolt:null,optic:n}),t}function ua(i,t,e){const n=new li(qe.flash);n.position.copy(t.position),n.scale.set(e*2.3,e*2.3,1),n.visible=!1,n.userData.baseScale=e,i.add(n),i.userData.flash=n}function xv(i){qe||(qe=Vh());let t;return i==="ak47"?t=mv():i==="awm"?t=gv():i==="deagle"?t=vv():t=pv(),t.traverse(e=>{e.isMesh&&(e.frustumCulled=!1,e.renderOrder=1,(e.material===qe.sleeve||e.material===qe.sleeveDark)&&(e.visible=!1))}),t}function _v(){qe||(qe=Vh());const i=new Vt;i.add(at(Zt(.055,.09,.3,.2),qe.metalDark,0,0,0)),i.add(at(Zt(.04,.05,.2,.2),qe.polymer,0,.04,-.2)),i.add(at(ln(.01,.01,.28),qe.metalDark,0,.01,-.43)),i.add(at(Zt(.05,.11,.1,.2),qe.metalDark,0,-.085,-.02)),i.add(at(Zt(.055,.09,.15,.2),qe.polymer,0,0,.22));const t=new Pe;t.position.set(0,.01,-.58),i.add(t);const e=new li(qe.flash.clone());return e.material.opacity=.9,e.position.copy(t.position),e.scale.setScalar(.42),e.visible=!1,i.add(e),i.userData.flash=e,i.userData.muzzle=t,i}class yv{constructor(){this.scene=new _h,this.camera=new fn(55,window.innerWidth/Math.max(1,window.innerHeight),.01,10),this.scene.add(this.camera);const t=new Dh("#e2ecef","#4b4740",2.1);this.scene.add(t);const e=new Uh("#b7c4bc",.35);this.scene.add(e);const n=new ta("#ffe3bf",3.8);n.position.set(-1.4,2.8,1.2),this.scene.add(n);const s=new ta("#8cb6c7",2.9);s.position.set(2.2,.8,-1.6),this.scene.add(s);const r=new Vs("#ffd2a2",1.2,4);r.position.set(.5,.1,.6),this.scene.add(r),this.holder=new Vt,this.holder.scale.setScalar(.55),this.camera.add(this.holder),this.weapon=null,this.weaponId=null,this.ads=0,this.adsTarget=0,this.bob=0,this.recoil=0,this.recoilPitch=0,this.recoilYaw=0,this.sway=new st,this.swayVel=new st,this.flashTimer=0,this.reloadProgress=-1,this.reloadDuration=1,this.switchDrop=0,this.sprint=0,this.crouch=0,this.shotKick=0,this.weaponModels={},this.onShell=null,this.lastMuzzle=new T}setWeapon(t){if(this.weaponId!==t){this.weaponId=t,this.weapon&&this.holder.remove(this.weapon);for(const e of[...this.holder.children])this.holder.remove(e);this.weapon=xv(t),this.holder.add(this.weapon),this.weapon.userData.flash.visible=!1,this.flashTimer=0}}handleLook(t,e){this.swayVel.x+=t*35e-5,this.swayVel.y+=e*35e-5}triggerFire(){this.recoil=Math.min(1.2,this.recoil+.75),this.shotKick=1,this.flashTimer=.038+Math.random()*.018;const t=this.weapon?.userData?.flash;if(t){t.visible=!0,t.material.rotation=Math.random()*Math.PI*2;const e=t.userData.baseScale||.16,n=.7+Math.random()*.8;t.scale.set(e*2.3*n,e*2.3*n,1)}}startReload(t){this.reloadProgress=0,this.reloadDuration=t}cancelReload(){this.reloadProgress=-1}setAim(t){this.adsTarget=t?1:0}update(t,e){if(!this.weapon)return;const n=Zs[this.weaponId];this.ads+=(this.adsTarget-this.ads)*Math.min(1,t*15),this.ads=Ne.clamp(this.ads,0,1),this.ads<.01&&(this.ads=0),this.sprint+=((e.sprinting?1:0)-this.sprint)*Math.min(1,t*10),this.crouch+=((e.crouching?1:0)-this.crouch)*Math.min(1,t*10),this.recoil=Math.max(0,this.recoil-t*10.5),this.shotKick=Math.max(0,this.shotKick-t*15),this.swayVel.multiplyScalar(Math.pow(9e-4,t)),this.sway.x=Ne.clamp(this.sway.x*.82+this.swayVel.x*.18,-.09,.09),this.sway.y=Ne.clamp(this.sway.y*.82+this.swayVel.y*.18,-.07,.07);const s=e.moving?1:0;this.bob+=t*(e.speed*.85+1.2);const r=Ne.lerp(.008,.018,e.sprinting?1:0)*s*(1-this.ads*.82),a=Math.sin(this.bob)*r,o=Math.abs(Math.cos(this.bob))*r*.8,l=n.ads,c=.215,h=-.175,d=-.6;let u=Ne.lerp(c,l.pos[0],this.ads),f=Ne.lerp(h,l.pos[1],this.ads),g=Ne.lerp(d,l.pos[2],this.ads),v=Ne.lerp(.02,0,this.ads),p=Ne.lerp(.14,0,this.ads),m=Ne.lerp(.025,0,this.ads);u+=Math.sin(e.time*1.45)*.0026+this.sway.x*(1-this.ads*.65),f+=Math.sin(e.time*2.1)*.0016+this.sway.y*(1-this.ads*.65)-this.crouch*.008,u+=a,f+=o,v+=Math.sin(e.time*1.2)*.0035+this.sway.y*.25,p+=this.sway.x*.45,m+=this.sway.x*.18;const w=this.sprint*(1-this.ads);if(u+=w*.055,f-=w*.105,g+=w*.055,v-=w*.28,p+=w*.66,m-=w*.38,g+=this.recoil*.038,v+=this.recoil*.075,f+=this.recoil*.012,p+=Math.sin(this.recoil*Math.PI)*.02,this.reloadProgress>=0){this.reloadProgress+=t/this.reloadDuration;const y=Ne.clamp(this.reloadProgress,0,1),L=Math.sin(Math.min(y*1.18,1)*Math.PI);f-=L*.11,g+=L*.055,m+=L*.55,v-=L*.22,p-=L*.24;const R=this.weapon.userData.magazine;if(R){const A=y<.42?y/.42:y<.62?1:1-(y-.62)/.38;R.position.y=-.075-A*.3,R.visible=A<.98}this.reloadProgress>=1&&(this.reloadProgress=-1,this.weapon.userData.magazine&&(this.weapon.userData.magazine.position.y=-.075,this.weapon.userData.magazine.visible=!0))}if(this.holder.position.set(u,f,g),this.holder.rotation.set(v,p,m),n.mode==="bolt"&&this.recoil>.2&&this.weapon.userData.bolt&&(this.weapon.userData.bolt.rotation.z=Math.sin((1-this.recoil/1.2)*Math.PI)*.9),this.flashTimer>0&&(this.flashTimer-=t,this.flashTimer<=0)){const y=this.weapon.userData.flash;y&&(y.visible=!1)}const _=this.weapon.userData.muzzle;if(_&&_.getWorldPosition(this.lastMuzzle),this.holder.visible=!(this.weaponId==="awm"&&this.ads>.96),this.weapon.userData.stock)for(const y of this.weapon.userData.stock)y.visible=!1}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}}const Mv=new T,Sv=new T(0,0,1);class Ic{constructor(t,{additive:e=!1,texture:n,max:s=260}={}){this.max=s,this.particles=[];for(let a=0;a<s;a++)this.particles.push({active:!1,pos:new T,vel:new T,life:0,maxLife:1,size:.1,gravity:-9,drag:.98,color:new Wt,fade:!0});this.positions=new Float32Array(s*3),this.colors=new Float32Array(s*3),this.sizes=new Float32Array(s),this.alphas=new Float32Array(s);for(let a=0;a<s;a++)this.positions[a*3+1]=-999;const r=new ze;r.setAttribute("position",new cn(this.positions,3)),r.setAttribute("aColor",new cn(this.colors,3)),r.setAttribute("aSize",new cn(this.sizes,1)),r.setAttribute("aAlpha",new cn(this.alphas,1)),this.geometry=r,this.material=new ke({uniforms:{uMap:{value:n}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (290.0 / max(-mv.z, 0.2));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.01) discard;
          gl_FragColor = vec4(vColor, vAlpha) * tex;
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,transparent:!0,depthWrite:!1,blending:e?Fn:Ri}),this.points=new cg(r,this.material),this.points.frustumCulled=!1,this.points.renderOrder=8,t.add(this.points),this.cursor=0}spawn({pos:t,vel:e,life:n,size:s,color:r,gravity:a=-9,drag:o=.96}){const l=this.particles[this.cursor];return this.cursor=(this.cursor+1)%this.max,l.active=!0,l.pos.copy(t),l.vel.copy(e),l.life=n,l.maxLife=n,l.size=s,l.color.set(r),l.gravity=a,l.drag=o,l}update(t){let e=!1;for(let n=0;n<this.max;n++){const s=this.particles[n];if(!s.active){this.positions[n*3+1]=-999;continue}if(e=!0,s.life-=t,s.life<=0){s.active=!1,this.positions[n*3+1]=-999,this.alphas[n]=0;continue}s.vel.y+=s.gravity*t,s.vel.multiplyScalar(Math.pow(s.drag,t*60)),s.pos.addScaledVector(s.vel,t),s.pos.y<.03&&(s.pos.y=.03,s.vel.y*=-.25,s.vel.x*=.6,s.vel.z*=.6);const r=s.life/s.maxLife;this.positions[n*3]=s.pos.x,this.positions[n*3+1]=s.pos.y,this.positions[n*3+2]=s.pos.z,this.colors[n*3]=s.color.r,this.colors[n*3+1]=s.color.g,this.colors[n*3+2]=s.color.b,this.sizes[n]=s.size*(.65+r*.7),this.alphas[n]=Math.min(1,r*2.4)}e&&(this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0)}}class wv{constructor(t,e,n={}){this.scene=t,this.camera=e,this.onShake=n.onShake||(()=>{}),this.sparkTex=rv(),this.smokeTex=av(),this.holeTex=sv(),this.flashTex=kh(),this.sparks=new Ic(t,{additive:!0,texture:this.sparkTex,max:420}),this.debris=new Ic(t,{additive:!1,texture:this.smokeTex,max:300}),this.decals=[],this.decalCursor=0;const s=new Mn({map:this.holeTex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,opacity:.92}),r=new on(.16,.16);for(let u=0;u<90;u++){const f=new ut(r,s.clone());f.visible=!1,f.renderOrder=4,t.add(f),this.decals.push({mesh:f,life:0})}this.tracers=[];const a=new ee(.008,.008,1,4,1);a.translate(0,.5,0);for(let u=0;u<38;u++){const f=new Mn({color:"#ffd699",transparent:!0,opacity:.8,blending:Fn,depthWrite:!1}),g=new ut(a,f);g.visible=!1,g.frustumCulled=!1,g.renderOrder=6,t.add(g),this.tracers.push({mesh:g,life:0})}this.tracerCursor=0,this.flashes=[];const o=new oi({map:this.flashTex,color:"#ffe5b0",transparent:!0,opacity:1,blending:Fn,depthWrite:!1,depthTest:!1,toneMapped:!1});for(let u=0;u<16;u++){const f=o.clone(),g=new li(f);g.visible=!1,g.renderOrder=8,t.add(g),this.flashes.push({sprite:g,life:0,maxLife:.05,base:.5})}this.flashCursor=0,this.flashLight=new Vs("#ffc27a",0,11,2),t.add(this.flashLight),this.flashLightTimer=0,this.shells=[];const l=new ee(.011,.012,.042,6),c=new Ft({color:"#b28b43",metalness:.9,roughness:.3});for(let u=0;u<18;u++){const f=new ut(l,c);f.visible=!1,f.castShadow=!1,t.add(f),this.shells.push({mesh:f,life:0,vel:new T,angular:new T})}this.shellCursor=0,this.explosionRings=[];const h=new fl(.2,.35,32);for(let u=0;u<3;u++){const f=new Mn({color:"#ffb25e",transparent:!0,opacity:0,side:_n,depthWrite:!1,blending:Fn}),g=new ut(h,f);g.rotation.x=-Math.PI/2,g.visible=!1,t.add(g),this.explosionRings.push({mesh:g,life:0})}this.ringCursor=0,this.shockwaves=[];const d=new gn(1,16,10);for(let u=0;u<2;u++){const f=new Mn({color:"#ffd3a0",transparent:!0,opacity:.3,wireframe:!0,depthWrite:!1,blending:Fn}),g=new ut(d,f);g.visible=!1,t.add(g),this.shockwaves.push({mesh:g,life:0})}}muzzle(t,e="#ffdca4",n=.5,s=!0){const r=this.flashes[this.flashCursor];this.flashCursor=(this.flashCursor+1)%this.flashes.length,r.sprite.position.copy(t),r.sprite.material.color.set(e),r.sprite.material.rotation=Math.random()*Math.PI*2,r.sprite.scale.setScalar(n*(.7+Math.random()*.45)),r.sprite.visible=!0,r.life=.05,r.maxLife=.05,s&&(this.flashLight.position.copy(t),this.flashLight.intensity=17,this.flashLightTimer=.055)}tracer(t,e,n="#ffd699",s=1){const r=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length;const{mesh:a}=r,o=Mv.subVectors(e,t),l=o.length();l<.01||(a.position.copy(t),a.quaternion.setFromUnitVectors(new T(0,1,0),o.normalize()),a.scale.set(s,l,s),a.material.color.set(n),a.material.opacity=.75,a.visible=!0,r.life=.055+Math.random()*.02)}impact(t,e,n,s="metal"){if(s==="water"){for(let l=0;l<10;l++){const c=new T((Math.random()-.5)*2.2,2+Math.random()*3.2,(Math.random()-.5)*2.2);this.debris.spawn({pos:t,vel:c,life:.55+Math.random()*.4,size:.08+Math.random()*.08,color:"#c7d8d8",gravity:-8,drag:.99})}return}const r=s==="wood",a=s==="flesh",o=r?6:9;for(let l=0;l<o;l++){const h=new T((Math.random()-.5)*2.8+e.x*2.5,Math.random()*2.8+.4+e.y*2,(Math.random()-.5)*2.8+e.z*2.5);this.sparks.spawn({pos:t,vel:h,life:.25+Math.random()*.32,size:.028+Math.random()*.042,color:r?"#d5b47c":a?"#b35a4a":Math.random()>.5?"#ffd28e":"#ffad5e",gravity:a?-4:-13,drag:.95})}for(let l=0;l<2;l++){const c=new T(e.x*.9+(Math.random()-.5)*.45,e.y*.9+.4+Math.random()*.5,e.z*.9+(Math.random()-.5)*.45);this.debris.spawn({pos:t,vel:c,life:.55+Math.random()*.6,size:r?.16:.1,color:r?"#6f5a3d":a?"#5b1b17":"#76746a",gravity:-.7,drag:.94})}if(s!=="flesh"){const l=this.decals[this.decalCursor];this.decalCursor=(this.decalCursor+1)%this.decals.length;const c=l.mesh;c.position.copy(t).addScaledVector(e,.012),c.quaternion.setFromUnitVectors(Sv,e),c.rotateZ(Math.random()*Math.PI*2),c.scale.setScalar(.75+Math.random()*.55),c.material.opacity=.9,c.visible=!0,l.life=22}this.onShake(.008,.045)}blood(t,e){const n=e.clone().normalize();for(let s=0;s<11;s++){const r=new T(n.x*(1+Math.random()*2.4)+(Math.random()-.5)*1.8,n.y*1.5+Math.random()*1.8,n.z*(1+Math.random()*2.4)+(Math.random()-.5)*1.8);this.sparks.spawn({pos:t,vel:r,life:.32+Math.random()*.35,size:.03+Math.random()*.045,color:"#8e2c22",gravity:-8,drag:.97})}for(let s=0;s<3;s++)this.debris.spawn({pos:t,vel:new T((Math.random()-.5)*.5,.2+Math.random()*.5,(Math.random()-.5)*.5),life:.35+Math.random()*.2,size:.14,color:"#5d1513",gravity:-.3,drag:.93})}shellEject(t,e,n,s){const r=this.shells[this.shellCursor];this.shellCursor=(this.shellCursor+1)%this.shells.length,r.mesh.position.copy(t),r.vel.copy(e).multiplyScalar(1.4+Math.random()*.8).addScaledVector(n,1+Math.random()*.8).addScaledVector(s,.1),r.angular.set(Math.random()*14,Math.random()*14,Math.random()*14),r.life=1.3,r.mesh.rotation.set(Math.random()*3,Math.random()*3,0),r.mesh.visible=!0}explosion(t){this.onShake(.48,.6);for(let s=0;s<60;s++){const r=new T(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize(),a=2.5+Math.random()*12;this.sparks.spawn({pos:t.clone().addScaledVector(r,Math.random()*.5),vel:r.multiplyScalar(a),life:.3+Math.random()*.7,size:.1+Math.random()*.28,color:Math.random()>.4?"#ffb35e":"#ffdf9d",gravity:-2.2,drag:.93})}for(let s=0;s<36;s++){const r=new T(Math.random()-.5,Math.random()*.8+.1,Math.random()-.5).normalize();this.debris.spawn({pos:t.clone().addScaledVector(r,.4),vel:r.multiplyScalar(1.2+Math.random()*4),life:1+Math.random()*1.7,size:.28+Math.random()*.7,color:Math.random()>.4?"#3d3b34":"#68645a",gravity:.3,drag:.95})}const e=this.explosionRings[this.ringCursor];this.ringCursor=(this.ringCursor+1)%this.explosionRings.length,e.mesh.position.set(t.x,.06,t.z),e.mesh.scale.setScalar(1),e.mesh.material.opacity=.9,e.mesh.visible=!0,e.life=.55;const n=this.shockwaves[0];this.shockwaves[0]=this.shockwaves[1],this.shockwaves[1]=n,n.mesh.position.copy(t),n.mesh.scale.setScalar(.3),n.mesh.material.opacity=.35,n.mesh.visible=!0,n.life=.28,this.flashLight.position.copy(t).add(new T(0,.7,0)),this.flashLight.intensity=90,this.flashLightTimer=.2}update(t){this.sparks.update(t),this.debris.update(t);for(const e of this.decals)e.mesh.visible&&(e.life-=t,e.life<1&&(e.mesh.material.opacity=Math.max(0,e.life)),e.life<=0&&(e.mesh.visible=!1));for(const e of this.tracers)e.mesh.visible&&(e.life-=t,e.mesh.material.opacity=Math.max(0,e.life/.06),e.life<=0&&(e.mesh.visible=!1));for(const e of this.flashes)e.sprite.visible&&(e.life-=t,e.sprite.material.opacity=Math.max(0,e.life/e.maxLife),e.life<=0&&(e.sprite.visible=!1));this.flashLightTimer>0&&(this.flashLightTimer-=t,this.flashLight.intensity*=Math.pow(.001,t*10),this.flashLightTimer<=0&&(this.flashLight.intensity=0));for(const e of this.shells)e.mesh.visible&&(e.life-=t,e.vel.y-=9.8*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.position.y<.02&&(e.mesh.position.y=.02,e.vel.y*=-.32,e.vel.x*=.5,e.vel.z*=.5),e.mesh.rotation.x+=e.angular.x*t,e.mesh.rotation.y+=e.angular.y*t,e.mesh.rotation.z+=e.angular.z*t,e.life<=0&&(e.mesh.visible=!1));for(const e of this.explosionRings)e.mesh.visible&&(e.life-=t,e.mesh.scale.addScalar(t*18),e.mesh.material.opacity=Math.max(0,e.life/.55)*.7,e.life<=0&&(e.mesh.visible=!1));for(const e of this.shockwaves)e.mesh.visible&&(e.life-=t,e.mesh.scale.addScalar(t*15),e.mesh.material.opacity=Math.max(0,e.life/.28)*.26,e.life<=0&&(e.mesh.visible=!1))}}class bv{constructor(){this.ctx=null,this.master=null,this.reverb=null,this.noiseBuffer=null,this.ambienceStarted=!1,this.volume=.7,this.enabled=!0,this.lastShotAt=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=18,n.ratio.value=5.5,n.attack.value=.003,n.release.value=.28,this.master.connect(n),n.connect(e.destination);const s=1.6,r=e.sampleRate,a=e.createBuffer(2,r*s,r);for(let h=0;h<2;h++){const d=a.getChannelData(h);for(let u=0;u<d.length;u++)d[u]=(Math.random()*2-1)*Math.pow(1-u/d.length,3.4)*.55}this.reverb=e.createConvolver(),this.reverb.buffer=a;const o=e.createGain();o.gain.value=.25,this.reverb.connect(o),o.connect(this.master);const l=r*2;this.noiseBuffer=e.createBuffer(1,l,r);const c=this.noiseBuffer.getChannelData(0);for(let h=0;h<l;h++)c[h]=Math.random()*2-1;this.comp=n}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.08)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}noiseSource(t){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuffer,e.loop=!0,e.loopStart=Math.random()*1.5,e.start(this.ctx.currentTime,Math.random()*1.4,t+.1),e}panner(t=0){if(this.ctx.createStereoPanner){const e=this.ctx.createStereoPanner();return e.pan.value=Math.max(-1,Math.min(1,t)),e}return this.ctx.createGain()}route(t,e,n=.18,s=1){const r=this.panner(e),a=this.ctx.createGain();if(a.gain.value=s,t.connect(r),r.connect(a),a.connect(this.master),n>0){const o=this.ctx.createGain();o.gain.value=n,a.connect(o),o.connect(this.reverb)}return a}startAmbience(){if(!this.ctx||this.ambienceStarted)return;this.ambienceStarted=!0;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer,n.loop=!0;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=520,s.Q.value=.3;const r=t.createGain();r.gain.value=.09;const a=t.createOscillator();a.frequency.value=.075;const o=t.createGain();o.gain.value=.04,a.connect(o),o.connect(r.gain),n.connect(s),s.connect(r),r.connect(this.master),n.start(e),a.start(e);const l=t.createOscillator();l.type="sine",l.frequency.value=38;const c=t.createGain();c.gain.value=.035,l.connect(c),c.connect(this.master),l.start(e);const h=t.createBufferSource();h.buffer=this.noiseBuffer,h.loop=!0;const d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=.5;const u=t.createGain();u.gain.value=.017,h.connect(d),d.connect(u),u.connect(this.master),h.start(e,.8),this.ambienceTimer=window.setInterval(()=>{Math.random()>.55?this.ambientClang():this.ambientCreak()},7e3+Math.random()*5e3)}ambientClang(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(Math.random()*2-1)*.85,n=230+Math.random()*720,s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(n,t),s.frequency.exponentialRampToValueAtTime(n*.72,t+.5);const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.025+Math.random()*.025,t+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+.8),s.connect(r),this.route(r,e,.7),s.start(t),s.stop(t+1);const a=this.noiseSource(.16),o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=n*4,o.Q.value=4;const l=this.ctx.createGain();l.gain.setValueAtTime(.03,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.18),a.connect(o),o.connect(l),this.route(l,e,.5)}ambientCreak(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(Math.random()*2-1)*.8,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(70+Math.random()*35,t),n.frequency.linearRampToValueAtTime(95+Math.random()*55,t+1.4);const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=320,s.Q.value=9;const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.022,t+.5),r.gain.linearRampToValueAtTime(1e-4,t+1.6),n.connect(s),s.connect(r),this.route(r,e,.75),n.start(t),n.stop(t+1.7)}shot(t="rifle",e=0,n=0,s=!0){if(!this.ctx)return;const r=this.ctx.currentTime;if(!s&&r-this.lastShotAt<.018)return;this.lastShotAt=r;const a=r+.001,o=s?1:Math.max(.1,1-n/60),l=!s&&n>16,c={rifle:.55,ak:.7,sniper:.9,pistol:.42}[t]||.5,h=t==="sniper"?.7:t==="pistol"?.22:.3,d=this.noiseSource(h),u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=t==="sniper"?380:720;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.value=l?1600:t==="sniper"?4800:7200,f.Q.value=.8;const g=this.ctx.createGain();g.gain.setValueAtTime(1e-4,a),g.gain.exponentialRampToValueAtTime(c*o,a+.003),g.gain.exponentialRampToValueAtTime(1e-4,a+h),d.connect(u),u.connect(f),f.connect(g),this.route(g,e,s?.38:.3*o);const v=this.ctx.createOscillator();v.type="triangle";const p=t==="sniper"?105:t==="pistol"?150:118;v.frequency.setValueAtTime(p,a),v.frequency.exponentialRampToValueAtTime(t==="sniper"?34:48,a+.18);const m=this.ctx.createGain();m.gain.setValueAtTime(c*.95*o,a),m.gain.exponentialRampToValueAtTime(1e-4,a+(t==="sniper"?.42:.18)),v.connect(m),this.route(m,e,.15);const w=this.ctx.createOscillator();w.type="square",w.frequency.setValueAtTime(t==="sniper"?140:240,a+.012),w.frequency.exponentialRampToValueAtTime(80,a+.04);const _=this.ctx.createGain();if(_.gain.setValueAtTime(.032*o,a+.012),_.gain.exponentialRampToValueAtTime(1e-4,a+.06),w.connect(_),this.route(_,e,0),v.start(a),v.stop(a+.5),w.start(a+.01),w.stop(a+.07),t==="sniper"){const y=this.ctx.createBufferSource();y.buffer=this.noiseBuffer,y.loop=!0;const L=this.ctx.createBiquadFilter();L.type="lowpass",L.frequency.value=620;const R=this.ctx.createGain();R.gain.setValueAtTime(c*.24,a+.02),R.gain.exponentialRampToValueAtTime(1e-4,a+1.6),y.connect(L),L.connect(R),this.route(R,e,.85,.8),y.start(a+.02,0,1.7),y.stop(a+1.8)}}reload(t=2){if(!this.ctx)return;const e=this.ctx.currentTime,n=(o,l,c,h=.04)=>{const d=this.ctx.createOscillator();d.type="square",d.frequency.setValueAtTime(l,e+o),d.frequency.exponentialRampToValueAtTime(l*.5,e+o+h);const u=this.ctx.createGain();u.gain.setValueAtTime(c,e+o),u.gain.exponentialRampToValueAtTime(1e-4,e+o+h),d.connect(u),this.route(u,.15,.1),d.start(e+o),d.stop(e+o+h+.02)};n(.08,230,.02),n(t*.38,140,.06,.06),n(t*.47,210,.035),n(t*.66,170,.08,.06),n(t*.82,300,.04,.045),n(t*.9,260,.025);const s=this.noiseSource(t),r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1600,r.Q.value=.5;const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.012,e+.1),a.gain.linearRampToValueAtTime(1e-4,e+.25),s.connect(r),r.connect(a),this.route(a,.2,.2)}dryFire(){this.click(420,.012,.03)}click(t=1200,e=.02,n=.035,s=0){if(!this.ctx)return;const r=this.ctx.currentTime,a=this.ctx.createOscillator();a.type="square",a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(t*.45,r+n);const o=this.ctx.createGain();o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(1e-4,r+n),a.connect(o),this.route(o,s,.05),a.start(r),a.stop(r+n+.02)}footstep(t=0,e=1){if(!this.ctx)return;const n=this.ctx.currentTime,s=this.noiseSource(.16),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=420+Math.random()*180;const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.035*e,n+.005),a.gain.exponentialRampToValueAtTime(1e-4,n+.13),s.connect(r),r.connect(a),this.route(a,t,.07);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(88,n),o.frequency.exponentialRampToValueAtTime(52,n+.1);const l=this.ctx.createGain();l.gain.setValueAtTime(.03*e,n),l.gain.exponentialRampToValueAtTime(1e-4,n+.11),o.connect(l),this.route(l,t,.03),o.start(n),o.stop(n+.13)}hit(t=!1){if(this.ctx&&(this.click(t?1680:1040,t?.035:.022,.07),t)){const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(2200,e+.02),n.frequency.exponentialRampToValueAtTime(1400,e+.18);const s=this.ctx.createGain();s.gain.setValueAtTime(.018,e+.02),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),this.route(s,0,.2),n.start(e+.02),n.stop(e+.25)}}playerHit(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(58,t+.22);const n=this.ctx.createGain();n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.25),e.connect(n),this.route(n,0,.2),e.start(t),e.stop(t+.3);const s=this.noiseSource(.2),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=320;const a=this.ctx.createGain();a.gain.setValueAtTime(.045,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.2),s.connect(r),r.connect(a),this.route(a,0,.1)}whiz(t=0){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.noiseSource(.17),s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(3600,e),s.frequency.exponentialRampToValueAtTime(800,e+.16),s.Q.value=5;const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.026,e+.012),r.gain.exponentialRampToValueAtTime(1e-4,e+.17),n.connect(s),s.connect(r),this.route(r,t,.15)}explosion(t=0,e=0){if(!this.ctx)return;const n=this.ctx.currentTime,s=Math.max(.18,1-e/55),r=this.noiseSource(2.2),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1800,n),a.frequency.exponentialRampToValueAtTime(120,n+1.8);const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.6*s,n+.008),o.gain.exponentialRampToValueAtTime(1e-4,n+2),r.connect(a),a.connect(o),this.route(o,t,.95);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(72,n),l.frequency.exponentialRampToValueAtTime(24,n+1.1);const c=this.ctx.createGain();c.gain.setValueAtTime(.5*s,n),c.gain.exponentialRampToValueAtTime(1e-4,n+1.2),l.connect(c),this.route(c,t,.3),l.start(n),l.stop(n+1.3)}roundStart(){if(!this.ctx)return;const t=this.ctx.currentTime;[0,.12,.24].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=[520,660,880][n];const r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t+e),r.gain.exponentialRampToValueAtTime(.035,t+e+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+e+.1),s.connect(r),this.route(r,0,.2),s.start(t+e),s.stop(t+e+.12)})}radio(){this.click(1200,.014,.03,-.15);const t=this.ctx.currentTime,e=this.noiseSource(.08),n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2100;const s=this.ctx.createGain();s.gain.setValueAtTime(.012,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.07),e.connect(n),n.connect(s),this.route(s,-.15,0,1)}victory(t=!0){if(!this.ctx)return;const e=this.ctx.currentTime;(t?[261,329,392,523]:[220,196,174,146]).forEach((s,r)=>{const a=this.ctx.createOscillator();a.type="triangle",a.frequency.value=s;const o=this.ctx.createGain(),l=e+r*.18;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.06,l+.015),o.gain.exponentialRampToValueAtTime(1e-4,l+.6),a.connect(o),this.route(o,(r-2)*.1,.5),a.start(l),a.stop(l+.65)})}uiTone(t=760,e=.02){this.click(t,e,.045)}}const Gt=i=>document.querySelector(i);class Tv{constructor(t){this.game=t,this.root=Gt("#hud"),this.blueScore=Gt("#blue-score"),this.redScore=Gt("#red-score"),this.clockEl=Gt("#match-clock"),this.goalEl=Gt("#score-goal"),this.roundStatus=Gt("#round-status"),this.killfeed=Gt("#killfeed"),this.eventBanner=Gt("#event-banner"),this.hitmarkerEl=Gt("#hitmarker"),this.crosshair=Gt("#crosshair"),this.scope=Gt("#scope-overlay"),this.scopeStage=Gt("#scope-stage"),this.rifleSight=Gt("#rifle-sight"),this.rifleSightName=Gt("#rifle-sight-name"),this.rifleSightOn=!1,this.touchHealth=Gt("#touch-health"),this.touchArmor=Gt("#touch-armor"),this.touchAmmo=Gt("#touch-ammo"),this.touchReserve=Gt("#touch-reserve"),this.touchWeapon=Gt("#touch-weapon"),this.healthValue=Gt("#health-value"),this.healthFill=Gt("#health-fill"),this.armorValue=Gt("#armor-value"),this.armorFill=Gt("#armor-fill"),this.weaponName=Gt("#weapon-name"),this.weaponMode=Gt("#weapon-mode"),this.weaponCal=Gt("#weapon-cal"),this.weaponModuleLabel=Gt("#weapon-module-label"),this.lastSlot=-1,this.ammoMag=Gt("#ammo-mag"),this.ammoReserve=Gt("#ammo-reserve"),this.ammoBar=Gt("#ammo-bar"),this.weaponSlotPrimary=Gt("#slot-primary"),this.weaponSlotSecondary=Gt("#slot-secondary"),this.grenadeCount=Gt("#grenade-count"),this.reloadWrap=Gt("#reload-wrap"),this.reloadBar=Gt("#reload-bar"),this.reloadTime=Gt("#reload-time"),this.deathScreen=Gt("#death-screen"),this.deathKiller=Gt("#death-killer"),this.deathWeapon=Gt("#death-weapon"),this.deathCountdown=Gt("#death-countdown"),this.damageRing=Gt("#damage-ring"),this.damageArc=Gt("#damage-arc"),this.hurtVignette=Gt("#hurt-vignette"),this.scoreboard=Gt("#scoreboard"),this.scoreBodyBlue=Gt("#score-blue"),this.scoreBodyRed=Gt("#score-red"),this.mapCanvas=Gt("#minimap"),this.mapCtx=this.mapCanvas.getContext("2d"),this.compass=Gt("#compass-strip"),this.bannerTimer=0,this.damageTimer=0,this.hitTimer=0,this.eventTimer=0,this.lastHealth=-1,this.lastArmor=-1,this.lastAmmo=-1,this.lastWeapon=null,this.lastReloadState=!1,this.mapTimer=0,this.scoreboardVisible=!1,this.scopeOn=!1,this.lastSpread=-1,this.mapDpr=1,this._resizeMap(),this.buildCompass(),window.addEventListener("resize",()=>this._resizeMap())}_resizeMap(){const t=this.mapCanvas,e=t.getBoundingClientRect();this.mapDpr=Math.min(2,window.devicePixelRatio||1),t.width=Math.max(160,Math.round(e.width*this.mapDpr)),t.height=Math.max(190,Math.round(e.height*this.mapDpr))}buildCompass(){if(!this.compass)return;const t=[];for(let e=-180;e<=180;e+=15){const n=(e%360+360)%360,s=n===0?"N":n===90?"E":n===180?"S":n===270?"W":"";t.push(`<span class="compass-tick ${s?"major":""}">${s||""}<i></i></span>`)}this.compass.innerHTML=t.join(""),this.compass.style.width=`${t.length*34}px`}setVisible(t){this.root.classList.toggle("is-visible",t),t||(this.root.classList.remove("low-health"),this.deathScreen.classList.remove("show"),this.setScoreboard(!1))}show(){this.root.classList.add("is-visible")}hide(){this.root.classList.remove("is-visible")}update(t){const e=this.game;if(!this.root.classList.contains("is-visible"))return;const n=e.player;if(!n)return;this.clockEl.textContent=Uc(e.timeRemaining),this.blueScore.textContent=e.score.blue,this.redScore.textContent=e.score.red,this.goalEl.textContent=String(e.scoreLimit).padStart(2,"0"),this.lastHealth!==n.health&&(this.lastHealth=n.health,this.healthValue.textContent=Math.ceil(n.health),this.healthFill.style.width=`${Math.max(0,n.health)}%`,this.healthFill.classList.toggle("critical",n.health<=35),this.root.classList.toggle("low-health",n.health<100&&n.health>0&&e.player.alive)),this.lastArmor!==n.armor&&(this.lastArmor=n.armor,this.armorValue.textContent=Math.ceil(n.armor),this.armorFill.style.width=`${n.armor/50*100}%`);const s=n.getWeaponState();this.lastWeapon!==s.name&&(this.lastWeapon=s.name,this.weaponName.textContent=s.name,this.weaponMode.textContent=s.mode,this.weaponSlotPrimary.classList.toggle("active",s.slot===0),this.weaponSlotSecondary.classList.toggle("active",s.slot===1),this.weaponSlotPrimary.querySelector(".slot-label").textContent=n.weapons[0].data.name,this.weaponSlotSecondary.querySelector(".slot-label").textContent=n.weapons[1].data.name,this.weaponCal&&(this.weaponCal.textContent=n.currentWeapon.data.caliber||"—")),this.lastSlot!==s.slot&&(this.lastSlot=s.slot,this.weaponModuleLabel&&(this.weaponModuleLabel.innerHTML=s.slot===0?"主武器 <em>/ PRIMARY</em>":"副武器 <em>/ SIDEARM</em>"));const r=String(s.mag).padStart(2,"0");this.ammoMag.textContent!==r&&(this.ammoMag.textContent=r),this.ammoReserve.textContent=String(s.reserve).padStart(3,"0"),this.grenadeCount.textContent=String(s.grenades),this.ammoBar.style.transform=`scaleX(${s.mag/n.currentWeapon.data.mag})`,this.touchHealth&&(this.touchHealth.textContent=Math.ceil(n.health),this.touchArmor.textContent=Math.ceil(n.armor),this.touchAmmo.textContent=String(s.mag).padStart(2,"0"),this.touchReserve.textContent=String(s.reserve),this.touchWeapon.textContent=s.name),this.ammoMag.classList.toggle("danger",s.mag<=Math.max(3,Math.floor(n.currentWeapon.data.mag*.2))),s.reloading!==this.lastReloadState&&(this.lastReloadState=s.reloading,this.reloadWrap.classList.toggle("is-active",s.reloading)),s.reloading&&(this.reloadBar.style.width=`${Math.min(100,s.reloadProgress*100)}%`,this.reloadTime.textContent=n.reloadTimer.toFixed(1));const a=s.spread;if(Math.abs(a-this.lastSpread)>2e-4){this.lastSpread=a;const d=4.5+a*520+(n.speed>.5?2.4:0);this.crosshair.style.setProperty("--gap",`${Math.min(26,d).toFixed(1)}px`),this.crosshair.style.setProperty("--opacity",`${n.aiming?.62:.92}`)}this.crosshair.classList.toggle("is-ads",n.adsProgress>.72),this.root.classList.toggle("is-aiming",n.aiming&&n.adsProgress>.5),this.crosshair.classList.toggle("is-hidden",n.currentWeapon.data.scope&&n.adsProgress>.9),this.crosshair.classList.toggle("is-reloading",s.reloading);const o=Gt("#sb-blue-score"),l=Gt("#sb-red-score");o&&(o.textContent=e.score.blue),l&&(l.textContent=e.score.red);const c=Gt("#sb-clock");c&&(c.textContent=Uc(e.timeRemaining));const h=Gt("#protection-label");if(h&&h.classList.toggle("show",n.protected>0&&n.alive),this.damageTimer>0&&(this.damageTimer-=t,this.damageTimer<=0&&this.damageRing.classList.remove("show")),this.hurtTimer>0&&(this.hurtTimer-=t,this.hurtTimer<=0&&this.hurtVignette.classList.remove("show")),this.hitTimer>0&&(this.hitTimer-=t,this.hitTimer<=0&&this.hitmarkerEl.classList.remove("show","head","kill")),this.eventTimer>0&&(this.eventTimer-=t,this.eventTimer<=0&&this.eventBanner.classList.remove("show")),this.compass){const d=(-n.yaw*180/Math.PI%360+360)%360,u=(d>180?d-360:d)*(34/15);this.compass.style.transform=`translateX(calc(-50% - ${u.toFixed(1)}px))`}this.mapTimer-=t,this.mapTimer<=0&&(this.mapTimer=.08,this.drawMinimap()),this.root.classList.toggle("is-dead",!n.alive),n.alive||(this.deathCountdown.textContent=Math.max(0,Math.ceil(n.respawnTimer)),this.scope.classList.remove("active"),this.scopeOn=!1),this.scoreboardVisible&&(this.scoreboardSeconds=(this.scoreboardSeconds||0)+t,this.scoreboardSeconds>.8&&(this.scoreboardSeconds=0,this.renderScoreboard()))}setRifleSight(t,e=""){t=t===!0,t&&e&&(this.rifleSightName.textContent=e),t!==this.rifleSightOn&&(this.rifleSightOn=t,this.rifleSight.classList.toggle("active",t))}setScope(t,e){if(t=t===!0,t===this.scopeOn){t&&this.scope.style.setProperty("--scope-progress",e.toFixed(2));return}this.scopeOn=t,this.scope.classList.toggle("active",t),t&&(this.scope.style.setProperty("--scope-progress",e.toFixed(2)),this.hurtVignette.classList.remove("show"))}pulseAmmo(){this.ammoMag.classList.remove("pulse"),this.ammoMag.offsetWidth,this.ammoMag.classList.add("pulse")}flashReloadComplete(){this.reloadWrap.classList.remove("is-active")}hitmarker(t,e){this.hitTimer=e?.28:.16,this.hitmarkerEl.classList.remove("show","head","kill"),this.hitmarkerEl.offsetWidth,this.hitmarkerEl.classList.add("show"),t&&this.hitmarkerEl.classList.add("head"),e&&this.hitmarkerEl.classList.add("kill"),t&&this.showEvent("爆头","HEADSHOT","amber")}damage(t){if(!t||!t.position)this.damageRing.style.setProperty("--damage-angle","0deg");else{const e=this.game.player,n=t.position.x-e.position.x,s=t.position.z-e.position.z,r=-Math.sin(e.yaw),a=-Math.cos(e.yaw),o=Math.cos(e.yaw),l=-Math.sin(e.yaw),c=n*r+s*a,h=n*o+s*l,d=Math.atan2(h,c)*180/Math.PI;this.damageRing.style.setProperty("--damage-angle",`${d.toFixed(1)}deg`)}this.damageTimer=.9,this.damageRing.classList.remove("show"),this.damageRing.offsetWidth,this.damageRing.classList.add("show"),this.hurtTimer=.24,this.hurtVignette.classList.add("show")}addKill({killer:t,victim:e,weapon:n,headshot:s,killerTeam:r,victimTeam:a}){const o=document.createElement("div");for(o.className="feed-row",o.innerHTML=`
      <span class="feed-name ${r==="blue"?"blue":"red"} ${t==="你"?"you":""}">${Fr(t)}</span>
      <span class="feed-weapon">${Fr(n)}${s?'<i class="hs-mark">HS</i>':""}</span>
      <span class="feed-name ${a==="blue"?"blue":"red"} ${e==="你"?"you":""}">${Fr(e)}</span>
    `,this.killfeed.prepend(o);this.killfeed.children.length>5;)this.killfeed.lastElementChild.remove();window.setTimeout(()=>{o.classList.add("fade"),window.setTimeout(()=>o.remove(),400)},5200)}showEvent(t,e="",n=""){this.eventBanner.className="event-banner show",n&&this.eventBanner.classList.add(n),this.eventBanner.querySelector(".event-main").textContent=t,this.eventBanner.querySelector(".event-sub").textContent=e,this.eventTimer=1.65}showDeath(t,e){this.deathKiller.textContent=t||"未知火力",this.deathWeapon.textContent=e||"—",this.deathScreen.classList.add("show"),this.scope.classList.remove("active"),this.scopeOn=!1,this.setRifleSight(!1)}hideDeath(){this.deathScreen.classList.remove("show")}toggleScoreboard(t){this.setScoreboard(t)}setScoreboard(t){this.scoreboardVisible=t,this.scoreboard.classList.toggle("show",t),t&&(this.scoreboardSeconds=99,this.renderScoreboard())}renderScoreboard(){const t=this.game;if(!t)return;const e=[{name:"你",team:"blue",kills:t.player.kills,deaths:t.player.deaths,score:t.player.kills*100,alive:t.player.alive,player:!0},...t.botManager.bots.map(s=>({name:s.name,team:s.team,kills:s.kills||0,deaths:s.deaths||0,score:(s.kills||0)*100,alive:s.alive,player:!1}))],n=s=>e.filter(r=>r.team===s).sort((r,a)=>a.score-r.score).map((r,a)=>`
        <div class="score-row ${r.player?"is-player":""} ${r.alive?"":"is-dead"}">
          <span class="score-rank">${String(a+1).padStart(2,"0")}</span>
          <span class="score-name">${Fr(r.name)}</span>
          <span class="score-k">${String(r.kills).padStart(2,"0")}</span>
          <span class="score-d">${String(r.deaths).padStart(2,"0")}</span>
          <span class="score-ping">${r.player?"12":18+a*17%30}</span>
          <span class="score-state">${r.alive?"在线":"待命"}</span>
        </div>
      `).join("");this.scoreBodyBlue.innerHTML=n("blue"),this.scoreBodyRed.innerHTML=n("red")}drawMinimap(){const t=this.mapCtx,e=this.mapCanvas;if(!t)return;const n=this.game,s=e.width,r=e.height,a=this.mapDpr,o=n.world.mapData.width+4,l=n.world.mapData.depth+4,c=14*a,h=Math.min((s-c*2)/o,(r-c*2)/l),d=s/2,u=r/2,f=y=>d+y*h,g=y=>u+y*h;t.clearRect(0,0,s,r);const v=t.createLinearGradient(0,0,0,r);v.addColorStop(0,"rgba(12,20,20,0.86)"),v.addColorStop(1,"rgba(8,13,13,0.9)"),t.fillStyle=v,t.fillRect(0,0,s,r),t.strokeStyle="rgba(187,204,198,0.055)",t.lineWidth=1;for(let y=1;y<8;y++)t.beginPath(),t.moveTo(0,r/8*y),t.lineTo(s,r/8*y),t.stroke();t.beginPath();const p=g(-33),m=19.2*h;t.moveTo(d-m*.45,p),t.lineTo(d-m,p+5*h),t.lineTo(d-m,g(25)),t.lineTo(d-m*.82,g(30.5)),t.lineTo(d+m*.82,g(30.5)),t.lineTo(d+m,g(25)),t.lineTo(d+m,p+5*h),t.lineTo(d+m*.45,p),t.closePath(),t.fillStyle="rgba(75,94,89,0.28)",t.fill(),t.strokeStyle="rgba(190,208,201,0.38)",t.lineWidth=1.4*a,t.stroke(),t.fillStyle="rgba(170,187,179,0.05)",t.fillRect(f(-16.5),g(-30.5),33*h,61*h);for(const y of n.world.colliders){if(y.type==="boundary"||y.type==="bulwark"||y.type==="edge"||y.maxX<-16||y.minX>16||y.maxZ<-30.5||y.minZ>30.5)continue;const L=(y.maxX-y.minX)*h,R=(y.maxZ-y.minZ)*h,A=f(y.minX),P=g(y.minZ);t.fillStyle=y.type==="container"?Ev(y.color||"#9e6a4f",.55):y.type==="crate"?"rgba(140,111,73,0.45)":"rgba(128,139,131,0.32)",t.fillRect(A,P,L,R),t.strokeStyle="rgba(210,220,213,0.14)",t.lineWidth=.8*a,t.strokeRect(A,P,L,R)}t.fillStyle="rgba(88,157,160,0.18)",t.fillRect(f(-7),g(25),14*h,4.8*h),t.fillStyle="rgba(178,80,55,0.16)",t.fillRect(f(-7),g(-29.8),14*h,4.8*h),t.font=`${9*a}px "Barlow Condensed", sans-serif`,t.fillStyle="rgba(140,199,199,0.72)",t.textAlign="center",t.fillText("保卫者 // SPAWN",d,g(24.2)),t.fillStyle="rgba(210,120,92,0.7)",t.fillText("潜伏者 // SPAWN",d,g(-24.6));for(const y of n.botManager.bots)if(y.alive){if(y.team==="blue"){const L=f(y.position.x),R=g(y.position.z);t.fillStyle="#6bb4b2",t.beginPath(),t.arc(L,R,2.7*a,0,6.28),t.fill()}else if(y.recentlyFired>0){const L=f(y.position.x),R=g(y.position.z);t.fillStyle="rgba(214,92,60,0.95)",t.beginPath(),t.arc(L,R,2.5*a,0,6.28),t.fill(),t.strokeStyle="rgba(219,111,78,0.32)",t.beginPath(),t.arc(L,R,6.2*a,0,6.28),t.stroke()}}if(n.player.alive){const y=f(n.player.position.x),L=g(n.player.position.z),R=n.player.yaw;t.save(),t.translate(y,L),t.rotate(-R);const A=t.createRadialGradient(0,0,0,0,-8*a,36*a);A.addColorStop(0,"rgba(236,198,109,0.18)"),A.addColorStop(1,"rgba(236,198,109,0)"),t.fillStyle=A,t.beginPath(),t.moveTo(0,0),t.arc(0,0,36*a,-Math.PI/2-.55,-Math.PI/2+.55),t.closePath(),t.fill(),t.fillStyle="#e8c47c",t.beginPath(),t.moveTo(0,-6.3*a),t.lineTo(4.6*a,5*a),t.lineTo(0,2.8*a),t.lineTo(-4.6*a,5*a),t.closePath(),t.fill(),t.strokeStyle="rgba(11,15,14,0.7)",t.lineWidth=.8*a,t.stroke(),t.restore()}t.strokeStyle="rgba(218,211,193,0.28)",t.lineWidth=1*a;const w=8*a,_=7*a;t.beginPath(),t.moveTo(_,_+w),t.lineTo(_,_),t.lineTo(_+w,_),t.moveTo(s-_-w,_),t.lineTo(s-_,_),t.lineTo(s-_,_+w),t.moveTo(_,r-_-w),t.lineTo(_,r-_),t.lineTo(_+w,r-_),t.moveTo(s-_-w,r-_),t.lineTo(s-_,r-_),t.lineTo(s-_,r-_-w),t.stroke()}}function Uc(i){const t=Math.max(0,Math.ceil(i)),e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Fr(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ev(i,t){const e=i.replace("#",""),n=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return`rgba(${n},${s},${r},${t})`}new T(0,1,0);const Av=new T,Cv=new T,Rv=new T;new T;class Pv{constructor(t){this.game=t,this.camera=t.camera,this.camera.rotation.order="YXZ",this.position=new T(0,0,27),this.velocity=new T,this.team="blue",this.isPlayer=!0,this.name="你",this.alive=!0,this.radius=.34,this.eyeHeight=1.66,this.crouchHeight=1.12,this.currentEye=1.66,this.height=1.75,this.crouching=!1,this.sprinting=!1,this.grounded=!0,this.health=100,this.maxHealth=100,this.armor=50,this.protected=0,this.yaw=0,this.pitch=0,this.roll=0,this.recoilPitch=0,this.recoilYaw=0,this.recoilRoll=0,this.baseFov=76,this.currentFov=76,this.speed=0,this.triggerDown=!1,this.aiming=!1,this.adsProgress=0,this.enabled=!1,this.clock=0,this.nextFireAt=0,this.fireCooldown=0,this.reloadTimer=0,this.reloadDuration=1,this.switchTimer=0,this.deathTimer=0,this.respawnTimer=0,this.invulnerable=0,this.kills=0,this.deaths=0,this.headshots=0,this.shots=0,this.hits=0,this.grenades=2,this.grenadeCooldown=0,this.stepTimer=0,this.jumpRequested=!1,this.lastDamageAt=-99,this.hitFlash=0,this.landBump=0,this.loadout={primary:"m4a1"},this.slot=0,this.weapons=[],this.currentWeapon=null,this.beginLoadout("m4a1",!0),this.keys=new Set,this.touchMove={x:0,y:0},this.touchSprint=!1,this.lastMouseMove={x:0,y:0},this.raycaster=new Wg,this.raycaster.far=160,this.raycaster.firstHitOnly=!1,this._emptyRoom=[],this.bobPhase=0,this.shake=0,this.shakeDecay=0,this.baseCameraPos=new T,this.deathRoll=0}beginLoadout(t,e=!1){this.loadout.primary=t;const n=Zs[t],s=Zs.deagle;this.weapons=[{slot:0,id:t,data:n,mag:n.mag,reserve:n.reserve,label:n.name},{slot:1,id:"deagle",data:s,mag:s.mag,reserve:s.reserve,label:s.name}],this.slot=0,this.currentWeapon=this.weapons[0],this.ammo=this.currentWeapon,e||this.equip(0,!0),this.game.weaponView.setWeapon(this.currentWeapon.id)}equip(t,e=!1){t===this.slot&&!e||this.weapons[t]&&(this.cancelReload(),this.slot=t,this.currentWeapon=this.weapons[t],this.ammo=this.currentWeapon,this.game.weaponView.setWeapon(this.currentWeapon.id),this.aiming=!1,this.game.weaponView.setAim(!1),e||(this.nextFireAt=this.clock+.42,this.switchTimer=.42,this.game.audio.click(300,.015,.05)))}resetAtSpawn(t,e=0){this.position.set(t.x,0,t.z),this.velocity.set(0,0,0),this.health=this.maxHealth,this.armor=50,this.alive=!0,this.crouching=!1,this.sprinting=!1,this.grounded=!0,this.yaw=e,this.pitch=0,this.roll=0,this.recoilPitch=0,this.recoilYaw=0,this.recoilRoll=0,this.currentEye=this.eyeHeight,this.deathTimer=0,this.respawnTimer=0,this.invulnerable=1.8,this.protected=1.8,this.triggerDown=!1,this.grenades=2,this.grenadeCooldown=0,this.reloadTimer=0,this.cancelReload(),this.game.weaponView.setWeapon(this.currentWeapon.id),this.game.weaponView.setAim(!1),this.game.weaponView.holder.visible=!0,this.game.hud.setRifleSight(!1),this.weapons[0].mag=this.weapons[0].data.mag,this.weapons[0].reserve=this.weapons[0].data.reserve,this.weapons[1].mag=this.weapons[1].data.mag,this.weapons[1].reserve=this.weapons[1].data.reserve,this.slot=0,this.currentWeapon=this.weapons[0],this.ammo=this.currentWeapon,this.deathRoll=0,this.updateCamera(0)}keyDown(t){this.enabled&&(this.keys.add(t),t==="KeyR"&&this.startReload(),t==="Digit1"&&this.equip(0),t==="Digit2"&&this.equip(1),t==="KeyG"&&this.throwGrenade(),t==="Space"&&(this.jumpRequested=!0))}keyUp(t){this.keys.delete(t)}mouseMove(t,e){if(!this.enabled||!this.alive)return;let s=this.game.settings.sensitivity*.0015;this.aiming&&(s*=this.currentWeapon?.data.scope?.45:.72),this.yaw-=t*s,this.pitch-=e*s;const r=Math.PI/2-.035;this.pitch=Ne.clamp(this.pitch,-r,r),this.game.weaponView.handleLook(t,e)}mouseDown(t){!this.enabled||!this.alive||(t===0?(this.triggerDown=!0,this.currentWeapon.data.mode!=="auto"&&this.queueShot()):t===2&&(this.aiming=!0,this.game.weaponView.setAim(!0)))}mouseUp(t){t===0&&(this.triggerDown=!1),t===2&&(this.aiming=!1,this.game.weaponView.setAim(!1))}queueShot(){this.wantShot=!0}startReload(){if(!this.alive||this.reloadTimer>0)return;const t=this.currentWeapon;t.mag>=t.data.mag||t.reserve<=0||(this.reloadTimer=t.data.reload,this.reloadDuration=t.data.reload,this.aiming=!1,this.game.weaponView.setAim(!1),this.game.weaponView.startReload(t.data.reload),this.game.audio.reload(t.data.reload))}cancelReload(){this.reloadTimer=0,this.game.weaponView.cancelReload()}finishReload(){const t=this.currentWeapon,e=t.data.mag-t.mag,n=Math.min(e,t.reserve);t.mag+=n,t.reserve-=n}throwGrenade(){if(!this.alive||this.grenadeCooldown>0||this.grenades<=0)return;this.grenades--,this.grenadeCooldown=1,this.game.weaponView.triggerThrow?.(),this.game.audio.click(260,.021,.06);const t=this.getAimDirection(new T),e=this.camera.position.clone().add(t.clone().multiplyScalar(.45)).add(new T(0,.05,0));this.game.throwGrenade(e,t,this)}takeDamage(t,e=null,n=!1){if(!this.alive||this.protected>0||this.game.state!=="playing")return;const s=Math.min(this.armor,t*.55);this.armor=Math.max(0,this.armor-s),this.health=Math.max(0,this.health-(t-s)),this.lastDamageAt=this.clock,this.hitFlash=.55,this.game.onPlayerDamaged(t,e,n),this.game.addShake(.08+Math.min(.1,t*.004),.18),this.health<=0&&this.die(e,n)}die(t,e=!1){this.alive&&(this.alive=!1,this.triggerDown=!1,this.aiming=!1,this.game.weaponView.setAim(!1),this.triggerDown=!1,this.deaths++,this.deathTimer=0,this.respawnTimer=4.6,this.velocity.set(0,0,0),this.keys.clear(),this.game.onPlayerKilled(t,e))}respawn(t,e=0){this.resetAtSpawn(t,e),this.game.hud.hideDeath()}getEyePosition(t=new T){return t.set(this.position.x,this.position.y+this.currentEye,this.position.z)}getTargetPoint(t=new T){return t.set(this.position.x,this.position.y+1.05,this.position.z)}getAimDirection(t=new T){return this.camera.getWorldDirection(t),t}getSpread(){const t=this.currentWeapon.data;let e=this.aiming?t.adsSpread:t.hipSpread;const n=Math.min(1,this.speed/4.5);return e+=t.moveSpread*n*(this.aiming?.35:1),this.grounded||(e+=.035),this.crouching&&(e*=.78),this.adsProgress>.9&&(e*=.92),e}fire(){const t=this.clock;if(!this.alive||this.reloadTimer>0||this.switchTimer>0||t<this.nextFireAt)return;this.updateCamera(0);const e=this.currentWeapon.data,n=this.currentWeapon;if(n.mag<=0){this.game.audio.dryFire(),this.nextFireAt=t+.25,this.startReload();return}n.mag--,this.shots++,this.nextFireAt=t+60/e.rpm,this.game.weaponView.triggerFire(),this.game.audio.shot(e.audio,0,0,!0),this.game.hud.pulseAmmo();const s=this.camera.position.clone(),r=new T(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),a=new T(1,0,0).applyQuaternion(this.camera.quaternion),o=new T(0,1,0).applyQuaternion(this.camera.quaternion),l=this.getSpread(),c=Math.random()*Math.PI*2,h=Math.sqrt(Math.random())*l,d=r.clone().addScaledVector(a,Math.cos(c)*h).addScaledVector(o,Math.sin(c)*h).normalize(),u=this.game.world.raycast(s,d,150),f=this.game.botManager.getHitTargets();this.raycaster.set(s,d),this.raycaster.far=150;const g=f.length?this.raycaster.intersectObjects(f,!1):this._emptyRoom;let v=null,p=null,m=null,w="metal";for(const y of g){const L=y.object.userData.bot;if(!(!L||L.team===this.team)){(!u||y.distance<u.distance)&&(p=y,v=L,m=y.point.clone(),w="flesh");break}}m||(u?(m=u.point.clone(),w=Lv(u.collider)):m=s.clone().addScaledVector(d,120));const _=s.clone().addScaledVector(a,.16).addScaledVector(o,-.12).addScaledVector(r,.55);if(this.game.effects.muzzle(_,"#ffd49a",e.audio==="sniper"?.46:.3,!0),this.game.effects.tracer(_,m,e.tracer,e.audio==="sniper"?1.5:1),this.game.effects.shellEject(s.clone().addScaledVector(a,.24).addScaledVector(o,-.06).addScaledVector(r,.42),a,o,r),v&&v.alive){const y=p.object.userData.zone||"torso",L=y==="head"?e.headMul:y==="limb"?e.limbMul:1,R=e.damage*L,A=v.takeDamage(R,this,y==="head",e.name);this.game.effects.blood(m,d),this.hits++,this.game.hud.hitmarker(y==="head",A),this.game.audio.hit(y==="head")}else u&&this.game.effects.impact(u.point,u.normal,d,w);this.recoilPitch+=e.recoil.pitch*(.82+Math.random()*.35),this.recoilYaw+=(Math.random()-.5)*e.recoil.yaw*2,this.recoilRoll+=(Math.random()-.5)*e.recoil.pitch*.5,this.game.addShake(e.audio==="sniper"?.19:.035,.11),this.game.weaponView.setAim(this.aiming),n.mag===0&&this.startReload()}update(t){if(this.clock+=t,this.switchTimer=Math.max(0,this.switchTimer-t),this.grenadeCooldown=Math.max(0,this.grenadeCooldown-t),this.protected=Math.max(0,this.protected-t),this.invulnerable=Math.max(0,this.invulnerable-t),this.hitFlash=Math.max(0,this.hitFlash-t),!this.alive){this.deathTimer+=t,this.respawnTimer-=t;const N=Math.min(1,this.deathTimer/.9);this.currentEye=Ne.lerp(this.currentEye,.38,Math.min(1,t*4)),this.camera.position.set(this.position.x,this.position.y+this.currentEye,this.position.z),this.camera.rotation.set(-.25*N,this.yaw,N*.7),this.camera.fov=Ne.lerp(this.camera.fov,74,Math.min(1,t*2)),this.camera.updateProjectionMatrix(),this.game.weaponView.holder.visible=!1,this.game.hud.setRifleSight(!1),this.respawnTimer<=0&&this.game.state==="playing"&&this.game.respawnPlayer();return}this.enabled||(this.triggerDown=!1);const e=this.enabled&&!this.sprinting;this.triggerDown&&e&&this.currentWeapon.data.mode==="auto"&&this.fire(),this.wantShot&&e&&(this.wantShot=!1,this.currentWeapon.data.mode!=="auto"&&this.fire()),this.aiming&&(this.sprinting||this.reloadTimer>0||this.switchTimer>0)&&(this.aiming=!1,this.game.weaponView.setAim(!1)),this.adsProgress+=((this.aiming?1:0)-this.adsProgress)*Math.min(1,t*14),this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0&&(this.reloadTimer=0,this.finishReload(),this.game.hud.flashReloadComplete()));const n=Av.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),s=Cv.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));let r=0,a=0;this.enabled&&(this.keys.has("KeyW")&&(a+=1),this.keys.has("KeyS")&&(a-=1),this.keys.has("KeyD")&&(r+=1),this.keys.has("KeyA")&&(r-=1),r+=this.touchMove.x,a+=this.touchMove.y);const o=r!==0||a!==0,l=this.enabled&&(this.keys.has("ControlLeft")||this.keys.has("ControlRight")||this.keys.has("KeyC")),c=this.crouching;this.crouching=l&&this.grounded,c&&!this.crouching&&(this.currentEye=this.crouchHeight);const h=this.enabled&&(this.keys.has("ShiftLeft")||this.touchSprint)&&a>.1&&!this.aiming&&!this.crouching&&!this.reloadTimer;this.sprinting=h&&o,this.sprinting&&(this.aiming=!1);let d=4.15;this.crouching?d=2.05:this.sprinting?d=6.6:this.aiming&&this.adsProgress>.35&&(d=2.55),this.reloadTimer>0&&(d*=.9);const u=Rv.set(0,0,0);o&&(u.addScaledVector(n,a).addScaledVector(s,r),u.lengthSq()>1&&u.normalize());const f=this.grounded?35:9,g=u.x*d,v=u.z*d;if(this.velocity.x+=(g-this.velocity.x)*Math.min(1,t*f),this.velocity.z+=(v-this.velocity.z)*Math.min(1,t*f),!o&&this.grounded){const N=Math.pow(1e-4,t);this.velocity.x*=N,this.velocity.z*=N}this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.jumpRequested&&(this.jumpRequested=!1,this.grounded&&this.enabled&&(this.velocity.y=5.4,this.grounded=!1,this.game.audio.footstep(0,.55))),this.grounded||(this.velocity.y-=17.5*t),this.position.x+=this.velocity.x*t,this.resolveXZ("x"),this.position.z+=this.velocity.z*t,this.resolveXZ("z"),this.position.y+=this.velocity.y*t,this.position.y<=0&&(!this.grounded&&this.velocity.y<-3&&(this.landBump=Math.min(.055,Math.abs(this.velocity.y)*.006),this.game.audio.footstep(0,.8),this.game.addShake(.03,.12)),this.position.y=0,this.velocity.y=0,this.grounded=!0),this.position.y>.02&&(this.grounded=!1),this.landBump=Math.max(0,this.landBump-t*.4),this.grounded&&this.speed>.7&&(this.stepTimer-=t*(this.sprinting?1.55:this.crouching?.55:1),this.stepTimer<=0&&(this.stepTimer=.43,this.game.audio.footstep(0,this.sprinting?.8:this.crouching?.28:.5),this.sprinting&&this.game.addShake(.01,.08)));const p=this.crouching?this.crouchHeight:this.eyeHeight;this.currentEye+=(p-this.currentEye)*Math.min(1,t*12),this.bobPhase+=t*(this.sprinting?13:this.speed>.5?8.5:2);const m=this.grounded?this.sprinting?.032:this.speed>.4?.018:.002:0,w=Math.sin(this.bobPhase*2)*m*(this.crouching?.55:1),_=Math.cos(this.bobPhase)*m*.48*(this.aiming?.35:1),L=(this.enabled?r*-.012:0)+(this.sprinting?Math.sin(this.bobPhase)*.007:0);this.roll+=(L-this.roll)*Math.min(1,t*7);const R=Math.pow(1e-4,t*.95);this.recoilPitch*=R,this.recoilYaw*=R,this.recoilRoll*=R,this.recoilPitch=Math.max(-.15,this.recoilPitch),this.recoilYaw=Ne.clamp(this.recoilYaw,-.15,.15),this.shake>0&&(this.shake=Math.max(0,this.shake-t*(1.8+this.shakeDecay)));const A=(Math.random()-.5)*this.shake*.56,P=(Math.random()-.5)*this.shake*.56,Y=this.aiming?this.currentWeapon.data.scope?18:this.currentWeapon.data.adsFov:this.baseFov+(this.sprinting?5:0);this.currentFov+=(Y-this.currentFov)*Math.min(1,t*12),Math.abs(this.camera.fov-this.currentFov)>.01&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix()),this.camera.position.set(this.position.x+s.x*_,this.position.y+this.currentEye+w-this.landBump,this.position.z+s.z*_),this.camera.rotation.set(this.pitch+this.recoilPitch+A,this.yaw+this.recoilYaw+P,this.roll+this.recoilRoll),this.game.weaponView.setAim(this.aiming&&this.adsProgress>.5),this.game.weaponView.update(t,{moving:o,sprinting:this.sprinting,crouching:this.crouching,speed:this.speed,time:this.clock,grounded:this.grounded});const x=!!(this.currentWeapon.data.scope&&this.adsProgress>.96&&this.alive),S=!!(this.aiming&&!this.currentWeapon.data.scope&&this.adsProgress>.58&&this.alive),z=!!(this.aiming&&!this.currentWeapon.data.scope&&this.adsProgress>.32);this.switchTimer>.32||z?this.game.weaponView.holder.visible=!1:this.game.weaponView.holder.visible=!x,this.game.hud.setScope(x,this.adsProgress),this.game.hud.setRifleSight(S,this.currentWeapon.data.name)}resolveXZ(t){const e=this.game.world.colliders;for(let s=0;s<2;s++)for(let r=0;r<e.length;r++){const a=e[r];if(this.position.y+this.height<a.minY||this.position.y>a.maxY)continue;const o=Math.max(a.minX,Math.min(this.position.x,a.maxX)),l=Math.max(a.minZ,Math.min(this.position.z,a.maxZ)),c=this.position.x-o,h=this.position.z-l,d=c*c+h*h;if(!(d>=this.radius*this.radius))if(d<1e-6){const u=this.position.x-a.minX,f=a.maxX-this.position.x,g=this.position.z-a.minZ,v=a.maxZ-this.position.z,p=Math.min(u,f,g,v);p===u?this.position.x=a.minX-this.radius:p===f?this.position.x=a.maxX+this.radius:p===g?this.position.z=a.minZ-this.radius:this.position.z=a.maxZ+this.radius}else{const u=Math.sqrt(d),f=this.radius-u;this.position.x+=c/u*f,this.position.z+=h/u*f}}const n=this.game.world.mapData.bounds;this.position.x=Ne.clamp(this.position.x,n.minX+this.radius,n.maxX-this.radius),this.position.z=Ne.clamp(this.position.z,n.minZ+this.radius,n.maxZ-this.radius)}updateCamera(){this.camera.position.set(this.position.x,this.position.y+this.currentEye,this.position.z),this.camera.rotation.set(this.pitch+this.recoilPitch,this.yaw+this.recoilYaw,this.roll+this.recoilRoll)}addShake(t){this.shake=Math.min(.4,this.shake+t)}getWeaponState(){const t=this.currentWeapon;return{name:t.data.name,cn:t.data.cn,mag:t.mag,reserve:t.reserve,mode:t.data.selector,reloading:this.reloadTimer>0,reloadProgress:this.reloadTimer>0?1-this.reloadTimer/this.reloadDuration:0,slot:this.slot,grenades:this.grenades,spread:this.getSpread(),aiming:this.aiming}}}function Lv(i){return i?i.type==="crate"?"wood":i.type==="water"?"water":"metal":"metal"}const eo=new Map;function Dv(i){if(eo.has(i))return eo.get(i);const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=(()=>{let a=i==="blue"?918:471;return()=>(a=a*16807%2147483647)/2147483647})(),s=i==="blue"?["#3c4b48","#2e3b38","#4f5c55","#58645b"]:["#584a3c","#463a2e","#675947","#75644e"];e.fillStyle=s[0],e.fillRect(0,0,256,256);for(let a=0;a<75;a++){e.fillStyle=s[1+Math.floor(n()*3)],e.globalAlpha=.45+n()*.35;const o=n()*256,l=n()*256;e.beginPath(),e.ellipse(o,l,6+n()*34,3+n()*15,n()*Math.PI,0,Math.PI*2),e.fill(),o<50&&e.fillRect(o+256,l,20,8)}e.globalAlpha=1;for(let a=0;a<900;a++)e.fillStyle=n()>.5?"rgba(15,18,16,0.14)":"rgba(210,205,185,0.06)",e.fillRect(n()*256,n()*256,1,1);const r=new Xs(t);return r.colorSpace=nn,r.wrapS=r.wrapT=ds,r.repeat.set(1.6,1.6),r.anisotropy=4,eo.set(i,r),r}class Iv{constructor(){this.data=[]}push(t){const e=this.data;e.push(t);let n=e.length-1;for(;n>0;){const s=n-1>>1;if(e[s].f<=e[n].f)break;[e[s],e[n]]=[e[n],e[s]],n=s}}pop(){const t=this.data;if(!t.length)return null;const e=t[0],n=t.pop();if(t.length){t[0]=n;let s=0;for(;;){const r=s*2+1,a=r+1;let o=s;if(r<t.length&&t[r].f<t[o].f&&(o=r),a<t.length&&t[a].f<t[o].f&&(o=a),o===s)break;[t[o],t[s]]=[t[s],t[o]],s=o}}return e}get size(){return this.data.length}}class Uv{constructor(t,e,n=.38){this.colliders=t,this.bounds=e,this.radius=n,this.cell=.82,this.minX=e.minX+.3,this.maxX=e.maxX-.3,this.minZ=e.minZ+.3,this.maxZ=e.maxZ-.3,this.cols=Math.ceil((this.maxX-this.minX)/this.cell),this.rows=Math.ceil((this.maxZ-this.minZ)/this.cell),this.walkable=new Uint8Array(this.cols*this.rows),this.build()}isFree(t,e,n=this.radius){if(t<this.bounds.minX+n||t>this.bounds.maxX-n||e<this.bounds.minZ+n||e>this.bounds.maxZ-n)return!1;for(let s=0;s<this.colliders.length;s++){const r=this.colliders[s];if(r.maxY<.16)continue;const a=Math.max(r.minX,Math.min(t,r.maxX)),o=Math.max(r.minZ,Math.min(e,r.maxZ)),l=t-a,c=e-o;if(l*l+c*c<n*n)return!1}return!0}build(){for(let t=0;t<this.rows;t++)for(let e=0;e<this.cols;e++){const n=this.cellCenter(e,t);this.walkable[t*this.cols+e]=this.isFree(n.x,n.z)?1:0}}cellCenter(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}worldToCell(t,e){return{cx:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),cy:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}isWalkable(t,e){return t<0||e<0||t>=this.cols||e>=this.rows?!1:this.walkable[e*this.cols+t]===1}nearestWalkable(t,e,n=10){if(this.isWalkable(t,e))return{cx:t,cy:e};for(let s=1;s<=n;s++)for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++){if(Math.abs(a)!==s&&Math.abs(r)!==s)continue;const o=t+a,l=e+r;if(this.isWalkable(o,l))return{cx:o,cy:l}}return null}findPath(t,e){const n=this.worldToCell(t.x,t.z),s=this.worldToCell(e.x,e.z),r=this.nearestWalkable(n.cx,n.cy,8);let a=this.nearestWalkable(s.cx,s.cy,14);if(!r||!a)return[];this.isWalkable(s.cx,s.cy)||(a=this.nearestWalkable(s.cx,s.cy,14)||a);const o=r.cy*this.cols+r.cx,l=a.cy*this.cols+a.cx;if(o===l)return[{...this.cellCenter(a.cx,a.cy)}];const c=new Iv,h=new Int32Array(this.cols*this.rows).fill(-1),d=new Float32Array(this.cols*this.rows).fill(1/0),u=new Uint8Array(this.cols*this.rows);d[o]=0;const f=L=>{const R=L%this.cols,A=L/this.cols|0,P=Math.abs(R-a.cx),Y=Math.abs(A-a.cy);return(P+Y)*.7+Math.min(P,Y)*.3};c.push({idx:o,f:f(o)});const g=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];let v=!1,p=0;for(;c.size&&p++<12e3;){const L=c.pop();if(L.idx===l){v=!0;break}if(u[L.idx])continue;u[L.idx]=1;const R=L.idx%this.cols,A=L.idx/this.cols|0;for(const[P,Y,x]of g){const S=R+P,z=A+Y;if(!this.isWalkable(S,z)||P!==0&&Y!==0&&(!this.isWalkable(R+P,A)||!this.isWalkable(R,A+Y)))continue;const N=z*this.cols+S;if(u[N])continue;const G=d[L.idx]+x;G<d[N]&&(d[N]=G,h[N]=L.idx,c.push({idx:N,f:G+f(N)}))}}if(!v)return[];const m=[];let w=l,_=0;for(;w!==o&&w!==-1&&_++<4e3;)m.push(w),w=h[w];m.reverse();const y=m.map(L=>{const R=L%this.cols,A=L/this.cols|0;return this.cellCenter(R,A)});return this.smoothPoints(t,y)}smoothPoints(t,e){if(!e.length)return e;const n=[];let s={x:t.x,z:t.z},r=0;for(;r<e.length;){let a=r;for(let o=Math.min(e.length-1,r+12);o>r;o--)if(this.lineFree(s,e[o])){a=o;break}n.push(e[a]),s=e[a],r=a+1}return n}lineFree(t,e){const n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s),a=Math.max(1,Math.ceil(r/.38));for(let o=1;o<=a;o++){const l=o/a;if(!this.isFree(t.x+n*l,t.z+s*l,this.radius-.02))return!1}return!0}randomPointNear(t,e,n=6){for(let s=0;s<30;s++){const r=Math.random()*Math.PI*2,a=Math.random()*n,o=t+Math.cos(r)*a,l=e+Math.sin(r)*a;if(this.isFree(o,l))return{x:o,z:l}}return{x:t,z:e}}objectivePoints(){return[{x:0,z:0},{x:-10,z:3},{x:10,z:-3},{x:-12,z:12},{x:12,z:-12},{x:-6,z:20},{x:6,z:-20},{x:0,z:9},{x:0,z:-9},{x:-13,z:-18},{x:13,z:18},{x:8,z:7},{x:-8,z:-7}].filter(t=>this.isFree(t.x,t.z))}}function en(i,t,e,n=.18){return new gl(i,t,e,2,Math.min(i,t,e)*n)}function Nv(i){const t=i==="blue",e=t?"#477b7b":"#8e4b36",n=t?"#8f7261":"#896a58",s=Dv(i);return{cloth:new Ft({map:s,color:"#c9c9bf",roughness:.92,metalness:.02}),clothDark:new Ft({map:s,color:"#9fa097",roughness:.95,metalness:.02}),vest:new Ft({map:s,color:"#b4b6aa",roughness:.8,metalness:.04}),accent:new Ft({color:e,roughness:.78,metalness:.05}),accentGlow:new Ft({color:e,emissive:e,emissiveIntensity:.06,roughness:.62,metalness:.06}),helmet:new Ft({map:s,color:t?"#9fa7a0":"#c0ac92",roughness:.7,metalness:.12}),mask:new Ft({color:"#242924",roughness:.88}),skin:new Ft({color:n,roughness:.78}),glove:new Ft({color:"#25291f",roughness:.92}),boot:new Ft({color:"#1b1b17",roughness:.9}),goggle:new Ft({color:"#28494b",metalness:.55,roughness:.18,envMapIntensity:1.2}),metal:new Ft({color:"#333936",metalness:.7,roughness:.42})}}function Re(i,t,e,n,s,r){const a=new ut(i,t);return a.position.set(e,n,s),a.castShadow=!0,a.receiveShadow=!0,r.add(a),a}const Fv={blue:[{name:"白鲨",weapon:"M4A1",dmg:10,rpm:650,skill:1.04,color:"#67abaa"},{name:"山猫",weapon:"AK-47",dmg:12,rpm:570,skill:.96,color:"#8cbdb8"},{name:"夜莺",weapon:"M4A1",dmg:9,rpm:700,skill:1,color:"#5f9a9a"}],red:[{name:"毒蜂",weapon:"AK-47",dmg:12,rpm:590,skill:1.05,color:"#c2684c"},{name:"渡鸦",weapon:"M4A1",dmg:10,rpm:680,skill:1.1,color:"#a55039"},{name:"铁面",weapon:"AK-47",dmg:12,rpm:560,skill:.94,color:"#d07955"},{name:"灰狼",weapon:"M4A1",dmg:10,rpm:630,skill:.99,color:"#bb5d42"}]};class Ov{constructor(t,e,n,s){this.game=t,this.team=e,this.name=n.name,this.weaponLabel=n.weapon,this.baseDamage=n.dmg,this.rpm=n.rpm,this.skill=n.skill,this.index=s,this.isPlayer=!1,this.position=new T,this.velocity=new T,this.health=100,this.maxHealth=100,this.alive=!1,this.respawnTime=0,this.protected=0,this.yaw=e==="blue"?0:Math.PI,this.targetYaw=this.yaw,this.eyeHeight=1.55,this.radius=.36,this.target=null,this.visibleTarget=!1,this.kills=0,this.deaths=0,this.recentlyFired=0,this.lastKnown=new T,this.lastSeenAt=-99,this.thinkTimer=Math.random()*.25,this.aimDelay=.4,this.fireTimer=0,this.burstLeft=0,this.burstCount=0,this.ammo=30,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=0,this.path=[],this.pathIndex=0,this.pathTimer=0,this.destination=null,this.stuckTimer=0,this.prevPosition=new T,this.reloadTimer=0,this.ammo=30,this.hitMeshes=[],this.hitFlashTimer=0,this.walkPhase=Math.random()*10,this.deathTime=0,this.lastDamageFrom=null,this.lookTarget=new T,this.mats=Nv(e),this.buildModel(),this.spawn(0)}buildModel(){const t=this.mats;this.root=new Vt,this.root.name=`bot-${this.name}`,this.fallRoot=new Vt,this.root.add(this.fallRoot);const e=Re(en(.38,.2,.25,.3),t.clothDark,0,.92,0,this.fallRoot);e.userData.zone="torso",this.hitMeshes.push(e);const n=new Vt;n.position.y=1.04,this.fallRoot.add(n),this.torso=n;const s=Re(en(.42,.47,.26,.3),t.cloth,0,.15,0,n);s.userData.zone="torso",this.hitMeshes.push(s);const r=Re(en(.45,.38,.32,.22),t.vest,0,.15,.01,n);r.userData.zone="torso",this.hitMeshes.push(r);for(const x of[-.14,0,.14]){const S=Re(en(.12,.14,.06,.3),t.vest,x,.03,.2,n);S.userData.zone="torso",this.hitMeshes.push(S)}const a=Re(en(.1,.15,.055,.2),t.metal,-.2,.26,-.145,n);a.userData.zone="torso",this.hitMeshes.push(a);const o=Re(new ee(.006,.006,.34,4),t.metal,-.2,.49,-.145,n);o.castShadow=!1;const l=Re(en(.13,.11,.2,.3),t.accent,-.27,.33,0,n);l.userData.zone="limb",this.hitMeshes.push(l);const c=Re(en(.13,.11,.2,.3),t.accent,.27,.33,0,n);c.userData.zone="limb",this.hitMeshes.push(c);const h=Re(new Ee(.09,.03,.012),t.accentGlow,.18,.36,.18,n);h.castShadow=!1;const d=Re(new ee(.065,.075,.1,8),t.skin,0,.49,0,n);d.userData.zone="head",this.hitMeshes.push(d);const u=new Vt;u.position.y=.61,n.add(u);const f=Re(new gn(.132,12,10),t.mask,0,0,0,u);f.userData.zone="head",this.hitMeshes.push(f);const g=Re(new gn(.163,14,10,0,Math.PI*2,0,Math.PI*.58),t.helmet,0,.03,-.006,u);g.userData.zone="head",this.hitMeshes.push(g);const v=Re(en(.31,.04,.25,.3),t.helmet,0,.084,-.028,u);v.userData.zone="head",this.hitMeshes.push(v);const p=Re(new Ee(.215,.05,.038),t.goggle,0,.017,.12,u);p.userData.zone="head",this.hitMeshes.push(p);const m=Re(en(.2,.1,.06,.3),t.mask,0,-.075,.12,u);m.userData.zone="head",this.hitMeshes.push(m);const w=Re(new ee(.05,.05,.032,10),t.metal,-.145,.012,0,u).rotateZ(Math.PI/2);w.userData.zone="head",this.hitMeshes.push(w);const _=Re(en(.32,.4,.16,.3),t.clothDark,0,.19,-.21,n);_.userData.zone="torso",this.hitMeshes.push(_),_.rotation.x=-.04;const y=x=>{const S=new Vt;S.position.set(x*.265,1.42,.01),S.rotation.set(-1.12,0,x*-.25),this.fallRoot.add(S);const z=Re(en(.1,.33,.115,.3),t.cloth,0,-.155,0,S);z.userData.zone="limb",this.hitMeshes.push(z);const N=new Vt;N.position.y=-.32,N.rotation.x=.9,S.add(N);const G=Re(en(.087,.3,.1,.3),t.cloth,0,-.145,0,N);G.userData.zone="limb",this.hitMeshes.push(G);const K=Re(new gn(.075,8,6),t.vest,0,.01,.02,N);K.userData.zone="limb",this.hitMeshes.push(K);const B=Re(en(.085,.09,.1,.3),t.glove,0,-.32,0,N);return B.userData.zone="limb",this.hitMeshes.push(B),{pivot:S,elbow:N}};this.armL=y(-1),this.armR=y(1),this.armL.pivot.position.x=-.245,this.armR.pivot.position.x=.235,this.armL.pivot.rotation.z=.38,this.armR.pivot.rotation.z=-.18,this.rifle=_v(),this.rifle.position.set(.16,1.24,-.34),this.rifle.rotation.set(-.04,.02,.02),this.fallRoot.add(this.rifle);const L=x=>{const S=new Vt;S.position.set(x*.13,.9,0),this.fallRoot.add(S);const z=Re(en(.17,.42,.2,.32),t.cloth,0,-.2,0,S);z.userData.zone="limb",this.hitMeshes.push(z);const N=new Vt;N.position.y=-.41,S.add(N);const G=Re(new gn(.085,8,6),t.vest,0,.02,.06,N);G.userData.zone="limb",this.hitMeshes.push(G);const K=Re(en(.145,.42,.165,.3),t.clothDark,0,-.22,0,N);K.userData.zone="limb",this.hitMeshes.push(K);const B=Re(en(.165,.15,.28,.3),t.boot,0,-.47,.05,N);return B.userData.zone="limb",this.hitMeshes.push(B),{hip:S,knee:N}};this.legL=L(-1),this.legR=L(1);const R=ov(this.name,this.team),A=new oi({map:R,transparent:!0,depthWrite:!1,depthTest:!0});this.nameTag=new li(A),this.nameTag.position.set(0,2.19,0),this.nameTag.scale.set(1.22,.305,1),this.nameTag.visible=this.team==="blue",this.root.add(this.nameTag);const P=new oi({color:"#111614",transparent:!0,opacity:.7,depthWrite:!1,depthTest:!1});this.healthBarBg=new li(P),this.healthBarBg.position.set(0,2.025,0),this.healthBarBg.scale.set(.72,.035,1),this.healthBarBg.visible=!1,this.root.add(this.healthBarBg);const Y=new oi({color:this.team==="blue"?"#68aba9":"#b34f37",depthWrite:!1,depthTest:!1});this.healthBar=new li(Y),this.healthBar.position.set(0,2.025,0),this.healthBar.scale.set(.68,.022,1),this.healthBar.visible=!1,this.root.add(this.healthBar);for(const x of this.hitMeshes)x.userData.bot=this;this.root.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),this.muzzleFlash=this.rifle.userData.flash,this.muzzle=this.rifle.userData.muzzle}spawn(t=1.6){const e=this.game.spawns[this.team];let n=e[0],s=-1/0;for(const r of e){let a=Math.random()*4+Math.abs(r.z-this.position.z)*.02;for(const o of this.game.getCombatants(this.team,!1)){if(o===this||!o.alive)continue;Math.hypot(o.position.x-r.x,o.position.z-r.z)<1.2&&(a-=10)}a>s&&(s=a,n=r)}this.position.set(n.x+(Math.random()-.5)*.8,0,n.z+(Math.random()-.5)*.8),this.velocity.set(0,0,0),this.yaw=this.targetYaw=this.team==="blue"?0:Math.PI,this.health=this.maxHealth,this.alive=!0,this.protected=t,this.respawnTime=0,this.deathTime=0,this.target=null,this.visibleTarget=!1,this.path=[],this.pathIndex=0,this.destination=null,this.reloadTimer=0,this.ammo=30,this.burstLeft=0,this.fireTimer=.2+Math.random()*.4,this.hitFlashTimer=0,this.rifle.userData.flash.visible=!1,this.fallRoot.rotation.x=0,this.fallRoot.position.y=0,this.root.rotation.set(0,this.yaw,0),this.root.visible=!0,this.nameTag.visible=this.team==="blue",this.healthBar.visible=this.team==="blue",this.healthBarBg.visible=this.team==="blue",this.healthBar.scale.x=.82,this.game.scene.add(this.root)}getEyePosition(t=new T){return t.set(this.position.x,this.position.y+this.eyeHeight,this.position.z)}getChestPosition(t=new T){return t.set(this.position.x,this.position.y+1.16,this.position.z)}getTargetPoint(t=new T){return t.set(this.position.x,this.position.y+1.1,this.position.z)}getSpeed(){return this.velocity.length()}think(){const t=this.game,e=this.getEyePosition(),n=t.getCombatants(this.team,!0);let s=null,r=-1/0;new T(-Math.sin(this.yaw),0,-Math.cos(this.yaw));for(const a of n){if(!a.alive)continue;const l=a.getTargetPoint(new T).clone().sub(e),c=l.length();if(c>42||zv(this.yaw,l)<-.25&&c>7&&a!==this.lastDamageFrom)continue;const d=a.getTargetPoint(new T),u=a.isPlayer?a.getEyePosition(new T):new T(a.position.x,a.position.y+1.7,a.position.z);let f=t.world.pointVisible(e,d);if(f||(f=t.world.pointVisible(e,u)),!f)continue;let g=30-c;a===this.target&&(g+=4),a===this.lastDamageFrom&&(g+=15),a.isPlayer&&(g+=2.7),a.isPlayer&&c<14&&(g+=1.5),g>r&&(r=g,s=a)}if(this.visibleTarget=!!s,s?(this.target=s,this.lastKnown.copy(s.position),this.lastSeenAt=performance.now()/1e3,this.aimDelay<=0&&(this.aimDelay=.28+Math.random()*.38)):this.target&&!this.target.alive&&(this.target=null),!s){const a=performance.now()/1e3;this.target&&a-this.lastSeenAt<3.4?(!this.path.length||this.pathTimer<=0)&&this.planPath(this.lastKnown):this.chooseAdvance()}}chooseAdvance(){const t=this.game,e=t.nav.objectivePoints();let n;const s=t.getCombatants(this.team,!0).filter(r=>r.alive);if(s.length&&Math.random()>.3){const r=s[Math.floor(Math.random()*s.length)];n=t.nav.randomPointNear(r.position.x,r.position.z,4.5)}else e.length?n=e[Math.floor(Math.random()*e.length)]:n={x:0,z:this.team==="blue"?-18:18};s.length||(n.z+=this.team==="blue"?-8:8),this.planPath(n)}planPath(t){this.destination=Bv(t,this.game.world.mapData.bounds);const e=this.game.nav.findPath(this.position,this.destination);this.path=e,this.pathIndex=0,this.pathTimer=1.7+Math.random()*1.4}takeDamage(t,e,n=!1,s="M4A1"){return!this.alive||this.protected>0?!1:(this.health-=t,this.lastDamageFrom=e,this.hitFlashTimer=.1,e&&e.position&&(this.lastKnown.copy(e.position),this.lastSeenAt=performance.now()/1e3),this.game.onBotDamaged(this,e,t,n),this.health<=0?(this.die(e,n,s),!0):!1)}die(t,e,n){this.alive&&(this.alive=!1,this.health=0,this.deathTime=0,this.respawnTime=4.2,this.velocity.set(0,0,0),this.path=[],this.nameTag.visible=!1,this.healthBar.visible=!1,this.healthBarBg.visible=!1,this.target=null,this.game.onBotKilled(this,t,e,n))}update(t){if(this.recentlyFired=Math.max(0,this.recentlyFired-t),!this.alive){if(this.root.visible){this.deathTime+=t;const c=Math.min(1,this.deathTime/.55),h=1-Math.pow(1-c,3);this.fallRoot.rotation.x=-h*1.38,this.fallRoot.position.y=-h*.08,this.deathTime>3.3&&(this.root.visible=!1)}this.respawnTime-=t,this.respawnTime<=0&&this.spawn();return}this.protected=Math.max(0,this.protected-t),this.aimDelay=Math.max(0,this.aimDelay-t),this.reloadTimer=Math.max(0,this.reloadTimer-t),this.strafeTimer-=t,this.thinkTimer-=t,this.thinkTimer<=0&&(this.thinkTimer=.32+Math.random()*.25,this.think()),this.strafeTimer<=0&&(this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=.8+Math.random()*1.2);let e=0,n=0,s=0;if(this.visibleTarget&&this.target&&this.target.alive){const c=this.target.getTargetPoint(new T),h=c.x-this.position.x,d=c.z-this.position.z,u=Math.hypot(h,d),f=Math.atan2(-h,-d);this.targetYaw=f;const g=h/(u||1),v=d/(u||1),p=-v*this.strafeDir,m=g*this.strafeDir;let w=0;u>19?w=1:u<7?w=-.7:w=.08,e=p*.85+g*w,n=m*.85+v*w,s=2.25,this.game.nav.isFree(this.position.x+e*.7,this.position.z+n*.7,.34)||(this.strafeDir*=-1,e=-p*.8+g*w,n=-m*.8+v*w,this.game.nav.isFree(this.position.x+e*.7,this.position.z+n*.7,.34)||(e=0,n=0)),this.reloadTimer<=0&&this.aimDelay<=0&&this.fireTimer<=0&&this.fire(c)}else if(this.pathTimer>0&&(this.pathTimer-=t),(!this.path.length||this.pathIndex>=this.path.length)&&this.pathTimer<=0&&this.chooseAdvance(),this.pathIndex<this.path.length){const c=this.path[this.pathIndex],h=c.x-this.position.x,d=c.z-this.position.z,u=Math.hypot(h,d);u<.55?this.pathIndex++:(e=h/u,n=d/u,s=this.pathIndex>1?3.1:2.7,this.targetYaw=Math.atan2(-e,-n))}else this.targetYaw=this.yaw+t*.3;let a=0,o=0;for(const c of this.game.getAllCombatants()){if(c===this||!c.alive)continue;const h=this.position.x-c.position.x,d=this.position.z-c.position.z,u=h*h+d*d;if(u>1e-4&&u<1.15){const f=Math.sqrt(u);a+=h/f,o+=d/f}}e+=a*.6,n+=o*.6;const l=Math.hypot(e,n);if(l>1e-4){e=e/l*Math.min(1,l),n=n/l*Math.min(1,l);const c=this.position.x+e*s*t,h=this.position.z+n*s*t;this.game.nav.isFree(c,this.position.z,.32)&&(this.position.x=c),this.game.nav.isFree(this.position.x,h,.32)&&(this.position.z=h),this.velocity.set(e*s,0,n*s)}else this.velocity.multiplyScalar(Math.pow(.001,t));this.yaw=kv(this.yaw,this.targetYaw,1-Math.pow(1e-4,t)),this.root.position.set(this.position.x,0,this.position.z),this.root.rotation.y=this.yaw,this.animate(t),this.updateTag(),Math.random()<t*.8&&this.hitFlashTimer>0&&(this.thinkTimer=Math.min(this.thinkTimer,.12)),this.hitFlashTimer>0&&(this.hitFlashTimer-=t),this.fireTimer=Math.max(0,this.fireTimer-t),this.root.updateMatrixWorld(!0)}animate(t){const e=this.velocity.lengthSq()>.1,n=Math.min(1.5,this.velocity.length()/2.5);this.walkPhase+=t*(e?8.2*Math.max(.7,n):1.4);const s=e?Math.sin(this.walkPhase)*.6*n:Math.sin(this.walkPhase*.5)*.02;this.legL.hip.rotation.x=s,this.legR.hip.rotation.x=-s,this.legL.knee.rotation.x=Math.max(0,-s)*.8,this.legR.knee.rotation.x=Math.max(0,s)*.8;const r=e?Math.abs(Math.cos(this.walkPhase))*.024:Math.sin(this.walkPhase*.6)*.003;if(this.fallRoot.position.y=r,this.torso.rotation.x=this.visibleTarget?-.08:e?.05:0,this.torso.rotation.y=this.visibleTarget?0:Math.sin(this.walkPhase*.3)*.02,this.rifle.position.z=-.34+(this.hitFlashTimer>0?.04:0),this.hitFlashTimer>0?this.rifle.rotation.z=.04+Math.random()*.02:this.rifle.rotation.z+=(.02-this.rifle.rotation.z)*Math.min(1,t*8),this.muzzleFlash.visible&&(this.muzzleFlash.material.rotation=Math.random()*6),!this.visibleTarget){const a=Math.sin(this.walkPhase*.16)*.15;this.root.rotation.y=this.yaw+a}}updateTag(){if(this.team!=="blue")return;const t=Math.max(0,this.health/this.maxHealth),e=t<.995&&this.alive;this.healthBar.visible=e,this.healthBarBg.visible=e,this.healthBar.scale.x=.68*t,this.healthBar.position.x=-.34*(1-t),this.healthBar.material.color.setHex(t>.5?6859689:t>.25?12688197:11751223)}fire(t){if(this.ammo<=0){this.reloadTimer=1.8+Math.random()*.5,this.ammo=30;return}if(this.burstLeft<=0){if(this.burstCount++,this.burstCount>4){this.burstCount=0,this.reloadTimer=1.2+Math.random()*.8,this.ammo=30;return}this.burstLeft=3+Math.floor(Math.random()*4)}this.burstLeft--,this.ammo--,this.recentlyFired=2.2,this.fireTimer=60/this.rpm;const e=new T;this.muzzle.getWorldPosition(e);const n=this.target.getTargetPoint(new T),s=n.distanceTo(this.position),r=this.target.velocity?this.target.velocity.length():0;let a=(.62-s*.0115)*this.skill;this.target.isPlayer&&(a*=.82),r>3?a*=.78:r>1&&(a*=.9),this.target.crouching&&(a*=.93),this.target.isPlayer&&this.target.speed>4.5&&(a*=.84),a=Ne.clamp(a,.1,.72),this.game.difficulty==="veteran"&&(a*=1.2);const l=Math.random()<a,c=l&&Math.random()<.075,h=this.baseDamage*(c?1.72:1)*(this.game.difficulty==="veteran"?1.15:1),d=c?new T(this.target.position.x,this.target.position.y+1.65,this.target.position.z):n.clone(),u=n.clone();l||(u.x+=(Math.random()-.5)*(1.2+s*.055),u.y+=(Math.random()-.5)*1,u.z+=(Math.random()-.5)*1.2);const f=(l?d:u).clone(),g=f.clone().sub(e).normalize();this.game.effects.muzzle(e,"#ffd49c",.24,!1),this.muzzleFlash.visible=!0,setTimeout(()=>{this.muzzleFlash&&(this.muzzleFlash.visible=!1)},38);const v=this.game.world.raycast(e,g,s+8),p=v&&v.distance<f.distanceTo(e)?v.point.clone():f.clone();this.game.effects.tracer(e,p,"#ffd09a",.75);const m=this.game.audioPanFor(this.position),w=this.game.player&&this.game.player.alive?this.position.distanceTo(this.game.player.position):40;this.game.audio.shot(this.weaponLabel==="AK-47"?"ak":"rifle",m,w,!1),l?(this.target.isPlayer?(this.game.player.takeDamage(h,this,c),this.game.audio.hit(c)):this.target.takeDamage(h,this,c,this.weaponLabel),this.game.effects.blood(l?d:p,g)):(this.target.isPlayer&&this.game.player.alive&&p.distanceTo(this.game.player.getEyePosition(new T))<3.2&&this.game.audio.whiz(m),v&&this.game.effects.impact(v.point,v.normal,g,Vv(v.collider)))}}function zv(i,t){const e=-Math.sin(i),n=-Math.cos(i),s=Math.hypot(t.x,t.z)||1;return(t.x*e+t.z*n)/s}function Bv(i,t){return{x:Math.max(t.minX+.5,Math.min(t.maxX-.5,i.x)),z:Math.max(t.minZ+.5,Math.min(t.maxZ-.5,i.z))}}function kv(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}function Vv(i){return i?i.type==="crate"?"wood":i.type==="water"?"water":"metal":"metal"}class Hv{constructor(t){this.game=t,t.botManager=this,this.nav=new Uv(t.world.colliders,t.world.mapData.bounds),t.nav=this.nav,this.bots=[];for(const e of["blue","red"])Fv[e].forEach((n,s)=>{const r=new Ov(t,e,n,s);this.bots.push(r)})}update(t){for(const e of this.bots)e.update(t)}getHitTargets(){const t=[];for(const e of this.bots)if(e.alive)for(const n of e.hitMeshes)t.push(n);return t}getAlive(t){return this.bots.filter(e=>e.alive&&(!t||e.team===t))}reset(){for(const t of this.bots)t.respawnTime=0,t.alive=!1,t.spawn(.6)}}const Nc={sensitivity:1,volume:.7,quality:"high",difficulty:"normal",primary:"m4a1"},Gv={m4a1:{damage:62,rate:84,control:88},ak47:{damage:79,rate:70,control:59},awm:{damage:100,rate:24,control:48},deagle:{damage:86,rate:38,control:52}},Wv={normal:"反应略慢，适合首次登船。敌方命中率与开火节奏保持在可读范围。",veteran:"老兵会更快锁定目标，也更懂得保持距离。利用货箱遮挡，别在开阔处停留。"},Xv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new st(1,1)},uVignette:{value:.42},uGrain:{value:.024}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uVignette;
    uniform float uGrain;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(443.897, 441.423));
      p += dot(p, p.yx + 19.19);
      return fract((p.x + p.y) * p.x);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);

      // deliberately faint chromatic separation for an optical-lens feel
      vec2 ca = centered * r2 * 0.0045;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - ca).b;

      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      // cool salt-green shadows, warm highlights
      col = mix(vec3(luma), col, 1.055);
      col *= mix(vec3(0.91, 0.985, 0.985), vec3(1.045, 1.005, 0.955), smoothstep(0.08, 0.85, luma));
      col = (col - 0.5) * 1.045 + 0.5;

      // gentle filmic vignette
      float vig = smoothstep(0.98, 0.18, sqrt(r2) * 1.42);
      col *= mix(1.0, 0.7, (1.0 - vig) * uVignette);

      // grain, kept out of the absolute blacks
      float grain = hash(uv * uResolution + uTime * 69.0) - 0.5;
      col += grain * uGrain * smoothstep(0.015, 0.18, luma);

      // very subtle teal lift in the shadows
      col += vec3(-0.002, 0.003, 0.004) * (1.0 - smoothstep(0.0, 0.3, luma));
      gl_FragColor = vec4(col, 1.0);
    }
  `};function qv(){try{const i=JSON.parse(localStorage.getItem("t09-settings")||"{}");return{...Nc,...i}}catch{return{...Nc}}}function Us(i){try{localStorage.setItem("t09-settings",JSON.stringify(i))}catch{}}const Fc=i=>new Promise(t=>setTimeout(t,i)),Si=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)));class Yv{constructor(t){this.canvas=t,this.settings=qv(),window.matchMedia?.("(pointer: coarse)").matches&&!localStorage.getItem("t09-settings")&&(this.settings.quality="low"),this.difficulty=this.settings.difficulty==="veteran"?"veteran":"normal",this.primaryChoice=Zs[this.settings.primary]?this.settings.primary:"m4a1",this.state="loading",this.ready=!1,this.score={blue:0,red:0},this.scoreLimit=30,this.matchDuration=300,this.timeRemaining=this.matchDuration,this.elapsed=0,this.cinematicTime=0,this.matchEnding=!1,this.scoreEndScheduled=!1,this.finalMinuteShown=!1,this.lastFrame=performance.now(),this.grenades=[],this.scoreboardOpen=!1,this.touchMode=!1,this.touchAimHeld=!1,this.pointerLocked=!1,this.toastTimer=0,this.lastPlayerKillAt=-99,this.playerKillChain=0,this.spawns={blue:[{x:0,z:27.1},{x:-5.6,z:25.8},{x:5.2,z:25.5},{x:-2.4,z:22.2},{x:2.9,z:22.3}],red:[{x:0,z:-27.1},{x:5.6,z:-25.8},{x:-5.2,z:-25.5},{x:2.4,z:-22.2},{x:-2.9,z:-22.3}]},this.dom={},this.loop=this.loop.bind(this)}async init(){this.cacheDom(),this.setLoading(3,"建立战场链路"),await Si();const t=document.fonts?.ready||Promise.resolve();await Promise.race([t,Fc(2200)]),this.setLoading(12,"解析甲板结构"),await Si(),this.setupRenderer(),this.setLoading(22,"装载钢板与货柜材质"),await Si(),this.world=fv(this.scene,this.renderer,this.settings.quality==="low"?"low":"high"),this.setLoading(58,"布置运输船甲板"),await Si(),this.weaponView=new yv,this.weaponView.scene.environment=this.world.env,this.weaponView.scene.environmentIntensity=.55,this.weaponView.resize(window.innerWidth/window.innerHeight),this.effects=new wv(this.scene,this.camera,{onShake:e=>this.addShake(e)}),this.audio=new bv,this.audio.volume=this.settings.volume,this.hud=new Tv(this),this.setLoading(72,"校准武器与命中判定"),await Si(),this.player=new Pv(this),this.player.beginLoadout(this.primaryChoice,!0),this.player.resetAtSpawn(this.spawns.blue[0],0),this.setLoading(84,"部署敌方小队"),await Si(),this.botManager=new Hv(this);for(const e of this.botManager.bots)e.root.visible=!1;this.setLoading(92,"准备战术照明与海况"),await Si(),this.setupPost(),this.bindUI(),this.bindInput(),this.applySettingsToUI(),this.applyQuality(),this.setupCinematic(),this.renderer.compile(this.scene,this.camera),this.setLoading(100,"甲板已就绪"),await Fc(280),this.ready=!0,this.state="briefing",this.hud.hide(),this.dom.loading.classList.add("is-hidden"),this.dom.loading.setAttribute("aria-hidden","true"),window.setTimeout(()=>{this.dom.loading&&(this.dom.loading.style.display="none")},1050),this.clock=performance.now(),this.lastFrame=performance.now(),requestAnimationFrame(this.loop)}cacheDom(){const t=e=>document.querySelector(e);this.dom={loading:t("#loading"),loadingBar:t("#loading-bar"),loadingPercent:t("#loading-percent"),loadingStatus:t("#loading-status"),briefing:t("#briefing"),deployBtn:t("#deploy-btn"),pause:t("#pause"),resumeBtn:t("#resume-btn"),abandonBtn:t("#abandon-btn"),matchEnd:t("#match-end"),playAgain:t("#play-again"),toBriefing:t("#to-briefing"),sensitivity:t("#sensitivity"),sensitivityValue:t("#sensitivity-value"),volume:t("#volume"),volumeValue:t("#volume-value"),touchUi:t("#touch-ui"),toast:t("#toast"),sbBlueScore:t("#sb-blue-score"),sbRedScore:t("#sb-red-score")}}setupRenderer(){this.renderer=new rg({canvas:this.canvas,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});const t=Math.min(window.devicePixelRatio||1,this.settings.quality==="low"?1:1.7);this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=nn,this.renderer.toneMapping=$o,this.renderer.toneMappingExposure=1.24,this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=zc,this.renderer.setClearColor("#a9bac0",1),this.scene=new _h,this.camera=new fn(58,window.innerWidth/window.innerHeight,.05,720),this.camera.rotation.order="YXZ",this.camera.position.set(7.2,2.8,21.5)}setupPost(){this.composer=new Zg(this.renderer),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(window.innerWidth,window.innerHeight),this.renderPass=new Lc(this.scene,this.camera),this.composer.addPass(this.renderPass),this.weaponPass=new Lc(this.weaponView.scene,this.weaponView.camera),this.weaponPass.clear=!1,this.weaponPass.clearDepth=!0,this.weaponPass.enabled=!1,this.composer.addPass(this.weaponPass),this.bloomPass=new vs(new st(window.innerWidth,window.innerHeight),.31,.72,1.02),this.bloomPass.enabled=this.settings.quality!=="low",this.composer.addPass(this.bloomPass),this.gradePass=new Yo(Xv),this.gradePass.material.uniforms.uResolution.value.set(window.innerWidth*this.renderer.getPixelRatio(),window.innerHeight*this.renderer.getPixelRatio()),this.composer.addPass(this.gradePass),this.outputPass=new jg,this.composer.addPass(this.outputPass),this.fxaaPass=new Yo(Qg),this.fxaaPass.material.uniforms.resolution.value.set(1/(window.innerWidth*this.renderer.getPixelRatio()),1/(window.innerHeight*this.renderer.getPixelRatio())),this.composer.addPass(this.fxaaPass)}setupCinematic(){this.cinematicTime=0,this.camera.fov=58,this.camera.updateProjectionMatrix(),this.camera.position.set(8.2,2.9,22.2),this.camera.lookAt(-1.4,1.25,-1),this.world.updateSkyCamera(this.camera),this.weaponPass.enabled=!1}updateCinematic(t){this.cinematicTime+=t;const e=this.cinematicTime,n=(Math.sin(e*.055-1.2)+1)*.5,s=8.5-n*2.7+Math.sin(e*.23)*.16,r=2.55+Math.sin(e*.31)*.055,a=22.4-n*4.6+Math.cos(e*.19)*.18;this.camera.position.set(s,r,a);const o=-1.2+Math.sin(e*.11)*1.3,l=1.22+Math.cos(e*.27)*.1,c=-2.5+Math.cos(e*.13)*2.8;this.camera.lookAt(o,l,c),this.camera.rotation.z=Math.sin(e*.17)*.0035,this.weaponPass.enabled=!1,this.hud.hide()}loop(t){const e=(t-this.lastFrame)/1e3;this.lastFrame=t;const n=Math.min(.045,Math.max(.001,e));this.elapsed+=n,this.world.update(n,this.elapsed),this.world.updateSkyCamera(this.camera),this.state==="playing"?this.updateMatch(n):this.state==="briefing"?this.updateCinematic(n):this.state==="paused"||this.state,this.state==="playing"?(this.effects.update(n),this.updateGrenades(n),this.hud.update(n)):this.state==="paused"&&this.effects.update(n*.1),this.toastTimer>0&&(this.toastTimer-=n,this.toastTimer<=0&&this.dom.toast.classList.remove("show")),this.weaponPass.enabled=this.state==="playing"||this.state==="paused"&&this.player?.alive,this.composer.render(),requestAnimationFrame(this.loop)}updateMatch(t){if(this.timeRemaining=Math.max(0,this.timeRemaining-t),!this.finalMinuteShown&&this.timeRemaining<=60&&(this.finalMinuteShown=!0,this.hud.showEvent("最后六十秒","FINAL MINUTE / HOLD THE DECK","amber")),this.timeRemaining<=0&&!this.matchEnding){this.endMatch("time");return}this.botManager.update(t),this.player.update(t),this.player.alive&&this.player.protected>0,this.hud.root.classList.toggle("final-minute",this.timeRemaining<=60&&this.timeRemaining>0),this.player.alive&&this.player.protected>0,this.player.alive||(this.weaponView.holder.visible=!1)}addShake(t){this.state==="playing"&&this.player?.alive&&this.player.addShake(t)}audioPanFor(t){const e=this.player;if(!e||!t)return 0;const n=t.x-e.position.x,s=t.z-e.position.z,r=Math.hypot(n,s),a=Math.cos(e.yaw),o=-Math.sin(e.yaw),l=n*a+s*o;return Ne.clamp(l/Math.max(5,r),-.9,.9)}setLoading(t,e){this.dom.loadingBar.style.width=`${t}%`,this.dom.loadingPercent.textContent=String(Math.round(t)).padStart(2,"0"),this.dom.loadingStatus.textContent=e}showToast(t,e=2.8){this.dom.toast.textContent=t,this.dom.toast.classList.add("show"),this.toastTimer=e}bindUI(){const t=e=>document.querySelector(e);this.dom.deployBtn.addEventListener("click",()=>this.startMatch()),document.querySelector("#mobile-deploy")?.addEventListener("click",()=>this.startMatch()),this.dom.resumeBtn.addEventListener("click",()=>this.resumeGame()),this.dom.abandonBtn.addEventListener("click",()=>this.returnToBriefing()),this.dom.playAgain.addEventListener("click",()=>this.startMatch()),this.dom.toBriefing.addEventListener("click",()=>this.returnToBriefing()),document.querySelectorAll(".weapon-option").forEach(e=>{e.addEventListener("click",()=>{this.primaryChoice=e.dataset.weapon,this.settings.primary=this.primaryChoice,Us(this.settings),this.updateLoadoutUI(),this.audio.uiTone(660,.012)})}),document.querySelectorAll("[data-difficulty]").forEach(e=>{e.addEventListener("click",()=>{this.difficulty=e.dataset.difficulty,this.settings.difficulty=this.difficulty,Us(this.settings),this.updateDifficultyUI(),this.audio.uiTone(560,.012)})}),document.querySelectorAll("[data-quality]").forEach(e=>{e.addEventListener("click",()=>{this.settings.quality=e.dataset.quality,Us(this.settings),this.applyQuality(),this.applySettingsToUI(),this.audio.uiTone(720,.012)})}),this.dom.sensitivity.addEventListener("input",()=>{this.settings.sensitivity=parseFloat(this.dom.sensitivity.value),this.dom.sensitivityValue.textContent=Number(this.settings.sensitivity).toFixed(2),Us(this.settings)}),this.dom.volume.addEventListener("input",()=>{this.settings.volume=parseFloat(this.dom.volume.value),this.dom.volumeValue.textContent=String(Math.round(this.settings.volume*100)),this.audio.setVolume(this.settings.volume),Us(this.settings)}),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.onResize(),220)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pauseGame()}),this.briefClock=setInterval(()=>{const e=t("#brief-clock");if(!e||this.state!=="briefing")return;const n=new Date;e.textContent=[n.getHours(),n.getMinutes(),n.getSeconds()].map(s=>String(s).padStart(2,"0")).join(":")},1e3),this.touchMode=navigator.maxTouchPoints>0&&window.matchMedia("(pointer: coarse)").matches||new URLSearchParams(location.search).has("touch"),this.touchMode&&(document.body.classList.add("touch-mode"),this.setupTouch()),this.updateLoadoutUI(),this.updateDifficultyUI(),this.applySettingsToUI()}updateLoadoutUI(){document.querySelectorAll(".weapon-option").forEach(a=>{const o=a.dataset.weapon===this.primaryChoice;a.classList.toggle("active",o),a.setAttribute("aria-checked",o?"true":"false")});const t=Zs[this.primaryChoice],e=document.querySelector("#weapon-desc");e&&(e.textContent=t.desc);const n=document.querySelector("#loadout-serial");if(n){const a=["m4a1","ak47","awm"].indexOf(this.primaryChoice);n.textContent=`${String(a+1).padStart(2,"0")} / 03`}const s=Gv[this.primaryChoice],r=(a,o)=>{const l=document.querySelector(a);l&&(l.style.width=`${o}%`)};r("#stat-damage",s.damage),r("#stat-rate",s.rate),r("#stat-control",s.control)}updateDifficultyUI(){document.querySelectorAll("[data-difficulty]").forEach(e=>{e.classList.toggle("active",e.dataset.difficulty===this.difficulty)});const t=document.querySelector("#difficulty-note");t&&(t.textContent=Wv[this.difficulty])}applySettingsToUI(){this.dom.sensitivity&&(this.dom.sensitivity.value=this.settings.sensitivity,this.dom.sensitivityValue.textContent=Number(this.settings.sensitivity).toFixed(2),this.dom.volume.value=this.settings.volume,this.dom.volumeValue.textContent=String(Math.round(this.settings.volume*100)),document.querySelectorAll("[data-quality]").forEach(t=>{t.classList.toggle("active",t.dataset.quality===this.settings.quality)}),document.querySelectorAll("[data-difficulty]").forEach(t=>{t.classList.toggle("active",t.dataset.difficulty===this.difficulty)}))}applyQuality(){const t=this.settings.quality==="low",e=Math.min(window.devicePixelRatio||1,t?1:1.7);this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.composer?.setPixelRatio(e),this.composer?.setSize(window.innerWidth,window.innerHeight),this.bloomPass&&(this.bloomPass.enabled=!t),this.renderer&&(this.renderer.shadowMap.enabled=!t),this.fxaaPass&&this.fxaaPass.material.uniforms.resolution.value.set(1/(window.innerWidth*e),1/(window.innerHeight*e)),this.gradePass&&this.gradePass.material.uniforms.uResolution.value.set(window.innerWidth*e,window.innerHeight*e)}onResize(){if(!this.renderer)return;const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.weaponView.resize(t/e),this.renderer.setSize(t,e,!1),this.composer.setSize(t,e);const n=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(t*n),1/(e*n)),this.gradePass.material.uniforms.uResolution.value.set(t*n,e*n),this.hud._resizeMap()}bindInput(){const t=this.canvas,e=()=>this.state==="playing";this.canvas.addEventListener("click",()=>{e()&&!this.touchMode&&!document.pointerLockElement&&this.lockPointer()}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===t,!this.pointerLocked&&this.state==="playing"&&!this.touchMode&&this.pauseGame()}),document.addEventListener("pointerlockerror",()=>{this.state==="playing"&&!this.touchMode&&this.showToast("无法锁定鼠标：请点击画面重试，或在新窗口打开本页面。",4.5)}),document.addEventListener("mousemove",n=>{if(!e()||!document.pointerLockElement||this.touchMode)return;const s=n.movementX||0,r=n.movementY||0;s===0&&r===0||this.player.mouseMove(s,r)}),document.addEventListener("mousedown",n=>{if(!(!e()||this.touchMode)){if(!this.touchMode&&!document.pointerLockElement){this.lockPointer();return}n.target instanceof Element&&n.target.closest("button, input, a")||this.player.mouseDown(n.button)}}),document.addEventListener("mouseup",n=>{!this.player||this.touchMode||this.player.mouseUp(n.button)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("wheel",n=>{!e()||this.scoreboardOpen||Date.now()-this.lastWheel<170||(this.lastWheel=Date.now(),this.player.alive&&this.player.equip(this.player.slot===0?1:0))},{passive:!0}),document.addEventListener("keydown",n=>{if(n.code==="Tab"){n.preventDefault(),this.state==="playing"&&(this.scoreboardOpen=!0,this.hud.toggleScoreboard(!0));return}if(this.state==="paused"){n.code;return}if(this.state==="playing"){if(n.code==="Escape"){this.pauseGame();return}["Space","ControlLeft","ControlRight","AltLeft"].includes(n.code)&&n.preventDefault(),!n.repeat&&this.player.keyDown(n.code)}}),document.addEventListener("keyup",n=>{if(n.code==="Tab"){(this.state==="playing"||this.state==="paused")&&(this.scoreboardOpen=!1,this.hud.toggleScoreboard(!1));return}this.player?.keyUp(n.code)}),window.addEventListener("blur",()=>{this.state==="playing"&&this.pauseGame()})}lockPointer(){if(!this.touchMode){if(document.pointerLockElement===this.canvas){this.pointerLocked=!0;return}try{const t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.pointerLocked=!1,this.state==="playing"&&(this.pauseGame(),this.showToast("鼠标锁定失败。请点击“继续行动”重试。",4.2))})}catch{this.state==="playing"&&(this.pauseGame(),this.showToast("当前浏览器限制了鼠标锁定，请在新窗口打开页面。",4.5))}}}startMatch(){this.ready&&(this.audio.init(),this.audio.setVolume(this.settings.volume),this.audio.startAmbience(),this.resetRound(),this.state="playing",this.matchEnding=!1,this.scoreEndScheduled=!1,this.dom.briefing.classList.add("is-hidden"),this.dom.briefing.setAttribute("aria-hidden","true"),this.dom.pause.classList.remove("is-open"),this.dom.pause.setAttribute("aria-hidden","true"),this.dom.matchEnd.classList.remove("is-open"),this.dom.matchEnd.setAttribute("aria-hidden","true"),document.body.classList.remove("ended"),document.body.classList.add("in-match"),this.hud.show(),this.hud.setScope(!1,0),this.hud.setRifleSight(!1),this.hud.hideDeath(),this.player.enabled=!0,this.weaponPass.enabled=!this.touchMode,this.camera.fov=this.player.baseFov,this.player.currentFov=this.player.baseFov,this.camera.updateProjectionMatrix(),this.player.updateCamera(0),this.touchMode?(document.body.classList.add("touch-playing"),this.player.enabled=!0):(document.body.classList.remove("touch-playing"),this.lockPointer()),this.hud.showEvent("行动开始","TEAM DEATHMATCH / T-09","blue"),this.audio.roundStart(),this.setHudVisible(!0))}resetRound(){this.score.blue=0,this.score.red=0,this.timeRemaining=this.matchDuration,this.matchEnding=!1,this.scoreEndScheduled=!1,this.finalMinuteShown=!1,this.lastPlayerKillAt=-99,this.playerKillChain=0,this.grenades.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()}),this.grenades=[],this.player.kills=0,this.player.deaths=0,this.player.headshots=0,this.player.shots=0,this.player.hits=0,this.player.touchMove.x=0,this.player.touchMove.y=0,this.player.touchSprint=!1,this.touchAimHeld=!1,document.querySelector("#touch-aim")?.classList.remove("active"),this.player.aiming=!1,this.player.triggerDown=!1,this.player.beginLoadout(this.primaryChoice,!0),this.player.resetAtSpawn(this.spawns.blue[0],0),this.player.enabled=!1;for(const t of this.botManager.bots)t.kills=0,t.deaths=0,t.root.visible=!0;this.botManager.reset(),this.hud.setScoreboard(!1),this.hud.hideDeath(),this.hud.setScope(!1,0),this.hud.setRifleSight(!1),this.hud.blueScore.textContent="0",this.hud.redScore.textContent="0"}pauseGame(){this.state==="playing"&&(this.state="paused",this.player.enabled=!1,this.player.triggerDown=!1,this.player.aiming=!1,this.player.mouseUp(0),this.player.mouseUp(2),this.hud.toggleScoreboard(!1),this.hud.setRifleSight(!1),document.pointerLockElement&&document.exitPointerLock(),this.dom.pause.classList.add("is-open"),this.dom.pause.setAttribute("aria-hidden","false"),document.body.classList.remove("touch-playing"),this.audio.uiTone(380,.016))}resumeGame(){this.state==="paused"&&(this.state="playing",this.player.enabled=!0,this.audio.init(),this.dom.pause.classList.remove("is-open"),this.dom.pause.setAttribute("aria-hidden","true"),this.touchMode?document.body.classList.add("touch-playing"):this.lockPointer(),this.audio.uiTone(760,.016))}returnToBriefing(){const t=this.state==="playing";this.state="briefing",this.player.enabled=!1,this.player.triggerDown=!1,this.player.aiming=!1,this.hud.hide(),this.hud.setScope(!1,0),this.hud.hideDeath(),this.hud.toggleScoreboard(!1),this.dom.pause.classList.remove("is-open"),this.dom.pause.setAttribute("aria-hidden","true"),this.dom.matchEnd.classList.remove("is-open"),this.dom.matchEnd.setAttribute("aria-hidden","true"),this.dom.briefing.classList.remove("is-hidden"),this.dom.briefing.setAttribute("aria-hidden","false"),document.body.classList.remove("in-match","ended","touch-playing"),document.pointerLockElement&&document.exitPointerLock();for(const e of this.botManager.bots)e.root.visible=!1;this.weaponView.holder.visible=!1,this.weaponPass.enabled=!1,this.cinematicTime=0,this.setupCinematic(),this.audio.uiTone(420,.016),(t||this.state==="paused")&&this.showToast("已返回行动简报")}endMatch(t="score"){if(this.state!=="playing"||this.matchEnding)return;this.matchEnding=!0,this.state="ended",this.player.enabled=!1,this.player.triggerDown=!1,this.hud.setScope(!1,0),this.hud.setRifleSight(!1),this.hud.toggleScoreboard(!1),document.body.classList.remove("touch-playing"),document.body.classList.add("ended"),document.pointerLockElement&&document.exitPointerLock();const e=this.score.blue,n=this.score.red,s=e>n,r=e===n,a=r?"僵持不下":s?"甲板已控制":"甲板失守",o=r?"双方在货舱中央打成平手。铁锚号仍漂在雾里，下一次交火不会太远。":s?"保卫者压制了运输船甲板。货舱控制权已移交给你的小队。":"潜伏者夺取了中央通道。重整小队，下一次从侧翼登船。";document.querySelector("#result-title").textContent=a,document.querySelector("#result-sub").textContent=o,document.querySelector("#end-stamp").textContent=r?"STALEMATE":s?"OPS COMPLETE":"MISSION FAILED",document.querySelector("#end-stamp").className=`end-stamp${s||r?"":" defeat"}`,document.querySelector("#end-blue").textContent=e,document.querySelector("#end-red").textContent=n,document.querySelector("#end-kills").textContent=this.player.kills,document.querySelector("#end-deaths").textContent=this.player.deaths,document.querySelector("#end-hs").textContent=this.player.headshots;const l=this.player.shots>0?Math.round(this.player.hits/this.player.shots*100):0;document.querySelector("#end-accuracy").textContent=`${l}%`,document.querySelector("#end-verdict").textContent=t==="time"?"行动计时结束 — 判定依据最终比分":"击杀上限达成 — 行动终止",this.audio.victory(s&&!r),window.setTimeout(()=>{this.state==="ended"&&(this.dom.matchEnd.classList.add("is-open"),this.dom.matchEnd.setAttribute("aria-hidden","false"),document.body.classList.remove("in-match"),this.hud.root.classList.remove("is-visible"))},650)}respawnPlayer(){if(this.state!=="playing")return;const t=this.getCombatants("blue",!0).filter(r=>r.alive&&!r.isPlayer),s=[...this.spawns.blue].map(r=>{let a=99;for(const o of t)a=Math.min(a,Math.hypot(o.position.x-r.x,o.position.z-r.z));return{s:r,score:a+Math.random()*3}}).sort((r,a)=>a.score-r.score)[0].s;this.player.respawn(s,0),this.player.enabled=!0,this.hud.hideDeath(),this.hud.showEvent("重新部署","BACK ON DECK","blue"),this.audio.radio(),!this.touchMode&&this.state==="playing"&&!document.pointerLockElement&&(this.pauseGame(),this.showToast("点击“继续行动”重新锁定鼠标"))}onPlayerDamaged(t,e,n){this.hud.damage(e),this.audio.playerHit(),this.player.health<=30&&this.player.health>0&&!this.lowHealthCalled&&(this.lowHealthCalled=!0,this.hud.showEvent("生命体征危急","CRITICAL / FIND COVER","red"),window.setTimeout(()=>{this.lowHealthCalled=!1},4e3))}onPlayerKilled(t,e){this.weaponView.holder.visible=!1,this.hud.setScope(!1,0);const n=t&&t.name?t.name:"破片手雷",s=t&&t.weaponLabel?t.weaponLabel:(t&&t.isPlayer,"FRAG");this.score.red+=1,this.hud.addKill({killer:n,victim:"你",weapon:s,headshot:!!e,killerTeam:"red",victimTeam:"blue"}),this.hud.showDeath(n,s),this.hud.showEvent("你已阵亡","KILLED IN ACTION","red"),this.playerKillChain=0,this.checkScoreLimit()}onBotDamaged(t,e,n,s){}onBotKilled(t,e,n,s){t.deaths=(t.deaths||0)+1;let r="环境",a=null;if(e&&(e.isPlayer?(r="你",a="blue",this.player.kills+=1,n&&(this.player.headshots+=1)):(r=e.name,a=e.team,e.kills=(e.kills||0)+1),this.score[e.isPlayer?"blue":e.team]+=1),this.hud.addKill({killer:r,victim:t.name,weapon:s||"M4A1",headshot:!!n,killerTeam:a||"blue",victimTeam:t.team}),e?.isPlayer){const o=this.elapsed-this.lastPlayerKillAt;this.playerKillChain=o<2.5?this.playerKillChain+1:1,this.lastPlayerKillAt=this.elapsed,this.playerKillChain===2?this.hud.showEvent("双杀","DOUBLE KILL","amber"):this.playerKillChain===3?this.hud.showEvent("三杀","TRIPLE KILL","amber"):this.playerKillChain>=4&&this.hud.showEvent("压舱清场","MULTI KILL","amber"),this.audio.radio()}this.checkScoreLimit()}checkScoreLimit(){if(!(this.matchEnding||this.scoreEndScheduled)&&(this.score.blue>=this.scoreLimit||this.score.red>=this.scoreLimit)){this.scoreEndScheduled=!0;const t=this.score.blue>this.score.red;this.hud.showEvent(t?"目标达成":"防线失守","SCORE LIMIT REACHED",t?"blue":"red"),window.setTimeout(()=>{this.state==="playing"&&this.endMatch("score")},850)}}setHudVisible(t){t?this.hud.show():this.hud.hide()}getCombatants(t,e=!1){const n=[],s=this.player;s&&s.alive&&(e?s.team!==t:s.team===t)&&n.push(s);const r=this.botManager?this.botManager.bots:[];for(const a of r)a.alive&&(e?a.team!==t:a.team===t)&&n.push(a);return n}getAllCombatants(){const t=[];if(this.player?.alive&&t.push(this.player),this.botManager)for(const e of this.botManager.bots)e.alive&&t.push(e);return t}throwGrenade(t,e,n){const s=new gn(.09,14,10),r=new Ft({color:"#3b4438",metalness:.55,roughness:.48}),a=new ut(s,r);a.position.copy(t),a.castShadow=!0,this.scene.add(a);const o=new ut(new Be(.085,.012,4,12),new Ft({color:"#9a7c38",metalness:.5,roughness:.5}));o.rotation.x=Math.PI/2,a.add(o);const l=e.clone().multiplyScalar(17.5).add(new T(0,1.3,0));this.grenades.push({mesh:a,vel:l,fuse:2.65,owner:n,radius:6.8,bounces:0,spin:new T(5+Math.random()*5,3+Math.random()*4,4+Math.random()*4)})}updateGrenades(t){for(let e=this.grenades.length-1;e>=0;e--){const n=this.grenades[e];n.fuse-=t;const s=n.mesh.position.clone();n.vel.y-=9.8*t;const r=n.vel.clone().multiplyScalar(t),a=r.length();let o=null;if(a>1e-4&&(o=this.world.raycast(s,r.clone().normalize(),a+.04)),o&&o.distance<=a+.06){const l=o.normal;n.mesh.position.copy(o.point).addScaledVector(l,.1);const c=n.vel.dot(l);c<0&&n.vel.addScaledVector(l,-1.42*c),n.vel.multiplyScalar(.62),n.bounces++,n.bounces<2&&this.audio.footstep(this.audioPanFor(o.point),.22)}else n.mesh.position.add(r),n.mesh.position.y<.1&&(n.mesh.position.y=.1,n.vel.y=Math.abs(n.vel.y)*.3,n.vel.x*=.65,n.vel.z*=.65);if(n.mesh.rotation.x+=n.spin.x*t,n.mesh.rotation.y+=n.spin.y*t,n.mesh.rotation.z+=n.spin.z*t,n.mesh.position.distanceTo(this.camera.position)>80){this.scene.remove(n.mesh),this.grenades.splice(e,1);continue}n.fuse<=0&&(this.detonateGrenade(n),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.grenades.splice(e,1))}}detonateGrenade(t){const e=t.mesh.position.clone();this.effects.explosion(e);const n=this.player.alive?e.distanceTo(this.player.position):99;this.audio.explosion(this.audioPanFor(e),n),this.addShake(Math.max(.04,.4-n*.03));const s=this.getAllCombatants();for(const r of s){const a=r.getTargetPoint(new T),o=a.distanceTo(e);if(o>t.radius||t.owner&&r.team===t.owner.team&&r!==t.owner)continue;const l=this.world.pointVisible(e.clone().add(new T(0,.4,0)),a);let h=125*(1-o/t.radius)*(l?1:.34);r.isPlayer&&t.owner?.isPlayer&&(h*=.55),r.isPlayer?r.takeDamage(h,null,!1):r.takeDamage(h,t.owner,!1,"破片手雷")}}setupTouch(){const t=document.querySelector("#touch-move"),e=document.querySelector("#touch-move-thumb"),n=document.querySelector("#touch-look");if(!t||!n)return;let s=null,r=null,a={x:0,y:0},o={x:0,y:0};t.addEventListener("pointerdown",f=>{if(this.state!=="playing")return;s=f.pointerId;try{t.setPointerCapture(f.pointerId)}catch{}const g=t.getBoundingClientRect();a={x:g.left+g.width/2,y:g.top+g.height/2},f.preventDefault()}),t.addEventListener("pointermove",f=>{if(f.pointerId!==s||!this.player)return;const g=f.clientX-a.x,v=f.clientY-a.y,p=Math.min(1,Math.hypot(g,v)/46),m=Math.atan2(v,g);this.player.touchMove.x=Math.cos(m)*p,this.player.touchMove.y=-Math.sin(m)*p,this.player.touchSprint=p>.86;const w=Math.cos(m)*p*38,_=Math.sin(m)*p*38;e&&(e.style.transform=`translate(${w}px, ${_}px)`),f.preventDefault()});const l=f=>{f.pointerId===s&&(s=null,this.player&&(this.player.touchMove.x=0,this.player.touchMove.y=0,this.player.touchSprint=!1,e&&(e.style.transform="translate(0, 0)")))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),n.addEventListener("pointerdown",f=>{if(this.state==="playing"){r=f.pointerId,o={x:f.clientX,y:f.clientY};try{n.setPointerCapture(f.pointerId)}catch{}f.preventDefault()}}),n.addEventListener("pointermove",f=>{if(f.pointerId!==r||this.state!=="playing"||!this.player?.alive)return;const g=f.clientX-o.x,v=f.clientY-o.y;o={x:f.clientX,y:f.clientY},this.player.mouseMove(g*1.55,v*1.55),f.preventDefault()});const c=f=>{f.pointerId===r&&(r=null)};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c);const h=(f,g,v)=>{const p=document.querySelector(f);p&&(p.addEventListener("pointerdown",m=>{m.preventDefault(),m.stopPropagation();try{p.setPointerCapture(m.pointerId)}catch{}this.state==="playing"&&g()}),p.addEventListener("pointerup",m=>{m.preventDefault(),m.stopPropagation(),v&&v()}),p.addEventListener("pointercancel",()=>{v&&v()}))};h("#touch-fire",()=>this.player.mouseDown(0),()=>this.player.mouseUp(0)),h("#touch-jump",()=>{this.player.alive&&(this.player.jumpRequested=!0)}),h("#touch-reload",()=>this.player.startReload()),h("#touch-grenade",()=>this.player.throwGrenade()),h("#touch-switch",()=>this.player.equip(this.player.slot===0?1:0));const d=document.querySelector("#touch-aim");d&&d.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),this.state==="playing"&&(this.touchAimHeld=!this.touchAimHeld,this.touchAimHeld?this.player.mouseDown(2):this.player.mouseUp(2),d.classList.toggle("active",this.touchAimHeld))});const u=document.querySelector("#touch-pause");u&&u.addEventListener("click",()=>this.pauseGame())}dispose(){clearInterval(this.briefClock),this.renderer?.dispose()}}const Kv=document.querySelector("#game-canvas"),Hh=new Yv(Kv);window.__T09=Hh;Hh.init().catch(i=>{console.error("[T-09] initialization failed",i);const t=document.querySelector("#loading"),e=document.querySelector("#loading-status"),n=document.querySelector("#loading-bar");e&&(e.textContent="甲板链路中断 · 请刷新重试"),n&&(n.style.width="100%"),t&&t.classList.add("has-error")});
