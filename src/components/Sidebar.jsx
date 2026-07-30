import React, { useState } from 'react';
import { Home, Compass, Flame, Tv, History, ThumbsUp, Settings, Flag, HelpCircle, Moon, X } from 'lucide-react';

export default function Sidebar({ 
  selectedCategory, 
  setSelectedCategory, 
  isDarkMode, 
  toggleDarkMode,
  activeSection,
  setActiveSection,
  isOpen
}) {
  const [activeModal, setActiveModal] = useState(null); // 'settings', 'help', 'report'

  if (!isOpen) return null;

  return (
    <>
      <aside className={`w-64 fixed left-0 top-14 bottom-0 border-r p-3 overflow-y-auto flex flex-col justify-between z-30 transition-colors ${
        isDarkMode ? 'bg-[#0f0f0f] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
      }`}>
        <div className="space-y-1">
          {/* Main Navigation */}
          <button 
            onClick={() => { setActiveSection('home'); setSelectedCategory('All'); }} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'home' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Home className="w-5 h-5 text-red-500" />
            <span>Home</span>
          </button>

          <button 
            onClick={() => setActiveSection('explore')} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'explore' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Compass className="w-5 h-5 text-blue-500" />
            <span>Explore</span>
          </button>

          <button 
            onClick={() => setActiveSection('trending')} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'trending' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Flame className="w-5 h-5 text-orange-500" />
            <span>Trending</span>
          </button>

          <button 
            onClick={() => setActiveSection('subscriptions')} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'subscriptions' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Tv className="w-5 h-5 text-purple-500" />
            <span>Subscriptions</span>
          </button>

          <hr className={`my-3 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

          {/* Library Section */}
          <div className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Library
          </div>

          <button 
            onClick={() => setActiveSection('history')} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'history' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <History className="w-5 h-5" />
            <span>History</span>
          </button>

          <button 
            onClick={() => setActiveSection('liked')} 
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeSection === 'liked' 
                ? isDarkMode ? 'bg-[#272727] text-white' : 'bg-gray-200 text-gray-900 font-bold' 
                : isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <ThumbsUp className="w-5 h-5" />
            <span>Liked Videos</span>
          </button>

          <hr className={`my-3 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

          {/* System Section */}
          <div className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            System
          </div>

          <button 
            onClick={() => setActiveModal('settings')}
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>

          <button 
            onClick={() => setActiveModal('report')}
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Flag className="w-5 h-5" />
            <span>Report history</span>
          </button>

          <button 
            onClick={() => setActiveModal('help')}
            className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isDarkMode ? 'hover:bg-[#272727] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
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
          <div className={`w-full max-w-lg rounded-2xl border p-6 shadow-2xl relative ${
            isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-1 rounded-full"
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
                  <div className={`flex items-center justify-between p-3 rounded-xl border ${
                    isDarkMode ? 'border-gray-800 bg-black/20' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Moon className="w-5 h-5 text-indigo-500" />
                      <div>
                        <p className="text-sm font-medium">Dark Mode Appearance</p>
                        <p className="text-xs text-gray-500">Toggle light/dark theme interface</p>
                      </div>
                    </div>
                    
                    <input 
                      type="checkbox" 
                      checked={isDarkMode} 
                      onChange={toggleDarkMode}
                      className="w-5 h-5 accent-red-600 cursor-pointer rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Professional, Industry-Oriented Help Center */}
            {activeModal === 'help' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b pb-3 border-gray-800">
                  <HelpCircle className="w-6 h-6 text-blue-500" />
                  <div>
                    <h2 className="text-lg font-bold">YouTube Clone Help & Operations Center</h2>
                    <p className="text-xs text-gray-400">Technical Documentation & End-User Guidance</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs leading-relaxed max-h-80 overflow-y-auto pr-1">
                  <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/30 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                    <h3 className="font-semibold text-sm mb-1 text-red-500">1. Navigation & Feed Discovery</h3>
                    <p className="text-gray-400">
                      Utilize the left primary navigation drawer to switch between distinct video feeds including Home, Explore, Subscriptions, Watch History, and Liked content. Categorical filter chips allow granular content narrowing.
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/30 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                    <h3 className="font-semibold text-sm mb-1 text-blue-500">2. Embedded Video Playback</h3>
                    <p className="text-gray-400">
                      Selecting any thumbnail initializes a modal viewport with dynamic YouTube iframe embedding, responsive aspect-ratio handling, and real-time metadata rendering.
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/30 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                    <h3 className="font-semibold text-sm mb-1 text-indigo-500">3. State Persistence & Preferences</h3>
                    <p className="text-gray-400">
                      User profile information, custom avatar metadata, and dark/light mode appearance states are stored in browser LocalStorage to maintain consistency across browser restarts.
                    </p>
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