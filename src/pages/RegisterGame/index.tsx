
import { Header } from '../../components/Header'


import {
    Container,
    Content,
    FormContainer
} from './styles'


export function RegisterGame (){
    

    return (
        <Container>
            <Header />

            <Content>
                <h1>Register game</h1>

                <FormContainer>
                    <input 
                        placeholder='Nome'
                    />

                    <input 
                        placeholder='Categoria'
                    />

                   <input 
                        placeholder='descrição'
                    />

                    <input 
                        placeholder='imagemUrl'
                    />

                    <input 
                        type='number'
                    />

                    <input 
                        type='number'
                    />

                    <input 
                        placeholder='trailerUrl'
                    />

                    <input 
                        placeholder='GamePlayUrl'
                    />
                </FormContainer>
            </Content>
        </Container>
    )
}