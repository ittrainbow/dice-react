import './App.css'

import { useState, useEffect } from 'react'

const App = () => {
  const [rolling, setRolling] = useState(false)
  const [diceOneTransform, setDiceOneTransform] = useState()
  const [diceTwoTransform, setDiceTwoTransform] = useState()

  const addListener = () => document.body.addEventListener('click', rollDice)
  const removeListener = () => document.body.removeEventListener('click', rollDice)

  document.body.style.backgroundColor = rolling ? '#f0f0f0' : '#8ab4f8'

  useEffect(() => {
    addListener()
    // eslint-disable-next-line
  }, [])

  const rollDice = () => {
    removeListener()
    setRolling(true)
    const randomOne = Math.floor(Math.random() * 6) + 1
    const randomTwo = Math.floor(Math.random() * 6) + 1

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
    }, 2350)

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
    }, 3050)

    setTimeout(() => {
      addListener()
      setRolling(false)
    }, 3400)
  }

  return (
    <div className="container" style={{ backgroundColor: rolling ? '#f0f0f0' : '8ab4f8' }}>
      <div
        className="diceOne"
        style={{ animation: rolling ? 'rolling 2.3s' : 'none', transform: diceOneTransform }}
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
        style={{ animation: rolling ? 'rolling 3.0s' : 'none', transform: diceTwoTransform }}
      >
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
    </div>
  )
}

export default App
