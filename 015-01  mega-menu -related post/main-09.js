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

// 取得所有的帖子
var list = allPosts;

$("#submenu>li:eq(0)").append('<ul id="tabmenu"></ul>')
//let menuPosts = document.getElementById("tabmenu");


var sublist = document.getElementById("submenu").children;
//console.log(sublist);

var arr = [];
for(var k=0;k<sublist.length;k++){
  arr.push(sublist[k].innerText);
}
console.log(arr);
var label = arr[0];
console.log(label);

for(var i=0;i<list.length;i++) {
  var postArr;
  var postarrlabel;
  postarrlabel = list[i].label;
  //console.log(postarrlabel);
  if (postarrlabel == arr[0]){
     postArr = list[i];
     
     var post = postArr;
   
     MenuPosts (post)
  }  
}



function MenuPosts (post) {
  let menuPosts = document.getElementById("tabmenu")

  var list = post;
  var postArr = [];	
  for(var i=0;i<list.length;i++) {
    postArr = post[i];

    //const thumbnailLink = document.createElement("a");
    //thumbnailLink.href =  postArr.link;
    
    const thumbnail = document.createElement("img");
    thumbnail.src =  postArr.thumbnail;

    //thumbnailLink.appendChild(thumbnail);
    //console.log(thumbnailLink);

  
    const title = document.createElement("a");
    title.classList.add("post-title");
    title.href = postArr.link;
    title.innerHTML =  postArr.title;
    //console.log(title);

    const relatedPost = document.createElement("li");
    relatedPost.classList.add("related-post");

    relatedPost.appendChild(thumbnail);
    relatedPost.appendChild(title);
    console.log(relatedPost);

    menuPosts.appendChild(relatedPost);
    
  }
}


