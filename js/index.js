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




const deletePattern = (text = "", pattern = "") => {
    !text
        ? console.warn("Ingresa una cadena")
        : !pattern
            ? console.warn("No ingresaste el patrón")
            : console.log(text.replace(new RegExp(pattern, "ig"), ''));
}
deletePattern("xyz1, xyz2, xyz3", "xyz")