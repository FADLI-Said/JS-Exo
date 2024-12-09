//Exo-1
// let message = "Salut";
// alert(message);

// Exo-2
// let partOne = "Hello"
// let partTwo = "world"
// alert(partOne + " " + partTwo)

// Exo-3
// let firstName = "Saïd";
// let age = 22;
// let city = "Havre";
// alert("Je m'appelle "+firstName+", j'ai "+age+" et j'habite au "+city)

// Deuxième façon d'écrire alert
// alert(`Je m'appelle ${firstName}, j'ai ${age} et j'habite au ${city}`)
// console.log(typeof firstName +" "+ typeof age +" "+ typeof city);

// Exo-4
// let Nom = "";
// let Prénom = "";
// let Age = 0;
// let AdresseMail = "";
// Nom = prompt("Quel est ton Nom ?")
// Prénom = prompt("Quel est ton Prénom ?")
// Age = prompt("Quel est ton Age ?")
// AdresseMail = prompt("Quel est ton Adresse Mail ?")
// alert(`Nom : ${Nom} \nPrénom : ${Prénom} \nAge : ${Age} ans \nAdresse Mail : ${AdresseMail}`)

// Exo-5
// let firstNumber = 0;
// let secondNumber = 0;
// firstNumber = prompt("Donne moi un premier nombre")
// secondNumber = prompt("Donne moi un deuxièmme nombre")
// alert(`Le résultat de l'addition est : ${firstNumber} + ${secondNumber} = ${parseInt(firstNumber)+parseInt(secondNumber)}`)

// partie 2

// Exo-1
// let age =0
// age = prompt("Donne moi ton age")
// if (age>=18) {
//     alert("L'Utilisateur est majeur !")
// } else {
//     alert("l'utilisateur est mineur !")
// }

// Exo-2
// let number = 0;
// number = prompt("Donne moi un nombre")
// if (number%2==0) {
//     alert("Le nombre est pair")
// } else {
//     alert("Le nombre est impair")
// }

// Exo-3
// let password = "Bonjour";
// password = prompt("Donne un mot de passe d'identification")
// if (password!="Bonjour") {
//     alert("Mauvais mot de passe")
// } else {
//     alert("Hello Mr Anderson")
// }

// Exo-4
// let gender = prompt("Donne moi ton sexe, Homme ou Femme (H/F)")
// let age = prompt("Donne moi ton age")
// if (gender=="H" & age>=18) {
//     alert("L'utilisateur est de type masculin et majeur")
// }
// if (gender=="H" & age<18) {
//     alert("L'utilisateur est de type masculin et mineur")
// }
// if (gender=="F" & age>=18) {
//     alert("L'utilisatrice est de type féminin et majeure")
// }
// if (gender=="F" & age<18) {
//     alert("L'utilisatrice est de type féminin et mineur")
// }

// Exo-5
// let note = prompt("Donne une note sur 20")
// if (note==0) {
//     alert("Un rendez-vous sera programmé en raison de la moyenne.")  
// }
// if (note>0 & note<=5) {
//     alert("Trimestre insuffisant.")
// }
// if (note>5 & note<=10) {
//     alert("Trimestre moyen.")
// }
// if (note>10 & note<=13) {
//     alert("Bon trimestre.")
// }
// if (note>13 & note<=18) {
//     alert("Excellent trimestre.")
// }
// if (note>18) {
//     alert("Félicitations.")
// }

// Exo-6
// let month = parseInt(prompt("Donne moi le numéro du mois entre 1 et 12"));
// switch (month) {
//     case 1:
//         alert("Le chiffre 1 correspond au mois de Janvier");
//         break;
//     case 2:
//         alert("Le chiffre 2 correspond au mois de Février");
//         break;
//     case 3:
//         alert("Le chiffre 3 correspond au mois de Mars");
//         break;
//     case 4:
//         alert("Le chiffre 4 correspond au mois de Avril");
//         break;
//     case 5:
//         alert("Le chiffre 5 correspond au mois de Mai");
//         break;
//     case 6:
//         alert("Le chiffre 6 correspond au mois de Juin");
//         break;
//     case 7:
//         alert("Le chiffre 7 correspond au mois de Juillet");
//         break;
//     case 8:
//         alert("Le chiffre 8 correspond au mois de Août");
//         break;
//     case 9:
//         alert("Le chiffre 9 correspond au mois de Septembre");
//         break;
//     case 10:
//         alert("Le chiffre 10 correspond au mois de Octobre");
//         break;
//     case 11:
//         alert("Le chiffre 11 correspond au mois de Novembre");
//         break;
//     case 12:
//         alert("Le chiffre 12 correspond au mois de Décembre");
//         break;
//     default:
//         alert("Hmar")
// }

// Exo-7
// let number = prompt("Donne moi un nombre")
// number % 2 == 0
//     ? alert("Pair")
//     : alert("Impair")

// Exo-8
// if (window.confirm("En cliquant sur OK, je confirme que je rentre sur ce site en 'mon âme et conscience'")) {
//     alert("L'utilisateur a cliqué OK.")
// } else {
//     alert("L'utilisateur n'a pas validé.")
// }

// Part-3
// Exo-1
// let number = 0;
// while (number<100) {
//     number++;
//     console.log(number);
// }

// Exo-2
// let number = 101
// while (number>0) {
//     number = number-1
//     console.log(number);

// }

// Exo-3
// let nb1 = 3
// let nb2 = 6
// while (nb1+nb2<2023) {
//     console.log(nb1+nb2);
//     nb2 = nb1 + nb2
// }

// Exo-4
// let message = "Message"
// let number = 0
// while (number < 10) {
//     console.log(message + " " + number);
//     number++
//     if (number == 10) {
//         console.log(message + " " + number + ", C'est le dernier message !");
//     }
// }

// Exo-5
// let message = "Vendredi 13";
// let i = 0;
// for (let i = 0; i < 13; i++) {
//     console.log(message);   
// }

// Exo-6
// let number = 0;
// for (let number = 0; number < 100; number=number+3) {
//     console.log(number);   
// }

// Exo-7
// let number =20 ;
// for (let number = 20; number >= 0; number=number-1) {
//     if (number===20) {
//         console.log("Start !!");
//     }   
//     console.log(number);  
//     if (number===0) {
//         console.log("Finish !!");      
//     }
// }

// Exo-8
// let number = 0;
// for (let number = 1; number <= 100; number++) {
//     if (number%3!=0 & number%5!=0 & (number%3!=0 & number%5!=0)) {
//         console.log(number);
//     }
//     if (number%3==0 & number%5!==0) {
//         console.log("Fizz");
//     }
//     if (number%5==0 & number%3!==0) {
//         console.log("Buzz");
//     }
//     if (number%3==0 & number%5==0) {
//         console.log("FizzBuzz");    
//     }
// }

// Exo-9
// let string = "";
// let number =0;
// for (let number = 1; number <= 10; number++) {
//     if (number<10) {
//         string=string + number + "-"
//     }
//     else{
//         string=string + number
//     }
// }
// console.log(string);
