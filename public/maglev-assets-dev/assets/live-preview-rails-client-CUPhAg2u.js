import{d as v,C as w}from"./index-4FKi7J5z.js";import{a as S}from"./axios-CCb-kr4I.js";function f(t){var e;e=t.getElementsByTagName("script"),n();function n(){for(var o,i;e.length;)if(o=e[0],o.parentNode.removeChild(o),i=document.createElement("script"),o.src?(i.onerror=a,i.onload=c,i.onreadystatechange=s,i.src=o.src):i.text=o.text,document.documentElement.appendChild(i),o.src)return;i=void 0;function c(){this===i&&n()}function a(){this===i&&n()}function s(){this===i&&this.readyState==="complete"&&n()}}}const u=window.parent.document,r=window.document,y=window.location!==window.parent.location?{[u.querySelector("meta[name='csrf-param']").getAttribute("content")]:u.querySelector("meta[name='csrf-token']").getAttribute("content")}:{},E=()=>{window.addEventListener("maglev:section:add",h),window.addEventListener("maglev:section:move",b),window.addEventListener("maglev:section:update",q),window.addEventListener("maglev:section:remove",k),window.addEventListener("maglev:block:add",d),window.addEventListener("maglev:block:move",d),window.addEventListener("maglev:block:update",N),window.addEventListener("maglev:block:remove",d),window.addEventListener("maglev:style:update",x)},L={start:E},h=t=>{const{content:e,section:n,insertAt:o}=t.detail;l(e,n,o)},b=t=>{const{sectionId:e,targetSectionId:n,direction:o}=t.detail,i=r.querySelector(`[data-maglev-section-id='${e}']`),c=r.querySelector(`[data-maglev-section-id='${n}']`);o==="up"?c.parentNode.insertBefore(i,c):c.parentNode.insertBefore(i,c.nextSibling),i.scrollIntoView(!0)},q=t=>{const{content:e,section:n,change:o}=t.detail;p(e,n,n,o)},k=t=>{const{sectionId:e}=t.detail,n=`[data-maglev-section-id='${e}']`;r.querySelector(n).remove()},N=t=>{const{content:e,section:n,sectionBlock:o,change:i}=t.detail;p(e,n,o,i)},d=t=>{const{content:e,section:n}=t.detail;l(e,n)},x=async t=>{const{content:e,style:n}=t.detail,o=await g({pageSections:JSON.stringify(e.pageSections),style:JSON.stringify(n)}),i="#maglev-style",c=o.querySelector(i);let a=r.querySelector(i);c&&a.replaceWith(c)},p=(t,e,n,o)=>{O(n,o)||l(t,e)},O=(t,e)=>{switch(e.settingType){case"text":return m(t,e);case"link":if(e.settingOptions.withText&&e.value)return m(t,{...e,value:e.value.text,settingId:`${e.settingId}.text`});break}return!1},m=(t,e)=>{const n=`[data-maglev-id='${t.id}.${e.settingId}']`,o=r.querySelectorAll(n);return o.forEach(i=>i.innerHTML=e.value),o.length>0},I=async(t,e,n)=>{const o=await g({pageSections:JSON.stringify([t.pageSections.find(s=>s.id==e.id)])}),i=`[data-maglev-section-id='${e.id}']`,c=o.querySelector(i);let a=r.querySelector(i);if(!c)throw new Error(`Maglev section ${e.id} not generated by the server`);a?a.replaceWith(c):($(c,n),a=r.querySelector(i)),f(a),a.scrollIntoView(!0)},l=v(I,300),$=(t,e)=>{switch(e){case"top":{r.querySelector("[data-maglev-dropzone]").prepend(t);break}case"bottom":case void 0:case null:case"":{r.querySelector("[data-maglev-dropzone]").appendChild(t);break}default:{const n=`[data-maglev-section-id='${e}']`,o=r.querySelector(n);o.parentNode.insertBefore(t,o.nextSibling)}}},g=async t=>{const{data:e}=await S.post(r.location.href,{...t,...y});return new DOMParser().parseFromString(e,"text/html")};document.addEventListener("DOMContentLoaded",()=>{console.log("[Rails] Maglev Live Preview 🚀"),w.start()&&L.start()});
