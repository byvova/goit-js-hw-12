import{i as a,a as g,S as L}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const m of e.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const h="41828858-bc9e123a5e007e4f9a3f52776",v=document.querySelector(".container"),w=document.querySelector("input"),u=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector(".load-more");let i=1;const p=40;let d="",c=[],f=0;const b={captionsData:"alt",captionDelay:250};let $;v.addEventListener("submit",async o=>{o.preventDefault(),c=[],i=1,u.innerHTML="";try{if(d=encodeURIComponent(w.value.trim()),!d){a.error({title:"Invalid Input",message:"Please enter a search term."});return}y.style.display="block";const s=`https://pixabay.com/api/?key=${h}&q=${d}&page=${i}&per_page=${p}`,l=await g.get(s);if(l.status!==200)throw new Error("Failed to fetch images. Please try again later.");console.log(l);const r=l.data.hits;if(console.log(r),c=[...r],y.style.display="none",u.innerHTML="",r.length===0){a.error({title:"No Results",message:"No images found. Please try a different search term."});return}u.innerHTML=r.reduce((t,e)=>t+`
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
            </li>`,""),$=new L(".gallery a",b),r.length>=p?n.style.display="block":n.style.display="none"}catch(s){console.error("Error fetching data:",s),s instanceof TypeError?a.error({title:"Network Error",message:"Please check your internet connection and try again."}):a.error({title:"Error",message:s.message})}});n.addEventListener("click",async()=>{i++;try{y.style.display="block",(isFirstLoad||d!==encodeURIComponent(w.value.trim()))&&(c=[],i=1,isFirstLoad=!1);const o=`https://pixabay.com/api/?key=${h}&q=${d}&page=${i}&per_page=${p}`,s=await g.get(o);if(s.status!==200)throw new Error("Failed to fetch more images. Please try again later.");const l=s.data.hits;if(y.style.display="none",l.length===0){n.style.display="none",a.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."});return}c=[...c,...l],u.innerHTML=c.reduce((t,e)=>t+`
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
            </li>`,"");const r=document.querySelector(".gallery-item");if(r){const{height:t}=r.getBoundingClientRect();f=t}k(0,2*f),$.refresh(),i*p>=s.data.totalHits?(n.style.display="none",a.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."})):n.style.display="block"}catch(o){console.error("Error fetching additional data:",o),a.error({title:"Error",message:o.message})}});function k(o,s){window.scrollBy({top:s,left:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
