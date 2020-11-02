$('.navbar-toggler').click(function (){
  $('.hidden_element').show()
  $('.navbar').hide()
})
$('.bi-x-square').click(function (){
  $('.hidden_element').hide()
  $('.navbar').show()
})

$(window).resize(function() {

  if ($(window).width() > 990) {

    $('.hidden_element').hide();
    $('.navbar').show()

  }

});
