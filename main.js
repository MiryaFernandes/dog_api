'use strict'

let a = (

)

const pesquisarRacas =  async () => {

    const url = "https://dog.ceo/api/breeds/list/all" 
    const response = await fetch (url)
    const data = await response.json()
    console.log (data.message)
}

const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch (url)

    const data = await response.json()

    return data
}

const criarImg = (imagem) =>{
    const img = document.createElement('img')
    img.src = imagem

    return img
}

const carregarImagens = async () => {
    const container = document.getElementById('imagem-container')
    const raca =  document.getElementById ('raca').value
    const imagens = await pesquisarCachorro(raca)

    const tagImagens = imagens.message.map(criarImg)

    container.replaceChildren(...tagImagens)

    //teste: console.log(imagens)
}

carregarRacas = () => {

    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML = 
       <option>
           ${racas.join("</option><option>")}
       </option>
}   

const abrir = () => {
    
}

document
    .getElementById('pesquisar')
    .addEventListener('click', carregarImagens)

carregarRacas()