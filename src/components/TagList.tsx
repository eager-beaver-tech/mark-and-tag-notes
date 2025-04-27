
import React from 'react';

const TagList = () => {
  const tags = [
    { id: 1, name: 'Important', color: '#F97316' },
    { id: 2, name: 'Ideas', color: '#8B5CF6' },
    { id: 3, name: 'Todo', color: '#0EA5E9' }
  ];

  return (
    <ul className="space-y-1">
      {tags.map(tag => (
        <li
          key={tag.id}
          className="px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer flex items-center"
        >
          <span
            className="w-2 h-2 rounded-full mr-2"
            style={{ backgroundColor: tag.color }}
          />
          {tag.name}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
