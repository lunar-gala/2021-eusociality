const Kc="122",ng={ROTATE:0,DOLLY:1,PAN:2},ig={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tl=0,Io=1,el=2,dc=1,nl=2,Pi=3,$r=0,Jt=1,Kr=2,pc=1,Di=0,Ni=1,Do=2,No=3,Oo=4,il=5,Jn=100,rl=101,sl=102,Fo=103,Bo=104,ol=200,al=201,cl=202,ll=203,mc=204,gc=205,hl=206,ul=207,fl=208,dl=209,pl=210,ml=0,gl=1,yl=2,Bs=3,vl=4,xl=5,_l=6,bl=7,ts=0,Ml=1,wl=2,Oi=0,Sl=1,El=2,Tl=3,Al=4,Ll=5,yc=300,yo=301,vo=302,Uo=303,zo=304,xo=306,_o=307,Us=1e3,fe=1001,zs=1002,re=1003,Ho=1004,Go=1005,ee=1006,Cl=1007,es=1008,rg=1008,bo=1009,Rl=1010,Pl=1011,zr=1012,Il=1013,Br=1014,cn=1015,Hr=1016,Dl=1017,Nl=1018,Ol=1019,Fi=1020,Fl=1021,Mn=1022,Ae=1023,Bl=1024,Ul=1025,ri=1026,Gi=1027,zl=1028,Hl=1029,Gl=1030,kl=1031,Vl=1032,Wl=1033,ko=33776,Vo=33777,Wo=33778,jo=33779,qo=35840,Xo=35841,Yo=35842,Zo=35843,jl=36196,Jo=37492,Qo=37496,ql=37808,Xl=37809,Yl=37810,Zl=37811,Jl=37812,Ql=37813,$l=37814,Kl=37815,th=37816,eh=37817,nh=37818,ih=37819,rh=37820,sh=37821,oh=36492,ah=37840,ch=37841,lh=37842,hh=37843,uh=37844,fh=37845,dh=37846,ph=37847,mh=37848,gh=37849,yh=37850,vh=37851,xh=37852,_h=37853,bh=2200,Mh=2201,wh=2202,Gr=2300,Ur=2301,cs=2302,Qn=2400,$n=2401,kr=2402,Mo=2500,vc=2501,Sh=0,sg=1,og=2,er=3e3,xc=3001,Eh=3007,Th=3002,Ah=3003,Lh=3004,Ch=3005,Rh=3006,Ph=3200,Ih=3201,yi=0,Dh=1,ls=7680,Nh=519,ns=35044,ki=35048,$o="300 es";function $e(){}Object.assign($e.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const Zt=[];for(let t=0;t<256;t++)Zt[t]=(t<16?"0":"")+t.toString(16);let rr=1234567;const _t={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(rr=t%2147483647),rr=rr*16807%2147483647,(rr-1)/2147483646},degToRad:function(t){return t*_t.DEG2RAD},radToDeg:function(t){return t*_t.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),u=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*f,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*f,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*f,a*l);break;case"XZX":t.set(a*f,c*m,c*u,a*l);break;case"YXY":t.set(c*u,a*f,c*m,a*l);break;case"ZYZ":t.set(c*m,c*u,a*f,a*l);break;default:}}};class k{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?this.addVectors(e,n):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?this.subVectors(e,n):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class ce{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0}set(e,n,i,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],m=i[8],y=r[0],v=r[3],g=r[6],p=r[1],S=r[4],T=r[7],E=r[2],b=r[5],C=r[8];return s[0]=o*y+a*p+c*E,s[3]=o*v+a*S+c*b,s[6]=o*g+a*T+c*C,s[1]=l*y+f*p+h*E,s[4]=l*v+f*S+h*b,s[7]=l*g+f*T+h*C,s[2]=d*y+u*p+m*E,s[5]=d*v+u*S+m*b,s[8]=d*g+u*T+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return n*o*f-n*a*l-i*s*f+i*a*c+r*s*l-r*o*c}getInverse(e,n){const i=e.elements,r=this.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],f=i[5],h=i[6],d=i[7],u=i[8],m=u*l-f*d,y=f*h-u*c,v=d*c-l*h,g=s*m+o*y+a*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return r[0]=m*p,r[1]=(a*d-u*o)*p,r[2]=(f*o-a*l)*p,r[3]=y*p,r[4]=(u*s-a*h)*p,r[5]=(a*c-f*s)*p,r[6]=v*p,r[7]=(o*h-d*s)*p,r[8]=(l*s-o*c)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).getInverse(this).transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1)}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],f=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*f,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*f,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Nn;const wn={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nn===void 0&&(Nn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Nn.width=t.width,Nn.height=t.height;const n=Nn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Nn}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let Oh=0;function zt(t,e,n,i,r,s,o,a,c,l){Object.defineProperty(this,"id",{value:Oh++}),this.uuid=_t.generateUUID(),this.name="",this.image=t!==void 0?t:zt.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=e!==void 0?e:zt.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:fe,this.wrapT=i!==void 0?i:fe,this.magFilter=r!==void 0?r:ee,this.minFilter=s!==void 0?s:es,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:Ae,this.internalFormat=null,this.type=a!==void 0?a:bo,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:er,this.version=0,this.onUpdate=null}zt.DEFAULT_IMAGE=void 0;zt.DEFAULT_MAPPING=yc;zt.prototype=Object.assign(Object.create($e.prototype),{constructor:zt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=_t.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(wn.getDataURL(i[s]))}else r=wn.getDataURL(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case fe:t.x=t.x<0?0:1;break;case zs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case fe:t.y=t.y<0?0:1;break;case zs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(zt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});class Dt{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?this.addVectors(e,n):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?this.subVectors(e,n):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],m=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-v)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+v)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,T=(u+1)/2,E=(g+1)/2,b=(f+d)/4,C=(h+y)/4,B=(m+v)/4;return S>T&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=C/i):T>E?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=B/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=B/s),this.set(i,r,s,n),this}let p=Math.sqrt((v-m)*(v-m)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(v-m)/p,this.y=(h-y)/p,this.z=(d-f)/p,this.w=Math.acos((l+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Le(t,e,n){this.width=t,this.height=e,this.scissor=new Dt(0,0,t,e),this.scissorTest=!1,this.viewport=new Dt(0,0,t,e),n=n||{},this.texture=new zt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Le.prototype=Object.assign(Object.create($e.prototype),{constructor:Le,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Ko(t,e,n){Le.call(this,t,e,n),this.samples=4}Ko.prototype=Object.assign(Object.create(Le.prototype),{constructor:Ko,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Le.prototype.copy.call(this,t),this.samples=t.samples,this}});class de{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],u=s[o+1],m=s[o+2],y=s[o+3];if(h!==y||c!==d||l!==u||f!==m){let v=1-a;const g=c*d+l*u+f*m+h*y,p=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const E=Math.sqrt(S),b=Math.atan2(E,g*p);v=Math.sin(v*b)/E,a=Math.sin(a*b)/E}const T=a*p;if(c=c*v+d*T,l=l*v+u*T,f=f*v+m*T,h=h*v+y*T,v===1-a){const E=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=E,l*=E,f*=E,h*=E}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=s[o],d=s[o+1],u=s[o+2],m=s[o+3];return e[n]=a*m+f*h+c*u-l*d,e[n+1]=c*m+f*d+l*h-a*u,e[n+2]=l*m+f*u+a*d-c*h,e[n+3]=f*m-a*h-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(s/2),d=c(i/2),u=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*f*h+l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h-d*u*m;break;case"YXZ":this._x=d*f*h+l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h+d*u*m;break;case"ZXY":this._x=d*f*h-l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h-d*u*m;break;case"ZYX":this._x=d*f*h-l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h+d*u*m;break;case"YZX":this._x=d*f*h+l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h-d*u*m;break;case"XZY":this._x=d*f*h-l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h+d*u*m;break;default:}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?this.multiplyQuaternions(e,n):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-n;return this._w=u*o+n*this._w,this._x=u*i+n*this._x,this._y=u*r+n*this._y,this._z=u*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-n)*f)/l,d=Math.sin(n*f)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class w{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?this.addVectors(e,n):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?this.subVectors(e,n):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?this.multiplyVectors(e,n):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler,this.applyQuaternion(ta.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ta.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,f=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+f*-a-h*-o,this.y=f*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?this.crossVectors(e,n):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const hs=new w,ta=new de;class mn{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new w(1/0,1/0,1/0),this.max=n!==void 0?n:new w(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const f=e[c],h=e[c+1],d=e[c+2];f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const f=e.getX(c),h=e.getY(c),d=e.getZ(c);f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(n=new w),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),sr.subVectors(this.max,wi),On.subVectors(e.a,wi),Fn.subVectors(e.b,wi),Bn.subVectors(e.c,wi),Ke.subVectors(Fn,On),tn.subVectors(Bn,Fn),vn.subVectors(On,Bn);let n=[0,-Ke.z,Ke.y,0,-tn.z,tn.y,0,-vn.z,vn.y,Ke.z,0,-Ke.x,tn.z,0,-tn.x,vn.z,0,-vn.x,-Ke.y,Ke.x,0,-tn.y,tn.x,0,-vn.y,vn.x,0];return!us(n,On,Fn,Bn,sr)||(n=[1,0,0,0,1,0,0,0,1],!us(n,On,Fn,Bn,sr))?!1:(or.crossVectors(Ke,tn),n=[or.x,or.y,or.z],us(n,On,Fn,Bn,sr))}clampPoint(e,n){return n===void 0&&(n=new w),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ge[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ge[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ge[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ge[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ge[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ge[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ge[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ge[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ge),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function us(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xn.fromArray(t,s);const a=r.x*Math.abs(xn.x)+r.y*Math.abs(xn.y)+r.z*Math.abs(xn.z),c=e.dot(xn),l=n.dot(xn),f=i.dot(xn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const Ge=[new w,new w,new w,new w,new w,new w,new w,new w],Mi=new w,fs=new mn,On=new w,Fn=new w,Bn=new w,Ke=new w,tn=new w,vn=new w,wi=new w,sr=new w,or=new w,xn=new w,Fh=new mn;class gn{constructor(e,n){this.center=e!==void 0?e:new w,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Fh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(n=new w),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(e=new mn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const ke=new w,ds=new w,ar=new w,en=new w,ps=new w,cr=new w,ms=new w;class nr{constructor(e,n){this.origin=e!==void 0?e:new w,this.direction=n!==void 0?n:new w(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(n=new w),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ke)),this}closestPointToPoint(e,n){n===void 0&&(n=new w),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ke.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ke.copy(this.direction).multiplyScalar(n).add(this.origin),ke.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ds.copy(e).add(n).multiplyScalar(.5),ar.copy(n).sub(e).normalize(),en.copy(this.origin).sub(ds);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ar),a=en.dot(this.direction),c=-en.dot(ar),l=en.lengthSq(),f=Math.abs(1-o*o);let h,d,u,m;if(f>0)if(h=o*c-a,d=o*a-c,m=s*f,h>=0)if(d>=-m)if(d<=m){const y=1/f;h*=y,d*=y,u=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ar).multiplyScalar(d).add(ds),u}intersectSphere(e,n){ke.subVectors(e.center,this.origin);const i=ke.dot(this.direction),r=ke.dot(ke)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ke)!==null}intersectTriangle(e,n,i,r,s){ps.subVectors(n,e),cr.subVectors(i,e),ms.crossVectors(ps,cr);let o=this.direction.dot(ms),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(en,cr));if(c<0)return null;const l=a*this.direction.dot(ps.cross(en));if(l<0||c+l>o)return null;const f=-a*en.dot(ms);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Et{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0}set(e,n,i,r,s,o,a,c,l,f,h,d,u,m,y,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=m,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Un.setFromMatrixColumn(e,0).length(),s=1/Un.setFromMatrixColumn(e,1).length(),o=1/Un.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler;const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,u=o*h,m=a*f,y=a*h;n[0]=c*f,n[4]=-c*h,n[8]=l,n[1]=u+m*l,n[5]=d-y*l,n[9]=-a*c,n[2]=y-d*l,n[6]=m+u*l,n[10]=o*c}else if(e.order==="YXZ"){const d=c*f,u=c*h,m=l*f,y=l*h;n[0]=d+y*a,n[4]=m*a-u,n[8]=o*l,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=u*a-m,n[6]=y+d*a,n[10]=o*c}else if(e.order==="ZXY"){const d=c*f,u=c*h,m=l*f,y=l*h;n[0]=d-y*a,n[4]=-o*h,n[8]=m+u*a,n[1]=u+m*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const d=o*f,u=o*h,m=a*f,y=a*h;n[0]=c*f,n[4]=m*l-u,n[8]=d*l+y,n[1]=c*h,n[5]=y*l+d,n[9]=u*l-m,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,u=o*l,m=a*c,y=a*l;n[0]=c*f,n[4]=y-d*h,n[8]=m*h+u,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=u*h+m,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*c,u=o*l,m=a*c,y=a*l;n[0]=c*f,n[4]=-h,n[8]=l*f,n[1]=d*h+y,n[5]=o*f,n[9]=u*h-m,n[2]=m*h-u,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,Uh)}lookAt(e,n,i){const r=this.elements;return he.subVectors(e,n),he.lengthSq()===0&&(he.z=1),he.normalize(),nn.crossVectors(i,he),nn.lengthSq()===0&&(Math.abs(i.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),nn.crossVectors(i,he)),nn.normalize(),lr.crossVectors(he,nn),r[0]=nn.x,r[4]=lr.x,r[8]=he.x,r[1]=nn.y,r[5]=lr.y,r[9]=he.y,r[2]=nn.z,r[6]=lr.z,r[10]=he.z,this}multiply(e,n){return n!==void 0?this.multiplyMatrices(e,n):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],m=i[2],y=i[6],v=i[10],g=i[14],p=i[3],S=i[7],T=i[11],E=i[15],b=r[0],C=r[4],B=r[8],Z=r[12],X=r[1],A=r[5],O=r[9],D=r[13],F=r[2],R=r[6],P=r[10],z=r[14],G=r[3],tt=r[7],ot=r[11],it=r[15];return s[0]=o*b+a*X+c*F+l*G,s[4]=o*C+a*A+c*R+l*tt,s[8]=o*B+a*O+c*P+l*ot,s[12]=o*Z+a*D+c*z+l*it,s[1]=f*b+h*X+d*F+u*G,s[5]=f*C+h*A+d*R+u*tt,s[9]=f*B+h*O+d*P+u*ot,s[13]=f*Z+h*D+d*z+u*it,s[2]=m*b+y*X+v*F+g*G,s[6]=m*C+y*A+v*R+g*tt,s[10]=m*B+y*O+v*P+g*ot,s[14]=m*Z+y*D+v*z+g*it,s[3]=p*b+S*X+T*F+E*G,s[7]=p*C+S*A+T*R+E*tt,s[11]=p*B+S*O+T*P+E*ot,s[15]=p*Z+S*D+T*z+E*it,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],u=e[14],m=e[3],y=e[7],v=e[11],g=e[15];return m*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*u-i*c*u)+y*(+n*c*u-n*l*d+s*o*d-r*o*u+r*l*f-s*c*f)+v*(+n*l*h-n*a*u-s*o*h+i*o*u+s*a*f-i*l*f)+g*(-r*a*f-n*c*h+n*a*d+r*o*h-i*o*d+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}getInverse(e,n){const i=this.elements,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],f=r[5],h=r[6],d=r[7],u=r[8],m=r[9],y=r[10],v=r[11],g=r[12],p=r[13],S=r[14],T=r[15],E=m*S*d-p*y*d+p*h*v-f*S*v-m*h*T+f*y*T,b=g*y*d-u*S*d-g*h*v+l*S*v+u*h*T-l*y*T,C=u*p*d-g*m*d+g*f*v-l*p*v-u*f*T+l*m*T,B=g*m*h-u*p*h-g*f*y+l*p*y+u*f*S-l*m*S,Z=s*E+o*b+a*C+c*B;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Z;return i[0]=E*X,i[1]=(p*y*c-m*S*c-p*a*v+o*S*v+m*a*T-o*y*T)*X,i[2]=(f*S*c-p*h*c+p*a*d-o*S*d-f*a*T+o*h*T)*X,i[3]=(m*h*c-f*y*c-m*a*d+o*y*d+f*a*v-o*h*v)*X,i[4]=b*X,i[5]=(u*S*c-g*y*c+g*a*v-s*S*v-u*a*T+s*y*T)*X,i[6]=(g*h*c-l*S*c-g*a*d+s*S*d+l*a*T-s*h*T)*X,i[7]=(l*y*c-u*h*c+u*a*d-s*y*d-l*a*v+s*h*v)*X,i[8]=C*X,i[9]=(g*m*c-u*p*c-g*o*v+s*p*v+u*o*T-s*m*T)*X,i[10]=(l*p*c-g*f*c+g*o*d-s*p*d-l*o*T+s*f*T)*X,i[11]=(u*f*c-l*m*c-u*o*d+s*m*d+l*o*v-s*f*v)*X,i[12]=B*X,i[13]=(u*p*a-g*m*a+g*o*y-s*p*y-u*o*S+s*m*S)*X,i[14]=(g*f*a-l*p*a-g*o*h+s*p*h+l*o*S-s*f*S)*X,i[15]=(l*m*a-u*f*a+u*o*h-s*m*h-l*o*y+s*f*y)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,f=o+o,h=a+a,d=s*l,u=s*f,m=s*h,y=o*f,v=o*h,g=a*h,p=c*l,S=c*f,T=c*h,E=i.x,b=i.y,C=i.z;return r[0]=(1-(y+g))*E,r[1]=(u+T)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(u-T)*b,r[5]=(1-(d+g))*b,r[6]=(v+p)*b,r[7]=0,r[8]=(m+S)*C,r[9]=(v-p)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Un.set(r[0],r[1],r[2]).length();const o=Un.set(r[4],r[5],r[6]).length(),a=Un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Me.copy(this);const l=1/s,f=1/o,h=1/a;return Me.elements[0]*=l,Me.elements[1]*=l,Me.elements[2]*=l,Me.elements[4]*=f,Me.elements[5]*=f,Me.elements[6]*=f,Me.elements[8]*=h,Me.elements[9]*=h,Me.elements[10]*=h,n.setFromRotationMatrix(Me),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),u=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*l,u=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Un=new w,Me=new Et,Bh=new w(0,0,0),Uh=new w(1,1,1),nn=new w,lr=new w,he=new w;class ir{constructor(e=0,n=0,i=0,r=ir.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=_t.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],f=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,f),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ea,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return na.setFromEuler(this),this.setFromQuaternion(na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ir.DefaultOrder="XYZ";ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const ea=new Et,na=new de;class _c{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let zh=0;const ia=new w,zn=new de,Ve=new Et,hr=new w,Si=new w,Hh=new w,Gh=new de,ra=new w(1,0,0),sa=new w(0,1,0),oa=new w(0,0,1),kh={type:"added"},aa={type:"removed"};function ft(){Object.defineProperty(this,"id",{value:zh++}),this.uuid=_t.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DefaultUp.clone();const t=new w,e=new ir,n=new de,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new ce}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}ft.DefaultUp=new w(0,1,0);ft.DefaultMatrixAutoUpdate=!0;ft.prototype=Object.assign(Object.create($e.prototype),{constructor:ft,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this},rotateOnWorldAxis:function(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this},rotateX:function(t){return this.rotateOnAxis(ra,t)},rotateY:function(t){return this.rotateOnAxis(sa,t)},rotateZ:function(t){return this.rotateOnAxis(oa,t)},translateOnAxis:function(t,e){return ia.copy(t).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(ra,t)},translateY:function(t){return this.translateOnAxis(sa,t)},translateZ:function(t){return this.translateOnAxis(oa,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Ve.getInverse(this.matrixWorld))},lookAt:function(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ve.lookAt(Si,hr,this.up):Ve.lookAt(hr,Si,this.up),this.quaternion.setFromRotationMatrix(Ve),i&&(Ve.extractRotation(i.matrixWorld),zn.setFromRotationMatrix(Ve),this.quaternion.premultiply(zn.inverse()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?this:(t&&t.isObject3D&&(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kh)),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(aa)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(aa)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),Ve.getInverse(this.matrixWorld),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ve.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ve),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(t=new w),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(t=new de),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,Hh),t},getWorldScale:function(t){return t===void 0&&(t=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Gh,t),t},getWorldDirection:function(t){t===void 0&&(t=new w),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const f=a[c];r(t.shapes,f)}else r(t.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),f=s(t.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e){if(e===void 0&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const gs=new w,Vh=new w,Wh=new ce;class qe{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new w(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gs.subVectors(i,n).cross(Vh.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(n=new w),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(n=new w);const i=e.delta(gs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wh.getNormalMatrix(e),r=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const we=new w,We=new w,ys=new w,je=new w,Hn=new w,Gn=new w,ca=new w,vs=new w,xs=new w,_s=new w;class te{constructor(e,n,i){this.a=e!==void 0?e:new w,this.b=n!==void 0?n:new w,this.c=i!==void 0?i:new w}static getNormal(e,n,i,r){r===void 0&&(r=new w),r.subVectors(i,n),we.subVectors(e,n),r.cross(we);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){we.subVectors(r,n),We.subVectors(i,n),ys.subVectors(e,n);const o=we.dot(we),a=we.dot(We),c=we.dot(ys),l=We.dot(We),f=We.dot(ys),h=o*l-a*a;if(s===void 0&&(s=new w),h===0)return s.set(-2,-1,-1);const d=1/h,u=(l*c-a*f)*d,m=(o*f-a*c)*d;return s.set(1-u-m,m,u)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,je),je.x>=0&&je.y>=0&&je.x+je.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,je),c.set(0,0),c.addScaledVector(s,je.x),c.addScaledVector(o,je.y),c.addScaledVector(a,je.z),c}static isFrontFacing(e,n,i,r){return we.subVectors(i,n),We.subVectors(e,n),we.cross(We).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return we.subVectors(this.c,this.b),We.subVectors(this.a,this.b),we.cross(We).length()*.5}getMidpoint(e){return e===void 0&&(e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return te.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(e=new qe),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return te.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return te.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return te.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return te.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(n=new w);const i=this.a,r=this.b,s=this.c;let o,a;Hn.subVectors(r,i),Gn.subVectors(s,i),vs.subVectors(e,i);const c=Hn.dot(vs),l=Gn.dot(vs);if(c<=0&&l<=0)return n.copy(i);xs.subVectors(e,r);const f=Hn.dot(xs),h=Gn.dot(xs);if(f>=0&&h<=f)return n.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(Hn,o);_s.subVectors(e,s);const u=Hn.dot(_s),m=Gn.dot(_s);if(m>=0&&u<=m)return n.copy(s);const y=u*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),n.copy(i).addScaledVector(Gn,a);const v=f*m-u*h;if(v<=0&&h-f>=0&&u-m>=0)return ca.subVectors(s,r),a=(h-f)/(h-f+(u-m)),n.copy(r).addScaledVector(ca,a);const g=1/(v+y+d);return o=y*g,a=d*g,n.copy(i).addScaledVector(Hn,o).addScaledVector(Gn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Se={h:0,s:0,l:0},ur={h:0,s:0,l:0};function bs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class ct{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=_t.euclideanModulo(e,1),n=_t.clamp(n,0,1),i=_t.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=bs(s,r,e+1/3),this.g=bs(s,r,e),this.b=bs(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[5]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[5]),this;break;case"hsl":case"hsla":if(r=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[5]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=bc[e];return n!==void 0&&this.setHex(n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n){return n===void 0&&(n=2),this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n){n===void 0&&(n=2);const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const f=s-o;switch(c=l<=.5?f/(s+o):f/(2-s-o),s){case n:a=(i-r)/f+(i<r?6:0);break;case i:a=(r-n)/f+2;break;case r:a=(n-i)/f+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Se),Se.h+=e,Se.s+=n,Se.l+=i,this.setHSL(Se.h,Se.s,Se.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Se),e.getHSL(ur);const i=_t.lerp(Se.h,ur.h,n),r=_t.lerp(Se.s,ur.s,n),s=_t.lerp(Se.l,ur.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ct.NAMES=bc;ct.prototype.r=1;ct.prototype.g=1;ct.prototype.b=1;class Hs{constructor(e,n,i,r,s,o){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new w,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ct,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o!==void 0?o:0}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let jh=0;function pt(){Object.defineProperty(this,"id",{value:jh++}),this.uuid=_t.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Ni,this.side=$r,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pt.prototype=Object.assign(Object.create($e.prototype),{constructor:pt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0)continue;if(e==="shading"){this.flatShading=n===pc;continue}const i=this[e];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n)}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==$r&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Sn(t){pt.call(this),this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Sn.prototype=Object.create(pt.prototype);Sn.prototype.constructor=Sn;Sn.prototype.isMeshBasicMaterial=!0;Sn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const Ut=new w,fr=new k;function xt(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ns,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(xt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(xt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(s=new ct),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(s=new k),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(s=new w),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(s=new Dt),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyMatrix3(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ut.x=this.getX(e),Ut.y=this.getY(e),Ut.z=this.getZ(e),Ut.applyMatrix4(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ut.x=this.getX(e),Ut.y=this.getY(e),Ut.z=this.getZ(e),Ut.applyNormalMatrix(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ut.x=this.getX(e),Ut.y=this.getY(e),Ut.z=this.getZ(e),Ut.transformDirection(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Gs(t,e,n){xt.call(this,new Int8Array(t),e,n)}Gs.prototype=Object.create(xt.prototype);Gs.prototype.constructor=Gs;function ks(t,e,n){xt.call(this,new Uint8Array(t),e,n)}ks.prototype=Object.create(xt.prototype);ks.prototype.constructor=ks;function Vs(t,e,n){xt.call(this,new Uint8ClampedArray(t),e,n)}Vs.prototype=Object.create(xt.prototype);Vs.prototype.constructor=Vs;function Ws(t,e,n){xt.call(this,new Int16Array(t),e,n)}Ws.prototype=Object.create(xt.prototype);Ws.prototype.constructor=Ws;function Vi(t,e,n){xt.call(this,new Uint16Array(t),e,n)}Vi.prototype=Object.create(xt.prototype);Vi.prototype.constructor=Vi;function js(t,e,n){xt.call(this,new Int32Array(t),e,n)}js.prototype=Object.create(xt.prototype);js.prototype.constructor=js;function Wi(t,e,n){xt.call(this,new Uint32Array(t),e,n)}Wi.prototype=Object.create(xt.prototype);Wi.prototype.constructor=Wi;function Pt(t,e,n){xt.call(this,new Float32Array(t),e,n)}Pt.prototype=Object.create(xt.prototype);Pt.prototype.constructor=Pt;function qs(t,e,n){xt.call(this,new Float64Array(t),e,n)}qs.prototype=Object.create(xt.prototype);qs.prototype.constructor=qs;class qh{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const f=e.morphNormals,h=f.length;let d;if(h>0){d=[];for(let g=0;g<h;g++)d[g]={name:f[g].name,data:[]};this.morphTargets.normal=d}const u=e.skinIndices,m=e.skinWeights,y=u.length===i.length,v=m.length===i.length;i.length>0&&n.length;for(let g=0;g<n.length;g++){const p=n[g];this.vertices.push(i[p.a],i[p.b],i[p.c]);const S=p.vertexNormals;if(S.length===3)this.normals.push(S[0],S[1],S[2]);else{const E=p.normal;this.normals.push(E,E,E)}const T=p.vertexColors;if(T.length===3)this.colors.push(T[0],T[1],T[2]);else{const E=p.color;this.colors.push(E,E,E)}if(s===!0){const E=r[0][g];E!==void 0?this.uvs.push(E[0],E[1],E[2]):this.uvs.push(new k,new k,new k)}if(o===!0){const E=r[1][g];E!==void 0?this.uvs2.push(E[0],E[1],E[2]):this.uvs2.push(new k,new k,new k)}for(let E=0;E<c;E++){const b=a[E].vertices;l[E].data.push(b[p.a],b[p.b],b[p.c])}for(let E=0;E<h;E++){const b=f[E].vertexNormals[g];d[E].data.push(b.a,b.b,b.c)}y&&this.skinIndices.push(u[p.a],u[p.b],u[p.c]),v&&this.skinWeights.push(m[p.a],m[p.b],m[p.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Mc(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}let Xh=1;const Ce=new Et,Ss=new ft,kn=new w,ue=new mn,Ei=new mn,Yt=new w;function Nt(){Object.defineProperty(this,"id",{value:Xh+=2}),this.uuid=_t.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Nt.prototype=Object.assign(Object.create($e.prototype),{constructor:Nt,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Mc(t)>65535?Wi:Vi)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this},rotateY:function(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this},rotateZ:function(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this},translate:function(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this},scale:function(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this},lookAt:function(t){return Ss.lookAt(t),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new Pt(e.vertices.length*3,3),i=new Pt(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new Pt(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new qh().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new xt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new xt(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(t.colors.length*3);this.setAttribute("color",new xt(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new xt(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new xt(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Pt(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new Pt(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new Pt(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ue.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,ue.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,ue.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(ue.min),this.boundingBox.expandByPoint(ue.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(ue.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(ue.min,Ei.min),ue.expandByPoint(Yt),Yt.addVectors(ue.max,Ei.max),ue.expandByPoint(Yt)):(ue.expandByPoint(Ei.min),ue.expandByPoint(Ei.max))}ue.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Yt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Yt));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Yt.fromBufferAttribute(o,c),a&&(kn.fromBufferAttribute(t,c),Yt.add(kn)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new w,r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,f=new w;if(t)for(let h=0,d=t.count;h<d;h+=3){const u=t.getX(h+0),m=t.getX(h+1),y=t.getX(h+2);i.fromBufferAttribute(e,u),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,y),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),o.fromBufferAttribute(n,u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry))return;e===void 0&&(e=0);const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let f=0,h=c;f<l;f++,h++)s[h]=a[f]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Yt.fromBufferAttribute(t,e),Yt.normalize(),t.setXYZ(e,Yt.x,Yt.y,Yt.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,f=o.normalized,h=new c.constructor(a.length*l);let d=0,u=0;for(let m=0,y=a.length;m<y;m++){d=a[m]*l;for(let v=0;v<l;v++)h[u++]=c[d++]}return new xt(h,l,f)}if(this.index===null)return this;const e=new Nt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,f=c.length;l<f;l++){const h=c[l],d=t(h,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=d.toJSON(t.data);d.name!==""&&(u.name=d.name),l.push(u)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Nt().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],f=r[c];for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const la=new Et,_n=new nr,Es=new gn,rn=new w,sn=new w,on=new w,Ts=new w,As=new w,Ls=new w,dr=new w,pr=new w,mr=new w,Kn=new k,ti=new k,ei=new k,Bi=new w,gr=new w;function ne(t,e){ft.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new Nt,this.material=e!==void 0?e:new Sn,this.updateMorphTargets()}ne.prototype=Object.assign(Object.create(ft.prototype),{constructor:ne,isMesh:!0,copy:function(t){return ft.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),t.ray.intersectsSphere(Es)===!1)||(la.getInverse(r),_n.copy(t.ray).applyMatrix4(la),n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,y=d.length;m<y;m++){const v=d[m],g=i[v.materialIndex],p=Math.max(v.start,u.start),S=Math.min(v.start+v.count,u.start+u.count);for(let T=p,E=S;T<E;T+=3){const b=o.getX(T),C=o.getX(T+1),B=o.getX(T+2);s=yr(this,g,t,_n,a,c,l,f,h,b,C,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let v=m,g=y;v<g;v+=3){const p=o.getX(v),S=o.getX(v+1),T=o.getX(v+2);s=yr(this,i,t,_n,a,c,l,f,h,p,S,T),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,y=d.length;m<y;m++){const v=d[m],g=i[v.materialIndex],p=Math.max(v.start,u.start),S=Math.min(v.start+v.count,u.start+u.count);for(let T=p,E=S;T<E;T+=3){const b=T,C=T+1,B=T+2;s=yr(this,g,t,_n,a,c,l,f,h,b,C,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let v=m,g=y;v<g;v+=3){const p=v,S=v+1,T=v+2;s=yr(this,i,t,_n,a,c,l,f,h,p,S,T),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const f=n.faceVertexUvs[0];f.length>0&&(l=f);for(let h=0,d=c.length;h<d;h++){const u=c[h],m=o?i[u.materialIndex]:i;if(m===void 0)continue;const y=a[u.a],v=a[u.b],g=a[u.c];if(s=wc(this,m,t,_n,y,v,g,Bi),s){if(l&&l[h]){const p=l[h];Kn.copy(p[0]),ti.copy(p[1]),ei.copy(p[2]),s.uv=te.getUV(Bi,y,v,g,Kn,ti,ei,new k)}s.face=u,s.faceIndex=h,e.push(s)}}}}});function wc(t,e,n,i,r,s,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Kr,a),c===null)return null;gr.copy(a),gr.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(gr);return l<n.near||l>n.far?null:{distance:l,point:gr.clone(),object:t}}function yr(t,e,n,i,r,s,o,a,c,l,f,h){rn.fromBufferAttribute(r,l),sn.fromBufferAttribute(r,f),on.fromBufferAttribute(r,h);const d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){dr.set(0,0,0),pr.set(0,0,0),mr.set(0,0,0);for(let m=0,y=s.length;m<y;m++){const v=d[m],g=s[m];v!==0&&(Ts.fromBufferAttribute(g,l),As.fromBufferAttribute(g,f),Ls.fromBufferAttribute(g,h),o?(dr.addScaledVector(Ts,v),pr.addScaledVector(As,v),mr.addScaledVector(Ls,v)):(dr.addScaledVector(Ts.sub(rn),v),pr.addScaledVector(As.sub(sn),v),mr.addScaledVector(Ls.sub(on),v)))}rn.add(dr),sn.add(pr),on.add(mr)}t.isSkinnedMesh&&(t.boneTransform(l,rn),t.boneTransform(f,sn),t.boneTransform(h,on));const u=wc(t,e,n,i,rn,sn,on,Bi);if(u){a&&(Kn.fromBufferAttribute(a,l),ti.fromBufferAttribute(a,f),ei.fromBufferAttribute(a,h),u.uv=te.getUV(Bi,rn,sn,on,Kn,ti,ei,new k)),c&&(Kn.fromBufferAttribute(c,l),ti.fromBufferAttribute(c,f),ei.fromBufferAttribute(c,h),u.uv2=te.getUV(Bi,rn,sn,on,Kn,ti,ei,new k));const m=new Hs(l,f,h);te.getNormal(rn,sn,on,m.normal),u.face=m}return u}class Sc extends Nt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let d=0,u=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function m(y,v,g,p,S,T,E,b,C,B,Z){const X=T/C,A=E/B,O=T/2,D=E/2,F=b/2,R=C+1,P=B+1;let z=0,G=0;const tt=new w;for(let ot=0;ot<P;ot++){const it=ot*A-D;for(let gt=0;gt<R;gt++){const bt=gt*X-O;tt[y]=bt*p,tt[v]=it*S,tt[g]=F,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[v]=0,tt[g]=b>0?1:-1,f.push(tt.x,tt.y,tt.z),h.push(gt/C),h.push(1-ot/B),z+=1}}for(let ot=0;ot<B;ot++)for(let it=0;it<C;it++){const gt=d+it+R*ot,bt=d+it+R*(ot+1),kt=d+(it+1)+R*(ot+1),H=d+(it+1)+R*ot;c.push(gt,bt,H),c.push(bt,kt,H),G+=6}a.addGroup(u,G,Z),u+=G,d+=z}}}function oi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=oi(t[n]);for(const r in i)e[r]=i[r]}return e}const Yh={clone:oi,merge:Kt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function le(t){pt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes,this.setValues(t))}le.prototype=Object.create(pt.prototype);le.prototype.constructor=le;le.prototype.isShaderMaterial=!0;le.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};le.prototype.toJSON=function(t){const e=pt.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function fn(){ft.call(this),this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}fn.prototype=Object.assign(Object.create(ft.prototype),{constructor:fn,isCamera:!0,copy:function(t,e){return ft.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(t=new w),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ft.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(t,e){ft.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function Qt(t,e,n,i){fn.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=e!==void 0?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Qt.prototype=Object.assign(Object.create(fn.prototype),{constructor:Qt,isPerspectiveCamera:!0,copy:function(t,e){return fn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=_t.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(_t.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return _t.RAD2DEG*2*Math.atan(Math.tan(_t.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(_t.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const Vn=90,Wn=1;function ai(t,e,n){if(ft.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return;this.renderTarget=n;const i=new Qt(Vn,Wn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new Qt(Vn,Wn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const s=new Qt(Vn,Wn,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);const o=new Qt(Vn,Wn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const a=new Qt(Vn,Wn,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(0,0,1)),this.add(a);const c=new Qt(Vn,Wn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c),this.update=function(l,f){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(f,i),l.setRenderTarget(n,1),l.render(f,r),l.setRenderTarget(n,2),l.render(f,s),l.setRenderTarget(n,3),l.render(f,o),l.setRenderTarget(n,4),l.render(f,a),n.texture.generateMipmaps=u,l.setRenderTarget(n,5),l.render(f,c),l.setRenderTarget(d),l.xr.enabled=h}}ai.prototype=Object.create(ft.prototype);ai.prototype.constructor=ai;function dn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:yo,o=o!==void 0?o:Mn,zt.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}dn.prototype=Object.create(zt.prototype);dn.prototype.constructor=dn;dn.prototype.isCubeTexture=!0;Object.defineProperty(dn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function En(t,e,n){Number.isInteger(e)&&(e=n),Le.call(this,t,t,e),e=e||{},this.texture=new dn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}En.prototype=Object.create(Le.prototype);En.prototype.constructor=En;En.prototype.isWebGLCubeRenderTarget=!0;En.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=Ae,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new Sc(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Di});r.uniforms.tEquirect.value=e;const s=new ne(i,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=ee),new ai(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};En.prototype.clear=function(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function ci(t,e,n,i,r,s,o,a,c,l,f,h){zt.call(this,null,s,o,a,c,l,i,r,f,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:re,this.minFilter=l!==void 0?l:re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}ci.prototype=Object.create(zt.prototype);ci.prototype.constructor=ci;ci.prototype.isDataTexture=!0;const jn=new gn,vr=new w;class is{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new qe,n!==void 0?n:new qe,i!==void 0?i:new qe,r!==void 0?r:new qe,s!==void 0?s:new qe,o!==void 0?o:new qe]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],h=i[7],d=i[8],u=i[9],m=i[10],y=i[11],v=i[12],g=i[13],p=i[14],S=i[15];return n[0].setComponents(a-r,h-c,y-d,S-v).normalize(),n[1].setComponents(a+r,h+c,y+d,S+v).normalize(),n[2].setComponents(a+s,h+l,y+u,S+g).normalize(),n[3].setComponents(a-s,h-l,y-u,S-g).normalize(),n[4].setComponents(a-o,h-f,y-m,S-p).normalize(),n[5].setComponents(a+o,h+f,y+m,S+p).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),jn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vr.x=r.normal.x>0?e.max.x:e.min.x,vr.y=r.normal.y>0?e.max.y:e.min.y,vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function Ec(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Qh(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,f){const h=l.array,d=l.usage,u=t.createBuffer();t.bindBuffer(f,u),t.bufferData(f,h,d),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array||(h instanceof Uint16Array?m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121)),{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,h){const d=f.array,u=f.updateRange;t.bindBuffer(h,l),u.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){var h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,f)):d.version<l.version&&(s(d.buffer,l,f),d.version=l.version)}return{get:o,remove:a,update:c}}class $h extends Nt{constructor(e,n,i,r){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r},e=e||1,n=n||1;const s=e/2,o=n/2,a=Math.floor(i)||1,c=Math.floor(r)||1,l=a+1,f=c+1,h=e/a,d=n/c,u=[],m=[],y=[],v=[];for(let g=0;g<f;g++){const p=g*d-o;for(let S=0;S<l;S++){const T=S*h-s;m.push(T,-p,0),y.push(0,0,1),v.push(S/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){const S=p+l*g,T=p+l*(g+1),E=p+1+l*(g+1),b=p+1+l*g;u.push(S,T,b),u.push(T,E,b)}this.setIndex(u),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(v,2))}}var Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru="vec3 transformed = vec3( position );",su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,du=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Eu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Uu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,zu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ku=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,lf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,hf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,ff=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
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
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Of=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Ff=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Uf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ld=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,pd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vd=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const At={alphamap_fragment:Kh,alphamap_pars_fragment:tu,alphatest_fragment:eu,aomap_fragment:nu,aomap_pars_fragment:iu,begin_vertex:ru,beginnormal_vertex:su,bsdfs:ou,bumpmap_pars_fragment:au,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:fu,color_pars_fragment:du,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:vu,displacementmap_pars_vertex:xu,displacementmap_vertex:_u,emissivemap_fragment:bu,emissivemap_pars_fragment:Mu,encodings_fragment:wu,encodings_pars_fragment:Su,envmap_fragment:Eu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:zu,envmap_vertex:Cu,fog_vertex:Ru,fog_pars_vertex:Pu,fog_fragment:Iu,fog_pars_fragment:Du,gradientmap_pars_fragment:Nu,lightmap_fragment:Ou,lightmap_pars_fragment:Fu,lights_lambert_vertex:Bu,lights_pars_begin:Uu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Gu,lights_phong_fragment:ku,lights_phong_pars_fragment:Vu,lights_physical_fragment:Wu,lights_physical_pars_fragment:ju,lights_fragment_begin:qu,lights_fragment_maps:Xu,lights_fragment_end:Yu,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:Qu,logdepthbuf_vertex:$u,map_fragment:Ku,map_pars_fragment:tf,map_particle_fragment:ef,map_particle_pars_fragment:nf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:sf,morphnormal_vertex:of,morphtarget_pars_vertex:af,morphtarget_vertex:cf,normal_fragment_begin:lf,normal_fragment_maps:hf,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:yf,dithering_fragment:vf,dithering_pars_fragment:xf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:wf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:Lf,skinnormal_vertex:Cf,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:If,tonemapping_pars_fragment:Df,transmissionmap_fragment:Nf,transmissionmap_pars_fragment:Of,uv_pars_fragment:Ff,uv_pars_vertex:Bf,uv_vertex:Uf,uv2_pars_fragment:zf,uv2_pars_vertex:Hf,uv2_vertex:Gf,worldpos_vertex:kf,background_frag:Vf,background_vert:Wf,cube_frag:jf,cube_vert:qf,depth_frag:Xf,depth_vert:Yf,distanceRGBA_frag:Zf,distanceRGBA_vert:Jf,equirect_frag:Qf,equirect_vert:$f,linedashed_frag:Kf,linedashed_vert:td,meshbasic_frag:ed,meshbasic_vert:nd,meshlambert_frag:id,meshlambert_vert:rd,meshmatcap_frag:sd,meshmatcap_vert:od,meshtoon_frag:ad,meshtoon_vert:cd,meshphong_frag:ld,meshphong_vert:hd,meshphysical_frag:ud,meshphysical_vert:fd,normal_frag:dd,normal_vert:pd,points_frag:md,points_vert:gd,shadow_frag:yd,shadow_vert:vd,sprite_frag:xd,sprite_vert:_d},Q={common:{diffuse:{value:new ct(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ce},uv2Transform:{value:new ce},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ct(15658734)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}}},Pe={basic:{uniforms:Kt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Kt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.fog,Q.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Kt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Kt([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Kt([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Kt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Kt([Q.points,Q.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Kt([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Kt([Q.common,Q.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Kt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:At.normal_vert,fragmentShader:At.normal_frag},sprite:{uniforms:Kt([Q.sprite,Q.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:Kt([Q.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Kt([Q.common,Q.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Kt([Q.lights,Q.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Pe.physical={uniforms:Kt([Pe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new k(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ct(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function bd(t,e,n,i,r){const s=new ct(0);let o=0,a,c,l=null,f=0,h=null;function d(m,y,v,g){let p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));const S=t.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(p=null),p===null?u(s,o):p&&p.isColor&&(u(p,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===xo)?(c===void 0&&(c=new ne(new Sc(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:oi(Pe.cube.uniforms),vertexShader:Pe.cube.vertexShader,fragmentShader:Pe.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),p.isWebGLCubeRenderTarget&&(p=p.texture),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||f!==p.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=p,f=p.version,h=t.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new ne(new $h(2,2),new le({name:"BackgroundMaterial",uniforms:oi(Pe.background.uniforms),vertexShader:Pe.background.vertexShader,fragmentShader:Pe.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||f!==p.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=p,f=p.version,h=t.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function u(m,y){n.buffers.color.setClear(m.r,m.g,m.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(m,y){s.set(m),o=y!==void 0?y:1,u(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,u(s,o)},render:d}}function Md(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function f(D,F,R,P,z){let G=!1;if(o){const tt=m(P,R,F);l!==tt&&(l=tt,d(l.object)),G=v(P,z),G&&g(P,z)}else{const tt=F.wireframe===!0;(l.geometry!==P.id||l.program!==R.id||l.wireframe!==tt)&&(l.geometry=P.id,l.program=R.id,l.wireframe=tt,G=!0)}D.isInstancedMesh===!0&&(G=!0),z!==null&&n.update(z,34963),G&&(C(D,F,R,P),z!==null&&t.bindBuffer(34963,n.get(z).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function u(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,F,R){const P=R.wireframe===!0;let z=a[D.id];z===void 0&&(z={},a[D.id]=z);let G=z[F.id];G===void 0&&(G={},z[F.id]=G);let tt=G[P];return tt===void 0&&(tt=y(h()),G[P]=tt),tt}function y(D){const F=[],R=[],P=[];for(let z=0;z<r;z++)F[z]=0,R[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:R,attributeDivisors:P,object:D,attributes:{},index:null}}function v(D,F){const R=l.attributes,P=D.attributes;if(Object.keys(R).length!==Object.keys(P).length)return!0;for(const z in P){const G=R[z],tt=P[z];if(G===void 0||G.attribute!==tt||G.data!==tt.data)return!0}return l.index!==F}function g(D,F){const R={},P=D.attributes;for(const z in P){const G=P[z],tt={};tt.attribute=G,G.data&&(tt.data=G.data),R[z]=tt}l.attributes=R,l.index=F}function p(){const D=l.newAttributes;for(let F=0,R=D.length;F<R;F++)D[F]=0}function S(D){T(D,0)}function T(D,F){const R=l.newAttributes,P=l.enabledAttributes,z=l.attributeDivisors;R[D]=1,P[D]===0&&(t.enableVertexAttribArray(D),P[D]=1),z[D]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),z[D]=F)}function E(){const D=l.newAttributes,F=l.enabledAttributes;for(let R=0,P=F.length;R<P;R++)F[R]!==D[R]&&(t.disableVertexAttribArray(R),F[R]=0)}function b(D,F,R,P,z,G){i.isWebGL2===!0&&(R===5124||R===5125)?t.vertexAttribIPointer(D,F,R,z,G):t.vertexAttribPointer(D,F,R,P,z,G)}function C(D,F,R,P){if(i.isWebGL2===!1&&(D.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const z=P.attributes,G=R.getAttributes(),tt=F.defaultAttributeValues;for(const ot in G){const it=G[ot];if(it>=0){const gt=z[ot];if(gt!==void 0){const bt=gt.normalized,kt=gt.itemSize,H=n.get(gt);if(H===void 0)continue;const $t=H.buffer,dt=H.type,Rt=H.bytesPerElement;if(gt.isInterleavedBufferAttribute){const Mt=gt.data,It=Mt.stride,Tt=gt.offset;Mt&&Mt.isInstancedInterleavedBuffer?(T(it,Mt.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=Mt.meshPerAttribute*Mt.count)):S(it),t.bindBuffer(34962,$t),b(it,kt,dt,bt,It*Rt,Tt*Rt)}else gt.isInstancedBufferAttribute?(T(it,gt.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=gt.meshPerAttribute*gt.count)):S(it),t.bindBuffer(34962,$t),b(it,kt,dt,bt,0,0)}else if(ot==="instanceMatrix"){const bt=n.get(D.instanceMatrix);if(bt===void 0)continue;const kt=bt.buffer,H=bt.type;T(it+0,1),T(it+1,1),T(it+2,1),T(it+3,1),t.bindBuffer(34962,kt),t.vertexAttribPointer(it+0,4,H,!1,64,0),t.vertexAttribPointer(it+1,4,H,!1,64,16),t.vertexAttribPointer(it+2,4,H,!1,64,32),t.vertexAttribPointer(it+3,4,H,!1,64,48)}else if(ot==="instanceColor"){const bt=n.get(D.instanceColor);if(bt===void 0)continue;const kt=bt.buffer,H=bt.type;T(it,1),t.bindBuffer(34962,kt),t.vertexAttribPointer(it,3,H,!1,12,0)}else if(tt!==void 0){const bt=tt[ot];if(bt!==void 0)switch(bt.length){case 2:t.vertexAttrib2fv(it,bt);break;case 3:t.vertexAttrib3fv(it,bt);break;case 4:t.vertexAttrib4fv(it,bt);break;default:t.vertexAttrib1fv(it,bt)}}}}E()}function B(){A();for(const D in a){const F=a[D];for(const R in F){const P=F[R];for(const z in P)u(P[z].object),delete P[z];delete F[R]}delete a[D]}}function Z(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const R in F){const P=F[R];for(const z in P)u(P[z].object),delete P[z];delete F[R]}delete a[D.id]}function X(D){for(const F in a){const R=a[F];if(R[D.id]===void 0)continue;const P=R[D.id];for(const z in P)u(P[z].object),delete P[z];delete R[D.id]}}function A(){O(),l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:A,resetDefaultState:O,dispose:B,releaseStatesOfGeometry:Z,releaseStatesOfProgram:X,initAttributes:p,enableAttribute:S,disableUnusedAttributes:E}}function wd(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,f){t.drawArrays(s,l,f),n.update(f,s,1)}function c(l,f,h){if(h===0)return;let d,u;if(r)d=t,u="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",d===null)return;d[u](s,l,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Sd(t,e,n){let i;function r(){if(i!==void 0)return i;const b=e.get("EXT_texture_filter_anisotropic");return b!==null?i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(a=c);const l=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),h=t.getParameter(35660),d=t.getParameter(3379),u=t.getParameter(34076),m=t.getParameter(34921),y=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),p=h>0,S=o||!!e.get("OES_texture_float"),T=p&&S,E=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:E}}function Ed(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qe,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,u){const m=h.length!==0||d||i!==0||r;return r=d,n=f(h,u,0),i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,u){const m=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,g=t.get(h);if(!r||m===null||m.length===0||s&&!v)s?f(null):l();else{const p=s?0:i,S=p*4;let T=g.clippingState||null;c.value=T,T=f(m,d,S,u);for(let E=0;E!==S;++E)T[E]=n[E];g.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,m){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=c.value,m!==!0||v===null){const g=u+y*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<g)&&(v=new Float32Array(g));for(let S=0,T=u;S!==y;++S,T+=4)o.copy(h[S]).applyMatrix4(p,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Td(t){let e=new WeakMap;function n(o,a){return a===Uo?o.mapping=yo:a===zo&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===zo)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=t.getRenderList(),f=t.getRenderTarget(),h=t.getRenderState(),d=new En(c.height/2);return d.fromEquirectangularTexture(t,o),e.set(o,d),t.setRenderTarget(f),t.setRenderList(l),t.setRenderState(h),o.addEventListener("dispose",r),n(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Ad(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n),e[n]}}}function Ld(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,u=r.get(d);u.index!==null&&e.remove(u.index);for(const y in u.attributes)e.remove(u.attributes[y]);d.removeEventListener("dispose",o),r.delete(d);const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let u=r.get(d);return u||(d.addEventListener("dispose",o),d.isBufferGeometry?u=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new Nt().setFromObject(h)),u=d._bufferGeometry),r.set(d,u),n.memory.geometries++,u)}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],34962);const u=h.morphAttributes;for(const m in u){const y=u[m];for(let v=0,g=y.length;v<g;v++)e.update(y[v],34962)}}function l(h){const d=[],u=h.index,m=h.attributes.position;let y=0;if(u!==null){const p=u.array;y=u.version;for(let S=0,T=p.length;S<T;S+=3){const E=p[S+0],b=p[S+1],C=p[S+2];d.push(E,b,b,C,C,E)}}else{const p=m.array;y=m.version;for(let S=0,T=p.length/3-1;S<T;S+=3){const E=S+0,b=S+1,C=S+2;d.push(E,b,b,C,C,E)}}const v=new(Mc(d)>65535?Wi:Vi)(d,1);v.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,v)}function f(h){const d=s.get(h);if(d){const u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Cd(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function f(d,u){t.drawElements(s,u,a,d*c),n.update(u,s,1)}function h(d,u,m){if(m===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null)return;y[v](s,u,a,d*c,m),n.update(u,s,m)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=h}function Rd(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Pd(t,e){return t[0]-e[0]}function Id(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Dd(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,f=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let v=0;v<f;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<f;v++){const g=h[v];g[0]=v,g[1]=l[v]}h.sort(Id);for(let v=0;v<8;v++)v<f&&h[v][1]?(i[v][0]=h[v][0],i[v][1]=h[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(Pd);const d=a.morphTargets&&o.morphAttributes.position,u=a.morphNormals&&o.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const g=i[v],p=g[0],S=g[1];p!==Number.MAX_SAFE_INTEGER&&S?(d&&o.getAttribute("morphTarget"+v)!==d[p]&&o.setAttribute("morphTarget"+v,d[p]),u&&o.getAttribute("morphNormal"+v)!==u[p]&&o.setAttribute("morphNormal"+v,u[p]),n[v]=S,m+=S):(d&&o.getAttribute("morphTarget"+v)!==void 0&&o.deleteAttribute("morphTarget"+v),u&&o.getAttribute("morphNormal"+v)!==void 0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}const y=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Nd(t,e,n,i){let r=new WeakMap;function s(a){const c=i.render.frame,l=a.geometry,f=e.get(a,l);return r.get(f)!==c&&(l.isGeometry&&f.updateFromObject(a),e.update(f),r.set(f,c)),a.isInstancedMesh&&(n.update(a.instanceMatrix,34962),a.instanceColor!==null&&n.update(a.instanceColor,34962)),f}function o(){r=new WeakMap}return{update:s,dispose:o}}function ji(t,e,n,i){zt.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=re,this.minFilter=re,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ji.prototype=Object.create(zt.prototype);ji.prototype.constructor=ji;ji.prototype.isDataTexture2DArray=!0;function qi(t,e,n,i){zt.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=re,this.minFilter=re,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}qi.prototype=Object.create(zt.prototype);qi.prototype.constructor=qi;qi.prototype.isDataTexture3D=!0;const Tc=new zt,Od=new ji,Fd=new qi,Ac=new dn,ha=[],ua=[],fa=new Float32Array(16),da=new Float32Array(9),pa=new Float32Array(4);function vi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ha[r];if(s===void 0&&(s=new Float32Array(r),ha[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function xe(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pe(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=ua[e];n===void 0&&(n=new Int32Array(e),ua[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Bd(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ud(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xe(n,e))return;t.uniform2fv(this.addr,e),pe(n,e)}}function zd(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xe(n,e))return;t.uniform3fv(this.addr,e),pe(n,e)}}function Hd(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xe(n,e))return;t.uniform4fv(this.addr,e),pe(n,e)}}function Gd(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xe(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pe(n,e)}else{if(xe(n,i))return;pa.set(i),t.uniformMatrix2fv(this.addr,!1,pa),pe(n,i)}}function kd(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xe(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pe(n,e)}else{if(xe(n,i))return;da.set(i),t.uniformMatrix3fv(this.addr,!1,da),pe(n,i)}}function Vd(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xe(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pe(n,e)}else{if(xe(n,i))return;fa.set(i),t.uniformMatrix4fv(this.addr,!1,fa),pe(n,i)}}function Wd(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Tc,r)}function jd(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Od,r)}function qd(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Fd,r)}function Xd(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Ac,r)}function Yd(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Zd(t,e){const n=this.cache;xe(n,e)||(t.uniform2iv(this.addr,e),pe(n,e))}function Jd(t,e){const n=this.cache;xe(n,e)||(t.uniform3iv(this.addr,e),pe(n,e))}function Qd(t,e){const n=this.cache;xe(n,e)||(t.uniform4iv(this.addr,e),pe(n,e))}function $d(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kd(t){switch(t){case 5126:return Bd;case 35664:return Ud;case 35665:return zd;case 35666:return Hd;case 35674:return Gd;case 35675:return kd;case 35676:return Vd;case 5124:case 35670:return Yd;case 35667:case 35671:return Zd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return jd}}function tp(t,e){t.uniform1fv(this.addr,e)}function ep(t,e){t.uniform1iv(this.addr,e)}function np(t,e){t.uniform2iv(this.addr,e)}function ip(t,e){t.uniform3iv(this.addr,e)}function rp(t,e){t.uniform4iv(this.addr,e)}function sp(t,e){const n=vi(e,this.size,2);t.uniform2fv(this.addr,n)}function op(t,e){const n=vi(e,this.size,3);t.uniform3fv(this.addr,n)}function ap(t,e){const n=vi(e,this.size,4);t.uniform4fv(this.addr,n)}function cp(t,e){const n=vi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lp(t,e){const n=vi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hp(t,e){const n=vi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function up(t,e,n){const i=e.length,r=Lc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||Tc,r[s])}function fp(t,e,n){const i=e.length,r=Lc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||Ac,r[s])}function dp(t){switch(t){case 5126:return tp;case 35664:return sp;case 35665:return op;case 35666:return ap;case 35674:return cp;case 35675:return lp;case 35676:return hp;case 5124:case 35670:return ep;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35680:case 36300:case 36308:case 36293:return fp}}function pp(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Kd(e.type)}function Cc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=dp(e.type)}Cc.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),pe(e,t)};function Rc(t){this.id=t,this.seq=[],this.map={}}Rc.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const Cs=/([\w\d_]+)(\])?(\[|\.)?/g;function ma(t,e){t.seq.push(e),t.map[e.id]=e}function mp(t,e,n){const i=t.name,r=i.length;for(Cs.lastIndex=0;;){const s=Cs.exec(i),o=Cs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ma(n,l===void 0?new pp(a,t,e):new Cc(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Rc(a),ma(n,h)),n=h}}}function hn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);mp(r,s,this)}}hn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)};hn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)};hn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};hn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function ga(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let gp=0;function yp(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Pc(t){switch(t){case er:return["Linear","( value )"];case xc:return["sRGB","( value )"];case Th:return["RGBE","( value )"];case Lh:return["RGBM","( value, 7.0 )"];case Ch:return["RGBM","( value, 16.0 )"];case Rh:return["RGBD","( value, 256.0 )"];case Eh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Ah:return["LogLuv","( value )"];default:return["Linear","( value )"]}}function ya(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+yp(s)}function Ti(t,e){const n=Pc(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function vp(t,e){const n=Pc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function xp(t,e){let n;switch(e){case Sl:n="Linear";break;case El:n="Reinhard";break;case Tl:n="OptimizedCineon";break;case Al:n="ACESFilmic";break;case Ll:n="Custom";break;default:n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _p(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function bp(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Mp(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Ii(t){return t!==""}function va(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xa(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(t){return t.replace(wp,Sp)}function Sp(t,e){const n=At[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Xs(n)}const Ep=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _a(t){return t.replace(Tp,Ic).replace(Ep,Ap)}function Ap(t,e,n,i){return Ic(t,e,n,i)}function Ic(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ba(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lp(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Cp(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case yo:case vo:e="ENVMAP_TYPE_CUBE";break;case xo:case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rp(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vo:case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function Pp(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ts:e="ENVMAP_BLENDING_MULTIPLY";break;case Ml:e="ENVMAP_BLENDING_MIX";break;case wl:e="ENVMAP_BLENDING_ADD";break}return e}function Ip(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Lp(n),l=Cp(n),f=Rp(n),h=Pp(n),d=t.gammaFactor>0?t.gammaFactor:1,u=n.isWebGL2?"":_p(n),m=bp(s),y=r.createProgram();let v,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[m].filter(Ii).join(`
`),v.length>0&&(v+=`
`),g=[u,m].filter(Ii).join(`
`),g.length>0&&(g+=`
`)):(v=[ba(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),g=[u,ba(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?At.tonemapping_pars_fragment:"",n.toneMapping!==Oi?xp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",At.encodings_pars_fragment,n.map?Ti("mapTexelToLinear",n.mapEncoding):"",n.matcap?Ti("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Ti("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Ti("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Ti("lightMapTexelToLinear",n.lightMapEncoding):"",vp("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Xs(o),o=va(o,n),o=xa(o,n),a=Xs(a),a=va(a,n),a=xa(a,n),o=_a(o),a=_a(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===$o?"":"out highp vec4 pc_fragColor;",n.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=p+v+o,T=p+g+a,E=ga(r,35633,S),b=ga(r,35632,T);if(r.attachShader(y,E),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(y).trim(),X=r.getShaderInfoLog(E).trim(),A=r.getShaderInfoLog(b).trim();let O=!0,D=!0;if(r.getProgramParameter(y,35714)===!1){O=!1;const F=ya(r,E,"vertex"),R=ya(r,b,"fragment")}else Z!==""||(X===""||A==="")&&(D=!1);D&&(this.diagnostics={runnable:O,programLog:Z,vertexShader:{log:X,prefix:v},fragmentShader:{log:A,prefix:g}})}r.deleteShader(E),r.deleteShader(b);let C;this.getUniforms=function(){return C===void 0&&(C=new hn(r,y)),C};let B;return this.getAttributes=function(){return B===void 0&&(B=Mp(r,y)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=gp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}function Dp(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(b){const B=b.skeleton.bones;if(l)return 1024;{const X=Math.floor((f-20)/4),A=Math.min(X,B.length);return A<B.length?0:A}}function v(b){let C;return b?b.isTexture?C=b.encoding:b.isWebGLRenderTarget&&(C=b.texture.encoding):C=er,C}function g(b,C,B,Z,X){const A=Z.fog,O=b.isMeshStandardMaterial?Z.environment:null,D=e.get(b.envMap||O),F=u[b.type],R=X.isSkinnedMesh?y(X):0;b.precision!==null&&(d=i.getMaxPrecision(b.precision),b.precision);let P,z;if(F){const ot=Pe[F];P=ot.vertexShader,z=ot.fragmentShader}else P=b.vertexShader,z=b.fragmentShader;const G=t.getRenderTarget();return{isWebGL2:a,shaderID:F,shaderName:b.type,vertexShader:P,fragmentShader:z,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G!==null?v(G.texture):t.outputEncoding,map:!!b.map,mapEncoding:v(b.map),matcap:!!b.matcap,matcapEncoding:v(b.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:v(D),envMapCubeUV:!!D&&(D.mapping===xo||D.mapping===_o),lightMap:!!b.lightMap,lightMapEncoding:v(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:v(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Dh,tangentSpaceNormalMap:b.normalMapType===yi,clearcoatMap:!!b.clearcoatMap,clearcoatRoughnessMap:!!b.clearcoatRoughnessMap,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,transmissionMap:!!b.transmissionMap,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.transmissionMap)&&!!b.displacementMap,fog:!!A,useFog:b.fog,fogExp2:A&&A.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c,skinning:b.skinning&&R>0,maxBones:R,useVertexTexture:l,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:b.toneMapped?t.toneMapping:Oi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===Kr,flipSided:b.side===Jt,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.fragmentShader),C.push(b.vertexShader)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);if(b.isRawShaderMaterial===!1){for(let B=0;B<m.length;B++)C.push(b[m[B]]);C.push(t.outputEncoding),C.push(t.gammaFactor)}return C.push(b.customProgramCacheKey),C.join()}function S(b){const C=u[b.type];let B;if(C){const Z=Pe[C];B=Yh.clone(Z.uniforms)}else B=b.uniforms;return B}function T(b,C){let B;for(let Z=0,X=o.length;Z<X;Z++){const A=o[Z];if(A.cacheKey===C){B=A,++B.usedTimes;break}}return B===void 0&&(B=new Ip(t,C,b,r),o.push(B)),B}function E(b){if(--b.usedTimes===0){const C=o.indexOf(b);o[C]=o[o.length-1],o.pop(),b.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:E,programs:o}}function Np(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Op(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ma(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,u,m,y,v,g){let p=e[n];const S=t.get(m);return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,program:S.program||s,groupOrder:y,renderOrder:d.renderOrder,z:v,group:g},e[n]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.program=S.program||s,p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=v,p.group=g),n++,p}function c(d,u,m,y,v,g){const p=a(d,u,m,y,v,g);(m.transparent===!0?r:i).push(p)}function l(d,u,m,y,v,g){const p=a(d,u,m,y,v,g);(m.transparent===!0?r:i).unshift(p)}function f(d,u){i.length>1&&i.sort(d||Op),r.length>1&&r.sort(u||Fp)}function h(){for(let d=n,u=e.length;d<u;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:f}}function Bp(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new Ma(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Ma(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function Up(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new w,color:new ct};break;case"SpotLight":n={position:new w,direction:new w,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new w,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new w,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new w,halfWidth:new w,halfHeight:new w};break}return t[e.id]=n,n}}}function zp(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hp=0;function Gp(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function kp(t,e){const n=new Up,i=zp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new w);const s=new w,o=new Et,a=new Et;function c(l,f,h){let d=0,u=0,m=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,v=0,g=0,p=0,S=0,T=0,E=0,b=0;const C=h.matrixWorldInverse;l.sort(Gp);for(let Z=0,X=l.length;Z<X;Z++){const A=l[Z],O=A.color,D=A.intensity,F=A.distance,R=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*D,u+=O.g*D,m+=O.b*D;else if(A.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(A.sh.coefficients[P],D);else if(A.isDirectionalLight){const P=n.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),P.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(C),A.castShadow){const z=A.shadow,G=i.get(A);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,r.directionalShadow[y]=G,r.directionalShadowMap[y]=R,r.directionalShadowMatrix[y]=A.shadow.matrix,T++}r.directional[y]=P,y++}else if(A.isSpotLight){const P=n.get(A);if(P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(C),P.color.copy(O).multiplyScalar(D),P.distance=F,P.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(C),P.coneCos=Math.cos(A.angle),P.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),P.decay=A.decay,A.castShadow){const z=A.shadow,G=i.get(A);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,r.spotShadow[g]=G,r.spotShadowMap[g]=R,r.spotShadowMatrix[g]=A.shadow.matrix,b++}r.spot[g]=P,g++}else if(A.isRectAreaLight){const P=n.get(A);P.color.copy(O).multiplyScalar(D),P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(C),a.identity(),o.copy(A.matrixWorld),o.premultiply(C),a.extractRotation(o),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),r.rectArea[p]=P,p++}else if(A.isPointLight){const P=n.get(A);if(P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(C),P.color.copy(A.color).multiplyScalar(A.intensity),P.distance=A.distance,P.decay=A.decay,A.castShadow){const z=A.shadow,G=i.get(A);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,r.pointShadow[v]=G,r.pointShadowMap[v]=R,r.pointShadowMatrix[v]=A.shadow.matrix,E++}r.point[v]=P,v++}else if(A.isHemisphereLight){const P=n.get(A);P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(C),P.direction.normalize(),P.skyColor.copy(A.color).multiplyScalar(D),P.groundColor.copy(A.groundColor).multiplyScalar(D),r.hemi[S]=P,S++}}p>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0&&(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=u,r.ambient[2]=m;const B=r.hash;(B.directionalLength!==y||B.pointLength!==v||B.spotLength!==g||B.rectAreaLength!==p||B.hemiLength!==S||B.numDirectionalShadows!==T||B.numPointShadows!==E||B.numSpotShadows!==b)&&(r.directional.length=y,r.spot.length=g,r.rectArea.length=p,r.point.length=v,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=b,B.directionalLength=y,B.pointLength=v,B.spotLength=g,B.rectAreaLength=p,B.hemiLength=S,B.numDirectionalShadows=T,B.numPointShadows=E,B.numSpotShadows=b,r.version=Hp++)}return{setup:c,state:r}}function wa(t,e){const n=new kp(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){n.setup(i,r,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,pushLight:o,pushShadow:a}}function Vp(t,e){let n=new WeakMap;function i(s,o){let a;return n.has(s)===!1?(a=new wa(t,e),n.set(s,new WeakMap),n.get(s).set(o,a)):n.get(s).has(o)===!1?(a=new wa(t,e),n.get(s).set(o,a)):a=n.get(s).get(o),a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Tn(t){pt.call(this),this.type="MeshDepthMaterial",this.depthPacking=Ph,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Tn.prototype=Object.create(pt.prototype);Tn.prototype.constructor=Tn;Tn.prototype.isMeshDepthMaterial=!0;Tn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function An(t){pt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}An.prototype=Object.create(pt.prototype);An.prototype.constructor=An;An.prototype.isMeshDistanceMaterial=!0;An.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Dc(t,e,n){let i=new is;const r=new k,s=new k,o=new Dt,a=[],c=[],l={},f={0:Jt,1:$r,2:Kr},h=new le({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:jp,fragmentShader:Wp}),d=h.clone();d.defines.HORIZONAL_PASS=1;const u=new Nt;u.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ne(u,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc,this.render=function(E,b,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;const B=t.getRenderTarget(),Z=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),A=t.state;A.setBlending(Di),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let O=0,D=E.length;O<D;O++){const F=E[O],R=F.shadow;if(R===void 0||R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const P=R.getFrameExtents();if(r.multiply(P),s.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/P.x),r.x=s.x*P.x,R.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/P.y),r.y=s.y*P.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===Pi){const G={minFilter:ee,magFilter:ee,format:Ae};R.map=new Le(r.x,r.y,G),R.map.texture.name=F.name+".shadowMap",R.mapPass=new Le(r.x,r.y,G),R.camera.updateProjectionMatrix()}if(R.map===null){const G={minFilter:re,magFilter:re,format:Ae};R.map=new Le(r.x,r.y,G),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const z=R.getViewportCount();for(let G=0;G<z;G++){const tt=R.getViewport(G);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),A.viewport(o),R.updateMatrices(F,G),i=R.getFrustum(),T(b,C,R.camera,F,this.type)}!R.isPointLightShadow&&this.type===Pi&&v(R,C),R.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(B,Z,X)};function v(E,b){const C=e.update(m);h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,C,h,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,C,d,m,null)}function g(E,b,C){const B=E<<0|b<<1|C<<2;let Z=a[B];return Z===void 0&&(Z=new Tn({depthPacking:Ih,morphTargets:E,skinning:b}),a[B]=Z),Z}function p(E,b,C){const B=E<<0|b<<1|C<<2;let Z=c[B];return Z===void 0&&(Z=new An({morphTargets:E,skinning:b}),c[B]=Z),Z}function S(E,b,C,B,Z,X,A){let O=null,D=g,F=E.customDepthMaterial;if(B.isPointLight===!0&&(D=p,F=E.customDistanceMaterial),F===void 0){let R=!1;C.morphTargets===!0&&(R=b.morphAttributes&&b.morphAttributes.position&&b.morphAttributes.position.length>0);let P=!1;E.isSkinnedMesh===!0&&C.skinning===!0&&(P=!0);const z=E.isInstancedMesh===!0;O=D(R,P,z)}else O=F;if(t.localClippingEnabled&&C.clipShadows===!0&&C.clippingPlanes.length!==0){const R=O.uuid,P=C.uuid;let z=l[R];z===void 0&&(z={},l[R]=z);let G=z[P];G===void 0&&(G=O.clone(),z[P]=G),O=G}return O.visible=C.visible,O.wireframe=C.wireframe,A===Pi?O.side=C.shadowSide!==null?C.shadowSide:C.side:O.side=C.shadowSide!==null?C.shadowSide:f[C.side],O.clipShadows=C.clipShadows,O.clippingPlanes=C.clippingPlanes,O.clipIntersection=C.clipIntersection,O.wireframeLinewidth=C.wireframeLinewidth,O.linewidth=C.linewidth,B.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(B.matrixWorld),O.nearDistance=Z,O.farDistance=X),O}function T(E,b,C,B,Z){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&Z===Pi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=e.update(E),D=E.material;if(Array.isArray(D)){const F=O.groups;for(let R=0,P=F.length;R<P;R++){const z=F[R],G=D[z.materialIndex];if(G&&G.visible){const tt=S(E,O,G,B,C.near,C.far,Z);t.renderBufferDirect(C,null,O,tt,E,z)}}}else if(D.visible){const F=S(E,O,D,B,C.near,C.far,Z);t.renderBufferDirect(C,null,O,F,E,null)}}const A=E.children;for(let O=0,D=A.length;O<D;O++)T(A[O],b,C,B,Z)}}function qp(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const q=new Dt;let et=null;const at=new Dt(0,0,0,0);return{setMask:function(J){et!==J&&!L&&(t.colorMask(J,J,J,J),et=J)},setLocked:function(J){L=J},setClear:function(J,st,ut,yt,rt){rt===!0&&(J*=yt,st*=yt,ut*=yt),q.set(J,st,ut,yt),at.equals(q)===!1&&(t.clearColor(J,st,ut,yt),at.copy(q))},reset:function(){L=!1,et=null,at.set(-1,0,0,0)}}}function s(){let L=!1,q=null,et=null,at=null;return{setTest:function(J){J?ot(2929):it(2929)},setMask:function(J){q!==J&&!L&&(t.depthMask(J),q=J)},setFunc:function(J){if(et!==J){if(J)switch(J){case ml:t.depthFunc(512);break;case gl:t.depthFunc(519);break;case yl:t.depthFunc(513);break;case Bs:t.depthFunc(515);break;case vl:t.depthFunc(514);break;case xl:t.depthFunc(518);break;case _l:t.depthFunc(516);break;case bl:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);et=J}},setLocked:function(J){L=J},setClear:function(J){at!==J&&(t.clearDepth(J),at=J)},reset:function(){L=!1,q=null,et=null,at=null}}}function o(){let L=!1,q=null,et=null,at=null,J=null,st=null,ut=null,yt=null,rt=null;return{setTest:function(mt){L||(mt?ot(2960):it(2960))},setMask:function(mt){q!==mt&&!L&&(t.stencilMask(mt),q=mt)},setFunc:function(mt,Vt,oe){(et!==mt||at!==Vt||J!==oe)&&(t.stencilFunc(mt,Vt,oe),et=mt,at=Vt,J=oe)},setOp:function(mt,Vt,oe){(st!==mt||ut!==Vt||yt!==oe)&&(t.stencilOp(mt,Vt,oe),st=mt,ut=Vt,yt=oe)},setLocked:function(mt){L=mt},setClear:function(mt){rt!==mt&&(t.clearStencil(mt),rt=mt)},reset:function(){L=!1,q=null,et=null,at=null,J=null,st=null,ut=null,yt=null,rt=null}}}const a=new r,c=new s,l=new o;let f={},h=null,d=null,u=null,m=null,y=null,v=null,g=null,p=null,S=null,T=!1,E=null,b=null,C=null,B=null,Z=null;const X=t.getParameter(35661);let A=!1,O=0;const D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL\ ([0-9])/.exec(D)[1]),A=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(D)[1]),A=O>=2);let F=null,R={};const P=new Dt,z=new Dt;function G(L,q,et){const at=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let st=0;st<et;st++)t.texImage2D(q+st,0,6408,1,1,0,6408,5121,at);return J}const tt={};tt[3553]=G(3553,3553,1),tt[34067]=G(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ot(2929),c.setFunc(Bs),dt(!1),Rt(Io),ot(2884),H(Di);function ot(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function it(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function gt(L){return h!==L?(t.useProgram(L),h=L,!0):!1}const bt={[Jn]:32774,[rl]:32778,[sl]:32779};if(i)bt[Fo]=32775,bt[Bo]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(bt[Fo]=L.MIN_EXT,bt[Bo]=L.MAX_EXT)}const kt={[ol]:0,[al]:1,[cl]:768,[mc]:770,[pl]:776,[fl]:774,[hl]:772,[ll]:769,[gc]:771,[dl]:775,[ul]:773};function H(L,q,et,at,J,st,ut,yt){if(L===Di){d&&(it(3042),d=!1);return}if(d||(ot(3042),d=!0),L!==il){if(L!==u||yt!==T){if((m!==Jn||g!==Jn)&&(t.blendEquation(32774),m=Jn,g=Jn),yt)switch(L){case Ni:t.blendFuncSeparate(1,771,1,771);break;case Do:t.blendFunc(1,1);break;case No:t.blendFuncSeparate(0,0,769,771);break;case Oo:t.blendFuncSeparate(0,768,0,770);break;default:break}else switch(L){case Ni:t.blendFuncSeparate(770,771,1,771);break;case Do:t.blendFunc(770,1);break;case No:t.blendFunc(0,769);break;case Oo:t.blendFunc(0,768);break;default:break}y=null,v=null,p=null,S=null,u=L,T=yt}return}J=J||q,st=st||et,ut=ut||at,(q!==m||J!==g)&&(t.blendEquationSeparate(bt[q],bt[J]),m=q,g=J),(et!==y||at!==v||st!==p||ut!==S)&&(t.blendFuncSeparate(kt[et],kt[at],kt[st],kt[ut]),y=et,v=at,p=st,S=ut),u=L,T=null}function $t(L,q){L.side===Kr?it(2884):ot(2884);let et=L.side===Jt;q&&(et=!et),dt(et),L.blending===Ni&&L.transparent===!1?H(Di):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const at=L.stencilWrite;l.setTest(at),at&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function dt(L){E!==L&&(L?t.frontFace(2304):t.frontFace(2305),E=L)}function Rt(L){L!==tl?(ot(2884),L!==b&&(L===Io?t.cullFace(1029):L===el?t.cullFace(1028):t.cullFace(1032))):it(2884),b=L}function Mt(L){L!==C&&(A&&t.lineWidth(L),C=L)}function It(L,q,et){L?(ot(32823),(B!==q||Z!==et)&&(t.polygonOffset(q,et),B=q,Z=et)):it(32823)}function Tt(L){L?ot(3089):it(3089)}function W(L){L===void 0&&(L=33984+X-1),F!==L&&(t.activeTexture(L),F=L)}function Y(L,q){F===null&&W();let et=R[F];et===void 0&&(et={type:void 0,texture:void 0},R[F]=et),(et.type!==L||et.texture!==q)&&(t.bindTexture(L,q||tt[L]),et.type=L,et.texture=q)}function $(){const L=R[F];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){}}function nt(){try{t.texImage2D.apply(t,arguments)}catch(L){}}function M(){try{t.texImage3D.apply(t,arguments)}catch(L){}}function x(L){P.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),P.copy(L))}function j(L){z.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),z.copy(L))}function V(){f={},F=null,R={},h=null,u=null,E=null,b=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ot,disable:it,useProgram:gt,setBlending:H,setMaterial:$t,setFlipSided:dt,setCullFace:Rt,setLineWidth:Mt,setPolygonOffset:It,setScissorTest:Tt,activeTexture:W,bindTexture:Y,unbindTexture:$,compressedTexImage2D:ht,texImage2D:nt,texImage3D:M,scissor:x,viewport:j,reset:V}}function Xp(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let u,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function y(M,x){return m?new OffscreenCanvas(M,x):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(M,x,j,V){let L=1;if((M.width>V||M.height>V)&&(L=V/Math.max(M.width,M.height)),L<1||x===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const q=x?_t.floorPowerOfTwo:Math.floor,et=q(L*M.width),at=q(L*M.height);u===void 0&&(u=y(et,at));const J=j?y(et,at):u;return J.width=et,J.height=at,J.getContext("2d").drawImage(M,0,0,et,at),J}else return"data"in M,M;return M}function g(M){return _t.isPowerOfTwo(M.width)&&_t.isPowerOfTwo(M.height)}function p(M){return a?!1:M.wrapS!==fe||M.wrapT!==fe||M.minFilter!==re&&M.minFilter!==ee}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==re&&M.minFilter!==ee}function T(M,x,j,V){t.generateMipmap(M);const L=i.get(x);L.__maxMipLevel=Math.log(Math.max(j,V))*Math.LOG2E}function E(M,x,j){if(a===!1)return x;if(M!==null&&t[M]!==void 0)return t[M];let V=x;return x===6403&&(j===5126&&(V=33326),j===5131&&(V=33325),j===5121&&(V=33321)),x===6407&&(j===5126&&(V=34837),j===5131&&(V=34843),j===5121&&(V=32849)),x===6408&&(j===5126&&(V=34836),j===5131&&(V=34842),j===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function b(M){return M===re||M===Ho||M===Go?9728:9729}function C(M){const x=M.target;x.removeEventListener("dispose",C),Z(x),x.isVideoTexture&&d.delete(x),o.memory.textures--}function B(M){const x=M.target;x.removeEventListener("dispose",B),X(x),o.memory.textures--}function Z(M){const x=i.get(M);x.__webglInit!==void 0&&(t.deleteTexture(x.__webglTexture),i.remove(M))}function X(M){const x=i.get(M),j=i.get(M.texture);if(M){if(j.__webglTexture!==void 0&&t.deleteTexture(j.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)t.deleteFramebuffer(x.__webglFramebuffer[V]),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[V]);else t.deleteFramebuffer(x.__webglFramebuffer),x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer&&t.deleteRenderbuffer(x.__webglColorRenderbuffer),x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let A=0;function O(){A=0}function D(){const M=A;return M>=c,A+=1,M}function F(M,x){const j=i.get(M);if(M.isVideoTexture&&W(M),M.version>0&&j.__version!==M.version){const V=M.image;if(V!==void 0){if(V.complete!==!1){gt(j,M,x);return}}}n.activeTexture(33984+x),n.bindTexture(3553,j.__webglTexture)}function R(M,x){const j=i.get(M);if(M.version>0&&j.__version!==M.version){gt(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(35866,j.__webglTexture)}function P(M,x){const j=i.get(M);if(M.version>0&&j.__version!==M.version){gt(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(32879,j.__webglTexture)}function z(M,x){const j=i.get(M);if(M.version>0&&j.__version!==M.version){bt(j,M,x);return}n.activeTexture(33984+x),n.bindTexture(34067,j.__webglTexture)}const G={[Us]:10497,[fe]:33071,[zs]:33648},tt={[re]:9728,[Ho]:9984,[Go]:9986,[ee]:9729,[Cl]:9985,[es]:9987};function ot(M,x,j){j?(t.texParameteri(M,10242,G[x.wrapS]),t.texParameteri(M,10243,G[x.wrapT]),(M===32879||M===35866)&&t.texParameteri(M,32882,G[x.wrapR]),t.texParameteri(M,10240,tt[x.magFilter]),t.texParameteri(M,10241,tt[x.minFilter])):(t.texParameteri(M,10242,33071),t.texParameteri(M,10243,33071),(M===32879||M===35866)&&t.texParameteri(M,32882,33071),x.wrapS!==fe||x.wrapT,t.texParameteri(M,10240,b(x.magFilter)),t.texParameteri(M,10241,b(x.minFilter)),x.minFilter!==re&&x.minFilter);const V=e.get("EXT_texture_filter_anisotropic");if(V){if(x.type===cn&&e.get("OES_texture_float_linear")===null||x.type===Hr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function it(M,x){M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",C),M.__webglTexture=t.createTexture(),o.memory.textures++)}function gt(M,x,j){let V=3553;x.isDataTexture2DArray&&(V=35866),x.isDataTexture3D&&(V=32879),it(M,x),n.activeTexture(33984+j),n.bindTexture(V,M.__webglTexture),t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment);const L=p(x)&&g(x.image)===!1,q=v(x.image,L,!1,f),et=g(q)||a,at=s.convert(x.format);let J=s.convert(x.type),st=E(x.internalFormat,at,J);ot(V,x,et);let ut;const yt=x.mipmaps;if(x.isDepthTexture)st=6402,a?x.type===cn?st=36012:x.type===Br?st=33190:x.type===Fi?st=35056:st=33189:x.type,x.format===ri&&st===6402&&x.type!==zr&&x.type!==Br&&(x.type=zr,J=s.convert(x.type)),x.format===Gi&&st===6402&&(st=34041,x.type!==Fi&&(x.type=Fi,J=s.convert(x.type))),n.texImage2D(3553,0,st,q.width,q.height,0,at,J,null);else if(x.isDataTexture)if(yt.length>0&&et){for(let rt=0,mt=yt.length;rt<mt;rt++)ut=yt[rt],n.texImage2D(3553,rt,st,ut.width,ut.height,0,at,J,ut.data);x.generateMipmaps=!1,M.__maxMipLevel=yt.length-1}else n.texImage2D(3553,0,st,q.width,q.height,0,at,J,q.data),M.__maxMipLevel=0;else if(x.isCompressedTexture){for(let rt=0,mt=yt.length;rt<mt;rt++)ut=yt[rt],x.format!==Ae&&x.format!==Mn?at!==null&&n.compressedTexImage2D(3553,rt,st,ut.width,ut.height,0,ut.data):n.texImage2D(3553,rt,st,ut.width,ut.height,0,at,J,ut.data);M.__maxMipLevel=yt.length-1}else if(x.isDataTexture2DArray)n.texImage3D(35866,0,st,q.width,q.height,q.depth,0,at,J,q.data),M.__maxMipLevel=0;else if(x.isDataTexture3D)n.texImage3D(32879,0,st,q.width,q.height,q.depth,0,at,J,q.data),M.__maxMipLevel=0;else if(yt.length>0&&et){for(let rt=0,mt=yt.length;rt<mt;rt++)ut=yt[rt],n.texImage2D(3553,rt,st,at,J,ut);x.generateMipmaps=!1,M.__maxMipLevel=yt.length-1}else n.texImage2D(3553,0,st,at,J,q),M.__maxMipLevel=0;S(x,et)&&T(V,x,q.width,q.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function bt(M,x,j){if(x.image.length!==6)return;it(M,x),n.activeTexture(33984+j),n.bindTexture(34067,M.__webglTexture),t.pixelStorei(37440,x.flipY);const V=x&&(x.isCompressedTexture||x.image[0].isCompressedTexture),L=x.image[0]&&x.image[0].isDataTexture,q=[];for(let rt=0;rt<6;rt++)!V&&!L?q[rt]=v(x.image[rt],!1,!0,l):q[rt]=L?x.image[rt].image:x.image[rt];const et=q[0],at=g(et)||a,J=s.convert(x.format),st=s.convert(x.type),ut=E(x.internalFormat,J,st);ot(34067,x,at);let yt;if(V){for(let rt=0;rt<6;rt++){yt=q[rt].mipmaps;for(let mt=0;mt<yt.length;mt++){const Vt=yt[mt];x.format!==Ae&&x.format!==Mn?J!==null&&n.compressedTexImage2D(34069+rt,mt,ut,Vt.width,Vt.height,0,Vt.data):n.texImage2D(34069+rt,mt,ut,Vt.width,Vt.height,0,J,st,Vt.data)}}M.__maxMipLevel=yt.length-1}else{yt=x.mipmaps;for(let rt=0;rt<6;rt++)if(L){n.texImage2D(34069+rt,0,ut,q[rt].width,q[rt].height,0,J,st,q[rt].data);for(let mt=0;mt<yt.length;mt++){const oe=yt[mt].image[rt].image;n.texImage2D(34069+rt,mt+1,ut,oe.width,oe.height,0,J,st,oe.data)}}else{n.texImage2D(34069+rt,0,ut,J,st,q[rt]);for(let mt=0;mt<yt.length;mt++){const Vt=yt[mt];n.texImage2D(34069+rt,mt+1,ut,J,st,Vt.image[rt])}}M.__maxMipLevel=yt.length}S(x,at)&&T(34067,x,et.width,et.height),M.__version=x.version,x.onUpdate&&x.onUpdate(x)}function kt(M,x,j,V){const L=s.convert(x.texture.format),q=s.convert(x.texture.type),et=E(x.texture.internalFormat,L,q);n.texImage2D(V,0,et,x.width,x.height,0,L,q,null),t.bindFramebuffer(36160,M),t.framebufferTexture2D(36160,j,V,i.get(x.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function H(M,x,j){if(t.bindRenderbuffer(36161,M),x.depthBuffer&&!x.stencilBuffer){let V=33189;if(j){const L=x.depthTexture;L&&L.isDepthTexture&&(L.type===cn?V=36012:L.type===Br&&(V=33190));const q=Tt(x);t.renderbufferStorageMultisample(36161,q,V,x.width,x.height)}else t.renderbufferStorage(36161,V,x.width,x.height);t.framebufferRenderbuffer(36160,36096,36161,M)}else if(x.depthBuffer&&x.stencilBuffer){if(j){const V=Tt(x);t.renderbufferStorageMultisample(36161,V,35056,x.width,x.height)}else t.renderbufferStorage(36161,34041,x.width,x.height);t.framebufferRenderbuffer(36160,33306,36161,M)}else{const V=s.convert(x.texture.format),L=s.convert(x.texture.type),q=E(x.texture.internalFormat,V,L);if(j){const et=Tt(x);t.renderbufferStorageMultisample(36161,et,q,x.width,x.height)}else t.renderbufferStorage(36161,q,x.width,x.height)}t.bindRenderbuffer(36161,null)}function $t(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const V=i.get(x.depthTexture).__webglTexture;if(x.depthTexture.format===ri)t.framebufferTexture2D(36160,36096,3553,V,0);else if(x.depthTexture.format===Gi)t.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function dt(M){const x=i.get(M),j=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");$t(x.__webglFramebuffer,M)}else if(j){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=t.createRenderbuffer(),H(x.__webglDepthbuffer[V],M,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),H(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Rt(M){const x=i.get(M),j=i.get(M.texture);M.addEventListener("dispose",B),j.__webglTexture=t.createTexture(),o.memory.textures++;const V=M.isWebGLCubeRenderTarget===!0,L=M.isWebGLMultisampleRenderTarget===!0,q=g(M)||a;if(a&&M.texture.format===Mn&&(M.texture.type===cn||M.texture.type===Hr)&&(M.texture.format=Ae),V){x.__webglFramebuffer=[];for(let et=0;et<6;et++)x.__webglFramebuffer[et]=t.createFramebuffer()}else if(x.__webglFramebuffer=t.createFramebuffer(),L&&a){x.__webglMultisampledFramebuffer=t.createFramebuffer(),x.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,x.__webglColorRenderbuffer);const et=s.convert(M.texture.format),at=s.convert(M.texture.type),J=E(M.texture.internalFormat,et,at),st=Tt(M);t.renderbufferStorageMultisample(36161,st,J,M.width,M.height),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,x.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),M.depthBuffer&&(x.__webglDepthRenderbuffer=t.createRenderbuffer(),H(x.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}if(V){n.bindTexture(34067,j.__webglTexture),ot(34067,M.texture,q);for(let et=0;et<6;et++)kt(x.__webglFramebuffer[et],M,36064,34069+et);S(M.texture,q)&&T(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,j.__webglTexture),ot(3553,M.texture,q),kt(x.__webglFramebuffer,M,36064,3553),S(M.texture,q)&&T(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&dt(M)}function Mt(M){const x=M.texture,j=g(M)||a;if(S(x,j)){const V=M.isWebGLCubeRenderTarget?34067:3553,L=i.get(x).__webglTexture;n.bindTexture(V,L),T(V,x,M.width,M.height),n.bindTexture(V,null)}}function It(M){if(M.isWebGLMultisampleRenderTarget&&a){const x=i.get(M);t.bindFramebuffer(36008,x.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,x.__webglFramebuffer);const j=M.width,V=M.height;let L=16384;M.depthBuffer&&(L|=256),M.stencilBuffer&&(L|=1024),t.blitFramebuffer(0,0,j,V,0,0,j,V,L,9728),t.bindFramebuffer(36160,x.__webglMultisampledFramebuffer)}}function Tt(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(h,M.samples):0}function W(M){const x=o.render.frame;d.get(M)!==x&&(d.set(M,x),M.update())}let Y=!1,$=!1;function ht(M,x){M&&M.isWebGLRenderTarget&&(Y===!1&&(Y=!0),M=M.texture),F(M,x)}function nt(M,x){M&&M.isWebGLCubeRenderTarget&&($===!1&&($=!0),M=M.texture),z(M,x)}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=R,this.setTexture3D=P,this.setTextureCube=z,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=It,this.safeSetTexture2D=ht,this.safeSetTextureCube=nt}function Yp(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===bo)return 5121;if(s===Dl)return 32819;if(s===Nl)return 32820;if(s===Ol)return 33635;if(s===Rl)return 5120;if(s===Pl)return 5122;if(s===zr)return 5123;if(s===Il)return 5124;if(s===Br)return 5125;if(s===cn)return 5126;if(s===Hr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fl)return 6406;if(s===Mn)return 6407;if(s===Ae)return 6408;if(s===Bl)return 6409;if(s===Ul)return 6410;if(s===ri)return 6402;if(s===Gi)return 34041;if(s===zl)return 6403;if(s===Hl)return 36244;if(s===Gl)return 33319;if(s===kl)return 33320;if(s===Vl)return 36248;if(s===Wl)return 36249;if(s===ko||s===Vo||s===Wo||s===jo)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qo||s===Xo||s===Yo||s===Zo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Jo||s===Qo)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Jo)return o.COMPRESSED_RGB8_ETC2;if(s===Qo)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===ql||s===Xl||s===Yl||s===Zl||s===Jl||s===Ql||s===$l||s===Kl||s===th||s===eh||s===nh||s===ih||s===rh||s===sh||s===ah||s===ch||s===lh||s===hh||s===uh||s===fh||s===dh||s===ph||s===mh||s===gh||s===yh||s===vh||s===xh||s===_h)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===oh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Fi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ys(t){Qt.call(this),this.cameras=t||[]}Ys.prototype=Object.assign(Object.create(Qt.prototype),{constructor:Ys,isArrayCamera:!0});function ni(){ft.call(this),this.type="Group"}ni.prototype=Object.assign(Object.create(ft.prototype),{constructor:ni,isGroup:!0});function Ui(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Ui.prototype,{constructor:Ui,getHandSpace:function(){if(this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new ni;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t)if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){const f=e.getJointPose(t.hand[l],n),h=c.joints[l];f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=f.radius),h.visible=f!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],u=c.joints[window.XRHand.THUMB_PHALANX_TIP],m=d.position.distanceTo(u.position),y=.02,v=.005;c.inputState.pinching&&m>y+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=y-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Nc(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,f=new Qt;f.layers.enable(1),f.viewport=new Dt;const h=new Qt;h.layers.enable(2),h.viewport=new Dt;const d=[f,h],u=new Ys;u.layers.enable(1),u.layers.enable(2);let m=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let O=c[A];return O===void 0&&(O=new Ui,c[A]=O),O.getTargetRaySpace()},this.getControllerGrip=function(A){let O=c[A];return O===void 0&&(O=new Ui,c[A]=O),O.getGripSpace()},this.getHand=function(A){let O=c[A];return O===void 0&&(O=new Ui,c[A]=O),O.getHandSpace()};function v(A){const O=l.get(A.inputSource);O&&O.dispatchEvent({type:A.type,data:A.inputSource})}function g(){l.forEach(function(A,O){A.disconnect(O)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function p(A){s=A,X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting},this.setReferenceSpaceType=function(A){o=A,n.isPresenting},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(A){if(i=A,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);const O=e.getContextAttributes();O.xrCompatible!==!0&&e.makeXRCompatible();const D={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},F=new XRWebGLLayer(i,e,D);i.updateRenderState({baseLayer:F}),i.requestReferenceSpace(o).then(p),i.addEventListener("inputsourceschange",S)}};function S(A){const O=i.inputSources;for(let D=0;D<c.length;D++)l.set(O[D],c[D]);for(let D=0;D<A.removed.length;D++){const F=A.removed[D],R=l.get(F);R&&(R.dispatchEvent({type:"disconnected",data:F}),l.delete(F))}for(let D=0;D<A.added.length;D++){const F=A.added[D],R=l.get(F);R&&R.dispatchEvent({type:"connected",data:F})}}const T=new w,E=new w;function b(A,O,D){T.setFromMatrixPosition(O.matrixWorld),E.setFromMatrixPosition(D.matrixWorld);const F=T.distanceTo(E),R=O.projectionMatrix.elements,P=D.projectionMatrix.elements,z=R[14]/(R[10]-1),G=R[14]/(R[10]+1),tt=(R[9]+1)/R[5],ot=(R[9]-1)/R[5],it=(R[8]-1)/R[0],gt=(P[8]+1)/P[0],bt=z*it,kt=z*gt,H=F/(-it+gt),$t=H*-it;O.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX($t),A.translateZ(H),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.getInverse(A.matrixWorld);const dt=z+H,Rt=G+H,Mt=bt-$t,It=kt+(F-$t),Tt=tt*G/Rt*dt,W=ot*G/Rt*dt;A.projectionMatrix.makePerspective(Mt,It,Tt,W,dt,Rt)}function C(A,O){O===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(O.matrixWorld,A.matrix),A.matrixWorldInverse.getInverse(A.matrixWorld)}this.getCamera=function(A){u.near=h.near=f.near=A.near,u.far=h.far=f.far=A.far,(m!==u.near||y!==u.far)&&(i.updateRenderState({depthNear:u.near,depthFar:u.far}),m=u.near,y=u.far);const O=A.parent,D=u.cameras;C(u,O);for(let R=0;R<D.length;R++)C(D[R],O);A.matrixWorld.copy(u.matrixWorld);const F=A.children;for(let R=0,P=F.length;R<P;R++)F[R].updateMatrixWorld(!0);return D.length===2?b(u,f,h):u.projectionMatrix.copy(f.projectionMatrix),u};let B=null;function Z(A,O){if(a=O.getViewerPose(s),a!==null){const F=a.views,R=i.renderState.baseLayer;t.setFramebuffer(R.framebuffer);let P=!1;F.length!==u.cameras.length&&(u.cameras.length=0,P=!0);for(let z=0;z<F.length;z++){const G=F[z],tt=R.getViewport(G),ot=d[z];ot.matrix.fromArray(G.transform.matrix),ot.projectionMatrix.fromArray(G.projectionMatrix),ot.viewport.set(tt.x,tt.y,tt.width,tt.height),z===0&&u.matrix.copy(ot.matrix),P===!0&&u.cameras.push(ot)}}const D=i.inputSources;for(let F=0;F<c.length;F++){const R=c[F],P=D[F];R.update(P,O,s)}B&&B(A,O)}const X=new Ec;X.setAnimationLoop(Z),this.setAnimationLoop=function(A){B=A},this.dispose=function(){}}Object.assign(Nc.prototype,$e.prototype);function Zp(t){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,S,T){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),f(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?d(g,p):h(g,p)):p.isMeshMatcapMaterial?(i(g,p),u(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),y(g,p)):p.isMeshNormalMaterial?(i(g,p),v(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,S,T):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const S=t.get(p).envMap;if(S){g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const b=t.get(S).__maxMipLevel;b!==void 0&&(g.maxMipLevel.value=b)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let T;p.map?T=p.map:p.specularMap?T=p.specularMap:p.displacementMap?T=p.displacementMap:p.normalMap?T=p.normalMap:p.bumpMap?T=p.bumpMap:p.roughnessMap?T=p.roughnessMap:p.metalnessMap?T=p.metalnessMap:p.alphaMap?T=p.alphaMap:p.emissiveMap?T=p.emissiveMap:p.clearcoatMap?T=p.clearcoatMap:p.clearcoatNormalMap?T=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(T=p.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,S,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=T*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){h(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Jt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function u(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function y(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function v(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function rs(t){t=t||{};const e=t.canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",f=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h=null,d=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=er,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const u=this;let m=!1,y=null,v=0,g=0,p=null,S=null,T=-1,E=null,b=null;const C=new Dt,B=new Dt;let Z=null,X=e.width,A=e.height,O=1,D=null,F=null;const R=new Dt(0,0,X,A),P=new Dt(0,0,X,A);let z=!1;const G=new is;let tt=!1,ot=!1;const it=new Et,gt=new w,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return p===null?O:1}let H=n;function $t(_,N){for(let I=0;I<_.length;I++){const U=_[I],K=e.getContext(U,N);if(K!==null)return K}return null}try{const _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",oe,!1),H===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),H=$t(N,_),H===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw _}let dt,Rt,Mt,It,Tt,W,Y,$,ht,nt,M,x,j,V,L,q,et,at,J,st,ut;function yt(){dt=new Ad(H),Rt=new Sd(H,dt,t),Rt.isWebGL2===!1&&(dt.get("WEBGL_depth_texture"),dt.get("OES_texture_float"),dt.get("OES_texture_half_float"),dt.get("OES_texture_half_float_linear"),dt.get("OES_standard_derivatives"),dt.get("OES_element_index_uint"),dt.get("OES_vertex_array_object"),dt.get("ANGLE_instanced_arrays")),dt.get("OES_texture_float_linear"),st=new Yp(H,dt,Rt),Mt=new qp(H,dt,Rt),Mt.scissor(B.copy(P).multiplyScalar(O).floor()),Mt.viewport(C.copy(R).multiplyScalar(O).floor()),It=new Rd,Tt=new Np,W=new Xp(H,dt,Mt,Tt,Rt,st,It),Y=new Td(u),$=new Qh(H,Rt),ut=new Md(H,dt,$,Rt),ht=new Ld(H,$,It,ut),nt=new Nd(H,ht,$,It),et=new Dd(H),L=new Ed(Tt),M=new Dp(u,Y,dt,Rt,ut,L),x=new Zp(Tt),j=new Bp(Tt),V=new Vp(dt,Rt),q=new bd(u,Y,Mt,nt,a),at=new wd(H,dt,It,Rt),J=new Cd(H,dt,It,Rt),It.programs=M.programs,u.capabilities=Rt,u.extensions=dt,u.properties=Tt,u.renderLists=j,u.state=Mt,u.info=It}yt();const rt=new Nc(u,H);this.xr=rt;const mt=new Dc(u,nt,Rt.maxTextureSize);this.shadowMap=mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const _=dt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=dt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(_){_!==void 0&&(O=_,this.setSize(X,A,!1))},this.getSize=function(_){return _===void 0&&(_=new k),_.set(X,A)},this.setSize=function(_,N,I){rt.isPresenting||(X=_,A=N,e.width=Math.floor(_*O),e.height=Math.floor(N*O),I!==!1&&(e.style.width=_+"px",e.style.height=N+"px"),this.setViewport(0,0,_,N))},this.getDrawingBufferSize=function(_){return _===void 0&&(_=new k),_.set(X*O,A*O).floor()},this.setDrawingBufferSize=function(_,N,I){X=_,A=N,O=I,e.width=Math.floor(_*I),e.height=Math.floor(N*I),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _===void 0&&(_=new Dt),_.copy(C)},this.getViewport=function(_){return _.copy(R)},this.setViewport=function(_,N,I,U){_.isVector4?R.set(_.x,_.y,_.z,_.w):R.set(_,N,I,U),Mt.viewport(C.copy(R).multiplyScalar(O).floor())},this.getScissor=function(_){return _.copy(P)},this.setScissor=function(_,N,I,U){_.isVector4?P.set(_.x,_.y,_.z,_.w):P.set(_,N,I,U),Mt.scissor(B.copy(P).multiplyScalar(O).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(_){Mt.setScissorTest(z=_)},this.setOpaqueSort=function(_){D=_},this.setTransparentSort=function(_){F=_},this.getClearColor=function(){return q.getClearColor()},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(_,N,I){let U=0;(_===void 0||_)&&(U|=16384),(N===void 0||N)&&(U|=256),(I===void 0||I)&&(U|=1024),H.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",oe,!1),j.dispose(),V.dispose(),Tt.dispose(),Y.dispose(),nt.dispose(),ut.dispose(),rt.dispose(),xi.stop()};function Vt(_){_.preventDefault(),m=!0}function oe(){m=!1,yt()}function To(_){const N=_.target;N.removeEventListener("dispose",To),Yc(N)}function Yc(_){Ao(_),Tt.remove(_)}function Ao(_){const N=Tt.get(_).program;N!==void 0&&M.releaseProgram(N)}function Zc(_,N){_.render(function(I){u.renderBufferImmediate(I,N)})}this.renderBufferImmediate=function(_,N){ut.initAttributes();const I=Tt.get(_);_.hasPositions&&!I.position&&(I.position=H.createBuffer()),_.hasNormals&&!I.normal&&(I.normal=H.createBuffer()),_.hasUvs&&!I.uv&&(I.uv=H.createBuffer()),_.hasColors&&!I.color&&(I.color=H.createBuffer());const U=N.getAttributes();_.hasPositions&&(H.bindBuffer(34962,I.position),H.bufferData(34962,_.positionArray,35048),ut.enableAttribute(U.position),H.vertexAttribPointer(U.position,3,5126,!1,0,0)),_.hasNormals&&(H.bindBuffer(34962,I.normal),H.bufferData(34962,_.normalArray,35048),ut.enableAttribute(U.normal),H.vertexAttribPointer(U.normal,3,5126,!1,0,0)),_.hasUvs&&(H.bindBuffer(34962,I.uv),H.bufferData(34962,_.uvArray,35048),ut.enableAttribute(U.uv),H.vertexAttribPointer(U.uv,2,5126,!1,0,0)),_.hasColors&&(H.bindBuffer(34962,I.color),H.bufferData(34962,_.colorArray,35048),ut.enableAttribute(U.color),H.vertexAttribPointer(U.color,3,5126,!1,0,0)),ut.disableUnusedAttributes(),H.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,N,I,U,K,Lt){N===null&&(N=bt);const wt=K.isMesh&&K.matrixWorld.determinant()<0,Ct=Po(_,N,U,K);Mt.setMaterial(U,wt);let St=I.index;const qt=I.attributes.position;if(St===null){if(qt===void 0||qt.count===0)return}else if(St.count===0)return;let jt=1;U.wireframe===!0&&(St=ht.getWireframeAttribute(I),jt=2),(U.morphTargets||U.morphNormals)&&et.update(K,I,U,Ct),ut.setup(K,U,Ct,I,St);let vt,Ft=at;St!==null&&(vt=$.get(St),Ft=J,Ft.setIndex(vt));const He=St!==null?St.count:qt.count,Bt=I.drawRange.start*jt,yn=I.drawRange.count*jt,Xt=Lt!==null?Lt.start*jt:0,as=Lt!==null?Lt.count*jt:1/0,ae=Math.max(Bt,Xt),_i=Math.min(He,Bt+yn,Xt+as)-1,Dn=Math.max(0,_i-ae+1);if(Dn!==0){if(K.isMesh)U.wireframe===!0?(Mt.setLineWidth(U.wireframeLinewidth*kt()),Ft.setMode(1)):Ft.setMode(4);else if(K.isLine){let bi=U.linewidth;bi===void 0&&(bi=1),Mt.setLineWidth(bi*kt()),K.isLineSegments?Ft.setMode(1):K.isLineLoop?Ft.setMode(2):Ft.setMode(3)}else K.isPoints?Ft.setMode(0):K.isSprite&&Ft.setMode(4);if(K.isInstancedMesh)Ft.renderInstances(ae,Dn,K.count);else if(I.isInstancedBufferGeometry){const bi=Math.min(I.instanceCount,I._maxInstanceCount);Ft.renderInstances(ae,Dn,bi)}else Ft.render(ae,Dn)}},this.compile=function(_,N){d=V.get(_,N),d.init(),_.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(N);const I=new WeakMap;_.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let Lt=0;Lt<K.length;Lt++){const wt=K[Lt];I.has(wt)===!1&&(ze(wt,_,U),I.set(wt))}else I.has(K)===!1&&(ze(K,_,U),I.set(K))})};let os=null;function Jc(_){rt.isPresenting||os&&os(_)}const xi=new Ec;xi.setAnimationLoop(Jc),typeof window!="undefined"&&xi.setContext(window),this.setAnimationLoop=function(_){os=_,rt.setAnimationLoop(_),_===null?xi.stop():xi.start()},this.render=function(_,N){let I,U;if(arguments[2]!==void 0&&(I=arguments[2]),arguments[3]!==void 0&&(U=arguments[3]),N!==void 0&&N.isCamera!==!0||m===!0)return;ut.resetDefaultState(),T=-1,E=null,_.autoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(N=rt.getCamera(N)),_.isScene===!0&&_.onBeforeRender(u,_,N,I||p),d=V.get(_,N),d.init(),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(it),ot=this.localClippingEnabled,tt=L.init(this.clippingPlanes,ot,N),h=j.get(_,N),h.init(),Lo(_,N,0,u.sortObjects),h.finish(),u.sortObjects===!0&&h.sort(D,F),tt===!0&&L.beginShadows();const K=d.state.shadowsArray;mt.render(K,_,N),d.setupLights(N),tt===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),I!==void 0&&this.setRenderTarget(I),q.render(h,_,N,U);const Lt=h.opaque,wt=h.transparent;Lt.length>0&&Co(Lt,_,N),wt.length>0&&Co(wt,_,N),_.isScene===!0&&_.onAfterRender(u,_,N),p!==null&&(W.updateRenderTargetMipmap(p),W.updateMultisampleRenderTarget(p)),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1),h=null,d=null};function Lo(_,N,I,U){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)I=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||G.intersectsSprite(_)){U&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const wt=nt.update(_),Ct=_.material;Ct.visible&&h.push(_,wt,Ct,I,gt.z,null)}}else if(_.isImmediateRenderObject)U&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it),h.push(_,null,_.material,I,gt.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==It.render.frame&&(_.skeleton.update(),_.skeleton.frame=It.render.frame),!_.frustumCulled||G.intersectsObject(_))){U&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const wt=nt.update(_),Ct=_.material;if(Array.isArray(Ct)){const St=wt.groups;for(let qt=0,jt=St.length;qt<jt;qt++){const vt=St[qt],Ft=Ct[vt.materialIndex];Ft&&Ft.visible&&h.push(_,wt,Ft,I,gt.z,vt)}}else Ct.visible&&h.push(_,wt,Ct,I,gt.z,null)}}const Lt=_.children;for(let wt=0,Ct=Lt.length;wt<Ct;wt++)Lo(Lt[wt],N,I,U)}function Co(_,N,I){const U=N.isScene===!0?N.overrideMaterial:null;for(let K=0,Lt=_.length;K<Lt;K++){const wt=_[K],Ct=wt.object,St=wt.geometry,qt=U===null?wt.material:U,jt=wt.group;if(I.isArrayCamera){b=I;const vt=I.cameras;for(let Ft=0,He=vt.length;Ft<He;Ft++){const Bt=vt[Ft];Ct.layers.test(Bt.layers)&&(Mt.viewport(C.copy(Bt.viewport)),d.setupLights(Bt),Ro(Ct,N,Bt,St,qt,jt))}}else b=null,Ro(Ct,N,I,St,qt,jt)}}function Ro(_,N,I,U,K,Lt){if(_.onBeforeRender(u,N,I,U,K,Lt),d=V.get(N,b||I),_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const wt=Po(I,N,K,_);Mt.setMaterial(K),ut.reset(),Zc(_,wt)}else u.renderBufferDirect(I,N,U,K,_,Lt);_.onAfterRender(u,N,I,U,K,Lt),d=V.get(N,b||I)}function ze(_,N,I){N.isScene!==!0&&(N=bt);const U=Tt.get(_),K=d.state.lights,Lt=d.state.shadowsArray,wt=K.state.version,Ct=M.getParameters(_,K.state,Lt,N,I),St=M.getProgramCacheKey(Ct);let qt=U.program,jt=!0;if(qt===void 0)_.addEventListener("dispose",To);else if(qt.cacheKey!==St)Ao(_);else if(U.lightsStateVersion!==wt)jt=!1;else if(Ct.shaderID!==void 0){const Bt=_.isMeshStandardMaterial?N.environment:null;U.envMap=Y.get(_.envMap||Bt);return}else jt=!1;jt&&(Ct.uniforms=M.getUniforms(_),_.onBeforeCompile(Ct,u),qt=M.acquireProgram(Ct,St),U.program=qt,U.uniforms=Ct.uniforms,U.outputEncoding=Ct.outputEncoding);const vt=U.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(U.numClippingPlanes=L.numPlanes,U.numIntersection=L.numIntersection,vt.clippingPlanes=L.uniform),U.environment=_.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=Y.get(_.envMap||U.environment),U.needsLights=$c(_),U.lightsStateVersion=wt,U.needsLights&&(vt.ambientLightColor.value=K.state.ambient,vt.lightProbe.value=K.state.probe,vt.directionalLights.value=K.state.directional,vt.directionalLightShadows.value=K.state.directionalShadow,vt.spotLights.value=K.state.spot,vt.spotLightShadows.value=K.state.spotShadow,vt.rectAreaLights.value=K.state.rectArea,vt.ltc_1.value=K.state.rectAreaLTC1,vt.ltc_2.value=K.state.rectAreaLTC2,vt.pointLights.value=K.state.point,vt.pointLightShadows.value=K.state.pointShadow,vt.hemisphereLights.value=K.state.hemi,vt.directionalShadowMap.value=K.state.directionalShadowMap,vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,vt.spotShadowMap.value=K.state.spotShadowMap,vt.spotShadowMatrix.value=K.state.spotShadowMatrix,vt.pointShadowMap.value=K.state.pointShadowMap,vt.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ft=U.program.getUniforms(),He=hn.seqWithValue(Ft.seq,vt);U.uniformsList=He}function Po(_,N,I,U){N.isScene!==!0&&(N=bt),W.resetTextureUnits();const K=N.fog,Lt=I.isMeshStandardMaterial?N.environment:null,wt=p===null?u.outputEncoding:p.texture.encoding,Ct=Y.get(I.envMap||Lt),St=Tt.get(I),qt=d.state.lights;if(tt===!0&&(ot===!0||_!==E)){const Xt=_===E&&I.id===T;L.setState(I,_,Xt)}I.version===St.__version?(I.fog&&St.fog!==K||St.environment!==Lt||St.needsLights&&St.lightsStateVersion!==qt.state.version||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==L.numPlanes||St.numIntersection!==L.numIntersection)||St.outputEncoding!==wt||St.envMap!==Ct)&&ze(I,N,U):(ze(I,N,U),St.__version=I.version);let jt=!1,vt=!1,Ft=!1;const He=St.program,Bt=He.getUniforms(),yn=St.uniforms;if(Mt.useProgram(He.program)&&(jt=!0,vt=!0,Ft=!0),I.id!==T&&(T=I.id,vt=!0),jt||E!==_){if(Bt.setValue(H,"projectionMatrix",_.projectionMatrix),Rt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),E!==_&&(E=_,vt=!0,Ft=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Xt=Bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(H,gt.setFromMatrixPosition(_.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||I.skinning)&&Bt.setValue(H,"viewMatrix",_.matrixWorldInverse)}if(I.skinning){Bt.setOptional(H,U,"bindMatrix"),Bt.setOptional(H,U,"bindMatrixInverse");const Xt=U.skeleton;if(Xt){const as=Xt.bones;if(Rt.floatVertexTextures){if(Xt.boneTexture===void 0){let ae=Math.sqrt(as.length*4);ae=_t.ceilPowerOfTwo(ae),ae=Math.max(ae,4);const _i=new Float32Array(ae*ae*4);_i.set(Xt.boneMatrices);const Dn=new ci(_i,ae,ae,Ae,cn);Xt.boneMatrices=_i,Xt.boneTexture=Dn,Xt.boneTextureSize=ae}Bt.setValue(H,"boneTexture",Xt.boneTexture,W),Bt.setValue(H,"boneTextureSize",Xt.boneTextureSize)}else Bt.setOptional(H,Xt,"boneMatrices")}}return(vt||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,Bt.setValue(H,"receiveShadow",U.receiveShadow)),vt&&(Bt.setValue(H,"toneMappingExposure",u.toneMappingExposure),St.needsLights&&Qc(yn,Ft),K&&I.fog&&x.refreshFogUniforms(yn,K),x.refreshMaterialUniforms(yn,I,O,A),hn.upload(H,St.uniformsList,yn,W)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(hn.upload(H,St.uniformsList,yn,W),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Bt.setValue(H,"center",U.center),Bt.setValue(H,"modelViewMatrix",U.modelViewMatrix),Bt.setValue(H,"normalMatrix",U.normalMatrix),Bt.setValue(H,"modelMatrix",U.matrixWorld),He}function Qc(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function $c(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.setFramebuffer=function(_){y!==_&&p===null&&H.bindFramebuffer(36160,_),y=_},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return g},this.getRenderList=function(){return h},this.setRenderList=function(_){h=_},this.getRenderState=function(){return d},this.setRenderState=function(_){d=_},this.getRenderTarget=function(){return p},this.setRenderTarget=function(_,N=0,I=0){p=_,v=N,g=I,_&&Tt.get(_).__webglFramebuffer===void 0&&W.setupRenderTarget(_);let U=y,K=!1;if(_){const Lt=Tt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(U=Lt[N],K=!0):_.isWebGLMultisampleRenderTarget?U=Tt.get(_).__webglMultisampledFramebuffer:U=Lt,C.copy(_.viewport),B.copy(_.scissor),Z=_.scissorTest}else C.copy(R).multiplyScalar(O).floor(),B.copy(P).multiplyScalar(O).floor(),Z=z;if(S!==U&&(H.bindFramebuffer(36160,U),S=U),Mt.viewport(C),Mt.scissor(B),Mt.setScissorTest(Z),K){const Lt=Tt.get(_.texture);H.framebufferTexture2D(36160,36064,34069+N,Lt.__webglTexture,I)}},this.readRenderTargetPixels=function(_,N,I,U,K,Lt,wt){if(!(_&&_.isWebGLRenderTarget))return;let Ct=Tt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){let St=!1;Ct!==S&&(H.bindFramebuffer(36160,Ct),St=!0);try{const qt=_.texture,jt=qt.format,vt=qt.type;if(jt!==Ae&&st.convert(jt)!==H.getParameter(35739)||vt!==bo&&st.convert(vt)!==H.getParameter(35738)&&!(vt===cn&&(Rt.isWebGL2||dt.get("OES_texture_float")||dt.get("WEBGL_color_buffer_float")))&&!(vt===Hr&&(Rt.isWebGL2?dt.get("EXT_color_buffer_float"):dt.get("EXT_color_buffer_half_float"))))return;H.checkFramebufferStatus(36160)===36053&&N>=0&&N<=_.width-U&&I>=0&&I<=_.height-K&&H.readPixels(N,I,U,K,st.convert(jt),st.convert(vt),Lt)}finally{St&&H.bindFramebuffer(36160,S)}}},this.copyFramebufferToTexture=function(_,N,I){I===void 0&&(I=0);const U=Math.pow(2,-I),K=Math.floor(N.image.width*U),Lt=Math.floor(N.image.height*U),wt=st.convert(N.format);W.setTexture2D(N,0),H.copyTexImage2D(3553,I,wt,_.x,_.y,K,Lt,0),Mt.unbindTexture()},this.copyTextureToTexture=function(_,N,I,U){U===void 0&&(U=0);const K=N.image.width,Lt=N.image.height,wt=st.convert(I.format),Ct=st.convert(I.type);W.setTexture2D(I,0),H.pixelStorei(37440,I.flipY),H.pixelStorei(37441,I.premultiplyAlpha),H.pixelStorei(3317,I.unpackAlignment),N.isDataTexture?H.texSubImage2D(3553,U,_.x,_.y,K,Lt,wt,Ct,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(3553,U,_.x,_.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):H.texSubImage2D(3553,U,_.x,_.y,wt,Ct,N.image),U===0&&I.generateMipmaps&&H.generateMipmap(3553),Mt.unbindTexture()},this.initTexture=function(_){W.setTexture2D(_,0),Mt.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Sa(t){rs.call(this,t)}Sa.prototype=Object.assign(Object.create(rs.prototype),{constructor:Sa,isWebGL1Renderer:!0});class Jp extends ft{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function ye(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ns,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_t.generateUUID()}Object.defineProperty(ye.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(ye.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new ye(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const bn=new w;function Ln(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(Ln.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(Ln.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)bn.x=this.getX(e),bn.y=this.getY(e),bn.z=this.getZ(e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ln(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Cn(t){pt.call(this),this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Cn.prototype=Object.create(pt.prototype);Cn.prototype.constructor=Cn;Cn.prototype.isSpriteMaterial=!0;Cn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let qn;const Ai=new w,Xn=new w,Yn=new w,Zn=new k,Li=new k,Oc=new Et,xr=new w,Ci=new w,_r=new w,Ea=new k,Rs=new k,Ta=new k;function Aa(t){if(ft.call(this),this.type="Sprite",qn===void 0){qn=new Nt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ye(e,5);qn.setIndex([0,1,2,0,2,3]),qn.setAttribute("position",new Ln(n,3,0,!1)),qn.setAttribute("uv",new Ln(n,2,3,!1))}this.geometry=qn,this.material=t!==void 0?t:new Cn,this.center=new k(.5,.5)}Aa.prototype=Object.assign(Object.create(ft.prototype),{constructor:Aa,isSprite:!0,raycast:function(t,e){t.camera,Xn.setFromMatrixScale(this.matrixWorld),Oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xn.multiplyScalar(-Yn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;br(xr.set(-.5,-.5,0),Yn,s,Xn,i,r),br(Ci.set(.5,-.5,0),Yn,s,Xn,i,r),br(_r.set(.5,.5,0),Yn,s,Xn,i,r),Ea.set(0,0),Rs.set(1,0),Ta.set(1,1);let o=t.ray.intersectTriangle(xr,Ci,_r,!1,Ai);if(o===null&&(br(Ci.set(-.5,.5,0),Yn,s,Xn,i,r),Rs.set(0,1),o=t.ray.intersectTriangle(xr,_r,Ci,!1,Ai),o===null))return;const a=t.ray.origin.distanceTo(Ai);a<t.near||a>t.far||e.push({distance:a,point:Ai.clone(),uv:te.getUV(Ai,xr,Ci,_r,Ea,Rs,Ta,new k),face:null,object:this})},copy:function(t){return ft.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function br(t,e,n,i,r,s){Zn.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Li.x=s*Zn.x-r*Zn.y,Li.y=r*Zn.x+s*Zn.y):Li.copy(Zn),t.copy(e),t.x+=Li.x,t.y+=Li.y,t.applyMatrix4(Oc)}const Mr=new w,La=new w;function Zs(){ft.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Zs.prototype=Object.assign(Object.create(ft.prototype),{constructor:Zs,isLOD:!0,copy:function(t){ft.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){e===void 0&&(e=0),e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Mr.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Mr);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){Mr.setFromMatrixPosition(t.matrixWorld),La.setFromMatrixPosition(this.matrixWorld);const n=Mr.distanceTo(La)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});function Js(t,e){t&&t.isGeometry,ne.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Et,this.bindMatrixInverse=new Et}Js.prototype=Object.assign(Object.create(ne.prototype),{constructor:Js,isSkinnedMesh:!0,copy:function(t){return ne.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Dt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){ne.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"&&this.bindMatrixInverse.getInverse(this.bindMatrix)},boneTransform:function(){const t=new w,e=new Dt,n=new Dt,i=new w,r=new Et;return function(s,o){const a=this.skeleton,c=this.geometry;e.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),t.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){const f=n.getComponent(l);if(f!==0){const h=e.getComponent(l);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(t).applyMatrix4(r),f)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const Ca=new Et,Qp=new Et;function Qs(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,e===void 0)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Et)}}Object.assign(Qs.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++){const n=new Et;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.getInverse(this.boneInverses[t])}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:Qp;Ca.multiplyMatrices(o,e[r]),Ca.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new Qs(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Ra(){ft.call(this),this.type="Bone"}Ra.prototype=Object.assign(Object.create(ft.prototype),{constructor:Ra,isBone:!0});const Pa=new Et,Ia=new Et,wr=[],Ri=new ne;function Da(t,e,n){ne.call(this,t,e),this.instanceMatrix=new xt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}Da.prototype=Object.assign(Object.create(ne.prototype),{constructor:Da,isInstancedMesh:!0,copy:function(t){return ne.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new xt(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Pa),Ia.multiplyMatrices(n,Pa),Ri.matrixWorld=Ia,Ri.raycast(t,wr);for(let s=0,o=wr.length;s<o;s++){const a=wr[s];a.instanceId=r,a.object=this,e.push(a)}wr.length=0}},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function _e(t){pt.call(this),this.type="LineBasicMaterial",this.color=new ct(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}_e.prototype=Object.create(pt.prototype);_e.prototype.constructor=_e;_e.prototype.isLineBasicMaterial=!0;_e.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const Na=new w,Oa=new w,Fa=new Et,Sr=new nr,Er=new gn;function li(t,e,n){ft.call(this),this.type="Line",this.geometry=t!==void 0?t:new Nt,this.material=e!==void 0?e:new _e,this.updateMorphTargets()}li.prototype=Object.assign(Object.create(ft.prototype),{constructor:li,isLine:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry){if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Na.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Na.distanceTo(Oa);t.setAttribute("lineDistance",new Pt(n,1))}}else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;Fa.getInverse(i),Sr.copy(t.ray).applyMatrix4(Fa);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new w,c=new w,l=new w,f=new w,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,m=n.attributes.position;if(d!==null){const y=d.array;for(let v=0,g=y.length-1;v<g;v+=h){const p=y[v],S=y[v+1];if(a.fromBufferAttribute(m,p),c.fromBufferAttribute(m,S),Sr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=m.count-1;y<v;y+=h){if(a.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),Sr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const p=t.ray.origin.distanceTo(f);p<t.near||p>t.far||e.push({distance:p,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,u=d.length;for(let m=0;m<u-1;m+=h){if(Sr.distanceSqToSegment(d[m],d[m+1],f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0}}});const Tr=new w,Ar=new w;function Vr(t,e){li.call(this,t,e),this.type="LineSegments"}Vr.prototype=Object.assign(Object.create(li.prototype),{constructor:Vr,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry){if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Tr.fromBufferAttribute(e,i),Ar.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tr.distanceTo(Ar);t.setAttribute("lineDistance",new Pt(n,1))}}else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)Tr.copy(e[i]),Ar.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tr.distanceTo(Ar)}return this}});function Ba(t,e){li.call(this,t,e),this.type="LineLoop"}Ba.prototype=Object.assign(Object.create(li.prototype),{constructor:Ba,isLineLoop:!0});function Rn(t){pt.call(this),this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}Rn.prototype=Object.create(pt.prototype);Rn.prototype.constructor=Rn;Rn.prototype.isPointsMaterial=!0;Rn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Ua=new Et,$s=new nr,Lr=new gn,Cr=new w;function za(t,e){ft.call(this),this.type="Points",this.geometry=t!==void 0?t:new Nt,this.material=e!==void 0?e:new Rn,this.updateMorphTargets()}za.prototype=Object.assign(Object.create(ft.prototype),{constructor:za,isPoints:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Ua.getInverse(i),$s.copy(t.ray).applyMatrix4(Ua);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const f=a.array;for(let h=0,d=f.length;h<d;h++){const u=f[h];Cr.fromBufferAttribute(l,u),Ps(Cr,u,o,i,t,e,this)}}else for(let f=0,h=l.count;f<h;f++)Cr.fromBufferAttribute(l,f),Ps(Cr,f,o,i,t,e,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)Ps(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0}}});function Ps(t,e,n,i,r,s,o){const a=$s.distanceSqToPoint(t);if(a<n){const c=new w;$s.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Ha(t,e,n,i,r,s,o,a,c){zt.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:Mn,this.minFilter=s!==void 0?s:ee,this.magFilter=r!==void 0?r:ee,this.generateMipmaps=!1;const l=this;function f(){l.needsUpdate=!0,t.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(f)}Ha.prototype=Object.assign(Object.create(zt.prototype),{constructor:Ha,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Xi(t,e,n,i,r,s,o,a,c,l,f,h){zt.call(this,null,s,o,a,c,l,i,r,f,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Xi.prototype=Object.create(zt.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isCompressedTexture=!0;function Wr(t,e,n,i,r,s,o,a,c){zt.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}Wr.prototype=Object.create(zt.prototype);Wr.prototype.constructor=Wr;Wr.prototype.isCanvasTexture=!0;function jr(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:ri,l!==ri&&l!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ri&&(n=zr),n===void 0&&l===Gi&&(n=Fi),zt.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:re,this.minFilter=a!==void 0?a:re,this.flipY=!1,this.generateMipmaps=!1}jr.prototype=Object.create(zt.prototype);jr.prototype.constructor=jr;jr.prototype.isDepthTexture=!0;let $p=0;const Re=new Et,Is=new ft,Rr=new w;function Te(){Object.defineProperty(this,"id",{value:$p+=2}),this.uuid=_t.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Te.prototype=Object.assign(Object.create($e.prototype),{constructor:Te,isGeometry:!0,applyMatrix4:function(t){const e=new ce().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this},rotateY:function(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this},rotateZ:function(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this},translate:function(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this},scale:function(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this},lookAt:function(t){return Is.lookAt(t),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new w().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new ct().fromBufferAttribute(o,h));function l(h,d,u,m){const y=o===void 0?[]:[e.colors[h].clone(),e.colors[d].clone(),e.colors[u].clone()],v=s===void 0?[]:[new w().fromBufferAttribute(s,h),new w().fromBufferAttribute(s,d),new w().fromBufferAttribute(s,u)],g=new Hs(h,d,u,v,y,m);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new k().fromBufferAttribute(a,h),new k().fromBufferAttribute(a,d),new k().fromBufferAttribute(a,u)]),c!==void 0&&e.faceVertexUvs[1].push([new k().fromBufferAttribute(c,h),new k().fromBufferAttribute(c,d),new k().fromBufferAttribute(c,u)])}const f=t.groups;if(f.length>0)for(let h=0;h<f.length;h++){const d=f[h],u=d.start,m=d.count;for(let y=u,v=u+m;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Et;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new w,e=new w;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new w;if(t){const n=new w,i=new w;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new Te;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new w,l={a:new w,b:new w,c:new w};r.push(c),s.push(l)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(!(t&&t.isGeometry))return;let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,f=t.colors;n===void 0&&(n=0),e!==void 0&&(i=new ce().getNormalMatrix(e));for(let h=0,d=o.length;h<d;h++){const m=o[h].clone();e!==void 0&&m.applyMatrix4(e),s.push(m)}for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone());for(let h=0,d=c.length;h<d;h++){const u=c[h];let m,y;const v=u.vertexNormals,g=u.vertexColors,p=new Hs(u.a+r,u.b+r,u.c+r);p.normal.copy(u.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let S=0,T=v.length;S<T;S++)m=v[S].clone(),i!==void 0&&m.applyMatrix3(i).normalize(),p.vertexNormals.push(m);p.color.copy(u.color);for(let S=0,T=g.length;S<T;S++)y=g[S],p.vertexColors.push(y.clone());p.materialIndex=u.materialIndex+n,a.push(p)}for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,y=u.length;m<y;m++){const v=u[m],g=[];for(let p=0,S=v.length;p<S;p++)g.push(v[p].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){t&&t.isMesh&&(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix))},mergeVertices:function(){const t={},e=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],f=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);t[f]===void 0?(t[f]=a,e.push(this.vertices[a]),n[a]=e.length-1):n[a]=n[t[f]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const f=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(f[h]===f[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-e.length;return this.vertices=e,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new w(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const u=this.parameters;for(const m in u)u[m]!==void 0&&(t[m]=u[m]);return t}const e=[];for(let u=0;u<this.vertices.length;u++){const m=this.vertices[u];e.push(m.x,m.y,m.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let u=0;u<this.faces.length;u++){const m=this.faces[u],y=!0,v=!1,g=this.faceVertexUvs[0][u]!==void 0,p=m.normal.length()>0,S=m.vertexNormals.length>0,T=m.color.r!==1||m.color.g!==1||m.color.b!==1,E=m.vertexColors.length>0;let b=0;if(b=l(b,0,0),b=l(b,1,y),b=l(b,2,v),b=l(b,3,g),b=l(b,4,p),b=l(b,5,S),b=l(b,6,T),b=l(b,7,E),n.push(b),n.push(m.a,m.b,m.c),n.push(m.materialIndex),g){const C=this.faceVertexUvs[0][u];n.push(d(C[0]),d(C[1]),d(C[2]))}if(p&&n.push(f(m.normal)),S){const C=m.vertexNormals;n.push(f(C[0]),f(C[1]),f(C[2]))}if(T&&n.push(h(m.color)),E){const C=m.vertexColors;n.push(h(C[0]),h(C[1]),h(C[2]))}}function l(u,m,y){return y?u|1<<m:u&~(1<<m)}function f(u){const m=u.x.toString()+u.y.toString()+u.z.toString();return r[m]!==void 0||(r[m]=i.length/3,i.push(u.x,u.y,u.z)),r[m]}function h(u){const m=u.r.toString()+u.g.toString()+u.b.toString();return o[m]!==void 0||(o[m]=s.length,s.push(u.getHex())),o[m]}function d(u){const m=u.x.toString()+u.y.toString();return c[m]!==void 0||(c[m]=a.length/2,a.push(u.x,u.y)),c[m]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new Te().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,d=e.length;h<d;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let m=0,y=u.length;m<y;m++){const v=u[m],g=[];for(let p=0,S=v.length;p<S;p++){const T=v[p];g.push(T.clone())}this.faceVertexUvs[h].push(g)}}const r=t.morphTargets;for(let h=0,d=r.length;h<d;h++){const u={};if(u.name=r[h].name,r[h].vertices!==void 0){u.vertices=[];for(let m=0,y=r[h].vertices.length;m<y;m++)u.vertices.push(r[h].vertices[m].clone())}if(r[h].normals!==void 0){u.normals=[];for(let m=0,y=r[h].normals.length;m<y;m++)u.normals.push(r[h].normals[m].clone())}this.morphTargets.push(u)}const s=t.morphNormals;for(let h=0,d=s.length;h<d;h++){const u={};if(s[h].vertexNormals!==void 0){u.vertexNormals=[];for(let m=0,y=s[h].vertexNormals.length;m<y;m++){const v=s[h].vertexNormals[m],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),u.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){u.faceNormals=[];for(let m=0,y=s[h].faceNormals.length;m<y;m++)u.faceNormals.push(s[h].faceNormals[m].clone())}this.morphNormals.push(u)}const o=t.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=t.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});new w;new w;new w;new te;const Kp={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Fc(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,f,h,d,u;if(i&&(s=rm(t,e,s,n)),t.length>80*n){a=l=t[0],c=f=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>f&&(f=d);u=Math.max(l-a,f-c),u=u!==0?1/u:0}return Yi(s,o,n,a,c,u),o}};function Fc(t,e,n,i,r){let s,o;if(r===mm(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ga(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ga(s,t[s],t[s+1],o);return o&&ss(o,o.next)&&(Ji(o),o=o.next),o}function pn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ss(n,n.next)||Wt(n.prev,n,n.next)===0)){if(Ji(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Yi(t,e,n,i,r,s,o){if(!t)return;!o&&s&&lm(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?em(t,i,r,s):tm(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Ji(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=nm(pn(t),e,n),Yi(t,e,n,i,r,s,2)):o===2&&im(t,e,n,i,r,s):Yi(pn(t),e,n,i,r,s,1);break}}}function tm(t){const e=t.prev,n=t,i=t.next;if(Wt(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(ii(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Wt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function em(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Wt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,f=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Ks(a,c,e,n,i),d=Ks(l,f,e,n,i);let u=t.prevZ,m=t.nextZ;for(;u&&u.z>=h&&m&&m.z<=d;){if(u!==t.prev&&u!==t.next&&ii(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0||(u=u.prevZ,m!==t.prev&&m!==t.next&&ii(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Wt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;u&&u.z>=h;){if(u!==t.prev&&u!==t.next&&ii(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0)return!1;u=u.prevZ}for(;m&&m.z<=d;){if(m!==t.prev&&m!==t.next&&ii(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Wt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function nm(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!ss(r,s)&&Bc(r,i,i.next,s)&&Zi(r,s)&&Zi(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Ji(i),Ji(i.next),i=t=s),i=i.next}while(i!==t);return pn(i)}function im(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fm(o,a)){let c=Uc(o,a);o=pn(o,o.next),c=pn(c,c.next),Yi(o,e,n,i,r,s),Yi(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function rm(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=Fc(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(um(l));for(r.sort(sm),s=0;s<r.length;s++)om(r[s],n),n=pn(n,n.next);return n}function sm(t,e){return t.x-e.x}function om(t,e){if(e=am(t,e),e){const n=Uc(e,t);pn(e,e.next),pn(n,n.next)}}function am(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let f=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ii(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Zi(n,t)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&cm(o,n)))&&(o=n,f=h)),n=n.next;while(n!==a);return o}function cm(t,e){return Wt(t.prev,t,e.prev)<0&&Wt(e.next,t,t.next)<0}function lm(t,e,n,i){let r=t;do r.z===null&&(r.z=Ks(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,hm(r)}function hm(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function Ks(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function um(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ii(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function fm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!dm(t,e)&&(Zi(t,e)&&Zi(e,t)&&pm(t,e)&&(Wt(t.prev,t,e.prev)||Wt(t,e.prev,e))||ss(t,e)&&Wt(t.prev,t,t.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ss(t,e){return t.x===e.x&&t.y===e.y}function Bc(t,e,n,i){const r=Ir(Wt(t,e,n)),s=Ir(Wt(t,e,i)),o=Ir(Wt(n,i,t)),a=Ir(Wt(n,i,e));return!!(r!==s&&o!==a||r===0&&Pr(t,n,e)||s===0&&Pr(t,i,e)||o===0&&Pr(n,t,i)||a===0&&Pr(n,e,i))}function Pr(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ir(t){return t>0?1:t<0?-1:0}function dm(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Bc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Zi(t,e){return Wt(t.prev,t,t.next)<0?Wt(t,e,t.next)>=0&&Wt(t,t.prev,e)>=0:Wt(t,e,t.prev)<0||Wt(t,t.next,e)<0}function pm(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Uc(t,e){const n=new to(t.i,t.x,t.y),i=new to(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ga(t,e,n,i){const r=new to(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ji(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function to(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mm(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const un={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return un.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];ka(t),Va(n,t);let s=t.length;e.forEach(ka);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Va(n,e[a]);const o=Kp.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function ka(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Va(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class zc extends Nt{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,u=n.bevelThickness!==void 0?n.bevelThickness:6,m=n.bevelSize!==void 0?n.bevelSize:u-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,p=n.UVGenerator!==void 0?n.UVGenerator:gm;n.amount!==void 0&&(h=n.amount);let S,T=!1,E,b,C,B;g&&(S=g.getSpacedPoints(f),T=!0,d=!1,E=g.computeFrenetFrames(f,!1),b=new w,C=new w,B=new w),d||(v=0,u=0,m=0,y=0);const Z=a.extractPoints(l);let X=Z.shape;const A=Z.holes;if(!un.isClockWise(X)){X=X.reverse();for(let W=0,Y=A.length;W<Y;W++){const $=A[W];un.isClockWise($)&&(A[W]=$.reverse())}}const D=un.triangulateShape(X,A),F=X;for(let W=0,Y=A.length;W<Y;W++){const $=A[W];X=X.concat($)}function R(W,Y,$){return Y.clone().multiplyScalar($).add(W)}const P=X.length,z=D.length;function G(W,Y,$){let ht,nt,M;const x=W.x-Y.x,j=W.y-Y.y,V=$.x-W.x,L=$.y-W.y,q=x*x+j*j,et=x*L-j*V;if(Math.abs(et)>Number.EPSILON){const at=Math.sqrt(q),J=Math.sqrt(V*V+L*L),st=Y.x-j/at,ut=Y.y+x/at,yt=$.x-L/J,rt=$.y+V/J,mt=((yt-st)*L-(rt-ut)*V)/(x*L-j*V);ht=st+x*mt-W.x,nt=ut+j*mt-W.y;const Vt=ht*ht+nt*nt;if(Vt<=2)return new k(ht,nt);M=Math.sqrt(Vt/2)}else{let at=!1;x>Number.EPSILON?V>Number.EPSILON&&(at=!0):x<-Number.EPSILON?V<-Number.EPSILON&&(at=!0):Math.sign(j)===Math.sign(L)&&(at=!0),at?(ht=-j,nt=x,M=Math.sqrt(q)):(ht=x,nt=j,M=Math.sqrt(q/2))}return new k(ht/M,nt/M)}const tt=[];for(let W=0,Y=F.length,$=Y-1,ht=W+1;W<Y;W++,$++,ht++)$===Y&&($=0),ht===Y&&(ht=0),tt[W]=G(F[W],F[$],F[ht]);const ot=[];let it,gt=tt.concat();for(let W=0,Y=A.length;W<Y;W++){const $=A[W];it=[];for(let ht=0,nt=$.length,M=nt-1,x=ht+1;ht<nt;ht++,M++,x++)M===nt&&(M=0),x===nt&&(x=0),it[ht]=G($[ht],$[M],$[x]);ot.push(it),gt=gt.concat(it)}for(let W=0;W<v;W++){const Y=W/v,$=u*Math.cos(Y*Math.PI/2),ht=m*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=F.length;nt<M;nt++){const x=R(F[nt],tt[nt],ht);dt(x.x,x.y,-$)}for(let nt=0,M=A.length;nt<M;nt++){const x=A[nt];it=ot[nt];for(let j=0,V=x.length;j<V;j++){const L=R(x[j],it[j],ht);dt(L.x,L.y,-$)}}}const bt=m+y;for(let W=0;W<P;W++){const Y=d?R(X[W],gt[W],bt):X[W];T?(C.copy(E.normals[0]).multiplyScalar(Y.x),b.copy(E.binormals[0]).multiplyScalar(Y.y),B.copy(S[0]).add(C).add(b),dt(B.x,B.y,B.z)):dt(Y.x,Y.y,0)}for(let W=1;W<=f;W++)for(let Y=0;Y<P;Y++){const $=d?R(X[Y],gt[Y],bt):X[Y];T?(C.copy(E.normals[W]).multiplyScalar($.x),b.copy(E.binormals[W]).multiplyScalar($.y),B.copy(S[W]).add(C).add(b),dt(B.x,B.y,B.z)):dt($.x,$.y,h/f*W)}for(let W=v-1;W>=0;W--){const Y=W/v,$=u*Math.cos(Y*Math.PI/2),ht=m*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=F.length;nt<M;nt++){const x=R(F[nt],tt[nt],ht);dt(x.x,x.y,h+$)}for(let nt=0,M=A.length;nt<M;nt++){const x=A[nt];it=ot[nt];for(let j=0,V=x.length;j<V;j++){const L=R(x[j],it[j],ht);T?dt(L.x,L.y+S[f-1].y,S[f-1].x+$):dt(L.x,L.y,h+$)}}}kt(),H();function kt(){const W=r.length/3;if(d){let Y=0,$=P*Y;for(let ht=0;ht<z;ht++){const nt=D[ht];Rt(nt[2]+$,nt[1]+$,nt[0]+$)}Y=f+v*2,$=P*Y;for(let ht=0;ht<z;ht++){const nt=D[ht];Rt(nt[0]+$,nt[1]+$,nt[2]+$)}}else{for(let Y=0;Y<z;Y++){const $=D[Y];Rt($[2],$[1],$[0])}for(let Y=0;Y<z;Y++){const $=D[Y];Rt($[0]+P*f,$[1]+P*f,$[2]+P*f)}}i.addGroup(W,r.length/3-W,0)}function H(){const W=r.length/3;let Y=0;$t(F,Y),Y+=F.length;for(let $=0,ht=A.length;$<ht;$++){const nt=A[$];$t(nt,Y),Y+=nt.length}i.addGroup(W,r.length/3-W,1)}function $t(W,Y){let $=W.length;for(;--$>=0;){const ht=$;let nt=$-1;nt<0&&(nt=W.length-1);for(let M=0,x=f+v*2;M<x;M++){const j=P*M,V=P*(M+1),L=Y+ht+j,q=Y+nt+j,et=Y+nt+V,at=Y+ht+V;Mt(L,q,et,at)}}}function dt(W,Y,$){c.push(W),c.push(Y),c.push($)}function Rt(W,Y,$){It(W),It(Y),It($);const ht=r.length/3,nt=p.generateTopUV(i,r,ht-3,ht-2,ht-1);Tt(nt[0]),Tt(nt[1]),Tt(nt[2])}function Mt(W,Y,$,ht){It(W),It(Y),It(ht),It(Y),It($),It(ht);const nt=r.length/3,M=p.generateSideWallUV(i,r,nt-6,nt-3,nt-2,nt-1);Tt(M[0]),Tt(M[1]),Tt(M[3]),Tt(M[1]),Tt(M[2]),Tt(M[3])}function It(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function Tt(W){s.push(W.x),s.push(W.y)}}}toJSON(){const e=Nt.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return ym(n,i,e)}}const gm={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],f=e[r*3+1];return[new k(s,o),new k(a,c),new k(l,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],f=e[i*3+1],h=e[i*3+2],d=e[r*3],u=e[r*3+1],m=e[r*3+2],y=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-f)<.01?[new k(o,1-c),new k(l,1-h),new k(d,1-m),new k(y,1-g)]:[new k(a,1-c),new k(f,1-h),new k(u,1-m),new k(v,1-g)]}};function ym(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class vm extends Te{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new zc(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return xm(n,i,e)}}function xm(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function qr(t,e,n){Nt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new w,l=new w,f=new w,h=new w,d=new w;t.length<3;const u=e+1;for(let m=0;m<=n;m++){const y=m/n;for(let v=0;v<=e;v++){const g=v/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,f),h.subVectors(l,f)):(t(g+a,y,f),h.subVectors(f,l)),y-a>=0?(t(g,y-a,f),d.subVectors(l,f)):(t(g,y+a,f),d.subVectors(f,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=m*u+y,g=m*u+y+1,p=(m+1)*u+y+1,S=(m+1)*u+y;i.push(v,g,S),i.push(g,p,S)}this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2))}qr.prototype=Object.create(Nt.prototype);qr.prototype.constructor=qr;function eo(t,e,n){Te.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new qr(t,e,n)),this.mergeVertices()}eo.prototype=Object.create(Te.prototype);eo.prototype.constructor=eo;class _m extends Nt{constructor(e,n){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n},n=n||12;const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function l(f){const h=r.length/3,d=f.extractPoints(n);let u=d.shape;const m=d.holes;un.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,g=m.length;v<g;v++){const p=m[v];un.isClockWise(p)===!0&&(m[v]=p.reverse())}const y=un.triangulateShape(u,m);for(let v=0,g=m.length;v<g;v++){const p=m[v];u=u.concat(p)}for(let v=0,g=u.length;v<g;v++){const p=u[v];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let v=0,g=y.length;v<g;v++){const p=y[v],S=p[0]+h,T=p[1]+h,E=p[2]+h;i.push(S,T,E),c+=3}}}toJSON(){const e=Nt.prototype.toJSON.call(this),n=this.parameters.shapes;return bm(n,e)}}function bm(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Mm extends Te{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new _m(e,n)),this.mergeVertices()}toJSON(){const e=Te.prototype.toJSON.call(this),n=this.parameters.shapes;return wm(n,e)}}function wm(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function hi(t){pt.call(this),this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.setValues(t)}hi.prototype=Object.create(pt.prototype);hi.prototype.constructor=hi;hi.prototype.isShadowMaterial=!0;hi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this};function Qi(t){le.call(this,t),this.type="RawShaderMaterial"}Qi.prototype=Object.create(le.prototype);Qi.prototype.constructor=Qi;Qi.prototype.isRawShaderMaterial=!0;function Xe(t){pt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}Xe.prototype=Object.create(pt.prototype);Xe.prototype.constructor=Xe;Xe.prototype.isMeshStandardMaterial=!0;Xe.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Pn(t){Xe.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=_t.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}Pn.prototype=Object.create(Xe.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isMeshPhysicalMaterial=!0;Pn.prototype.copy=function(t){return Xe.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ct).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function In(t){pt.call(this),this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}In.prototype=Object.create(pt.prototype);In.prototype.constructor=In;In.prototype.isMeshPhongMaterial=!0;In.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ui(t){pt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ui.prototype=Object.create(pt.prototype);ui.prototype.constructor=ui;ui.prototype.isMeshToonMaterial=!0;ui.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function fi(t){pt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}fi.prototype=Object.create(pt.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshNormalMaterial=!0;fi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function di(t){pt.call(this),this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}di.prototype=Object.create(pt.prototype);di.prototype.constructor=di;di.prototype.isMeshLambertMaterial=!0;di.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function pi(t){pt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}pi.prototype=Object.create(pt.prototype);pi.prototype.constructor=pi;pi.prototype.isMeshMatcapMaterial=!0;pi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function mi(t){_e.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}mi.prototype=Object.create(_e.prototype);mi.prototype.constructor=mi;mi.prototype.isLineDashedMaterial=!0;mi.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Sm=Object.freeze({__proto__:null,ShadowMaterial:hi,SpriteMaterial:Cn,RawShaderMaterial:Qi,ShaderMaterial:le,PointsMaterial:Rn,MeshPhysicalMaterial:Pn,MeshStandardMaterial:Xe,MeshPhongMaterial:In,MeshToonMaterial:ui,MeshNormalMaterial:fi,MeshLambertMaterial:di,MeshDepthMaterial:Tn,MeshDistanceMaterial:An,MeshBasicMaterial:Sn,MeshMatcapMaterial:pi,LineDashedMaterial:mi,LineBasicMaterial:_e,Material:pt});const Gt={arraySlice:function(t,e,n){return Gt.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r){r=r||30;const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],f=l.getValueSize(),h=[],d=[];for(let u=0;u<l.times.length;++u){const m=l.times[u]*r;if(!(m<n||m>=i)){h.push(l.times[u]);for(let y=0;y<f;++y)d.push(l.values[u*f+y])}}h.length!==0&&(l.times=Gt.convertArray(h,l.times.constructor),l.values=Gt.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e,n,i){e===void 0&&(e=0),n===void 0&&(n=t),(i===void 0||i<=0)&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let f=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);let d=0;const u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);const m=a.times.length-1;let y;if(s<=a.times[0]){const g=f,p=h-f;y=Gt.arraySlice(a.values,g,p)}else if(s>=a.times[m]){const g=m*h+f,p=g+h-f;y=Gt.arraySlice(a.values,g,p)}else{const g=a.createInterpolant(),p=f,S=h-f;g.evaluate(s),y=Gt.arraySlice(g.resultBuffer,p,S)}c==="quaternion"&&new de().fromArray(y).normalize().conjugate().toArray(y);const v=l.times.length;for(let g=0;g<v;++g){const p=g*u+d;if(c==="quaternion")de.multiplyQuaternionsFlat(l.values,p,y,0,l.values,p);else{const S=u-d*2;for(let T=0;T<S;++T)l.values[p+T]-=y[T]}}}return t.blendMode=vc,t}};function ve(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(ve.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(ve.prototype,{beforeStart_:ve.prototype.copySampleValue_,afterEnd_:ve.prototype.copySampleValue_});function no(t,e,n,i){ve.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}no.prototype=Object.assign(Object.create(ve.prototype),{constructor:no,DefaultSettings_:{endingStart:Qn,endingEnd:Qn},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case $n:r=t,o=2*e-n;break;case kr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case $n:s=t,a=2*n-e;break;case kr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,u=(n-e)/(i-e),m=u*u,y=m*u,v=-h*y+2*h*m-h*u,g=(1+h)*y+(-1.5-2*h)*m+(-.5+h)*u+1,p=(-1-d)*y+(1.5+d)*m+.5*u,S=d*y-d*m;for(let T=0;T!==o;++T)r[T]=v*s[l+T]+g*s[c+T]+p*s[a+T]+S*s[f+T];return r}});function Xr(t,e,n,i){ve.call(this,t,e,n,i)}Xr.prototype=Object.assign(Object.create(ve.prototype),{constructor:Xr,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),f=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[a+h]*l;return r}});function io(t,e,n,i){ve.call(this,t,e,n,i)}io.prototype=Object.assign(Object.create(ve.prototype),{constructor:io,interpolate_:function(t){return this.copySampleValue_(t-1)}});function ie(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gt.convertArray(e,this.TimeBufferType),this.values=Gt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ie,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:Gt.convertArray(t.times,Array),values:Gt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(ie.prototype,{constructor:ie,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Ur,InterpolantFactoryMethodDiscrete:function(t){return new io(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Xr(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new no(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Ur:e=this.InterpolantFactoryMethodLinear;break;case cs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return cs}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Gt.arraySlice(n,r,s),this.values=Gt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){t=!1;break}if(s!==null&&s>a){t=!1;break}s=a}if(i!==void 0&&Gt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){t=!1;break}}return t},optimize:function(){const t=Gt.arraySlice(this.times),e=Gt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===cs,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const f=o*n,h=f-n,d=f+n;for(let u=0;u!==n;++u){const m=e[f+u];if(m!==e[h+u]||m!==e[d+u]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const f=o*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=Gt.arraySlice(t,0,s),this.values=Gt.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=Gt.arraySlice(this.times,0),e=Gt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function ro(t,e,n){ie.call(this,t,e,n)}ro.prototype=Object.assign(Object.create(ie.prototype),{constructor:ro,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Gr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function so(t,e,n,i){ie.call(this,t,e,n,i)}so.prototype=Object.assign(Object.create(ie.prototype),{constructor:so,ValueTypeName:"color"});function $i(t,e,n,i){ie.call(this,t,e,n,i)}$i.prototype=Object.assign(Object.create(ie.prototype),{constructor:$i,ValueTypeName:"number"});function oo(t,e,n,i){ve.call(this,t,e,n,i)}oo.prototype=Object.assign(Object.create(ve.prototype),{constructor:oo,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)de.slerpFlat(r,0,s,c-o,s,c,a);return r}});function Yr(t,e,n,i){ie.call(this,t,e,n,i)}Yr.prototype=Object.assign(Object.create(ie.prototype),{constructor:Yr,ValueTypeName:"quaternion",DefaultInterpolation:Ur,InterpolantFactoryMethodLinear:function(t){return new oo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function ao(t,e,n,i){ie.call(this,t,e,n,i)}ao.prototype=Object.assign(Object.create(ie.prototype),{constructor:ao,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Gr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ki(t,e,n,i){ie.call(this,t,e,n,i)}Ki.prototype=Object.assign(Object.create(ie.prototype),{constructor:Ki,ValueTypeName:"vector"});function Ie(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:Mo,this.uuid=_t.generateUUID(),this.duration<0&&this.resetDuration()}function Em(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return so;case"quaternion":return Yr;case"bool":case"boolean":return ro;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Tm(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Em(t.type);if(t.times===void 0){const n=[],i=[];Gt.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Ie,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,s=n.length;r!==s;++r)e.push(Tm(n[r]).scale(i));return new Ie(t.name,t.duration,e,t.blendMode)},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ie.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=Gt.getKeyframeOrder(a);a=Gt.sortedArray(a,1,l),c=Gt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new $i(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Ie(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const f=l[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Ie.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return null;const n=function(f,h,d,u,m){if(d.length!==0){const y=[],v=[];Gt.flattenJSON(d,y,v,u),y.length!==0&&m.push(new f(h,y,v))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let u;for(u=0;u<h.length;u++)if(h[u].morphTargets)for(let m=0;m<h[u].morphTargets.length;m++)d[h[u].morphTargets[m]]=-1;for(const m in d){const y=[],v=[];for(let g=0;g!==h[u].morphTargets.length;++g){const p=h[u];y.push(p.time),v.push(p.morphTarget===m?1:0)}i.push(new $i(".morphTargetInfluence["+m+"]",y,v))}a=d.length*s}else{const d=".bones["+e[f].name+"]";n(Ki,d+".position",h,"pos",i),n(Yr,d+".quaternion",h,"rot",i),n(Ki,d+".scale",h,"scl",i)}}return i.length===0?null:new Ie(r,a,i,o)}});Object.assign(Ie.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Ie(this.name,this.duration,t,this.blendMode)}});const gi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Am(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],u=c[f+1];if(d.global&&(d.lastIndex=0),d.test(l))return u}return null}}const Lm=new Am;function Ot(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ot.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Ee={};function Ye(t){Ot.call(this,t)}Ye.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Ye,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Ee[t]!==void 0){Ee[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],f=!!a[2];let h=a[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d;const u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":const m=new Uint8Array(h.length);for(let v=0;v<h.length;v++)m[v]=h.charCodeAt(v);u==="blob"?d=new Blob([m.buffer],{type:l}):d=m.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ee[t]=[],Ee[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const f=this.response,h=Ee[t];if(delete Ee[t],this.status===200||this.status===0){this.status,gi.add(t,f);for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onLoad&&m.onLoad(f)}r.manager.itemEnd(t)}else{for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onError&&m.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const f=Ee[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onProgress&&u.onProgress(l)}},!1),c.addEventListener("error",function(l){const f=Ee[t];delete Ee[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const f=Ee[t];delete Ee[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Wa(t){Ot.call(this,t)}Wa.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Wa,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i&&i(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=Ie.parse(t[n]);e.push(i)}return e}});function ja(t){Ot.call(this,t)}ja.prototype=Object.assign(Object.create(Ot.prototype),{constructor:ja,load:function(t,e,n,i){const r=this,s=[],o=new Xi;o.image=s;const a=new Ye(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(f){a.load(t[f],function(h){const d=r.parse(h,!0);s[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=ee),o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let f=0,h=t.length;f<h;++f)l(f);else a.load(t,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let u=0;u<d;u++){s[u]={mipmaps:[]};for(let m=0;m<h.mipmapCount;m++)s[u].mipmaps.push(h.mipmaps[u*h.mipmapCount+m]),s[u].format=h.format,s[u].width=h.width,s[u].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=ee),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Zr(t){Ot.call(this,t)}Zr.prototype=Object.assign(Object.create(Ot.prototype),{constructor:Zr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function co(t){Ot.call(this,t)}co.prototype=Object.assign(Object.create(Ot.prototype),{constructor:co,load:function(t,e,n,i){const r=new dn,s=new Zr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function qa(t){Ot.call(this,t)}qa.prototype=Object.assign(Object.create(Ot.prototype),{constructor:qa,load:function(t,e,n,i){const r=this,s=new ci,o=new Ye(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:fe,s.wrapT=c.wrapT!==void 0?c.wrapT:fe,s.magFilter=c.magFilter!==void 0?c.magFilter:ee,s.minFilter=c.minFilter!==void 0?c.minFilter:ee,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=es),c.mipmapCount===1&&(s.minFilter=ee),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function lo(t){Ot.call(this,t)}lo.prototype=Object.assign(Object.create(Ot.prototype),{constructor:lo,load:function(t,e,n,i){const r=new zt,s=new Zr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?Mn:Ae,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function lt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(lt.prototype,{getPoint:function(){return null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new k:new w);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new w,i=[],r=[],s=[],o=new w,a=new Et;for(let d=0;d<=t;d++){const u=d/t;i[d]=this.getTangentAt(u,new w),i[d].normalize()}r[0]=new w,s[0]=new w;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const u=Math.acos(_t.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,u))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(_t.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let u=1;u<=t;u++)r[u].applyMatrix4(a.makeRotationAxis(i[u],d*u)),s[u].crossVectors(i[u],r[u])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function be(t,e,n,i,r,s,o,a){lt.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}be.prototype=Object.create(lt.prototype);be.prototype.constructor=be;be.prototype.isEllipseCurve=!0;be.prototype.getPoint=function(t,e){const n=e||new k,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*f+this.aX,c=h*f+d*l+this.aY}return n.set(a,c)};be.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};be.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};be.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function tr(t,e,n,i,r,s){be.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}tr.prototype=Object.create(be.prototype);tr.prototype.constructor=tr;tr.prototype.isArcCurve=!0;function wo(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,h){let d=(o-s)/l-(a-s)/(l+f)+(a-o)/f,u=(a-o)/f-(c-o)/(f+h)+(c-a)/h;d*=f,u*=f,r(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Dr=new w,Ds=new wo,Ns=new wo,Os=new wo;function me(t,e,n,i){lt.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}me.prototype=Object.create(lt.prototype);me.prototype.constructor=me;me.prototype.isCatmullRomCurve3=!0;me.prototype.getPoint=function(t,e){const n=e||new w,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Dr.subVectors(i[0],i[1]).add(i[0]),c=Dr);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let u=Math.pow(c.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(l),d);m<1e-4&&(m=1),u<1e-4&&(u=m),y<1e-4&&(y=m),Ds.initNonuniformCatmullRom(c.x,f.x,h.x,l.x,u,m,y),Ns.initNonuniformCatmullRom(c.y,f.y,h.y,l.y,u,m,y),Os.initNonuniformCatmullRom(c.z,f.z,h.z,l.z,u,m,y)}else this.curveType==="catmullrom"&&(Ds.initCatmullRom(c.x,f.x,h.x,l.x,this.tension),Ns.initCatmullRom(c.y,f.y,h.y,l.y,this.tension),Os.initCatmullRom(c.z,f.z,h.z,l.z,this.tension));return n.set(Ds.calc(a),Ns.calc(a),Os.calc(a)),n};me.prototype.copy=function(t){lt.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};me.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};me.prototype.fromJSON=function(t){lt.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function Xa(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Cm(t,e){const n=1-t;return n*n*e}function Rm(t,e){return 2*(1-t)*t*e}function Pm(t,e){return t*t*e}function zi(t,e,n,i){return Cm(t,e)+Rm(t,n)+Pm(t,i)}function Im(t,e){const n=1-t;return n*n*n*e}function Dm(t,e){const n=1-t;return 3*n*n*t*e}function Nm(t,e){return 3*(1-t)*t*t*e}function Om(t,e){return t*t*t*e}function Hi(t,e,n,i,r){return Im(t,e)+Dm(t,n)+Nm(t,i)+Om(t,r)}function Oe(t,e,n,i){lt.call(this),this.type="CubicBezierCurve",this.v0=t||new k,this.v1=e||new k,this.v2=n||new k,this.v3=i||new k}Oe.prototype=Object.create(lt.prototype);Oe.prototype.constructor=Oe;Oe.prototype.isCubicBezierCurve=!0;Oe.prototype.getPoint=function(t,e){const n=e||new k,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Hi(t,i.x,r.x,s.x,o.x),Hi(t,i.y,r.y,s.y,o.y)),n};Oe.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Oe.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Oe.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Ze(t,e,n,i){lt.call(this),this.type="CubicBezierCurve3",this.v0=t||new w,this.v1=e||new w,this.v2=n||new w,this.v3=i||new w}Ze.prototype=Object.create(lt.prototype);Ze.prototype.constructor=Ze;Ze.prototype.isCubicBezierCurve3=!0;Ze.prototype.getPoint=function(t,e){const n=e||new w,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Hi(t,i.x,r.x,s.x,o.x),Hi(t,i.y,r.y,s.y,o.y),Hi(t,i.z,r.z,s.z,o.z)),n};Ze.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Ze.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Ze.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function ge(t,e){lt.call(this),this.type="LineCurve",this.v1=t||new k,this.v2=e||new k}ge.prototype=Object.create(lt.prototype);ge.prototype.constructor=ge;ge.prototype.isLineCurve=!0;ge.prototype.getPoint=function(t,e){const n=e||new k;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};ge.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};ge.prototype.getTangent=function(t,e){const n=e||new k;return n.copy(this.v2).sub(this.v1).normalize(),n};ge.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};ge.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};ge.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Fe(t,e){lt.call(this),this.type="LineCurve3",this.v1=t||new w,this.v2=e||new w}Fe.prototype=Object.create(lt.prototype);Fe.prototype.constructor=Fe;Fe.prototype.isLineCurve3=!0;Fe.prototype.getPoint=function(t,e){const n=e||new w;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Fe.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Fe.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Fe.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Fe.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Be(t,e,n){lt.call(this),this.type="QuadraticBezierCurve",this.v0=t||new k,this.v1=e||new k,this.v2=n||new k}Be.prototype=Object.create(lt.prototype);Be.prototype.constructor=Be;Be.prototype.isQuadraticBezierCurve=!0;Be.prototype.getPoint=function(t,e){const n=e||new k,i=this.v0,r=this.v1,s=this.v2;return n.set(zi(t,i.x,r.x,s.x),zi(t,i.y,r.y,s.y)),n};Be.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Be.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Be.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Je(t,e,n){lt.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new w,this.v1=e||new w,this.v2=n||new w}Je.prototype=Object.create(lt.prototype);Je.prototype.constructor=Je;Je.prototype.isQuadraticBezierCurve3=!0;Je.prototype.getPoint=function(t,e){const n=e||new w,i=this.v0,r=this.v1,s=this.v2;return n.set(zi(t,i.x,r.x,s.x),zi(t,i.y,r.y,s.y),zi(t,i.z,r.z,s.z)),n};Je.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Je.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Je.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ue(t){lt.call(this),this.type="SplineCurve",this.points=t||[]}Ue.prototype=Object.create(lt.prototype);Ue.prototype.constructor=Ue;Ue.prototype.isSplineCurve=!0;Ue.prototype.getPoint=function(t,e){const n=e||new k,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return n.set(Xa(o,a.x,c.x,l.x,f.x),Xa(o,a.y,c.y,l.y,f.y)),n};Ue.prototype.copy=function(t){lt.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this};Ue.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t};Ue.prototype.fromJSON=function(t){lt.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this};var Fm=Object.freeze({__proto__:null,ArcCurve:tr,CatmullRomCurve3:me,CubicBezierCurve:Oe,CubicBezierCurve3:Ze,EllipseCurve:be,LineCurve:ge,LineCurve3:Fe,QuadraticBezierCurve:Be,QuadraticBezierCurve3:Je,SplineCurve:Ue});function ln(){lt.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ln.prototype=Object.assign(Object.create(lt.prototype),{constructor:ln,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ge(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){t===void 0&&(t=40);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){lt.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=lt.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){lt.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Fm[i.type]().fromJSON(i))}return this}});function De(t){ln.call(this),this.type="Path",this.currentPoint=new k,t&&this.setFromPoints(t)}De.prototype=Object.assign(Object.create(ln.prototype),{constructor:De,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new ge(this.currentPoint.clone(),new k(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new Be(this.currentPoint.clone(),new k(t,e),new k(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Oe(this.currentPoint.clone(),new k(t,e),new k(n,i),new k(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Ue(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new be(t,e,n,i,r,s,o,a);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return ln.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=ln.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return ln.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function si(t){De.call(this,t),this.uuid=_t.generateUUID(),this.type="Shape",this.holes=[]}si.prototype=Object.assign(Object.create(De.prototype),{constructor:si,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){De.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=De.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){De.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new De().fromJSON(i))}return this}});function Ht(t,e){ft.call(this),this.type="Light",this.color=new ct(t),this.intensity=e!==void 0?e:1}Ht.prototype=Object.assign(Object.create(ft.prototype),{constructor:Ht,isLight:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Ya(t,e,n){Ht.call(this,t,n),this.type="HemisphereLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.groundColor=new ct(e)}Ya.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ya,isHemisphereLight:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function Qe(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new k(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}Object.assign(Qe.prototype,{_projScreenMatrix:new Et,_lightPositionWorld:new w,_lookTarget:new w,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function ho(){Qe.call(this,new Qt(50,1,.5,500)),this.focus=1}ho.prototype=Object.assign(Object.create(Qe.prototype),{constructor:ho,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=_t.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),Qe.prototype.updateMatrices.call(this,t)}});function Za(t,e,n,i,r,s){Ht.call(this,t,e),this.type="SpotLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new ho}Za.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Za,isSpotLight:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function uo(){Qe.call(this,new Qt(90,1,.5,500)),this._frameExtents=new k(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}uo.prototype=Object.assign(Object.create(Qe.prototype),{constructor:uo,isPointLightShadow:!0,updateMatrices:function(t,e){e===void 0&&(e=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Ja(t,e,n,i){Ht.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new uo}Ja.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ja,isPointLight:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function fo(t,e,n,i,r,s){fn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}fo.prototype=Object.assign(Object.create(fn.prototype),{constructor:fo,isOrthographicCamera:!0,copy:function(t,e){return fn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function po(){Qe.call(this,new fo(-5,5,5,-5,.5,500))}po.prototype=Object.assign(Object.create(Qe.prototype),{constructor:po,isDirectionalLightShadow:!0,updateMatrices:function(t){Qe.prototype.updateMatrices.call(this,t)}});function Qa(t,e){Ht.call(this,t,e),this.type="DirectionalLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,this.shadow=new po}Qa.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Qa,isDirectionalLight:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function $a(t,e){Ht.call(this,t,e),this.type="AmbientLight"}$a.prototype=Object.assign(Object.create(Ht.prototype),{constructor:$a,isAmbientLight:!0});function Ka(t,e,n,i){Ht.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Ka.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ka,isRectAreaLight:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=Ht.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Bm{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Ne(t,e){Ht.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Bm}Ne.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Ne,isLightProbe:!0,copy:function(t){return Ht.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=Ht.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function tc(t){Ot.call(this,t),this.textures={}}tc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:tc,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i&&i(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r],e[r]}const i=new Sm[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ct().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ct().setHex(s.value);break;case"v2":i.uniforms[r].value=new k().fromArray(s.value);break;case"v3":i.uniforms[r].value=new w().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Dt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new ce().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Et().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new k().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new k().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const Um={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Jr(){Nt.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Jr.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Jr,isInstancedBufferGeometry:!0,copy:function(t){return Nt.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=Nt.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function mo(t,e,n,i){typeof n=="number"&&(i=n,n=!1),xt.call(this,t,e,n),this.meshPerAttribute=i||1}mo.prototype=Object.assign(Object.create(xt.prototype),{constructor:mo,isInstancedBufferAttribute:!0,copy:function(t){return xt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=xt.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function ec(t){Ot.call(this,t)}ec.prototype=Object.assign(Object.create(Ot.prototype),{constructor:ec,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i&&i(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(d,u){if(e[u]!==void 0)return e[u];const y=d.interleavedBuffers[u],v=r(d,y.buffer),g=new Nr[y.type](v),p=new ye(g,y.stride);return p.uuid=y.uuid,e[u]=p,p}function r(d,u){if(n[u]!==void 0)return n[u];const y=d.arrayBuffers[u],v=new Uint32Array(y).buffer;return n[u]=v,v}const s=t.isInstancedBufferGeometry?new Jr:new Nt,o=t.data.index;if(o!==void 0){const d=new Nr[o.type](o.array);s.setIndex(new xt(d,1))}const a=t.data.attributes;for(const d in a){const u=a[d];let m;if(u.isInterleavedBufferAttribute){const y=i(t.data,u.data);m=new Ln(y,u.itemSize,u.offset,u.normalized)}else{const y=new Nr[u.type](u.array),v=u.isInstancedBufferAttribute?mo:xt;m=new v(y,u.itemSize,u.normalized)}u.name!==void 0&&(m.name=u.name),s.setAttribute(d,m)}const c=t.data.morphAttributes;if(c)for(const d in c){const u=c[d],m=[];for(let y=0,v=u.length;y<v;y++){const g=u[y];let p;if(g.isInterleavedBufferAttribute){const S=i(t.data,g.data);p=new Ln(S,g.itemSize,g.offset,g.normalized)}else{const S=new Nr[g.type](g.array);p=new xt(S,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),m.push(p)}s.morphAttributes[d]=m}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,u=f.length;d!==u;++d){const m=f[d];s.addGroup(m.start,m.count,m.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const d=new w;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new gn(d,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});const Nr={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nc(t){Ot.call(this,t),this.options={premultiplyAlpha:"none"}}nc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:nc,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){gi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Hc(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null}Object.assign(Hc.prototype,{moveTo:function(t,e){return this.currentPath=new De,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const p=[];for(let S=0,T=g.length;S<T;S++){const E=g[S],b=new si;b.curves=E.curves,p.push(b)}return p}function i(g,p){const S=p.length;let T=!1;for(let E=S-1,b=0;b<S;E=b++){let C=p[E],B=p[b],Z=B.x-C.x,X=B.y-C.y;if(Math.abs(X)>Number.EPSILON){if(X<0&&(C=p[b],Z=-Z,B=p[E],X=-X),g.y<C.y||g.y>B.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{const A=X*(g.x-C.x)-Z*(g.y-C.y);if(A===0)return!0;if(A<0)continue;T=!T}}else{if(g.y!==C.y)continue;if(B.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=B.x)return!0}}return T}const r=un.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new si,c.curves=a.curves,l.push(c),l;let f=!r(s[0].getPoints());f=t?!f:f;const h=[],d=[];let u=[],m=0,y;d[m]=void 0,u[m]=[];for(let g=0,p=s.length;g<p;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!f&&d[m]&&m++,d[m]={s:new si,p:y},d[m].s.curves=a.curves,f&&m++,u[m]=[]):u[m].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let g=!1;const p=[];for(let S=0,T=d.length;S<T;S++)h[S]=[];for(let S=0,T=d.length;S<T;S++){const E=u[S];for(let b=0;b<E.length;b++){const C=E[b];let B=!0;for(let Z=0;Z<d.length;Z++)i(C.p,d[Z].p)&&(S!==Z&&p.push({froms:S,tos:Z,hole:b}),B?(B=!1,h[Z].push(C)):g=!0);B&&h[S].push(C)}}p.length>0&&(g||(u=h))}let v;for(let g=0,p=d.length;g<p;g++){c=d[g].s,l.push(c),v=u[g];for(let S=0,T=v.length;S<T;S++)c.holes.push(v[S].h)}return l}});function Gc(t){this.type="Font",this.data=t}Object.assign(Gc.prototype,{isFont:!0,generateShapes:function(t,e){e===void 0&&(e=100);const n=[],i=zm(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function zm(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const f=i[l];if(f===`
`)a=0,c-=s;else{const h=Hm(f,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Hm(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s)return;const o=new Hc;let a,c,l,f,h,d,u,m;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;)switch(y[v++]){case"m":a=y[v++]*e+n,c=y[v++]*e+i,o.moveTo(a,c);break;case"l":a=y[v++]*e+n,c=y[v++]*e+i,o.lineTo(a,c);break;case"q":l=y[v++]*e+n,f=y[v++]*e+i,h=y[v++]*e+n,d=y[v++]*e+i,o.quadraticCurveTo(h,d,l,f);break;case"b":l=y[v++]*e+n,f=y[v++]*e+i,h=y[v++]*e+n,d=y[v++]*e+i,u=y[v++]*e+n,m=y[v++]*e+i,o.bezierCurveTo(h,d,u,m,l,f);break}}return{offsetX:s.ha*e,path:o}}function ic(t){Ot.call(this,t)}ic.prototype=Object.assign(Object.create(Ot.prototype),{constructor:ic,load:function(t,e,n,i){const r=this,s=new Ye(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch(l){a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new Gc(t)}});let Or;const Gm={getContext:function(){return Or===void 0&&(Or=new(window.AudioContext||window.webkitAudioContext)),Or},setContext:function(t){Or=t}};function rc(t){Ot.call(this,t)}rc.prototype=Object.assign(Object.create(Ot.prototype),{constructor:rc,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);Gm.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i&&i(a),r.manager.itemError(t)}},n,i)}});function sc(t,e,n){Ne.call(this,void 0,n);const i=new ct().set(t),r=new ct().set(e),s=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}sc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:sc,isHemisphereLightProbe:!0,copy:function(t){return Ne.prototype.copy.call(this,t),this},toJSON:function(t){return Ne.prototype.toJSON.call(this,t)}});function oc(t,e){Ne.call(this,void 0,e);const n=new ct().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}oc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:oc,isAmbientLightProbe:!0,copy:function(t){return Ne.prototype.copy.call(this,t),this},toJSON:function(t){return Ne.prototype.toJSON.call(this,t)}});const ac=new Et,cc=new Et;function km(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(km.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(_t.DEG2RAD*e.fov*.5)/e.zoom;let a,c;cc.elements[12]=-r,ac.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(cc),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ac)}});class ag{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance=="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=(typeof performance=="undefined"?Date:performance).now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function kc(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(kc.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){de.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;de.multiplyQuaternionsFlat(t,s,t,e,t,n),de.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const So="\\[\\]\\.:\\/",Vm=new RegExp("["+So+"]","g"),Eo="[^"+So+"]",Wm="[^"+So.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",Eo),qm=/(WCOD+)?/.source.replace("WCOD",Wm),Xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),Zm=new RegExp("^"+jm+qm+Xm+Ym+"$"),Jm=["material","materials","bones"];function Vc(t,e,n){const i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Vc.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function se(t,e,n){this.path=e,this.parsedPath=n||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(se,{Composite:Vc,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new se.Composite(t,e,n):new se(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Vm,"")},parseTrackName:function(t){const e=Zm.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(se.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=se.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return;if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material||!t.material.materials)return;t=t.material.materials;break;case"bones":if(!t.skeleton)return;t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0)return;t=t[n]}if(c!==void 0){if(t[c]===void 0)return;t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return;if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes)return;t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else return}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(se.prototype,{_getValue_unbound:se.prototype.getValue,_setValue_unbound:se.prototype.setValue});function Qm(){this.uuid=_t.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(Qm.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,f=arguments.length;l!==f;++l){const h=arguments[l],d=h.uuid;let u=e[d];if(u===void 0){u=a++,e[d]=u,t.push(h);for(let m=0,y=s;m!==y;++m)r[m].push(new se(h,n[m],i[m]))}else if(u<c){o=t[u];const m=--c,y=t[m];e[y.uuid]=u,t[u]=y,e[d]=m,t[m]=h;for(let v=0,g=s;v!==g;++v){const p=r[v],S=p[m];let T=p[u];p[u]=S,T===void 0&&(T=new se(h,n[v],i[v])),p[m]=T}}else t[u]}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const f=r++,h=t[f];e[h.uuid]=l,t[l]=h,e[c]=f,t[f]=a;for(let d=0,u=i;d!==u;++d){const m=n[d],y=m[f],v=m[l];m[l]=y,m[f]=v}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,f=e[l];if(f!==void 0)if(delete e[l],f<r){const h=--r,d=t[h],u=--s,m=t[u];e[d.uuid]=f,t[f]=d,e[m.uuid]=h,t[h]=m,t.pop();for(let y=0,v=i;y!==v;++y){const g=n[y],p=g[h],S=g[u];g[f]=p,g[h]=S,g.pop()}}else{const h=--s,d=t[h];h>0&&(e[d.uuid]=f),t[f]=d,t.pop();for(let u=0,m=i;u!==m;++u){const y=n[u];y[f]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,f=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(f);for(let h=l,d=a.length;h!==d;++h){const u=a[h];f[h]=new se(u,t,e)}return f},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class $m{constructor(e,n,i,r){this._mixer=e,this._clip=n,this._localRoot=i||null,this.blendMode=r||n.blendMode;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Qn,endingEnd:Qn};for(let l=0;l!==o;++l){const f=s[l].createInterpolant(null);a[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case vc:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulateAdditive(a);break;case Mo:default:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===wh;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===bh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=$n,r.endingEnd=$n):(e?r.endingStart=this.zeroSlopeAtStart?$n:Qn:r.endingStart=kr,n?r.endingEnd=this.zeroSlopeAtEnd?$n:Qn:r.endingEnd=kr)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function lc(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}lc.prototype=Object.assign(Object.create($e.prototype),{constructor:lc,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let u=l[d];if(u!==void 0)s[f]=u;else{if(u=s[f],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,a,d));continue}const m=e&&e._propertyBindings[f].binding.parsedPath;u=new kc(se.create(n,d,m),h.ValueTypeName,h.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,a,d),s[f]=u}o[f].resultBuffer=u.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const f=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete f[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Xr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?Ie.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Mo),a!==void 0){const f=a.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new $m(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ie.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,f=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=l,e[l]=f,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function hc(t,e,n){ye.call(this,t,e),this.meshPerAttribute=n||1}hc.prototype=Object.assign(Object.create(ye.prototype),{constructor:hc,isInstancedInterleavedBuffer:!0,copy:function(t){return ye.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=ye.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=ye.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Wc(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Wc.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Wc.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function jc(t,e,n,i){this.ray=new nr(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return this.Points}}})}function uc(t,e){return t.distance-e.distance}function go(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)go(r[s],e,n,!0)}}Object.assign(jc.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera&&(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e)},intersectObject:function(t,e,n){const i=n||[];return go(t,this,i,e),i.sort(uc),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return i;for(let r=0,s=t.length;r<s;r++)go(t[r],this,i,e);return i.sort(uc),i}});class cg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t.clamp(n/this.radius,-1,1))),this}}const fc=new k;class Km{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new k(1/0,1/0),this.max=n!==void 0?n:new k(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fc.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(e=new k),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(e=new k),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(n=new k),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(n=new k),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Qr(t){ft.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Qr.prototype=Object.create(ft.prototype);Qr.prototype.constructor=Qr;Qr.prototype.isImmediateRenderObject=!0;const an=new w,Fr=new Et,Fs=new Et;class tg extends Vr{constructor(e){const n=qc(e),i=new Nt,r=[],s=[],o=new ct(0,0,1),a=new ct(0,1,0);for(let l=0;l<n.length;l++){const f=n[l];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pt(r,3)),i.setAttribute("color",new Pt(s,3));const c=new _e({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Fs.getInverse(this.root.matrixWorld);for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(Fr.multiplyMatrices(Fs,a.matrixWorld),an.setFromMatrixPosition(Fr),r.setXYZ(o,an.x,an.y,an.z),Fr.multiplyMatrices(Fs,a.parent.matrixWorld),an.setFromMatrixPosition(Fr),r.setXYZ(o+1,an.x,an.y,an.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function qc(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,qc(t.children[n]));return e}class eg extends Vr{constructor(e,n,i,r){e=e||10,n=n||10,i=new ct(i!==void 0?i:4473924),r=new ct(r!==void 0?r:8947848);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let d=0,u=0,m=-a;d<=n;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const y=d===s?i:r;y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3}const f=new Nt;f.setAttribute("position",new Pt(c,3)),f.setAttribute("color",new Pt(l,3));const h=new _e({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}}lt.create=function(t,e){return t.prototype=Object.create(lt.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(ln.prototype,{createPointsGeometry:function(t){const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){const e=new Te;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new w(r.x,r.y,r.z||0))}return e}});Object.assign(De.prototype,{fromPoints:function(t){return this.setFromPoints(t)}});Object.create(me.prototype);Object.create(me.prototype);function Xc(t){me.call(this,t),this.type="catmullrom"}Xc.prototype=Object.create(me.prototype);Object.assign(Xc.prototype,{initFromArray:function(){},getControlPointsArray:function(){},reparametrizeByArcLength:function(){}});eg.prototype.setColors=function(){};tg.prototype.update=function(){};Object.assign(Ot.prototype,{extractUrlBase:function(t){return Um.extractUrlBase(t)}});Ot.Handlers={add:function(){},get:function(){}};Object.assign(Km.prototype,{center:function(t){return this.getCenter(t)},empty:function(){return this.isEmpty()},isIntersectionBox:function(t){return this.intersectsBox(t)},size:function(t){return this.getSize(t)}});Object.assign(mn.prototype,{center:function(t){return this.getCenter(t)},empty:function(){return this.isEmpty()},isIntersectionBox:function(t){return this.intersectsBox(t)},isIntersectionSphere:function(t){return this.intersectsSphere(t)},size:function(t){return this.getSize(t)}});Object.assign(gn.prototype,{empty:function(){return this.isEmpty()}});is.prototype.setFromMatrix=function(t){return this.setFromProjectionMatrix(t)};Object.assign(_t,{random16:function(){return Math.random()},nearestPowerOfTwo:function(t){return _t.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return _t.ceilPowerOfTwo(t)}});Object.assign(ce.prototype,{flattenToArrayOffset:function(t,e){return this.toArray(t,e)},multiplyVector3:function(t){return t.applyMatrix3(this)},multiplyVector3Array:function(){},applyToBufferAttribute:function(t){return t.applyMatrix3(this)},applyToVector3Array:function(){}});Object.assign(Et.prototype,{extractPosition:function(t){return this.copyPosition(t)},flattenToArrayOffset:function(t,e){return this.toArray(t,e)},getPosition:function(){return new w().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return this.makeRotationFromQuaternion(t)},multiplyToArray:function(){},multiplyVector3:function(t){return t.applyMatrix4(this)},multiplyVector4:function(t){return t.applyMatrix4(this)},multiplyVector3Array:function(){},rotateAxis:function(t){t.transformDirection(this)},crossVector:function(t){return t.applyMatrix4(this)},translate:function(){},rotateX:function(){},rotateY:function(){},rotateZ:function(){},rotateByAxis:function(){},applyToBufferAttribute:function(t){return t.applyMatrix4(this)},applyToVector3Array:function(){},makeFrustum:function(t,e,n,i,r,s){return this.makePerspective(t,e,i,n,r,s)}});qe.prototype.isIntersectionLine=function(t){return this.intersectsLine(t)};de.prototype.multiplyVector3=function(t){return t.applyQuaternion(this)};Object.assign(nr.prototype,{isIntersectionBox:function(t){return this.intersectsBox(t)},isIntersectionPlane:function(t){return this.intersectsPlane(t)},isIntersectionSphere:function(t){return this.intersectsSphere(t)}});Object.assign(te.prototype,{area:function(){return this.getArea()},barycoordFromPoint:function(t,e){return this.getBarycoord(t,e)},midpoint:function(t){return this.getMidpoint(t)},normal:function(t){return this.getNormal(t)},plane:function(t){return this.getPlane(t)}});Object.assign(te,{barycoordFromPoint:function(t,e,n,i,r){return te.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return te.getNormal(t,e,n,i)}});Object.assign(si.prototype,{extractAllPoints:function(t){return this.extractPoints(t)},extrude:function(t){return new vm(this,t)},makeGeometry:function(t){return new Mm(this,t)}});Object.assign(k.prototype,{fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return this.manhattanDistanceTo(t)},lengthManhattan:function(){return this.manhattanLength()}});Object.assign(w.prototype,{setEulerFromRotationMatrix:function(){},setEulerFromQuaternion:function(){},getPositionFromMatrix:function(t){return this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return this.setFromMatrixColumn(e,t)},applyProjection:function(t){return this.applyMatrix4(t)},fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return this.manhattanDistanceTo(t)},lengthManhattan:function(){return this.manhattanLength()}});Object.assign(Dt.prototype,{fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return this.manhattanLength()}});Object.assign(Te.prototype,{computeTangents:function(){},computeLineDistances:function(){},applyMatrix:function(t){return this.applyMatrix4(t)}});Object.assign(ft.prototype,{getChildByName:function(t){return this.getObjectByName(t)},renderDepth:function(){},translate:function(t,e){return this.translateOnAxis(e,t)},getWorldRotation:function(){},applyMatrix:function(t){return this.applyMatrix4(t)}});Object.defineProperties(ft.prototype,{eulerOrder:{get:function(){return this.rotation.order},set:function(t){this.rotation.order=t}},useQuaternion:{get:function(){},set:function(){}}});Object.assign(ne.prototype,{setDrawMode:function(){}});Object.defineProperties(ne.prototype,{drawMode:{get:function(){return Sh},set:function(){}}});Object.defineProperties(Zs.prototype,{objects:{get:function(){return this.levels}}});Object.defineProperty(Qs.prototype,"useVertexTexture",{get:function(){},set:function(){}});Js.prototype.initBones=function(){};Object.defineProperty(lt.prototype,"__arcLengthDivisions",{get:function(){return this.arcLengthDivisions},set:function(t){this.arcLengthDivisions=t}});Qt.prototype.setLens=function(t,e){e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Ht.prototype,{onlyShadow:{set:function(){}},shadowCameraFov:{set:function(t){this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){}},shadowBias:{set:function(t){this.shadow.bias=t}},shadowDarkness:{set:function(){}},shadowMapWidth:{set:function(t){this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){this.shadow.mapSize.height=t}}});Object.defineProperties(xt.prototype,{length:{get:function(){return this.array.length}},dynamic:{get:function(){return this.usage===ki},set:function(){this.setUsage(ki)}}});Object.assign(xt.prototype,{setDynamic:function(t){return this.setUsage(t===!0?ki:ns),this},copyIndicesArray:function(){},setArray:function(){}});Object.assign(Nt.prototype,{addIndex:function(t){this.setIndex(t)},addAttribute:function(t,e){return!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?this.setAttribute(t,new xt(arguments[1],arguments[2])):t==="index"?(this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){this.addGroup(t,e)},clearDrawCalls:function(){this.clearGroups()},computeTangents:function(){},computeOffsets:function(){},removeAttribute:function(t){return this.deleteAttribute(t)},applyMatrix:function(t){return this.applyMatrix4(t)}});Object.defineProperties(Nt.prototype,{drawcalls:{get:function(){return this.groups}},offsets:{get:function(){return this.groups}}});Object.defineProperties(Jr.prototype,{maxInstancedCount:{get:function(){return this.instanceCount},set:function(t){this.instanceCount=t}}});Object.defineProperties(jc.prototype,{linePrecision:{get:function(){return this.params.Line.threshold},set:function(t){this.params.Line.threshold=t}}});Object.defineProperties(ye.prototype,{dynamic:{get:function(){return this.usage===ki},set:function(t){this.setUsage(t)}}});Object.assign(ye.prototype,{setDynamic:function(t){return this.setUsage(t===!0?ki:ns),this},setArray:function(){}});Object.assign(zc.prototype,{getArrays:function(){},addShapeList:function(){},addShape:function(){}});Object.assign(Jp.prototype,{dispose:function(){}});Object.defineProperties(pt.prototype,{wrapAround:{get:function(){},set:function(){}},overdraw:{get:function(){},set:function(){}},wrapRGB:{get:function(){return new ct}},shading:{get:function(){},set:function(t){this.flatShading=t===pc}},stencilMask:{get:function(){return this.stencilFuncMask},set:function(t){this.stencilFuncMask=t}}});Object.defineProperties(In.prototype,{metal:{get:function(){return!1},set:function(){}}});Object.defineProperties(Pn.prototype,{transparency:{get:function(){return this.transmission},set:function(t){this.transmission=t}}});Object.defineProperties(le.prototype,{derivatives:{get:function(){return this.extensions.derivatives},set:function(t){this.extensions.derivatives=t}}});Object.assign(rs.prototype,{clearTarget:function(t,e,n,i){this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return this.getRenderTarget()},getMaxAnisotropy:function(){return this.capabilities.getMaxAnisotropy()},getPrecision:function(){return this.capabilities.precision},resetGLState:function(){return this.state.reset()},supportsFloatTextures:function(){return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return this.capabilities.vertexTextures},supportsInstancedArrays:function(){return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){this.setScissorTest(t)},initMaterial:function(){},addPrePlugin:function(){},addPostPlugin:function(){},updateShadowMap:function(){},setFaceCulling:function(){},allocTextureUnit:function(){},setTexture:function(){},setTexture2D:function(){},setTextureCube:function(){},getActiveMipMapLevel:function(){return this.getActiveMipmapLevel()}});Object.defineProperties(rs.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){this.shadowMap.type=t}},shadowMapCullFace:{get:function(){},set:function(){}},context:{get:function(){return this.getContext()}},vr:{get:function(){return this.xr}},gammaInput:{get:function(){return!1},set:function(){}},gammaOutput:{get:function(){return!1},set:function(t){this.outputEncoding=t===!0?xc:er}},toneMappingWhitePoint:{get:function(){return 1},set:function(){}}});Object.defineProperties(Dc.prototype,{cullFace:{get:function(){},set:function(){}},renderReverseSided:{get:function(){},set:function(){}},renderSingleSided:{get:function(){},set:function(){}}});Object.defineProperties(Le.prototype,{wrapS:{get:function(){return this.texture.wrapS},set:function(t){this.texture.wrapS=t}},wrapT:{get:function(){return this.texture.wrapT},set:function(t){this.texture.wrapT=t}},magFilter:{get:function(){return this.texture.magFilter},set:function(t){this.texture.magFilter=t}},minFilter:{get:function(){return this.texture.minFilter},set:function(t){this.texture.minFilter=t}},anisotropy:{get:function(){return this.texture.anisotropy},set:function(t){this.texture.anisotropy=t}},offset:{get:function(){return this.texture.offset},set:function(t){this.texture.offset=t}},repeat:{get:function(){return this.texture.repeat},set:function(t){this.texture.repeat=t}},format:{get:function(){return this.texture.format},set:function(t){this.texture.format=t}},type:{get:function(){return this.texture.type},set:function(t){this.texture.type=t}},generateMipmaps:{get:function(){return this.texture.generateMipmaps},set:function(t){this.texture.generateMipmaps=t}}});ai.prototype.updateCubeMap=function(t,e){return this.update(t,e)};ai.prototype.clear=function(t,e,n,i){return this.renderTarget.clear(t,e,n,i)};wn.crossOrigin=void 0;wn.loadTexture=function(t,e,n,i){const r=new lo;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};wn.loadTextureCube=function(t,e,n,i){const r=new co;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};wn.loadCompressedTexture=function(){};wn.loadCompressedTextureCube=function(){};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));export{Ja as $,Ur as A,xt as B,ct as C,Kr as D,Ie as E,Ye as F,ni as G,Ra as H,ve as I,ft as J,Et as K,Ot as L,Sn as M,Go as N,fo as O,Rn as P,$r as Q,Mn as R,Js as S,yi as T,og as U,k as V,Qs as W,mn as X,w as Y,gn as Z,Za as _,Um as a,Qa as a0,Pn as a1,Ln as a2,Wr as a3,sg as a4,Ki as a5,Yr as a6,$i as a7,$e as a8,ng as a9,ig as aa,cg as ab,de as ac,ci as ad,Ae as ae,bo as af,yc as ag,rg as ah,le as ai,co as aj,rs as ak,Jp as al,ag as am,$a as an,lc as ao,wh as ap,Xe as b,nc as c,lo as d,ye as e,es as f,Cl as g,Ho as h,ee as i,re as j,Us as k,zs as l,fe as m,pt as n,_e as o,se as p,Nt as q,ne as r,xc as s,Vr as t,li as u,Ba as v,za as w,Qt as x,_t as y,Gr as z};
//# sourceMappingURL=three-CIZmXf9C.js.map
