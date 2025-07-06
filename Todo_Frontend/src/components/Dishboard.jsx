import React, { useState } from "react";

function Dishboard() {
    const [count, setCount] = useState(0);

    function decr() {
        setCount(count - 1);
    }
    function incr() {
        setCount(count + 1);
    }

    function IncreaseButton(setCount,count) {
        return <button onClick={
            setCount(count+1)
        }>Increment</button>;
    }

    function DecreaseButton() {
        return <button onClick={decr}>Decrement</button>;
    }

    return (
        <div>
            <div id="count">{count}</div>
            <br /><br />
            <IncreaseButton setCount={setCount} count={count} />
            <DecreaseButton />
        </div>
    );
}

export default Dishboard;