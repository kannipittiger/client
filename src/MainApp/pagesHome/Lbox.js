import '../Mainstyle/HomeStyle.css'
import React, { useState,useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import {FaBackward,FaForward,FaPlay,FaPause} from "react-icons/fa";
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";
import Search from './Search'
import axios from 'axios';
import AudioPlayer from '../../Audio/AudioPlay';
import AudioControls from '../../Audio/AudioControl';
import FakeHome from './fakeHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Leftbox = () => {
    const [song,setSong] = useState([]);
    const [currentSong,setCurrentSong] = useState({});
    let { id } = useParams();
    
    const getSongs = () => {
        axios.get('http://localhost:3001/songs').then((response) => {
            setSong(response.data);
            console.log("Songs:", response.data);
        }).catch((error) => {
            console.error('Error fetching songs',error);
        })
    }
    const shuffleArray = (array)  => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    const getCurrentSong = (ID) => {
        axios.get(`http://localhost:3001/songs/${ID}`).then((response) => {
            setCurrentSong(response.data);
            //setTrackIndex(ID);
            //console.log(trackIndex,'k');
            console.log("Songs :", response.data);                
       
        }).catch((error) => {
            console.error('Error fetching songs',error);
        })
      }
    useEffect(() => {
        getSongs();
        getCurrentSong(id);
    }, [id]);

    const toPrevTrack = () => {

      };
      
    const toNextTrack = () => {

      };
    return(
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
                        <BsFillCollectionFill style={{paddingRight: 20}} size={70}/> 
                        <div style={{fontSize:30,fontWeight:'bold'}}>Recommend for you</div>
                    </div>
                    <div className='scrollv'>
                    {shuffleArray(song).map((val, key) => {
                        return (
                                <div key={key}>
                                    <div className='songbox'>
                                        <img className='song-img' src={val.image} />
                                        <div className='artistbox'>
                                            <label className='songfont'>{val.title}</label>
                                            <label className='artistfont'>{val.artist}</label>
                                        </div>
                                    </div>
                                </div>
                        );
                    })}
                    </div>
                    <div>
                        <img src={currentSong.image} className='song-img' style={{marginRight:'75%'}}/>
                        <label className='songfont' style={{marginRight:'30%'}}>{currentSong.title}</label>
                        <label className='artistfont'>{currentSong.artist}</label>
                        <audio controls id="songpause">
                            <source src={currentSong.song} type='audio/mpeg'></source>
                        </audio>
                        <input type="range" value="0"></input>
                        <div className='control'>
                            <div><FaBackward size={30} style={{marginRight:3}}/></div>
                            <div><i id="ctrlIcon"><FaPlay style={{marginLeft:3,marginTop:2}}/></i></div>
                            <div><FaForward size={30} style={{marginLeft:3}}/></div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}
export default Leftbox;