import './App.css'
import Menu from './components/Menu/Menu'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Gnocchi from './components/Gnocchi/Gnocchi'
import Pastas from './components/Pastas/Pastas'
import Bebidas from './components/Bebidas/Bebidas'

function App() {
  return (
    <div className="App">
      <Menu />
      <Apresentacao />
      <Gnocchi />
      <Pastas />
      <Bebidas />
    </div>
  )
}

export default App