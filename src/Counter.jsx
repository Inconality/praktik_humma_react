import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    // Untuk menambah angka
    const increment = () => {
        setCount(count + 1);
    }
    const bulkIncrement = () => {
        // setCount(count + 5);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    // Untuk mengurangi angka
    const decrement = () => {
        setCount(count - 1);
    }
    const bulkDecrement = () => {
        setCount(count - 5);
    }

    // Untuk mereset angka
    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="bulk-counter button" onClick={bulkDecrement}>-5</button>
            <button className="counter button" onClick={decrement}>-1</button>
            <button className="reset button" onClick={reset}>Hapus</button>
            <button className="counter button" onClick={increment}>+1</button>
            <button className="bulk-counter button" onClick={bulkIncrement}>+5</button>
        </div>);
}

export default Counter
