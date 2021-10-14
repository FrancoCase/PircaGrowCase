

function validarUsuario( usuario ){

    let usuarioRegistrado = "franco";

    if( usuario == usuarioRegistrado ){

        return true;
    }
    else{
        return false;
    }


}


function validarPass( clave ){

    let passsRegistrado = "franco1234" ;

    if( clave == passsRegistrado ){

        return true;
    }
    else{
        return false;
    }


}


function login( usuario  , pass){


    if( usuario == true && pass == true){

        return true;
    }
}


let usuario = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");



if( login( validarUsuario( usuario ) , validarPass(pass))){

    console.log("Ingreso correcto");

}