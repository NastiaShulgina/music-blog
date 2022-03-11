import { StyledLanding } from "./styles/Landing.styled";
import { StyledButton } from "./styles/Button.styled";
import { useState } from 'react';
import AlbumCard from "./AlbumCard";

const Landing = () => {
    const albumPhotos = {
        'AM': 'https://upload.wikimedia.org/wikipedia/uk/5/55/Arctic_Monkeys_AM.png',
        'il ballo della vita': 'https://upload.wikimedia.org/wikipedia/ru/1/1a/M%C3%A5neskin_-_Il_ballo_della_vita.png',
        'demon days': 'https://upload.wikimedia.org/wikipedia/ru/1/19/Demon_Days.jpeg',
        'A/B': 'https://img.discogs.com/HkElX5L1rkUcLl4oPqcHmiLgsmM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8625478-1465400693-1064.jpeg.jpg',
        'dolce vita': 'https://upload.wikimedia.org/wikipedia/uk/thumb/4/40/Dolce_Vita_%28%D0%9E._%D0%95.%29.jpg/250px-Dolce_Vita_%28%D0%9E._%D0%95.%29.jpg',
        'i love you': 'https://upload.wikimedia.org/wikipedia/ru/d/de/The_Neighbourhood_I_Love_You.jpeg',
        'IGOR': 'https://upload.wikimedia.org/wikipedia/ru/e/e4/Tyler%2C_the_Creator_-_Igor.jpg',
        'oracolo': 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/d9/ee/4b/d9ee4b04-67c0-f013-ab71-5aef5aa662de/cover.jpg/1200x1200bf-60.jpg'
    }
    const [albums, setAlbums] = useState([
        { id: 1, name: 'AM', artist: 'Arctic Monkeys', photoUrl: albumPhotos['AM'] },
        { id: 2, name: 'Il ballo della vita', artist: 'Maneskin', photoUrl: albumPhotos['il ballo della vita'] },
        { id: 3, name: 'Demon Days', artist: 'Gorillaz', photoUrl: albumPhotos['demon days'] },
        { id: 4, name: 'A / B', artist: 'KALEO', photoUrl: albumPhotos['A/B'] },
        { id: 5, name: 'Dolce vita', artist: 'Okean Elzy', photoUrl: albumPhotos['dolce vita'] },
        { id: 6, name: 'I Love You', artist: 'The Neighbourhood', photoUrl: albumPhotos['i love you'] },
        { id: 7, name: 'IGOR', artist: 'Tyler, The Creator', photoUrl: albumPhotos['IGOR'] },
        { id: 8, name: 'Oracolo', artist: 'Skinshape', photoUrl: albumPhotos['oracolo'] }
    ])
    const [visible, setVisible] = useState(4);
    const showMoreCards = () => setVisible((prevAmount) => prevAmount + 4)

    return (
        <StyledLanding>
            <h2><div>10</div> best music artists, <div>100</div>songs, <div>1</div> place</h2>
            <StyledButton brColor="#ef6461" color="#ef6461" maxWidth="max-content" alignSelf="center">EXPLORE NEW MUSIC</StyledButton>
            {/* <h3 className="title">SELECTION OF THE BEST ALBUMS:</h3> */}
            <div className="best-albums">
                {albums.slice(0, visible).map((album) => (
                    <AlbumCard album={album}/>
                ))
                }
            </div>
            <StyledButton onClick={showMoreCards} brColor="#ef6461" color="#ef6461">View more...</StyledButton>
        </StyledLanding>
    );
}

export default Landing;