
import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControl";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./assets/styles.css";

import Banner from "../MainApp/Banner";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = ({ }) => {
  // State
  //const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong,setCurrentSong] = useState([]);
  let { id } = useParams();
  const [song,setSong] = useState([]);
  //const selectedSong = allSong[id];

  
  const getSong = () => {
    axios.get(`http://localhost:3001/songs`).then((response) => {
        setSong([...song, response.data]);
        console.log("Songs:", response.data);                
  
    }).catch((error) => {
        console.error('Error fetching songs',error);
    })
  }
  const getCurrentSong = (ID) => {
    axios.get(`http://localhost:3001/songs/${ID}`).then((response) => {
        setCurrentSong(response.data);
        console.log("Songs:", response.data);                
  
    }).catch((error) => {
        console.error('Error fetching songs',error);
    })
  }
  // Destructure for conciseness
  useEffect(() => {
    getSong(); 
    getCurrentSong(id);
  }, [id]);
  
  // const { songID, title, artist, song, image, background } = allSong[trackIndex];
  // Refs
  const audioRef = useRef(new Audio(currentSong.song));
  const intervalRef = useRef();
  const isReady = useRef(false);


  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (song - 1 < 0) {
      setSong(currentSong.length - 1);
    } else {
      setSong(song - 1);
    }
  };

  const toNextTrack = () => {
    if (song < currentSong.length - 1) {
      setSong(song + 1);
    } else {
      setSong(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(currentSong.song);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [song]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        
        <img
          className="artwork"
          src={currentSong.image}
        />
        <h2 className="title">{currentSong.title}</h2>
        <h3 className="artist">{currentSong.artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
      
    </div>
  );
};
export default AudioPlayer;
