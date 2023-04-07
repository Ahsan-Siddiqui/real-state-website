// STICKY NAVBAR
window.addEventListener('scroll',function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY > 0)
})
// HEADER JS
window.addEventListener('scroll',function(){
    var bg = document.querySelector("header");
    bg.style.backgroundSize = 160 - + window.pageYOffset/12 + '%';
})

// ABOUT US JS
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// SLIDER JS
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});
