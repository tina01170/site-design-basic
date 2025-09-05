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

  {
    title: "ChatGPT with AI music",
    link: "#",
    thumbnail: "images/blog1.jpg",
  },

  {
    title: "Get The Most Out Of ChatGPT",
    link: "#",
    thumbnail: "images/blog5.jpg",
  },
 
];

//const relatedPosts= document.querySelectorAll(".related-postwrap");
//const relatedPosts = document.querySelector(".related-posts");

var maxRelatedNumber = 6; //max 6
// 顯示帖子的數量
//var shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, maxRelatedNumber);

function display_posts () {
  
  document.write('<div class="container">');
  document.write('<div class="owl-carousel owl-theme">');
  for (var i=0;i<allPosts.length;i++){
      //var post = [];
      var postArr;

      postArr = allPosts[i];
      //console.log(postArr.title);
      //document.write("<div class=post-title>"+"<a>"+postArr.title+"</a>"</div>");
      //document.write(postArr.title);
      //document.write('<img src="'+postArr.thumbnail+'"width="240px" alt="img" />');
      //document.write('<div class="item">');
     
      
      document.write('<div class="item">');
      document.write('<img src="'+postArr.thumbnail+'"width="150px" alt="img" />');
      //document.write('<h2 class="posts-title">');
      document.write('<a href="'+postArr.link+'">'+postArr.title+'</a>');
      //document.write('</h2>');
      document.write('</div>');  
  }
  document.write('</div>');
  document.write('</div>');
}
display_posts ();





