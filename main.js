const botoes = document.querySelectorAll("button")
console.log(botoes)

botoes.forEach(function(botao){
    let curtiu =false;
    botao.addEventListener("click",botaoClicado)

    function botaoClicado(){
        console.log("botaoClicado")
        let texto =botao.querySelector("span")
        texto.textContent++
    }
})