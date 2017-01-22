(function ($) {
  $(document).ready(function(){
    $('.available-options-btn button[scrollto^="#"]').on('click', function(event) {

        var target = $( $(this).attr('scrollto') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top-20
            }, 500);
        }

    });
    
  });

}(jQuery));