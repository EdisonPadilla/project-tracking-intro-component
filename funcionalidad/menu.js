"use strict";

const d = document;
const $ham_button = d.querySelector(".ham-btn");
const $bars_icon = d.querySelector(".ham-icon");
const $close_icon = d.querySelector(".close-icon");
const $menu = d.querySelector(".nav-menu");

console.log($ham_button);
console.log($bars_icon);
console.log($close_icon);
console.log($menu);

$ham_button.addEventListener("click", () => {
  $bars_icon.classList.toggle("clicked");
  $close_icon.classList.toggle("clicked");
  $menu.classList.toggle("show");
});
