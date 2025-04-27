
import React from 'react';

const FolderList = () => {
  const folders = [
    { id: 1, name: 'Personal' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Projects' }
  ];

  return (
    <ul className="space-y-1">
      {folders.map(folder => (
        <li
          key={folder.id}
          className="px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer"
        >
          {folder.name}
        </li>
      ))}
    </ul>
  );
};

export default FolderList;
