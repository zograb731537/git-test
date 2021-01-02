import React, {useState} from 'react';

export default function Cnange(props){
    const [state, setstate] = useState([0,1]);

    const swap = () => {
        const newState = [];
        newState[0] = state[1];
        newState[1] = state[0];
        setstate(newState);
    }

    return (
        <div>
            <h1>this state{state.toString()}</h1>
            <button onClick={swap}>change</button>
        </div>
    )
}