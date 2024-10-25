// Importar la función sum del archivo app.js
const { sum } = require('./app.js'); // llamo a mi sum

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9); // almaceno el resultado de mi funcion suma

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// euro a dolar 
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


// dolar a yen 
test("one dollar should be 146.26 yens", function(){
    const {fromDollarToYen} = require('./app.js'); // coloco el nombre de mi funcion y de donde viene
  // const yen = fromDollarToYen(2);
  // const exp = 2 * 146.26; // guardo el valor esperado, convertir dos dolares

    expect(fromDollarToYen(2)).toBe(292.52);
})

test("one yen should be 0.0051", function(){
  const{fromYenToPound} = require('./app.js');

  expect(fromYenToPound(3)).toBe(3);
})