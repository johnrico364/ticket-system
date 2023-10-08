import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/home/Home";
import { Signup } from "./components/Signup";
import { Add } from "./components/home/Add";
import { List } from "./components/home/List";
import { Aboutus } from "./components/home/Aboutus";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />}>
            <Route path="add" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="about-us" element={<Aboutus />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>NO PAGE FOUND...</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
