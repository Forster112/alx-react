import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img scr={logo} alt="logo" className='App-logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input name="email" type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" id="password" />
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
