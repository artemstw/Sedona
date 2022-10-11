"use strict";

const button = document.querySelector(".search-form__button");
const form = document.querySelector(".search-form");

button.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("search-form-down");
    form.classList.remove("search-form-up");
});
