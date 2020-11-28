import React from 'react'

function Columns() {
    // const items = []
    return (
        <React.Fragment>
            {/* {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Rishikesh</td>
        </React.Fragment>
        // alternative for React.Fragment
        // <>
        // <td>Name</td>
        // <td>Rishikesh</td>
        //</> but you cannot pass key in this
    )
}

export default Columns
