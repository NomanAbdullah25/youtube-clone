import React from 'react';
import { X, ThumbsUp, ThumbsDown, Share2, Bookmark, Check } from 'lucide-react';

export default function VideoModal({ video, onClose, isDarkMode, likedVideos = [], onToggleLike }) {
  if (!video) return null;

  const isLiked = likedVideos.some((v) => v.id === video.id);
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      <div className={`w-full max-w-4xl rounded-2xl border overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col ${
        isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
      }`}>
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Meta & Actions */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-bold leading-snug">{video.title}</h2>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold text-sm flex items-center justify-center shadow">
                {video.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm flex items-center gap-1">
                  {video.channel}
                  <Check className="w-3.5 h-3.5 text-gray-400 bg-gray-700 rounded-full p-0.5" />
                </p>
                <p className="text-xs text-gray-400">1.2M subscribers</p>
              </div>
              <button className="ml-2 px-4 py-1.5 bg-white text-black hover:bg-gray-200 font-semibold text-xs rounded-full transition-colors">
                Subscribe
              </button>
            </div>

            {/* Like, Dislike & Action Buttons */}
            <div className="flex items-center gap-2 text-xs">
              {/* Like Button (Toggles Liked State & Adds to Liked Tab) */}
              <button 
                onClick={() => onToggleLike(video)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium transition-colors ${
                  isLiked 
                    ? 'bg-red-600 text-white' 
                    : isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>

              {/* Dislike Button */}
              <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition-colors ${
                isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <ThumbsDown className="w-4 h-4" />
              </button>

              <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition-colors ${
                isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded-xl text-xs space-y-1 ${
            isDarkMode ? 'bg-[#212121] text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <p className="font-semibold">{video.views} • {video.timestamp}</p>
            <p className="leading-relaxed">
              Watching: {video.title}. Enjoy real-time interaction, automatic history saving, and local state persistence!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}