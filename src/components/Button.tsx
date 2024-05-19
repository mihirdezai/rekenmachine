import { MouseEventHandler } from 'react'

interface ButtonProps {
  value: number | string
  type: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

function Button({ value, type, onClick }: ButtonProps) {
  return (
    <button
      className={`p-2 text-4xl font-semibold transition-colors rounded-lg ${
        type === 'operator'
          ? 'bg-orange-500 rounded-lg hover:bg-orange-600 text-white'
          : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
      }`}
      onClick={onClick}
    >
      {value.toString()}
    </button>
  )
}

export default Button
