import React, { useState } from 'react'
import { LayoutDashboard, Briefcase, Trophy, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, Link: '/' },
    { id: 'competitions', label: 'Competitions', icon: Briefcase, Link: 'Competitions' },
    { id: 'results', label: 'Results', icon: Trophy, Link: 'Results' },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const baseClasses =
    'w-full flex items-center justify-start space-x-3 px-2 md:px-2 lg:px-4 py-3 rounded-lg text-left transition-all duration-200'
  const inactiveClasses = 'text-white/80 hover:bg-white/10 hover:text-white'
  const activeClasses = 'bg-white/10 text-white'

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className="w-16 md:w-16 lg:w-64 bg-[#FF5758] text-white flex flex-col shadow-lg h-full lg:static">
        {/* Logo */}
        <div className="p-3 md:p-3 lg:p-6 border-b border-white/20 flex-shrink-0">
          <div className="flex flex-col text-sm text-[#ffffffcc] items-center lg:items-start justify-center">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
            <img src={logo} alt="farapi Logo" className="hidden lg:block" />
            <p className="hidden lg:block">Client Portal</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-2 md:p-2 lg:p-4 space-y-1 md:space-y-1 lg:space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.id}
                to={item.Link}
                title={item.label}
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                  }`
                }
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="hidden lg:block font-medium text-start">
                  {item.label}
                </span>
              </NavLink>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-2 md:p-2 lg:p-4 border-t border-white/20 flex-shrink-0">
          <p className="text-white/60 text-xs text-center hidden lg:block">
            © 2025 DesignContest Platform
          </p>
          <div className="w-full h-2 bg-white/10 rounded-full lg:hidden">
            <div className="w-1/3 h-full bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Expanded Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 bg-[#FF5758] text-white flex flex-col shadow-lg h-full z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
          <div className="p-6 border-b border-white/20 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <img src={logo} alt="farapi Logo" />
                <p className="text-sm text-[#ffffffcc] mt-1">Client Portal</p>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.id}
                  to={item.Link}
                  onClick={toggleSidebar}
                  className={({ isActive }) =>
                    `${baseClasses} ${
                      isActive ? activeClasses : inactiveClasses
                    }`
                  }
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-start">{item.label}</span>
                </NavLink>
              )
            })}
          </nav>

          <div className="p-4 border-t border-white/20 flex-shrink-0">
            <p className="text-white/60 text-xs text-center">
              © 2025 DesignContest Platform
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar