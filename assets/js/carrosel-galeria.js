const imgs_galeria = document.querySelectorAll(".section-galeria-conjunto-imagens img");
const imgs_galeria_container = document.querySelector(".section-galeria-conjunto-imagens");
const janela_galeria = document.querySelector(".section-galeria-janela");
const img_principal_galeria = document.querySelector(".section-galeria-img-principal");

const botao_esquerdo_galeria = document.querySelector(".button-left-galeria");
const botao_direito_galeria = document.querySelector(".button-right-galeria");

let posicao_galeria = 0;

// Estado inicial
botao_esquerdo_galeria.style.color = "#474747";
botao_esquerdo_galeria.disabled = true;
botao_esquerdo_galeria.style.cursor = "inherit";

// Largura de um passo
function larguraPassoGaleria() {
    const gap = parseFloat(
        getComputedStyle(imgs_galeria_container).columnGap
    );

    return imgs_galeria[0].offsetWidth + gap;
}

// Atualiza o carrossel
function atualizar_carrosel_galeria() {

    const passo = larguraPassoGaleria();

    let deslocamento = posicao_galeria * passo;

    const maximo =
        imgs_galeria_container.scrollWidth - janela_galeria.offsetWidth;

    if (deslocamento > maximo) {
        deslocamento = maximo;
    }

    imgs_galeria_container.style.transform =
        `translateX(-${deslocamento}px)`;
}

// Última posição possível
function ultimaPosicaoGaleria() {

    const passo = larguraPassoGaleria();

    const maximo =
        imgs_galeria_container.scrollWidth - janela_galeria.offsetWidth;

    return Math.ceil(maximo / passo);
}

// Atualiza os botões
function atualizar_botao_galeria() {

    if (posicao_galeria <= 0) {

        botao_esquerdo_galeria.style.color = "#474747";
        botao_esquerdo_galeria.disabled = true;
        botao_esquerdo_galeria.style.cursor = "inherit";

    } else {

        botao_esquerdo_galeria.style.color = "#F5F5F5";
        botao_esquerdo_galeria.disabled = false;
        botao_esquerdo_galeria.style.cursor = "pointer";

    }

    if (posicao_galeria >= ultimaPosicaoGaleria()) {

        botao_direito_galeria.style.color = "#474747";
        botao_direito_galeria.disabled = true;
        botao_direito_galeria.style.cursor = "inherit";

    } else {

        botao_direito_galeria.style.color = "#F5F5F5";
        botao_direito_galeria.disabled = false;
        botao_direito_galeria.style.cursor = "pointer";

    }
}

// Botões
function left_galeria() {

    if (posicao_galeria > 0) {
        posicao_galeria--;
    }

    atualizar_carrosel_galeria();
    atualizar_botao_galeria();
}

function right_galeria() {

    if (posicao_galeria < ultimaPosicaoGaleria()) {
        posicao_galeria++;
    }

    atualizar_carrosel_galeria();
    atualizar_botao_galeria();
}

// Redimensionamento
window.addEventListener("resize", () => {

    if (posicao_galeria > ultimaPosicaoGaleria()) {
        posicao_galeria = ultimaPosicaoGaleria();
    }

    atualizar_carrosel_galeria();
    atualizar_botao_galeria();
});

// Troca a imagem principal
function trocarImagem(imagem){
    img_principal_galeria.src = imagem.src;
}

imgs_galeria.forEach(imagem => {
    imagem.addEventListener("click", function(){

        imgs_galeria.forEach(img => {
            img.style.border = "none";
            img.style.transform = "scale(1)";
        });

        this.style.transform = "scale(0.95)";
        this.style.border = "1px solid white";
    });
});