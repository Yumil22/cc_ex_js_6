/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */      

    // Función auxiliar para rotar un carácter
    const rotateChar = (char) => {
        // Verificamos si es una letra mayúscula
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
        }
        // Verificamos si es una letra minúscula
        else if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
        }
        // Si no es una letra, devolvemos el carácter sin cambios
        return char;
    };

    // Convertimos la cadena original en un arreglo y rotamos cada carácter
    encoded = encoded.split('').map(rotateChar).join('');
    
   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;