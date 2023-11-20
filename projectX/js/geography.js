var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

var image = document.getElementById("blankmap");
var world = document.getElementById("world");
var isWorld = false;

world.addEventListener("click", function() {
  if (isEurasia){
    eurasia.click();
  }else if(isAmerica){
    america.click();
  }else if(isAfrica){
    africa.click();
  }else if(isAustralia){
    australia.click();
  }
  if(isWorld){
    image.src = "source/blank.jpg";
    image.alt = "blank map";
  }else{
    image.src = "source/map.jpg";
    image.alt = "World Map";
  }
  isWorld = !isWorld;
});

var eurasia = document.getElementById("eurasia");
var isEurasia = false;

eurasia.addEventListener("click", function() {
  if (isWorld){
    world.click();
  }else if(isAmerica){
    america.click();
  }else if(isAfrica){
    africa.click();
  }else if(isAustralia){
    australia.click();
  }
  if(isEurasia){
    image.src = "source/blank.jpg";
    image.alt = "blank map";
  }else{
    image.src = "source/eurasia.jpg";
    image.alt = "Eurasia";
  }
  isEurasia = !isEurasia;
});

var america = document.getElementById("america");
var isAmerica = false;

america.addEventListener("click", function() {
  if (isWorld){
    world.click();
  }else if(isEurasia){
    eurasia.click();
  }else if(isAfrica){
    africa.click();
  }else if(isAustralia){
    australia.click();
  }

  if(isAmerica){
    image.src = "source/blank.jpg";
    image.alt = "blank map";
  }else{
    image.src = "source/america.jpg";
    image.alt = "America";
  }
  isAmerica = !isAmerica;
});

var africa = document.getElementById("africa");
var isAfrica = false;

africa.addEventListener("click", function() {
  if (isWorld){
    world.click();
  }else if(isAmerica){
    america.click();
  }else if(isEurasia){
    eurasia.click();
  }else if(isAustralia){
    australia.click();
  }
  if(isAfrica){
    image.src = "source/blank.jpg";
    image.alt = "blank map";
  }else{
    image.src = "source/africa.jpg";
    image.alt = "Africa";
  }
  isAfrica = !isAfrica;
});

var australia = document.getElementById("australia");
var isAustralia = false;

australia.addEventListener("click", function() {
  if (isWorld){
    world.click();
  }else if(isAmerica){
    america.click();
  }else if(isAfrica){
    africa.click();
  }else if(isEurasia){
    eurasia.click();
  }
  if(isAustralia){
    image.src = "source/blank.jpg";
    image.alt = "blank map";
  }else{
    image.src = "source/australia.jpg";
    image.alt = "Australia";
  }
  isAustralia = !isAustralia;
});