$(function(){

	var $window = $(window);
	var logoOffsetTop = $("#logotext").offset().top;
	var textOffsetTop = $(".m2").offset().top;
	var imgOffsetTop = $(".m3").offset().top;

	$window.on("scroll",function(){

		///////////ロゴ
		if($window.scrollTop() > logoOffsetTop - 700 ){
			$(".m1").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > textOffsetTop - 700 ){
			$(".m2").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > imgOffsetTop - 700 ){
			$(".m3").animate({
				"left" : 0
			},1000);
		}





		//////////イラスト
		if($window.scrollTop() > $(".m4").offset().top - 700 ){
			$(".m4").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m5").offset().top - 700 ){
			$(".m5").animate({
				"left" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m6").offset().top - 700 ){
			$(".m6").animate({
				"left" : 0
			},1000);
		}



		///サイト
		if($window.scrollTop() > $(".m7").offset().top - 700 ){
			$(".m7").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m8").offset().top - 700 ){
			$(".m8").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m9").offset().top - 700 ){
			$(".m9").animate({
				"left" : 0
			},1000);
		}




		////アプリケーション
		if($window.scrollTop() > $(".m10").offset().top - 700 ){
			$(".m10").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m11").offset().top - 700 ){
			$(".m11").animate({
				"left" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m12").offset().top - 700 ){
			$(".m12").animate({
				"left" : 0
			},1000);
		}



		///マガジン
		if($window.scrollTop() > $(".m13").offset().top - 700 ){
			$(".m13").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m14").offset().top - 700 ){
			$(".m14").animate({
				"right" : 0
			},1000);
		}
		if($window.scrollTop() > $(".m15").offset().top - 700 ){
			$(".m15").animate({
				"left" : 0
			},1000);
		}
	});
});