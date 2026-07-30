import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';
import { Trash2, HeartOff } from 'lucide-react';

const videoDatabase = [
  // ================= HOME SECTION (16 Videos) =================
  {
    id: 'hm-1',
    youtubeId: 'dQw4w9WgXcQ', // Rickroll Classic
    title: 'Full Stack Development Roadmap 2026',
    channel: 'Tech Lead',
    views: '1.2M views',
    timestamp: '2 days ago',
    duration: '14:20',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    avatar: 'T'
  },
  {
    id: 'hm-2',
    youtubeId: '8ZcmTl_1ER8', // Sax Guy
    title: 'Building Microservices with Node.js & Docker',
    channel: 'Code Mastery',
    views: '845K views',
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
    title: 'Tailwind CSS v4 & Modern UI Layouts Masterclass',
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
    youtubeId: 'jfKfPfyJRdk', // Lofi Girl
    title: 'Lo-Fi Chill Beats for Deep Focused Coding',
    channel: 'Lofi Girl',
    views: '12.4M views',
    timestamp: '3 weeks ago',
    duration: '24:00',
    category: 'Music',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80',
    avatar: 'L'
  },
  {
    id: 'hm-5',
    youtubeId: 'QH2-TGUlwu4', // Nyan Cat
    title: 'React 19 Hooks, Compiler & Async Actions Deep Dive',
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
    youtubeId: 'J---aiyznGQ', // Keyboard Cat
    title: 'UI/UX Micro-Interactions in Figma & Framer Motion',
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
    youtubeId: 'feA64wXhb2Y', // Shooting Stars
    title: 'TypeScript 5.5 High-Performance Optimization Patterns',
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
    youtubeId: '4xDzrJKXOOY', // Synthwave synth
    title: 'Synthwave Coding Session – Cyberpunk Night City',
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
    youtubeId: 'oavMtUWDBTM', // Trololo Song
    title: 'Building Realtime Apps with Next.js 15 & WebSockets',
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
    youtubeId: '9bZkp7q19f0', // Gangnam Style
    title: 'Enterprise Design Systems for Scalable Web Apps',
    channel: 'Figma Lab',
    views: '980K views',
    timestamp: '3 days ago',
    duration: '21:05',
    category: 'Design',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a3121699563?w=800&q=80',
    avatar: 'F'
  },
  {
    id: 'hm-11',
    youtubeId: '09m0B8RRiEE', // Crab Rave
    title: 'Rust for JavaScript Developers – Fast Track Intro',
    channel: 'Fireship',
    views: '1.8M views',
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
  {
    id: 'hm-13',
    youtubeId: 'ZZ5LpwO-An4', // HE-MAN HEYYEYAAEYAAA
    title: 'Zustand vs Redux Toolkit in Enterprise React',
    channel: 'React Core Team',
    views: '610K views',
    timestamp: '3 days ago',
    duration: '17:30',
    category: 'React',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    avatar: 'R'
  },
  {
    id: 'hm-14',
    youtubeId: 'L_LUpnjgPso',
    title: 'PostgreSQL Indexing & Query Tuning Techniques',
    channel: 'Database Hub',
    views: '140K views',
    timestamp: '1 week ago',
    duration: '26:40',
    category: 'Coding',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    avatar: 'D'
  },
  {
    id: 'hm-15',
    youtubeId: '2g811Ko7K8U',
    title: 'Dark Mode UI/UX Color Contrast Best Practices',
    channel: 'UX Motion Studio',
    views: '320K views',
    timestamp: '2 weeks ago',
    duration: '14:15',
    category: 'Design',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    avatar: 'U'
  },
  {
    id: 'hm-16',
    youtubeId: '4xDzrJKXOOY',
    title: 'Ambient Electronic Soundscapes for Late Night Coding',
    channel: 'Electronic Hub',
    views: '950K views',
    timestamp: '1 month ago',
    duration: '1:02:00',
    category: 'Music',
    section: 'home',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    avatar: 'E'
  },

  // ================= TRENDING SECTION (8 Ranked Superpower Videos) =================
  {
    id: 'tr-1',
    youtubeId: 'dQw4w9WgXcQ',
    rank: 1,
    title: 'UNLIMITED POWER: Quantum Computing Breakthrough 2026',
    channel: 'Aura Tech',
    views: '8.8M views',
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
    youtubeId: 'feA64wXhb2Y',
    rank: 2,
    title: 'Super Saiyan UI/UX Animation Techniques Revealed',
    channel: 'Anime VFX Lab',
    views: '5.1M views',
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
    youtubeId: '09m0B8RRiEE',
    rank: 3,
    title: 'Domain Expansion: Full Stack Web Security Mastery',
    channel: 'Cyber Ninja',
    views: '3.4M views',
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
    youtubeId: '8ZcmTl_1ER8',
    rank: 4,
    title: 'Bankai Engine: 60FPS WebGL Shaders & Canvas FX',
    channel: 'Graphics Overlord',
    views: '2.9M views',
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
    youtubeId: 'QH2-TGUlwu4',
    rank: 5,
    title: 'Ultra Instinct AI Agent Orchestration Framework',
    channel: 'AI Autonomous',
    views: '2.1M views',
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
    youtubeId: 'oavMtUWDBTM',
    rank: 6,
    title: 'Chakra Control: High-Frequency React State Management',
    channel: 'Ninja Coders',
    views: '1.8M views',
    timestamp: '5 days ago',
    duration: '15:20',
    category: 'React',
    section: 'trending',
    auraEffect: 'from-orange-500/30 via-amber-400/20 to-red-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    avatar: 'N'
  },
  {
    id: 'tr-7',
    youtubeId: 'ZZ5LpwO-An4',
    rank: 7,
    title: 'Kamehameha Build Pipelines: Vite 6 Instant HMR',
    channel: 'Build Master',
    views: '1.2M views',
    timestamp: '6 days ago',
    duration: '12:00',
    category: 'Coding',
    section: 'trending',
    auraEffect: 'from-yellow-500/30 via-amber-500/20 to-orange-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    avatar: 'B'
  },
  {
    id: 'tr-8',
    youtubeId: '9bZkp7q19f0',
    rank: 8,
    title: 'Infinite Tsukuyomi VR Web Design Experience',
    channel: 'VR Studio',
    views: '990K views',
    timestamp: '1 week ago',
    duration: '25:10',
    category: 'Design',
    section: 'trending',
    auraEffect: 'from-purple-600/30 via-violet-500/20 to-indigo-600/30 animate-pulse',
    thumbnail: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
    avatar: 'V'
  },

  // ================= EXPLORE SECTION (12 Videos) =================
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
  {
    id: 'ex-9',
    youtubeId: '8ZcmTl_1ER8',
    title: 'Quantum Machine Learning Algorithms Explained',
    channel: 'AI Autonomous',
    views: '430K views',
    timestamp: '5 days ago',
    duration: '31:20',
    category: 'Coding',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80',
    avatar: 'I'
  },
  {
    id: 'ex-10',
    youtubeId: 'J---aiyznGQ',
    title: 'Typography & Layout Principles for Web Interfaces',
    channel: 'Design Pro',
    views: '260K views',
    timestamp: '2 weeks ago',
    duration: '18:05',
    category: 'Design',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    avatar: 'D'
  },
  {
    id: 'ex-11',
    youtubeId: 'feA64wXhb2Y',
    title: 'Building Realtime Audio Visualization in Canvas',
    channel: 'Graphics Overlord',
    views: '380K views',
    timestamp: '1 week ago',
    duration: '24:15',
    category: 'React',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    avatar: 'G'
  },
  {
    id: 'ex-12',
    youtubeId: '09m0B8RRiEE',
    title: 'Smooth Jazz & Lo-Fi Chill Hop Compilation',
    channel: 'Acoustic Vibes',
    views: '670K views',
    timestamp: '3 weeks ago',
    duration: '1:10:00',
    category: 'Music',
    section: 'explore',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    avatar: 'A'
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

  // 4. Subscriptions Channels State (Persisted)
  const [subscribedChannels, setSubscribedChannels] = useState(() => {
    const saved = localStorage.getItem('yt_subscriptions');
    return saved ? JSON.parse(saved) : ['Tech Lead', 'Code Mastery'];
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextState = !prev;
      localStorage.setItem('yt_dark_mode', JSON.stringify(nextState));
      return nextState;
    });
  };

  // Open player and automatically record into Watch History
  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setWatchHistory((prevHistory) => {
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

  // Toggle Channel Subscription
  const handleToggleSubscribe = (channelName) => {
    setSubscribedChannels((prev) => {
      let updated;
      if (prev.includes(channelName)) {
        updated = prev.filter((c) => c !== channelName);
      } else {
        updated = [...prev, channelName];
      }
      localStorage.setItem('yt_subscriptions', JSON.stringify(updated));
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

  // Filter video feed
  let displayedVideos = [];
  if (activeSection === 'history') {
    displayedVideos = watchHistory;
  } else if (activeSection === 'liked') {
    displayedVideos = likedVideos;
  } else if (activeSection === 'subscriptions') {
    displayedVideos = videoDatabase.filter((v) => subscribedChannels.includes(v.channel));
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
                {activeSection === 'subscriptions' && 'Subscribe to channels during playback to see them here!'}
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
        subscribedChannels={subscribedChannels}
        onToggleSubscribe={handleToggleSubscribe}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}