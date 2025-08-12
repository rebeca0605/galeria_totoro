'use strict'

const imagens = [
   {
    nome: 'Meu Amigo Totoro na chuva com as crianças!',
    url: './img/img1.jpg'
   },

   {
    nome: 'Meu Amigo Totoro e o ônibus de gato!',
    url: './img/img2.webp'
   },
   {
    nome: 'Meu Amigo Totoro deitado na grama!',
    url:'./img/img3.webp'
   },
   {
    nome:'O Ônibus de gato gigante!',
    url:'./img/img4.webp'
   },
   {
    nome: 'Taki e Mitsuha se comunicando por escritas no corpo!',
    url:'./img/img5.jpg'
   },
   {
    nome: 'Taki e seus amigos!',
    url:'./img/img6.png'
   },
   {
    nome: 'Mitsuha e Taki se encontrando!',
    url:'./img/img7.jpg'
   }, 
   {
    nome: 'Mitsuha e seus amigos!', 
    url:'./img/img8.jpg'
   }

]

function criarImagem (srcImagem){

const galeria = document.getElementById('galeria')
const imagem = document.createElement('img')

const container = document.createElement('div')
const legenda = document.createElement('texto')

imagem.src = srcImagem.url
legenda.textContent = srcImagem.nome

galeria.appendChild(imagem)
galeria.appendChild(container)
container.appendChild(legenda)

}

function carregarImagens (){

    // criando a galeria por um while

    // let contador = 0
    // const limite = imagens.length - 1
    // while (contador <= limite){
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens [contador] 
    //     galeria.appendChild(imagem)
    //     contador ++
    // }

    imagens.forEach(criarImagem)
   
}
carregarImagens()