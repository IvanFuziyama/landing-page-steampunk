const img_principal_avatar = document.querySelector(".section-avatares-img-principal");
const imgs_avatares = document.querySelectorAll(".section-avatares-img");
function trocarAvatar(imagem){
    img_principal_avatar.src = imagem.src;
}
imgs_avatares.forEach(imagem => {
    imagem.addEventListener('click', function(){
        imgs_avatares.forEach(img => {
            img.style.opacity = "0.5";
            img.style.transform = "scale(1)";
        });
        this.style.opacity = "1";
        this.style.transform = "scale(1.15)";
        
    })
})