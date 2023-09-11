// //Ejercicio 1
// let imprimirMensaje = mensaje => console.log(mensaje)

// //Ejercicio 2
// let crearMultiplicacion = (numero1,numero2) => (numero1*numero2);

// //Ejercicio 3
// let array = [1,2,3,4,5,6,7,8,9]

// let multiplicacionArray = array.map(crearMultiplicacion)
// console.log(multiplicacionArray);

// //Ejercicio 4
// let cervezasMasAlcoholicas = beers.sort((a, b) => (b.abv - a.abv)).slice(0,10)

// //Ejercicio 5
// let cervezasMenosAmargas = beers.sort((a, b) => (a.ibu - b.ibu)).slice(0,10)

//Ejercicio 6
// let nombreCerveza = "Trashy Blonde"
// let cervezas = beers.find (object => object.name === nombreCerveza)
// console.log(cervezas);

//Ejercicio 7
//  let ibuCerveza = 9
//  function encontrarCervezaIbu (arrayCervezas,ibuCerveza) {
//  let cervezaIbu = arrayCervezas.find (object => object.ibu === ibuCerveza);
//     if (cervezaIbu) {
//     return console.log(cervezaIbu);
//     } else {
//         return console.log(`No existe cerveza con un ibu de ${ibuCerveza}`);
//     }}

// encontrarCervezaIbu (beers , ibuCerveza)

//Ejercicio 8
//  let nombreCerveza = "Pilsen Lager"
//  function encontrarCerveza (arrayCervezas,nombreCerveza) {
//  let cervezas = arrayCervezas.findIndex ((object) => object.name === nombreCerveza);
//  if (cervezas != -1){
//     return console.log(cervezas);
//  } else {
//     return console.log(`${nombreCerveza} no existe.`);
//  }
// }
// encontrarCerveza (beers,nombreCerveza)

//Ejercicio 9
// let nivelDeAlcohol = 5
// function detectarNivelDeAlcohol (array,nivelDeAlcohol){
// return array.filter((object) => object.abv <= nivelDeAlcohol).map
// ((object) => ({Nombre: object.name,
// Alcohol: object.abv,
// Amargor: object.ibu}))}
// console.log (detectarNivelDeAlcohol(beers,nivelDeAlcohol));

//Ejercicio 10
// function encontrarCerveza (arrayCervezas,nombrePropiedad,valorBooleano){
// arrayCervezas.sort ((a,b) => {
//     if (valorBooleano){
//         return a[nombrePropiedad] - b[nombrePropiedad];
//     } else {
//         return b[nombrePropiedad] - a[nombrePropiedad];
//     }
// }
// )
// return arrayCervezas.slice(0,10)
// }

// console.log(encontrarCerveza (beers,"ibu", true));

//Ejercicio 11
// let id = 1
// function generarTablaCervezas (array,id){
//     let tablaCerevezas = array.filter((object) => object.id === id).map((object) => (
//        document.getElementById("table").innerHTML =    
//     `<thead>
//     <th>Name</th>
//     <th>ABV</th>
//     <th>IBU</th>
//     </thead>
//     <tr>
//     <td>${object.name}</td>
//     <td>${object.abv}</td>
//     <td>${object.ibu}</td>
//     </tr>`
//     ))}
//     generarTablaCervezas(beers,id)
    

