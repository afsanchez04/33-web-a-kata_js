

let valor = NaN
console.log( Boolean( valor ) )

if( '' ) {
    console.log(' Esto es truthy ')
    console.log(' Esto es truthy ')
}else {
     console.log('tu valor es falsy')
}


//Las personas mayores de 18 años entran a la discoteca. Si la persona se llama Mario o Carlos, puede entrar a VIP

let nombre = prompt('Dime tu nombre')
let edad = prompt('Dime tu edad')

if(edad >= 18){
    if(nombre == 'mario' || nombre == 'carlos'){
        console.log('Puedes ingresar a la discoteca a zona VIP! 🎊')
    }else{
        console.log('Puedes ingresar a la discoteca')
    }
    
}else{
    console.log('No tienes la edad para entrar')
}

//si tengo más de 28 años me visto de azul, si tengo menos de 28 me visto de rojo


let team = `Debes vestirte con camiseta ${ (edad >= 28) ? 'azul' : 'rojo' }`

console.log(team)


   