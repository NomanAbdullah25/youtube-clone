import React from 'react';
import { Play } from 'lucide-react';

export default function VideoCard({ video, onSelectVideo }) {
  return (
    <div 
      onClick={() => onSelectVideo(video)} 
      className="flex flex-col gap-3 cursor-pointer group p-2 rounded-2xl transition-all duration-300 hover:bg-gray-800/40 hover:shadow-xl border border-transparent hover:border-gray-800/80"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800/80 shadow-md">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-600/40 transform scale-95 group-hover:scale-100 transition-transform">
            <Play size={18} fill="currentColor" className="ml-0.5" />
          </div>
        </div>
        <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-[10px] font-bold text-white px-2 py-0.5 rounded-md tracking-wider">
          {video.duration}
        </span>
      </div>

      <div className="flex gap-3 px-0.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex-shrink-0 flex items-center justify-center font-bold text-xs text-white shadow-md">
          {video.channel[0]}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-xs text-gray-100 line-clamp-2 leading-relaxed group-hover:text-red-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-[11px] text-gray-400 font-medium mt-1">{video.channel}</p>
          <p className="text-[10px] text-gray-500 font-medium mt-0.5">{video.views} • {video.uploaded}</p>
        </div>
      </div>
    </div>
  );
}