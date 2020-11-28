import React from 'react'
// import Person from './Person'

function NameList() {
    const names = ['a', 'b', 'c', 'a']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'rishi',
    //         age:10,
    //         skills: 'angular'
    //     },
    //     {
    //         id: 2,
    //         name: 'mark',
    //         age:20,
    //         skills: 'react'
    //     },
    //     {
    //         id: 3,
    //         name: 'abhi',
    //         age:30,
    //         skills: 'vue'
    //     }
    // ]

    return (
        <div>
            {
                // persons.map(person=>(
                //     <Person key={person.id} person={person}/>
                // ))
            names.map((name, index)=> <h2 key={index}>{index+1} {name}</h2>)
            }
        </div>
    )
}

export default NameList
