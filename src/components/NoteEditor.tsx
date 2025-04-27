
import React from 'react';
import MDEditor from '@uiw/react-md-editor';

const NoteEditor = () => {
  const [value, setValue] = React.useState("# Hello World\n\nStart writing your note here...");

  return (
    <div className="h-full bg-white p-4">
      <MDEditor
        value={value}
        onChange={setValue}
        preview="edit"
        height={500}
        className="w-full"
      />
    </div>
  );
};

export default NoteEditor;
