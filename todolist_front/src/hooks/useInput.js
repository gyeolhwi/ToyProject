import React, { useState } from 'react';

function useInput(props) {
    const [textInput, setTextInput] = useState();

    onchange = (e) => {
        setTextInput( e.target.value);
    }
    const resetValue = () =>{
        setTextInput("");
    }
    return ({ textInput, resetValue, onchange });
}

export default useInput;