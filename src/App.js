import './App.css';
import Structure from "./components/Structure/Structure";
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
      <Router>
          <div className="App">
              <Structure/>
          </div>
      </Router>
  );
}

export default App;
