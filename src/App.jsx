import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';
import { Trash2, HeartOff } from 'lucide-react';

const videoDatabase = [
  // ================= HOME SECTION =================
  {
    id: 'hm-1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Full Stack Development Roadmap 2026',
    channel: 'Tech Lead',
    views: '120K views',
    timestamp: '2 days ago',
    duration: '14:20',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    avatar: 'T'
  },
  {
    id: 'hm-2',
    youtubeId: 'L_LUpnjgPso',
    title: 'Building a Microservices Architecture with Node.js',
    channel: 'Code Mastery',
    views: '45K views',
    timestamp: '1 week ago',
    duration: '22:15',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    avatar: 'C'
  },
  {
    id: 'hm-3',
    youtubeId: 'fN25f8iU8S4',
    title: 'Tailwind CSS Complete Masterclass (v4 & Beyond)',
    channel: 'Design Pro',
    views: '300K views',
    timestamp: '1 month ago',
    duration: '45:10',
    category: 'Design',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    avatar: 'D'
  },
  {
    id: 'hm-4',
    youtubeId: 'jfKfPfyJRdk',
    title: 'Lo-Fi Chill Beats for Coding & Studying',
    channel: 'Lofi Girl',
    views: '1.2M views',
    timestamp: '3 weeks ago',
    duration: '24:00',
    category: 'Music',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80',
    avatar: 'L'
  },
  {
    id: 'hm-5',
    youtubeId: 'w7ejDZ8SWv8',
    title: 'React 19 Hooks & State Management Deep Dive',
    channel: 'React Core Team',
    views: '510K views',
    timestamp: '5 days ago',
    duration: '29:40',
    category: 'React',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    avatar: 'R'
  },
  {
    id: 'hm-6',
    youtubeId: '2g811Ko7K8U',
    title: 'UI/UX Micro-Interactions in Figma & Framer',
    channel: 'UX Motion Studio',
    views: '230K views',
    timestamp: '4 days ago',
    duration: '18:50',
    category: 'Design',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    avatar: 'U'
  },

  // ================= TRENDING SECTION =================
  {
    id: 'tr-1',
    youtubeId: 'M576WGiDBdQ',
    rank: 1,
    title: 'UNLIMITED POWER: Quantum Computing Breakthrough 2026',
    channel: 'Aura Tech',
    views: '4.8M views',
    timestamp: '12 hours ago',
    duration: '16:45',
    category: 'Coding',
    section: 'trending',
    auraEffect: 'from-amber-500/30 via-red-500/20 to-purple-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    avatar: 'A'
  },
  {
    id: 'tr-2',
    youtubeId: 'w7ejDZ8SWv8',
    rank: 2,
    title: 'Super Saiyan UI/UX Animation Techniques Revealed',
    channel: 'Anime VFX Lab',
    views: '3.1M views',
    timestamp: '1 day ago',
    duration: '11:05',
    category: 'Design',
    section: 'trending',
    auraEffect: 'from-cyan-500/30 via-blue-600/20 to-indigo-500/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    avatar: 'V'
  },

  // ================= EXPLORE SECTION =================
  {
    id: 'ex-1',
    youtubeId: '2g811Ko7K8U',
    title: 'Exploring Deep Space & Futuristic AI Habitats',
    channel: 'Cosmic Frontier',
    views: '890K views',
    timestamp: '4 days ago',
    duration: '34:10',
    category: 'Design',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    avatar: 'C'
  },
  {
    id: 'ex-2',
    youtubeId: '4xDzrJKXOOY',
    title: 'Cyberpunk Soundscapes & Synthesizer Music Live',
    channel: 'Neon Beats',
    views: '620K views',
    timestamp: '5 days ago',
    duration: '52:00',
    category: 'Music',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80',
    avatar: 'N'
  }
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSection, setActiveSection] = useState('home'); 
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('yt_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // 2. Watch History State (Persisted)
  const [watchHistory, setWatchHistory] = useState(() => {
    const saved = localStorage.getItem('yt_watch_history');
    return saved ? JSON.parse(saved) : [];
  });

  // 3. Liked Videos State (Persisted)
  const [likedVideos, setLikedVideos] = useState(() => {
    const saved = localStorage.getItem('yt_liked_videos');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextState = !prev;
      localStorage.setItem('yt_dark_mode', JSON.stringify(nextState));
      return nextState;
    });
  };

  // Open player and record into Watch History
  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setWatchHistory((prevHistory) => {
      // Remove duplicate if already present, then place at beginning
      const filtered = prevHistory.filter((v) => v.id !== video.id);
      const updated = [video, ...filtered];
      localStorage.setItem('yt_watch_history', JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle Like / Unlike Video
  const handleToggleLike = (video) => {
    setLikedVideos((prevLiked) => {
      const exists = prevLiked.some((v) => v.id === video.id);
      let updated;
      if (exists) {
        updated = prevLiked.filter((v) => v.id !== video.id);
      } else {
        updated = [video, ...prevLiked];
      }
      localStorage.setItem('yt_liked_videos', JSON.stringify(updated));
      return updated;
    });
  };

  // Clear Watch History
  const handleClearHistory = () => {
    setWatchHistory([]);
    localStorage.removeItem('yt_watch_history');
  };

  // Unlike All Videos
  const handleUnlikeAll = () => {
    setLikedVideos([]);
    localStorage.removeItem('yt_liked_videos');
  };

  // Determine feed to display
  let displayedVideos = [];
  if (activeSection === 'history') {
    displayedVideos = watchHistory;
  } else if (activeSection === 'liked') {
    displayedVideos = likedVideos;
  } else {
    displayedVideos = videoDatabase.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            video.channel.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (video.section !== activeSection) return false;
      if (activeSection === 'home' || activeSection === 'explore') {
        return selectedCategory === 'All' || video.category === selectedCategory;
      }
      return true;
    });
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <Navbar 
        onOpenProfile={() => setIsProfileOpen(true)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="flex pt-14">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={isSidebarOpen}
        />

        <main className={`flex-1 p-4 md:p-6 transition-all duration-200 overflow-y-auto ${
          isSidebarOpen ? 'md:ml-64 ml-0' : 'ml-0'
        }`}>
          
          {/* Main Panel Header + Clear Actions */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl md:text-2xl font-bold capitalize flex items-center gap-2">
              {activeSection === 'trending' && '🔥 Trending'}
              {activeSection === 'explore' && 'Explore'}
              {activeSection === 'subscriptions' && 'Subscriptions'}
              {activeSection === 'history' && 'History'}
              {activeSection === 'liked' && 'Liked Videos'}
              {activeSection === 'home' && 'Home'}
            </h1>

            {/* Clear History Button */}
            {activeSection === 'history' && watchHistory.length > 0 && (
              <button 
                onClick={handleClearHistory}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white transition-colors border border-red-500/20"
              >
                <Trash2 className="w-4 h-4" /> Clear History
              </button>
            )}

            {/* Unlike All Button */}
            {activeSection === 'liked' && likedVideos.length > 0 && (
              <button 
                onClick={handleUnlikeAll}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white transition-colors border border-red-500/20"
              >
                <HeartOff className="w-4 h-4" /> Unlike All
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          {(activeSection === 'home' || activeSection === 'explore') && (
            <div className="flex gap-2.5 mb-6 overflow-x-auto pb-2 scrollbar-none">
              {['All', 'Coding', 'React', 'Design', 'Music'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                      : isDarkMode ? 'bg-[#272727] text-white hover:bg-[#3f3f3f]' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Video Grid */}
          {displayedVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayedVideos.map((v) => (
                <VideoCard 
                  key={v.id} 
                  video={v} 
                  onSelectVideo={handleSelectVideo} 
                  isDarkMode={isDarkMode} 
                  isTrending={activeSection === 'trending'}
                />
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-2xl border ${
              isDarkMode ? 'bg-[#161616] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'
            }`}>
              <p className="text-sm font-semibold">No videos found in this list.</p>
              <p className="text-xs text-gray-500 mt-1">
                {activeSection === 'history' && 'Videos you watch will automatically show up here.'}
                {activeSection === 'liked' && 'Videos you like will show up here.'}
              </p>
            </div>
          )}
        </main>
      </div>

      <VideoModal 
        video={activeVideo} 
        onClose={() => setActiveVideo(null)} 
        isDarkMode={isDarkMode} 
        likedVideos={likedVideos}
        onToggleLike={handleToggleLike}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}