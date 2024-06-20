"use client"

import { useEffect } from "react";

//Temp component
const Temp = () => {
  useEffect(() => {
    throw new Error('erro')
  }, [])
  
    return (
        <div>Temp</div>
    )
};

export default Temp;
