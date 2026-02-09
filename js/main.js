// animal 필터링
var $btn = $('nav a')
var $article = $('article')

var classname;
$btn.click(function(){
  classname = $(this).attr('class')

  $article.hide()
  $('.' + classname).fadeIn()

  $btn.removeClass('on')
  $(this).addClass('on')

  /* 변수를 만들어서  */
})

// $btn.click(function(){
//   $btn.removeClass('on')
//   $(this).addClass('on')
// })

$('a.all').click(function(){
  $article.hide()
  $article.fadeIn()
})



// $('a.wild').click(function(){
/* $btn.filter('.wild').click(function(){
  $article.hide()
  $('.wild').fadeIn()
})

$btn.filter('.mammals').click(function(){
  $article.hide()
  $('.mammals').fadeIn()
})

$('a.fish').click(function(){
  $article.hide()
  $('.fish').fadeIn()
})

$('a.pet').click(function(){
  $article.hide()
  $('.pet').fadeIn()
})

$('a.bird').click(function(){
  $article.hide()
  $('.bird').fadeIn()
}) */
