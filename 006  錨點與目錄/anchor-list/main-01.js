
//抓文章裡的h2,h3,h4

var allt = document.querySelectorAll(
  ".page-content h2, .page-content h3"
);

// 文章區間
var pageContent = document.querySelector(".page-content");

// 創造節點
function generateTOC (){
  var content = document.createElement("div");
  content.classList.add("table-contents");
  //console.log(content)

  var head = document.createElement("h2");
  head.classList.add("toc-heading");
  head.innerHTML = "Table of Contents";
  //console.log(head)

  var container = document.createElement("div");
  container.classList.add("headings-container");
  //console.log(container)

  var ul = document.createElement("ul");
  let subHeadingUl = null;

  for (var i = 0; i < allt.length; i++) {
      var h = allt[i];
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = `#${h.id}`;
      a.innerHTML = h.innerHTML;
      li.appendChild(a);
    
      if (h.classList.contains("toc-h3")) {
        a.classList.add("sub-heading");
  
        if (!subHeadingUl) {
          subHeadingUl = document.createElement("ul");
          const previousLi = ul.lastChild;
          previousLi.appendChild(subHeadingUl);
        }
  
        subHeadingUl.appendChild(li);
      } else {
        a.classList.add("heading");
        ul.appendChild(li);
        subHeadingUl = null;
      }
  }

  container.appendChild(ul);
  content.appendChild(head);
  content.appendChild(container);

  pageContent.prepend(content);

}

if (allt.length > 0 && pageContent) {
  generateTOC();
}

