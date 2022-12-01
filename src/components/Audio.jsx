import React, { useContext, useEffect } from "react";
import { createRef } from "react";
import AudioContext from "../context/audios";

const Audio = () => {
  const { nextSong, previousSong, Song, Play, bool, endedSong } = useContext(AudioContext);
  const audioRef = createRef(null);
  

  useEffect(() => {
  
    if (!bool) audioRef.current.pause();
    if (bool) audioRef.current.play();
  }, [bool]);
  const text = React.useMemo(() => {
    return Song.title
      .replace(/ /g, "")
      .slice(0, 22)
      .split("")
      .map((ch, i) => (
        <span key={i} style={{ transform: `rotate(${i * 16}deg)` }}>
          {ch}
        </span>
      ));
  }, [Song.title]);
  return (
    <article className="article">
      <section className="audio-player">
        <p className="title-rounded-song">{text}</p>
        <audio src={Song.audio} ref={audioRef} onEnded={endedSong}></audio>
        <div className="wrapper-image">
          <img src={Song.image} alt={Song.title} width="220px" height="220px" />

          <button onClick={Play}>
            <span className={bool ? "pause" : "play"} title="Play"></span>
          </button>
        </div>
      </section>
      <div className="wrapper-buttons">
        <button
          onClick={previousSong}
          title="Previous Song"
          className="previous-btn"
        >
          <span></span>
          <span></span>
        </button>
        <button onClick={nextSong} title="Next Song" className="next-btn">
          <span></span>
          <span></span>
        </button>
      </div>
     
    </article>
  );
};

export default Audio;
