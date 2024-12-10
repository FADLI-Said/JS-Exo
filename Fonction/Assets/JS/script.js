// Exemple
// let a = 10
// let b = 11
// function additionner(a,b) {
//     return a + b;
// }
// document.write(`<p>Addition de 10 et 11 = ${additionner(10,11)}</p>`)
// document.write(`<p>Addition de 2 et 3 = ${additionner(2,3)}</p>`)


// Exo-1
// let dividende = Number(prompt("Donne moi un premier nombre"))
// let diviseur = Number(prompt("Donne moi un deuxième nombre"))

// function calculerPGCD(dividende, diviseur) {

//         if (diviseur == 0) {
//             document.write(`<p>Le diviseur ne peut pas être 0</p>`);
//         } else {
//             r = 1
//             while (r != 0) {
//                 r = dividende % diviseur
//                 if (r != 0) {
//                     dividende = diviseur
//                     diviseur = r
//                 }
//             }
//         }
//     return diviseur
// }

// document.write("Le plus grand diviseur commun = " + calculerPGCD(dividende, diviseur))

// Grâce a cette fonction plus besoin de réécrire tout ce code, juste besoin de l'appeler
// calculerPGCD


// Exo-2
// "use strict";
// function determinerPGCD(dividende, diviseur) {
//     let r;
//     do {
//         r = dividende%diviseur;
//         if (r!=0) {
//             dividende = diviseur
//             diviseur = r
//         }
//     } while (r!=0);
//     return diviseur
// }


// Exo-4
// "use strict"
// function calculerParamètre(...argument) {
//     let perimetre=0;
//     switch (argument.length) {
//         case 0:
//             console.log("erreur " + perimetre);
//             break;

//         case 1:
//             perimetre = argument[0] * 4
//             console.log("carré " + perimetre);
//             break;

//         case 2:
//             perimetre = argument[0]*2 + argument[1]*2
//             console.log("rectangle " + perimetre);
//             break;

//         case 3:
//             perimetre = argument[0] + argument[1] + argument[2]
//             console.log("triangle " + perimetre);
//             break;

//         default:
//             for (let i = 0; i < argument.length; i++) {
//                 perimetre+= argument[i]              
//             }
//             console.log("polygone " + perimetre);
//     }
// }

// calculerParamètre(4,8,5,5)
