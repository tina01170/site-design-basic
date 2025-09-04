const allPosts = [
  {
    title: "How Search Engine Works?",
    link: "#",
    thumbnail: "images/blog1.jpg",
    label:"work",
  },

  {
    title: "Get More Traffic With These Tricks",
    link: "#",
    thumbnail: "images/blog2.jpg",
    label:"travel",
  },

  {
    title: "What Is On My Office Desk?",
    link: "#",
    thumbnail: "images/blog3.jpg",
    label:"work",
  },

  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/blog4.jpg",
    label:"AI",
  },

  {
    title: "ChatGPT Of currnet",
    link: "#",
    thumbnail: "images/01.jpg",
    label:"AI",
  },

  {
    title: "Works of means?",
    link: "#",
    thumbnail: "images/01.jpg",
    label:"travel",
  },

  {
    title: "Train travel Europe",
    link: "#",
    thumbnail: "images/02.jpg",
    label:"travel",
  },

  {
    title: "What kind of pet is good to keep at home?",
    link: "#",
    thumbnail: "images/03.jpg",
    label:"travel",
  },

  {
    title: "text-to-speech software",
    link: "#",
    thumbnail: "images/02.jpg",
    label:"AI",
  },

 
];

const Posts = document.querySelector(".rightlist");

const generateReleatedPosts = () => {
  
  const shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, 3);
  
  shuffledList.forEach((post) => {
    const thumbnailLink = document.createElement("a");
    thumbnailLink.href = post.link;

    const thumbnail = document.createElement("img");
    thumbnail.src = post.thumbnail;

    thumbnailLink.appendChild(thumbnail);

    const title = document.createElement("a");
    title.classList.add("post-title");
    title.href = post.link;
    title.innerHTML = post.title;

    const Post = document.createElement("div");
    relatedPost.classList.add("related-post");

    Post.appendChild(thumbnailLink);
    relatedPost.appendChild(title);

    Posts.appendChild(Post);
  });
};

generateReleatedPosts();
