// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
const fromDollarToYen = (ValueInDollar) =>{
let valueinYen = ValueInDollar * 146.26;
return valueinYen;
}

const fromEuroToDollar = (valueInEuro) =>{
// Convertimos el valor a dólares
let valueInDollar = valueInEuro * 1.07;
// Retornamos el valor en dólares
return valueInDollar;
}

const fromYenToPound = (ValueinPound) =>{
  //  1 yen ---> 0.0051 pound
  let valueInPound =  ValueinPound * 1
  return valueInPound;
}



module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};



