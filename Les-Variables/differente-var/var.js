let varString = "Ceci est une chaîne de caractères";
let varBool = true;
let varNombreEntier = 123;
let varNombreDecimal = 451.123;
let varNombreHexa = 0x324;
let varObject = new Date();
let varIndefini;


document.write(`<p> La variable est de type ${typeof varString}`);
document.write(`<p> La variable est de type ${typeof varBool}`);
document.write(`<p> La variable est de type ${typeof varNombreEntier}`);
document.write(`<p> La variable est de type ${typeof varNombreDecimal}`);
document.write(`<p> La variable est de type ${typeof varNombreHexa}`);
document.write(`<p> La variable est de type ${typeof varObject}`);
document.write(`<p> La variable est de type ${typeof varIndefini}`);