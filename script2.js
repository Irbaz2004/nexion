// Header Scroll

let nav = document.querySelector(".navbar");
let container= document.querySelector('.container-fluid');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
        container.style.marginTop='0%'
        
    }else{
        nav.classList.remove("header-scrolled");
        container.style.marginTop='0%'

    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('click', function () {
            const detailsPopup = service.querySelector('.details-popup');
            if (detailsPopup.classList.contains('hidden')) {
                detailsPopup.classList.remove('hidden');
            } else {
                detailsPopup.classList.add('hidden');
            }
        });
    });
});



    document.querySelector('.left-button').addEventListener('click', () => {
        document.querySelector('.team-cards').scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    document.querySelector('.right-button').addEventListener('click', () => {
        document.querySelector('.team-cards').scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
