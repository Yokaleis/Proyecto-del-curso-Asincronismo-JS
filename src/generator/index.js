//Clase 16: Generators
/*Generator: consta de una función generadora que muestra un objeto iterable. 
La palabra reservada yield se usa para pausar y reanudar una función generadora. 
Su estructura consta con la palabra function seguido de un asterísco * : function* ésta es una función generadora heredada.*/

/*Primer ejemplo */

//Creamos la funcion generadora la cual contiene todos los datos a iterar
function* gen() {
    yield 'Pizza';
    yield 'Chocolate';
    yield 'Cotufas';
}

const g = gen();

/*Se imprime en consola utilizando el metodo next el cual permite acceder a la función del generador y obtener con yield dos 
valores: value y el estado de done, si tenemos yield 'pizza'; en consola se imprimira: { value: 'Pizza', done: false }.
Será true cuando se ejecute cuatro veces next() y la salida mostrará {value: undefined, done: true}. Ésto se debe a que ya no hay mas nada 
que mostrar, porque se mandó a imprimir un cuarto elemento y el generador solo tiene 3 yield.*/
console.log(g.next().value); //Pizza
console.log(g.next().value); //Chocolate
console.log(g.next().value); //Cotufas


/*Segundo ejemplo usandp for... este ejemplo difiere al primero en que este recibe como argumento un array*/
/*Declaramos la funcion pasando un argumento, en este caso un array de cosas */
function* iterate (array) {
    for(let value of array) {
        yield value
    }
}

//Contruimos el array en una constante
const it = iterate(['Lapices', 'Borradores', 'Boligrafos', 'Libretas']);

//Imprimimos cada uno de los valores del array en consola
console.log(it.next().value); //Lapices
console.log(it.next().value); //Borradores
console.log(it.next().value); //Boligrafos
console.log(it.next().value); //Libretas
console.log(it.next().value); //Undefined por que ya no existe otro elemento en el array