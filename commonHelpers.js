import{S as v,i as n,a as h}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const w="41828858-bc9e123a5e007e4f9a3f52776",b=document.querySelector(".container"),$=document.querySelector("input"),m=document.querySelector(".gallery"),y=document.querySelector(".loader"),i=document.querySelector(".load-more");let l=1;const c=40;let d="",u=[],f=!0,g=0;const L={captionsData:"alt",captionDelay:250};let k=new v(".gallery a",L);b.addEventListener("submit",async r=>{r.preventDefault();try{if(l=1,d=encodeURIComponent($.value.trim()),!d){n.error({title:"Invalid Input",message:"Please enter a search term."});return}y.style.display="block";const s=`https://pixabay.com/api/?key=${w}&q=${d}&page=${l}&per_page=${c}`,a=await h.get(s);if(a.status!==200)throw new Error("Failed to fetch images. Please try again later.");const o=a.data.hits;if(y.style.display="none",m.innerHTML="",o.length===0){n.error({title:"No Results",message:"No images found. Please try a different search term."});return}m.innerHTML=o.reduce((t,e)=>t+`
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
            </li>`,""),o.length>=c?i.style.display="block":i.style.display="none"}catch(s){console.error("Error fetching data:",s),s instanceof TypeError?n.error({title:"Network Error",message:"Please check your internet connection and try again."}):n.error({title:"Error",message:s.message})}});i.addEventListener("click",async()=>{l++;try{y.style.display="block",(f||d!==encodeURIComponent($.value.trim()))&&(u=[],l=1,f=!1);const r=`https://pixabay.com/api/?key=${w}&q=${d}&page=${l}&per_page=${c}`,s=await h.get(r);if(s.status!==200)throw new Error("Failed to fetch more images. Please try again later.");const a=s.data.hits;if(y.style.display="none",a.length===0){i.style.display="none",n.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."});return}u=[...u,...a],m.innerHTML=u.slice(0,l*c).reduce((t,e)=>t+`
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
            </li>`,"");const o=document.querySelector(".gallery-item");if(o){const{height:t}=o.getBoundingClientRect();g=t}E(0,2*g),k.refresh(),l++,l*c>=s.data.totalHits?(i.style.display="none",n.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."})):i.style.display="block"}catch(r){console.error("Error fetching additional data:",r),n.error({title:"Error",message:r.message})}});function E(r,s){window.scrollBy({top:s,left:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
