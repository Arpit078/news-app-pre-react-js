
//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar/Navbar.js"
const Home = /*html*/ `
<div class="Text">
    <div id="headAndNav">
        <h1 class="title">CNN news 🌐</h1>
        <div class="bg">${Navbar()}</div>
    </div>
    <div id="cnn-news-articles">

    </div>
</div>
`;
export default Home;
