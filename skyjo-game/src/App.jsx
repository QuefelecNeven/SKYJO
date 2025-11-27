import { useState } from 'react';
import Carte from './components/Carte';
import './App.css';

function App() {
  const [visible, setVisible] = useState(Array(12).fill(false));
  const mesCartes = [5, -2, 8, 3, 7, 12, 0, -1, 4, 6, 9, 2];

  // Fonction pour retourner une carte
  const retournerCarte = (index) => {
    const nouveauTableau = visible.map((valeur, i) => {
      if (i === index) {
        return !valeur;  // Inverse la valeur (false→true ou true→false)
      } else {
        return valeur;   // Garde la valeur actuelle
      }
    });
    setVisible(nouveauTableau);
  };

  return (
    <div style={{ 
      display: 'grid', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '10vh',
      gap: '10px', 
      gridTemplateColumns: 'repeat(4, 80px)',
    }}>
      {mesCartes.map((carte, index) => (
        <Carte 
          valeur={carte} 
          visible={visible[index]} 
          onClick={() => retournerCarte(index)}  // ← Ajouter le clic
        />
      ))}
    </div>
  );
}

export default App;