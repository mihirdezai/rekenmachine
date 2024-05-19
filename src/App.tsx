import { MouseEvent, useState } from 'react'
import Button from './components/Button'
import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'

const buttons = [
  [7, 8, 9, '÷'],
  [4, 5, 6, '×'],
  [1, 2, 3, '−'],
  ['C', '0', '=', '+']
]

const operators = ['÷', '×', '−', '+', '=']

function App() {
  const [currentInput, setCurrentInput] = useState<string>('0')
  const [operand, setOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false)

  const [theme, setTheme] = useState<string>('light')

  const handleOnClick = (event: MouseEvent, value: Number | string) => {
    event.preventDefault()

    const valueStr = value.toString()

    if (operators.includes(valueStr)) {
      handleOperator(valueStr)
      return
    }

    if (valueStr === '=') {
      handleEqual()
      return
    }

    if (valueStr === 'C') {
      handleClear()
      return
    }

    handleNumber(valueStr)
  }

  const handleNumber = (value: string) => {
    if (waitingForOperand) {
      setCurrentInput(value)
      setWaitingForOperand(false)
    } else {
      setCurrentInput(currentInput === '0' ? value : currentInput + value)
    }
  }

  const handleOperator = (nextOperator: string) => {
    const resultValue = parseFloat(currentInput)

    if (operand === null) {
      setOperand(resultValue)
    } else if (operator) {
      const result = calculate(operand, resultValue, operator)
      setCurrentInput(result.toString())
      setOperand(result)
    }

    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  const handleEqual = () => {
    if (operator && operand !== null) {
      const resultValue = parseFloat(currentInput)
      const result = calculate(operand, resultValue, operator)
      setCurrentInput(result.toString())
      setOperator(null)
      setOperand(null)
      setWaitingForOperand(false)
    }
  }

  const handleClear = () => {
    setCurrentInput('0')
    setOperand(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const calculate = (
    firstOperand: number,
    secondOperand: number,
    operator: string
  ) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '−':
        return firstOperand - secondOperand
      case '×':
        return firstOperand * secondOperand
      case '÷':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className={`${theme} h-screen font-mono bg-gray-100 dark:bg-gray-900`}>
      <div className="container pt-16 mx-auto">
        <div className="flex flex-col items-center mx-auto w-[340px]">
          <div
            className="flex items-center justify-center w-12 h-12 mb-12 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500"
            onClick={() => toggleTheme()}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </div>
          <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 text-5xl font-bold text-right text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                readOnly
                type="text"
                value={currentInput.toString()}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {buttons.flat().map((value) => (
                <Button
                  value={value}
                  type={
                    operators.includes(value.toString())
                      ? 'operator'
                      : 'operand'
                  }
                  onClick={(event) => handleOnClick(event, value)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
