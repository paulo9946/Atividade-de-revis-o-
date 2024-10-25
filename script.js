function trocarImagem(){
    const imagem = document.getElementById("imagem");
    imagem.style.animation = "rotateY 1s ease";
    const imagens = ["imagem1.jpg"," imagem2.pg","imagem3.jpg"];
    const src = imagem.scr.split('/').pop();
    let index = imagens.indexOf(scr);
    index = (index + 1)% imagem.length;
    imagem.src = imagens(inddex);

   setTimeout( () =>{
    imagem.style.animation ="";

   }, 1000);
}
