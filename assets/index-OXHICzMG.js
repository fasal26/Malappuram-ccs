(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();let i=document.getElementById("dlg"),d=document.getElementById("burger"),a=document.getElementById("sbmt-btn");const m=document.querySelectorAll(".bgr-home"),u=document.querySelectorAll(".bgr-abt"),f=document.querySelectorAll(".bgr-contact"),y=document.querySelectorAll(".bgr-svc");m.forEach(e=>{e.addEventListener("click",()=>{c("app")})});u.forEach(e=>{console.log(e,"bgr"),e.addEventListener("click",()=>{c("about-us")})});f.forEach(e=>{e.addEventListener("click",()=>{c("form")})});y.forEach(e=>{e.addEventListener("click",()=>{c("services")})});document.addEventListener("click",e=>{e.target==d&&(i.style.display="block",document.body.style.overflow="hidden"),e.target.classList.contains("sa-dialog")&&(i.style.display="none",document.body.style.overflow="auto")});function c(e){e&&(i.style.display="none",document.body.style.overflow="auto",document.getElementById(e).scrollIntoView({behavior:"smooth"}))}a.addEventListener("click",()=>{let e=document.getElementById("firstName").value,r=document.getElementById("LastName").value,l=document.getElementById("userPh").value,n=document.getElementById("userMsg").value,t=`
    First Name: ${e}
    Last Name: ${r}
    Phone Number: ${l}

    Message:
    ${n}
  `,o=encodeURIComponent(t);screen.width>1024?window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=malappuramcancercaresociety@gmail.com&su=Contact&body=${o}`):window.open(`mailto:malappuramcancercaresociety@gmail.com?subject=Contact&body=${o}`)});
