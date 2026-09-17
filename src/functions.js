const { apprenants } = require("./data");
module.exports = {
  afichageMenu,
  dicoration,
  AfficherApprenants,
  ajouter_Apprenant,
  consulterApprenantParId,
};

//function pour Afficher le choix de menu
function afichageMenu() {
  console.log("\n============================================");
  console.log("=        SAS PROGRESS CONSOLE         =");
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

//this Function just add some decoration to the output
function dicoration(Print) {
  console.log("\n--------------------------------------------");
  console.log(Print);
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
  const nomPropre = nomComplet.trim();
  const villePropre = ville.trim();

  if (nomPropre === "" || ville === "") {
    console.log("Erreur : Le nom ne doit pas être vide.");
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
  if (id < 1 ) {
    console.log("Erreur : Veuillez entrer un identifiant numérique valide.");
    return;
  }

  for (let i = 0; i < apprenants.length; i++) {

    if (apprenants[i].id === id) {
		console.log(apprenants[i].id);
		console.log(apprenants[i].nomComplet)
		console.log(apprenants[i].ville)
    }
  }
}
