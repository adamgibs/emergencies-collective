import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Archive from "./pages/Archive";
import Gallery from "./pages/Gallery";
import PostPage from "./pages/PostPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts/:postName" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
