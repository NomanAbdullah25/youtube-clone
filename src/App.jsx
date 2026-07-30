import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';

const videoDatabase = [
  // --- HOME SECTION ---
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

  // --- TRENDING SECTION (With Rank Badges & Aura) ---
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
  {
    id: 'tr-3',
    youtubeId: 'bMknfKXIFA8',
    rank: 3,
    title: 'Domain Expansion: Full Stack Web Security Mastery',
    channel: 'Cyber Ninja',
    views: '2.4M views',
    timestamp: '2 days ago',
    duration: '28:30',
    category: 'Coding',
    section: 'trending',
    auraEffect: 'from-emerald-500/30 via-teal-600/20 to-purple-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    avatar: 'N'
  },

  // --- EXPLORE SECTION ---
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
  },
  {
    id: 'ex-3',
    youtubeId: 'Ke90Tje7VS0',
    title: 'React 19 & Next.js Server Components Guide',
    channel: 'Dev Overdrive',
    views: '410K views',
    timestamp: '1 week ago',
    duration: '19:15',
    category: 'React',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    avatar: 'D'
  },

  // --- SUBSCRIPTIONS SECTION ---
  {
    id: 'sub-1',
    youtubeId: 'SqcY0GlETPk',
    title: 'System Design Interview – Building Distributed Systems',
    channel: 'ByteByteGo',
    views: '950K views',
    timestamp: '3 days ago',
    duration: '21:00',
    category: 'Coding',
    section: 'subscriptions',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    avatar: 'B'
  },
  {
    id: 'sub-2',
    youtubeId: '8aGhZQkoFbQ',
    title: 'Figma to Code Workflow in 2026',
    channel: 'Design Pro',
    views: '180K views',
    timestamp: '4 days ago',
    duration: '16:40',
    category: 'Design',
    section: 'subscriptions',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    avatar: 'D'
  },

  // --- HISTORY SECTION ---
  {
    id: 'his-1',
    youtubeId: 'N3AkSS5hXMA',
    title: 'Modern CSS Layouts & Grid Systems Explained',
    channel: 'Web Dev Simplified',
    views: '540K views',
    timestamp: 'Watched yesterday',
    duration: '13:45',
    category: 'Design',
    section: 'history',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    avatar: 'W'
  },
  {
    id: 'his-2',
    youtubeId: '30LWjhZzg50',
    title: 'Python for Data Science Masterclass',
    channel: 'Data Camp',
    views: '800K views',
    timestamp: 'Watched 2 days ago',
    duration: '38:20',
    category: 'Coding',
    section: 'history',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    avatar: 'D'
  },

  // --- LIKED VIDEOS SECTION ---
  {
    id: 'lk-1',
    youtubeId: 'kUMe1FH4CHE',
    title: 'Clean Code Architecture in JavaScript Applications',
    channel: 'Fireship',
    views: '1.5M views',
    timestamp: 'Liked 1 week ago',
    duration: '10:15',
    category: 'Coding',
    section: 'liked',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
    avatar: 'F'
  },
  {
    id: 'lk-2',
    youtubeId: 'TNhaISOUy6Q',
    title: 'Ambient Music for Deep Focus & Coding',
    channel: 'Chillhop Music',
    views: '2.1M views',
    timestamp: 'Liked 2 weeks ago',
    duration: '42:00',
    category: 'Music',
    section: 'liked',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    avatar: 'C'
  }
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSection, setActiveSection] = useState('home'); 
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter video list specifically per section
  const displayedVideos = videoDatabase.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    // Strict tab filtering so each section gets distinct videos
    if (video.section !== activeSection) return false;

    if (activeSection === 'home' || activeSection === 'explore') {
      return selectedCategory === 'All' || video.category === selectedCategory;
    }

    return true;
  });

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
          
          {/* Main Panel Header (NO EMOJIS EXCEPT FIRE ON TRENDING) */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl md:text-2xl font-bold capitalize flex items-center gap-2">
              {activeSection === 'trending' && '🔥 Trending'}
              {activeSection === 'explore' && 'Explore'}
              {activeSection === 'subscriptions' && 'Subscriptions'}
              {activeSection === 'history' && 'History'}
              {activeSection === 'liked' && 'Liked Videos'}
              {activeSection === 'home' && 'Home'}
            </h1>
          </div>

          {/* Category Filter Pills (shown on Home & Explore) */}
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
                  onSelectVideo={setActiveVideo} 
                  isDarkMode={isDarkMode} 
                  isTrending={activeSection === 'trending'}
                />
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-2xl border ${
              isDarkMode ? 'bg-[#161616] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'
            }`}>
              <p className="text-sm font-semibold">No videos found in this feed.</p>
              <p className="text-xs text-gray-500 mt-1">Select another section from the sidebar or clear search filters.</p>
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