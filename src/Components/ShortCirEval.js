import React, { useState } from 'react';

const ShortCirEval = () => {

    const [demo, setDemo] = useState("");
    return (
        <div>
            {/* <h1>{ "Reshu" || demo }</h1> */}
            <h1>{demo ||
                <>
                    <h1>Hii</h1>
                    <p>This is react tutorial</p>
                </>
            }</h1>
            <h1>{demo && "Singh"}</h1>
        </div>
    );
};

export default ShortCirEval;




// multiple element use in and or or operation perform