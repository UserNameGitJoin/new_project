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
          if(docscroll>rrr.top -100){
            $('.menu-down').css({'height': $('.menu-down').height(),'width': $('.menu-down').width('100%')}).addClass('fixed');
             $(".menu-down").animate({opacity: "show"}, 1000);
          }else{
            $('.menu-down').removeClass('fixed');
              /*$(".menu-down").animate({opacity: "hide"}, 1000);*/
          }
        });

$('.scrol-contact').click(function(){
    var newId = $(this).attr('id');
    newId = newId.split('-');
    $('select option[value='+newId[1]+']').attr('selected', 'selected');
});

$("a[href^='#']").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top /*- 50*/
        }, 1000);
        return false;
      }
    }
});



$('#formActiv').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    
  } else {
    e.preventDefault();
    $.ajax({
		type:"POST",
		url: "send.php",
		data:{elements:$('#formActiv').serialize()},
        beforeSend:function(){ 
            $('#form-sub').append('<img class="ajax-send" src="../img/9.gif">');
            $('#formActiv button').css({display:'none'});
		},
		success:function(res){
			setTimeout(function(){
                if(res == 'true'){
                    $('#formActiv img').css({display:'none'});
                    $('#formActiv button').css({display:'inline-block'});
                    $('#formActiv').trigger("reset");
                    $('#formActiv').validator('destroy');
                    $('#formActiv').validator();
                    $('#form-sub').append('<h2 class="col-md-6 text-left" style=" padding-top: 0;margin-top: 13px">Письмо успешно отправлено</h2>');
                }else{
                     $('#formActiv img').css({display:'none'});
                    $('#formActiv button').css({display:'inline-block'});
                     $('#form-sub').append('<h2 class="col-md-6 text-left" style=" padding-top: 0;margin-top: 13px">Ошибка</h2>');
                }
            }, 1000);
		},
		error:function(){
			alert('Ошибка!');
		}
	});
  }
})