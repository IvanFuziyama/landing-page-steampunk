const imgs_galeria = document.querySelectorAll(".section-galeria-conjunto-imagens img");
const imgs_galeria_container = document.querySelector(".section-galeria-conjunto-imagens");
const img_principal_galeria = document.querySelector(".section-galeria-img-principal");
const botao_esquerdo_galeria = document.querySelector(".button-left-galeria");
const botao_direito_galeria = document.querySelector(".button-right-galeria");

let posicao_galeria = 0;
botao_esquerdo_galeria.style.color = "#474747";
botao_esquerdo_galeria.style.cursor = "inherit";
function atualizar_carrosel_galeria() {
    imgs_galeria_container.style.transform = `translateX(-${(posicao_galeria * 230)}px)`;
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

function trocarImagem(imagem){
    img_principal_galeria.src = imagem.src;
}
imgs_galeria.forEach(imagem => {
    imagem.addEventListener('click', function() {
        // Reseta o estilo 
        imgs_galeria.forEach(img => {
            img.style.border = "none";
            img.style.transform = "scale(1)";
        });

        // Modifica o estilo
        this.style.transform = "scale(0.95)";
        this.style.border = "1px solid white"
        
    });
});
