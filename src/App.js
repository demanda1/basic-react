import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';

function App() {
  return (
    <div className="App">
      <PersonInfo name="Deepak" age="28" />
      <PersonInfo name="Deepak" age="28" />
      <PersonInfo name="Deepak" age="28" />
    </div>
  );
}

export default App;
