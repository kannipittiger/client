import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsMusicNoteList, BsFillHeartFill, BsHeart} from 'react-icons/bs';

const FakeHome = () => {
    const [song, setSong] = useState([]);
    const [isHeartFilled, setIsHeartFilled] = useState(Array(song.length).fill(false));

    const getSong = () => {
        axios
            .get(`http://localhost:3001/songs/`)
            .then((response) => {
                setSong(response.data);
                setIsHeartFilled(Array(response.data.length).fill(false));
            })
            .catch((error) => {
                console.error('Error fetching songs', error);
            });
    };

    useEffect(() => {
        getSong();
    }, []);

    // Function to toggle the heart icon
    /*const toggleHeartIcon = (index) => {
        const newHeartFilled = [...isHeartFilled];
        newHeartFilled[index] = !newHeartFilled[index];
        setIsHeartFilled(newHeartFilled);
    };*/

    return (
        <div className="rightbox scrollvr">
            <div className="textrp">
                <div style={{ paddingTop: 0 }}>
                    <BsMusicNoteList size={60} style={{ paddingRight: 20 }} />
                </div>
                <div>
                    <span>Home</span>
                </div>
                <button className="logoutbtn">Logout</button>
            </div>

            <div className="grid-container">
                
                {song.map((songData, index) => (
                    <Link to={`/lbox/${songData.songID}`}><div className="grid-item" key={songData.songID}>
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
                        
                        {/* <button onClick={() => toggleHeartIcon(index)}>
                            {isHeartFilled[index] ? (
                                <BsFillHeartFill
                                    color="red" // You can change the color for filled heart
                                    size={50}
                                    style={{ marginLeft: '190px', paddingBottom: 10 }}
                                />
                            ) : (
                                <BsHeart
                                    color="white" // You can change the color for empty heart
                                    size={50}
                                    style={{ marginLeft: '190px', paddingBottom: 10 }}
                                />
                            )}
                        </button> */}
                    </div></Link>
                ))}
            </div>
        </div>
    );
};

export default FakeHome;
