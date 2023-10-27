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
        axios.get('http://10.64.58.227:3001/songs').then((response) => {
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
                    <div className='downbox2'>
                        <BsFillCollectionFill style={{paddingRight: 20}} size={70}/> 
                        <div style={{fontSize:30,fontWeight:'bold'}}>Your songs</div>
                    </div>
                    <div className='scrollv'>
                    {song.map((val, key) => {
                        return (
                                <div key={key}>
                                    <div className='songbox'>
                                        <img style={{width:'125px',height:'125px  ',alignItems:'center',marginTop:'5vh',borderRadius:'100%'}} src={val.image} />
                                        <div className='artistbox'>
                                            <label className='songfont'>{val.title}</label>
                                            <label className='artistfont'>{val.artist}</label>
                                        </div>
                                    </div>
                                </div>
                           
                        );
                    })}
                    </div>
                </div>  
            </div>
        </div>
    );
}
export default Leftbox;