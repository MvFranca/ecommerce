import { useEffect, useState } from "react";
import CardProduct from "../card/CardProduct";
import LayoutProdutos from "./LayoutProdutos";

const NovosProdutos = () => {
  const [maisVendidos, setMaisVendidos] = useState([]);

  async function api() {
    const dados = await fetch(
      "http://127.0.0.1:5173/produtos/novosprodutos/novosProdutos.json"
    );

    const json = await dados.json();
    setMaisVendidos(json);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <LayoutProdutos titulo={"Novos Produtos"}>
      {maisVendidos.map((produto) => {
        const { nome, cor, preco, img } = produto;

        return <CardProduct src={img} titulo={nome} preco={preco} cor={cor} />;
      })}
    </LayoutProdutos>
  );
};

export default NovosProdutos;
