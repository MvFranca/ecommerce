import { ReactNode } from "react";
import '../../styles/layout/FixedComponent.scss'

type props = {
    children: ReactNode;
    descricao: string;
}

const FixedComponent = ({descricao, children}: props) => {
    return ( 
            <div className="fixed-component">
                {children}
                <p>
                    {descricao}
                </p>
            </div>
     );
}
 
export default FixedComponent;