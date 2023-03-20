
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

    function handleHome(){
        navigate('/home')
    }

    function handleLogout(){
        logout()
        navigate('/')
    }

    function handleToFavoritePage(){
        logout()
        navigate('/favoritePage')
    }

    function handleToRegisterGamePage(){
        navigate('/registerGame')
    }


    return (
        <Container>
            <img  src={Logo} alt='logo xbox'/>

            <NavContainer>
                <Button
                    onClick={handleHome}
                > 
                    Home
                </Button>

                <Button
                    onClick={handleLogout}
                > 
                    Sair
                </Button>

                <Button
                    onClick={handleToFavoritePage}
                > 
                    Favoritos
                </Button>

                <Button
                    onClick={handleToRegisterGamePage}
                > 
                    Cadastrar Game
                </Button>
                <Button> Cadastrar usuarios</Button>
            </NavContainer>
        </Container>
    )
}