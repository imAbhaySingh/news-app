import axios from 'axios';
import './articles.css';
import React, {useEffect,useState} from 'react';

const Articles = () => {
const [articles,setArticles]= useState([]);
// const [url,setUrl]= useState([]);


useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=f060bf515e054ba9bd7dc4545c080041")
    .then(response=>setArticles(response.data.articles))
    .catch(error=>console.log(error));
},[]);


 
  return (
    <div className='main'>
      <div className='articles'>
      <h1>Articles</h1>
      <ul>
        {articles.map(article =>(
            <li>
              <a href={article.url } target="blank"> <h2 className='link'>{article.title}</h2></a>
              <img src={article.urlToImage }alt="img"></img>
            <h4>{article.description}</h4>
            </li>
        )
        )}
      </ul>
      </div>
    </div>
  )
}

export default Articles;
 