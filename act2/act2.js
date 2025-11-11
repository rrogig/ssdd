const axios = require('axios');

// la funcion es asincrona, pero no determina si se ejecuta en serie o en paralelo
async function obtenerUsuario(id) {
    const usuarios = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const publicaciones = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    console.log(`${usuarios.data.name} tiene ${publicaciones.data.length} publicaciones.`);
}

// para ejecutarlo secuencialmente, cada llamada debe esperar a la anterior
async function ejecutarSecuencial(){
    console.log('--- Ejecucion Secuencial ---');
    await obtenerUsuario(1);
    await obtenerUsuario(2);
    await obtenerUsuario(3);
}

// para ejecutarlo en paralelo, no se espera a que termine cada llamado 
async function ejecutarParalelo(){
    console.log('--- Ejecucion Paralela ---');
    obtenerUsuario(1);
    obtenerUsuario(2);
    obtenerUsuario(3);
}

async function main(){
    await ejecutarSecuencial();
    await ejecutarParalelo();
}

main();
