import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil";
import Config from "../pages/Config";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:categoria/:id" element={<ProdutoDetalhe />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="perfil" element={<Perfil />} />
          <Route path="config" element={<Config />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
