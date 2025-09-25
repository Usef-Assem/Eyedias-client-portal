import React, { memo } from 'react'

const RecentActivity = memo(function RecentActivity({activities}) {
  return (
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities?.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <img
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-600">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-[#FF5758] text-sm font-medium hover:text-[#e04849] transition-colors duration-200">
              View All Activity
            </button>
          </div>
        </div>
  )
})

export default RecentActivity
