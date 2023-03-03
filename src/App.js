import logo from './logo.svg';
import './App.css';

const ComponentePrincipal = () => {
  return(
    <main>
      Conteúdo principal
    </main>
  )
}

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loja Ana
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ComponentePrincipal />
    </>
  );
}

export default App;
