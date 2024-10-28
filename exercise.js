/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let key = 13;
    let decoded = '';

    for (let i = 0; i < encoded.length; i++) {
        const charCode = encoded.charCodeAt(i);

        if ((charCode < 65 || charCode > 122) || (charCode > 90 && charCode < 97)) {
            decoded += encoded[i];
        } else {
            let newCharCode = charCode + Math.ceil(key % 26);
            if (charCode >= 97 && newCharCode > 122) {
                newCharCode = newCharCode - 122 + 96;
            }
            if (charCode <= 90 && newCharCode > 90) {
                newCharCode = newCharCode - 90 + 64;
            }
            decoded += String.fromCharCode(newCharCode);
        }
    }
    return decoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;