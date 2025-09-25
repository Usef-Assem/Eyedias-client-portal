import React, { memo } from 'react'
import { Download, MessageCircle, Star, Medal } from 'lucide-react';

const RunnerUps = memo(function RunnerUps({shortlistedDesigns}) {
  return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Runner-ups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shortlistedDesigns.slice(1).map((design, index) => (
                <div key={design.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Medal className={`w-6 h-6 ${index === 0 ? 'text-gray-400' : 'text-amber-600'}`} />
                      <span className="font-semibold text-gray-700">
                        {index === 0 ? '2nd Place' : '3rd Place'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={design.designer.avatar}
                      alt={design.designer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{design.designer.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{design.designer.rating}</span>
                        <span>•</span>
                        <span>Score: {design.score}/10</span>
                      </div>
                    </div>
                  </div>

                  <img
                    src={design.preview}
                    alt={`Design by ${design.designer.name}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-4 py-2 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}
)
export default RunnerUps
