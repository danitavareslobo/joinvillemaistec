import './Gnocchi.css';
import Molhos from '../Molhos/Molhos';

interface GnocchiItem {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
}

const Gnocchi = () => {
  const gnocchiOptions: GnocchiItem[] = [
    {
      id: 1,
      nome: "Gnocchi de Batata",
      preco: "R$ 32,90",
      imagem: "https://images.unsplash.com/photo-1597906133073-b0e23b8bb9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Tradicional gnocchi italiano feito com batatas selecionadas"
    },
    {
      id: 2,
      nome: "Gnocchi de Espinafre",
      preco: "R$ 35,90",
      imagem: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Delicioso gnocchi verde com espinafre fresco da horta"
    },
    {
      id: 3,
      nome: "Gnocchi de Cenoura",
      preco: "R$ 34,90",
      imagem: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Gnocchi dourado feito com cenouras orgânicas"
    },
    {
      id: 4,
      nome: "Gnocchi de Beterraba",
      preco: "R$ 36,90",
      imagem: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Gnocchi roxo vibrante com beterraba natural"
    }
  ];

  return (
    <section id="gnocchi" className="gnocchi-section">
      <div className="gnocchi-container">
        <div className="section-header">
          <h2 className="section-title">Nossos Gnocchis</h2>
          <p className="section-subtitle">
            Feitos artesanalmente com ingredientes frescos e selecionados
          </p>
          <div className="decorative-line"></div>
        </div>

        <div className="gnocchi-grid">
          {gnocchiOptions.map((gnocchi) => (
            <div key={gnocchi.id} className="gnocchi-card">
              <div className="card-image-wrapper">
                <img 
                  src={gnocchi.imagem} 
                  alt={gnocchi.nome}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="price-tag">{gnocchi.preco}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{gnocchi.nome}</h3>
                <p className="card-description">{gnocchi.descricao}</p>
                <div className="card-footer">
                  <span className="card-price">{gnocchi.preco}</span>
                  <button className="order-button">
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Molhos />
      </div>
    </section>
  );
};

export default Gnocchi;