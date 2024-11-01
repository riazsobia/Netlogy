 import React from 'react';

 export default props=> {
     return(
        <>
            <p>My List ..</p>
            <ul>
                {props.children}
            </ul>
        </>
     )
 }