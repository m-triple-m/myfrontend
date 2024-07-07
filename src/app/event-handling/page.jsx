'use client';
import React from 'react';

const EventHandling = () => {

    return (
        <div>
            <h1>Event Handling</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => { alert('Hurrayyy...') }} >Click Me</button>

            <input type="color" onChange={ (e) => { 
                console.log(e.target.value);
                document.body.style.backgroundColor = e.target.value;
            }} />

        </div>
    )

}

export default EventHandling;