import './Pastas.css';
import MolhosSelector from '../MolhosSelector/MolhosSelector';

interface PastaItem {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
  molhosPermitidos: string[];
}

const Pastas = () => {
  const pastasOptions: PastaItem[] = [
    {
      id: 1,
      nome: "Espaguete",
      preco: "R$ 28,90",
      imagem: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Clássica massa longa italiana, perfeita para diversos molhos",
      molhosPermitidos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe", "Alla Matriciana"]
    },
    {
      id: 2,
      nome: "Tagliatelle",
      preco: "R$ 32,90",
      imagem: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Massa em fitas largas, ideal para molhos mais robustos",
      molhosPermitidos: ["Alla Puttanesca", "Alla Matriciana"]
    },
    {
      id: 3,
      nome: "Fettuccine",
      preco: "R$ 30,90",
      imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Fitas de massa sedosas e elegantes",
      molhosPermitidos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"]
    },
    {
      id: 4,
      nome: "Penne",
      preco: "R$ 26,90",
      imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Massa tubular perfeita para capturar molhos",
      molhosPermitidos: ["Alla Puttanesca", "Cacio e Pepe"]
    },
    {
      id: 5,
      nome: "Rigatoni",
      preco: "R$ 29,90",
      imagem: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Tubos robustos com ranhuras para molhos encorpados",
      molhosPermitidos: ["Alla Matriciana"]
    },
    {
      id: 6,
      nome: "Pappardelle",
      preco: "R$ 34,90",
      imagem: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Fitas largas e rústicas da tradição toscana",
      molhosPermitidos: ["Alla Puttanesca", "Alla Matriciana"]
    }
  ];

  return (
    <section id="pastas" className="pastas-section">
      <div className="pastas-container">
        <div className="section-header">
          <h2 className="section-title">Nossas Pastas</h2>
          <p className="section-subtitle">
            Massas artesanais feitas diariamente com os melhores ingredientes
          </p>
          <div className="decorative-line"></div>
        </div>

        <div className="pastas-grid">
          {pastasOptions.map((pasta, index) => (
            <div key={pasta.id} className="pasta-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-image-wrapper">
                <img 
                  src={pasta.imagem} 
                  alt={pasta.nome}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="price-tag">{pasta.preco}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{pasta.nome}</h3>
                <p className="card-description">{pasta.descricao}</p>
                
                <div className="molhos-permitidos">
                  <h4 className="molhos-titulo">Molhos disponíveis:</h4>
                  <ul className="molhos-lista">
                    {pasta.molhosPermitidos.map((molho, idx) => (
                      <li key={idx} className="molho-tag">
                        {molho}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-footer">
                  <span className="card-price">{pasta.preco}</span>
                  <button className="order-button">
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <MolhosSelector />
      </div>
    </section>
  );
};

export default Pastas;