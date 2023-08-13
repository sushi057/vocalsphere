import React from "react";
import mic from "../assets/images/microphone.png";
import folder from "../assets/images/folder.png";
import audiofile from "../assets/audio/harvard.wav";
import AudioPlayer from "react-audio-player";
// import { AudioRecorder } from "react-audio-voice-recorder";
// import MicRecorder from "mic-recorder";

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
            <input
              type="file"
              accept="audio/*"
              id="audio-file"
              className="hidden"
            />
            <label
              htmlFor="audio-file"
              className="border-2 rounded-lg px-3 mt-2 cursor-pointer"
            >
              Upload
            </label>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <AudioPlayer src={audiofile} controls />
        </div>
      </div>

      <div className="mt-12 h-48">
        <h2 className="text-2xl font-bold">Nepali</h2>
        <p>Your translated Nepali speech.</p>
        <div className="flex justify-center mt-6">
          <AudioPlayer src={audiofile} controls />
        </div>
      </div>
    </div>
  );
}

export default VoiceBox;
