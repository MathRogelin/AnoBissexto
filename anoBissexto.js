const prompt = require("prompt-sync")()
// Pedir ano
const ano = Number(prompt("Digite um ano: "))
if ((ano % 4 == 0 && ano % 100 == 0) || ano % 400 == 0) {
    console.log(`${ano} é bissexto.`)

}else {
    console.log(`${ano} não é bissexto.`)
}
