const btnSala = document.getElementById("btn-sala");
const btnCozinha = document.getElementById("btn-cozinha");
const btnQuarto = document.getElementById("btn-quarto");
const btnBanheiro = document.getElementById("btn-banheiro");

const verifyBtn = (btn, isActive) => {
    if (isActive) {
        btn.classList.add('active');
        const textContent = btn.innerText;
        const newTextContent = textContent.replace("Desligado", "Ligado");
        btn.innerHTML = newTextContent;
    } else {
        btn.classList.remove('active');
        const textContent = btn.innerText;
        const newTextContent = textContent.replace("Ligado", "Desligado");
        btn.innerHTML = newTextContent;
    }
}

btnSala.addEventListener('click', () => { luz.luzInstance.toggle('sala'); })
btnCozinha.addEventListener('click', () => { luz.luzInstance.toggle('cozinha'); })
btnQuarto.addEventListener('click', () => { luz.luzInstance.toggle('quarto'); })
btnBanheiro.addEventListener('click', () => { luz.luzInstance.toggle('banheiro'); })

luz.luzInstance.inscrever(() => {
    verifyBtn(btnSala, luz.luzInstance.getState('sala'));
    verifyBtn(btnCozinha, luz.luzInstance.getState('cozinha'));
    verifyBtn(btnQuarto, luz.luzInstance.getState('quarto'));
    verifyBtn(btnBanheiro, luz.luzInstance.getState('banheiro'));
});