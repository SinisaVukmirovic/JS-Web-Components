import './news-article.js';
import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
    fetchNews();
});

async function fetchNews() {
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

console.log(json);

    const main = document.querySelector('main');

    json.articles.forEach(article => {
        const elem = document.createElement('news-article');

        elem.article = article;
        main.appendChild(elem);
    });
}