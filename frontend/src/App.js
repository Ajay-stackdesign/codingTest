import './App.css';
import Register from "./Component/Register.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
