const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    console.log((count += 1))
  }

  return (
    <container>
      <h2>useState error example</h2>
      <div className="count">{count}</div>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </container>
  )
}

export default ErrorExample
