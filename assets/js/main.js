// ACTIVE NAV -> SECTIONS
(function() {
    'use strict';
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };

    click();
})();

// SCROOL SUAVE
const links = document.querySelectorAll("header ul a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function click(){
  document.getElementById("nav_btn").addEventListener("click", function() {
    if(document.querySelector(".nav_open")){
      document.getElementById("nav").classList.remove("nav_open");
      document.getElementById("nav").classList.add("nav");
    }else{
      document.getElementById("nav").classList.remove("nav");
      document.getElementById("nav").classList.add("nav_open");
    }
  });
}