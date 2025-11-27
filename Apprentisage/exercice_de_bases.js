// Fonction classique
// Tu as une liste de nombres
const nombres = [5, 10, 15, 20];
const nombres1 = [8, 9, 25, 3, 23, 6]

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
console.log(additionner(nombres1)); // Affcihe 74 

const nombres3 = [3, 15, 7, 22, 9];

function trouverMax(liste) {
    let valeur_prec = liste[0];
    for (let i = 1; i < liste.length; i++){
        if (liste[i] > valeur_prec){
            valeur_prec = liste[i]
        }
    }
    return valeur_prec;
    // Trouve le plus grand nombre
    // Résultat attendu : 22
}

console.log(trouverMax(nombres3));

const nombres4 = [5, -2, 10, -7, 3, 0];

function compterPositifs(liste) {
    let cpt = 0;
    for (let i = 0; i < liste.length; i++){
        if (liste[i] > 0 ){
            cpt += 1;
        }
    }
    // Compte combien de nombres sont > 0
    // Résultat attendu : 3 (5, 10, et 3)
    return cpt;
}

console.log(compterPositifs(nombres4));


// Crée une liste qui contient [0, 1, 2, 3, 4, 5]
function creerListe(n) {
    const liste = [];
    // Ton code ici (utilise une boucle for)
    for (let i = -2; i < n; i++){
        liste.push(i)
    }
    
    return liste;
}

console.log(creerListe(12)); // [0, 1, 2, 3, 4, 5]

const nombres5 = [1, 2, 3, 4];

function doublerNombres(liste) {
    let new_list = []
    for (let i = 0; i < liste.length; i++){
        new_list.push(liste[i]*2)
    }

    return new_list;
}

console.log(doublerNombres(nombres5))

// FAIRE UNE BOUCLE DE MULTIPLICATION PAR 10 
const cartes = [5, -2, 8, 3, 7, 12];
const multiplication = cartes.map(carte => carte*10)

console.log(multiplication)