import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
