import React, { useState, useEffect } from 'react';
import { Menu, Search, Video, Bell, Check, X } from 'lucide-react';

export default function Navbar({ onOpenProfile, searchQuery, setSearchQuery, isDarkMode, toggleSidebar }) {
  const [user, setUser] = useState({ name: 'Noman Abdullah', handle: '@nomanabdullah' });
  const [activeNotification, setActiveNotification] = useState(false);
  const [isCreatingVideo, setIsCreatingVideo] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('yt_user_profile');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed) setUser(parsed);
      } catch (e) {
        console.error("Error parsing user profile:", e);
      }
    }
  }, []);

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'N';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-14 border-b px-4 flex items-center justify-between z-40 transition-colors ${
        isDarkMode ? 'bg-[#0f0f0f] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
      }`}>
        {/* Left: Hamburger & Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-800'
            }`}
            title="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">YT</div>
            <span className={`font-bold text-lg tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              YouTube
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full border px-4 py-1.5 rounded-l-full text-sm focus:outline-none focus:border-red-500 transition-colors ${
                isDarkMode 
                  ? 'bg-[#121212] border-gray-700 text-white placeholder-gray-500' 
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
              }`}
            />
            <button className={`border border-l-0 px-5 py-1.5 rounded-r-full transition-colors ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}>
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Create Video Camera Icon */}
          <button 
            onClick={() => setIsCreatingVideo(true)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
            title="Create / Upload Video"
          >
            <Video className="w-5 h-5" />
          </button>

          {/* Bell Notifications */}
          <button 
            onClick={() => setActiveNotification(!activeNotification)}
            className={`p-2 rounded-full transition-colors relative ${
              isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          
          {/* Profile Avatar */}
          <button 
            onClick={onOpenProfile}
            className="w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold text-sm flex items-center justify-center hover:opacity-90 transition-opacity ml-1 border border-indigo-400/30"
          >
            {initial}
          </button>
        </div>
      </nav>

      {/* Upload Video Interactive Modal */}
      {isCreatingVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-2xl border p-6 relative shadow-2xl ${
            isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}>
            <button 
              onClick={() => setIsCreatingVideo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Video className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold">Studio Creator Upload</h2>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Video Title</label>
                <input 
                  type="text" 
                  placeholder="Enter video title..." 
                  className={`w-full border rounded-lg p-2.5 ${
                    isDarkMode ? 'bg-[#121212] border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Category</label>
                <select className={`w-full border rounded-lg p-2.5 ${
                  isDarkMode ? 'bg-[#121212] border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}>
                  <option>Coding</option>
                  <option>React</option>
                  <option>Design</option>
                  <option>Music</option>
                </select>
              </div>

              <button 
                onClick={() => setIsCreatingVideo(false)}
                className="w-full mt-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
              >
                Publish Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Popover */}
      {activeNotification && (
        <div className={`fixed top-14 right-4 w-72 rounded-xl border shadow-xl z-50 p-3 text-xs ${
          isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-800">
            <span className="font-bold">Notifications</span>
            <button onClick={() => setActiveNotification(false)} className="text-gray-400">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-gray-400">🔔 Welcome to YouTube Clone 2026!</p>
            <p className="text-gray-400">🔥 New trending video ranking updated.</p>
          </div>
        </div>
      )}
    </>
  );
}