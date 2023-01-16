let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	
};




var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};





const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 1 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}





const carousel2 = document.querySelector(".carousel2"),
igen = carousel2.querySelectorAll("img")[0],
nyilak = document.querySelectorAll(".wrapper2 nav");

let ishuz = false, huz2ging = false, kövi, balra, különbség;

const Ikonok = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth; // getting max scrollable width
    nyilak[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    nyilak[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
}

nyilak.forEach(icon => {
    icon.addEventListener("click", () => {
        let igenWidth = igen.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel2.scrollLeft += icon.id == "left" ? -igenWidth : igenWidth;
        setTimeout(() => Ikonok(), 60); // calling Ikonok after 60ms
    });
});

const automata = () => {
    // if there is no image left to scroll then return from here
    if(carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;

    különbség = Math.abs(különbség); // making különbség value to positive
    let igenWidth = igen.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = igenWidth - különbség;

    if(carousel2.scrollLeft > balra) { // if user is scrolling to the right
        return carousel2.scrollLeft += különbség > igenWidth / 3 ? valDifference : -különbség;
    }
    // if user is scrolling to the left
    carousel2.scrollLeft -= különbség > igenWidth / 3 ? valDifference : -különbség;
}



const carousel3 = document.querySelector(".carousel3"),
igen33 = carousel3.querySelectorAll("img")[0],
nyilak3 = document.querySelectorAll(".wrapper3 section");

let ishuz33 = false, huz32ging = false, kövi33, balra33, különbésg33;

const ikonok3 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel3.scrollWidth - carousel3.clientWidth; // getting max scrollable width
    nyilak[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
    nyilak[1].style.display = carousel3.scrollLeft == scrollWidth ? "none" : "block";
}

nyilak3.forEach(icon => {
    icon.addEventListener("click", () => {
        let igen3Width = igen33.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel3.scrollLeft += icon.id == "left" ? -igen3Width : igen3Width;
        setTimeout(() => ikonok3(), 60); // calling ikonok3 after 60ms
    });
});

const automata3 = () => {
    // if there is no image left to scroll then return from here
    if(carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) > -1 || carousel3.scrollLeft <= 0) return;

    különbésg3 = Math.abs(különbésg3); // making különbésg3 value to positive
    let igen3Width = igen3.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = igen3Width - különbésg3;

    if(carousel3.scrollLeft > balra3) { // if user is scrolling to the right
        return carousel3.scrollLeft += különbésg3 > igen3Width / 3 ? valDifference : -különbésg3;
    }
    // if user is scrolling to the left
    carousel3.scrollLeft -= különbésg3 > igen3Width / 3 ? valDifference : -különbésg3;
}


// Get the modal
   var modal = document.getElementById("myModal");
   // Get the image and insert it inside the modal - use its "alt" text as a caption
   var img = document.getElementById("myImg");
   var modalImg = document.getElementById("img01");
   var captionText = document.getElementById("caption");
   img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
   };
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
      modal.style.display = "none";
   };




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
