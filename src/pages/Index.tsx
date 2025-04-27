
import React from 'react';
import Sidebar from '@/components/Sidebar';
import NoteEditor from '@/components/NoteEditor';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <NoteEditor />
      </main>
    </div>
  );
};

export default Index;
