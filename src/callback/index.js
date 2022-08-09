/*Callback:
es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
¿Por qué necesitamos callbacks?
Porque hay algunos casos en los que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no secuencial. Esto se llama programación asíncrona.
Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.

*/

//EJEMPLO 1

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log('La suma total es : ' + calc(3, 2, sum));

//EJEMPLO 2

setTimeout(() => {
    console.log("JS, necesito vivir en la playa haz tu magia 😁")
}, 3000);

//EJEMPLO 3

function sayHi (name) {
    console.log(`Ella, ${name}` + ', vivirá en la playa 😁');
}

setTimeout(sayHi, 3000, 'Yokastina');