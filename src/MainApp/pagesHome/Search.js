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
                    <div style={{paddingTop:10}}>
                        <BsSearchHeart size={40}style={{paddingRight:20,paddingTop:0}}/>
                    </div>
                    <div>
                    <input className='searchinput'
                            placeholder='what do you want to listen to ?'
                            
                    >
                    </input>
                    </div>
                    
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