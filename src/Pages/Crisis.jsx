import { FaPhone, FaComment, FaAmbulance, FaHospital, FaUserFriends, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa';

export default function Crisis() {
  const emergencyResources = [
    {
      category: 'Immediate Crisis Lines',
      items: [
        {
          name: 'National Suicide Prevention Lifeline',
          number: '988',
          description: 'Free, confidential support 24/7',
          icon: <FaPhone className="w-6 h-6" />,
          color: 'bg-red-500',
          hours: '24/7',
          type: 'call'
        },
        {
          name: 'Crisis Text Line',
          number: 'Text HOME to 741741',
          description: 'Free 24/7 crisis counseling via text',
          icon: <FaComment className="w-6 h-6" />,
          color: 'bg-green-500',
          hours: '24/7',
          type: 'text'
        },
        {
          name: 'Trevor Project (LGBTQ+)',
          number: '1-866-488-7386',
          description: 'Crisis intervention for LGBTQ youth',
          icon: <FaUserFriends className="w-6 h-6" />,
          color: 'bg-purple-500',
          hours: '24/7',
          type: 'call'
        }
      ]
    },
    {
      category: 'Emergency Services',
      items: [
        {
          name: 'Local Emergency Services',
          number: '911',
          description: 'Police, Fire, Ambulance',
          icon: <FaAmbulance className="w-6 h-6" />,
          color: 'bg-blue-500',
          hours: '24/7',
          type: 'call'
        },
        {
          name: 'Emergency Room',
          number: 'Go to nearest hospital',
          description: 'Immediate medical attention',
          icon: <FaHospital className="w-6 h-6" />,
          color: 'bg-orange-500',
          hours: '24/7',
          type: 'location'
        }
      ]
    }
  ];

  const internationalHelplines = [
    { country: 'Canada', number: '1-833-456-4566', service: 'Crisis Services Canada' },
    { country: 'UK', number: '116 123', service: 'Samaritans' },
    { country: 'Australia', number: '13 11 14', service: 'Lifeline Australia' },
    { country: 'New Zealand', number: '0800 543 354', service: 'Lifeline Aotearoa' }
  ];

  const safetyPlanning = [
    { step: 1, title: 'Recognize Warning Signs', description: 'Identify personal triggers and early signs of crisis' },
    { step: 2, title: 'Use Coping Strategies', description: 'Practice grounding techniques and distraction methods' },
    { step: 3, title: 'Contact Support Network', description: 'Reach out to trusted friends, family, or professionals' },
    { step: 4, title: 'Make Environment Safe', description: 'Remove access to means of self-harm' },
    { step: 5, title: 'Seek Professional Help', description: 'Contact mental health professionals or crisis services' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-red-500 via-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
              <span className="font-medium">Immediate Support Available</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              You Are Not Alone
              <span className="block">Help Is Here</span>
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Immediate, confidential crisis support available 24/7. Your safety and wellbeing are our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:988"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <FaPhone className="w-6 h-6" />
                Call 988 Now
              </a>
              <a
                href="tel:911"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <FaAmbulance className="w-6 h-6" />
                Emergency: 911
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Resources */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Immediate Crisis Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These services are available 24/7 and are completely confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {emergencyResources.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaShieldAlt className="w-5 h-5 text-red-500" />
                  {section.category}
                </h3>
                
                <div className="space-y-4">
                  {section.items.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 ${resource.color} rounded-lg text-white`}>
                            {resource.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {resource.name}
                            </h4>
                            <p className="text-gray-600 mb-3">{resource.description}</p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="text-2xl font-bold text-gray-900">
                                {resource.number}
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-sm text-gray-500">
                                  <FaClock className="w-4 h-4" />
                                  {resource.hours}
                                </span>
                                {resource.type === 'call' ? (
                                  <a
                                    href={`tel:${resource.number.replace(/\D/g, '')}`}
                                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors"
                                  >
                                    Call Now
                                  </a>
                                ) : resource.type === 'text' ? (
                                  <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
                                    Text Now
                                  </button>
                                ) : (
                                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                                    Find Location
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Safety Planning */}
          <div className="mb-16">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Safety Planning Guide
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {safetyPlanning.map((plan) => (
                  <div
                    key={plan.step}
                    className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {plan.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{plan.title}</h4>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* International Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaGlobe className="w-6 h-6 text-blue-500" />
              International Crisis Lines
            </h3>
            
            <div className="bg-white rounded-xl border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Helpline Number</th>
                      <th className="px6 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {internationalHelplines.map((line, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{line.country}</td>
                        <td className="px-6 py-4">
                          <div className="text-lg font-semibold text-gray-900">{line.number}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{line.service}</td>
                        <td className="px-6 py-4">
                          <a
                            href={`tel:${line.number.replace(/\D/g, '')}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                          >
                            <FaPhone className="w-4 h-4" />
                            Call
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="space-y-6">
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
              <h4 className="font-bold text-red-800 mb-3">⚠️ In Immediate Danger?</h4>
              <ul className="text-red-700 space-y-2">
                <li>• Call your local emergency services immediately (911 in US/Canada)</li>
                <li>• Go to the nearest hospital emergency room</li>
                <li>• Do not hesitate to ask for help from people around you</li>
                <li>• Stay with someone you trust until help arrives</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <h4 className="font-bold text-blue-800 mb-3">What to Expect When Calling</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• A trained crisis counselor will answer your call</li>
                <li>• The conversation is completely confidential</li>
                <li>• You can remain anonymous if you prefer</li>
                <li>• Counselors are there to listen, not judge</li>
                <li>• They can help you develop a safety plan</li>
              </ul>
            </div>

            <div className="text-center p-8">
              <p className="text-gray-600 mb-6">
                Remember: Reaching out for help is a sign of strength, not weakness.
                You deserve support, and people care about your wellbeing.
              </p>
              <div className="text-4xl">💙</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}