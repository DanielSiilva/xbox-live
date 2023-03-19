import * as zod from 'zod'

import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '../../lib/axios'



import {
    Container,
    FormContainer,
    ButtonLogin,
    NoCount,
    ButtonCreate

} from './styles'

import { useNavigate } from 'react-router-dom'

const createUserValidationSchema = zod.object({
    name: zod.string(),
    email: zod.string(),
    password: zod.string(),
    cpf: zod.number(),
})


export type CreateUserData = zod.infer<typeof createUserValidationSchema>



export function CreateUse(){
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
      } = useForm<CreateUserData>({
        resolver: zodResolver(createUserValidationSchema),
      });


      async function handleCreateUser(data: CreateUserData) {
        console.log(data);

        navigate('/')
    }

    function gotoPageLogin(){
        navigate('/')
    }


    return(
        <Container>
            <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
                <input
                    placeholder='Digite seu nome'
                    required
                    {...register('name')}
                />

                <input
                    placeholder='Digite um email'
                    required
                    {...register('email')}
                />

                <input
                    placeholder='Digite uma senha'
                    required
                    {...register('password')}
                />

                <input
                    placeholder='Digite seu CPF'
                    required
                    {...register('cpf', {valueAsNumber: true})}
                      
                />

                <ButtonCreate type='submit' >
                    inscreva-se
                </ButtonCreate>
            </FormContainer>

            <NoCount>
                já tem uma conta?
                    
                <ButtonLogin onClick={gotoPageLogin}>
                    entre
                </ButtonLogin>
            </NoCount>
        </Container>

    )
}