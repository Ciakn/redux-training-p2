import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CakeCounter() {
    const { numOfCakes } = useSelector((state) => state);
    const dispatch = useDispatch()
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>numOfCakes:{numOfCakes}</h1>
      <button onClick={()=>dispatch({type:"BUY_CAKE" , value})}>buyCake</button>
    </div>
  );
}

export default CakeCounter;
