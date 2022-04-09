import doIWannaKnow from "../audio-files/do_I_wanna_know.mp3"
import the505 from "../audio-files/505.mp3"
import feelGood from "../audio-files/feel-good.mp3"
import newSong from "../audio-files/new-song.mp3"
import sweaterWeather from "../audio-files/sweater-weather.mp3"
import wayDownWeGo from "../audio-files/way-down-we-go.mp3"
import tornaACasa from "../audio-files/torna-a-casa.mp3"
import minutes18 from "../audio-files/18-minutes.mp3"
import earthquake from "../audio-files/earthquake.mp3"
import leftWithAGun from "../audio-files/left-with-a-gun.mp3"
import dolceVita from "../audio-files/dolce-vita.mp3"

export const LANGUAGES = ['UA', 'EN', 'IT']

export const ALBUM_PHOTOS = {
    'AM': 'https://upload.wikimedia.org/wikipedia/uk/5/55/Arctic_Monkeys_AM.png',
    'Il ballo della vita': 'https://upload.wikimedia.org/wikipedia/ru/1/1a/M%C3%A5neskin_-_Il_ballo_della_vita.png',
    'Demon Days': 'https://upload.wikimedia.org/wikipedia/ru/1/19/Demon_Days.jpeg',
    'A / B': 'https://img.discogs.com/HkElX5L1rkUcLl4oPqcHmiLgsmM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8625478-1465400693-1064.jpeg.jpg',
    'Dolce vita': 'https://upload.wikimedia.org/wikipedia/uk/thumb/4/40/Dolce_Vita_%28%D0%9E._%D0%95.%29.jpg/250px-Dolce_Vita_%28%D0%9E._%D0%95.%29.jpg',
    'I Love You': 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/The_Neighbourhood_I_Love_You.jpeg/274px-The_Neighbourhood_I_Love_You.jpeg',
    'IGOR': 'https://upload.wikimedia.org/wikipedia/ru/e/e4/Tyler%2C_the_Creator_-_Igor.jpg',
    'Oracolo': 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/d9/ee/4b/d9ee4b04-67c0-f013-ab71-5aef5aa662de/cover.jpg/1200x1200bf-60.jpg',
    'Favourite Worst Nightmare': 'https://upload.wikimedia.org/wikipedia/en/a/ae/Favourite_Worst_Nightmare.jpg',
}

export const artistsAlbums = {
    "Maneskin": ["Il ballo della vita"],
    "Okean Elzy": ["Dolce vita"],
    "Arctic Monkeys": ["Favourite Worst Nightmare", "AM"],
    "Tyler, The Creator": ["IGOR"],
    "KALEO": ["A / B"],
    "Skinshape": ["Oracolo"],
    "The Neighbourhood": ["I Love You"],
    "Gorillaz": ["Demon days"],
}

export function generateAlbums() {
    const justAlbums = [
        { id: 1, name: 'AM', artist: 'Arctic Monkeys' },
        { id: 2, name: 'Il ballo della vita', artist: 'Maneskin' },
        { id: 3, name: 'Demon Days', artist: 'Gorillaz' },
        { id: 4, name: 'A / B', artist: 'KALEO' },
        { id: 5, name: 'Dolce vita', artist: 'Okean Elzy' },
        { id: 6, name: 'I Love You', artist: 'The Neighbourhood' },
        { id: 7, name: 'IGOR', artist: 'Tyler, The Creator' },
        { id: 8, name: 'Oracolo', artist: 'Skinshape' },
        { id: 9, name: 'Favourite Worst Nightmare', artist: 'Arctic Monkeys' }
    ]

    const albums = justAlbums.map(album => {
        album.photoUrl = ALBUM_PHOTOS[album.name]
        return album;
    })
    return albums;
}

export const albums = generateAlbums();


export function generateSongs() {
    const justSongs = [
        { id: 1, year: 2013, name: 'Do I wanna know?', album: 'AM', language: 'EN', chorus: "Crawlin' back to you\nEver thought of callin' when\nYou've had a few?\n'Cause I always do", audiofile: doIWannaKnow },
        { id: 2, year: 2018, name: 'New Song', album: 'Il ballo della vita', language: 'EN', chorus: "You got me trapped in your my mind\nBut tonight, I won't be yours", audiofile: newSong },
        { id: 3, year: 2005, name: 'Feel Good Inc.', album: 'Demon Days', language: 'EN', chorus: "Windmill, windmill for the land\nTurn forever, hand in hand\nTake it all in on your stride\nIt is ticking, falling down", audiofile: feelGood },
        { id: 4, year: 2015, name: 'Left with a Gun', album: 'Oracolo', language: 'EN', chorus: "Don't take it for granted\nOr your life, it will be slanted\nAnd the chances you are left with are gone", audiofile: leftWithAGun },
        { id: 5, year: 2010, name: 'Dolce vita', album: 'Dolce vita', language: 'UA', chorus: "Кому тут тюрма,\nКому – дольче вiта", audiofile: dolceVita },
        { id: 6, year: 2013, name: 'Sweater Weather', album: 'I Love You', language: 'EN', chorus: "She knows what I think about\nAnd what I think about\nOne love, two mouths\nOne love, one house\nNo shirt, no blouse", audiofile: sweaterWeather },
        { id: 7, year: 2019, name: 'EARTHQUAKE', album: 'IGOR', language: 'EN', chorus: "'Cause you make my earth quake\nOh, you make my earth quake", audiofile: earthquake },
        { id: 8, year: 2018, name: 'Torna a casa', album: 'Il ballo della vita', language: 'IT', chorus: "Quindi Marlena torna a casa\nChe il freddo qua si fa sentire\nQuindi Marlena torna a casa\nChe non voglio più aspettare", audiofile: tornaACasa },
        { id: 9, year: 2010, name: '18 хвилин', album: 'Dolce vita', language: 'UA', chorus: "Ми так ховалися вiд зими\n18 хвилин назад!\nЛистопад, стали видимими знов.", audiofile: minutes18 },
        { id: 10, year: 2015, name: "Way down we go", album: 'A / B', language: 'EN', chorus: "Say way down we go\n'Cause they will run you down, down 'til you fall\nWay down we go, ooh", audiofile: wayDownWeGo },
        { id: 11, year: 2007, name: "505", album: 'Favourite Worst Nightmare', language: 'EN', chorus: "I'm going back to 505\nIf it's a seven-hour flight or a forty-five-minute drive\nIn my imagination, you're waiting lying on your side", audiofile: the505 },
    ]

    const songs = justSongs.map(song => {
        song.artist = albums.find(e => e.name === song.album).artist
        song.photoUrl = ALBUM_PHOTOS[song.album]
        // song.liked = false
        return song;
    })
    return songs;
}

export const songs = generateSongs();