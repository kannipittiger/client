import '../Mainstyle/HomeStyle.css'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";

const FakeHome = () => {
    const [song1,setSong1] = useState([]);
    const [song2,setSong2] = useState([]);
    const [song3,setSong3] = useState([]);
    const getSong = (songID) => {
        axios.get(`http://10.64.59.189:3001/songs/${songID}`).then((response) => {
            if(songID === 1){
                setSong1(response.data);
                console.log("Songs:", response.data);                
            }
            else if(songID === 2){
                setSong2(response.data);
                console.log("Songs:", response.data);               
            }
            else if(songID === 3){
                setSong3(response.data);
                console.log("Songs:", response.data);      
            }
        }).catch((error) => {
            console.error('Error fetching songs',error);
        })
    }
    useEffect(() => {
        getSong(1);
        getSong(2);
        getSong(3);
    }, []);
    return(
        <div className='rightbox scrollvr'>
                <div className='textrp'>
                    <div style={{paddingTop:0}}>
                    <BsMusicNoteList size={60}style={{paddingRight:20}}/>
                    </div>
                    <div >
                        <text>Hot hit</text>
                    </div>
                    <button className='logoutbtn'>
                        logout
                    </button>
                </div>
                    
            <div className='grid-container '>
                <Link to='/audioplayer/1'><div className='grid-item'>
                    {song1 && (
                        <div>
                            <img
                                style={{ width: '150px', height: '150px', alignItems: 'center', marginTop: '5vh', borderRadius: '100%' }}
                                src={song1.image}
                                alt={`Song: ${song1.title}`}
                            />
                            <br />
                            <div className='artistbox'> 
                                <label>Song: {song1.title}</label>
                                <br />
                                <label>Artist: {song1.artist}</label>
                                <br />
                            </div>
                        </div>
                    )}
                </div></Link>
                <Link to='/audioplayer/2'><div className='grid-item'>
                    {song2 && (
                        <div>
                            <img
                                style={{ width: '150px', height: '150px', alignItems: 'center', marginTop: '5vh', borderRadius: '100%' }}
                                src={song2.image}
                                alt={`Song: ${song2.title}`}
                            />
                            <br />
                            <div className='artistbox'> 
                                <label>Song: {song2.title}</label>
                                <br />
                                <label>Artist: {song2.artist}</label>
                                <br />
                            </div>
                        </div>
                    )}
                </div></Link>
                <Link to='/audioplayer/3'><div className='grid-item'>
                    {song3 && (
                        <div>
                            <img
                                style={{ width: '150px', height: '150px', alignItems: 'center', marginTop: '5vh', borderRadius: '100%' }}
                                src={song3.image}
                                alt={`Song: ${song3.title}`}
                            />
                            <br />
                            <div className='artistbox'> 
                                <label>Song: {song3.title}</label>
                                <br />
                                <label>Artist: {song3.artist}</label>
                                <br />
                            </div>
                        </div>
                    )}
                </div></Link>
            </div>
            
            
        </div>
            
    )
}

export default FakeHome;