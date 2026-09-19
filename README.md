# Application de Gestion et Suivi des Apprenants

Une petite application console en JavaScript (Node.js) pour gérer les apprenants d'un bootcamp, suivre leurs exercices quotidiens et calculer leur progression.

---

## Fonctionnalités

1. **Tableau de bord** : Affiche les statistiques globales de la promotion.
2. **Afficher la liste des apprenants** : Présentation sous forme de tableau (Nom, Ville, Résultats).
3. **Ajouter un apprenant** : Permet d'enregistrer un nouvel apprenant.
4. **Consulter par ID** : Afficher les détails complets d'un apprenant via son identifiant.
5. **Ajouter ou modifier un résultat** : Enregistrer le nombre d'exercices faits, le total d'exercices et si le challenge du jour a été validé.
6. **Rechercher par nom** : Trouver un apprenant par son nom ou prénom.
7. **Filtrer par niveau** : Voir les apprenants selon leur niveau (Débutant, Intermédiaire, Avancé).
8. **Trier par progression** : Classer les apprenants du meilleur score au plus faible.

---

## Structure du projet

* `index.js` : Le menu principal et les interactions avec l'utilisateur (via le terminal).
* `data.js` : La liste initiale des apprenants avec leurs résultats.
* `functions.js` : Toutes les fonctions du projet (calculs, ajouts, filtres, validations).

---

## Prérequis

* Avoir **Node.js** installé sur votre machine.
* Le module `prompt-sync` pour récupérer les entrées de l'utilisateur dans la console.

---

## Installation et Lancement

1. Clonez ou téléchargez le projet dans un dossier :
```bash
git clone <votre-lien-de-depot>
cd nom-du-dossier
