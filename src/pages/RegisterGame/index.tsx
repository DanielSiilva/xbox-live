import * as zod from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { Header } from '../../components/Header'


import {
    Container,
    Content,
    FormContainer,
    ButtonRegister
} from './styles'

const RegisterValidationSchema = zod.object({
    title: zod.string(),
    categoria: zod.string(),
    description: zod.string(),
    CoverImageUrl: zod.string(),
    year: zod.number(),
    imdbScore: zod.number(),
    trailerYouTubeUrl: zod.string(),
    gameplayYouTubeUrl: zod.string()
})


export type NewLoginData = zod.infer<typeof RegisterValidationSchema>



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

                    <ButtonRegister>
                        Register
                    </ButtonRegister>
                </FormContainer>
            </Content>
        </Container>
    )
}