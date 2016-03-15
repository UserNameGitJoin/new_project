window.onload = function() { // после загрузки страницы
        var scrollUp = document.getElementById('scrollup'); // найти элемент
        scrollUp.onclick = function() { //обработка клика
          // window.scrollTo(0,0);            
            function scrollUp() {
              window.scrollBy(0,-100); // чем меньше значение (цифра -10), тем выше скорость перемещения
              if (window.pageYOffset > 0) {requestAnimationFrame(scrollUp);} // если значение прокрутки больше нуля, то функция повториться
            }
            scrollUp();
        };
        };
        rrr = $('.amenities').position();
        $(window).scroll(function(){    
          var docscroll=$(document).scrollTop();
          if(docscroll>rrr.top){
            $('.menu-down').css({'height': $('.menu-down').height(),'width': $('.menu-down').width('100%')}).addClass('fixed');
          }else{
            $('.menu-down').removeClass('fixed');
          }
        });