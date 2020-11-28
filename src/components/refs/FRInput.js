import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'/>

//         </div>
//     )
// }

// for receiving forward refs
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})
export default FRInput
