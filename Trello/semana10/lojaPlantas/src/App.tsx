import './App.css'
import Button from './components/atoms/Button/Button'
import PlantIcon from './components/atoms/PlantIcon/PlantIcon'
import PriceTag from './components/atoms/PriceTag/PriceTag'


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <PlantIcon size="lg" />
        <h1>Loja de Plantas</h1>
        <p>E-commerce de Plantas de Jardim</p>
      </header>
      
      <main className="demo-section">
        <h2>Demonstração dos Atoms</h2>
        
        <div className="demo-grid">
          <div className="demo-item">
            <h3>
              <PlantIcon size="sm" /> Buttons
            </h3>
            <div className="demo-content">
              <Button variant="primary">Comprar Agora</Button>
              <Button variant="secondary">Ver Detalhes</Button>
              <Button variant="primary" disabled>Indisponível</Button>
            </div>
          </div>

          <div className="demo-item">
            <h3>
              <PlantIcon size="sm" /> PriceTag
            </h3>
            <div className="demo-content">
              <PriceTag value={29.90} />
              <PriceTag value={159.50} />
              <PriceTag value={12.30} />
            </div>
          </div>

          <div className="demo-item">
            <h3>
              <PlantIcon size="sm" /> PlantIcon
            </h3>
            <div className="demo-content">
              <div className="icon-row">
                <PlantIcon size="sm" />
                <span>Pequeno</span>
              </div>
              <div className="icon-row">
                <PlantIcon size="md" />
                <span>Médio</span>
              </div>
              <div className="icon-row">
                <PlantIcon size="lg" />
                <span>Grande</span>
              </div>
            </div>
          </div>

          <div className="demo-item demo-item--full">
            <h3>
              <PlantIcon size="sm" /> Combinação dos Atoms
            </h3>
            <div className="product-demo">
              <div className="product-card">
                <PlantIcon size="md" color="#4a7c59" />
                <h4>Samambaia</h4>
                <PriceTag value={45.90} />
                <div className="product-actions">
                  <Button variant="primary">Comprar</Button>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
              
              <div className="product-card">
                <PlantIcon size="md" color="#6b7c4a" />
                <h4>Suculenta</h4>
                <PriceTag value={18.50} />
                <div className="product-actions">
                  <Button variant="primary">Comprar</Button>
                  <Button variant="secondary">Detalhes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App