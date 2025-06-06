import './App.css'
import Menu from './components/Menu/Menu'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Gnocchi from './components/Gnocchi/Gnocchi'
import Pastas from './components/Pastas/Pastas'

function App() {
  return (
    <div className="App">
      <Menu />
      <Apresentacao />
      <Gnocchi />
      <Pastas />
    </div>
  )
}

export default App