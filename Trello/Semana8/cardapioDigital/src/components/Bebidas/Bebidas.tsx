import './Bebidas.css';

interface BebidaItem {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
  categoria: string;
}

const Bebidas = () => {
  const bebidasOptions: BebidaItem[] = [
    {
      id: 1,
      nome: "Água Mineral",
      preco: "R$ 4,50",
      imagem: "https://images.unsplash.com/photo-1550589442-9ad3e3ed6c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Água mineral natural sem gás 500ml",
      categoria: "Água"
    },
    {
      id: 2,
      nome: "Água com Gás",
      preco: "R$ 5,50",
      imagem: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Água mineral natural com gás 500ml",
      categoria: "Água"
    },
    {
      id: 3,
      nome: "Coca-Cola",
      preco: "R$ 7,90",
      imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Coca-Cola gelada 350ml",
      categoria: "Refrigerante"
    },
    {
      id: 4,
      nome: "Guaraná",
      preco: "R$ 7,50",
      imagem: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Guaraná Antarctica gelado 350ml",
      categoria: "Refrigerante"
    },
    {
      id: 5,
      nome: "Sprite",
      preco: "R$ 7,90",
      imagem: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Sprite gelado refrescante 350ml",
      categoria: "Refrigerante"
    },
    {
      id: 6,
      nome: "Suco de Morango",
      preco: "R$ 9,90",
      imagem: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Suco natural de morango 400ml",
      categoria: "Sucos"
    },
    {
      id: 7,
      nome: "Suco de Laranja",
      preco: "R$ 8,90",
      imagem: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Suco natural de laranja 400ml",
      categoria: "Sucos"
    },
    {
      id: 8,
      nome: "Suco de Uva",
      preco: "R$ 9,50",
      imagem: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      descricao: "Suco natural de uva roxa 400ml",
      categoria: "Sucos"
    }
  ];

  const categorias = ["Água", "Refrigerante", "Sucos"];

  const getBebidasByCategoria = (categoria: string) => {
    return bebidasOptions.filter(bebida => bebida.categoria === categoria);
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "Água": return "💧";
      case "Refrigerante": return "🥤";
      case "Sucos": return "🧃";
      default: return "🥤";
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Água": return "#3498db";
      case "Refrigerante": return "#e74c3c";
      case "Sucos": return "#f39c12";
      default: return "#95a5a6";
    }
  };

  return (
    <section id="bebidas" className="bebidas-section">
      <div className="bebidas-container">
        <div className="section-header">
          <h2 className="section-title">Nossas Bebidas</h2>
          <p className="section-subtitle">
            Refrescantes opções para acompanhar suas deliciosas massas
          </p>
          <div className="decorative-line"></div>
        </div>

        {categorias.map((categoria, categoriaIndex) => (
          <div key={categoria} className="categoria-section" style={{animationDelay: `${categoriaIndex * 0.2}s`}}>
            <div className="categoria-header">
              <span className="categoria-icon">{getCategoriaIcon(categoria)}</span>
              <h3 className="categoria-title" style={{color: getCategoriaColor(categoria)}}>
                {categoria}
              </h3>
            </div>

            <div className="bebidas-grid">
              {getBebidasByCategoria(categoria).map((bebida, index) => (
                <div 
                  key={bebida.id} 
                  className="bebida-card" 
                  style={{
                    animationDelay: `${(categoriaIndex * 0.3) + (index * 0.1)}s`,
                    '--categoria-color': getCategoriaColor(categoria)
                  } as React.CSSProperties}
                >
                  <div className="card-image-wrapper">
                    <img 
                      src={bebida.imagem} 
                      alt={bebida.nome}
                      className="card-image"
                    />
                    <div className="card-overlay">
                      <span className="price-tag">{bebida.preco}</span>
                    </div>
                    <div className="categoria-badge" style={{backgroundColor: getCategoriaColor(categoria)}}>
                      {getCategoriaIcon(categoria)}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h4 className="card-title">{bebida.nome}</h4>
                    <p className="card-description">{bebida.descricao}</p>
                    
                    <div className="card-footer">
                      <span className="card-price" style={{color: getCategoriaColor(categoria)}}>
                        {bebida.preco}
                      </span>
                      <button 
                        className="order-button"
                        style={{backgroundColor: getCategoriaColor(categoria)}}
                      >
                        Pedir Agora
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bebidas-info">
          <div className="info-content">
            <span className="info-icon">🍽️</span>
            <div className="info-text">
              <strong>Combinações Perfeitas:</strong> Todas as nossas bebidas foram 
              selecionadas para harmonizar perfeitamente com nossos pratos. 
              Experimente água com gás com massas ao molho pesto, ou sucos naturais 
              com pratos mais leves!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bebidas;