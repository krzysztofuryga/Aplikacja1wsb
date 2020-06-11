import style from "../styles/style.scss"
import {
    newRes
} from "./script"

let departureSpan = document.getElementById("departure")

console.log(newRes.depAirport)

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