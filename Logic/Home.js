let articlesDiv  = document.getElementById("top-news-articles")
import  NewsArticle from "../components/NewsArticle/NewsArticle.js"

fetchNews("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then(data => {
    let articles = data.articles    
    let newsComponent = ``
    for(const news of articles){
        let newsItem = NewsArticle(news.title,news.description,news.urlToImage,news.url)
        newsComponent = newsComponent + newsItem
    }
    articlesDiv.innerHTML = newsComponent
  });
console.log("in the loic of home")