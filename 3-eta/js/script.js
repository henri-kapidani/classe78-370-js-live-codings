/*
chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande (ignorando il caso che siano uguali)
*/

/*
chiedere età 1
chiedere età 2
SE età 1 > età 2
	stampare età 1
ALTRIMENTI
	stampare età 2
FINE SE
*/

const age1 = parseInt(prompt('dammi l\'età 1')); // '6'

let age2 = prompt('dammi l\'età 2'); // '10'
age2 = parseInt(age2);

if (age1 > age2) {
	console.log(age1);
} else {
	console.log(age2);
}
