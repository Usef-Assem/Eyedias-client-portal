import React, { useState } from "react";
import { Eye, MessageCircle, Plus } from "lucide-react";

function ShortlistTab() {
  // Example shortlisted submissions data
  const [shortlisted, setShortlisted] = useState([
    {
      id: 1,
      designName: "Banking App Redesign",
      designerName: "Sarah Chen",
      hasComments: true,
      commentsCount: 3,
      submittedAt: "2 hours ago",
      placement: "", // new field
    },
    {
      id: 3,
      designName: "Clean Bank Interface",
      designerName: "Maya Patel",
      hasComments: true,
      commentsCount: 1,
      submittedAt: "1 day ago",
      placement: "", // new field
    },
  ]);

  const handlePlacementChange = (id, value) => {
    setShortlisted((prev) =>
      prev.map((submission) =>
        submission.id === id ? { ...submission, placement: value } : submission
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Shortlisted Designs</h3>
          <p className="text-sm text-gray-600 mt-1">
            {shortlisted.length} shortlisted submissions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Design Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Designer Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  View
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Comments
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Submitted
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Placement
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shortlisted.map((submission) => (
                <tr
                  key={submission.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {submission.designName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {submission.designerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="inline-flex cursor-pointer items-center px-3 py-1.5 border border-blue-300 rounded-md text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {submission.hasComments ? (
                      <button className="inline-flex cursor-pointer items-center px-3 py-1.5 border border-green-300 rounded-md text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Comments ({submission.commentsCount})
                      </button>
                    ) : (
                      <button className="inline-flex cursor-pointer items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100">
                        <Plus className="w-4 h-4 mr-1" />
                        Add Comment
                      </button>
                    )}
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.submittedAt}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={submission.placement}
                      onChange={(e) =>
                        handlePlacementChange(submission.id, e.target.value)
                      }
                      className="w-40 border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 
                                bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5758] focus:border-[#FF5758] 
                                transition-colors cursor-pointer"
                    >
                      <option value="">Select Placement</option>
                      <option value="winner" className="text-yellow-600 font-semibold">
                        🏆 Winner
                      </option>
                      <option value="2nd" className="text-gray-600 font-medium">
                        🥈 2nd Place
                      </option>
                      <option value="3rd" className="text-orange-700 font-medium">
                        🥉 3rd Place
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state when no shortlisted submissions */}
        {shortlisted.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Eye className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No shortlisted designs yet
            </h3>
            <p className="text-gray-500">
              Designs you shortlist will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShortlistTab;
