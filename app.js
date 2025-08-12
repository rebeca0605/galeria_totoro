'use strict'

const imagens = [
   {
    nome: 'Acdc',
    url: './img/acdc.jpg'
   },

   {
    nome: 'ArcticMonkeys',
    url: './img/arctic_monkeys.jpg'
   },
   {
    nome: 'Bowie',
    url:'./img/bowie.jpg'
   },
   {
    nome:'HeyJude',
    url:'./img/hey_jude.jpg'
   },
   {
    nome: 'Kiss',
    url:'./img/kiss.jpg'
   },
   {
    nome: 'Maneskin',
    url:'./img/maneskin.jpg'
   },
   {
    nome: 'SilverSprings',
    url:'./img/silver_springs.jpg'
   }, 
   {
    nome: 'UnderPressure', 
    url:'./img/under_pressure.jpg'
   }

]

function criarImagem (srcImagem){
const galeria = document.getElementById('galeria')
const imagem = document.createElement('img')

imagem.src = srcImagem.url
galeria.appendChild(imagem)

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