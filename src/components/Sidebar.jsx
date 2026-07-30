import React from 'react';
import { 
  Home, Compass, PlaySquare, Clock, ThumbsUp, 
  Film, Flame, Settings, HelpCircle, Flag 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isOpen }) {
  if (!isOpen) return null;

  const mainNav = [
    { icon: Home, label: 'Home' },
    { icon: Compass, label: 'Explore' },
    { icon: PlaySquare, label: 'Subscriptions' },
  ];

  const personalNav = [
    { icon: Clock, label: 'History' },
    { icon: ThumbsUp, label: 'Liked Videos' },
  ];

  const exploreNav = [
    { icon: Flame, label: 'Trending' },
    { icon: Film, label: 'Movies & Shows' },
  ];

  const systemNav = [
    { icon: Settings, label: 'Settings' },
    { icon: Flag, label: 'Report history' },
    { icon: HelpCircle, label: 'Help' },
  ];

  const renderSection = (items) => (
    <div className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <button 
            key={item.label} 
            onClick={() => setActiveTab(item.label)}
            className={`flex items-center gap-4 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              isActive 
                ? 'bg-gradient-to-r from-red-600/90 to-red-500/80 text-white shadow-lg shadow-red-900/20 font-bold' 
                : 'text-gray-400 hover:bg-gray-800/60 hover:text-gray-100'
            }`}
          >
            <item.icon size={18} className={isActive ? 'text-white' : 'text-gray-400'} />
            <span className="tracking-wide">{item.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <aside className="w-64 fixed left-0 top-14 bottom-0 bg-[#121218]/95 backdrop-blur-md p-3.5 border-r border-gray-800/60 flex flex-col gap-3.5 overflow-y-auto z-30 shadow-2xl">
      {renderSection(mainNav)}
      <hr className="border-gray-800/60 my-0.5" />
      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3">Library</span>
      {renderSection(personalNav)}
      <hr className="border-gray-800/60 my-0.5" />
      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3">Explore</span>
      {renderSection(exploreNav)}
      <hr className="border-gray-800/60 my-0.5" />
      {renderSection(systemNav)}
    </aside>
  );
}