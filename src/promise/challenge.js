//Case 11: Fetch - Llamados a la api usando promises (Para trabajar con Fetch debemos instalarlo npm i node-fetch)
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

//Creamos una funcion fetchdata para obtener la informacion del api
function fetchData(urlApi) {
    return fetch(urlApi)
};

/* //Llamamos la api con su valor en este caso productos
fetchData(`${API}/products`)
    //usamos then para saber que hay en la respuesta de la llamada a la api y la tansformamos en un json
    .then(response => response.json())
    //Mostramos para saber que incluye esa peticion, en este caso mostramos los productos de la api
    .then(products => {
        console.log(products);
    })
    //Si necesitamos anidar mas thens lo podemos hacer
    .then(() => {
        console.log('Buen trabajo!');
    })
    //Por ultimo un catch para errores y mostrarlos en consola
    .catch(error => console.log(error)); */

//Creamos la logica para hacer vaios llamados (llamado multiple)

//Primer llamado: llamamos previamente a la api
fetchData(`${API}/products`)
//Transformarmos la respuesta en json
    .then(response => response.json())
    //Obtenemos los productos de la api
    .then(products => {
        console.log(products);
        //Segunda peticion: llamamos al primer elemento de los productos con su id
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        //Tercera peticion: llamamos la categoria del producto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    //El finally es opcional, pero es recomendable mostrar que ya finalizo la solicitud
    .finally(() => console.log('Finally'));