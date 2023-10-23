import '../Mainstyle/HomeStyle.css'
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";

const FakeHome = () => {
    const [song,setSong] = useState([]);
    const getSongs = () => {
        axios.get('http://10.64.57.141:3001/songs/1').then((response) => {
            setSong(response.data);
            console.log("Songs:", response.data);
        }).catch((error) => {
            console.error('Error fetching songs',error);
        })
    }
    useEffect(() => {
        getSongs();
    }, []);
    return(
        <div className='rightbox'>
                <div className='textrp'>
                    <div style={{paddingTop:0}}>
                    <BsMusicNoteList size={60}style={{paddingRight:20}}/>
                    </div>
                    <div >
                        <text>Recently played</text>
                    </div>
                    <button className='logoutbtn'>
                        logout
                    </button>
                </div>
                    
            <div className='grid-container'>
                <div className='grid-item'>
                    {song && (
                        <div>
                            <img
                                style={{ width: '150px', height: '150px', alignItems: 'center', marginTop: '5vh', borderRadius: '100%' }}
                                src={song.image}
                                alt={`Song: ${song.title}`}
                            />
                            <br />
                            <label>Song: {song.title}</label>
                            <br />
                            <label>Artist: {song.artist}</label>
                            <br />
                        </div>
                    )}
                </div>
                <div className='grid-item'>2</div>
                <div className='grid-item'>3</div>
                <div className='grid-item'>4</div>
                <div className='grid-item'>5</div>
                <div className='grid-item'>6</div>
            </div>
        </div>
            
    )
}

export default FakeHome;