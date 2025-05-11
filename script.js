let hearticon = document.querySelector(".hearticon");
let image = document.querySelector(".img");
let miniheart = document.querySelector(".minihearticon");

image.addEventListener("dblclick", ()=>{
   hearticon.style.transform = "translate(-50%, -50%) scale(1)";
   hearticon.style.opacity = 0.8;
   miniheart.style.color = "red";

   setTimeout(function () {
    hearticon.style.transform = "translate(-50%, -50%) scale(0)";
    hearticon.style.opacity = 0;
   }, 1000)
   
});