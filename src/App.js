import './App.css';
import {Register} from "./components/register/register"
import {Login} from "./components/login/login"
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router className="app">
      <Routes>
      <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      
      </Routes>
        
    </Router>
    </div>
    
  );
}

export default App;
