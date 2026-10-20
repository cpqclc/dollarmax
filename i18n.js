(function(){
var es={
skip:"Ir a las tiendas",navCarry:"Productos",navStores:"Ubicaciones",
eyebrow:"La tienda de descuento de tu barrio en Roxbury · Desde 2015",
h1:'Lo esencial de cada día. <span>Gran valor.</span> A la vuelta de la esquina.',
lead:"Desde productos de limpieza hasta snacks, artículos de fiesta y útiles escolares: visita Dollar Max y haz que tu dinero rinda más. Dos tiendas en Roxbury.",
ctaFind:"Encuentra tu tienda",ctaTik:"Mira lo nuevo en TikTok",
chip1:"2 tiendas en Roxbury",chip2:"Abierto los 7 días",chip3:"Se habla español",
carryH:"Lo que encontrarás",carrySub:"La variedad cambia según la tienda y la temporada. ¡Ven a ver lo nuevo!",
c1:"Hogar",c1d:"Cocina, organización, baño y básicos para la casa.",
c2:"Limpieza",c2d:"Todo para mantener tu casa limpia y fresca.",
c3:"Snacks y bebidas",c3d:"Antojitos para la casa, la escuela o el trabajo.",
c4:"Artículos de fiesta",c4d:"Globos, decoraciones, platos y mucho más.",
c5:"Temporada",c5d:"Decoración para cada fiesta y artículos de temporada todo el año.",
c6:"Útiles escolares",c6d:"Cuadernos, bolígrafos, carpetas y lo básico para el regreso a clases.",
c7:"Belleza y cuidado personal",c7d:"Cuidado del cabello, de la piel y artículos personales.",
storesH:"Visítanos en Roxbury",since2015:"Desde 2015",since2021:"Desde 2021",
monSat:"Lun – Sáb",sun:"Domingo",everyday:"Todos los días",call:"Llamar",dir:"Cómo llegar",
hoursNote:"El horario puede variar en días festivos.",
tikH:"Síguenos en TikTok",tikP:"Productos nuevos, ofertas de temporada y lo que hay en nuestros estantes esta semana.",
footTag:"Tiendas de descuento al servicio de Roxbury, Boston."
};
var nodes=document.querySelectorAll("[data-i18n]"),en={};
nodes.forEach(function(n){en[n.dataset.i18n]=n.innerHTML});
var btn=document.getElementById("lang");
function set(l){
  var d=l==="es"?es:en;
  nodes.forEach(function(n){var k=n.dataset.i18n;if(d[k])n.innerHTML=d[k]});
  document.documentElement.lang=l;
  btn.textContent=l==="es"?"English":"Español";
  btn.setAttribute("aria-label",l==="es"?"Switch to English":"Cambiar a español");
  try{localStorage.setItem("dm-lang",l)}catch(e){}
}
var saved=null;try{saved=localStorage.getItem("dm-lang")}catch(e){}
var q=new URLSearchParams(location.search).get("lang");
var start=q||saved||((navigator.language||"").slice(0,2)==="es"?"es":"en");
if(start==="es")set("es");
btn.addEventListener("click",function(){set(document.documentElement.lang==="es"?"en":"es")});
document.getElementById("yr").textContent=new Date().getFullYear();
})();
