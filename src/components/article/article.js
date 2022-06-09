import './article.less'
import data from './data'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

function articleMaker(artObj) {
  const article = document.createElement('div');
  const artTitle = document.createElement('h2');
  const artDate = document.createElement('p');
  const artPara1 = document.createElement('p');
  const artPara2 = document.createElement('p');
  const artPara3 = document.createElement('p');
  const artSpan = document.createElement('span');

  article.appendChild(artTitle);
  article.appendChild(artDate);
  article.appendChild(artPara1);
  article.appendChild(artPara2);
  article.appendChild(artPara3);
  article.appendChild(artSpan);

  article.classList.add('article');
  artDate.classList.add('date');
  artSpan.classList.add('expandButton');

  artTitle.textContent = artObj.title;
  artDate.textContent = artObj.date;
  artPara1.textContent = artObj.firstParagraph;
  artPara2.textContent = artObj.secondParagraph;
  artPara3.textContent = artObj.thirdParagraph;
  artSpan.textContent = '+';


  artSpan.addEventListener('click', () => {
    article.classList.toggle('article-open');
  });

  return article;
}

data.push({
  title: 'This is the Title for my maunaly added object',
  date: 'Jun 8th, 2022',
  firstParagraph: 'Who doesn\'t love those tasty baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas baleadas?',
  secondParagraph: 'This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference. This could say anything, in the end it doesn\'t make much of a difference.',
  thirdParagraph: 'Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? Tell me, old friend, when did Sarumon the Wise abandon reason for maddness? '
})

const articles = document.querySelector('.articles');

data.forEach(obj => {
  return articles.appendChild(articleMaker(obj));
});


// articleElems.forEach(elem => {
//   articles.appendChild(elem);
// })

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
