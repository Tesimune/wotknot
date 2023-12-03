import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicPage from './components/Pages/MusicPage';
import StylePage from './components/Pages/StylePage';
import CulturePage from './components/Pages/CulturePage';
import VideoPage from './components/Pages/VideoPage';
import MagazinePage from './components/Pages/MagazinePage';
import EventsPage from './components/Pages/EventsPage';
import ShopPage from './components/Pages/ShopPage';
import NewsPage from './components/NewsDisplay/NewsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/music' element={<MusicPage/>}/>
        <Route path='/style' element={<StylePage/>}/>
        <Route path='/culture' element={<CulturePage/>}/>
        <Route path='/video' element={<VideoPage/>}/>
        <Route path='/magazine' element={<MagazinePage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
