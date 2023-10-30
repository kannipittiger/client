import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsMusicNoteList} from 'react-icons/bs';
import Leftbox from './Lbox';
import { url_api } from '../../config';

const FakeHome = () => {
    const [song, setSong] = useState([]);
    const [selectedSongId, setSelectedSongId] = useState(null);

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
            <Leftbox id={selectedSongId} />
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

                <div className="grid-container">  
                    {shuffleArray(song).map((songData, index) => (
                        <div className="grid-item" key={songData.songID}>
                            <div onClick={() => setSelectedSongId(songData.songID)}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FakeHome;
