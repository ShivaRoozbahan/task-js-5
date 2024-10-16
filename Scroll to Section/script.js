"use strict";

// link nav
const linkHome = document.querySelector(".Home");
const linkAbout = document.querySelector(".About");
const linkCantact = document.querySelector(".Cantact");
const linkServices = document.querySelector(".Services");

// text
const textHome = document.querySelector(".text-home");
const textAbout = document.querySelector(".text-about");
const textCantact = document.querySelector(".text-cantact");
const textServices = document.querySelector(".text-services");

//  scroll Home
linkHome.addEventListener("click", function (e) {
  e.preventDefault();
  textHome.scrollIntoView({
    behavior: "smooth",
  });
});

//  scroll About
linkAbout.addEventListener("click", function (e) {
  e.preventDefault();
  textAbout.scrollIntoView({
    behavior: "smooth",
  });
});

//  scroll Services
linkServices.addEventListener("click", function (e) {
  e.preventDefault();
  textServices.scrollIntoView({
    behavior: "smooth",
  });
});

//  scroll Cantact
linkCantact.addEventListener("click", function (e) {
  e.preventDefault();
  textCantact.scrollIntoView({
    behavior: "smooth",
  });
});
