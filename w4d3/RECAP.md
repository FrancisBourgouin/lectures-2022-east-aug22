# Wrapping code inside document ready

```js
$(document).ready(() => {
  // ...
});
```

# Function + Event Listener to change the color of an article (JS can modify)

```js
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

$("article").on("click", (event) => {
  $(event.target).css("background-color", randomColor());
});
```

# Function + Event Listener to add a new element to the DOM (JS can add content to DOM)

## "Bad-ish" way of doing it : Text

```js
$("section").append(`
  <article>
    <h1>Blog title</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veniam
      est nesciunt, obcaecati maiores sint eveniet harum dicta numquam. Corrupti ad
      amet expedita, nemo pariatur aliquid culpa obcaecati ipsam eum.
    </p>
    ${summary ? "<p>" : ""}
    ${summary}
    ${summary ? "</p>" : ""}

  </article>`);
```

## "Good" way of doing it : By creating an element and appending content to it

```js
// const newArticle = document.createElement("article")

const newArticle = $("<article>");
const articleTitle = $("<h1>");
const articleContent = $("<p>");

articleContent.text("Some content");
articleTitle.text("Some Title");

newArticle.append(articleTitle);
newArticle.append(articleContent);

newArticle.on("click", (event) => {
  $(event.target).css("background-color", randomColor());
});
```

## Why it's better

```js
const someArticle = {
  title: "Hello",
  content: "I AM CONTENT",
  summary: "I AM...",
};
// const newArticle = document.createElement("article")

const newArticle = $("<article>");
const articleTitle = $("<h1>");
const articleContent = $("<p>");
const articleSummary = $("<p>");

articleTitle.text(someArticle.title);
articleContent.text(someArticle.content);
articleSummary.text(someArticle.summary);

newArticle.append(articleTitle);
newArticle.append(articleContent);
newArticle.append(articleSummary);

newArticle.on("click", (event) => {
  $(event.target).css("background-color", randomColor());
});
```

```js
const someArticle = {
  title: "Hello",
  content: "I AM CONTENT",
  summary: null,
};
// const newArticle = document.createElement("article")

const newArticle = $("<article>");
const articleTitle = $("<h1>");
const articleContent = $("<p>");

articleTitle.text(someArticle.title);
articleContent.text(someArticle.content);

newArticle.append(articleTitle);
newArticle.append(articleContent);

if (someArticle.summary) {
  const articleSummary = $("<p>");
  articleSummary.text(someArticle.summary);
  newArticle.append(articleSummary);
}

if (someArticle.comments) {
  const articleComments = $("<p>");
  articleComments.text(someArticle.comments);
  newArticle.append(articleComments);
}

newArticle.on("click", (event) => {
  $(event.target).css("background-color", randomColor());
});
```
