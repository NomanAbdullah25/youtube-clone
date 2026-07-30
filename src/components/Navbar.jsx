import React, { useState, useEffect } from 'react';
import { Menu, Search, Video, Bell, User } from 'lucide-react';

export default function Navbar({ onOpenProfile, searchQuery, setSearchQuery }) {
  const [user, setUser] = useState({ name: 'Noman Abdullah', handle: '@nomanabdullah' });

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

  // Get initial safely
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'N';

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] border-b border-gray-800 px-4 flex items-center justify-between z-40">
      {/* Left section: Logo & Menu */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
          <Menu className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">YT</div>
          <span className="text-white font-bold text-lg tracking-tighter">YouTube</span>
        </div>
      </div>

      {/* Middle section: Search Bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121212] border border-gray-700 text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500 text-sm"
          />
          <button className="bg-gray-800 border border-l-0 border-gray-700 px-5 py-2 rounded-r-full hover:bg-gray-700 transition-colors">
            <Search className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Right section: Profile & Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-800 rounded-full text-gray-300 transition-colors">
          <Video className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full text-gray-300 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        
        {/* Profile Avatar Button */}
        <button 
          onClick={onOpenProfile}
          className="w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold text-sm flex items-center justify-center hover:opacity-90 transition-opacity ml-2 border border-indigo-400/30"
        >
          {initial}
        </button>
      </div>
    </nav>
  );
}