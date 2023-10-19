import Carrossel from "../../components/home/Carrossel";
import Promocoes from "../../components/home/Promocoes";
import NovosProdutos from "../../components/home/NovosProdutos";

import Layout from "../../components/layout_menu/Layout";
import MaisVendidos from "../../components/home/MaisVendidos";
import OfertasEspeciais from "../../components/home/OfertasEspeciais";

const Inicio = () => {
    return ( 
        <Layout>
         <Carrossel/>
         <Promocoes/>
         <NovosProdutos/>
         <MaisVendidos/>
         <OfertasEspeciais/>
        </Layout> 
     );
}
 
export default Inicio;