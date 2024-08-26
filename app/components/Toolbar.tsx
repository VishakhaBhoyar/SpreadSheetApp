'use client';

import React from 'react';
import useStore from "../../stores/useStore";

const Toolbar: React.FC = () => {
    const { undo, redo } = useStore();
  return (
    <div className="p-4 border-t border-b bg-gray-100 justify-between items-center">
      <div className="p-4 border-t border-b bg-gray-100 flex justify-between items-center">
      <button className="btn font-bold">File</button> 
      <button className="btn font-bold">Home</button> 
      <button className="btn font-bold">Insert</button> 
      <button className="btn font-bold">Page Layout</button> 
      <button className="btn font-bold">Formulas</button> 
      <button className="btn font-bold">Data</button> 
      <button className="btn font-bold">Review</button> 
      <button className="btn font-bold">View</button> 
      <button className="btn font-bold">Help</button>
      </div> 
      <div className="p-4 border-t border-b bg-gray-100 justify-between items-center">
      <button onClick={undo} className="btn font-bold">Undo</button> &nbsp;&nbsp;
      <button onClick={redo} className="btn font-bold">Redo</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn font-bold">Copy</button> &nbsp;&nbsp;
      <button className="btn font-bold">Paste</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn font-bold">Font Size</button> &nbsp;&nbsp;
      <button className="btn font-bold">Font Style</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Toolbar;
