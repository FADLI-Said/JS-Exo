// let a = 10
// let b = 11

// function additionner(a,b) {
//     return a + b;
// }

// document.write(`<p>Addition de 10 et 11 = ${additionner(10,11)}</p>`)
// document.write(`<p>Addition de 2 et 3 = ${additionner(2,3)}</p>`)


let dividende = Number(prompt("Donne moi un premier nombre"))
let diviseur = Number(prompt("Donne moi un deuxième nombre"))

function calculerPGCD(dividende, diviseur) {

        if (diviseur == 0) {
            document.write(`<h1>Le diviseur ne peut pas être 0</h1>`);
        } else {
            r = 1
            while (r != 0) {
                r = dividende % diviseur
                if (r != 0) {
                    dividende = diviseur
                    diviseur = r
                }
            }
        }
    return diviseur
}

document.write(calculerPGCD(dividende, diviseur))


PGCD(90,36)