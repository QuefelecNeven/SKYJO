// Dans Skyjo, il y a des cartes avec différentes quantités :
// 5 cartes -2
// 10 cartes -1  
// 15 cartes 0
// 10 cartes de chaque valeur de 1 à 12
const valeur_carte = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const quantites = [5, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function creerPaquetSkyjo() {
    const paquet = [];
    
    for (let i = 0; i < valeur_carte.length; i++) {
        const valeur = valeur_carte[i];
        const quantite = quantites[i];
        
        for (let j = 0; j < quantite; j++) {
            paquet.push(valeur);
        }
    }
    
    return paquet;
}

//console.log(creerPaquetSkyjo());
//console.log(creerPaquetSkyjo().length); // Affiche 150

// Dans Skyjo, chaque joueur a 12 cartes disposées en grille 3x4

const carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ecrireCartes(cartes) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(cartes[i][y]);
        }
    }
}

//console.log(creerGrille(carte));

// Le score = somme de toutes les cartes
const grille1 = [
    [5, 7, 3, 2],
    [5, 9, 1, 8],
    [-2, 4, 6, 0]
];

const grille = [
  [5, -2, 8, 3],
  [7, 12, 0, -1],
  [4, 6, 9, 2]
];

function calculerScore(grille) {
    for (let i = 0; i < grille.length; i++){
        for (let y = 0; y < grille[i].length; y++){
            console.log(grille[i][y]);
        }
    }
}

calculerScore(grille);
//console.log(calculerScore(grille1));

const grille2 = [
    [5, 7, 3, 2],
    [5, 9, 1, 8],
    [5, 4, 6, 0]
];

function colonneIdentique(grille, indexColonne) {
    // On récupère les 3 cartes de la colonne
    const carte1 = grille[0][indexColonne];  // Première ligne
    const carte2 = grille[1][indexColonne];  // Deuxième ligne
    const carte3 = grille[2][indexColonne];  // Troisième ligne
    
    // On vérifie si les 3 cartes sont identiques
    if (carte1 === carte2 && carte2 === carte3) {
        return true;
    } else {
        return false;
    }
}

console.log(colonneIdentique(grille2, 0)); // true (trois 5)
console.log(colonneIdentique(grille2, 1)); // false (7, 9, 4 différents)