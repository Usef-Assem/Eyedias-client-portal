import React, { memo } from "react";

const RecentCompetitions = memo(function RecentCompetitions({
  recentCompetitions,
}) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between mb-6 ">
          <h2 className="text-xl font-bold text-gray-900">Recent Competitions</h2>
          <button className="text-[#FF5758] mt-2 text-sm font-medium hover:text-[#e04849] transition-colors duration-200">
            View All
          </button>
        </div>
        <div className="space-y-6">
          {recentCompetitions?.map((competition) => (
            <div
              key={competition.id}
              className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {competition.title}
              </h3>

              {/* Wrapper for stats */}
              <div className="text-sm text-gray-600 space-y-2 md:space-y-0 md:flex md:flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* First line: participants + submissions */}
                <div className="flex justify-between items-center space-x-4">
                  <span>{competition.participants} participants</span>
                  <span>{competition.submissions} submissions</span>
                  
                </div>

                {/* Second line: prize + status */}
                <div className="flex justify-between items-center space-x-4">
                  <span className="mt-2 lg:mt-0">{competition.prize}</span>
                  {competition.status === "active" && (
                    <span className="px-3 py-1 mt-2 lg:mt-0 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {competition.deadline}
                    </span>
                  )}
                  {competition.status === "judging" && (
                    <span className="px-3 py-1 mt-2 lg:mt-0 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      Judging
                    </span>
                  )}
                  {competition.status === "completed" && (
                    <span className="px-3 py-1 mt-2 lg:mt-0 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Completed
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default RecentCompetitions;