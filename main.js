// Fonction classique
// Tu as une liste de nombres
const nombres = [5, 10, 15, 20];

// Ton objectif : additionner tous les nombres
// Résultat attendu : 50

// Méthode 1 : Avec une boucle for
function additionner(liste) {
    let total = 0;
    for (let i = 0; i < liste.length; i++) {
        total += liste[i];
    }
    
    return total;
}

console.log(additionner(nombres)); // Devrait afficher 50