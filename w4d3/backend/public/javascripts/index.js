// RECAP !

// Wrapping code inside document ready
// Function + Event Listener to change the color of an article (JS can modify)
// Function + Event Listener to add a new element to the DOM (JS can add content to DOM)
// "Bad-ish" way of doing it : Text
// "Good" way of doing it : By creating an element and appending content to it

const listOfTitles = [
  "Title 1",
  "Super Title 2",
  "Return of the  Super Title 3",
  "Potato Title 4",
];
let counter = 0;

$(document).ready(() => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };

  $("article").on("click", (event) => {
    // ...
    console.log("YO YO YO");
    $(event.target).css("background-color", randomColor());
  });
  // $("section").append(`
  //   <article>
  //     <h1>Blog title</h1>
  //     <p>
  //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veniam
  //       est nesciunt, obcaecati maiores sint eveniet harum dicta numquam. Corrupti ad
  //       amet expedita, nemo pariatur aliquid culpa obcaecati ipsam eum.
  //     </p>

  //   </article>`);

  const createAnArticle = (content) => {
    const newArticle = $("<article>");
    const articleTitle = $("<h1>");
    const articleContent = $("<p>");

    articleContent.text(content.body);
    articleTitle.text(content.title);

    newArticle.append(articleTitle);
    newArticle.append(articleContent);

    newArticle.on("click", (event) => {
      console.log(event.target);
      $(event.target).css("background-color", randomColor());
    });

    return newArticle;
  };

  const createMultipleArticles = (articles) => {
    for (const article of articles) {
      const newArticle = createAnArticle(article);
      $("section").append(newArticle);
    }
  };

  const someArticleContents = [
    {
      title: "Yeah",
      body: "YEAH YEAH",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ];

  // $("button").on("click", () => {
  $("button").click(() => {
    const random = Math.floor(Math.random() * 100);

    // const newArticle = createAnArticle(someArticleContents[1]);
    // $("section").append(newArticle);

    // $.ajax({
    //   url: `https://jsonplaceholder.typicode.com/posts`,
    //   method: "GET",
    // })
    $.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      createMultipleArticles(response);
      // console.log(response);
      // const newArticle = createAnArticle(response[0])

      // $("section").append(newArticle)
    });

    // counter++;

    // newArticle.click(() => )
  });
}); // END OF DOCUMENT READY DONT GO FURTHER.
