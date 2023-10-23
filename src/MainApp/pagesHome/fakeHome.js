import '../Mainstyle/HomeStyle.css'
import React from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList} from "react-icons/bs";

const FakeHome = () => {
    return(
        <div className='rightbox'>
                <div className='textrp'>
                    <div style={{paddingTop:0}}>
                    <BsMusicNoteList size={60}style={{paddingRight:20}}/>
                    </div>
                    <div >
                        <text>Recently played</text>
                    </div>
                    <button className='logoutbtn'>
                        logout
                    </button>
                </div>
                    
            <div className='grid-container'>
                <div className='grid-item'>1</div>
                <div className='grid-item'>2</div>
                <div className='grid-item'>3</div>
                <div className='grid-item'>4</div>
                <div className='grid-item'>5</div>
                <div className='grid-item'>6</div>
            </div>
        </div>
            
    )
}

export default FakeHome;