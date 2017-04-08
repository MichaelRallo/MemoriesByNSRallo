function smoothScroll(x) {
   $('html, body').animate({
       scrollTop: $('#'+x+'Container').offset().top-50
    }, 1200);
}

$('#nav li a').click(function(){
    smoothScroll($(this).attr('id'));
});


$('#menuToggle').click(function(){
    $('#nav').slideToggle(200);
});
