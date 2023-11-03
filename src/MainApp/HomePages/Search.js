import '../Mainstyle/HomeStyle.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import {BsSearchHeart} from "react-icons/bs";
import Leftbox from './LeftBox';
import { url_api } from '../../config';

const Search = () => {
    const [song, setSong] = useState([]);
    const [search,setSearch] = useState("");

    const shuffleArray = (array)  => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    const getSong = () => {
        axios
            .get(`${url_api}/songs/`)
            .then((response) => {
                setSong(response.data);
            })
            .catch((error) => {
                console.error('Error fetching songs', error);
            });
    };

    useEffect(() => {
        getSong();
    }, []);
    

    return(
        <div className='allbox'>
            <Leftbox/>
            <div className='rightbox'>
                <div className='textsearch' style={{flexDirection:'row'}}>
                    <div style={{paddingTop:7}}>
                    <BsSearchHeart size={60}style={{paddingRight:20,paddingTop:0}}/>
                    </div>
                    <div>
                        <input className='searchinput'
                                    placeholder='search'
                                    type="text"
                                    name='titles'
                                    onChange={(event)=>{
                                        setSearch(event.target.value);
                                    }}
                            >
                    </input>
                    </div>
                    <Link to="/" className='link2'><button className='logoutbtn2'>
                        Logout
                    </button></Link>
                </div>
                <hr color='#150c1e' style={{height:'10px'}}></hr>
                <div className="grid-container scrollvrsearch">
                    {shuffleArray(song).filter((song) => {
                        if (search === "") {
                            return song;
                        } else if (song.title.toLowerCase().includes(search.toLowerCase())) {
                            return song;
                        }
                    })
                        .map((song) => (
                            <div className="grid-item" key={song.songID}>
                                <Link to={`/audioplayer/${song.songID}`}>
                                    <div>
                                        <img
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                alignItems: 'center',
                                                marginTop: '5vh',
                                                borderRadius: ' 10%',
                                            }}
                                            src={song.image}
                                            alt={`Song ${song.title}`}
                                        />
                                        <br />
                                        <div className="artistbox">
                                            <label>{song.title}</label>
                                            <label style={{fontSize:'15px',color:'rgb(190, 184, 184)'}}>Artist: {song.artist}</label>
                                            <br />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Search;