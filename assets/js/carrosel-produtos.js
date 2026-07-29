const imgs_produtos = document.querySelector(".section-produtos-conjunto-imagens");
const janela_produtos = document.querySelector(".section-produtos-janela");
const imagens_produtos = document.querySelectorAll(".section-produtos-img");
const botao_esquerdo_produtos = document.querySelector(".button-left-produtos");
const botao_direito_produtos = document.querySelector(".button-right-produtos");

let posicao_produtos = 0;

botao_esquerdo_produtos.style.color = "#474747";
botao_esquerdo_produtos.style.cursor = "inherit";
botao_esquerdo_produtos.disabled = true;

function larguraPassoProdutos() {
    const gap = parseFloat(
        getComputedStyle(imgs_produtos).columnGap
    );

    return imagens_produtos[0].offsetWidth + gap;
}

function imagensVisiveisProdutos() {
    return Math.floor(
        janela_produtos.offsetWidth / larguraPassoProdutos()
    );
}

function ultimaPosicaoProdutos(){

    const passo = larguraPassoProdutos();

    const maximo =
        imgs_produtos.scrollWidth - janela_produtos.offsetWidth;

    return Math.ceil(maximo / passo);

}

function atualizar_carrosel_produtos() {

    const passo = larguraPassoProdutos();

    let deslocamento = posicao_produtos * passo;

    const maximo =
        imgs_produtos.scrollWidth - janela_produtos.offsetWidth;

    if (deslocamento > maximo) {
        deslocamento = maximo;
    }

    imgs_produtos.style.transform =`translateX(-${deslocamento}px)`;
}

function atualizar_botao_produtos() {

    if (posicao_produtos <= 0) {

        botao_esquerdo_produtos.style.color = "#474747";
        botao_esquerdo_produtos.disabled = true;
        botao_esquerdo_produtos.style.cursor = "inherit";

    } else {

        botao_esquerdo_produtos.style.color = "#F5F5F5";
        botao_esquerdo_produtos.disabled = false;
        botao_esquerdo_produtos.style.cursor = "pointer";

    }

    if (posicao_produtos >= ultimaPosicaoProdutos()) {

        botao_direito_produtos.style.color = "#474747";
        botao_direito_produtos.disabled = true;
        botao_direito_produtos.style.cursor = "inherit";

    } else {

        botao_direito_produtos.style.color = "#F5F5F5";
        botao_direito_produtos.disabled = false;
        botao_direito_produtos.style.cursor = "pointer";

    }

}

function left_produtos() {

    if (posicao_produtos > 0) {
        posicao_produtos--;
    }

    atualizar_carrosel_produtos();
    atualizar_botao_produtos();

}

function right_produtos() {

    if (posicao_produtos < ultimaPosicaoProdutos()) {
        posicao_produtos++;
    }

    atualizar_carrosel_produtos();
    atualizar_botao_produtos();

}

window.addEventListener("resize", () => {

    if (posicao_produtos > ultimaPosicaoProdutos()) {
        posicao_produtos = ultimaPosicaoProdutos();
    }

    atualizar_carrosel_produtos();
    atualizar_botao_produtos();

});