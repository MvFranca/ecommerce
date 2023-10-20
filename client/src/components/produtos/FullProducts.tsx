import { useEffect, useState } from "react";
import CardProduct from "../card/CardProduct";
import '../../styles/produtos/FullProducts.scss'

const FullProducts = () => {

    const [produtos, setProdutos] = useState([])

    async function api(){
        const dados = await fetch('http://127.0.0.1:5173/produtos/catologoInteiro.json')
        const json = await dados.json()
        setProdutos(json)
    }

    useEffect(()=> {
        api()
    }, [])

    return ( 
        <div className="fullproducts">
            <div className="filtros">
                
                <div>
                    <label htmlFor="opcoes">Ordenar por: </label>
                    <select name="opcoes" id="opcoes">
                        <option value="">Mais vendidos</option>
                        <option value="">Novos Produtos</option>
                        <option value="">Últimas unidades</option>
                        <option value="">Em promoção</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="opcoes">Mostrar: </label>
                    <select name="opcoes" id="opcoes">
                        <option value="">12</option>
                        <option value="">24</option>
                        <option value="">36</option>
                        <option value="">48</option>
                    </select>
                </div>
               
            </div>
            <section>
                {
                    produtos.map((produto) => {
                        const {id, nome, cor, preco, img} = produto
                        return(
                                <CardProduct
                                cor={cor}
                                src={img}
                                preco={preco}
                                titulo={nome}
                                key={id}
                                />
                        )
                    })
                }
            </section>

        </div>
     );
}
 
export default FullProducts;