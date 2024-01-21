import{i as n,a as w,S as v}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const y of e.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const $="41828858-bc9e123a5e007e4f9a3f52776",b=document.querySelector(".container"),m=document.querySelector("input"),f=document.querySelector(".gallery"),p=document.querySelector(".loader"),i=document.querySelector(".load-more"),L={captionsData:"alt",captionDelay:250};b.addEventListener("submit",async o=>{o.preventDefault();try{if(c=encodeURIComponent(m.value.trim()),!c){n.error({title:"Invalid Input",message:"Please enter a search term."});return}p.style.display="block";const s=`https://pixabay.com/api/?key=${$}&q=${c}&page=${a}&per_page=${d}`,l=await w.get(s);if(l.status!==200)throw new Error("Failed to fetch images. Please try again later.");const r=l.data.hits;if(p.style.display="none",f.innerHTML="",r.length===0){n.error({title:"No Results",message:"No images found. Please try a different search term."});return}f.innerHTML=r.reduce((t,e)=>t+`
            <li class="gallery-item">
                <a class="gallery-link" href="${e.webformatURL}">
                    <img class="gallery-image" src="${e.previewURL}" alt="${e.tags}" />
                </a>
                <div class="content">
                    <h4 class="titles">Likes</h4>
                    <h4 class="titles">Views</h4>
                    <h4 class="titles">Comments</h4>
                    <h4 class="titles">Downloads</h4>
                    <p class="text">${e.likes}</p>
                    <p class="text">${e.views}</p>
                    <p class="text">${e.comments}</p>
                    <p class="text">${e.downloads}</p>
                </div>
            </li>`,""),r.length>=d?i.style.display="block":i.style.display="none"}catch(s){console.error("Error fetching data:",s),s instanceof TypeError?n.error({title:"Network Error",message:"Please check your internet connection and try again."}):n.error({title:"Error",message:s.message})}});let a=1;const d=40;let c="",u=[],g=!0,h=0;i.addEventListener("click",async()=>{try{p.style.display="block",(g||c!==encodeURIComponent(m.value.trim()))&&(u=[],a=1,g=!1),c=encodeURIComponent(m.value.trim());const o=`https://pixabay.com/api/?key=${$}&q=${c}&page=${a}&per_page=${d}`,s=await w.get(o);if(s.status!==200)throw new Error("Failed to fetch more images. Please try again later.");const l=s.data.hits;if(p.style.display="none",l.length===0){i.style.display="none",n.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."});return}u=[...u,...l],f.innerHTML=u.slice(0,a*d).reduce((t,e)=>t+`
            <li class="gallery-item">
                <a class="gallery-link" href="${e.webformatURL}">
                    <img class="gallery-image" src="${e.previewURL}" alt="${e.tags}" />
                </a>
                <div class="content">
                    <h4 class="titles">Likes</h4>
                    <h4 class="titles">Views</h4>
                    <h4 class="titles">Comments</h4>
                    <h4 class="titles">Downloads</h4>
                    <p class="text">${e.likes}</p>
                    <p class="text">${e.views}</p>
                    <p class="text">${e.comments}</p>
                    <p class="text">${e.downloads}</p>
                </div>
            </li>`,"");const r=document.querySelector(".gallery-item");if(r){const{height:t}=r.getBoundingClientRect();h=t}k(0,2*h),x.refresh(),a++,a*d>=s.data.totalHits?(i.style.display="none",n.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."})):i.style.display="block"}catch(o){console.error("Помилка при отриманні додаткових даних:",o)}});function k(o,s){window.scrollBy({top:s,left:o,behavior:"smooth"})}const x=new v(".gallery a",L);
//# sourceMappingURL=commonHelpers.js.map
