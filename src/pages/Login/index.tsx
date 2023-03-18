import * as zod from 'zod'

import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '../../lib/axios'

import {
    Container,
    FormContainer,
    InputContainer, 
    NoCount, 
    ButtonLogin
} from './styles'

import { useNavigate } from 'react-router-dom'

const loginValidationSchema = zod.object({
    email: zod.string(),
    password: zod.string()
})


export type NewLoginData = zod.infer<typeof loginValidationSchema>


export function Login(){

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm<NewLoginData>({
        resolver: zodResolver(loginValidationSchema),
      });

     async function handleLogin(data: NewLoginData) {
        console.log('login')
        
        const response = await api.post('/users/login', data)

        navigate('home')
        return response
    }

    return (
        <Container>
             <FormContainer onSubmit={handleSubmit(handleLogin)}>
                <span>Faça login</span>

                <InputContainer>
                    <input
                        placeholder='E-mail'
                        {...register('email')}
                        required
                    />

                    <input
                        placeholder='senha'
                        {...register('password')}
                        required
                    />
                </InputContainer>
               

                <ButtonLogin type='submit'>
                    Entrar
                </ButtonLogin>
             </FormContainer>
             
             <NoCount>
                <span>Não tenha conta?</span>

                <p>
                    <a href="">
                        Registre-se
                    </a>
                </p>
             </NoCount>
        </Container>
    )
}