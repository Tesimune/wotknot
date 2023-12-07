import React, { useState, useEffect } from 'react';
import './UpdateCard.css';
import MoreCard from './MoreCard';

export default function UpdateCard() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiKey = '5923c983e11d4d01a29b697669f485a4';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }, []);

    return (
        <div className="update-container">
            <div className='update'>
                <h1 style={{textAlign:"center",marginLeft:"150px"}}>LATEST</h1>
            </div>

            <div className='update'>
                <a href='/news' style={{textDecoration:'none', color:"black"}}>
                {news.slice(0, 11).map((article, index) => ( // Only show the first four articles
                    <div key={index} className='updates'>
                        <img src={article.urlToImage} className='images' alt={article.title} />
                        <p className='news-titles'>{article.title}</p>
                        {/* You can add more details here like article.description or article.publishedAt */}
                    </div>
                ))}
                </a>
            </div>
            <MoreCard/>
        </div>
    );
}
