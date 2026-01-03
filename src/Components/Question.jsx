export default function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`inline-flex items-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer w-full text-left p-4 border ${selectedAnswer === option.value
              ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-700 dark:text-blue-300 shadow-sm'
              : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}