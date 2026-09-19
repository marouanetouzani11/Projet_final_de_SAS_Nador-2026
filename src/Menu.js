const prompt = require("prompt-sync")({ sigint: true });
const { apprenants } = require("./data");
const {
  afichageMenu,
  dicoration,
  AfficherApprenants,
  ajouter_Apprenant,
  consulterApprenantParId,
  Rechercher_par_nom,
  Ajouter_modifier_résultat
  
} = require("./functions");


let running = true;
let choix;
do {
	afichageMenu();
	choix = Number(prompt("Votre Choix: "))
  switch (choix) {
    case 1:
	
      dicoration("1- Afficher le tableau de bord: Coming Soon");
      break;

    case 2:
      dicoration("2- Afficher la liste des apprenants.");
      AfficherApprenants(apprenants);
      break;

    case 3:
      dicoration("3- Ajouter un apprenant");
      const nom = prompt("Entrez le nom complet : ");
      const ville = prompt("Entrez la ville : ");
      ajouter_Apprenant(nom, ville);
      break;

    case 4:
      dicoration("4- Consulter un apprenant par identifiant");
	  AfficherApprenants(apprenants);
	  const id = Number(prompt("Entrez un identifiant numérique d'apprenants: "))
	  consulterApprenantParId(id)
      break;

    case 5:
      dicoration("5- Ajouter ou modifier le résultat d'une journée.");
	  let Id = Number(prompt("Entrez un identifiant numérique d'apprenants: "))
	  let jour =  Number(prompt("Entrez le jour: "))
	  let totalExercices = Number(prompt("Entrez un total d'exercices d'apprenants: "))
	  let exercicesTermines = Number(prompt("Entrez exercices Termines: "))
	  let challengeTermine = prompt("Si le challenge est relevé, écrivez oui: ").trim().toLocaleLowerCase()
	  console.log(Ajouter_modifier_résultat(Id, jour, totalExercices, exercicesTermines, challengeTermine))
      break;

    case 6:
      dicoration("6- Rechercher un apprenant par nom");
	  AfficherApprenants(apprenants);
	  let Nom = prompt("Saisissez le nom que vous recherchez: ")
	  Rechercher_par_nom(Nom)
      break;

    case 7:
      dicoration("7- Filtrer les apprenants par niveau: Coming Soon");
      break;

    case 8:
      dicoration("8- Trier les apprenants par progression décroissante: Coming Soon");
      break;

    case 9:
      dicoration("9- Trier les apprenants par ordre alphabétique: Coming Soon");
      break;

    case 0:
      dicoration("Au revoir !");
      break;

    default:
      console.log("Choix invalide. Veuillez entrer un nombre entre 0 et 9.");
  }
}while(choix !== 0)
