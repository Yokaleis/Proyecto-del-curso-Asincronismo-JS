//Clase 14: Try Catch
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';
//Otra forma de usar async y await


/*Creamos la funcion fetchdata la cual recibe como parametro la api y la convierte (retornandola) en un objeto json y luego 
la retorna al usuiario mediante la const data. 
Esta es la estructura convencional de una función en la cual se agrega el async al inicio.
La palabra await se utiliza dentro de las funciones async. */
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}
/*Creamos otra funcion se encarga de solicitar los productos, un producto en particualar (el primero de la lista) con su id y la categoria
Esta es la estructura de arrow function/ funcion flecha donde async esta ANTES de los argumentos */
const anotherFunction = async (urlApi) => {
    try {
        //Primera llamada de todos los productos usando la funcion fetchData la cual contiene la api y transformando esa url.
        const products = await fetchData(`${urlApi}/products`);
        /* Segunda llamada de un solo producto con su id, transformamos la url con los datos que ya obvimos de 
        la primera llamada (despues de llamar a todos los productos, llamamos tambien el primer (el primer elemento del arreglo) 
        producto de la lista)*/
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        /*Tercera llamada a la categoria de la solicitud anterior, o sea, la categoria del producto al cual llamamos,
        ya no usamos products si no categories y le especificamos la segunta llamada (product)*/
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        

        /**Imprimimos en consola cada una de las llamadas*/
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}
/*Por último llamamos a la dunción pasandole como parametro la api*/
anotherFunction(API);