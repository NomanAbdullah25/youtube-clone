import React, { useState } from 'react';
import { X, ThumbsUp, ThumbsDown, Share2, Bookmark, Check, Copy } from 'lucide-react';

export default function VideoModal({ 
  video, 
  onClose, 
  isDarkMode, 
  likedVideos = [], 
  onToggleLike,
  subscribedChannels = [],
  onToggleSubscribe
}) {
  if (!video) return null;

  const [isDisliked, setIsDisliked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const isLiked = likedVideos.some((v) => v.id === video.id);
  const isSubscribed = subscribedChannels.includes(video.channel);
  
  // Embedded Video Player
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1`;

  const handleCopyLink = () => {
    const videoUrl = `https://youtube.com/watch?v=${video.youtubeId}`;
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
        <div className={`w-full max-w-4xl rounded-2xl border overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col ${
          isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}>
          {/* Close Modal Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Embedded Playable Video */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={embedUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Meta & Interactive Controls */}
          <div className="p-4 sm:p-6 overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-bold leading-snug">{video.title}</h2>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pb-4 border-b border-gray-800">
              
              {/* Channel & Subscribe Action */}
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

                {/* Subscribed Toggle Button */}
                <button 
                  onClick={() => onToggleSubscribe(video.channel)}
                  className={`ml-2 px-4 py-1.5 font-semibold text-xs rounded-full transition-all duration-200 ${
                    isSubscribed
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>

              {/* Like, Dislike & Share Action Buttons */}
              <div className="flex items-center gap-2 text-xs">
                {/* Like Button */}
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

                {/* Interactive Red Pulse Dislike Button */}
                <button 
                  onClick={handleDislike}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition-all ${
                    isDisliked 
                      ? 'bg-red-500/20 text-red-500 border border-red-500/50 scale-105 animate-pulse' 
                      : isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>

                {/* Share Button (Opens Copy Link Modal) */}
                <button 
                  onClick={() => setShowShareModal(true)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition-colors ${
                    isDarkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
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
                Playing: {video.title}. Enjoy humor, real-time subscribe syncing, and state persistence!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Share / Copy Link Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-sm rounded-2xl border p-5 relative shadow-2xl ${
            isDarkMode ? 'bg-[#181818] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}>
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-bold text-sm mb-3">Share Video</h3>

            <div className={`flex items-center border rounded-xl p-2 gap-2 ${
              isDarkMode ? 'bg-[#121212] border-gray-700' : 'bg-gray-50 border-gray-300'
            }`}>
              <input 
                type="text" 
                readOnly 
                value={`https://youtube.com/watch?v=${video.youtubeId}`}
                className="w-full bg-transparent text-xs focus:outline-none text-gray-400"
              />
              <button 
                onClick={handleCopyLink}
                className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}