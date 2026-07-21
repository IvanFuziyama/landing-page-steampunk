const imgs_galeria = document.querySelector(".section-galeria-conjunto-imagens")
const botao_esquerdo_galeria = document.querySelector(".button-left-galeria")
const botao_direito_galeria = document.querySelector(".button-right-galeria")

let posicao_galeria = 0
botao_esquerdo_galeria.style.color = "#474747"
botao_esquerdo_galeria.style.cursor = "inherit";
function atualizar_carrosel_galeria() {
    imgs_galeria.style.transform = `translateX(-${(posicao_galeria * 425)}px)`
}
function atualizar_botao_galeria() {
    if (posicao_galeria == 0) {
        botao_esquerdo_galeria.style.color = "#474747";
        botao_esquerdo_galeria.disabled = true;
        botao_esquerdo_galeria.style.cursor = "inherit";
    } else if (posicao_galeria == 2) {
        botao_direito_galeria.style.color = "#474747";
        botao_direito_galeria.disabled = true;
        botao_direito_galeria.style.cursor = "inherit";
    } else {
        botao_esquerdo_galeria.style.color = "#F5F5F5"
        botao_direito_galeria.style.color= "#F5F5F5"
        botao_direito_galeria.disabled = false;
        botao_esquerdo_galeria.disabled = false;
        botao_direito_galeria.style.cursor = "pointer";
        botao_esquerdo_galeria.style.cursor = "pointer";
    }
}
function left_galeria() {
    posicao_galeria--;
    atualizar_carrosel_galeria();
    atualizar_botao_galeria();
}
function right_galeria() {
    posicao_galeria++;
    atualizar_carrosel_galeria();
    atualizar_botao_galeria();
}