import React from "react";
import AudioPlayer from "react-audio-player";
import mic from "../assets/images/microphone.png";
import folder from "../assets/images/folder.png";
import audiofile from "../assets/audio/harvard.wav";

function VoiceBox() {
  function play() {
    new Audio(audiofile).play();
  }
  return (
    <div className="w-1/2 h-96 border-4 border-teal-400 rounded-lg p-3">
      <div>
        <h2 className="text-2xl font-bold">English</h2>
        <div className="flex flex-row justify-center items-center gap-24 h-48 ">
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
      </div>

      <div>
        <h2 className="text-2xl font-bold">Nepali</h2>
        <div>
          <AudioPlayer src={audiofile} />
        </div>
      </div>
    </div>
  );
}

export default VoiceBox;
