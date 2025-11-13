const menuopenbutton=document.querySelector("#open-button");
menuopenbutton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});

const menuclosebutton=document.querySelector("#close-button");
menuclosebutton.addEventListener("click",()=>menuopenbutton.click());
;

const navlinks=document.querySelectorAll(".nav-link");
navlinks.forEach(link=>{
    link.addEventListener("click",()=> menuopenbutton.click())
})


const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
     clickable:true,
     dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }

});