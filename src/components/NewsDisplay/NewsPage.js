import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
      const apiKey = '5923c983e11d4d01a29b697669f485a4';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const article = data.articles.find(article => article.id === id);
          setNews(article);
      })
      .catch(error => {
          console.error('Error fetching news:', error);
      });
  }, [id]);


     return (
       <div>
           {news ? (
               <div>
                   <h1>{news.title}</h1>
                   <img src={news.urlToImage} alt={news.title} />
                   <p>{news.description}</p>
                   <a href={news.url}>Read more</a>
               </div>
           ) : (
               <p>Loading...</p>
           )}
       </div>
   );

}
