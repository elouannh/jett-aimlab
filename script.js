let value = 0;

document.addEventListener('DOMContentLoaded', () => alert("Contenu chargé !"));

document.getElementById("counter-button").addEventListener("mousedown", () => {
    value += 1;
    document.getElementById("counter-display").innerText = `${value}`;
});