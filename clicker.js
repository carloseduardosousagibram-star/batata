let batatas = 0;
let ganho = 1;
let precoupgrade =25;
const botao = document.querySelector(".batata")
const contador =document.querySelector(".contador")

botao.addEventListener("click", (evento) => {
batatas+= ganho
contador.textContent = `${batatas} batatas `
console.log(batatas)

})
const upgrade = document.querySelector(".upgrade")
upgrade.addEventListener("click", (evento) => {

if (batatas >= precoupgrade) {
    console.log("Pode comprar!")
    batatas -=precoupgrade
    contador.textContent = `${batatas} batatas `
    ganho++
    precoupgrade *=2
    upgrade.textContent = `upgrade ${precoupgrade}`
    


}})