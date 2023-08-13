import React from "react";
import AudioPlayer from "react-audio-player";
import mic from "../assets/images/microphone.png";
import folder from "../assets/images/folder.png";
import audiofile from "../assets/audio/harvard.wav";

function VoiceBox() {
  return (
    <div className="w-1/2 h-max border-4 border-teal-400 rounded-lg p-3">
      <div>
        <h2 className="text-2xl font-bold">English</h2>
        <div className="flex flex-auto flex-row justify-center items-center gap-40 h-48">
          <img
            src={mic}
            alt="microphone icon"
            className="object-cover h-16 w-16"
          />
          <img
            src={folder}
            alt="folder icon"
            className="object-cover h-16 w-16"
          />
        </div>
        <div className="border-2 border-cyan-500 text-center rounded-lg">
          This section will have the input audio file.
        </div>
      </div>

      <div className="mt-12 h-48">
        <h2 className="text-2xl font-bold">Nepali</h2>
        <div className="flex flex-row justify-center mt-4 border-2 border-cyan-500 rounded-lg">
          <p>
            This section will have the
            <span className="text-bold"> Output </span>
            audio file.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VoiceBox;
