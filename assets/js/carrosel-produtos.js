const imgs = document.querySelector(".section-produtos-conjunto-imagens");
const botao_esquerdo = document.querySelector(".button-left");
const botao_direito = document.querySelector(".button-right");
let posicao = 0;

function atualizar_carrosel(){
    imgs.style.transform = `translateX(-${(posicao*445)}px)`
}
function atualizar_botao(){
    if(posicao == 0){
        botao_esquerdo.disabled = true;
    }else if(posicao == 2){
        botao_direito.disabled = true;
    }else{
        botao_direito.disabled = false;
        botao_esquerdo.disabled = false;
    }
}
function left(){
    console.log("clicou para a esquerda");
    posicao--;
    atualizar_carrosel();
    atualizar_botao();
}
function right(){
    console.log("clicou para a direita");
    posicao++;
    atualizar_carrosel();
    atualizar_botao();
}