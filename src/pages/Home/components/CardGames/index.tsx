
import { useContext } from 'react'
import { favoriteContext } from '../../../../context/FavoriteContex'
import {
    Container, 
    ImageGame, 
    Title,
    Description, 
    ImgBannerTrailer,
    ButtonAddFavorite,
    ButtonRemoveFavorite
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
    const {favorites, handleAddToFavorites, handleRemoveFavorites} = useContext(favoriteContext)

    const isFavorite = favorites.some((prod) => prod.id === games.id);

    return(
        <Container>
            <ImageGame 
                src={games.CoverImageUrl} 
                alt={games.title}
            />

            {!isFavorite? 
                <ButtonAddFavorite 
                    onClick={()=>handleAddToFavorites(games)}
                >
                    Adionar ao favoritos
                </ButtonAddFavorite>
                :
                <ButtonRemoveFavorite
                    onClick={()=>handleRemoveFavorites(games)}
                >
                    Remover dos favoritos
                </ButtonRemoveFavorite>
            }

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