/*
Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/

/*
chiedere la prima parola e metterla in una variabile
chiedere la seconda parola e metterla in un'altra variabile
SE la prima è più lunga della seconda
	stampare la prima parola
ALTRIMENTI
	SE la seconda è più lunga della prima
		stampare la seconda parola
	ALTRIMENTI
		stampare "le parole sono di uguale lunghezza"
	FINE SE
FINE SE
*/

// const firstWord = prompt('Dimmi la prima parola');
// const secondWord = prompt('Dimmi la seconda parola');

// if (firstWord.length > secondWord.length) {
// 	console.log('La parola più lunga è:', firstWord);
// 	// se serve metterlo nella pagina html
// } else {
// 	if (secondWord.length > firstWord.length) {
// 		console.log('La parola più lunga è:', secondWord);
// 		// se serve metterlo nella pagina html
// 	} else {
// 		console.log('Le due parole hanno uguale lunghezza');
// 		// se serve metterlo nella pagina html
// 	}
// }

const firstWord = prompt('Dimmi la prima parola');
const secondWord = prompt('Dimmi la seconda parola');

if (firstWord.length > secondWord.length) {
	console.log('La parola più lunga è:', firstWord);
	// se serve metterlo nella pagina html
} else if (secondWord.length > firstWord.length) {
	console.log('La parola più lunga è:', secondWord);
	// se serve metterlo nella pagina html
} else {
	console.log('Le due parole hanno uguale lunghezza');
	// se serve metterlo nella pagina html
}
