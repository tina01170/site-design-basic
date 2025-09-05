const allPosts = [
  {
    title: "How Search Engine Works?",
    link: "#",
    thumbnail: "images/blog1.jpg",
    label:"work",
  },
  {
    title: "Works of means?",
    link: "#",
    thumbnail: "images/01.jpg",
    label:"travel",
  },
  {
    title: "AI Images",
    link: "#",
    thumbnail: "images/03.jpg",
    label:"AI",
  },
  {
    title: "What kind of pet is good to keep at home?",
    link: "#",
    thumbnail: "images/03.jpg",
    label:"travel",
  },
  {
    title: "What Is On My Office Desk?",
    link: "#",
    thumbnail: "images/blog3.jpg",
    label:"work",
  },
  {
    title: "ChatGPT Of currnet",
    link: "#",
    thumbnail: "images/01.jpg",
    label:"AI",
  },
  {
    title: "text-to-speech software",
    link: "#",
    thumbnail: "images/02.jpg",
    label:"AI",
  },
  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/blog4.jpg",
    label:"work",
  },
  {
    title: "Train travel Europe",
    link: "#",
    thumbnail: "images/02.jpg",
    label:"travel",
  },
];


//$("#submenu > li").append('<ul id="tabspost"></ul>');

let menuPosts = document.getElementById("tabspost")

// 取得所有的帖子
var list = allPosts;
//console.log(list);

var label = document.getElementById("submenu").parentNode.textContent;
//var label = document.getElementsByTagName("li");
console.log(label);

var labelArr=[];
     /*
for(i=0;i<label.length;i++){
  labelArr.push(label[i].textContent);
  //console.log(labelArr);
  console.log(labelArr[i]);
}*/
      
// 取得相對應的 label
var Alabel = document.getElementById("tabmenu").parentNode.firstChild.textContent;
//console.log(Alabel);

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
/*
for(var i=0;i<list.length;i++) {
    var postArr;
    var postarrlabel;
    postarrlabel = list[i].label;
    //console.log(postarrlabel);
   
   
    if (postarrlabel == label){
        postArr = list[i];
     
       let title = document.createElement("a");
       title.classList.add("post-title");
       title.href = postArr.link;
       title.innerHTML =  postArr.title;
       console.log(title);
      
    }
}*/







