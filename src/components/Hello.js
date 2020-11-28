import React from 'react'


const Hello = ({name, heroName, children}) => {
    

    // jsx version of Hello component

    return (
        <div>
            <h1>Hello Hello {name} aka {heroName}</h1>
            
            <h3>{children}</h3>
        </div>
    )

    // end jsx version of Hello component

    // js version of Hello component

    // return React.createElement('div'
    // , {id: 'demoid', className: 'democlass'}
    // , React.createElement('h1', null, 'Hello '+props.name))

    // end js version of Hello component
}

export default Hello