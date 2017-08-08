$( document ).ready(function() {
  $(".home").click(function() {
    $('html, body').animate({ scrollTop: 0}, 1000);
  });
  $(".grants").click(function() {
    $('html, body').animate({ scrollTop:$("#grants").offset().top +220}, 1000);
  });
  $(".gocontact").click(function() {
    $('html, body').animate({ scrollTop:$("#contact").offset().top +220}, 1000);
  });
  $(".goabout").click(function() {
    $('html, body').animate({ scrollTop:$("#about").offset().top +500}, 1000);
  });

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 602) {
      $('.col-xs-9').removeClass('col-xs-9');
    } else {
      $('#123').removeClass('btn-lg');
    }
    });
  
});