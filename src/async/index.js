//Clase 13: Async Await
//Hacemos una nueva promesa dentro de una funcion anonima la cual contendra un ternario que hara una validacion, para saber si se cumple o no.
const fnAsync = () => {
    return new Promise((resolve, reject) =>  {
        (true)
        //En caso de que se resuelva, tardara 2 segundos.
        ? setTimeout(() => resolve('Async resuelto'), 200)
        //En caso de que NO se resuelva
        : reject(new Error('Hubo un error'));
    });
}

//Esta funcion hara el llamado de la primera funcion (fnAsync) y a su vez tiene unos console.logs para que podamos ver como funcionara el flujo de este llamado.
const anotherFn = async () => {
    const sometging = await fnAsync();
    console.log(sometging);
    console.log('Holaa');
}

console.log('Before');
anotherFn();
console.log('After');