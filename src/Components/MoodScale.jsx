export default function MoodScale({ moods, selectedMood, onSelectMood }) {
  return (
    <div className="grid grid-cols-5 gap-2 sm:gap-4">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelectMood(mood.value)}
          className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex-col p-4 sm:p-6 border-2 ${selectedMood === mood.value
            ? `${mood.color} scale-105 shadow-lg`
            : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
        >
          <span className="text-3xl sm:text-4xl mb-2">{mood.emoji}</span>
          <span className="text-sm font-medium">{mood.label}</span>
        </button>
      ))}
    </div>
  );
}