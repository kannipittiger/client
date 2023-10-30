import '../Mainstyle/HomeStyle.css'
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { BsFillSearchHeartFill, BsFillCollectionFill } from "react-icons/bs";
import axios from 'axios';
import FakeHome from './fakeHome';

const Leftbox = () => {
    const [song, setSong] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState({});
    const [trackIndex,setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    let { id } = useParams();
    let index = parseInt(trackIndex);

    const getSongs = () => {
        axios.get(`http://localhost:3001/songs`).then((response) => {
            setSong(response.data);
            console.log("Songs:", response.data);
        }).catch((error) => {
            console.error('Error fetching songs', error);
        });
    }

    const getCurrentSong = (ID) => {
        axios.get(`http://localhost:3001/songs/${ID}`).then((response) => {
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
            console.log("Go",index+1);
        }else{
            getCurrentSong(1);
            onScrubEnd();
            console.log("no",song.length)
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        //audioRef.current.pause();
    
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
      }, [currentSong]);
    
      useEffect(() => {
        // Pause and clean up on unmount
        return () => {
          audioRef.current.pause();
          clearInterval(intervalRef.current);
        };
      }, []);
    

    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='leftbox'>
            <nav>
                <div className='upbox'>
                    <Link to='/home'><button className='btn1'><AiFillHome /> home</button></Link>
                    <Link to='/search'><button className='btn2'><BsFillSearchHeartFill /> search</button></Link>
                </div>
            </nav>
            <div className='downbox'>
                <div className='textys'>
                    <div className='downbox2'>
                        <BsFillCollectionFill style={{ paddingRight: 20 }} size={70} />
                        <div style={{ fontSize: 30, fontWeight: 'bold' }}>Recommend for you</div>
                    </div>
                    <div className='scrollv'>
                        {song.map((val, key) => (
                            <div key={key}>
                                <Link to={`/lbox/${val.songID}`}>
                                    <div className='songbox'>
                                        <img className='song-img' src={val.image} alt={val.title} />
                                        <div className='artistbox'>
                                            <label className='songfont'>{val.title}</label>
                                            <label className='artistfont'>{val.artist}</label>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                        <div  style={{ marginRight: '80%',flexDirection:'row' }}>
                            <img src={currentSong.image} className='song-img'
                            alt={currentSong.title} />
                            <label className='songfont'>{currentSong.title}</label>
                            <br/>
                            <label className='artistfont'>{currentSong.artist}</label>
                        </div>

                        <div className='control'>
                            <div><FaBackward size={30} style={{ marginRight: 3 }} onClick={toPrevTrack} /></div>
                            <div onClick={PlayPause}>
                                {isPlaying ? 
                                    <FaPause style={{ marginLeft: 3, marginTop: 2 }} />
                                    : <FaPlay style={{ marginLeft: 3, marginTop: 2 }} />
                                }
                            </div>
                            <div><FaForward size={30} style={{ marginLeft: 3 }} onClick={toNextTrack} /></div>
                        </div>
                        
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftbox;
