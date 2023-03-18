
import {
    Container,
    FormContainer,
    ButtonLogin,
    NoCount,
    ButtonCreate

} from './styles'




export function CreateUse(){

    return(
        <Container>
            <FormContainer>
                <input
                    placeholder='Digite seu nome'
                    required
                />

                <input
                    placeholder='Digite um email'
                    required
                />

                <input
                    placeholder='Digite uma senha'
                    required
                />

                <input
                    placeholder='Digite seu CPF'
                    required
                />

                <ButtonCreate>
                    inscreva-se
                </ButtonCreate>
            </FormContainer>

            <NoCount>
                já tem uma conta?
                    
                <ButtonLogin>
                    entre
                </ButtonLogin>
            </NoCount>
        </Container>

    )
}