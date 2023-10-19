import "../../styles/home/NovosProdutos.scss";


type props = {
    children:  React.ReactNode;
    titulo: string;
}

const LayoutProdutos = ({children, titulo}: props) => {
  return (
    <div className="novosProdutos">
      <h2>{titulo}</h2>

    <div className="listagem">
        {children}    
    </div>
    </div>
  );
};

export default LayoutProdutos;
