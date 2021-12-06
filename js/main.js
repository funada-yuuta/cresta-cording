$(function(){
  $('a[href^="#"]').on('click', function(){
    let href = $(this).attr('href');
    let target = $(href);
    let position = target.offset().top;
    
    $('html, body').animate({scrollTop: position}, 400, 'swing');

    if($('.menubar').hasClass('active')){
      $('body').removeClass('hidden');
      $('.menubar').removeClass('active');
      $('header nav').removeClass('active');
    }
  });
});

$(function(){
  $('.menubar').on('click', function(){
    $('body').toggleClass('hidden');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
});