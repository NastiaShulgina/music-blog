import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const PinkRadio = ({ type, label, name, songs, languages, onChange }) => {
    const { artist, language } = useSelector((state) => state.form)
    const [availableLanguages, setAvailableLanguages] = useState(languages);

    useEffect(() => {
        if (artist === '') setAvailableLanguages(languages);
        else {
            const thisArtistSongs = songs.filter(song => song.artist === artist)
            const languagesSet = new Set(thisArtistSongs.map(song => song.language));
            setAvailableLanguages(Array.from(languagesSet))
        }
    }, [artist]);

    return (
        <div>
            {availableLanguages.length === 1 ||
                <div>
                    <p>{label}</p>
                    <input checked={language===''} type={type} id='ANY' name={name} value='' onChange={event => { onChange(event) }} />
                    <label htmlFor='ANY'>ANY</label><br />
                    {availableLanguages.map(b => {
                        return <div>
                            <input type={type} id={b} name={name} value={b} onChange={event => { onChange(event) }} />
                            <label htmlFor={b}>{b}</label><br />
                        </div>
                    })}
                </div>}
        </div>
    );
}

export default PinkRadio;