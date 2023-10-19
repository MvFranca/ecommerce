import '../../styles/layout/Footer.scss'

const Footer = () => {
    return ( 
        <footer className='footer'>
           <section>
                <div>
                    <h3>Mais sobre a loja</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi, dignissimos quos magnam facilis natus quibusdam quae aperiam, illo fuga distinctio, at ipsa nulla ab provident? Corrupti nemo consequuntur molestias. lorem
                    </p>
                </div>
                <div>
                    <h3>Compras</h3>
                    <ul>
                        <li>Acessórios</li>
                        <li>Acessórios</li>
                        <li>Acessórios</li>
                        <li>Acessórios</li>
                        <li>Acessórios</li>
                    </ul>
                </div>
                <div>
                <h3>Sua Conta</h3>
                    <ul>
                        <li>Perfil</li>
                        <li>Perfil</li>
                        <li>Perfil</li>
                        <li>Perfil</li>
                        <li>Perfil</li>
                    </ul>
                </div>
           </section>
           <div id='direitos'>
           ©Direitos autoriais 2023 | Todos os direitos Reservados | Marcos Vinicius
           </div>
        </footer>
     );
}
 
export default Footer;