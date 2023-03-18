
import {
    Container,
    FormContainer,
    InputContainer
} from './styles'

export function Login(){

    return (
        <Container>
             <FormContainer>
                <span>Faça login</span>

                <InputContainer>
                    <input
                        placeholder='E-mail'
                    />

                    <input
                        placeholder='senha'
                    />
                </InputContainer>
               

                <button>Entrar</button>
             </FormContainer>
             
             <div>
                <span>Não tenha conta?</span>
                <button>Registre-se</button>
             </div>
        </Container>
    )
}