import { useEffect, useState } from 'react'

import { UserTypes } from '../../@types/UserTypes'

import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { UserCar } from './components/UserCard'

import {
    Container,
    Content,
    CardContainer
} from './styles'


export function UserPage (){
    const [user, setUser] = useState<UserTypes[]>([])


    async function fetchUser(){
        const response = await api.get('/users')
        setUser(response.data)
    }

    const userSize = user.length > 0

    useEffect(() => {
        fetchUser()
    }, [])

    
    return (
        <Container>
            <Header />

            <Content>
                <h1>Lista de usuários</h1>
                
                <CardContainer>
                    {userSize ? 
                        user.map((user) => {
                            return <UserCar user={user} key={user.id} />
                        })
                            : 
                        <p>Carregando</p>
                    }
                </CardContainer>
            </Content>
        </Container>
    )
}