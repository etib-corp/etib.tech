import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Projects></Projects>
    </div>
  );
}

export default App;
