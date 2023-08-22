
import axios from 'axios';
import './App.css';
import Nav from './componets/Nav/nav'
import React, { useEffect, useState } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=f060bf515e054ba9bd7dc4545c080041`)
        .then(response => setArticles(response.data.articles))
        .catch(error => console.log(error));
    } else {
      axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f060bf515e054ba9bd7dc4545c080041')
        .then(response => setArticles(response.data.articles))
        .catch(error => console.log(error));
    }
  }, [query]);

  const MAX_DESCRIPTION_LENGTH = 200; // Maximum length of the article description

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.query.value);
  }

  return (
    <div>
      <Nav/>
      <h1>News App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <div>
      <ul className='container'>
        {articles.map(article => (
          <li key={article.title}>
            <div>
              <img src={article.urlToImage} alt={article.title} style={{maxWidth: '100%'}} />
              <h2>{article.title}</h2>
              <p>{article.description && article.description.slice(0, MAX_DESCRIPTION_LENGTH)}...</p>
              <p><a href={article.url} target="_blank" rel="noreferrer">{article.url}</a></p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Articles;


