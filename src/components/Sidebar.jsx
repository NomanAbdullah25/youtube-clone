import React, { useState } from 'react';
import { Home, Compass, Tv, History, ThumbsUp, Settings, Flag, HelpCircle, Moon, Check, X } from 'lucide-react';

export default function Sidebar({ selectedCategory, setSelectedCategory, isDarkMode, toggleDarkMode }) {
  const [activeModal, setActiveModal] = useState(null); // 'settings', 'help', 'report'

  return (
    <>
      <aside className={`w-64 fixed left-0 top-14 bottom-0 border-r p-3 overflow-y-auto flex flex-col justify-between ${
        isDarkMode ? 'bg-[#0f0f0f] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
      }`}>
        <div className="space-y-1">
          {/* Main Navigation */}
          <button 
            onClick={() => setSelectedCategory('All')} 
            className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              selectedCategory === 'All' 
                ? isDarkMode ? 'bg-[#272727]' : 'bg-gray-200 font-semibold' 
                : isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
            }`}
          >
            <Home className="w-5 h-5 text-red-500" />
            <span>Home</span>
          </button>

          <button className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
          }`}>
            <Compass className="w-5 h-5" />
            <span>Explore</span>
          </button>

          <button className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
          }`}>
            <Tv className="w-5 h-5" />
            <span>Subscriptions</span>
          </button>

          <hr className={`my-3 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

          {/* Library Section */}
          <div className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Library
          </div>

          <button className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
          }`}>
            <History className="w-5 h-5" />
            <span>History</span>
          </button>

          <button className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
          }`}>
            <ThumbsUp className="w-5 h-5" />
            <span>Liked Videos</span>
          </button>

          <hr className={`my-3 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

          {/* Settings / System Views */}
          <div className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            System
          </div>

          <button 
            onClick={() => setActiveModal('settings')}
            className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>

          <button 
            onClick={() => setActiveModal('report')}
            className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
            }`}
          >
            <Flag className="w-5 h-5" />
            <span>Report history</span>
          </button>

          <button 
            onClick={() => setActiveModal('help')}
            className={`flex items-center gap-5 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </button>
        </div>

        <div className="px-3 py-2 text-xs text-gray-500">
          © 2026 YouTube Clone
        </div>
      </aside>

      {/* --- SETTINGS / HELP / REPORT MODALS --- */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-full max-w-md rounded-2xl border p-6 shadow-2xl relative ${
            isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}>
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Settings View */}
            {activeModal === 'settings' && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-red-500" />
                  App Settings
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-800/50 bg-black/20">
                    <div className="flex items-center gap-3">
                      <Moon className="w-5 h-5 text-indigo-400" />
                      <div>
                        <p className="text-sm font-medium">Dark Mode Appearance</p>
                        <p className="text-xs text-gray-400">Toggle light/dark cinema theme interface</p>
                      </div>
                    </div>
                    
                    {/* WORKING DARK MODE TOGGLE */}
                    <input 
                      type="checkbox" 
                      checked={isDarkMode} 
                      onChange={toggleDarkMode}
                      className="w-5 h-5 accent-red-600 cursor-pointer rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-800/50 bg-black/20">
                    <div>
                      <p className="text-sm font-medium">Autoplay Next Video</p>
                      <p className="text-xs text-gray-400">Automatically play suggested video on finish</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-red-600 cursor-pointer rounded" />
                  </div>
                </div>
              </div>
            )}

            {/* Help View */}
            {activeModal === 'help' && (
              <div>
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-500" />
                  Help Center
                </h2>
                <p className="text-xs text-gray-400 mb-4">Frequently Asked Questions & Support</p>
                
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-xl bg-black/20 border border-gray-800/50">
                    <p className="font-semibold text-xs text-gray-300">Q: How do I upload videos?</p>
                    <p className="text-xs text-gray-400 mt-1">Click your user profile avatar in the top right to access custom video creation.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 border border-gray-800/50">
                    <p className="font-semibold text-xs text-gray-300">Q: Is data saved across sessions?</p>
                    <p className="text-xs text-gray-400 mt-1">Yes! Profile changes, dark mode preferences, and state persist via browser LocalStorage.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Report History View */}
            {activeModal === 'report' && (
              <div className="text-center py-4">
                <Flag className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h2 className="text-lg font-bold mb-1">Report History</h2>
                <p className="text-xs text-gray-400 mb-4">You have no active flags or reports on record.</p>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Account is in good standing
                </div>
              </div>
            )}

            <button 
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}