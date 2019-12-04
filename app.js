const argv = require('./yargs').argv;
const color = require('colors');
const { crearArchivo, listarTabla } = require ('./multiplicar');

let base = argv.base;
let limite = argv.limite;
var comando = argv._[0];

if( comando === 'crear'){
    
    crearArchivo( base , limite )
           .then(archivo => console.log(`El archivo ${archivo.green} ha sido creado con éxito.`))
           .catch(err => console.log(`El valor "${err}"  no es un número y no puede ser procesado.`));

} else if( comando === 'listar' ){

    listarTabla( base , limite )
            .then( exito => console.log(`La tabla del ${exito.base} fue impresa en consola hasta el ${exito.limite}.`))
            .catch( err => console.log(`El valor "${err}" no es un número válido.`));

} else if(!comando){
    console.log("no sabemos lo que quieres, no podemos procesar tu solicitud.");
}

