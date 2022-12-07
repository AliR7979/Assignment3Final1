const dropdown = document.querySelector(".dropdown-menu");
const navMenu = document.querySelector(".navbar .menu ul.nav-menu");

dropdown.addEventListener("click", function() {
  this.classList.toggle("rotateUp");
  navMenu.classList.toggle("toggle-menu");
});

// Scroll reveal
window.sr = ScrollReveal();
sr.reveal("img", {
  duration: 800,
  origin: "bottom",
  mobile: true
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    
    
     var t = document.getElementById("Dark-light");
    t.classList.toggle("dark");
    t.innerText = "Change Mode"
 
 }

 $(function(){

    //Scroll event
    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    
    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });
  
  });
  