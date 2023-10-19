import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/home/Inicio";
import Produtos from "../pages/produtos/Produtos";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
