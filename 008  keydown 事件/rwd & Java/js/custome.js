/* toTop */

let topbtn = document.getElementById("topBtn");

window.addEventListener('scroll',function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topbtn.style.display ="block";
    } else {
        topbtn.style.display ="none";
    }
})

topbtn.onclick = function (){
    window.scrollTo({top: 0, behavior: 'smooth'})
}

/* search form */

let show = document.getElementById("search-show")

function showform() {
    let form = document.getElementById('search-form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

show.addEventListener("click", function(){  
    showform();
});


$(document).ready(function() {
    /*menu*/ 
    $(".menu-toggle").click(function() {
        $(".main-navigation .nav-menu").slideToggle("slow","linear");
    });
	
})