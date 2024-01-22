import{i as a,a as h,S as v}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const m of e.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const w="41828858-bc9e123a5e007e4f9a3f52776",b=document.querySelector(".container"),$=document.querySelector("input"),d=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector(".load-more");let i=1;const p=40;let u="",c=[],f=!0,g=0;const k={captionsData:"alt",captionDelay:250};let L;b.addEventListener("submit",async o=>{o.preventDefault(),c=[],i=1,d.innerHTML="";try{if(u=encodeURIComponent($.value.trim()),!u){a.error({title:"Invalid Input",message:"Please enter a search term."});return}y.style.display="block";const s=`https://pixabay.com/api/?key=${w}&q=${u}&page=${i}&per_page=${p}`,l=await h.get(s);if(l.status!==200)throw new Error("Failed to fetch images. Please try again later.");const r=l.data.hits;if(c=[...r],y.style.display="none",d.innerHTML="",r.length===0){a.error({title:"No Results",message:"No images found. Please try a different search term."});return}d.innerHTML=r.reduce((t,e)=>t+`
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
            </li>`,""),L=new v(".gallery a",k),r.length>=p?n.style.display="block":n.style.display="none"}catch(s){console.error("Error fetching data:",s),s instanceof TypeError?a.error({title:"Network Error",message:"Please check your internet connection and try again."}):a.error({title:"Error",message:s.message})}});n.addEventListener("click",async()=>{i++;try{y.style.display="block",(f||u!==encodeURIComponent($.value.trim()))&&(c=[],i=1,f=!1);const o=`https://pixabay.com/api/?key=${w}&q=${u}&page=${i}&per_page=${p}`,s=await h.get(o);if(s.status!==200)throw new Error("Failed to fetch more images. Please try again later.");const l=s.data.hits;if(y.style.display="none",l.length===0){n.style.display="none",a.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."});return}c=[...c,...l],d.innerHTML=c.reduce((t,e)=>t+`
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
            </li>`,"")+d.innerHTML;const r=document.querySelector(".gallery-item");if(r){const{height:t}=r.getBoundingClientRect();g=t}E(0,2*g),L.refresh(),i*p>=s.data.totalHits?(n.style.display="none",a.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."})):n.style.display="block"}catch(o){console.error("Error fetching additional data:",o),a.error({title:"Error",message:o.message})}});function E(o,s){window.scrollBy({top:s,left:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
