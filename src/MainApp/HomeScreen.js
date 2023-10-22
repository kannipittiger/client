import './Mainstyle/HomeStyle.css';
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { AiFillHome } from "react-icons/ai";
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";


export const Home = () => {
    return(
        <div className='allbox'>
            <div className='leftbox'>
                <div className='upbox'>
                    <button className='btn1'><AiFillHome /> home</button>
                    <button className='btn2'><BsFillSearchHeartFill /> search</button>
                </div>
                <div className='downbox'>
                    <div className='textys'><BsFillCollectionFill style={{paddingRight:20}}/>Your songs</div>
                    <div></div>
                </div>
            </div>
            <div className='rightbox'>
                <div className='textrp'><BsMusicNoteList size={40}style={{paddingRight:20}}/>Recently played</div>
            </div>
        </div>
    )
}

export default Home;