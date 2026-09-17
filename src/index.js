const prompt = require("prompt-sync")();

const { afichageMenu } = require("./functions");
const { dicoration } = require("./functions");
const { AfficherApprenants } = require("./functions");
const { apprenants } = require("./data");

let running = true;
while (running) {
  console.log("\n\n");

  afichageMenu();

  console.log("\n\n");

  let choix = prompt("Votre Choix: ").trim();
  switch (choix) {
    case "1":
      dicoration("1- Afficher le tableau de bord: Coming Soon");
      break;

    case "2":
      dicoration("2- Afficher la liste des apprenants.");
      console.log();
      AfficherApprenants(apprenants);
      console.log();

      break;

    case "3":
      dicoration("3- Ajouter un apprenant: Coming Soon");
      break;

    case "4":
      dicoration("4- Consulter un apprenant par identifiant: Coming Soon");
      break;

    case "5":
      dicoration(
        "5- Ajouter ou modifier le résultat d'une journée: Coming Soon",
      );
      break;

    case "6":
      dicoration("6- Rechercher un apprenant par nom: Coming Soon");
      break;

    case "7":
      dicoration("7- Filtrer les apprenants par niveau: Coming Soon");
      break;

    case "8":
      dicoration(
        "8- Trier les apprenants par progression décroissante: Coming Soon",
      );
      break;

    case "9":
      dicoration("9- Trier les apprenants par ordre alphabétique: Coming Soon");
      break;

    case "0":
      dicoration("Au revoir ");
      running = false;
      break;
    default:
      console.log("Choix invalide.");
  }
}
