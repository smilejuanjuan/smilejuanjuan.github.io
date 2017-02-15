$('#effect').mouseover(function(){
	$('.xiala').addClass('bloc');
});
$('#effect').mouseout(function(){
	$('.xiala').removeClass('bloc');
});
$('#close').click(function(){
	$(this).parent().parent().fadeOut();
});
/*切换城市*/
$('#change_city').click(function () {
	 $('#city_box').css('display','block');
});
$('#city_box a').click(function(){
	var city=$(this).html();
	$('#change_city').prev().html(city);
	$('#city_box').css('display','none');
});

/***附加导航的切换 ****/
$('[data-toggle="affix-item"]').mouseover(function(event){
	event.preventDefault();
	$(this).parent().addClass('active').siblings('.active').removeClass('active');
	var id = $(this).attr('href');
	$(id).addClass('dis_block').siblings('.dis_block').removeClass('dis_block');
});

$('#fix ul li').mouseover(function(){
	$(this).children().css('color','#fff');
});
$('#fix ul li').mouseout(function(){
	$(this).children().css('color','#666');
});
$('#fix ul li.index_xf_3').mouseover(function(){
	$('#tellphone').css('display','block');
});
$('#fix ul li.index_xf_3').mouseout(function(){
	$('#tellphone').css('display','none');
});
 $(document).ready(function() { 
  var length, 
   currentIndex = 0, 
   interval, 
   hasStarted = false,
   t = 5000;
  length = $('.slider-panel').length; 
  $('.slider-panel:not(:first)').hide(); 
  $('.slider-item:first').addClass('slider-item-selected'); 
  $('.slider-page').hide(); 
  $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
   stop(); 
   $('.slider-page').show(); 
  }, function() { 
   $('.slider-page').hide(); 
   start(); 
  }); 
  $('.slider-item').hover(function(e) { 
   stop(); 
   var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
   currentIndex = $(this).index(); 
   play(preIndex, currentIndex); 
  }, function() { 
   start(); 
  }); 
  $('.slider-pre').unbind('click'); 
  $('.slider-pre').bind('click', function() { 
   pre(); 
  }); 
  $('.slider-next').unbind('click'); 
  $('.slider-next').bind('click', function() { 
   next(); 
  }); 
  function pre() { 
   var preIndex = currentIndex; 
   currentIndex = (--currentIndex + length) % length; 
   play(preIndex, currentIndex); 
  } 
  function next() { 
   var preIndex = currentIndex; 
   currentIndex = ++currentIndex % length; 
   play(preIndex, currentIndex); 
  } 
  function play(preIndex, currentIndex) { 
   $('.slider-panel').eq(preIndex).fadeOut(500) 
    .parent().children().eq(currentIndex).fadeIn(1000); 
   $('.slider-item').removeClass('slider-item-selected'); 
   $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
  } 
  function start() { 
   if(!hasStarted) { 
    hasStarted = true; 
    interval = setInterval(next, t); 
   } 
  } 
  function stop() { 
   clearInterval(interval); 
   hasStarted = false; 
  } 
  start(); 
 });

 $('.the_same_liu').mouseover(function(){
	$(this).children().css('color','#fff');
 });
 $('.the_same_liu').mouseout(function(){
	$(this).children().css('color','#666');
 });

$('#first_img').hover(function(){
	$('#po_1').css('display','block');
   $('#po_1').animate({
    top:145
   },800);
},function(){
	 $('#po_1').animate({
		top:285
	},800);
});
$('#two_img').hover(function(){
	$('#po_2').css('display','block');
   $('#po_2').animate({
    top:145
   },800);

},function(){
	 $('#po_2').animate({
		top:285
	},800);
});
$('#three').hover(function(){
	$('#po_3').css('display','block');
   $('#po_3').animate({
    top:145
   },800);

},function(){
	 $('#po_3').animate({
		top:285
	},800);
});






