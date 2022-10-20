/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/


let firstName = prompt("Qual è il tuo nome?");
console.log(firstName);
const lastName = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore preferito?");
const password = firstName + lastName + color + '22';
// const password = `${firstName}${lastName}${color}22`;

document.getElementById('password').innerHTML = password;

firstName = 'nuovo nome';
// console.log(firstName);


// document.getElementById('password').innerHTML = prompt("Qual è il tuo nome?") + prompt("Qual è il tuo cognome?") + prompt("Qual è il tuo colore preferito?") + '22';