let conceptButton;
let conceptSection;
let contentButton;
let contentSection;


conceptButton = document.querySelector("#concept");
conceptSection = document.querySelector("#conceptSection");


contentButton = document.querySelector("#content");
contentSection = document.querySelector("#contentSection");


conceptButton.addEventListener("click", function (){
  conceptSection.scrollIntoView({behavior: 'smooth'});
})
