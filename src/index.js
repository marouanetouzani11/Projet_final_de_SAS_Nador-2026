const prompt = require("prompt-sync")();
const { afichageMenu } = require("./functions");
const { dicoration } = require("./functions");

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
      console.log("\n---------------------------------------");
      console.log("2- Afficher la liste des apprenants: Coming Soon");
      console.log("---------------------------------------\n");
      break;
    case "3":
      console.log("\n---------------------------------------");
      console.log("3- Ajouter un apprenant: Coming Soon");
      console.log("---------------------------------------\n");
      break;
    case "4":
      console.log("\n---------------------------------------");
      console.log("4- Consulter un apprenant par identifiant: Coming Soon");
      console.log("---------------------------------------\n");
      break;
    case "5":
      console.log("\n---------------------------------------");
      console.log(
        "5- Ajouter ou modifier le résultat d'une journée: Coming Soon",
      );
      console.log("---------------------------------------\n");
      break;
    case "6":
      console.log("\n---------------------------------------");
      console.log("6- Rechercher un apprenant par nom: Coming Soon");
      console.log("---------------------------------------\n");
      break;
    case "7":
      console.log("\n---------------------------------------");
      console.log("7- Filtrer les apprenants par niveau: Coming Soon");
      console.log("---------------------------------------\n");
      break;
    case "8":
      console.log("\n---------------------------------------");
      console.log(
        "8- Trier les apprenants par progression décroissante: Coming Soon",
      );
      console.log("---------------------------------------\n");
      break;
    case "9":
      console.log("\n---------------------------------------");
      console.log(
        "9- Trier les apprenants par ordre alphabétique: Coming Soon",
      );
      console.log("---------------------------------------\n");
      break;
    case "0":
      console.log("\n---------------------------------------");
      console.log("Au revoir ");
      console.log("---------------------------------------\n");
      running = false;
      break;
    default:
      console.log("Choix invalide.");
  }
}
