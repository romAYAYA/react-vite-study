import { useState } from 'react'

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleClick = () => {
    // setNumber((currentState) => {
    //   return currentState + 1
    // })
    setTimeout(() => {
      console.log('hello')
      setNumber((currentNumber) => {
        return currentNumber + 1
      })
      setIsButtonDisabled(true)
    }, 5000)
  }

  return (
    <>
      <h1>Click the button as many times as you can</h1>
      <h2>{number}</h2>
      <button onClick={handleClick} disabled={isButtonDisabled} className="btn">
        click
      </button>
    </>
  )
}

export default UseStateGotcha
