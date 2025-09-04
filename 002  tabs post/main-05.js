const allPosts = [
  {
    title: "Get More Traffic With These Tricks",
    link: "#",
    thumbnail: "images/pexels-002.jpg",
    label:"movie",
  },

  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/pexels-004.jpg",
    label:"tvshow",
  },

  {
    title: "ChatGPT Of currnet",
    link: "#",
    thumbnail: "images/pexels-005.jpg",
    label:"novel",
  },

  {
    title: "Works of means?",
    link: "#",
    thumbnail: "images/pexels-006.jpg",
    label:"novel",
  },
  {
    title: "travel of Janpan ?",
    link: "#",
    thumbnail: "images/pexels-101.jpg",
    label:"tvshow",
  },

  {
    title: "text-to-speech software",
    link: "#",
    thumbnail: "images/02.jpg",
    label:"movie",
  }

 
];

// 取得所有的帖子
var list = allPosts;
// 取得label
$('.leftlist > li > a').each(function() {
  var $this = $(this);
  var label = $this.text();
  console.log(label);
  
});

var arr = ["tvshow","movie","novel"];

for(var i=0;i<list.length;i++) {
    
    var postArr;
   
    var postarrlabel;
    //var label = "AI";
   
    postarrlabel = list[i].label;
    //console.log(postarrlabel);
    
    if (postarrlabel == arr[1]){
       postArr = list[i];
        console.log(postArr)
       
       const thumbnailLink = document.createElement("a");
       thumbnailLink.href =  postArr.link;
     
       const thumbnail = document.createElement("img");
       thumbnail.src =  postArr.thumbnail;

       thumbnailLink.appendChild(thumbnail);
       //console.log(thumbnailLink);

     
       const title = document.createElement("a");
       title.classList.add("post-title");
       title.href = postArr.link;
       title.innerHTML =  postArr.title;
       //console.log(title);

       //const relatedPost = document.createElement("li");
       //relatedPost.classList.add("related-post");

      // relatedPost.appendChild(thumbnailLink);
       //relatedPost.appendChild(title);
       //console.log(relatedPost);

       //menuPosts.appendChild(relatedPost);
    }  
}