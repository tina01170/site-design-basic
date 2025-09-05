const allPosts = [
  {
    title: "How Search Engine Works?",
    link: "#",
    thumbnail: "images/blog1.jpg  ",
  },

  {
    title: "Get More Traffic With These Tricks",
    link: "#",
    thumbnail: "images/blog2.jpg",
  },

  {
    title: "What Is On My Office Desk?",
    link: "#",
    thumbnail: "images/blog3.jpg",
  },

  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/blog4.jpg",
  },

  {
    title: "Get The Most Out Of ChatGPT",
    link: "#",
    thumbnail: "images/blog5.jpg",
  },
];


let menuPosts = document.querySelector(".related-posts");

// 顯示帖子的數量
var shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, 4);


function display_menudposts () {
  for (var i=0;i<shuffledList.length;i++){
    var postArr;

    postArr = shuffledList[i];
    
    const thumbnailLink = document.createElement("a");
    thumbnailLink.href = postArr.link;

    const thumbnail = document.createElement("img");
    thumbnail.src = postArr.thumbnail;

    thumbnailLink.appendChild(thumbnail);

    const title = document.createElement("a");
    title.classList.add("post-title");
    title.href = postArr.link;
    title.innerHTML = postArr.title;


    const relatedPost = document.createElement("div");
    relatedPost.classList.add("related-post");

    relatedPost.appendChild(thumbnailLink);
    relatedPost.appendChild(title);

    menuPosts.appendChild(relatedPost);

  }
}