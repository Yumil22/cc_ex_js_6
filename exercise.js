/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let decoded = "";
    const shift = 13;

    for (let i = 0; i < encoded.length; i++){

        let ascii = encoded[i].charCodeAt();

        if (ascii >= 65 && ascii <= 90) {

            ascii = ((ascii - 65 + shift) % 26) + 65;

        } else if (ascii >= 97 && ascii <= 122) {
            ascii = ((ascii - 97 + shift) % 26) + 97;
        }

        decoded += String.fromCharCode(ascii);
    }
    
    return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;