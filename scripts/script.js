import style from "../styles/style.scss"

// Logowanie

const loginBtn = document.querySelector(".btn-login");
const loginModal = () => {
    const loginAcceptBtn = document.querySelector(".login-button");
    const loginCancelBtn = document.querySelector(".cancel-button");
    const backdrop = document.querySelector("#backdrop");
    const logPanel = document.querySelector(".log-panel");
    backdrop.classList.add("visible")
    logPanel.style.display = "block"

    const acceptLog = () => {
        console.log('działa')
        backdrop.classList.remove("visible")
        logPanel.style.display = "none"
    }

    const cancelLog = () => {
        backdrop.classList.remove("visible")
        logPanel.style.display = "none"
    }

    loginAcceptBtn.addEventListener("click", acceptLog);
    loginCancelBtn.addEventListener("click", cancelLog);
}

loginBtn.addEventListener("click", loginModal);


// Search

const searchBtn = document.querySelector(".search-button");

export let newRes = {
    depAirport: departureAirport.value,
    desAirport: destinationAirport.value,
    depDate: departureDate.value,
    retDate: returnDate.value,
    passengersNum: passengersNumber.value
}

const searchFlight = () => {

    console.log("działa")
    let departureAirport = document.getElementById("departureAirport").value
    let destinationAirport = document.getElementById("destinationAirport").value
    let departureDate = document.getElementById("departureDate").value
    let returnDate = document.getElementById("returnDate").value
    let passengersNumber = document.getElementById("passengersNumber").value
    console.log(newRes)
    window.location.href = './booking.html'
}

searchBtn.addEventListener("click", searchFlight)