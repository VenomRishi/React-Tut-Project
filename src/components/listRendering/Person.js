import React from 'react'

function Person({person, key }) {
    return (
        <div>
            {key}<h2>I am {person.name}, years old {person.age}, I know {person.skills}</h2>
        </div>
    )
}

export default Person
