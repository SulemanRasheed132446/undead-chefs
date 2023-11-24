import logo from './logo.svg';
import './App.css';
import { useConnectModal } from '@rainbow-me/rainbowkit';

function App() {
  const {openConnectModal} = useConnectModal()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p onClick={() => openConnectModal()}>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
