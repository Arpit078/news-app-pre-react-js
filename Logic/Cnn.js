let articlesDiv  = document.getElementById("cnn-news-articles")
import  NewsArticle from "../components/NewsArticle/NewsArticle.js"

fetchNews("https://saurav.tech/NewsAPI/everything/cnn.json").then(data => {
    let articles = data.articles    
    let newsComponent = ``
    for(const news of articles){
        let newsItem = NewsArticle(news.title,news.description,news.urlToImage,news.url)
        newsComponent = newsComponent + newsItem
    }
    articlesDiv.innerHTML = newsComponent
  });