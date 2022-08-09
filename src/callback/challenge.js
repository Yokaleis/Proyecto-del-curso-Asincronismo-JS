/*
Clase 7: XMLHTTPRequest: Protocolo que permite hacer peticiones a servicios en la nube. 
Los 5 Estados de un llamado XMLHTTPRequest:
0 - No se ha inicializado
1 - Loading
2 - Se ha cargado
3 - Trabajando con la solicitud (descargando)
4 - Completado

Documentacion: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

*/
const XHMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XHMLHttprequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

//Clase 8: Fetch Data
/*Llamado de la funcion pasandole como argumentos la variable que contiene la API y concatenando los productos que contiene esa API, 
ademas de eso como parametro tambien le pasamos una funcion anonima la cual recibe como parametro un error y los datos traidos de la api*/
fetchData(`${API}/products`, function(error1, data1){
    //Validamos si hubo un error al traer los datos y los mostramos por consola
    if (error1) return console.error(error1);
    //Volvemos a llamar a la funcion fechtdata pero esta vez accediendo a la primera data que ya habiamos llamado y añadiendole otra funcion anonima para determinar nuevamente un posible error
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
    //Anidamos un tercer llamado a fechtdata pero esta vez invocando las categorias de esos productos con el atributo id del objeto data 2 de la funcion aterior
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {//En este caso se puede hacer uso del Optional Caining el cual evalua o pregunta si esa propiedad existe o no para evitar arrojar error, en dado caso de que no exista arroja undefined
        if (error3) return console.error(error3);
        //Mostramos la informacion de cada una de las peticiones
        console.log(data1[0]);
        console.log(data2.title);//Mostramos en consola el titulo
        console.log(data3.name);//Mostramos en consola el nombre de la categoria 
    });
    });
} );

//Clase 9: Callback hell - Son multiples callbacks anidados y hacen que el codigo sea dificil de leer
/*Colocamos un script en package.js para correr el codigo dentro de challenge.js desde la consola*/

