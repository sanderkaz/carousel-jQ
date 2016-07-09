/*var carousel = $('.carousel ul');

var carouselElements = carousel.children();

var c = carouselElements.first().clone();
carousel.append(c)

carouselElements = carousel.children();

var current = 0,
    offset = - $('.carousel').width(); // -400


function slide(isLeft) {
  
  if (isLeft) {
    current--;
  } else {     
    current++;
  }
  
  console.log(current)
  
  if (current <= 0 && isLeft) {
    
    
    // TODO 
    carousel.animate( {
    marginLeft: '0px'
    }, 500, function() {
      
      carousel.css('marginLeft', -2000);
      current = 5;
      
    });
      
    
    
  } else if (current >= carouselElements.length - 1 ) {
    
    carousel.animate( {
      marginLeft: (current*offset)+'px'
    }, 500, function() {
      
      current = 0
      carousel.css('marginLeft', 0);
      
    });

  } else {
    
    carousel.animate( {
      marginLeft: (current*offset)+'px'
    }, 500);
    
  }
}


setInterval(slide , 5000);


$('#prev').on('click', function(){
  
  slide(true);
  
});

$('#next').on('click', function(){
  
  slide();
  
});*/
$(function(){
  var carouselList = $(".carousel ul");
  function changeSlide() {
    carouselList.animate({
      marginLeft: -400
      }, 400, moveFirstSlide);
  }
  setInterval(changeSlide, 3000);
  function moveFirstSlide (){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem),
    carouselList.css({marginLeft:0});
}
function backSlide() {
  carouselList.animate({
      marginLeft: 0
      }, 400, moveLastSlide);
}
function moveLastSlide (){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.after(lastItem),
    carouselList.css({marginLeft: -400});
}

$('#prev').on('click', function(){
  
  backSlide();
  
});

$('#next').on('click', function(){
  changeSlide();
});
});