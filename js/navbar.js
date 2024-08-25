$(document).ready(function () {
    $.get('/html/navbar.html', function (data) {
      $('#navbar-placeholder').html(data);
    });
  });
  
  $(document).ready(function () {
    $('#navbar-placeholder').load('/html/navbar.html', function () {
      // Apply the scroll effect once the navbar is loaded
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('.navbar').addClass('scrolled');
        } else {
          $('.navbar').removeClass('scrolled');
        }
      });
    });
  });
  