import React from 'react'
import { Calendar } from "lucide-react";

function TimelineTab() {
  return (
<div className="space-y-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Timeline */}
      <div className="lg:col-span-2">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Contest Timeline
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="w-px h-12 bg-gray-300 mt-2" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">Contest Started</h4>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">completed</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Contest launched and brief published</p>
                <p className="text-xs text-gray-500">Nov 15, 2024</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <div className="w-px h-12 bg-gray-300 mt-2" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">Submission Deadline</h4>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">current</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Final day for design submissions</p>
                <p className="text-xs text-gray-500">Nov 28, 2024</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">Winner Announced</h4>
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">pending</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Final winner will be selected and announced</p>
                <p className="text-xs text-gray-500">Dec 2, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">Sarah Chen</span>{' '}
                <span className="text-gray-600">submitted a new design</span>
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">Alex Rodriguez</span>{' '}
                <span className="text-gray-600">joined the contest</span>
              </p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">Maya Patel</span>{' '}
                <span className="text-gray-600">submitted a new design</span>
              </p>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">Contest Manager</span>{' '}
                <span className="text-gray-600">updated the brief</span>
              </p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TimelineTab
