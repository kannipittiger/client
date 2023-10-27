import '../Mainstyle/HomeStyle.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList,BsSearchHeart} from "react-icons/bs";
import Leftbox from './Lbox';

const Search = () => {
    const [song, setSong] = useState([]);
    const [titles,setTitle] = useState('');
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [hideSuggestions, setHideSuggestions] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await Axios.get(
            `http://10.64.58.227:3001/songs/`);
            console.log('sos');
            setSuggestions(data.products);
        } catch (error) {
            console.log('kkkkkk');
            console.log(error);
        }
        };

        fetchData();
    }, [value]);

    const searchinput = () => {
        Axios.post('http://10.64.58.227:3001/songs', {
          title : titles,
        })
          .then(() => {
            // Handle successful login
            //alert('Login successful! Welcome to Moodify');
            // Redirect to the home page or any other page upon successful login
            //window.location.href = '/home';
            console.log('kuy');
          })
          .catch((error) => {
            // Handle login error
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
          });
      };

    return(
        <div className='allbox'>
            <Leftbox/>
            <div className='rightbox'>
                <div className='textrp'>
                    <div style={{paddingTop:3}}>
                    <BsSearchHeart size={70}style={{paddingRight:20,paddingTop:0}}/>
                    </div>
                    <div>
                    <input className='searchinput'
                            placeholder='search'
                            type="text"
                            name='titles'
                            onChange={(e) => {
                                setValue(e.target.value);
                                searchinput();
                            }}
                    >
                    </input>
                    </div>
                    <button className='logoutbtn2'>
                        logout
                    </button>
                </div>
                
                <div className='grid-container'>
                {song.map((songData, index) => (
                    <div className="grid-item" key={songData.songID}>
                        <Link to={`/audioplayer/${songData.songID}`}>
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
                                        src={songData.image}
                                        alt={`Song: ${songData.title}`}
                                    />
                                    <br />
                                    <div className="artistbox">
                                        <label>Song: {songData.title}</label>
                                        <br />
                                        <label>Artist: {songData.artist}</label>
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