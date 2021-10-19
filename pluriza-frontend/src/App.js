import './App.css';
import Header from './components/Header';
import SearchingBar from './components/SearchingBar';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchingBar />
      <Results />
    </div>
  );
}

export default App;
