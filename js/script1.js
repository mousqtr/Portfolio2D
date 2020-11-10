
/* Make the menu out for mobile version */ 
var m_menu = document.getElementById("menu");
var m_up = document.getElementById("up");
var m_down = document.getElementById("down");
var widthOutput = document.querySelector('#width');
var mobileWidth = 1000;

function myFunction() {
  if (m_menu.style.display === "block") {
    m_menu.style.display = "none";
    m_up.style.display = "none";
    m_down.style.display = "block";
  } else {
    m_menu.style.display = "block";
    m_up.style.display = "block";
    m_down.style.display = "none";
  }
}

function resize() { 
  if(window.innerWidth > mobileWidth) {
    m_menu.style.display = "block";

  }else{
    m_menu.style.display = "none";
  }
  widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;


/* Central button control */
var centralButton = document.getElementById("button-central");
function myButtonFunction() {
    centralButton.style.backgroundColor  = "#FF0000";
}

/* Devis button */
var devisButton = document.getElementById("devis-button");
function myDevisButtonFunction() {
    devisButton.style.backgroundColor  = "#FF0000";
}




function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}