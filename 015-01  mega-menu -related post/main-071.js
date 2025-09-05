const allPosts = [
  {
    title: "How Search Engine Works?",
    link: "#",
    thumbnail: "images/001.jpg",
    label:"work",
  },

  {
    title: "Get More Traffic With These Tricks",
    link: "#",
    thumbnail: "images/002.jpg",
    label:"travel",
  },

  {
    title: "What Is On My Office Desk?",
    link: "#",
    thumbnail: "images/003.jpg",
    label:"work",
  },

  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/004.jpg",
    label:"AI",
  },
  {
    title: "About your feature of work?",
    link: "#",
    thumbnail: "images/005.png",
    label:"work",
  },

  {
    title: "ChatGPT Of currnet",
    link: "#",
    thumbnail: "images/006.jpg",
    label:"AI",
  },

  {
    title: "Works of means?",
    link: "#",
    thumbnail: "images/007.jpg",
    label:"travel",
  },

  {
    title: "Train travel Europe",
    link: "#",
    thumbnail: "images/008.jpg",
    label:"travel",
  },

  {
    title: "What kind of pet is good to keep at home?",
    link: "#",
    thumbnail: "images/004.jpg",
    label:"work",
  },
  {
    title: "travel of Janpan ?",
    link: "#",
    thumbnail: "images/003.jpg",
    label:"travel",
  },

  {
    title: "text-to-speech software",
    link: "#",
    thumbnail: "images/010.jpg",
    label:"AI",
  },

 
];


// 取得所有的帖子
var list = allPosts;
// 取得label
var sublist = document.getElementById("submenu").children;
console.log(sublist);
var arr = [];
for(var k=0;k<sublist.length;k++){
  arr.push(sublist[k].innerText);
}
//console.log(arr);
function menuposts(){
  for(var k=0;k<sublist.length;k++){
    var label = arr[k];
    console.log(label);
   
    var tablist = sublist[k]; 
    //console.log(tablist)
    const tab = document.createElement("ul");
    tablist.appendChild(tab);
    
    for(var i=0;i<list.length;i++) {
        var postArr=[];
        var postarrlabel = list[i].label;
       
        if (postarrlabel == label){
          postArr = list[i];
          //console.log(postArr);
          //resultArr.push(postArr);
          //postArr.push('<li>' + postArr.thumbnail + '<a href="' + postArr.link + '">' + postArr.title + '</a></li>');
          
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

          tab.appendChild(relatedPost);
        }
      
    }
    
  }
  
}  

menuposts(allPosts)



