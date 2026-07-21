const imgs = document.querySelector(".section-produtos-conjunto-imagens");
const botao_esquerdo = document.querySelector(".button-left-produtos");
const botao_direito = document.querySelector(".button-right-produtos");
let posicao = 0;
botao_esquerdo.style.color = "#474747"
botao_esquerdo.style.cursor = "inherit";

function atualizar_carrosel() {
    imgs.style.transform = `translateX(-${(posicao * 425)}px)`
}
function atualizar_botao() {
    if (posicao == 0) {
        botao_esquerdo.style.color = "#474747";
        botao_esquerdo.disabled = true;
        botao_esquerdo.style.cursor = "inherit";
    } else if (posicao == 2) {
        botao_direito.style.color = "#474747";
        botao_direito.disabled = true;
        botao_direito.style.cursor = "inherit";
    } else {
        botao_esquerdo.style.color = "#F5F5F5"
        botao_direito.style.color= "#F5F5F5"
        botao_direito.disabled = false;
        botao_esquerdo.disabled = false;
        botao_direito.style.cursor = "pointer";
        botao_esquerdo.style.cursor = "pointer";
    }
}
function left_produtos() {
    console.log("clicou para a esquerda");
    posicao--;
    atualizar_carrosel();
    atualizar_botao();
}
function right_produtos() {
    console.log("clicou para a direita");
    posicao++;
    atualizar_carrosel();
    atualizar_botao();
}