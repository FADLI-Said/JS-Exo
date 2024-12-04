const SeuilMajorationSalaire = 1800.00;
const MajorationBasSalaire = 0.10;
const TauxCelibataire = 0.20;
const TauxNonCelibataire = 0.25;
const TauxParEnfant = 0.15;
const TauxMaximalPart = 0.50;

let NombreEnfants;
let EstCélibataire;
let Rémunération;
let TauxParticipation;

NombreEnfants = 0;
EstCélibataire = true;
Rémunération = 0;
TauxParticipation = 0;

EstCélibataire = prompt("L'employé est-il célibataire ?, O pour Oui, N pour Non");
NombreEnfants = prompt("Nombre d'enfants de l'employé ?");
Rémunération = prompt("Montant du salaire de l'employé ?");

if (EstCélibataire == "O") {
    TauxParticipation = TauxCelibataire;
} else {
    TauxParticipation = TauxNonCelibataire;
}

TauxParticipation = TauxParticipation +(NombreEnfants*TauxParEnfant);

if (Rémunération<SeuilMajorationSalaire) {
    TauxParticipation = TauxParticipation + MajorationBasSalaire
}

if (TauxParticipation>TauxMaximalPart) {
    TauxParticipation=TauxMaximalPart
}

// TauxParticipation = TauxParticipation.toFixed(2);


alert("Le taux de participation est " + Math.round(TauxParticipation*100) +"%" );
document.write(`<h1> Le taux de participation est de ${TauxParticipation*100} %`)