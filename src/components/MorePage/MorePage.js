import React, { useState } from 'react';
import './MorePage.css';
import StoryButton from '../StoryButton/StoryButton';

export default function MorePage() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = '5923c983e11d4d01a29b697669f485a4'; // Replace with your actual API key

    const fetchLatestNews = () => {
        setIsLoading(true);
        // Add sorting parameter to fetch the latest news
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.articles)) {
                    setNews(data.articles); // Replace the existing news with the latest news
                } else {
                    throw new Error('Data is not iterable');
                }
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                // Handle error for the user
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // ...

    const handleLatestStories = () => {
        fetchLatestNews(); // Call fetchLatestNews to load the latest stories
    };


    return (
        <div className="more-contain">
            <div className='mores'>
                <h1 className="news-header">MORE</h1>
            </div>

            <div className='mores news-grid'>
                {news.map((article, index) => (
                    <a href={article.url} key={article.url} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='news-items'>
                            <img src={article.urlToImage} className='more-images' alt={article.title} />
                            <p className='news-head'>{article.title}</p>
                            {/* Additional article details can be added here */}
                        </div>
                    </a>
                ))}
            </div>
            <div className='more-contain'>
                <StoryButton onClick={handleLatestStories} />
                {isLoading && <p>Loading more stories...</p>}
            </div>
        </div>
    );
}
