import React, { memo } from 'react'
import RecentCompetitions from '../RecentCompetitions/RecentCompetitions';
import RecentActivity from '../RecentActivity/RecentActivity';
import StatCard from '../StatsCards/StatCard';

const Overview = memo(function Overview({stats, recentCompetitions, activities}) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Your complete design contest portfolio</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats?.map((stat, index) => {
          return (
            <StatCard key={index} stat={stat} index={index} />
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Competitions */}
        <RecentCompetitions recentCompetitions={recentCompetitions} />

        {/* Activity Feed */}
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
});

export default Overview
