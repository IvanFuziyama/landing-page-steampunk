const imgs = document.querySelector(".section-produtos-conjunto-imagens");
const botao_esquerdo = document.querySelector(".button-left");
const botao_direito = document.querySelector(".button-right");
let posicao = 0;
botao_esquerdo.style.color = "#474747"

function atualizar_carrosel() {
    imgs.style.transform = `translateX(-${(posicao * 445)}px)`
}
function atualizar_botao() {
    if (posicao == 0) {
        botao_esquerdo.style.color = "#474747";
        botao_esquerdo.disabled = true;

    } else if (posicao == 2) {
        botao_direito.style.color = "#474747";
        botao_direito.disabled = true;
    } else {
        botao_esquerdo.style.color = "#F5F5F5"
        botao_direito.style.color= "#F5F5F5"
        botao_direito.disabled = false;
        botao_esquerdo.disabled = false;
    }
}
function left() {
    console.log("clicou para a esquerda");
    posicao--;
    atualizar_carrosel();
    atualizar_botao();
}
function right() {
    console.log("clicou para a direita");
    posicao++;
    atualizar_carrosel();
    atualizar_botao();
}