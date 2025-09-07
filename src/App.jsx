import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import Kid from "./pages/Kid";
import Scp from "./pages/Scp";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="67">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/scp-67" element={<Scp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
