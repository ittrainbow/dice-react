import { useState, useEffect } from 'react'
import NoSleep from 'nosleep.js'

import './App.css'

const App = () => {
  const nosleep = new NoSleep()
  const [rolling, setRolling] = useState(false)
  const [diceOneTransform, setDiceOneTransform] = useState()
  const [diceTwoTransform, setDiceTwoTransform] = useState()
  const [delayOne, setDelayOne] = useState(2)
  const [delayTwo, setDelayTwo] = useState(2)

  const addListener = () => document.body.addEventListener('click', rollDice)
  const removeListener = () => document.body.removeEventListener('click', rollDice)

  useEffect(() => {
    nosleep.enable()
    rollDice() // eslint-disable-next-line
  }, [])

  const random = (span) => {
    return Math.floor(Math.random() * span) + 1
  }

  const rollDice = () => {
    const randomOne = random(6)
    const randomTwo = random(6)
    const randomThree = random(25) / 10 + 2
    const randomFour = random(25) / 10 + 2
    setDelayOne(randomThree)
    setDelayTwo(randomFour)
    removeListener()
    setRolling(true)

    setTimeout(() => {
      switch (randomOne) {
        case 1:
          setDiceOneTransform('rotateX(0deg) rotateY(0deg)')
          break
        case 2:
          setDiceOneTransform('rotateX(-90deg) rotateY(0deg)')
          break
        case 3:
          setDiceOneTransform('rotateX(0deg) rotateY(90deg)')
          break
        case 4:
          setDiceOneTransform('rotateX(0deg) rotateY(-90deg)')
          break
        case 5:
          setDiceOneTransform('rotateX(90deg) rotateY(0deg)')
          break
        case 6:
          setDiceOneTransform('rotateX(180deg) rotateY(0deg)')
          break
        default:
          break
      }
    }, 250)

    setTimeout(() => {
      switch (randomTwo) {
        case 1:
          setDiceTwoTransform('rotateX(0deg) rotateY(0deg)')
          break
        case 2:
          setDiceTwoTransform('rotateX(-90deg) rotateY(0deg)')
          break
        case 3:
          setDiceTwoTransform('rotateX(0deg) rotateY(90deg)')
          break
        case 4:
          setDiceTwoTransform('rotateX(0deg) rotateY(-90deg)')
          break
        case 5:
          setDiceTwoTransform('rotateX(90deg) rotateY(0deg)')
          break
        case 6:
          setDiceTwoTransform('rotateX(180deg) rotateY(0deg)')
          break
        default:
          break
      }
    }, 250)

    setTimeout(() => {
      setRolling(false)
      addListener()
    }, Math.max(randomThree, randomFour) * 1000 + 100)
  }

  return (
    <div className="container" style={{ backgroundColor: rolling ? '#f0f0f0' : '#dfdfdf' }}>
      <div
        className="diceOne"
        style={{
          animation: rolling ? `rolling${random(2)} ${delayOne}s` : 'none',
          transform: diceOneTransform
        }}
      >
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
      <div
        className="diceTwo"
        style={{
          animation: rolling ? `rolling${random(2)} ${delayTwo}s` : 'none',
          transform: diceTwoTransform
        }}
      >
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
      <div className={!rolling ? 'roll' : 'roll-disabled'}>ROLL</div>
    </div>
  )
}

export default App
