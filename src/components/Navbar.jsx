import React, { useState } from 'react';
import { Menu, Search, Video, Bell, Upload, Check } from 'lucide-react';

export default function Navbar({ searchQuery, setSearchQuery, userProfile, onOpenProfile, toggleSidebar, onAddVideo }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const notifications = [
    { id: 1, text: 'Tech Lead uploaded: Full Stack Roadmap 2026', time: '2 hours ago' },
    { id: 2, text: 'Your video got 50 new views!', time: '1 day ago' },
    { id: 3, text: 'Code Mastery replied to your comment.', time: '2 days ago' }
  ];

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddVideo({
      id: Date.now().toString(),
      youtubeId: 'dQw4w9WgXcQ',
      title: newTitle,
      channel: userProfile.name,
      category: 'Coding',
      views: '0 views',
      uploaded: 'Just now',
      duration: '05:00',
      thumbnail: 'https://picsum.photos/seed/userupload/600/340'
    });
    setNewTitle('');
    setShowUploadModal(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-gray-900 flex items-center justify-between px-4 z-40 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
        >
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-red-600 text-white font-bold text-xs px-2 py-1 rounded">YT</div>
          <span className="font-bold text-lg tracking-tighter">YouTube</span>
        </div>
      </div>

      <div className="flex items-center w-1/3 min-w-[200px]">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search videos..." 
          className="w-full bg-gray-800 text-white px-4 py-1.5 rounded-l-full border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
        />
        <button className="bg-gray-700 px-5 py-2 rounded-r-full border border-l-0 border-gray-700 hover:bg-gray-600">
          <Search size={18} />
        </button>
      </div>

      <div className="flex items-center gap-4 relative">
        {/* Create / Camera Icon */}
        <button 
          onClick={() => setShowUploadModal(!showUploadModal)}
          className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition"
          title="Create / Upload Video"
        >
          <Video size={20} />
        </button>

        {/* Upload Popup */}
        {showUploadModal && (
          <div className="absolute top-12 right-12 bg-gray-800 border border-gray-700 rounded-xl p-4 w-72 shadow-2xl z-50">
            <h4 className="font-semibold text-sm mb-2 text-white flex items-center gap-2">
              <Upload size={16} /> Quick Video Upload
            </h4>
            <form onSubmit={handleUpload} className="space-y-3">
              <input 
                type="text" 
                placeholder="Enter video title..." 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
                required
              />
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowUploadModal(false)}
                  className="px-3 py-1 text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-3 py-1 bg-red-600 text-white font-medium text-xs rounded-lg hover:bg-red-500"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notifications Icon */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition relative"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute top-12 right-0 bg-gray-800 border border-gray-700 rounded-xl w-80 shadow-2xl z-50 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-700 font-semibold text-sm">
                Notifications
              </div>
              <div className="divide-y divide-gray-700/50 max-h-64 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className="p-3 hover:bg-gray-700/50 cursor-pointer text-xs">
                    <p className="text-gray-200 font-medium">{n.text}</p>
                    <span className="text-gray-400 text-[10px]">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar */}
        <button 
          onClick={onOpenProfile}
          title="Click to Edit Profile"
          className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm hover:ring-2 ring-purple-400 transition"
        >
          {userProfile.name[0] || 'U'}
        </button>
      </div>
    </nav>
  );
}