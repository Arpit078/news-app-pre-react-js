const NewsArticle = (title,description,urlToImage,url) =>{
    return(
        /*html*/`
    <link rel="stylesheet" href="./components/NewsArticle/NewsArticle.css">
    <div class="news-articles">
        <p class="subHead">${title}</p>
        <p class="paragraph">${description}</p>
        <img class="image" src=${urlToImage} alt="article url" srcset=""> 
        <a href=${url}>Link</a> 
    </div>
  `
    )
  }
  export default NewsArticle