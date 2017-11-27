//Saisie du prix hors taxe
var ht = Number(prompt("Entrer un prix hors taxe : "));

//Calcul de prix TTC
var tauxTVA = 19.6 / 100;
var ttc = ht * (1 + tauxTVA);

//Affichage du résultat 
console.log("Le prix TTC est "+ttc+" euros");