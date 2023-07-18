import './App.css';
import DocumentTitle from './components/DocumentTitle';
import IntervalTimer from './components/IntervalTimer';
import RandomCat from './components/RandomCat';

function App() {
  return (
    <div className="App">
      <h1>Side Effects</h1>
      <DocumentTitle />
      <IntervalTimer />
      <RandomCat />
    </div>
  );
}

export default App;
