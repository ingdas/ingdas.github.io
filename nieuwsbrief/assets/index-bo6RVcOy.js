(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const p=r=>{const o=[];let t="",s=!1,e=0;for(;e<r.length;){const n=r[e];n==='"'?s&&r[e+1]==='"'?(t+='"',e++):s=!s:n==="	"&&!s?(o.push(t.trim()),t=""):t+=n,e++}return t&&o.push(t.trim()),o};document.querySelector("#app").innerHTML=`
<div class="column left">
    <textarea id="csv-input" placeholder="Paste your CSV here...">
Kampenhout Witlooft - Commotie + Improfiel	02/02/2025	11,12,13,14,15,16u (telkens 30min)	De Krop	Kampenhout	NL	In het kader van Kampenhout witlooft geven Commotie en Improfiel het beste van zichzelf.	https://www.kampenhout.be/witlooft
On The Spot Voorronde Vlaams-Brabant	19/04/2025	20u	De Wildeman	Herent	NL	Deze voorronde van On the spot mag je niet missen!	https://be.ticketgang.eu/orgFrameSaleNew.php?org=421437#
Ochtendgloren	20/04/2025	6u	Ergens	Nergens	Alien	Onvoorstelbaar	https://google.be</textarea>
</div>
<div class="column right">
    <div id="html-output"></div>
</div>
`;const a=document.getElementById("csv-input"),i=document.getElementById("html-output"),c=()=>{const o=a.value.split(`
`).map(t=>p(t));i.innerHTML="",o.forEach(t=>{if(t.length>0){const s=document.createElement("div");s.className="event",s.innerHTML=`
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
`,i.appendChild(s)}}),i.innerHTML=i.innerHTML.toString()};a.addEventListener("input",c);c();
