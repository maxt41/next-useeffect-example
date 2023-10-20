import {useEffect, useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState(0)

  const handleClick = () => { 
    setNumber(number + 1)
  }

  useEffect(() => {
    if(number > 10) {
      console.log('number is greater than 10')
    }
  }, [number])

  return (
    <>
      <main>
        <h1>{number}</h1>
        <button onClick={handleClick}>Increase number</button>
      </main>
    </>
  )
}
