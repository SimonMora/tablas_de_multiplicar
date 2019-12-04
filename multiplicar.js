const fs = require('fs');

let crearArchivo = ( base, limite )=>{
   
   return new Promise((resolve,reject)=>{
    
    if(!Number(base)){
        reject(base);
        return;
    }

    data = '';

    for (let i = 1; i<=limite; i++){
    
        data += `${base} * ${i} = ${base*i} \n`;
    
    }

    fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    
        if (err)
            reject(err);
        else
            resolve(`tabla-${base}.txt`);
  
    });

   });
    
}

let listarTabla = ( base, limite ) => {

    return new Promise((resolve,reject)=>{
    
        if( !Number(base) ){
            reject(base);
            return;
        } else if( !Number(limite) ){
            reject(limite);
        }
    
        for (let i = 1; i<=limite; i++){
        
            console.log( `${base} * ${i} = ${ base * i } \n` );
            
        }
        
        resolve({ base , limite });

    });    

} 

module.exports = { crearArchivo, listarTabla };

