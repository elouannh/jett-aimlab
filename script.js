let value = 0;
let game = false;
let timer = 0;
let scores = [];
let [posx, posy] = [0, 0];
const maxTime = 3 * 1000;

document.getElementById("counter-button").addEventListener("mousedown", () => {
    let button = document.getElementById("counter-button");

    if (game === false) {
        game = true;
        timer = Date.now();
    }

    let time = Date.now();
    if (time - timer >= maxTime) {
        game = false;
        scores.push(value);
        timer = 0;
        value = 0;
        button.style.top = `500px`;
        button.style.left = `${(window.innerWidth / 2) - 20}px`;
    }

    if (game === false) {
        document.getElementById("scores").innerText = `${scores.map((e, i) => `${i + 1}. ${e}`).join("\n")}`;

        return;
    }

    value += 1;
    document.getElementById("counter-display").innerText = `${value}`;
    document.getElementById("timer-display").innerText = `${(maxTime - (time - timer)) / 1000}`;

    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;

    [posx, posy] = [Math.floor(Math.random() * (window.innerWidth - buttonWidth)), Math.floor(Math.random() * (window.innerHeight - buttonHeight))];
    button.style.top = `${posy}px`;
    button.style.left = `${posx}px`;
});

document.addEventListener('DOMContentLoaded', () => console.log("Contenu chargé !"));