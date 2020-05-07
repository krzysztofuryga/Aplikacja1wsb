import {
    sum
} from "./sum.js";
let heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);

heading.innerHTML = `10 + 5 = ${sumValue}`

import style from "../styles/style.scss"