export default function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`inline-flex items-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer w-full text-left p-4 border ${selectedAnswer === option.value
              ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
              : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}