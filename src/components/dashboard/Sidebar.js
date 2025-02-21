"use client";

import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white shadow-md h-full p-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">tavily</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul className="space-y-2">
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">Overview</a></li>
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">My Account</a></li>
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">Research Assistant</a></li>
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">Research Reports</a></li>
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">API Playground</a></li>
        <li><a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">Documentation</a></li>
      </ul>
    </div>
  );
} 