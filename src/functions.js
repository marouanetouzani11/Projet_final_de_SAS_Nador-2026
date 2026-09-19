const prompt = require("prompt-sync")({ sigint: true });
const { apprenants } = require("./data");
module.exports = {
  afichageMenu,
  dicoration,
  AfficherApprenants,
  ajouter_Apprenant,
  consulterApprenantParId,
  Rechercher_par_nom,
  nomaliserNom,
  Ajouter_modifier_résultat,
};



//function pour Afficher les choix de menu
function afichageMenu() {
  console.log("\n============================================");
  console.log("=        	 SAS PROGRESS CONSOLE         =");
  console.log("============================================");
  console.log();
  console.log("1- Afficher le tableau de bord");
  console.log("2- Afficher la liste des apprenants");
  console.log("3- Ajouter un apprenant");
  console.log("4- Consulter un apprenant par identifiant");
  console.log("5- Ajouter ou modifier le résultat d'une journée");
  console.log("6- Rechercher un apprenant par nom");
  console.log("7- Filtrer les apprenants par niveau");
  console.log("8- Trier les apprenants par progression décroissante");
  console.log("9- Trier les apprenants par ordre alphabétique");
  console.log("0- Quitter");
  console.log();
  console.log("============================================\n");
  console.log("============================================\n");
}



//this function make the name I inter more better it removes extra spaces and makes the name lower case
function nomaliserNom(name) {
  let cleanName = name.toLowerCase().trim();

  //I used this / it means the begginig of the command
  //I used this \s it means space and + measn extra spaces
  //I used this /g,
  //I used this " " it means reaplace with space
  cleanName = cleanName.replace(/\s+ /g, " ");
  return cleanName;
}



//this Function just add some decoration to the output
function dicoration(Print) {
  console.log("\n--------------------------------------------");
  console.log(Print);
  console.log("--------------------------------------------\n");
}



//this function choice 2 only print des apprenants one by one.
function AfficherApprenants(objs) {
  console.log("--------------------------------------------");
  console.log(
    "| " +
      "ID".padEnd(4) +
      " | " +
      "Nome".padEnd(20) +
      " | " +
      "Ville".padEnd(10) +
      " |",
  );
  console.log("--------------------------------------------");

  for (let i = 0; i < objs.length; i++) {
    const id = String(objs[i].id).padEnd(4);
    const nom = objs[i].nomComplet.padEnd(20);
    const ville = objs[i].ville.padEnd(10);
    console.log(`| ${id} | ${nom} | ${ville} |`);
  }
  console.log("--------------------------------------------");
}



//this function choice 2 add apprenants
function ajouter_Apprenant(nomComplet, ville) {
  const nomPropre = nomaliserNom(nomComplet);
  const villePropre = ville.trim().toLowerCase();

  if (nomPropre === "" || ville === "") {
    console.log("=>Erreur : Le nom ne doit pas être vide.");
  }

  const Newapprenant = {
    id: apprenants.length + 1,
    nomComplet: nomPropre,
    ville: villePropre,
    resultats: [],
  };

  console.log(Newapprenant);
  apprenants.push(Newapprenant);
}



//this function search for un apprenant by hes id
function consulterApprenantParId(id) {
  if (id < 1 || id > apprenants.length) {
    console.log("=>Erreur : Veuillez entrer un identifiant numérique valide.");
    return;
  }

  for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].id === id) {
      console.log("Id: " + apprenants[i].id);
      console.log("Nom: " + apprenants[i].nomComplet);
      console.log("Ville: " + apprenants[i].ville);
    }
  }
}



//this function search by name for an apprenants
function Rechercher_par_nom(Nom) {
  if (typeof Nom !== "string") {
    console.log();
    console.log("=>La donnée fournie n'est pas une chaîne de caractères.");
    console.log();
  }

  let nomHolder = Nom.trim().toLowerCase();
  let result = [];

  for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].nomComplet.toLowerCase().includes(nomHolder) == true) {
      result.push(apprenants[i].nomComplet.toLowerCase());
    }
  }
  if (result.length === 0) {
    console.log("=>Il n'y a pas d'apprenant portant ce nom.");
    return;
  }
  console.table(result);
}



//this function find apprenants by Id and change it's days and exercices completed number and if the apprenant make the challenge or not
function Ajouter_modifier_résultat(id, jour, totalExercices, exercicesTermines, challengeTermine) {
  const numericId = Number(id);
  if (numericId < 1) {
    console.log("Erreur : Veuillez entrer un identifiant numérique valide.");
    return null;
  }

  let etudiantTrouve = null;
  for (let i = 0; i < apprenants.length; i++) {
    if (apprenants[i].id === numericId) {
      etudiantTrouve = apprenants[i];
      break;
    }
  }

  if (etudiantTrouve === null) {
    console.log("Erreur : Aucun apprenant trouvé avec cet identifiant.");
    return null;
  }

  const numericJour = Number(jour);
  if (numericJour < 1 || numericJour > 7) {
    console.log("Erreur : Le numéro de jour valide est compris entre 1 et 7.");
    return null;
  }

  const numerictotalExercices = Number(totalExercices);
  if (numerictotalExercices < 1 || numerictotalExercices > 20) {
    console.log("Erreur : Le numéro de total Exercices valide est compris entre 1 et 20.");
    return null;
  }

  const numericExercicesTermines = Number(exercicesTermines);
  if (numericExercicesTermines < 0 || numericExercicesTermines > numerictotalExercices) {
    console.log("Erreur : Les exercices terminés doivent être compris entre 0 et " + numerictotalExercices + ".");
    return null;
  }

  const estChallengeValide =
    challengeTermine === true ||
    challengeTermine === "o" ||
    challengeTermine === "oui" ||
    challengeTermine === "true";

  let jourExistant = false;

  for (let i = 0; i < etudiantTrouve.resultats.length; i++) {
    if (etudiantTrouve.resultats[i].jour === numericJour) {
      etudiantTrouve.resultats[i].totalExercices = numerictotalExercices;
      etudiantTrouve.resultats[i].exercicesTermines = numericExercicesTermines;
      etudiantTrouve.resultats[i].challengeTermine = estChallengeValide;
      jourExistant = true;
      console.log(`Résultat du Jour ${numericJour} mis à jour pour ${etudiantTrouve.nomComplet}.`);
      break;
    }
  }

  if (!jourExistant) {
    const nouveauResultat = {
      jour: numericJour,
      exercicesTermines: numericExercicesTermines,
      totalExercices: numerictotalExercices,
      challengeTermine: estChallengeValide,
    };
    etudiantTrouve.resultats.push(nouveauResultat);
    console.log(`Résultat du Jour ${numericJour} ajouté avec succès pour ${etudiantTrouve.nomComplet}.`);
  }
  return etudiantTrouve;
}

function calcul_progression(apprenant){
	let totalFaits = 0;
	let totalAssigne = 0;
	let totalChallenges = 0;

	for(let i = 0; i < apprenant.resultats.length; i++){
		totalFaits = totalFaits + apprenant.result[i].exercicesTermines;
		totalAssigne = totalAssigne + apprenant.result[i].totalExercices;
		if(apprenant.result[i].challengeTermine === true ){
			totalChallenges + 1
		}
	}
	let percentage = (totalFaits / totalAssigne) * 100
}
