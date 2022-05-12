import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import Search from './components/Search/Search.js'

function App() {
  return (
    <div>
    <div className="App">
      <Header />
    </div>
    <Search/>
    </div>
  );
}

export default App;
