import { useState } from "react";

const PinkRadio = ({ type, label, name, buttons, onChange }) => {
    const [value, setValue] = useState("")
    const changeHandler = event => {
        setValue(event.target.value);
        if (onChange) onChange(event.target.value);
    }
    return (
        <div>
            <div>
                <p>{label}</p>
                {buttons.map(b => {
                    return <div>
                        <input type={type} id={b} name={name} value={b} onChange={changeHandler}/>
                        <label htmlFor={b}>{b}</label><br />
                    </div>
                })}
            </div>
        </div>
    );
}

export default PinkRadio;