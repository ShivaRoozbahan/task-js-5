"use stript";

const inName = document.querySelector(".nameUser");
const inAge = document.querySelector(".uerAge");
const btnSubmit = document.querySelector(".submit");
const textError = document.querySelector(".text-error");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (inName === "") {
    textError.textContent = "plz";
    textError.computedStyleMap.display = "block";
  }
  if (inAge < 0 && inAge > 100) {
    textError.textContent = "plz";
    textError.computedStyleMap.display = "block";
    } else {
    textError.computedStyleMap.display = "none";
  }
});
