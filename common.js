$(function(){


	var duration = 2000;

	//最初の表示
	$(window).load(function() {
		$(".title").delay(500).fadeIn("500");
 	});

	//タイトルページ
	$("#enter").on("click",function(){

		//ロゴ1が右にに分かれる
		$("#logo1").animate({
			"width":"40%",
			"right":"50%"
		},duration,function(){

			//分かれた後の動き
			$("#logo1").animate({
				"opacity":"0"
			},duration);
			$("#profile").animate({
				"opacity":"1"
			},duration);
			$("#work").animate({
				"opacity":"1"
			},duration);
			$(".title").animate({
				"z-index":"-10"
			},duration);

			}
		);

		//ロゴ2が左に動く
		$("#logo2").animate({
			"width":"40%",
			"right":"-50%"
		},duration,function(){

			//分かれた後の動き
			$("#logo2").animate({
				"opacity":"0"
			},duration);
			});

		//ロゴ3が上に移動
		$("#logo3").animate({
			"width":"45%",
			"top":"-70%"
		},duration,function(){
			$("#saisho").css({
				"opacity":"1"
			});
		});

		//ボタンが消える
		$(this).hide(2000);

	});


	//プロフィール表示
	var $profile = $("#profile");
	$profile.on("click",function(){
			$(".profile").animate({
				"left":"0"
			});
			$(".left").animate({
				"right":"-100%"
			});
			$(".right").animate({
				"left":"100%"
			});
	});

	//プロフィールからトップへ
	$("#totop").on("click",function(){
			$(".profile").animate({
				"left":"-100%"
			});
			$(".left").animate({
				"right":"0%"
			});
			$(".right").animate({
				"left":"0%"
			});
	});


	//ワークを表示
	var $work = $("#work");
	$work.on("click",function(){
			$(".work").animate({
				"right":"0"
			});
			$(".left").animate({
				"right":"100%"
			});
			$(".right").animate({
				"left":"-100%"
			});
	});

	//ワークからトップへ
	$("#fortop").on("click",function(){
			$(".work").animate({
				"right":"-100%"
			});
			$(".left").animate({
				"right":"0%"
			});
			$(".right").animate({
				"left":"0%"
			});
	});


	// ページの場所の取得
	var width = $(window).width();
	$(".all").on("mousemove",function(e){
		if(e.pageX < width/2){
			$(".right").css({
				"backgroundColor":"#"
			},duration);
		}else{
			$(".right").css({
				"backgroundColor":"#fff"
			},duration);
		}
	});

});