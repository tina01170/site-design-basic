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
    thumbnail: "images/blog1.jpg",
  },

  

  {
    title: "Get The Most Out Of ChatGPT",
    link: "#",
    thumbnail: "images/blog5.jpg",
  },
 
];




  var code = '<div class="owl-carousel owl-theme">';
  for (var i=0;i<allPosts.length;i++){
      var content = '';
      postArr = allPosts[i];    
      var image = '<img src="'+postArr.thumbnail+'"width="150px" alt="img" />'
      var title = '<a href="'+postArr.link+'">'+postArr.title+'</a>'
      content += '<div class="item">' + image + title +'</div>' 
      code += content;
  }
  code += '</div>';   
  //console.log(code)
  $('#slider').append(code);

  






