import { Calendar, DollarSign, Users, FileText, Clock, ArrowLeft, Trophy, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../StatsCards/StatCard";
import CompetitionBrief from "../CompetitionBrief/CompetitionBrief";
import SubmissionTab from "../../Content/SubmissionTab";
import TimelineTab from "../../Content/TimelineTab";
import ResultsTab from "../../Content/ResultsTab";
import ShortlistTab from "../../Content/ShortlistTab"; // ✅ Import shortlist
import { memo, useState } from "react";
import ShortlistedSubmissions from "../ShortlistedSubmissions/ShortlistedSubmissions";

const CompetitionDetails = memo(function CompetitionDetails({ stats }) {
  const [activeTab, setActiveTab] = useState("submissions");

  const shortlistedDesigns = [
  {
    id: 1,
    preview: "https://via.placeholder.com/300x200.png?text=Design+1",
    designer: {
      name: "Sarah Chen",
      avatar: "https://via.placeholder.com/100.png?text=S",
      rating: 4.8,
    },
    score: 92,
    votes: 120,
  },
  {
    id: 2,
    preview: "https://via.placeholder.com/300x200.png?text=Design+2",
    designer: {
      name: "Alex Rodriguez",
      avatar: "https://via.placeholder.com/100.png?text=A",
      rating: 4.5,
    },
    score: 88,
    votes: 95,
  },
];

  return (
    <div className="space-y-6 p-5">
      {/* Header with Back Button */}
      <div>
        <Link
          to={"/Competitions"}
          className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-[#FF5758] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Competitions
        </Link>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mobile App Redesign Contest</h1>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
              Active
            </span>
          </div>
          <p className="text-gray-600 mt-3">
            Create a modern and user-friendly mobile banking application
            interface that prioritizes user experience and accessibility. The
            design should be innovative while maintaining trust and security.
          </p>
        </div>
      </div>

      {/* Competition Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>

      {/* Competition Brief */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <CompetitionBrief />
      </div>

      {/* Tabbed Content */}
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 justify-center items-center">
            <button
              onClick={() => setActiveTab("submissions")}
              className={`py-2 px-1 cursor-pointer border-b-2 font-medium text-sm transition-colors ${
                activeTab === "submissions"
                  ? "border-[#FF5758]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Submissions
            </button>
            <button
              onClick={() => setActiveTab("shortlist")}
              className={`py-2 px-1 cursor-pointer border-b-2 font-medium text-sm transition-colors ${
                activeTab === "shortlist"
                  ? "border-[#FF5758]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Shortlisted
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`py-2 px-1 cursor-pointer border-b-2 font-medium text-sm transition-colors ${
                activeTab === "timeline"
                  ? "border-[#FF5758]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Timeline & Activity
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`py-2 px-1 cursor-pointer border-b-2 font-medium text-sm transition-colors ${
                activeTab === "results"
                  ? "border-[#FF5758]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Winner & Judging
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "submissions" && <SubmissionTab />}
        {activeTab === "shortlist" && <ShortlistTab />}
        {activeTab === "timeline" && <TimelineTab />}
        {activeTab === "results" && <ResultsTab />}
      </div>
    </div>
  );
});
export default CompetitionDetails;
