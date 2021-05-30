$(document).ready(function () {
  $(".carousel").carousel();
  $(".materialboxed").materialbox();
  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
  $(".modal").modal();
});

// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var darkMode = true;

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  darkMode = !darkMode;
  // If mode is dark, remove dark, apply bright background
  if (!darkMode) {
    container.classList.remove("dark");
    container.classList.add("bright");
  } else {
    //remove bright, apply dark//
    container.classList.remove("bright");
    container.classList.add("dark");
  }
});
