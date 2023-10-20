import IconBackInTime from '../../icons/IconBackInTime';
import IconBxsTruck from '../../icons/IconTruck';
import '../../styles/home/Carrossel.scss'

const Carrossel = () => {
    return ( 
        <div className="carrossel">
            <img src="/carrossel/imagem1.webp" alt="" />

            <div className='informacoesLoja'>
                <aside><strong>2</strong> anos de garantia</aside>
                <aside><strong><IconBxsTruck/></strong> Frete grátis</aside>
                <aside><strong><IconBackInTime/></strong> Garantia de 30 dias</aside>
            </div>
        </div>
     );
}
 
export default Carrossel;