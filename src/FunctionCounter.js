import React, {useState} from 'react';

function FunctionCounter() {
    const [count,setCount] = useState(0);

    // const [name,setName] = useState("");
    // const [flag,setFlag] = useState(false);

    // const [array,setArray] = useState([11,22,33,44,55,66]);

    // const [object,ssetObject] = useState({id:10, name:'john'});

    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);

    return(
        <div>
            <button onClick = {increase}> + </button>
            <h1>{count}</h1>
            <button onClick = {decrease}> - </button>
        </div>
    )
}

export default FunctionCounter;