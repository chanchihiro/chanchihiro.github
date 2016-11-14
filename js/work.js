$(function(){

	var $window = $(window);
	var logoOffsetTop = $("#logotext").offset().top;
	var textOffsetTop = $(".m2").offset().top;
	var imgOffsetTop = $(".m3").offset().top;

	$window.on("scroll",function(){

		///////////ロゴ
		if($window.scrollTop() > logoOffsetTop - 200 ){
			$(".m1").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > textOffsetTop - 250 ){
			$(".m2").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > imgOffsetTop - 300 ){
			$(".m3").animate({
				"left" : 0
			},1800);
		}





		//////////イラスト
		if($window.scrollTop() > $(".m4").offset().top - 600 ){
			$(".m4").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m5").offset().top - 450 ){
			$(".m5").animate({
				"left" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m6").offset().top - 500 ){
			$(".m6").animate({
				"left" : 0
			},1800);
		}



		///サイト
		if($window.scrollTop() > $(".m7").offset().top - 600 ){
			$(".m7").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m8").offset().top - 450 ){
			$(".m8").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m9").offset().top - 500 ){
			$(".m9").animate({
				"left" : 0
			},1800);
		}




		////アプリケーション
		if($window.scrollTop() > $(".m10").offset().top - 600 ){
			$(".m10").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m11").offset().top - 450 ){
			$(".m11").animate({
				"left" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m12").offset().top - 500 ){
			$(".m12").animate({
				"left" : 0
			},1800);
		}



		///マガジン
		if($window.scrollTop() > $(".m13").offset().top - 600 ){
			$(".m13").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m14").offset().top - 450 ){
			$(".m14").animate({
				"right" : 0
			},1800);
		}
		if($window.scrollTop() > $(".m15").offset().top - 500 ){
			$(".m15").animate({
				"left" : 0
			},1800);
		}
	});
});