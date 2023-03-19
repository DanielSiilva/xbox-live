

import { Header } from '../../components/Header'
import { Filter } from './components/Filter'

import {
    Container
} from './styles'


export function Home (){


    return (
        <Container>
            <Header />
            
            <div>
                <Filter />
            </div>
        </Container>
    )
}