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
    thumbnail: "images/blog6.jpg",
  },

  {
    title: "Get The Most Out Of ChatGPT",
    link: "#",
    thumbnail: "images/blog5.jpg",
  },
 
];

//const relatedPostsbody = document.querySelectorAll(".related-posts-container");
//const relatedPosts = document.querySelector(".related-posts");

var maxRelatedNumber = 6; //max 6


// 顯示帖子的數量
var shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, maxRelatedNumber);


function display_relatedposts () {
  document.write('<div class="related-wrap">');
  document.write('<h2 class="related-posts-title">Related Post</h3>');  
  document.write('<div class="related-post">');

  for (var i=0;i<shuffledList.length;i++){
      //var post = [];
      var postArr;

      postArr = shuffledList[i];
      
      document.write('<div class="related-post-item">');
      document.write('<img src="'+postArr.thumbnail+'"width="240px" alt="img" />');
      
      document.write('<h3><a href="'+postArr.link+'">'+postArr.title+'</a></h3>');
    
      document.write('</div>');

     
  }
  document.write('</div>');
  document.write('</div>');
 
}
display_relatedposts ();

