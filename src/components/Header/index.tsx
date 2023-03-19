
import Logo from '../../assets/logo.png'

import {
    Container,
    NavContainer
} from './styles'



export function Header (){


    return (
        <Container>
            <img  src={Logo} alt='logo xbox'/>

            <NavContainer>
                <button> Sair</button>
                <button> Favoritos</button>
                <button> Cadastrar</button>
                <button> Cadastrar usuarios</button>
            </NavContainer>
        </Container>
    )
}