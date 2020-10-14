import React from 'react'
import ReactDOM from 'react-dom'

const user = {
	firstname: "Maria",
	lastname: "Diaz",
	age: 20,
	photo: 'logo192.png'
}
function getName(user){
	return `${user.firstname} ${user.lastname}`
}

const ele = (<div><h1>Hello {getName(user)}</h1>
<img src={user.photo} />
</div>)

const container = document.getElementById('root')

ReactDOM.render(ele, container)

/*const elem = document.createElement('div');
const container = document.getElementById('root')

elem.innerHTML = 'Hello React'
container.appendChild(elem);*/

