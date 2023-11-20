window.addEventListener("scroll", function () {
  let scrollToTopButton = document.querySelector(".scrollTop");
  if (window.pageYOffset > 600) {
       scrollToTopButton.style.display = "block";
  } else {
       scrollToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
       top: 0
  });
}

function getLink(){
  const currentUrl = window.location.href;
  alert("Current URL: " + currentUrl);
}

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: false
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('showdiv');
      }
  })
})

const hiddenElements = document.querySelectorAll('.hiddendiv');
hiddenElements.forEach((el) => observer.observe(el));
