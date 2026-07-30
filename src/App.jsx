import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';

const initialVideos = [
  {
    id: '1',
    title: 'Full Stack Development Roadmap 2026',
    channel: 'Tech Lead',
    views: '120K views',
    timestamp: '2 days ago',
    duration: '14:20',
    category: 'Coding',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    avatar: 'T'
  },
  {
    id: '2',
    title: 'Building a Microservices Architecture with Node.js',
    channel: 'Code Mastery',
    views: '45K views',
    timestamp: '1 week ago',
    duration: '22:15',
    category: 'Coding',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    avatar: 'C'
  },
  {
    id: '3',
    title: 'Tailwind CSS Complete Masterclass (v4 & Beyond)',
    channel: 'Design Pro',
    views: '300K views',
    timestamp: '1 month ago',
    duration: '45:10',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    avatar: 'D'
  },
  {
    id: '4',
    title: 'MongoDB Aggregation Framework Tutorial',
    channel: 'Database Hub',
    views: '18K views',
    timestamp: '3 days ago',
    duration: '18:40',
    category: 'React',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    avatar: 'D'
  },
  {
    id: '5',
    title: 'Lo-Fi Chill Beats for Coding & Studying',
    channel: 'Lofi Girl',
    views: '1.2M views',
    timestamp: '3 weeks ago',
    duration: '24:00',
    category: 'Music',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80',
    avatar: 'L'
  }
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Theme State (Defaults to dark mode true, persisted in localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('yt_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextState = !prev;
      localStorage.setItem('yt_dark_mode', JSON.stringify(nextState));
      return nextState;
    });
  };

  // Filtered videos based on category and search query
  const filteredVideos = initialVideos.filter((video) => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        onOpenProfile={() => setIsProfileOpen(true)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
      />

      <div className="flex pt-14">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="flex-1 p-6 ml-64 overflow-y-auto">
          {/* Category Filter Pills */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
            {['All', 'Coding', 'React', 'Design', 'Music'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                    : isDarkMode ? 'bg-[#272727] text-white hover:bg-[#3f3f3f]' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredVideos.map((v) => (
                <VideoCard key={v.id} video={v} onSelectVideo={setActiveVideo} isDarkMode={isDarkMode} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-2xl border ${isDarkMode ? 'bg-[#161616] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'}`}>
              <p className="text-sm font-semibold">No videos found matching your query.</p>
              <p className="text-xs text-gray-500 mt-1">Try selecting another tab or resetting your search filter.</p>
            </div>
          )}
        </main>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} isDarkMode={isDarkMode} />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}