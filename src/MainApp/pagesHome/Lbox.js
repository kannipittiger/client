import '../Mainstyle/HomeStyle.css'
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { BsFillSearchHeartFill, BsFillCollectionFill } from "react-icons/bs";
import axios from 'axios';
import FakeHome from './fakeHome';
import { url_api } from '../../config';
import AudioPlayer from '../../Audio/AudioPlay';

const Leftbox = (props) => {
    const [song, setSong] = useState([]);
    const [trackIndex,setTrackIndex] = useState(0);
    const [selectedSongId, setSelectedSongId] = useState(0);
    let index = parseInt(trackIndex);
 

    const getSongs = () => {
        axios.get(`${url_api}/songs`).then((response) => {
            setSong(response.data);
            console.log("Songs:", response.data);
        }).catch((error) => {
            console.error('Error fetching songs', error);
        });
    }



    useEffect(() => {
        getSongs();
    }, [props.id,selectedSongId]);


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
                                <Link to={`/audioplayer/${val.songID}`}><div onClick={() => setSelectedSongId(val.songID)}>
                                    <div className='songbox'>
                                        <img className='song-img' src={val.image} alt={val.title} />
                                        <div className='artistbox'>
                                            <label className='songfont'>{val.title}</label>
                                            <label className='artistfont'>{val.artist}</label>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        ))}
                    </div>
                    
                    {/* <div>
                        <div  style={{ display:'flex',flexDirection:'row' }}>
                            <img src={currentSong.image} className='song-imgplayer'
                            alt={currentSong.title} />
                            <div className='song-label'>
                                <label className='songfontdown'>{currentSong.title}  -  {currentSong.artist}</label>
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
                            </div>
                            
                        </div>
                        <input
                            type="range"
                            value={trackProgress}
                            step="1"
                            min="0"
                            max={duration ? duration : `${duration}`}
                            id="progress"
                            onChange={(e) => onScrub(e.target.value)}
                            onMouseUp={onScrubEnd}
                            onKeyUp={onScrubEnd}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}   

export default Leftbox;
