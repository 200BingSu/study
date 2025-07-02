import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentPage from "./components/postMessage/ParentPage";
import ChildPage from "./components/postMessage/ChildPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentPage />} />
        <Route path="/child" element={<ChildPage />} />
      </Routes>
    </Router>
  );
}

export default App;
