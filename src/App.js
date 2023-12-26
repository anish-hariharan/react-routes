import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserRoutes from "./routes/userRoutes";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<UserRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
