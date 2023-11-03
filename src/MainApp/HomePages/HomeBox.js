import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsMusicNoteList} from 'react-icons/bs';
import { url_api } from '../../config';
import Leftbox from './LeftBox';

const FakeHome = () => {
    const [song, setSong] = useState([]);

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
    const shuffleArray = (array)  => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    useEffect(() => {
        getSong();
    }, []);


    return (
        <div className='allbox'>
            <Leftbox/>
            <div className="rightbox scrollvr">
                <div className="textrp">
                    <div style={{ paddingTop: 0 }}>
                        <BsMusicNoteList size={60} style={{ paddingRight: 20 }} />
                    </div>
                    <div>
                        <span>Home</span>
                    </div>
                    <Link to="/" className='link1'><button className="logoutbtn">Logout</button></Link>
                </div>
                <hr color='#150c1e' style={{height:'10px'}}></hr>
                <div className="grid-container">  
                    {shuffleArray(song).map((songData, index) => (
                        <div className="grid-item" key={songData.songID}>
                            <Link to={`/audioplayer/${songData.songID}`}>
                                    <div>
                                        <img
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                alignSelf: 'center',
                                                marginTop: '5vh',
                                                borderRadius: '10%'
                                            }}
                                            src={songData.image}
                                            alt={`Song: ${songData.title}`}
                                        />
                                        <br />
                                        <div className="artistbox">
                                            <label>{songData.title}</label>
                                            
                                            <label style={{fontSize:'15px',color:'rgb(190, 184, 184)'}}>Artist: {songData.artist}</label>
                                            <br />
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FakeHome;
