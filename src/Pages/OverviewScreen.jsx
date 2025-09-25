import React from 'react'
import Overview from '../Components/Overview/Overview';
import { DollarSign, Users, FileText, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

function OverviewScreen() {
    const stats = [
    {
      title: 'Total Prize Pool',
      value: '$25,000',
      icon: DollarSign,
      color: 'bg-green-500',
      trend: 'Across 5 active contests'
    },
    {
      title: 'Total Participants',
      value: '487',
      icon: Users,
      color: 'bg-blue-500',
      trend: '+67 new this week'
    },
    {
      title: 'Total Submissions',
      value: '312',
      icon: FileText,
      color: 'bg-purple-500',
      trend: '45 submitted today'
    },
    {
      title: 'Active Contests',
      value: '5',
      icon: Calendar,
      color: 'bg-[#FF5758]',
      trend: '2 ending this week'
    }
  ];

  const recentCompetitions = [
    {
      id: 1,
      title: 'Mobile App Design - Healthcare Dashboard',
      status: 'active',
      prize: '$5,000',
      participants: 127,
      submissions: 89,
      deadline: '7 days left'
    },
    {
      id: 2,
      title: 'E-commerce Website Redesign',
      status: 'judging',
      prize: '$8,000',
      participants: 156,
      submissions: 134,
      deadline: 'Judging phase'
    },
    {
      id: 3,
      title: 'Logo Design for Tech Startup',
      status: 'completed',
      prize: '$2,500',
      participants: 89,
      submissions: 67,
      deadline: 'Winner announced'
    },
    {
      id: 4,
      title: 'SaaS Dashboard UI/UX',
      status: 'active',
      prize: '$6,500',
      participants: 98,
      submissions: 45,
      deadline: '12 days left'
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      status: 'active',
      prize: '$3,000',
      participants: 67,
      submissions: 23,
      deadline: '18 days left'
    }
  ];

  const activities = [
    {
      id: 1,
      type: 'submission',
      user: 'Sarah Chen',
      action: 'submitted to Healthcare Dashboard contest',
      time: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      type: 'winner',
      user: 'Logo Contest',
      action: 'winner announced - Mike Johnson',
      time: '3 hours ago',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 3,
      type: 'join',
      user: 'Mike Johnson',
      action: 'joined E-commerce Redesign contest',
      time: '4 hours ago',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 4,
      type: 'submission',
      user: 'Emma Davis',
      action: 'updated SaaS Dashboard submission',
      time: '6 hours ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 5,
      type: 'new_contest',
      user: 'Alex Rodriguez',
      action: 'launched Brand Identity contest',
      time: '8 hours ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];
  
  return (
    <div>
        <Overview stats = {stats} recentCompetitions = {recentCompetitions} activities = {activities}  />
    </div>
  )
}

export default OverviewScreen
