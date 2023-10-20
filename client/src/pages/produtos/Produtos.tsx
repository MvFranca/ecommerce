import Layout from "../../components/layout_menu/Layout";
import FullProducts from "../../components/produtos/FullProducts";
import SideBar from "../../components/produtos/SideBar";
import '../../styles/produtos/Produtos.scss';

const Produtos = () => {
  return (
    <div>
      <Layout>
        <div className="pageProducts">
          <SideBar />
          <FullProducts />
        </div>
      </Layout>
    </div>
  );
};

export default Produtos;
