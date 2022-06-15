import { useState } from "react";

export const CounterApp = () =>{
    const [counter, setCounter] = useState(10);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <br></br>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
        </>
    )



}