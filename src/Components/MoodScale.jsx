export default function MoodScale({ moods, selectedMood, onSelectMood }) {
  return (
    <div className="grid grid-cols-5 gap-2 sm:gap-4">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelectMood(mood.value)}
          className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
            selectedMood === mood.value
              ? `${mood.color} scale-105 shadow-lg`
              : 'bg-white border-gray-200 hover:bg-gray-50'
          }`}
        >
          <span className="text-3xl sm:text-4xl mb-2">{mood.emoji}</span>
          <span className="text-sm font-medium">{mood.label}</span>
        </button>
      ))}
    </div>
  );
}