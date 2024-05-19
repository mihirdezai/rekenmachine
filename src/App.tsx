import Button from './components/Button'

const buttonValues = [
  '7',
  '8',
  '9',
  '÷',
  '4',
  '5',
  '6',
  '×',
  '1',
  '2',
  '3',
  '−',
  '0',
  '.',
  '=',
  '+'
]

const operators = ['÷', '×', '−', '+', '=']

function App() {
  return (
    <div className="h-screen font-mono bg-gray-100 dark:bg-gray-900">
      <div className="container py-32 mx-auto">
        <div className="flex flex-col items-center mx-auto w-[340px] h-[540px]">
          <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 text-5xl font-bold text-right text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                readOnly
                type="text"
                value="0000000000"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {buttonValues.map((value) => (
                <Button
                  value={value}
                  type={operators.includes(value) ? 'operator' : 'operand'}
                  onClick={() => {}}
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
