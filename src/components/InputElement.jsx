import React, { useState } from "react";
import { useDispatch } from "react-redux";

const InputElement = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {

            const newItem = {
                title: inputValue.trim(),
                isDone: false,
                id: Math.random()
            };

            dispatch({
                type: 'addTodo',
                payload: newItem
            })

        };
    };

    return (
        <div>

            <p>Enter new element: </p>

            <input className="border-yellow-800 border-2 bg-green p-[10px] text-black" onChange={handleInputChange} value={inputValue} type="text" />

            <button className="p-[10px] ml-[10px] bg-green-800 text-white" onClick={handleAddTodo}>add</button>

        </div>

    )
};

export default InputElement;