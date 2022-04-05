import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const PinkRadio = ({ type, label, name, languages, songs, artist, album, onChange }) => {
    // const [value, setValue] = useState("")
    // const changeHandler = event => {
    //     setValue(event.target.value);
    //     if (onChange) onChange(event.target.value);

    //}


    // const buttons = []
    // function generateButtons() {
    //     if (artist === '') {
    //         languages.map(language => buttons.push(language))
    //     }
    //     return buttons
    // }

    const [availableLanguages, setAvailableLanguages] = useState(languages);

    useEffect(() => {
        // console.log(artist);
        if (artist === '') setAvailableLanguages(languages);
        else { const thisArtistSongs = songs.filter(song => song.artist === artist)
        let languagesSet = new Set();
        thisArtistSongs.forEach(song => languagesSet.add(song.language))
        setAvailableLanguages(Array.from(languagesSet))}
        // console.log(availableLanguages);
    }, [artist]);

    return (
        <div>
            {availableLanguages.length === 1 ||
                <div>
                    <p>{label}</p>
                    <input type={type} id='ANY' name={name} value='' onChange={event => { onChange(event.target.value) }} />
                    <label htmlFor='ANY'>ANY</label><br />
                    {availableLanguages.map(b => {
                        return <div>
                            <input type={type} id={b} name={name} value={b} onChange={event => { onChange(event.target.value) }} />
                            <label htmlFor={b}>{b}</label><br />
                        </div>
                    })}
                </div>}
        </div>
    );
}

export default PinkRadio;