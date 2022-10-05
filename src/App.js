import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" exact element={<Hero />} />

          <Route path="/channels" exact element={<Home />} />

          <Route path="/channels/:id" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
