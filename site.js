var $ = window.jQuery
$(function () {
$('.ham').on('click',function(){
  $(this).toggleClass('open')
  $('.mobilenav').fadeToggle()
  $('body').toggleClass('prevent-scroll')
})
})
