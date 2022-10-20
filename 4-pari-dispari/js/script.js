/*
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari (cioè, per chi non le sa come suggerito da Giovanni, i numeri vanno prima sommati e poi va visto se la somma è pari o dispari).
*/

/*
chiedere pari o dispari e metterlo in una variabile (divisibility)
chiedere un numero tra 1 e 9 e metterlo in una variabile (numUser)
generare un numero casuale tra 1 e 9 e metterlo in una variabile (numRandom)
sommare numUser e numRandom e metterlo nella variabile sum

dividere il numero per due e mettere il resto nella variabile (reminder)

SE (divisibility = 'pari' E reminder = 0) OPPURE (divisibility = 'dispari' E reminder = 1)
	stampare "Hai vinto"
ALTRIMENTI
	stampare "Hai perso"
FINE SE

*/

/* soluzione alternativa
SE divisibility = 'pari'
	SE reminder = 0
		stampare "Hai vinto"
	ALTRIMENTI
		stampare "Hai perso"
	FINE SE
ALTRIMENTI divisibility = 'dispari'
	SE reminder = 1
		stampare "Hai vinto"
	ALTRIMENTI
		stampare "Hai perso"
	FINE SE
FINE SE
*/

const divisibility = prompt('Pari o dispari?').toLowerCase();
const numUser = parseInt(prompt('Dammi un numero tra 1 e 9'));
if (numUser >= 1 && numUser <= 9) {
	const numRandom = Math.floor(Math.random() * 9 ) + 1;
	console.log('Il valore di numRandom è:', numRandom);
	/*
	Math.floor(0.25678542 * 9 ) + 1
	Math.floor(2.31106878) + 1
	2 + 1
	*/

	const sum = numUser + numRandom;
	console.log('sum:', sum);
	const reminder = sum % 2;

	if ((divisibility === 'pari' && reminder === 0) || (divisibility === 'dispari' && reminder === 1)) {
		console.log('hai vinto');
	} else {
		console.log('hai perso');
	}
} else {
	alert('Ma non capisci cosa ti dico?');
}
