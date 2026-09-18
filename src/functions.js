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

//this function search for un apprenant
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
  console.log(result);
}

function Ajouter_modifier_résultat(id) {
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 1) {
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

  console.log("Apprenant trouvé : " + etudiantTrouve.nomComplet);
  return etudiantTrouve;
}
