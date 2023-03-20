import { useEffect, useState } from 'react'

import { api } from '../../lib/axios'
import { GamesDataTypes } from '../../@types/GamesTypes'


import { Header } from '../../components/Header'
import { Filter } from './components/Filter'
import { CardGames } from './components/CardGames'

import {
    Container, 
    Content, 
    Title, 
    CardContainer,
    NoItems
} from './styles'



export function Home (){
    const [games, setGames] = useState<GamesDataTypes[]>([])
    
    async function fetchProfile(){
        const response = await api.get('/games')
        setGames(response.data)
    }

    const sizeGames = games.length > 0


    useEffect(() => {
        fetchProfile()
    }, [])



    return (
        <Container>
            <Header />
            
            <Content>
                <Filter />
                
                <Title><h1>Sua lista de jogos</h1></Title>
                
                <CardContainer>
                    {sizeGames ? games.map((game) => { return (
                        <CardGames 
                            key={game.id}
                            games={game}
                        />
                    )}) : <NoItems><h1>Carregando...</h1></NoItems>}
                    
                </CardContainer>
                
            </Content>
        </Container>
    )
}