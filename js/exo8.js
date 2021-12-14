/* === Exo8 ===
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 *
 * Par exemple :
 *  - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 *  - ['css', 'html', 'js', 'php'] : 'html'
 *  - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 *  - [] : false
 */


function getLongestString(arr) {
let MPL= 0;
let PMPL=0;

    //console.log(arr)
    if ( arr == 0 ) {
        return false 
    }
    else {
        for (i=0 ; i< arr.length ; i++) {
        let mot =  arr[i].length;
            if ( MPL < mot) {
                MPL = mot ;
                PMPL=arr[i];
            }   
        }
    }
    return PMPL

}




// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
