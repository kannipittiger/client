import './Mainstyle/HomeStyle.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import Blank from './pagesHome/Blank';
import Leftbox from './pagesHome/Lbox';
import FakeHome from './pagesHome/fakeHome';
import Search from './pagesHome/Search';

export default function Home() {
    return(

            <div className='allbox'>
                <Leftbox/>
                <FakeHome/>
            </div>

    )
}

