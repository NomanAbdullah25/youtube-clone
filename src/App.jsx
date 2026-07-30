import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';

const videoDatabase = [
  // ================= HOME SECTION (12 Videos) =================
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
  {
    id: 'hm-7',
    youtubeId: 'Ke90Tje7VS0',
    title: 'TypeScript Performance Optimization Patterns',
    channel: 'ByteByteGo',
    views: '175K views',
    timestamp: '6 days ago',
    duration: '19:10',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&q=80',
    avatar: 'B'
  },
  {
    id: 'hm-8',
    youtubeId: '4xDzrJKXOOY',
    title: 'Synthwave Coding Session – Night City Ambient',
    channel: 'Cyber Sounds',
    views: '890K views',
    timestamp: '2 weeks ago',
    duration: '1:15:00',
    category: 'Music',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80',
    avatar: 'C'
  },
  {
    id: 'hm-9',
    youtubeId: 'SqcY0GlETPk',
    title: 'Building Realtime Apps with Next.js & WebSockets',
    channel: 'Dev Overdrive',
    views: '340K views',
    timestamp: '1 week ago',
    duration: '31:25',
    category: 'React',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    avatar: 'D'
  },
  {
    id: 'hm-10',
    youtubeId: '8aGhZQkoFbQ',
    title: 'Design Systems for Scalable Web Applications',
    channel: 'Figma Lab',
    views: '98K views',
    timestamp: '3 days ago',
    duration: '21:05',
    category: 'Design',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a3121699563?w=800&q=80',
    avatar: 'F'
  },
  {
    id: 'hm-11',
    youtubeId: 'N3AkSS5hXMA',
    title: 'Rust for JavaScript Developers – Fast Intro',
    channel: 'Fireship',
    views: '1.1M views',
    timestamp: '4 weeks ago',
    duration: '11:45',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    avatar: 'F'
  },
  {
    id: 'hm-12',
    youtubeId: 'TNhaISOUy6Q',
    title: 'Acoustic Guitar Melodies for Deep Concentration',
    channel: 'Acoustic Vibes',
    views: '420K views',
    timestamp: '5 days ago',
    duration: '48:10',
    category: 'Music',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    avatar: 'A'
  },

  // ================= TRENDING SECTION (6 Ranked Superpower Videos) =================
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
  {
    id: 'tr-4',
    youtubeId: 'kUMe1FH4CHE',
    rank: 4,
    title: 'Bankai Engine: 60FPS WebGL Shaders & Canvas FX',
    channel: 'Graphics Overlord',
    views: '1.9M views',
    timestamp: '3 days ago',
    duration: '20:15',
    category: 'Design',
    section: 'trending',
    auraEffect: 'from-fuchsia-600/30 via-pink-500/20 to-rose-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    avatar: 'G'
  },
  {
    id: 'tr-5',
    youtubeId: '30LWjhZzg50',
    rank: 5,
    title: 'Ultra Instinct AI Agent Orchestration Framework',
    channel: 'AI Autonomous',
    views: '1.4M views',
    timestamp: '4 days ago',
    duration: '35:40',
    category: 'Coding',
    section: 'trending',
    auraEffect: 'from-blue-600/30 via-sky-400/20 to-teal-500/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
    avatar: 'I'
  },
  {
    id: 'tr-6',
    youtubeId: 'N3AkSS5hXMA',
    rank: 6,
    title: 'Chakra Control: High-Frequency State Management',
    channel: 'Ninja Coders',
    views: '980K views',
    timestamp: '5 days ago',
    duration: '15:20',
    category: 'React',
    section: 'trending',
    auraEffect: 'from-orange-500/30 via-amber-400/20 to-red-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    avatar: 'N'
  },

  // ================= EXPLORE SECTION (8 Videos) =================
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
  {
    id: 'ex-4',
    youtubeId: 'fN25f8iU8S4',
    title: 'Futuristic Architectural Design in 3D Blender',
    channel: 'Render Studio',
    views: '310K views',
    timestamp: '3 days ago',
    duration: '27:40',
    category: 'Design',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    avatar: 'R'
  },
  {
    id: 'ex-5',
    youtubeId: 'jfKfPfyJRdk',
    title: 'Deep House Beats for Late Night Coding Sessions',
    channel: 'Electronic Hub',
    views: '740K views',
    timestamp: '2 weeks ago',
    duration: '1:05:30',
    category: 'Music',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    avatar: 'E'
  },
  {
    id: 'ex-6',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Mastering Docker & Kubernetes for Cloud Deployments',
    channel: 'Cloud Native Lab',
    views: '520K views',
    timestamp: '1 week ago',
    duration: '42:15',
    category: 'Coding',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    avatar: 'C'
  },
  {
    id: 'ex-7',
    youtubeId: 'L_LUpnjgPso',
    title: 'Building Interactive 3D Web Experiences with Three.js',
    channel: 'Creative Tech',
    views: '280K views',
    timestamp: '4 days ago',
    duration: '23:50',
    category: 'React',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    avatar: 'C'
  },
  {
    id: 'ex-8',
    youtubeId: 'SqcY0GlETPk',
    title: 'Minimalist Interior Design Aesthetics & Principles',
    channel: 'Space Design',
    views: '190K views',
    timestamp: '6 days ago',
    duration: '15:10',
    category: 'Design',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    avatar: 'S'
  },

  // ================= SUBSCRIPTIONS SECTION =================
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

  // ================= HISTORY SECTION =================
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

  // ================= LIKED VIDEOS SECTION =================
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

  // Filter video list specifically per section & category
  const displayedVideos = videoDatabase.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

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
          
          {/* Main Panel Header */}
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
              <p className="text-sm font-semibold">No videos found in this category feed.</p>
              <p className="text-xs text-gray-500 mt-1">Select another tab or reset your category filter.</p>
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