
import {
    Container, 
    ImageGame, 
    Title,
    Description, 
    ImgBannerTrailer
} from './styles'



interface GamesTypes {
    id: number
    title: string
    CoverImageUrl: string
    description: string
    year: number
    imdbScore: number
    trailerYouTubeUrl: string
    gameplayYouTubeUrl: string 
}

interface GamesProps {
    games: GamesTypes
}


export function CardGames ({games}:GamesProps){


    return(
        <Container>
            <ImageGame 
                src={games.CoverImageUrl} 
                alt={games.title}
            />
            <Description>
                <Title>{games.title}</Title>
                <p>Descrição: {games.description}</p>
                <p>Ano: {games.year}</p>
            </Description>
            

            <ImgBannerTrailer>
                <p>Game Play</p>

                <button>
                    <a href={games.gameplayYouTubeUrl}>
                        Assistir Agora
                    </a>
                </button>
            </ImgBannerTrailer>

            <ImgBannerTrailer>
                <p>Trailer</p>
                
                <button>
                    <a href={games.trailerYouTubeUrl}>
                        Assistir Agora
                    </a>
                </button>
                
            </ImgBannerTrailer>

            <p>Score: {games.imdbScore}</p>
            
        </Container>
    )
}