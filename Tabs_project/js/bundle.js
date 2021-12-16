(()=>{"use strict";const t=()=>{class t{constructor(t,e,s,n,a,o,...c){this.src=t,this.alt=e,this.subtitle=s,this.descr=n,this.price=a,this.classes=c,this.parent=document.querySelector(o),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price*=this.transfer}render(){const t=document.createElement("div");this.classes.length?this.classes.forEach((e=>t.classList.add(e))):(this.element="menu__item",t.classList.add(this.element)),t.innerHTML=`\n\t\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t\t<h3 class="menu__item-subtitle">${this.subtitle}</h3>\n\t\t\t\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t `,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status ${e.status}`);return await e.json()})("http://localhost:3333/menu").then((e=>{e.forEach((({img:e,altimg:s,title:n,descr:a,price:o})=>{new t(e,s,n,a,o,".menu .container").render()}))}))},e=(t,e)=>{const s=document.querySelector(t);s.classList.add("show"),s.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearTimeout(e)},s=t=>{const e=document.querySelector(t);e.classList.remove("show"),e.classList.add("hide"),document.body.style.overflow=""};let n;const a=(t,a,o,c)=>{const r=document.querySelectorAll(a),i="img/form/spinner.svg",l="Спасибо! Скоро мы с вами свяжемся",d="Что-то пошло не так.....",u=a=>{const r=document.querySelector(o);r.classList.add("hide"),e(t,c);const i=document.createElement("div");i.classList.add(o.slice(1)),i.dataset.thank="",i.innerHTML=`\n\t\t\t\t<div class="modal__content">\n\t\t\t\t\t<div data-close class="modal__close">&times;</div>\n\t\t\t\t\t<div class="modal__title">${a}</div>\n\t\t\t\t</div>\n\t\t\t\t`,document.querySelector(".modal").append(i),n=setTimeout((()=>{i.remove(),r.classList.add("show"),r.classList.remove("hide"),s(t)}),3e3)};r.forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const s=document.createElement("img");s.src=i,e.querySelector("button").setAttribute("disabled",""),s.style.cssText="\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t",e.insertAdjacentElement("afterend",s);const n=new FormData(e);(async(t,e)=>{const s=await fetch("http://localhost:3333/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await s.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((t=>{u(l),s.remove()})).catch((()=>{u(d)})).finally((()=>{e.querySelector("button").removeAttribute("disabled"),e.reset()}))}))}))};window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),5e3);(()=>{const t=document.querySelector(".calculating__result span"),e=localStorage.getItem("userParams")?JSON.parse(localStorage.getItem("userParams")):{sex:"female",ratio:"1.375",height:null,weight:null,age:null},s=(t,s)=>{document.querySelectorAll(`${t} div`).forEach((t=>{t.classList.remove(s),t.getAttribute("data-sex")!==e.sex&&+t.getAttribute("data-ratio")!=+e.ratio||t.classList.add(s)}))};s("#gender","calculating__choose-item_active"),s(".calculating__choose_big","calculating__choose-item_active");const n=e=>{for(const s in e)if(!e[s])return void(t.textContent="____");const s=t=>Math.round((t[0]+t[1]*e.weight+t[2]*e.height-t[3]*e.age)*e.ratio);"female"===e.sex&&(t.textContent=s([88.36,13.4,4.8,5.7])),"male"===e.sex&&(t.textContent=s([447.6,9.2,3.1,4.3]))};n(e);const a=(t,s)=>{document.querySelector(t).addEventListener("click",(a=>{if(a.target.matches(["[data-sex]","[data-ratio]"])){const o=(t,e)=>a.target.hasAttribute(e)?a.target.getAttribute(e):t;e.sex=o(e.sex,"data-sex"),e.ratio=+o(e.ratio,"data-ratio"),document.querySelectorAll(`${t} div`).forEach((t=>t.classList.remove(s))),a.target.classList.add(s),localStorage.setItem("userParams",JSON.stringify(e)),n(e)}}))},o=t=>{const s=document.querySelector(t),a=t=>{const e=t.getBoundingClientRect();return{top:e.top,left:e.left}};s.addEventListener("input",(()=>{if(s.value.match(/\D/g))s.value=(s.value.match(/\d/g)||[]).join(""),(t=>{if(!t.nextElementSibling||!t.nextElementSibling.classList.contains("input_alert")){const e=document.createElement("div");e.className="input_alert",e.textContent="!Ошибка! Можно вводить только цифры!";const n=a(s),o=a(document.querySelector(".calculating__choose_medium"));e.style.left=n.left-o.left+"px",e.style.top=o.top-n.top-40+"px",t.style.border="2px solid rgb(187, 64, 64)",t.after(e)}})(s);else switch(s.nextElementSibling&&s.nextElementSibling.classList.contains("input_alert")&&(s.nextElementSibling.remove(),s.style.border=""),s.getAttribute("id")){case"height":e.height=+s.value;break;case"weight":e.weight=+s.value;break;case"age":e.age=+s.value}n(e)}))};a("#gender","calculating__choose-item_active"),a(".calculating__choose_big","calculating__choose-item_active"),o("#height"),o("#weight"),o("#age")})(),t(),a(".modal","form",".modal__dialog",o),((t,a,o,c)=>{const r=document.querySelectorAll(a),i=document.querySelector(t),l=()=>{window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(t,c),window.removeEventListener("scroll",l))},d=(t,e)=>{t&&clearTimeout(t);const s=document.querySelector("[data-thank]");s&&s.remove();const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide")};r.forEach((s=>{s.addEventListener("click",(()=>e(t,c)))})),i.addEventListener("click",(e=>{e.target!==i&&""!=e.target.getAttribute("data-close")||(d(n,o),s(t))})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&i.classList.contains("show")&&(d(n,o),s(t))})),window.addEventListener("scroll",l)})(".modal","[data-modal]",".modal__dialog",o),(()=>{const t=document.querySelector(".offer__slider-wrapper"),e=t.querySelector(".offer__slider-inner"),s=window.getComputedStyle(t).width,n=t.querySelectorAll(".offer__slide"),a=document.querySelector(".offer__slider-prev"),o=document.querySelector(".offer__slider-next"),c=document.querySelector("#total"),r=document.querySelector("#current"),i=[],l=()=>{n.length<10?r.textContent=`0${u}`:r.textContent=u},d=()=>{i.forEach((t=>{t.classList.remove("_active")})),i[u-1].classList.add("_active")};let u=1,m=0;n.length<10?(c.textContent=`0${n.length}`,r.textContent=`0${u}`):(c.textContent=n.length,r.textContent=u),e.style.width=100*n.length+"%",e.style.display="flex",e.style.transition="0.5s all",t.style.overflow="hidden",n.forEach((t=>t.style.width=s));const h=document.createElement("ol");h.classList.add("carousel-indicators"),document.querySelector(".offer__slider").append(h);for(let t=0;t<n.length;t++){const e=document.createElement("li");e.classList.add("dot"),e.setAttribute("data-slides",t),0==t&&e.classList.add("_active"),h.append(e),i.push(e)}function g(t){return+t.replace(/\D/g,"")}o.addEventListener("click",(()=>{m==g(s)*(n.length-1)?m=0:m+=g(s),e.style.transform=`translateX(-${m}px`,u==n.length?u=1:u++,l(),d()})),a.addEventListener("click",(()=>{0==m?m=g(s)*(n.length-1):m-=g(s),e.style.transform=`translateX(-${m}px`,1==u?u=n.length:u--,l(),d()})),h.addEventListener("click",(t=>{if(t.target&&t.target.hasAttribute("data-slides")){const n=+t.target.getAttribute("data-slides");u=n+1,m=n*g(s),e.style.transform=`translateX(-${m}px`,l(),d()}}))})(),(()=>{const t=document.querySelectorAll(".tabheader__item"),e=document.querySelectorAll(".tabcontent"),s=document.querySelector(".tabheader__items");function n(){e.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),t.forEach((t=>{t.classList.remove("tabheader__item_active")}))}function a(s=0){e[s].classList.add("show","fade"),e[s].classList.remove("hide"),t[s].classList.add("tabheader__item_active")}n(),a(),s.addEventListener("click",(e=>{const s=e.target;s&&s.classList.contains("tabheader__item")&&t.forEach(((t,e)=>{s==t&&(n(),a(e))}))}))})(),function(t,e){const s=new Date("2021-12-31"),n=document.querySelector(".promotion__descr"),a=("0"+s.getDate()).slice(-2),o={0:"января",1:"февраля",2:"марта",3:"апреля",4:"мая",5:"июня",6:"июля",7:"августа",8:"сентября",9:"октября",10:"ноября",11:"декабря"}[s.getMonth()],c=document.createTextNode((s-new Date>0?"Акция закончится ":"Акция закончилась ")+`${a} ${o} в 00: 00`);n.lastChild.remove(),n.append(c)}(),function(t,e){const s=document.querySelector(".timer"),n=s.querySelector("#days"),a=s.querySelector("#hours"),o=s.querySelector("#minutes"),c=s.querySelector("#seconds"),r=setInterval(i,1e3);function i(){const t=function(t){const e=Date.parse("2021-12-31")-Date.parse(new Date);return e>0?{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}:{total:e,days:0,hours:0,minutes:0,seconds:0}}();n.innerHTML=("0"+t.days).slice(-2),a.innerHTML=("0"+t.hours).slice(-2),o.innerHTML=("0"+t.minutes).slice(-2),c.innerHTML=("0"+t.seconds).slice(-2),t.total<=0&&clearInterval(r)}i()}()}))})();
//# sourceMappingURL=bundle.js.map