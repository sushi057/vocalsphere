import React from "react";
import mic from "../assets/images/microphone.png";
import folder from "../assets/images/folder.png";

function VoiceBox() {
  return (
    <div className="flex-col">
      <div className="border-4 border-teal-400 rounded-lg p-2">
        <div>
          <h2 className="text-xl font-bold">English</h2>
          <div className="flex flex-row">
            <img
              src={mic}
              alt="microphone"
              className="object-cover h-12 w-12"
            />
            <img
              src={folder}
              alt="folder icon"
              className="object-cover h-12 w-12"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Nepali</h2>
          <div>{/* An audio output file ready to be played */}</div>
        </div>
      </div>
    </div>
  );
}

export default VoiceBox;
