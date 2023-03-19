
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useAuthContext } from '../../context/AuthContext'

import {
    Container,
    NavContainer,
    Button
} from './styles'



export function Header (){
    const {logout} = useAuthContext()

    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate('/')
    }

    return (
        <Container>
            <img  src={Logo} alt='logo xbox'/>

            <NavContainer>
                <Button
                    onClick={handleLogout}
                    > Sair
                </Button>

                <Button> Favoritos</Button>
                <Button> Cadastrar</Button>
                <Button> Cadastrar usuarios</Button>
            </NavContainer>
        </Container>
    )
}