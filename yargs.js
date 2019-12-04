
const opts = {
    
    base:{
        demand: true,
        alias: 'b'
    },
    
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
                        .command('listar','imprime en pantalla la tabla del numero base', opts)
                        .command('crear','crea un archivo con la table del numero base',opts)
                        .help()
                        .argv

module.exports = { argv };