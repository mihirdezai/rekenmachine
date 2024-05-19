function App() {
  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h1 className="p-8 font-mono text-5xl font-semibold text-center dark:text-gray-200">
          Rekenmachine
        </h1>

        <div className="flex flex-col items-center mx-2 my-8">
          <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 text-3xl font-bold text-right text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                readOnly
                type="text"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                7
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                8
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                9
              </button>
              <button className="py-3 text-2xl font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                {'\u00f7'}
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                4
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                5
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                6
              </button>
              <button className="py-3 text-2xl font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                {'\u00d7'}
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                1
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                2
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                3
              </button>
              <button className="py-3 text-2xl font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                {'\u2212'}
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                0
              </button>
              <button className="py-3 text-2xl font-bold transition-colors bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500">
                .
              </button>
              <button className="py-3 text-2xl font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                {'\u003d'}
              </button>
              <button className="py-3 text-2xl font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
                {'\u002b'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
