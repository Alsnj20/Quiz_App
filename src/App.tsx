import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";


export default function App() {
  return (
    <div className="content container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}