import { createContext, useState } from "react";
import data from "../db.json";

const AudioContext = createContext();
function Provider({ children }) {
  const [index, setIndex] = useState(0);
  const [bool, setBool] = useState(false);
  const currentSong = data.data[index];
  const allSongs = data.data;
  // ==========
  // Methods
  // ==========
  const endedSong=()=>{
    setBool(false)
  }
  const setSpecificSong=(n)=>{
    setBool(false);
    setIndex(n)
  }
  const setPlay=()=>{
    setBool(prev => !prev)
  }
  const checkNumber = (n) => {
    const dataLength = data.data.length;
    if (n > dataLength - 1) return 0;
    if (n < 0) return data.data.length - 1;
    return n;
  };
  const next = () => {
    setBool(false);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const previous = () => {
    setBool(false);
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const valueToShare = {
    data: allSongs,
    Song: currentSong,
    Play:setPlay,
    bool:bool,
    nextSong: next,
    previousSong: previous,
    clickSong:setSpecificSong,
    endedSong
  };

  // ==========
  // Methods
  // ==========

  return (
    <AudioContext.Provider value={valueToShare}>
      {children}
    </AudioContext.Provider>
  );
}
export { Provider };
export default AudioContext;
