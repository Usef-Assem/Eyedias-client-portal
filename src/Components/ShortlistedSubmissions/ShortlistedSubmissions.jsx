import React, { memo } from 'react'
import { Download, Star } from 'lucide-react';


const ShortlistedSubmissions = memo(function ShortlistedSubmissions({shortlistedDesigns}) {
  return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shortlisted Submissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortlistedDesigns.map((design) => (
                <div key={design.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative">
                    <img
                      src={design.preview}
                      alt={`Design by ${design.designer.name}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#FF5758] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Shortlisted
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={design.designer.avatar}
                        alt={design.designer.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{design.designer.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{design.designer.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-[#FF5758]">{design.score}</p>
                        <p className="text-xs text-gray-600">Judge Score</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{design.votes}</p>
                        <p className="text-xs text-gray-600">Community Votes</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-[#FF5758] text-white rounded-lg hover:bg-[#e04849] transition-colors duration-200">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
})

export default ShortlistedSubmissions
