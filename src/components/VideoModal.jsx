import React from 'react';
import { X, ThumbsUp, Share2, Bookmark } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-4xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <h3 className="font-semibold text-sm sm:text-base line-clamp-1">{video.title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h2 className="text-lg font-bold">{video.title}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{video.views} • {video.uploaded}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                <ThumbsUp size={16} /> Like
              </button>
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                {video.channel[0]}
              </div>
              <div>
                <p className="font-semibold text-sm">{video.channel}</p>
                <p className="text-xs text-gray-400">1.2M subscribers</p>
              </div>
            </div>
            <button className="bg-white text-black font-semibold text-xs px-4 py-2 rounded-full hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}