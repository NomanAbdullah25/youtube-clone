import React from 'react';
import { X, ThumbsUp, Share2, Bookmark, Check } from 'lucide-react';

export default function VideoModal({ video, onClose, isDarkMode }) {
  if (!video) return null;

  // Embedded YouTube Video URL
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      <div className={`w-full max-w-4xl rounded-2xl border overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col ${
        isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
      }`}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Information & Meta Controls */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-bold leading-snug">{video.title}</h2>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pb-4 border-b border-gray-800">
            {/* Channel Profile */}
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

            {/* Action Buttons */}
            <div className="flex items-center gap-2 text-xs">
              <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium ${
                isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <ThumbsUp className="w-4 h-4" />
                <span>Like</span>
              </button>
              <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium ${
                isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium ${
                isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Bookmark className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className={`mt-4 p-3 rounded-xl text-xs space-y-1 ${
            isDarkMode ? 'bg-[#212121] text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <p className="font-semibold">{video.views} • {video.timestamp}</p>
            <p className="leading-relaxed">
              Official video stream for {video.title}. Enjoy high-definition playback and interactive video tools built into this full-stack React application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}