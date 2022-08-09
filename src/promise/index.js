//Clase 10: Qué son las promesas -  son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no.
/*Las promesas tienen 3 Estados:
1. Pendiente:  estado inicial, ni cumplido ni rechazado.
2. Cumplido: significa que la operación se completó con éxito
3. Rechazado: significa que la operación falló 
*/

const promise = new Promise(function(resolve, reject) {
    resolve('Hello!');
});

const cows = 18;
const countCows = new Promise(function(resolve, reject){
    if (cows > 10) {
        resolve(`Contamos con ${cows} vaquitas en la granja`);
    } else {
        reject('No contamos con suficientes vaquitas');
    }
});

/*Con .then obtenemos el resultado y con .catch podemos obtener el error (el reject) tambien con .finally podemos imprimir un mensaje que indique
si la promesa fue ejecutada*/
countCows.then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));

