import '../Mainstyle/HomeStyle.css'
import React, { useState,useEffect } from 'react';
import {Link, Routes,Route} from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";
import Search from './Search'
import axios from 'axios';


const Leftbox = () => {
    const [song,setSong] = useState([]);
    const getSongs = () => {
        axios.get('http://10.64.57.141:3001/users').then((response) => {
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
        <div className='leftbox'>
            <nav>
            <div className='upbox'>
                
                <Link to='/home'><button className='btn1'><AiFillHome /> home</button></Link>
                <Link to='/search'><button className='btn2'><BsFillSearchHeartFill /> search</button></Link>
                
            </div>
            </nav>
            <div className='downbox'>
                <div className='textys'>
                    <BsFillCollectionFill style={{paddingRight: 20}}/> Your songs
                    {song.map((val, key) => {
                        return (
                        <div key={key}>
                            <div>
                                <img style={{width:'150px',height:'150px  ',alignItems:'center',marginTop:'5vh',borderRadius:'100%'}} src={val.image} />
                                <br/>
                                <label>Song: {val.title}</label>
                                <br/>
                                <label>Artist: {val.artist}</label>
                                <br/>
                            </div>
                            
                        </div>
                        );
                    })}
                    </div>  
            </div>
        </div>
    );
}
export default Leftbox;