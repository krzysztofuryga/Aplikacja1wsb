import style from "../styles/style.scss"


// Logowanie

const loginBtn = document.querySelector(".btn-login");
const loginAcceptBtn = document.querySelector(".login-button");
const loginCancelBtn = document.querySelector(".cancel-button");
const backdrop = document.querySelector("#backdrop");
const logPanel = document.querySelector(".log-panel");

const loginModal = () => {
    backdrop.classList.add("visible")
    logPanel.style.display = "block"
}

const acceptLog = () => {
    console.log('działa')
    backdrop.classList.remove("visible")
    logPanel.style.display = "none"
}

const cancelLog = () => {
    backdrop.classList.remove("visible")
    logPanel.style.display = "none"
}

loginBtn.addEventListener("click", loginModal);
loginAcceptBtn.addEventListener("click", acceptLog);
loginCancelBtn.addEventListener("click", cancelLog);

// Search

const searchBtn = document.querySelector(".search-button");

const searchFlight = () => {
    console.log("działa")
    location.href = "../scripts/booking.html"
}

searchBtn.addEventListener("click", searchFlight)

// Confirm buttons

const flightsBtn = document.getElementById('flights-confirm');

const klik = () => {
    console.log("działa")
}

flightsBtn.addEventListener("click", klik)