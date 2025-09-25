import React, { memo } from 'react'
import { Trophy, Download, MessageCircle, Star, DollarSign, Crown } from 'lucide-react';


const WinnerCard = memo(function WinnerCard({winner}) {
  return (
          <div className="bg-gradient-to-r from-[#FF5758] to-[#ff7779] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Crown className="w-12 h-12 text-yellow-300" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-yellow-100 font-semibold">WINNER ANNOUNCED</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Winner Info */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={winner.designer.avatar}
                      alt={winner.designer.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">{winner.designer.name}</h3>
                      <div className="flex items-center space-x-2 opacity-90">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{winner.designer.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-2xl font-bold">$5,000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5" />
                      <span>Score: {winner.score}/10</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white text-[#FF5758] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                      <Download className="w-4 h-4" />
                      <span>Download Final Files</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold">
                      <MessageCircle className="w-4 h-4" />
                      <span>Contact Designer</span>
                    </button>
                  </div>
                </div>

                {/* Winner Design */}
                <div className="flex justify-center">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <img
                      src={winner.preview}
                      alt="Winning design"
                      className="w-full max-w-md rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
})

export default WinnerCard
