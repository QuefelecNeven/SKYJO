// src/components/Carte.jsx

function Carte({ valeur, visible, onClick }) {
  return (
    <div 
      className="carte" 
      onClick={onClick}
      style={{
        width: '80px',
        height: '120px',
        border: '2px solid #333',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundColor: visible ? '#fff' : '#2196F3',
        color: visible ? '#333' : '#fff',
        transition: 'all 0.3s'
      }}
    >
      {visible ? valeur : '?'}
    </div>
  );
}

export default Carte;