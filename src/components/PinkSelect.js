import { useState } from "react";

const PinkSelect = ({ name, options, label, onChange }) => {
    const [value, setValue] = useState("")
    const changeHandler = event => {
        setValue(event.target.value);
        if (onChange) onChange(event);
    }

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