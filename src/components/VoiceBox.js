import React from "react";
import mic from "../assets/images/microphone.png";
import folder from "../assets/images/folder.png";
import audiofile from "../assets/audio/harvard.wav";
import AudioPlayer from "react-audio-player";

function VoiceBox() {
  return (
    <div className="w-1/2 h-max border-4 border-teal-400 rounded-lg px-6 py-4">
      <div>
        <h2 className="text-2xl font-bold">English</h2>
        <p>Input your audio file.</p>
        <div className="flex flex-auto flex-row justify-center items-center gap-40 h-40">
          <div className="flex flex-col items-center">
            <img
              src={mic}
              alt="microphone icon"
              className="object-cover h-16 w-16"
            />
            <button type="button" className="border-2 rounded-lg px-3 mt-2">
              Record
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={folder}
              alt="folder icon"
              className="object-cover h-16 w-16"
            />
            <button type="button" className="border-2 rounded-lg px-3 mt-2">
              Upload{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <AudioPlayer src={audiofile} controls />
        </div>
      </div>

      <div className="mt-12 h-48">
        <h2 className="text-2xl font-bold">Nepali</h2>
        <div className="flex justify-center">
          <AudioPlayer src={audiofile} controls />
        </div>
      </div>
    </div>
  );
}

export default VoiceBox;
