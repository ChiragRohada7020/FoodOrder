import logo from './logo.svg';
import './input.css'
import './App.css';
import { Menu } from './components/Menu'
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Cards} from './components/Cards'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/cuisine/:id" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
