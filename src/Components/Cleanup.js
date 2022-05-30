import React, { useEffect, useState } from 'react'


const Cleanup = () => {
    const[width, setWidth] = useState(window.screen.width);


    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        console.log("add event");
        window.addEventListener("resize", actualWidth)

        return () => {
            console.log("remove event");
            window.removeEventListener("resize", actualWidth)
        }
    });

    

  return (
    <div>
      <p>The actual size of the window is</p>
      <h1>{width}</h1>
    </div>
  )
}

export default Cleanup
