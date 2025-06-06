import './Molhos.css';

const Molhos = () => {
  const molhosOptions = [
    {
      id: 1,
      nome: "Alla Puttanesca",
      descricao: "Molho tradicional com tomates, azeitonas, alcaparras e anchovas"
    },
    {
      id: 2,
      nome: "Al Pesto di Basilico",
      descricao: "Clássico molho genovês com manjericão fresco, pinhões e parmesão"
    },
    {
      id: 3,
      nome: "Cacio e Pepe",
      descricao: "Simplicidade romana com queijo pecorino e pimenta preta"
    },
    {
      id: 4,
      nome: "Alla Matriciana",
      descricao: "Molho tradicional de Roma com tomate, guanciale e pecorino"
    }
  ];

  return (
    <div className="molhos-section">
      <div className="molhos-header">
        <h3 className="molhos-title">Escolha seu Molho</h3>
        <p className="molhos-subtitle">
          Todos os nossos gnocchis podem ser acompanhados com os seguintes molhos:
        </p>
      </div>

      <div className="molhos-content">
        <ul className="molhos-list">
          {molhosOptions.map((molho, index) => (
            <li key={molho.id} className="molho-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="molho-info">
                <h4 className="molho-nome">{molho.nome}</h4>
                <p className="molho-descricao">{molho.descricao}</p>
              </div>
              <div className="molho-icon">
                <span className="pasta-icon">🍝</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="molhos-note">
          <p>
            <strong>Observação:</strong> Todos os molhos são preparados frescos diariamente 
            com ingredientes importados da Itália.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Molhos;