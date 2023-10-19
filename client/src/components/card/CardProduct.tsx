import "../../styles/card/CardProduct.scss";

type props = {
  src: string;
  titulo: string;
  preco: string;
  cor: string;
};

const CardProduct = ({ src, titulo, preco, cor }: props) => {
  return (
    <div className="cardProcuct">
      <img src={src} alt="" />
      <div className="descricaoProduto">
        <div>
          <h3>{titulo}</h3>
          <aside>{cor}</aside>
        </div>
        <div>
          <aside>R$ {preco}</aside>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
