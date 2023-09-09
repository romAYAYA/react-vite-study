import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'john',
    age: 23,
    hobby: 'video games',
  })

  const displayPerson = () => {
    setPerson({ name: 'peter', age: 21, hobby: 'reading' })
    // setPerson({ name: 'Susan' })
    // setPerson({ ...person, name: 'Susan' })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Click
      </button>
    </>
  )
}

export default UseStateObject
