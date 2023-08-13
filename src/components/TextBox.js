import React from "react";

function TextBox() {
  return (
    <div className="flex flex-col w-1/2 border-4 gap-4 border-teal-400 rounded-lg p-3">
      <div className="mb-8">
        <div className="text-2xl font-bold">English Text</div>
        <textarea
          rows="6"
          cols="50"
          className="w-full h-full border-4 rounded-lg"
        ></textarea>
      </div>
      <div>
        <div className="text-2xl font-bold">Nepali Text</div>
        <textarea
          rows="6"
          cols="50"
          className="w-full h-full border-4 rounded-lg"
        ></textarea>
      </div>
    </div>
  );
}

export default TextBox;
