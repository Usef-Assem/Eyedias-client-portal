import React, { useState } from 'react';
import { Search, Filter, Plus, Calendar, Users, FileText, DollarSign, Clock, Trophy, CheckCircle } from 'lucide-react';
import CompetitionCards from '../Components/CompetitionsCards/CompetitionCards';

const CompetitionsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const competitions = [
    {
      id: 1,
      title: 'Mobile App Design - Healthcare Dashboard',
      description: 'Design a modern, user-friendly healthcare dashboard for mobile devices',
      prize: '$5,000',
      status: 'active',
      participants: 127,
      submissions: 89,
      startDate: 'Dec 15, 2025',
      endDate: 'Dec 30, 2025',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      category: 'Mobile Design'
    },
    {
      id: 2,
      title: 'E-commerce Website Redesign',
      description: 'Complete redesign of an existing e-commerce platform with focus on conversion',
      prize: '$8,000',
      status: 'judging',
      participants: 156,
      submissions: 134,
      startDate: 'Nov 20, 2025',
      endDate: 'Dec 20, 2025',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      category: 'Web Design'
    },
    {
      id: 4,
      title: 'SaaS Dashboard UI/UX',
      description: 'Design an intuitive dashboard for a project management SaaS platform',
      prize: '$6,500',
      status: 'active',
      participants: 98,
      submissions: 45,
      startDate: 'Dec 10, 2025',
      endDate: 'Jan 10, 2026',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      category: 'Dashboard Design'
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      description: 'Complete brand identity including logo, colors, typography, and guidelines',
      prize: '$3,000',
      status: 'active',
      participants: 67,
      submissions: 23,
      startDate: 'Dec 5, 2025',
      endDate: 'Jan 5, 2026',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      category: 'Branding'
    },
    {
      id: 6,
      title: 'Mobile Game UI Design',
      description: 'Design engaging UI elements for a casual mobile puzzle game',
      prize: '$4,000',
      status: 'draft',
      participants: 0,
      submissions: 0,
      startDate: 'Jan 15, 2026',
      endDate: 'Feb 15, 2026',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      category: 'Game Design'
    }
  ];

  const filteredCompetitions = competitions.filter(competition => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || competition.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Clock className="w-4 h-4" />;
      case 'judging':
        return <Users className="w-4 h-4" />;
      case 'completed':
        return <Trophy className="w-4 h-4" />;
      case 'draft':
        return <FileText className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'judging':
        return 'bg-orange-100 text-orange-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Competitions</h1>
          <p className="text-gray-600">Manage and track all your design contests</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5758] focus:border-transparent outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF5758] focus:border-transparent outline-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="judging">Judging</option>
              <option value="completed">Completed</option>
              <option value="draft">Draft</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Competitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompetitions.map((competition) => (
            <CompetitionCards competition = {competition}  getStatusIcon = {getStatusIcon} getStatusColor={getStatusColor} />
        ))}
      </div>

      {filteredCompetitions.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No competitions found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default CompetitionsScreen;