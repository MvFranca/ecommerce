import { useEffect, useState } from "react";
import CardProduct from "../card/CardProduct";

import LayoutProdutos from "./LayoutProdutos";

const MaisVendidos = () => {
  const [novosProdutos, setNovosProdutos] = useState([]);

  async function api() {
    const dados = await fetch(
      "http://127.0.0.1:5173/produtos/maisvendidos/maisVendidos.json"
    );

    const json = await dados.json();
    setNovosProdutos(json);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <LayoutProdutos
    titulo = {'Mais Vendidos'}
    >
      {
      novosProdutos.map((produto) => {
        const { nome, cor, preco, img } = produto;

        return <CardProduct src={img} titulo={nome} preco={preco} cor={cor} />;
      })
      }

    </LayoutProdutos>
  );
};

export default MaisVendidos;
