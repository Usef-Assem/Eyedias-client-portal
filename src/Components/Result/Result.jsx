import { Download } from 'lucide-react';
import { memo } from 'react';

const Result = memo(function Result({ winners }) {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Total Results</h1>
        <p className="text-gray-600">Here are the final results of all contests.</p>
      </div>

      {/* Results Table */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Contest</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Winner</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Prize</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {winners.map((winner) => (
              <tr key={winner.id}>
                <td className="px-6 py-4 text-gray-900 font-medium">{winner.contest}</td>
                <td className="px-6 py-4 text-gray-700">
                  {winner.status === 'completed' ? winner.name : 'Judging'}
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">{winner.prize}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      winner.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {winner.status.charAt(0).toUpperCase() + winner.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="inline-flex items-center px-4 py-2 bg-[#FF5758] text-white rounded-lg hover:bg-[#e04849] transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Result;
