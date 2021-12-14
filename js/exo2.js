/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 */

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById('button');

button.addEventListener('click', calcul)

function calcul(e){
    let result = parseFloat(input1.value) + parseFloat(input2.value);

    document.getElementById('result').innerHTML = result
    e.preventDefault()
}

