import { FaMapMarkerAlt, FaLanguage, FaCheckCircle, FaStar, FaVideo } from 'react-icons/fa';

export default function TherapistCard({ therapist }) {
  const specialties = therapist.specialties || [];
  
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Photo & Basic Info */}
        <div className="md:w-1/4">
          <div className="aspect-square rounded-xl bg-linear-to-br from-primary-100 to-primary-50 flex items-center justify-center mb-4 overflow-hidden">
            {therapist.photoUrl ? (
              <img 
                src={therapist.photoUrl} 
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-4xl text-primary-600 font-bold">
                {therapist.name.charAt(0)}
              </div>
            )}
          </div>
          
          {therapist.rating && (
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(therapist.rating) 
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {therapist.rating.toFixed(1)}
              </span>
            </div>
          )}
          
          {therapist.price && (
            <div className="text-lg font-semibold text-primary-600">
              ${therapist.price}/session
            </div>
          )}
        </div>
        
        {/* Right Column - Details */}
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{therapist.name}</h3>
              <p className="text-gray-600">{therapist.credentials}</p>
            </div>
            
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              {therapist.acceptsInsurance && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  <FaCheckCircle className="w-3 h-3" />
                  Insurance Accepted
                </span>
              )}
              
              {therapist.virtualAvailable && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  <FaVideo className="w-3 h-3" />
                  Virtual Available
                </span>
              )}
            </div>
          </div>
          
          {/* Specialties */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Specializes in:</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="space-y-3">
            {therapist.location && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{therapist.location}</span>
              </div>
            )}
            
            {therapist.languages && therapist.languages.length > 0 && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaLanguage className="w-4 h-4" />
                <span>Languages: {therapist.languages.join(', ')}</span>
              </div>
            )}
            
            {therapist.bio && (
              <p className="text-gray-700 line-clamp-3">{therapist.bio}</p>
            )}
            
            {/* Approach/Treatment Methods */}
            {therapist.approaches && (
              <div>
                <p className="text-sm text-gray-600 mb-1">Approach:</p>
                <p className="text-gray-700">{therapist.approaches.join(' • ')}</p>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="btn-primary flex-1">
              Book Appointment
            </button>
            <button className="btn-secondary flex-1">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}