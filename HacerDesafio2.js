/*
Micro desafío 2:

Instrucciones

1. Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
(datosBici.js) y crear un objeto literal con el nombre de (dhBici). Este último
tendrá como primer atributo (bicicletas), y debe contener la lista de las
bicicletas importadas.
2. Dentro del objeto literal crea las funcionalidades que el Tech Leader requiere
que desarrollemos en base a lo exigido por el cliente:
a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
la bicicleta y devuelva la bici que corresponde. En caso de no
encontrarla, deberá retornar null. Estamos optimizando nuestro código,
por lo que deberíamos utilizar el método filter.
b. Crear una funcionalidad de (venderBici) que reciba el (id). En caso de
encontrar la bicicleta, debe asignarle el estado de vendida (si) y retornar
todos los datos de la bicicleta. En el caso de no encontrar la bicicleta,
debe retornar al usuario: “Bicicleta no encontrada”. Puedes aprovechar
la función (buscarBici).
c. Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de
devolver todas aquellas bicicletas que aún no estén vendidas. Recuerda
que estamos optimizando nuestro código, por lo que deberíamos utilizar
el método filter.
d. Finalmente el Tech Leader nos felicita por todo el trabajo y nos pide un
último esfuerzo. Tenemos que desarrollar una funcionalidad
(totalDeVentas) que retorne la suma del valor de todas las ventas
realizadas. Se recomienda utilizar la función reduce.

3. Una vez hechas todas estas tareas, debemos comprobar la funcionalidad de las
mismas, usando el console.log() e invocando cada una de ellas pasando los
parámetros.
*/