import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentPage from "./components/postMessage/ParentPage";
import ChildPage from "./components/postMessage/ChildPage";
import SendMessage from "./components/sendMessage/SendMessage";

function App() {
  return <SendMessage />;
}

export default App;
