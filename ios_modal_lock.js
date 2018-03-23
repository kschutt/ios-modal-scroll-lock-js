jQuery(function(){
  $('#iframe_test').modal('show');
  (function iOS_ScrollBug() {
    var ua = navigator.userAgent,
    scrollTopPosition,
    scrolling = 0,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);

    if ( iOS && iOS11 ) {
      $('body').on('touchstart', function(e){
        scrolling = 1;
      });
      $('body').on('touchend', function(e){
        scrollTopPosition = $('#iframe_test').scrollTop();
        scrolling = 2;
      });
      $('#iframe_test').scroll(function(e){
        if(scrollTopPosition && scrolling == 2){
          $('#iframe_test').scrollTop(scrollTopPosition);
        }
      });
    }
  })();
});
