

//1.
const formulario = document.querySelector('#mainForm')
const userName = document.querySelector('#name')
const userColor = document.querySelector('#colors')
const userScreen = document.querySelector('#userScreen')

//2 y 3.

formulario.addEventListener( 'submit', function (e){
    e.preventDefault()

    console.log(userName.value)
    console.log(userColor.value)

    userScreen.innerText = userName.value
    formulario.parentElement.style.backgroundColor = userColor.value 

    userName.value = ''
} )
























//Realizar un contador con un botón de incremento y otro de decremento. El contador no debe sumar más de 20 y no puede mostrar números negativos.

//1. Crear los elementos necesarios en HTML
//2. Capturar / obtener los elementos HTML y guardarlos en variables de javascript
//3. Crear la(s) funcion(es) Ej. incremento() decremento()
//4. Asignar eventListener a los botones para ejecutar función por medio del evento indicado.


/* const resta = document.querySelector(".restar"); // trae class restar de html
const display = document.querySelector(".display"); // trae class display de html
const suma = document.querySelector(".sumar"); // trae class de sumar de html

console.log(display.innerHTML) // probar el value de display 

// esta funcion hace un decremento de 1 al valor dentro de display
const decremento = () => {
  // condicion asegura que la suma no sea mayor a 20 
  if (display.innerHTML > 0){
    display.innerHTML -- // efectua la resta del valor actuar de display 
  }else {
    return alert("no se pueden mostrar números negativos 😞")
  }
}
// esta funcion hace un incremento de 1 al valor dentro de display
const increment = () => {
  // condicion asegura que la suma no sea mayor a 20 
  if(display.innerHTML < 20){
    display.innerHTML++ // efectua la suma del valor actuar de display 
  } else {
    return alert("no se pueden efectuar sumas mayores a 20 😞")
  }
}


resta.addEventListener("click",decremento); // esta a la escucha de click para ejecutar decremento
suma.addEventListener("click", increment);// esta a la escucha de click para ejecutar incremento */





/* const titulo = document.getElementById('miTitulo')
const btn = document.querySelector('#miBtn')
// const parrafos = document.querySelectorAll('.p-content') 

function saludar (){
    titulo.classList.add('superTitulo')
    titulo.innerText = 'Te saludamos desde JavaScript 😎'
}

btn.addEventListener('click',saludar) */
























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

