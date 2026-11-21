function tocarsom() {
    alert("🥔🥔🥔");
    document.getElementById(cortar).onplay();
}
const cartoes = document.querySelectorAll(".cartao1, .cartao2, .cartao3, .cartao4");
cartoes.forEach((cartao) => {
cartao.addEventListener("mousemove", (evento) => {
const retangulo = cartao.getBoundingClientRect();
const x = evento.clientX - retangulo.left;
const y = evento.clientY - retangulo.top;
cartao.addEventListener("mouseleave", () => {
    cartao.style.setProperty("--mouse-x", "-200px");
    cartao.style.setProperty("--mouse-y", "-200px");
});

cartao.style.setProperty("--mouse-x", `${x}px`);
cartao.style.setProperty("--mouse-y", `${y}px`);
});
});