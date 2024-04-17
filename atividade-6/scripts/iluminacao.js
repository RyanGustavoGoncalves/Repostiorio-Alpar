const btnSala = document.getElementById("btn-sala");
btnSala.style.background = "red"
const btnCozinha = document.getElementById("btn-cozinha");
btnCozinha.style.background = "red"
const btnQuarto = document.getElementById("btn-quarto");
btnQuarto.style.background = "red"
const btnBanheiro = document.getElementById("btn-banheiro");
btnBanheiro.style.background = "red"


class Luz {
    constructor(btn) {
        if (btn.style.background === "red") {
            btn.style.background = "green";
            const textContent = btn.innerText;
            const newTextContent = textContent.replace("Desligado", "Ligado");
            btn.innerHTML = newTextContent;
        } else {
            btn.style.background = "red";
            const textContent = btn.innerText;
            const newTextContent = textContent.replace("Ligado", "Desligado");
            btn.innerHTML = newTextContent;
        }
    }

}

function getValue(btn) {
    new Luz(btn);
}