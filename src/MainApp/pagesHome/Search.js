import '../Mainstyle/HomeStyle.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList,BsSearchHeart} from "react-icons/bs";
import Leftbox from './Lbox';

const Search = () => {
    const [song, setSong] = useState([]);
    const [search,setSearch] = useState("");

    const getSong = () => {
        axios
            .get(`http://10.64.58.227:3001/songs/`)
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
                    <button className='logoutbtn2'>
                        logout
                    </button>
                </div>
                
                <div className="grid-container">
                {song.filter((song) => {
                    if(search === ""){
                        return song;
                    }else if (song.title.toLowerCase().includes(search.toLowerCase())){
                         return song;
                    }
                })
                .map((song) => (
                    <div className="grid-item" key={song.songID}>
                        <Link to={`/audioplayer/${song.songID}`}>
                            <div>
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