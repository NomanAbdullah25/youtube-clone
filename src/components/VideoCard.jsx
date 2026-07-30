import React from 'react';

export default function VideoCard({ video, onSelectVideo, isDarkMode, isTrending }) {
  return (
    <div 
      onClick={() => onSelectVideo(video)}
      className={`group cursor-pointer rounded-2xl overflow-hidden relative transition-all duration-300 hover:scale-[1.02] ${
        isTrending 
          ? `bg-gradient-to-r ${video.auraEffect || 'from-purple-600/30 via-red-600/20 to-indigo-600/30'} p-1 shadow-xl` 
          : ''
      }`}
    >
      <div className={`rounded-xl overflow-hidden ${
        isDarkMode ? 'bg-[#181818]' : 'bg-white border border-gray-200'
      }`}>
        {/* Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Duration Badge */}
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
            {video.duration}
          </span>

          {/* Anime Superpower Trending Rank Badge */}
          {video.rank && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 border border-amber-300/40 animate-pulse">
              <span>#{video.rank}</span>
              <span className="text-[10px] tracking-wider uppercase">Trending</span>
            </div>
          )}
        </div>

        {/* Video Information */}
        <div className="p-3 flex gap-3">
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow">
            {video.avatar}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-sm font-semibold line-clamp-2 leading-snug transition-colors ${
              isDarkMode ? 'text-white group-hover:text-red-400' : 'text-gray-900 group-hover:text-red-600'
            }`}>
              {video.title}
            </h3>

            <p className={`text-xs mt-1 transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {video.channel}
            </p>

            <div className={`text-[11px] flex items-center gap-1 mt-0.5 transition-colors ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}