import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";


export default function App() {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}