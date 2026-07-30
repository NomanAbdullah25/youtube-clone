import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import ProfileModal from './components/ProfileModal';
import { Settings, Flag, HelpCircle, Sparkles } from 'lucide-react';

const INITIAL_VIDEOS = [
  {
    id: '1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Full Stack Development Roadmap 2026',
    channel: 'Tech Lead',
    category: 'Coding',
    tabs: ['Home', 'History'],
    isLiked: false,
    views: '120K views',
    uploaded: '2 days ago',
    duration: '14:20',
    thumbnail: 'https://picsum.photos/seed/tech/600/340'
  },
  {
    id: '2',
    youtubeId: 'LDB4uaJ87e0',
    title: 'Building a Microservices Architecture with Node.js & React',
    channel: 'Code Mastery',
    category: 'React',
    tabs: ['Home', 'Liked Videos'],
    isLiked: true,
    views: '45K views',
    uploaded: '1 week ago',
    duration: '22:15',
    thumbnail: 'https://picsum.photos/seed/code/600/340'
  },
  {
    id: '3',
    youtubeId: 'sBws8MSXN7A',
    title: 'Tailwind CSS Complete Masterclass (v4 & Beyond)',
    channel: 'Design Pro',
    category: 'Design',
    tabs: ['Home', 'Subscriptions'],
    isLiked: true,
    views: '300K views',
    uploaded: '1 month ago',
    duration: '45:10',
    thumbnail: 'https://picsum.photos/seed/design/600/340'
  },
  {
    id: '4',
    youtubeId: 'W6NZfCO5SIk',
    title: 'MongoDB Aggregation Framework Tutorial',
    channel: 'Database Hub',
    category: 'Coding',
    tabs: ['Home', 'History'],
    isLiked: false,
    views: '18K views',
    uploaded: '3 days ago',
    duration: '18:40',
    thumbnail: 'https://picsum.photos/seed/data/600/340'
  },
  {
    id: '5',
    youtubeId: 'kJQP7kiw5Fk',
    title: 'Lo-Fi Chill Beats for Coding & Studying',
    channel: 'Lofi Girl',
    category: 'Music',
    tabs: ['Explore', 'Trending', 'Home'],
    isLiked: true,
    views: '1.2M views',
    uploaded: '3 weeks ago',
    duration: '24:00',
    thumbnail: 'https://picsum.photos/seed/lofi/600/340'
  },
  {
    id: '6',
    youtubeId: '2Vv-BfVoq4g',
    title: 'Unreal Engine 5.4 Cinematic Rendering Breakdown',
    channel: '3D World',
    category: 'Design',
    tabs: ['Explore', 'Trending'],
    isLiked: false,
    views: '890K views',
    uploaded: '4 days ago',
    duration: '19:05',
    thumbnail: 'https://picsum.photos/seed/unreal/600/340'
  },
  {
    id: '7',
    youtubeId: '3JZ_D3ELwOQ',
    title: 'AI Revolution in 2026: Autonomous Agents Explained',
    channel: 'Future Tech',
    category: 'Coding',
    tabs: ['Explore', 'Trending'],
    isLiked: true,
    views: '650K views',
    uploaded: 'Yesterday',
    duration: '16:45',
    thumbnail: 'https://picsum.photos/seed/aitech/600/340'
  },
  {
    id: '8',
    youtubeId: 'JfVOs4VSpmA',
    title: 'Cyberpunk 2099 - Official Premiere Short Film',
    channel: 'Cinematic Studio',
    category: 'Design',
    tabs: ['Movies & Shows'],
    isLiked: true,
    views: '2.4M views',
    uploaded: '2 months ago',
    duration: '32:10',
    thumbnail: 'https://picsum.photos/seed/movie1/600/340'
  }
];

const CATEGORIES = ['All', 'Coding', 'React', 'Design', 'Music'];

export default function App() {
  // Load initial states from localStorage if available
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem('yt_videos');
    return saved ? JSON.parse(saved) : INITIAL_VIDEOS;
  });

  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('yt_user_profile');
    return saved ? JSON.parse(saved) : { name: 'Noman Abdullah', handle: '@nomanabdullah' };
  });

  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem('yt_videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('yt_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  const handleAddVideo = (newVid) => {
    setVideos([newVid, ...videos]);
  };

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.channel.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesCategory || !matchesSearch) return false;

    if (activeTab === 'Home') return video.tabs.includes('Home');
    if (activeTab === 'Explore') return video.tabs.includes('Explore') || video.tabs.includes('Trending');
    if (activeTab === 'Trending') return video.tabs.includes('Trending');
    if (activeTab === 'Movies & Shows') return video.tabs.includes('Movies & Shows');
    if (activeTab === 'Subscriptions') return video.tabs.includes('Subscriptions');
    if (activeTab === 'Liked Videos') return video.isLiked;
    if (activeTab === 'History') return video.tabs.includes('History');

    return true;
  });

  const renderSystemContent = () => {
    if (activeTab === 'Settings') {
      return (
        <div className="max-w-3xl bg-[#16161e] border border-gray-800/80 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <Settings className="text-red-500" size={24} />
            <h2 className="text-lg font-bold text-white">Account & System Settings</h2>
          </div>
          <div className="space-y-4 text-xs text-gray-300">
            <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-xl border border-gray-800">
              <div>
                <p className="font-semibold text-white">Dark Cinema Theme</p>
                <p className="text-gray-400 text-[11px]">Enabled high contrast dark mode</p>
              </div>
              <input type="checkbox" defaultChecked className="accent-red-600 w-4 h-4 cursor-pointer" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-xl border border-gray-800">
              <div>
                <p className="font-semibold text-white">Autoplay Next Video</p>
                <p className="text-gray-400 text-[11px]">Automatically play recommended videos</p>
              </div>
              <input type="checkbox" defaultChecked className="accent-red-600 w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Report history') {
      return (
        <div className="max-w-3xl bg-[#16161e] border border-gray-800/80 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <Flag className="text-red-500" size={24} />
            <h2 className="text-lg font-bold text-white">Report History</h2>
          </div>
          <p className="text-xs text-gray-400">You have no active flags or content reports filed in the last 90 days.</p>
        </div>
      );
    }

    if (activeTab === 'Help') {
      return (
        <div className="max-w-3xl bg-[#16161e] border border-gray-800/80 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <HelpCircle className="text-red-500" size={24} />
            <h2 className="text-lg font-bold text-white">Help Center & Support</h2>
          </div>
          <div className="space-y-2 text-xs">
            <p className="font-medium text-gray-200">Common Questions:</p>
            <ul className="list-disc pl-5 text-gray-400 space-y-1">
              <li>How do I edit my YouTube profile? (Click your profile avatar on the top right)</li>
              <li>How do I upload a draft video? (Click the camera icon on the top right)</li>
              <li>How do I play embedded content? (Click on any video card)</li>
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  const isSystemMenu = ['Settings', 'Report history', 'Help'].includes(activeTab);

  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-100 selection:bg-red-600 selection:text-white">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userProfile={userProfile}
        onOpenProfile={() => setIsProfileOpen(true)}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onAddVideo={handleAddVideo}
      />

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
      />

      <main className={`pt-20 pr-6 pb-12 transition-all duration-300 ${isSidebarOpen ? 'md:pl-72 pl-6' : 'pl-6'}`}>
        {!isSystemMenu && (
          <div className="flex gap-2.5 overflow-x-auto pb-4 mb-5 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat 
                    ? 'bg-white text-gray-900 shadow-md font-bold scale-105' 
                    : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span>{activeTab}</span>
            <Sparkles size={16} className="text-red-500" />
          </h1>
          <span className="text-xs text-gray-400">Account: <strong className="text-purple-400">{userProfile.name}</strong></span>
        </div>

        {isSystemMenu ? (
          renderSystemContent()
        ) : filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredVideos.map(v => (
              <VideoCard key={v.id} video={v} onSelectVideo={setActiveVideo} />
            ))}
          </div>
        ) : (
          <div className="text-gray-400 text-center py-16 bg-[#16161e] rounded-2xl border border-gray-800/80 shadow-lg">
            <p className="text-sm font-semibold text-gray-300">No videos found in <strong className="text-red-400">{activeTab}</strong></p>
            <p className="text-xs text-gray-500 mt-1">Try selecting another tab or resetting your search filter.</p>
          </div>
        )}
      </main>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
    </div>
  );
}