//Clase 12: Aplicacion que nos permite guardar un producto en la api
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';


//Creamos la funcion para agregar la data en la api
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body:  JSON.stringify(data)
    });
    return response;
}


const data = {
    "title": "Zapatos Geniales",
    "price": 72.99,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }


  //Usamos la funcion para agregar un producto a la api
  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));