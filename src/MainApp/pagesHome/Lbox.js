import '../Mainstyle/HomeStyle.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BsFillSearchHeartFill, BsFillCollectionFill } from "react-icons/bs";
import axios from 'axios';
import { url_api } from '../../config';

const Leftbox = (props) => {
    const [song, setSong] = useState([]);
    const [selectedSongId, setSelectedSongId] = useState(0);


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
                </div>
            </div>
        </div>
    );
}   

export default Leftbox;
