(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const p=o=>{const i=[];let t="",s=!1,e=0;for(;e<o.length;){const n=o[e];n==='"'?s&&o[e+1]==='"'?(t+='"',e++):s=!s:n==="	"&&!s?(i.push(t.trim()),t=""):t+=n,e++}return t&&i.push(t.trim()),i};document.querySelector("#app").innerHTML=`
<div class="column left">
    <textarea id="csv-input" placeholder="Paste your CSV here...">
Kampenhout Witlooft - Commotie + Improfiel, 02/02/2025, "11,12,13,14,15,16u (telkens 30min)", Kampenhout, De Krop, NL, In het kader van Kampenhout witlooft geven Commotie en Improfiel het beste van zichzelf., https://www.kampenhout.be/witlooft
On The Spot Voorronde Vlaams-Brabant, 19/04/2025, 20u, De Wildeman, Herent, NL, Deze voorronde van On the spot mag je niet missen!, https://be.ticketgang.eu/orgFrameSaleNew.php?org=421437#</textarea>
</div>
<div class="column right">
    <div id="html-output"></div>
</div>
`;const l=document.getElementById("csv-input"),r=document.getElementById("html-output"),c=()=>{const i=l.value.split(`
`).map(t=>p(t));r.innerHTML="",i.forEach(t=>{if(t.length>0){const s=document.createElement("div");s.className="event",s.innerHTML=`
    <div class="event-card">
        <h3 class="event-title">${t[0]}</h3>
        <div class="event-details">
            <p class="event-time">📅 ${t[1]} ⏰${t[2]}</p>
            <p>
                <span class="event-location">📍${t[3]} - ${t[4]}</span>
                <span>&nbsp;</span>
                <span class="event-language">🌐 ${t[5]}</span>
            </p>
            <p class="event-about">${t[6]}</p>
            <p class="event-link">
                <a href="${t[7]}" target="_blank" class="">Tickets en Info</a>
            </p>
        </div>
        <div class="spacer">&nbsp;</div>
    </div>
`,r.appendChild(s)}}),r.innerHTML=r.innerHTML.toString()};l.addEventListener("input",c);c();
