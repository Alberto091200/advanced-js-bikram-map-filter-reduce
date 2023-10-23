//RESUELVE LOS EJERCICIOS AQUI

// 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.

// function elevados(numbers) {

//     const resultados = [];

//     for (let i = 0; i < numbers.length; i++) {
//         const resultado = numbers[i] * numbers[i]
//         resultados.push(resultado)
//     }
//     return resultados;
// }

// let numbers = [4, 5, 6, 7, 8, 9, 10]

// console.log(elevados(numbers))


const numeros = [4, 5, 6, 7, 8, 9, 10]
const elevados = numeros.map(numero => numero * numero);

console.log(elevados)



// 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const resultados = foodList.map(comida => {
    if (comida === 'Pizza') {
        return 'Como soy de Italia, amo comer ' + comida;
    } else if (comida === 'Ramen') {
        return 'Como soy de Japón, amo comer ' + comida;
    } else if (comida === 'Paella') {
        return 'Como soy de Valencia, amo comer ' + comida;
    } else {
        return 'Aunque no como carne, el ' + comida + ' es sabroso';
    }
});

console.log(resultados);


// 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

    const resultadoEjercicio3 = staff.map(persona => {
        const hobbies = persona.hobbies.join(' y ');
        return `${persona.name} es ${persona.role} y le gusta ${hobbies}`;
    });
  
  console.log(resultadoEjercicio3);

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultadoEjercicio4 = numeros.filter(numero => numero % 2 !== 0)

console.log(resultadoEjercicio4)

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

    
const resultadoEjercicio5 = foodList2.filter(food => food.isVeggie).map(food => `Que rico ${food.name} me voy a comer!`); 

console.log(resultadoEjercicio5);

// 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const resultadoEjercicio6 = inventory.filter(item => item.price > 300).map(item => item.name);

console.log(resultadoEjercicio6);

// 7.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

const numerosEjericio7 = [39, 2, 4, 25, 62];
const resultadoEjercicio7 = numerosEjericio7.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(resultadoEjercicio7)

// 8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Alberto',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const resultadoEjercicio8 = sentenceElements.reduce((accumulator, palabra) => accumulator + ' ' + palabra, '');

console.log(resultadoEjercicio8);

// 9.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const resultadoEjercicio9 = books
  .filter(book => book.category === 'code') 
  .reduce((total, book) => total + book.price, 0);

console.log(resultadoEjercicio9);