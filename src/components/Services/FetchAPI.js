import React, { useEffect, useState } from "react";
import "./FetchAPI.css";

export default function FetchAPI() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "5923c983e11d4d01a29b697669f485a4";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="fetch-container">
      <div className="fetch">
        <a href="/news">
          {news && (
            <img src={news[0]?.urlToImage} className="img" alt={news[0].title} />
          )}
        </a>
      </div>
      <div className="fetch text">
        <a href="/news" className="news">
          {news && (
            <div className="text name" style={{ marginTop: "130px" }}>
              <h1>{news[0]?.source.name}</h1>
              <h2>{news[0]?.title}</h2>
              <p>{news[0]?.description}</p>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}
