$('.header').load('sc_header.html',function(){
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
	$('#change_city').click(function(){
	   $('#city_box').css('display','block');
	});
	$('#city_box a').click(function(){
	   var city=$(this).html();
	   $('#change_city').prev().html(city);
	   $('#city_box').css('display','none');
	});
});
/******************验证码*******************/
window.onload=function(){
	test();
};
var str="";
function test(){
	var ctx=canvas.getContext('2d');
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,200,40);
	ctx.lineWidth=1;
	// var data='ABCDEFGHJKMNPQRSTWXY2456789';
	var data='abcdefghjkmnpqrstwxy2456789';
	var c1=data[Math.floor(Math.random()*(26+1))];
	var c2=data[Math.floor(Math.random()*(26+1))];
	var c3=data[Math.floor(Math.random()*(26+1))];
	var c4=data[Math.floor(Math.random()*(26+1))];
	var c5=data[Math.floor(Math.random()*(26+1))];

	// ctx.fillStyle='#'+r+g+b;
	for(var i=0;i<100;i++){
		var r=Math.floor(Math.random()*(255+1));
		var g=Math.floor(Math.random()*(255+1));
		var b=Math.floor(Math.random()*(255+1));
		var x=Math.floor(Math.random()*200);
		var y=Math.floor(Math.random()*40);
		var a=Math.floor(Math.random()*3);
		ctx.beginPath();
		ctx.arc(x,y,a,-90*Math.PI/180,270*Math.PI/180);
		ctx.closePath();
		ctx.fillStyle='rgba('+r+','+g+','+b+',0.5)';
		ctx.fill();
	}
	ctx.fillStyle='#1DA362';
	ctx.font="bold 30px sans-serif";
	ctx.fillText(c1,20,25);
	ctx.font="bold 20px sans-serif";
	ctx.fillText(c2,50,25);
	ctx.font="bold 30px sans-serif";
	ctx.fillText(c3,80,25);
	ctx.font="bold 20px sans-serif";
	ctx.fillText(c4,110,25);
	str=c1+c2+c3+c4;
	console.log(str);
	return str;
}
$("#canvas").click(function(){
	test();
});
/**注册**/
function check(){
	var phone = $("#ztel").val();
	var userpass = $("#zpwd").val();
	var ruserpass = $("#zspwd").val();
	var mcode = $("#zyz").val();
	var regtel =/^1[3578]\d{9}$/;
	var n=str;
	if(phone == ''){
		$('#tphone').html('请输入手机号');
		$('#tphone').css('color','red');
		return false;
	}else if(!regtel.test(phone)){
		$('#tphone').html('请输入有效的手机号码！');
		$('#tphone').css('color','red');
		return false;
	}else if(regtel.test(phone)){
		$('#tphone').html('<img src="images/index/right_1.png">');

	}
	if (userpass == '') {
		$("#password").html("密码不能为空");
		$("#password").css('color','red');
		return false;
	}else if(userpass.length<6){
		$("#password").html("密码必须大于6位字符小于12位字符");
		return false;
	}else if(userpass.length>12){
		$("#password").html("密码必须大于6位字符小于12位字符");
		return false;
	}else{
		$("#password").html('<img src="images/index/right_1.png">');

	}
	if (ruserpass =='') {
		$("#affirm").html("确认密码不能为空");
		$("#affirm").css('color','red');
		return false;
	} else if (userpass !== ruserpass) {
		$("#affirm").html("两次输入密码不一样");
		$("#affirm").css('color','red');
		return false;
	} else {
		$("#affirm").html('<img src="images/index/right_1.png">');

	}
	if (mcode =='') {
		$("#test").html("验证码不能为空");
		$("#test").css('color','red');
		return false;
	} else if (mcode !== n) {
		$("#test").html("验证码不正确");
		$("#test").css('color','red');
		return false;
	} else {
		$("#test").html('<img src="images/index/right_1.png">');

	}
	return true;
}
$('#zc').click(function(){
	if(check()){
		var result = $('#register_form').serialize();
		$.post('data/register.php',result,function(data){
			location.href="SC_index.html";
		});
	}
});
$('.footer').load('sc_footer.html',function(){
	/***附加导航的切换 ****/
	$('[data-toggle="affix-item"]').mouseover(function(event){
	 event.preventDefault();
	 $(this).parent().addClass('active')
		 .siblings('.active').removeClass('active');

	 var id = $(this).attr('href');
	 $(id).addClass('dis_block')
		 .siblings('.dis_block').removeClass('dis_block');
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
});