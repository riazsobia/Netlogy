import React from 'react';

const People = (props) => {

    return (
        <div>
            <ul>
                {Object.keys(props.data).map((key, indx)=> {
                    return (
                        <li key={indx}>
                            <a href={props.data[key]}>{key}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default People;