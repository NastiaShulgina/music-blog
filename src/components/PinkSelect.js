import { useState } from "react";
import { useEffect } from "react";

const PinkSelect = ({ artist, sortOrder, name, options, label, onChange, cancelAlbum, cancelSorting, cancelLanguage }) => {
    const [value, setValue] = useState("")
    const changeHandler = event => {
        setValue(event.target.value);
        if (onChange) onChange(event.target.value);
        if (cancelAlbum) cancelAlbum('');
        if (cancelLanguage) cancelLanguage('');
        // if (cancelSorting) cancelSorting('');
        // console.log(sortOrder);
        // if (artist) console.log(artist);
    }

    // useEffect(() => {
    //     document.getElementsByTagName('option')[0].selected = 'selected'
    //     console.log("hhhh");
    // }, [artist])

    return (
        <div>
            <label>{label}</label>
            <select name={name} onChange={changeHandler} value={value}>
                <option value="" >Choose...</option>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );
}

export default PinkSelect;