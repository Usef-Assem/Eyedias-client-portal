import React from 'react'
import { Trophy, Crown } from "lucide-react";


function ResultsTab() {
  return (
 <div className="space-y-4">
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-yellow-600" />
        Competition Results
      </h3>
      <div className="text-center py-8">
        <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h4 className="text-xl font-semibold mb-2">Winner will be announced soon!</h4>
        <p className="text-gray-600">Judging is in progress. Results will be available after Dec 2, 2024.</p>
      </div>
    </div>
  </div>
  )
}

export default ResultsTab
