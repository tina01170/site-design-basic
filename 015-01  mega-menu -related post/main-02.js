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

let menuPosts = document.getElementById("submenu")

// 取得所有的帖子
var list = allPosts;
//console.log(list);

// 取得相對應的 label
var Alabel = document.getElementById("submenu").parentNode.firstChild.textContent;
console.log(Alabel);

var Blabel = document.getElementById("travel-posts").parentNode.firstChild.textContent;
console.log(Blabel);


for(var i=0;i<list.length;i++) {
    
    var postArr;
   
    var postarrlabel;
    //var label = "AI";
   
    postarrlabel = list[i].label;
    //console.log(postarrlabel);
    
    if (postarrlabel == Alabel){
       postArr = list[i];

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

       const relatedPost = document.createElement("li");
       relatedPost.classList.add("related-post");

       relatedPost.appendChild(thumbnailLink);
       relatedPost.appendChild(title);
       //console.log(relatedPost);

       menuPosts.appendChild(relatedPost);
    }  
}
        