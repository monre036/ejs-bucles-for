// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
// Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const countdown = number => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};

countdown(7);
console.log('');

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const addTenNumbers = array => {
  let addition = 0;
  for (const number of array) {
    addition += number;
  }
  console.log(addition);
};

addTenNumbers([2, 2, 2, 2, 2, 2, 2, 2, 2, 4]);
console.log('');

// Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10.
const multiplicationTable = number => {
  for (let i = 0; i <= 10; i++) {
    console.log(number * i);
  }
};

multiplicationTable(4);
console.log('');

// Crea una función que reciba el año actual y tu edad, la función debe imprimir: "naciste en el año X",
// "En el año X cumpliste 1 año", "En el año X cumpliste 2 años", "En el año X cumpliste 3 años"...
const yearsOld = (currentYear, currentAge) => {
  for (let i = 0; i <= currentAge; i++) {
    if (i == 0) {
      console.log(`Naciste en el año ${currentYear - currentAge}.`);
    } else {
      console.log(
        `En el año ${currentYear - currentAge + i} cumpliste ${i} años.`
      );
    }
  }
};

yearsOld(2024, 22);
console.log('');

// Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.
const evenNumbers = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

evenNumbers(0, 25);
console.log('');

// Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.
const numsRandomRepeated = () => {
  const array1 = [];
  const array2 = [];

  for (let i = 0; i < 5; i++) {
    array1.push(Math.floor(Math.random() * 21));
    array2.push(Math.floor(Math.random() * 21));

    for (let j = 0; j < array1.length; j++) {
      if (array1[j] == array2[i]) {
        console.log(`El valor ${array1[j]} está en ambos arrays.`);
      }
    }
  }
  console.log(`${array1} / ${array2}`);
};

numsRandomRepeated();
console.log('');

// Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por sí mismo.
const primeNumber = number => {
  let moduleCount = 0;
  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      moduleCount++;
    }
  }
  if (moduleCount == 1) {
    console.log(`El número ${number} es primo.`);
  } else {
    console.log(`El número ${number} no es primo.`);
  }
};

primeNumber(43);
console.log('');

// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 - Cuadrado: 4 - Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente).
const tenNumbersPows = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Número: ${array[i]} - Cuadrado: ${Math.pow(
        array[i],
        2
      )} - Cubo: ${Math.pow(array[i], 3)}`
    );
  }
};

tenNumbersPows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('');

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
const vocalsToUpperCase = word => {
  let finalWord = '';
  for (const letter of word) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      finalWord += letter.toUpperCase();
    } else {
      finalWord += letter;
    }
  }
  console.log(finalWord);
};

vocalsToUpperCase('aireo');
console.log('');

// Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal.
const totalVocals = word => {
  let counterA = 0;
  let counterE = 0;
  let counterI = 0;
  let counterO = 0;
  let counterU = 0;

  for (const letter of word) {
    if (letter.toLowerCase() === 'a') {
      counterA++;
    } else if (letter.toLowerCase() === 'e') {
      counterE++;
    } else if (letter.toLowerCase() === 'i') {
      counterI++;
    } else if (letter.toLowerCase() === 'o') {
      counterO++;
    } else if (letter.toLowerCase() === 'u') {
      counterU++;
    }
  }

  console.log(`La vocal A se repite ${counterA} veces.`);
  console.log(`La vocal E se repite ${counterE} veces.`);
  console.log(`La vocal I se repite ${counterI} veces.`);
  console.log(`La vocal O se repite ${counterO} veces.`);
  console.log(`La vocal U se repite ${counterU} veces.`);
};

totalVocals('SUPERCALIFRAGILISTICOESPIALIDOSO');
console.log('');

// Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa".
const intersperseLetters = (word1, word2) => {
  let finalWord = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      finalWord += word1[i];
    }
    if (i < word2.length) {
      finalWord += word2[i];
    }
  }
  console.log(finalWord);
};

intersperseLetters('hola', 'adios');
console.log('');

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM".
const reverseWord = word => {
  let finalWord = '';
  for (let i = word.length; i >= 0; i--) {
    finalWord += word.charAt(i);
  }
  console.log(finalWord);
};

reverseWord('Mariposas');
console.log('');

// Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const evenOdd = array => {
  const arrayEven = [];
  const arrayOdd = [];

  for (const number of array) {
    const numRandom = Math.floor(Math.random() * 11 + 1);
    if ((number * numRandom) % 2 == 0) {
      arrayEven.push(number * numRandom);
    } else {
      arrayOdd.push(number * numRandom);
    }
  }
  console.log(array);
  console.log(arrayEven);
  console.log(arrayOdd);
};

evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
