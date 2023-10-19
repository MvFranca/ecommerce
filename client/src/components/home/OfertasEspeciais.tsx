import { useEffect, useState } from "react";
import LayoutProdutos from "./LayoutProdutos";
import CardProduct from "../card/CardProduct";

const OfertasEspeciais = () => {
  const [ofertasEspeciais, setOfertasEspeciais] = useState([]);

  async function api() {
    const dados = await fetch(
      "http://127.0.0.1:5173/produtos/ofertas/ofertas.json"
    );

    const json = await dados.json();
    setOfertasEspeciais(json);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <LayoutProdutos titulo="Ofertas Especiais">
      {ofertasEspeciais.map((produto) => {
        const { nome, cor, preco, img } = produto;

        return <CardProduct src={img} titulo={nome} preco={preco} cor={cor} />;
      })}
    </LayoutProdutos>
  );
};

export default OfertasEspeciais;
