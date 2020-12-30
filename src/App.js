import React from "react";
import WorkIt from "./assets/01WorkIt.wav";
import MakeIt from "./assets/02MakeIt.wav";
import DoIt from "./assets/03DoIt.wav";
import MakesUs from "./assets/04MakesUs.wav";
import Harder from "./assets/05Harder.wav";
import Better from "./assets/06Better.wav";
import Faster from "./assets/07Faster.wav";
import Stronger from "./assets/08Stronger.wav";
import MoreThan from "./assets/09MoreThan.wav";
import Ever from "./assets/10Ever.wav";
import Hour from "./assets/11Hour.wav";
import After from "./assets/12After.wav";
import Our from "./assets/13Our.wav";
import WorkIs from "./assets/14WorkIs.wav";
import Never from "./assets/15Never.wav";
import Over from "./assets/16Over.wav";
import { Howl } from "howler";
import "./App.css";
const soundList = [
  { sound: WorkIt, label: "Work It" },
  { sound: MakeIt, label: "Make It" },
  { sound: DoIt, label: "Do It" },
  { sound: MakesUs, label: "Makes Us" },
  { sound: Harder, label: "Harder" },
  { sound: Better, label: "Better" },
  { sound: Faster, label: "Faster" },
  { sound: Stronger, label: "Stronger" },
  { sound: MoreThan, label: "More Than" },
  { sound: Ever, label: "Ever" },
  { sound: Hour, label: "Hour" },
  { sound: After, label: "After" },
  { sound: Our, label: "Our" },
  { sound: WorkIs, label: "Work Is" },
  { sound: Never, label: "Never" },
  { sound: Over, label: "Over" },
];
const App = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      volume: 0.5,
      onend: function () {
        console.log("Finished!");
      },
    });
    sound.play();
    sound.fade(1, 0.5, 800);
  };

  return (
    <div className="container">
      {soundList.map((sound, index) => {
        return (
          <div className="button-wrap" key={index}>
            <button className="button" onClick={() => playSound(sound.sound)}>
              {sound.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
