let dividende = 0
let diviseur = 0
let r = 0
let continuer = "o"

while (continuer == "o") {
    dividende = Number(prompt("Donne moi un premier nombre"))
    diviseur = Number(prompt("Donne moi un deuxième nombre"))

    if (diviseur==0) {
        alert("Le diviseur ne peut pas être 0");
    } else{
        r = 1

        while (r!=0) {
            r = dividende % diviseur
            if (r!=0) {
                dividende = diviseur
                diviseur = r
            }
        }
        alert("Affiche le PGCD est : " + diviseur)
    }
    continuer = prompt("Voulez-vous continuer o pour Oui")
}