/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// 1----------------------------------------------------------------------------------------------------------------------------------
/* function caractersCount(param = "") {
    if (!param) {
        console.warn("No enviaste ninguna cadena de caracteres")
    } else {
        return String(param).length;
    }
}
console.log(caractersCount(15)); */



/* const caractersCount = (param = "") => !param ? console.warn("No ingresaste una cadena") : console.log(String(param).length)


caractersCount("Hello") */

// 2----------------------------------------------------------------------------------------------------------------------------------
/* function cutText(text, num) {
    return String(text).slice(0, num);
}
console.log(cutText("Hola ", 2)); */



/* const cutText = (text = "", num) => !text
    ? console.warn("No ingresaste una cadena")
    : console.log(String(text).slice(0, num))

cutText("Hola mundo", 4) */


// 3----------------------------------------------------------------------------------------------------------------------------------
/* function splitString(text, simbol) {
    return String(text).split(simbol);
}

console.log(splitString("hola como estas?", " ")) */


/* const splitString = (text = "", simbol) => !text
    ? console.warn("No ingresaste una cadena")
    : console.log(String(text).split(simbol))

splitString("Hola Mundo", " ")
 */
// 4----------------------------------------------------------------------------------------------------------------------------------
/* function repeatText(text, repeat) {
    let txt = String(text);
    for (let i = 0; i < repeat; i++) {
        console.log(txt);
    }
}

repeatText('console', 5) */



/* const repeatText = (text = "", repeat = undefined) => {
    if (!text) return console.warn("No ingresaste una cadena")

    if (repeat === undefined) return console.warn("No ingresaste un numero")

    if (repeat === 0) return console.warn("El valor ingresado no puede ser 0")

    if (Math.sign(repeat) === -1) return console.warn("No puedes ingresar un número negativo")

    for (let i = 0; i < repeat; i++) {
        console.log(String(text));
    }
}

repeatText("Hola Mundo", 3) */


/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

// 5 ----------------------------------------------------------------------------------------------------------------------------------

/* const invertString = (string = "") => {
    let invert = ""
    if (!string) console.warn("Ingresá una cadena de caracteres")

    if (typeof string === 'number') console.warn("No puedes ingresar numeros")

    for (let i = string.length - 1; i >= 0; i--) {
        invert += string[i];
    }
    console.log(invert)
}
invertString("Mundo")
 */




/* const invertString = (string = "") =>
    !string ? console.warm("Ingresá una cadena de texto")
        : console.log(string.split("").reverse().join(""))

invertString("mundo") */


// 6 ----------------------------------------------------------------------------------------------------------------------------------

/* const findWords = (string = "", word = "") => {
    string = string.replace(/,/g, " ");
    let stringArray = string.split(" ");
    let wordCount = 0;

    if (!string || string === undefined) console.warn("Debe ingresar una cadena.");

    if (!word || word === undefined) console.warn("Debe ingresar una palabra.");


    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].trim().toLowerCase() === word.trim().toLowerCase()) wordCount++;
    }

    console.log(`La palabra ${word} se repite: ${wordCount} veces`)
}

findWords("Hola mundo, chau mundo mundo", "Mundo") */




/* const findWords = (string = "", word = "") => {
    if (!string || string === undefined) return console.warn("Debe ingresar una cadena.");

    if (!word || word === undefined) return console.warn("Debe ingresar una palabra.");

    let i = 0,
        wordCount = 0;

    while (i !== -1) {
        i = string.indexOf(word, i);
        if (i !== -1) {
            i++;
            wordCount++
        }
    }
    return console.log(`La palabra ${word} se repite: ${wordCount} veces`)
}

findWords("hola mundo adios mundo", "mundo") */




// 7 ----------------------------------------------------------------------------------------------------------------------------------

/* const palindromo = (word = "") => {
    let reverse = word.split("").reverse().join("");

    if (word === undefined) console.warn("Introduce una palabra");

    word === reverse ? console.log("Es palíndromo") : console.log("No es palíndromo");
}

palindromo("puto") */




/* const palindromo = (word = "") => {
    if (!word) return console.warn("No ingresaste una palabra");

    lowerWord = word.toLowerCase();
    let reverse = lowerWord.split("").reverse().join("")

    return (lowerWord === reverse)
        ? console.log("Es palíndromo")
        : console.log("No es palíndromo")
}
palindromo("Salas") */






// 8 ----------------------------------------------------------------------------------------------------------------------------------

/* const deletePattern = (text, pattern) => {
    console.log(text.replace(new RegExp(pattern, 'g'), ''));
}

deletePattern("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") */




/* const deletePattern = (text = "", pattern = "") => {
    !text
        ? console.warn("Ingresa una cadena")
        : !pattern
            ? console.warn("No ingresaste el patrón")
            : console.log(text.replace(new RegExp(pattern, "ig"), ''));
}
deletePattern("xyz1, xyz2, xyz3", "xyz") */





//  ----------------------------------------------------------------------------------------------------------------------------------

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

// 9 ----------------------------------------------------------------------------------------------------------------------------------
/* const random = () => {
    let randomNumber = Math.round(Math.random() * 100) + 500;
    return console.log(randomNumber);
}
random() */



/* const random = () => console.log(Math.round(Math.random() * 100) + 500)
random() */









// 10 ----------------------------------------------------------------------------------------------------------------------------------

/* const capicuaNumb = (numb) => {
    let strNumb = String(numb)
    let reverse = strNumb.split("").reverse().join("")


    if (typeof numb !== 'number' || numb === undefined) {
        console.warn("Ingresa un tipo de dato numerico");
    } else {
        strNumb === reverse
            ? console.log(`El numero ${numb} es CAPICUA`)
            : console.log(`El numero ${numb} NO es CAPICUA`)
    }


} */







/* const capicuaNumb = (num = 0) => {
    if (!num) return console.warn("No ingresaste un número");
    if (typeof num !== 'number') return console.error("El valor ingresado no es un número");

    num = num.toString();
    let reverseNum = num.split("").reverse().join("")

    return ((num) === reverseNum)
        ? console.log(`Si es capicua ${num} y ${reverseNum}`)
        : console.log(`No es capicua ${num} y ${reverseNum}`)
} */









// 11 ----------------------------------------------------------------------------------------------------------------------------------
/* const factorialNumb = (numb) => {
    let factorial = 1
    if (typeof numb !== 'number' || numb === undefined) {
        console.warn("Ingresa un tipo de dato numerico");
    } else {
        for (let i = 1; i <= numb; i++) {
            factorial *= i
        }
        console.log(factorial)
    }
}
 */










/* const factorial = (num = undefined) => {
    if (num === undefined) return console.warn("No ingresaste un número");

    if (typeof num !== 'number') return console.error("Debes ingresar un numero")

    if (num === 0) return console.error("no puedes ingresar 0")

    if (Math.sign(num) === -1) return console.error("No puedes ingresar un número negativo")

    let factorial = 1;

    for (let i = num; i > 1; i--) {
        factorial *= i
    }

    return console.log(`El factorial de ${num} es ${factorial}`)
} */







// ----------------------------------------------------------------------------------------------------------------------------------
/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

// 12 ----------------------------------------------------------------------------------------------------------------------------------
/* const esPrimo = (num) => {

    let x = 1
    let count = 0

    if (!num) return console.warn("Debes ingresas un numero entero positivo")
    if (num === undefined) return console.warn("Debes ingresas un numero")
    if (typeof num !== 'number') return console.warn("No puedes ingresar otro tipo de dato")
    while (x <= num) {
        if (num % x === 0) {
            count++
        }
        x++
    }

    return count === 2
        ? console.log(`El nuumero ${num} es PRIMO`)
        : console.log(`El nuumero ${num} NO es PRIMO`)
} */






/* const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== 'number') return console.error("Debes ingresar un numero")

    if (numero === 0) return console.error("no puedes ingresar 0")
    if (numero === 1) return console.error("no puedes ingresar 1")

    if (Math.sign(numero) === -1) return console.error("No puedes ingresar un número negativo")

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.log(`El numero ${numero} No es primo`)
        : console.log(`El numero ${numero} es primo`)
} */








// 13 ----------------------------------------------------------------------------------------------------------------------------------

/* const esPar = (num) => {
    if (num === undefined) return console.warn("Debes ingresas un numero")
    if (typeof num !== 'number') return console.warn("No puedes ingresar otro tipo de dato")

    if (num % 2 === 0) {
        return console.log(`El número ${num} es PAR`)
    } else {
        return console.log(`El número ${num} es IMPAR`)
    }
} */



/* const numeroParImpar = (numero) => {
    if (numero === undefined) return console.warn("Debes ingresas un numero")
    if (typeof numero !== 'number') return console.warn("No puedes ingresar otro tipo de dato")


    return (numero % 2 === 0)
        ? console.log(`El numero ${numero} es PAR`)
        : console.log(`El numero ${numero} es IMPAR`)
}

numeroParImpar(-398) */








// 14 ----------------------------------------------------------------------------------------------------------------------------------
/* const convertirGrados = (n, g) => {
    g = g.toLowerCase()

    if (n === undefined) return console.warn("Debe introducir un numero de grado")
    if (typeof n !== 'number') return console.warn("Debe introducir un numero")
    if (g === undefined) return console.warn("Debe introducir el tipo de grado Celsius o Fahrenheit")
    if (typeof g !== 'string') return console.warn("Debe introducir 'C' para grados Celsius o 'F' para Fahrenheit")
    if (g !== 'c' && g !== 'f') return console.warn("Grado no valido")

    if (g === 'c') {
        let fahrenheit = (n * 9 / 5) + 32
        return console.log(`${n} grados Celsius son ${fahrenheit} grados Fahrenheit`);
    } else {
        let celsius = (n - 32) * 5 / 9
        return console.log(`${n} grados Fahrenheit son ${celsius} grados Celsius`);
    }
}
convertirGrados(0, 'F') */


/* const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn("No ingresaste grados a convertir")
    if (typeof grados !== 'number') return console.warn(`El valor ${grados} NO es un numero`)
    if (typeof unidad !== 'string') return console.warn(`El valor ${unidad} ingresado No es una cadena de texto`)
    if (unidad.length !== 1 || !/C|F/.test(unidad)) return console.warn('Valor de unidad no reconocido')


    if (unidad === 'C') {
        return console.info(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`)
    } else if (unidad === 'F') {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`)
    }
} */





