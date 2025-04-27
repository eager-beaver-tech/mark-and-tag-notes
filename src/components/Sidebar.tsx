
import React from 'react';
import { Folder, Tag, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import FolderList from './FolderList';
import TagList from './TagList';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4 flex flex-col">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search notes..."
            className="pl-8 bg-gray-50"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Folder className="h-4 w-4 mr-2" />
          <h2 className="text-sm font-semibold">Folders</h2>
        </div>
        <FolderList />
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Tag className="h-4 w-4 mr-2" />
          <h2 className="text-sm font-semibold">Tags</h2>
        </div>
        <TagList />
      </div>
    </div>
  );
};

export default Sidebar;
