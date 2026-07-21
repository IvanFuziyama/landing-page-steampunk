const imgs_produtos = document.querySelector(".section-produtos-conjunto-imagens");
const botao_esquerdo_produtos = document.querySelector(".button-left-produtos");
const botao_direito_produtos = document.querySelector(".button-right-produtos");
let posicao_produtos = 0;
botao_esquerdo_produtos.style.color = "#474747"
botao_esquerdo_produtos.style.cursor = "inherit";

function atualizar_carrosel_produtos() {
    imgs_produtos.style.transform = `translateX(-${(posicao_produtos * 425)}px)`
}
function atualizar_botao_produtos() {
    if (posicao_produtos == 0) {
        botao_esquerdo_produtos.style.color = "#474747";
        botao_esquerdo_produtos.disabled = true;
        botao_esquerdo_produtos.style.cursor = "inherit";
    } else if (posicao_produtos == 2) {
        botao_direito_produtos.style.color = "#474747";
        botao_direito_produtos.disabled = true;
        botao_direito_produtos.style.cursor = "inherit";
    } else {
        botao_esquerdo_produtos.style.color = "#F5F5F5"
        botao_direito_produtos.style.color= "#F5F5F5"
        botao_direito_produtos.disabled = false;
        botao_esquerdo_produtos.disabled = false;
        botao_direito_produtos.style.cursor = "pointer";
        botao_esquerdo_produtos.style.cursor = "pointer";
    }
}
function left_produtos() {
    posicao_produtos--;
    atualizar_carrosel_produtos();
    atualizar_botao_produtos();
}
function right_produtos() {
    posicao_produtos++;
    atualizar_carrosel_produtos();
    atualizar_botao_produtos();
}