import React, { memo } from 'react'
import { Calendar, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompetitionCards = memo(function CompetitionCards({
  competition,
  onSelectCompetition,
  getStatusIcon,
  getStatusColor,
}) {
  return (
    <div
      key={competition.id}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col"
      onClick={() => onSelectCompetition && onSelectCompetition(competition.id)}
    >
      {/* Competition Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={competition.image}
          alt={competition.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              competition.status
            )}`}
          >
            {getStatusIcon(competition.status)}
            <span className="capitalize">{competition.status}</span>
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
            {competition.category}
          </span>
        </div>
      </div>

      {/* Competition Info */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {competition.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {competition.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-lg font-bold text-gray-900">
                  {competition.prize}
                </span>
              </div>
              <p className="text-xs text-gray-500">Prize</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">
                  {competition.participants}
                </span>
              </div>
              <p className="text-xs text-gray-500">Participants</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{competition.startDate}</span>
            </div>
            <span>→</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{competition.endDate}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link to={'/CompetitionDetails'} className="w-full mt-auto px-4 py-2 bg-[#FF5758] text-center text-white rounded-lg hover:bg-[#e04849] transition-colors duration-200 font-medium">
          View Details
        </Link>
      </div>
    </div>
  )
})

export default CompetitionCards
