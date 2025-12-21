export default function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === option.value
                ? 'bg-primary-100 border-primary-300 text-primary-700'
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}