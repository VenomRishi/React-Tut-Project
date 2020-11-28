import React from 'react'

const heading =  {
    fontSize: '72px',
    color: 'blueviolet'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
            <h1 className="success">Success</h1>
        </div>
    )
}

export default Inline
