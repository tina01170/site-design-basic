$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() < 100){
      $('#topBtn').fadeOut();
    } else{
      $('#topBtn').fadeIn();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},"slow");
  });

});
