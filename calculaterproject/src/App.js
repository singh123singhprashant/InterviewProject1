import React from "react";
import React,{useState} from "react";
 
const App = () =>
{
    const [result, setResult]=useState("");

    const handleClick=(e)=>{
        setResult(e.target.name)
    }
    return(
         <div className="cal">

            <form>
             <input type="text" value={result}></input>
            </form>
         
        <div className="key">
        <button onClick={handleClick}>Clear</button>
        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>&divide;</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>&times;</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>&dash;</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>=</button>

        </div>


        </div>
    )
}

export default App;