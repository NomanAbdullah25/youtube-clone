import React, { useState } from 'react';
import { X, User, Camera } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose, userProfile, setUserProfile }) {
  const [name, setName] = useState(userProfile.name);
  const [handle, setHandle] = useState(userProfile.handle);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setUserProfile({ ...userProfile, name, handle });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-md p-6 relative border border-gray-700 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-6 text-white">Edit Channel Profile</h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center font-bold text-2xl text-white border-2 border-purple-400">
                {name[0] || 'U'}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition">
                <Camera size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Handle</label>
            <input 
              type="text" 
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 rounded-lg text-sm bg-blue-600 font-semibold hover:bg-blue-500 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}