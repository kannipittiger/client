import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsMusicNoteList, BsFillHeartFill, BsHeart} from 'react-icons/bs';

const FakeHome = () => {
    const [song, setSong] = useState([]);
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

    return (
        <div className="rightbox scrollvr">
            <div className="textrp">
                <div style={{ paddingTop: 0 }}>
                    <BsMusicNoteList size={60} style={{ paddingRight: 20 }} />
                </div>
                <div>
                    <span>Hot hit</span>
                </div>
                <button className="logoutbtn">Logout</button>
            </div>

            <div className="grid-container">
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
    );
};

export default FakeHome;
