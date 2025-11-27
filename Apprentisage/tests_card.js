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



const tableau = Array(5).fill(0);

console.log(tableau)