import React, { useState } from "react";
import Track1 from "../srcTracks/forest-lullaby-110624.mp3";
import Track2 from "../srcTracks/just-relax-11157.mp3";
import Track3 from "../srcTracks/relaxed-vlog-131746.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Cold Gin - Jazz",
        file: Track1,
      },
      {
        name: "heaven's On Fire - Jazz",
        file: Track2,
      },
      {
        name: "Beth - Jazz",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };