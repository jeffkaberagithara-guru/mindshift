import { FaMapMarkerAlt, FaLanguage, FaCheckCircle, FaStar, FaVideo } from 'react-icons/fa';

export default function TherapistCard({ therapist }) {
  const specialties = therapist.specialties || [];

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Photo & Basic Info */}
        <div className="md:w-1/4">
          <div className="aspect-square rounded-xl bg-linear-to-br from-primary-100 to-primary-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-4 overflow-hidden">
            {therapist.photoUrl ? (
              <img
                src={therapist.photoUrl}
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-4xl text-primary-600 dark:text-primary-300 font-bold">
                {therapist.name.charAt(0)}
              </div>
            )}
          </div>

          {therapist.rating && (
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(therapist.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                    }`}
                />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                {therapist.rating.toFixed(1)}
              </span>
            </div>
          )}

          {therapist.price && (
            <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              ${therapist.price}/session
            </div>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{therapist.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{therapist.credentials}</p>
            </div>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              {therapist.acceptsInsurance && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                  <FaCheckCircle className="w-3 h-3" />
                  Insurance Accepted
                </span>
              )}

              {therapist.virtualAvailable && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                  <FaVideo className="w-3 h-3" />
                  Virtual Available
                </span>
              )}
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Specializes in:</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3">
            {therapist.location && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{therapist.location}</span>
              </div>
            )}

            {therapist.languages && therapist.languages.length > 0 && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FaLanguage className="w-4 h-4" />
                <span>Languages: {therapist.languages.join(', ')}</span>
              </div>
            )}

            {therapist.bio && (
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{therapist.bio}</p>
            )}

            {/* Approach/Treatment Methods */}
            {therapist.approaches && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Approach:</p>
                <p className="text-gray-700 dark:text-gray-300">{therapist.approaches.join(' • ')}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="btn-primary flex-1 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer">
              Book Appointment
            </button>
            <button className="btn-secondary flex-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 font-medium py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all active:scale-95 cursor-pointer">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}