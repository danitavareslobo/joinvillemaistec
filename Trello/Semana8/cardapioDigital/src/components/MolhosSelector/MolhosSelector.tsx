import './MolhosSelector.css';

interface MolhoInfo {
  nome: string;
  descricao: string;
  disponivel: string[];
}

const MolhosSelector = () => {
  const molhosInfo: MolhoInfo[] = [
    {
      nome: "Alla Puttanesca",
      descricao: "Molho tradicional com tomates, azeitonas, alcaparras e anchovas",
      disponivel: ["Espaguete", "Tagliatelle", "Fettuccine", "Penne", "Pappardelle"]
    },
    {
      nome: "Al Pesto di Basilico",
      descricao: "Clássico molho genovês com manjericão fresco, pinhões e parmesão",
      disponivel: ["Espaguete", "Fettuccine"]
    },
    {
      nome: "Cacio e Pepe",
      descricao: "Simplicidade romana com queijo pecorino e pimenta preta",
      disponivel: ["Espaguete", "Fettuccine", "Penne"]
    },
    {
      nome: "Alla Matriciana",
      descricao: "Molho tradicional de Roma com tomate, guanciale e pecorino",
      disponivel: ["Espaguete", "Tagliatelle", "Rigatoni", "Pappardelle"]
    }
  ];

  return (
    <div className="molhos-selector-section">
      <div className="molhos-selector-header">
        <h3 className="molhos-selector-title">Guia de Molhos & Pastas</h3>
        <p className="molhos-selector-subtitle">
          Descubra as combinações perfeitas entre nossas massas e molhos tradicionais
        </p>
      </div>

      <div className="molhos-selector-content">
        <div className="molhos-grid">
          {molhosInfo.map((molho, index) => (
            <div key={index} className="molho-info-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="molho-card-header">
                <h4 className="molho-card-nome">{molho.nome}</h4>
                <span className="pasta-emoji">🍝</span>
              </div>
              
              <p className="molho-card-descricao">{molho.descricao}</p>
              
              <div className="molho-disponivel">
                <span className="disponivel-label">Disponível com:</span>
                <div className="pastas-disponiveis">
                  {molho.disponivel.map((pasta, idx) => (
                    <span key={idx} className="pasta-disponivel-tag">
                      {pasta}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="molhos-selector-note">
          <div className="note-content">
            <span className="note-icon">ℹ️</span>
            <div className="note-text">
              <strong>Dica do Chef:</strong> Todos os molhos são preparados frescos diariamente 
              com ingredientes importados diretamente da Itália. Cada combinação foi 
              cuidadosamente selecionada para realçar o sabor único de cada tipo de massa.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MolhosSelector;