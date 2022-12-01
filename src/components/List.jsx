import React, { useContext } from "react";
import AudioContext from "../context/audios";

const List = () => {
  const { data, Song, clickSong } = useContext(AudioContext);

  const showList = (
    <ul>
      {data.map((l, index) => (
        <li
          onClick={() => clickSong(index)}
          className={l.title === Song.title ? "currentSong" : ""}
          key={l.title}
        >
          {l.title}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h2>Current Song is: <em style={{color:"#ffe156"}}> {Song.title}</em></h2>
      {showList}
    </>
  );
};

export default List;
