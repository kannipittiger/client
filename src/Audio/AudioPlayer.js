import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import "./style/styles.css";
import { url_api } from "../config";

const AudioPlayer = () => {
  const [song, setSong] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState({});
  const [trackIndex,setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  let index = parseInt(trackIndex);
  let {id} = useParams();

  const getSongs = () => {
      axios.get(`${url_api}/songs`).then((response) => {
          setSong(response.data);
          console.log("Songs:", response.data);
      }).catch((error) => {
          console.error('Error fetching songs', error);
      });
  }

  const getCurrentSong = (ID) => {
      axios.get(`${url_api}/songs/${ID}`).then((response) => {
          setCurrentSong(response.data);
          setTrackIndex(ID);
          console.log("Songs :", response.data);
      }).catch((error) => {
          console.error('Error fetching songs', error);
      });
  }


  useEffect(() => {
      getSongs();
      getCurrentSong(id);
  }, [id]);

  const audioRef = useRef(new Audio(currentSong.song));
  const intervalRef = useRef();


 
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

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
      if(index > 1){
          getCurrentSong(index-1);
      }else{
          getCurrentSong(song.length);
      }
  };

  const toNextTrack = () => {
      if(index < song.length){
          getCurrentSong(index+1);
          onScrubEnd();
      }else{
          getCurrentSong(1);
          onScrubEnd();
      }
  };
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSong.song);
    if (isPlaying) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => {
          startTimer();
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        // Handle the case where audio is already playing (resume or re-play)
        audioRef.current.currentTime = 0; // Reset the playback to the beginning
        audioRef.current.play().then(() => {
          startTimer();
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying,currentSong]);
  

    useEffect(() => {
      // Pause and clean up on unmount
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    },[]);

    const PlayPause = () => {
      if (isPlaying) {
        if (!audioRef.current.paused) {
          audioRef.current.pause();
        }
      } else {
        // ทำตามที่คุณต้องการเมื่อต้องการเล่นเพลง
        audioRef.current.play()
          startTimer();
      }
    
      setIsPlaying(!isPlaying);
    };

  return (
    <div className="full" style={{ backgroundImage: `url(${currentSong.background})`}}>
      <Link to="/home" onClick={() => {setIsPlaying(false)}} className="back"><div ></div></Link>
    <div className="audio-player">
      
      <div className="track-info">
        <img
          className="artwork"
          src={currentSong.image}
        />
        <div className="tagg">
        <h2 className="title">{currentSong.title}</h2>
        <h3 className="artist">{currentSong.artist}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='song-label'>
            <div className='control'>
              <div><FaBackward size={30} style={{ marginRight: 3 }} onClick={toPrevTrack} /></div>
              <div onClick={PlayPause}>
                {isPlaying ?
                  <FaPause style={{ marginLeft: 3, marginTop: 2 }} size={30}/>
                  : <FaPlay style={{ marginLeft: 3, marginTop: 2 }} size={30}/>
                }
              </div>
              <div><FaForward size={30} style={{ marginLeft: 3 }} onClick={toNextTrack} /></div>
            </div>
          </div>

        </div>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${currentPercentage}`}
          id="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>

    </div>
    <Link to="/home" onClick={() => {setIsPlaying(false)}} className="back"><div ></div></Link>
    </div>
  );
};
export default AudioPlayer;
