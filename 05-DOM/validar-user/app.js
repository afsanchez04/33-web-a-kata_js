

const loginForm = document.querySelector('#loginForm')
const inputUser = document.querySelector('#userName')
const inputPass = document.querySelector('#userPass')
const userContainer = document.querySelector('#userContainer')


//hoisting
//return
//Forma 2 
loginForm.addEventListener('submit', e => {
    e.preventDefault()

    const userCard = (user, saldo) => {
        return (
        `
        <div class="userCard">
            <h1>Hola ${user}</h1>
            <small>Saldo: $${saldo}</small>
        </div>
        `
        )
    }

    //console.log( userCard('ramon',10) )

    //Iterar el array cuentas que está en db.js
    for(let i = 0; i < cuentas.length; i++){
        //console.log(cuentas[i].nombre)
        if(cuentas[i].nombre == inputUser.value.toLowerCase() && cuentas[i].pass == inputPass.value){
            console.log('bienvenido')
            userContainer.innerHTML = userCard(cuentas[i].nombre,cuentas[i].saldo)
            return //El return finaliza una función
        }
    }

    console.log('no existes')
    

} 
)


//Forma 1
/* function validarUsuario (){
    console.log('holaMundo')    
}

loginForm.addEventListener('click',validarUsuario) */

