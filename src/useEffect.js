import React, { useState, useEffect } from "react";

function UseEffectE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return(<div>
    <h1>count value render is: {count}</h1>
  </div>)
}

export default UseEffectE;
