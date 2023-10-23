import '../Mainstyle/HomeStyle.css'
import React from 'react';
import {BsFillSearchHeartFill,BsFillCollectionFill,BsMusicNoteList,BsSearchHeart} from "react-icons/bs";
import Leftbox from './Lbox';

const Search = () => {
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
                            
                    >
                    </input>
                    </div>
                    <button className='logoutbtn2'>
                        log out
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
        </div>
    )
}

export default Search;