/* === Exo11 ===
 *
 * Compléter la ligne, en utilisant uniquement les fonctions :
 * .next(), .prev(), .parent(), .children(), .eq(), .text()
 *
 * Le but : remplacer "Challenge à faire" par "Challenge réussi !"
 */

$('#je-suis-ici');
//console.log(monId[0])

//$('body').find('div').eq(3).text('Challenge réussi !') j'avais bon mais ton site est mal foutu :(

$('#container > div').children().eq(2).text('Challenge réussi !')

// Stop ! Tests, on ne touche pas :P
check.exo11();
