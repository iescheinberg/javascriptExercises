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



const repeatText = (text = "", repeat = undefined) => {
    if (!text) return console.warn("No ingresaste una cadena")

    if (repeat === undefined) return console.warn("No ingresaste un numero")

    if (repeat === 0) return console.warn("El valor ingresado no puede ser 0")

    if (Math.sign(repeat) === -1) return console.warn("No puedes ingresar un número negativo")

    for (let i = 0; i < repeat; i++) {
        console.log(String(text));
    }
}

repeatText("Hola Mundo", 3)


// 5----------------------------------------------------------------------------------------------------------------------------------
