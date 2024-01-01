import './App.css';
import Structure from "./components/Structure/Structure";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from "./components/LoginPage";
import {useState} from "react";
function App() {
    const [user,setUser]=useState(false)
  return (
      <Router>
          <div className="App">
              {
                  user?(
                      <>
                          <Structure/>
                      </>
                  ):(
                      <>
                          <LoginPage setUser={setUser}/>
                      </>
                  )
              }

          </div>
      </Router>
  );
}

export default App;
