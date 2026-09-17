const prompt = require("prompt-sync")({ sigint: true });
const { apprenants } = require("./data");
const {
  afichageMenu,
  dicoration,
  AfficherApprenants,
  ajouter_Apprenant,
  consulterApprenantParId
} = require("./functions");

let running = true;

while (running) {
  afichageMenu();

  let input = prompt("Votre Choix: ");
  if (!input) continue;

  let choix = input.trim();

  switch (choix) {
    case "1":
      dicoration("1- Afficher le tableau de bord: Coming Soon");
      break;

    case "2":
      dicoration("2- Afficher la liste des apprenants.");
      AfficherApprenants(apprenants);
      break;

    case "3":
      dicoration("3- Ajouter un apprenant");
      const nom = prompt("Entrez le nom complet : ");
      const ville = prompt("Entrez la ville : ");
      ajouter_Apprenant(nom, ville);
      break;

    case "4":

      dicoration("4- Consulter un apprenant par identifiant: Coming Soon");
	  const id = Number(prompt("Entrez un identifiant numérique d'apprenants: "))
	  consulterApprenantParId(id)
      break;

    case "5":
      dicoration("5- Ajouter ou modifier le résultat d'une journée: Coming Soon");
      break;

    case "6":
      dicoration("6- Rechercher un apprenant par nom: Coming Soon");
      break;

    case "7":
      dicoration("7- Filtrer les apprenants par niveau: Coming Soon");
      break;

    case "8":
      dicoration("8- Trier les apprenants par progression décroissante: Coming Soon");
      break;

    case "9":
      dicoration("9- Trier les apprenants par ordre alphabétique: Coming Soon");
      break;

    case "0":
      dicoration("Au revoir !");
      running = false;
      break;

    default:
      console.log("Choix invalide. Veuillez entrer un nombre entre 0 et 9.");
  }
}
