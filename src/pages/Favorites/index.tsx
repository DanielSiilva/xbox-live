import { useContext } from "react"
import { Header } from "../../components/Header"
import { favoriteContext } from "../../context/FavoriteContex"


import { CardGames } from "../Home/components/CardGames"




import {
    Container,
    Content,
    Title,
    CardContainer
} from './styles'


export function FavoritePage(){
    const {favorites} = useContext(favoriteContext)



    return(
        <Container>
            <Header/>
            <Content>
                <Title>Sua lista de jogos</Title>
                
                <CardContainer>
                    {favorites.map((item) => { return (
                        <CardGames
                            key={item.id}
                            games={item}
                        />
                    )})}
                </CardContainer>
                
            </Content>
        </Container>
    )
}