
/* Make the menu out for mobile version */ 
var m_menu = document.getElementById("menu");
var m_up = document.getElementById("up-icon");
var m_down = document.getElementById("down-icon");
var m_contact = document.getElementById("contact-icon");
var widthOutput = document.querySelector('#width');
var mobileWidth = 1000;

var div_progress = document.getElementById("progress");
var div_games = document.getElementById("games");
var div_image = document.getElementById("image");
var div_transmission = document.getElementById("transmission");
var div_electronic = document.getElementById("electronic");
var div_internship = document.getElementById("internship");
var div_website = document.getElementById("website");
var div_others = document.getElementById("others");
var projects = [div_progress, div_games, div_image, div_transmission, div_electronic, div_internship, div_website, div_others];


function open_project(num_div){
  if (projects[num_div].style.display == "none"){
    projects[num_div].style.display = "block";
  } else {
    projects[num_div].style.display = "none";
  }
}

function myFunction() {
  if (m_menu.style.display === "block") {
    m_menu.style.display = "none";
    m_up.style.display = "none";
    m_down.style.display = "block";
    m_contact.style.display = "block";
  } else {
    m_menu.style.display = "block";
    m_up.style.display = "block";
    m_down.style.display = "none";
    m_contact.style.display = "none";
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


