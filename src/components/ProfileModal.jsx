import React, { useState, useEffect } from 'react';
import { X, User, Edit2, Save } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
  const [user, setUser] = useState({
    name: 'Noman Abdullah',
    handle: '@nomanabdullah',
    bio: 'Frontend Developer & Creator'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    const savedUser = localStorage.getItem('yt_user_profile');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed) {
          setUser(parsed);
          setFormData(parsed);
        }
      } catch (e) {
        console.error("Error loading user profile:", e);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem('yt_user_profile', JSON.stringify(formData));
    setIsEditing(false);
  };

  const nameInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'N';

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#181818] border border-gray-800 text-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-1 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-600 font-bold text-2xl flex items-center justify-center border-2 border-indigo-400/40">
            {nameInitial}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user?.name || 'User'}</h2>
            <p className="text-xs text-gray-400">{user?.handle || '@user'}</p>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Display Name</label>
              <input
                type="text"
                value={formData?.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Handle</label>
              <input
                type="text"
                value={formData?.handle || ''}
                onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Bio</label>
              <textarea
                value={formData?.bio || ''}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows="3"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
            >
              <Save className="w-4 h-4" /> Save Profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-3 bg-black/20 rounded-xl border border-gray-800/50">
              <p className="text-xs text-gray-400">Bio</p>
              <p className="text-sm mt-1 text-gray-200">{user?.bio || 'No bio set.'}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <Edit2 className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}