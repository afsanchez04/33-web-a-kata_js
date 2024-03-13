

const titulo = document.getElementById('miTitulo')
const btn = document.getElementById('miBtn')
const parrafos = document.querySelector('.p-content')

function saludar (){
    titulo.classList.add('superTitulo')
    titulo.innerText = 'Te saludamos desde JavaScript 😎'
}

btn.addEventListener('click',saludar)






















//Los elementos del HTML son interpretados como objetos

//Ejemplo de objeto tradicional

/* const user = {
    nombre: 'pepe',
    edad: 12,
    pais: 'España'
}
 */

//Ejemplo de elemento de HTML (Como lo interpretaría el DOM)

/* const img = {
    src: '...',
    width: '',
    alt: '',
    title: '',
    class: '',
    id: '',
    style: ''
}  */

