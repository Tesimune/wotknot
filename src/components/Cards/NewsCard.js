import React,{ useState, useEffect} from 'react';
import './NewsCards.css';
import AdCard from './AdCard';

export default function NewsCard() {
    const [news,setNews] = useState([]);

    useEffect(()=> {
        const apiKey = '5923c983e11d4d01a29b697669f485a4';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setNews(data.articles.slice(0, 4)) // Only take the first three articles
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
    }, [])

  return (
    <div className='news-container'>
        {news.map((article, index) => (
            <div key={index} className='news'>
                <a href='/news'>
                    <img src={article.urlToImage} className='img' alt={article.title}/>        
                </a>
                <div className='news text'>
                    <a href='/news' className='news'>
                        <div className='text'>
                            <h1>{article.source.name}</h1>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        ))}

        <AdCard/>
    </div>
  )
}
