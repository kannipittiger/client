import '../Mainstyle/HomeStyle.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import {BsSearchHeart} from "react-icons/bs";
import Leftbox from './Lbox';
import { url_api } from '../../config';
import AudioPlayer from '../../Audio/AudioPlay';

const Search = () => {
    const [song, setSong] = useState([]);
    const [search,setSearch] = useState("");
    const [selectedSongId, setSelectedSongId] = useState(null);


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
                <div className='textrp' style={{flexDirection:'row'}}>
                    <div style={{paddingTop:3}}>
                    <BsSearchHeart size={70}style={{paddingRight:20,paddingTop:0}}/>
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
                    {/* <button className='searchbtn' onClick={searchInput}>Search</button> */}
                    <Link to="/" className='link2'><button className='logoutbtn2'>
                        logout
                    </button></Link>
                </div>
                
                <div className="grid-container">
                    {shuffleArray(song).filter((song) => {
                        if (search === "") {
                            return song;
                        } else if (song.title.toLowerCase().includes(search.toLowerCase())) {
                            return song;
                        }
                    })
                        .map((song) => (
                            <div className="grid-item" key={song.songID}>
                                <Link to={`/audioplayer/${song.songID}`}><div onClick={() => setSelectedSongId(song.songID)}>
                                    <div>
                                        <img
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                alignItems: 'center',
                                                marginTop: '5vh',
                                                borderRadius: '100%',
                                            }}
                                            src={song.image}
                                            alt={`Song: ${song.title}`}
                                        />
                                        <br />
                                        <div className="artistbox">
                                            <label>Song: {song.title}</label>
                                            <br />
                                            <label>Artist: {song.artist}</label>
                                            <br />
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Search;