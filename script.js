/** @type {[number, number[]]} */
const [MAX_TIME, scores] = [3 * 1000, []];

/** @type {(HTMLElement | null)[]} */
const [buttonH, scoresH, counterDisplayH, timerDisplayH] = [
    document.getElementById("counter-button"),
    document.getElementById("scores"),
    document.getElementById("counter-display"),
    document.getElementById("timer-display"),
];

let [buttonWidth, buttonHeight] = [buttonH.offsetWidth, buttonH.offsetHeight];
let [game, value, timerSave, timerTemp, posx, posy] = [false, 0, 0, 0, 0];

document.getElementById("counter-button").addEventListener("mousedown", () => {
    let button = document.getElementById("counter-button");

    if (!game) {
        game = true;
        timerSave = Date.now();
    }

    timerTemp = Date.now();
    if (timerTemp - timerSave >= MAX_TIME) {
        scores.push(value);

        [game, timer, value] = [false, 0, 0];

        button.style.top = `500px`;
        button.style.left = `${(window.innerWidth / 2) - 20}px`;
    }

    if (!game) return scoresH.innerText = `${scores.map((e, i) => `${i + 1}. ${e}`).join("\n")}`;
        
    value += 1;
    counterDisplayH.innerText = `${value}`;
    timerDisplayH.innerText = `${(MAX_TIME - (timerTemp - timerSave)) / 1000}`;

    [posx, posy] = [
        Math.floor(Math.random() * (window.innerWidth - buttonWidth)), Math.floor(Math.random() * (window.innerHeight - buttonHeight))
    ];
    button.style.top = `${posy}px`;
    button.style.left = `${posx}px`;
});

document.addEventListener('DOMContentLoaded', () => console.log("Contenu chargé !"));