export default function MoodHistory({ moods, moodHistory, clearHistory }) {
  const getMoodEmoji = (value) => {
    return moods.find(m => m.value === value)?.emoji || '❓';
  };

  const getMoodLabel = (value) => {
    return moods.find(m => m.value === value)?.label || 'Unknown';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Calculate weekly average
  const weeklyMoods = moodHistory.slice(0, 7);
  const averageMood = weeklyMoods.length > 0
    ? Math.round(weeklyMoods.reduce((sum, entry) => sum + entry.mood, 0) / weeklyMoods.length)
    : null;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Your Mood History</h3>
        {moodHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors focus:outline-none hover:underline"
          >
            Clear History
          </button>
        )}
      </div>

      {moodHistory.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">📈</div>
          <p className="text-gray-600">Start tracking your mood to see your history here</p>
        </div>
      ) : (
        <>
          {/* Weekly Average */}
          {averageMood && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Weekly Average</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {getMoodEmoji(averageMood)} {getMoodLabel(averageMood)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tracking</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {moodHistory.length} day{moodHistory.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History List */}
          <div className="space-y-4">
            {moodHistory.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{getMoodEmoji(entry.mood)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{getMoodLabel(entry.mood)}</p>
                    <p className="text-sm text-gray-500">{formatDate(entry.date)}</p>
                  </div>
                </div>

                {entry.note && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600 max-w-xs truncate">{entry.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Simple Chart */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Trend</h4>
            <div className="flex items-end h-32 gap-1">
              {moodHistory.slice(0, 7).reverse().map((entry, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-primary-500 rounded-t-lg transition-all duration-300 hover:bg-primary-600"
                    style={{
                      height: `${(entry.mood / 5) * 100}%`,
                      backgroundColor: moods.find(m => m.value === entry.mood)?.color.split(' ')[0].replace('bg-', '') || '#3B82F6'
                    }}
                  />
                  <div className="text-xs text-gray-500 mt-2">
                    {formatDate(entry.date).charAt(0)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}