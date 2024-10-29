/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let resultado = '';

    for (let caracter of encoded) {
        if (caracter >= 'A' && caracter <= 'Z') {
            resultado += String.fromCharCode(((caracter.charCodeAt(0) - 65 + 13) % 26) + 65);
        } 
        else if (caracter >= 'a' && caracter <= 'z') {
            resultado += String.fromCharCode(((caracter.charCodeAt(0) - 97 + 13) % 26) + 97);
        } 
        else {
            resultado += caracter;
        }
    }

   return resultado;
   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;