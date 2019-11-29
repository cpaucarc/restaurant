import React from 'react'
import ReactDOM from 'react-dom'

var name = 'Cesar'
var person = {
    name : 'Cesar',
    last : 'Paucar',
    avatar: 'https://image.flaticon.com/icons/svg/145/145846.svg'
}
function getName(persona){
    return persona.name + ' '+ persona.last
}

var me = (
    <div>
        <h1>Hola {getName(person)}</h1>
        <img src={person.avatar}></img>
    </div>
);

var element1 = <h1>Hola,  mundo</h1>
var element2 = <h2>Hola {name}</h2>
var element3 = <h3>Hola {getName(person)}</h3>

var container = document.getElementById('root')

// ReactDOM.render(element1, container)
// ReactDOM.render(element2, container)
ReactDOM.render(me, container)