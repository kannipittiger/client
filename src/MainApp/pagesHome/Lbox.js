import '../Mainstyle/HomeStyle.css'
import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";


const Leftbox = () => {
    return(
        <div className='leftbox'>
            <nav>
            <div className='upbox'>
                
                <Link to='/fakehome'><button className='btn1'><AiFillHome /> home</button></Link>
                <Link to='/search'><button className='btn2'><BsFillSearchHeartFill /> search</button></Link>
                
            </div>
            </nav>
            <div className='downbox'>
                <div className='textys'><BsFillCollectionFill style={{paddingRight:20}}/>Your songs</div>
                <div></div>
            </div>
        </div>
    )
}
export default Leftbox;