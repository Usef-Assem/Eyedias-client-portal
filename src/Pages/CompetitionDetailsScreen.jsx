import React from 'react'
import CompetitionDetails from '../Components/CompetitionDetails/CompetitionDetails'
import { DollarSign, Users, FileText, Clock } from "lucide-react";

function CompetitionDetailsScreen() {

const stats = [
  {
    id: 1,
    title: "Prize Amount",
    value: "$2,500",
    trend: "+5% from last week",
    color: "bg-green-500",
    icon: DollarSign,
  },
  {
    id: 2,
    title: "Participants",
    value: "28",
    trend: "Steady growth",
    color: "bg-blue-500",
    icon: Users,
  },
  {
    id: 3,
    title: "Submissions",
    value: "15",
    trend: "-2 since yesterday",
    color: "bg-purple-500",
    icon: FileText,
  },
  {
    id: 4,
    title: "Days Left",
    value: "3",
    trend: "Deadline approaching",
    color: "bg-orange-500",
    icon: Clock,
  },
];
  return (
    <div>
      <CompetitionDetails stats = {stats} />
    </div>
  )
}

export default CompetitionDetailsScreen
