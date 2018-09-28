$(document).ready(function () {

    for(var i = 0; i < 35; i++){
        $("#trashContainer").append("<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia nesciunt tempora ipsa iusto esse solut</h1>");
    }
  
    $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop()
      $('#background-2').css('top', (scrollTop * 0.5) + 'px')
      $('#background-3').css('top', (scrollTop * 0.8) + 'px')
      $('#background-4').css('top', (scrollTop * 1) + 'px')
      $('#background-5').css('top', (scrollTop * 1.2) + 'px')
    })
  })
  