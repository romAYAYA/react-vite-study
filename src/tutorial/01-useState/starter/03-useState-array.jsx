import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearPeople = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <div> {name} </div>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button type="button" className="btn" onClick={clearPeople}>
        clear
      </button>
    </div>
  )
}

export default UseStateArray
