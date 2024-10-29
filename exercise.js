/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const array_letters = encoded.split('');

    let new_encoded = []

    for (let i = 0; i < array_letters.length; i ++ ){
        let j = alfabeto.indexOf(array_letters[i]);
        if (j !== -1) {
            new_encoded.push(alfabeto[(j + 13) % 26]);
        } else {
            new_encoded.push(array_letters[i]);
        }  
    }
    
    answer = new_encoded.join('');

   return answer;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;