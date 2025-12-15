// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();

// let year = document.querySelector("#date");
// year.innerHTML = `&copy${currentYear}`;

// let lastModifiedDate = document.querySelector("#lastModified");
// lastModifiedDate.textContent = new Date(document.lastModified);

let menuButton = document.querySelector("#menu");
let navList = document.querySelector("nav ul")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open")
    navList.classList.toggle("open")
})