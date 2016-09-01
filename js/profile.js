$(function(){




///////////////////////矢印を消す///////////////////////////////

		var $header = $("#header");
		var headerOffsetTop = $header.offset().top;

		$(window).on("scroll",function(){
			if( $(window).scrollTop() > headerOffsetTop){
				$(".tobottom").fadeOut(1000);
			}else{
				$(".tobottom").fadeIn();
			}
		});


//////////////スムーズスクロール//////////

	// //どっちかがスクロール可能か検出
	// // var el = scrollableElement("html","body");
	// // //戻る位置の設定
	// // var profileOffsetTop = $(".profile").offset().top;

	// //クリックイベントを挿入
	// $(".tobottom").on("click",function(event){
	// 	event.preventDefault();
	// 	$("el").animate({ scrollTop: 300 }, 250);
	// });


	// // //scrollTopが利用出来る要素を検出する関数の作成
	// // function scrollableElement(){
	// // 	var i, len, el, $el, scrollable;
	// // 	for (i = 0, len = arguments.length; i < len; i++){
	// // 		el = arguments[i],
	// // 		$el = $(el);

	// // 		if($el.scrollTop() > 0){
	// // 			return el;
	// // 		}else{
	// // 			$el.scrollTop(1);
	// // 			scrollable = $el.scrollTop() > 0;
	// // 			$el.scrollTop(0);
	// // 			if(scrollable){
	// // 				return el;
	// // 			}
	// // 		}
	// // 	}
	// // 	return [];




//////////////////////////////アニメーション///////////////////////////////////////



    	var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
		var ff = navigator.userAgent.indexOf('Firefox') > 0;
		var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
		if (iOS) document.body.classList.add('iOS');

		var fireworks = (function() {

		  var getFontSize = function() {
		    return parseFloat(getComputedStyle(document.documentElement).fontSize);
		  }

		  var canvas = document.querySelector('.fireworks');
		  var ctx = canvas.getContext('2d');
		  var numberOfParticules = 24;
		  var distance = 200;
		  var x = 0;
		  var y = 0;
		  var animations = [];

		  var setCanvasSize = function() {
		    canvas.width = window.innerWidth;
		    canvas.height = window.innerHeight;
		  }

		  var updateCoords = function(e) {
		    x = e.clientX || e.touches[0].clientX;
		    y = e.clientY || e.touches[0].clientY;
		  }

		  var colors = ['#000', '#000', '#000', 'red'];

		  var createCircle = function(x,y) {
		    var p = {};
		    p.x = x;
		    p.y = y;
		    p.color = colors[anime.random(0, colors.length - 1)];
		    p.color = '#000';
		    p.radius = 0;
		    p.alpha = 1;
		    p.lineWidth = 6;
		    p.draw = function() {
		      ctx.globalAlpha = p.alpha;
		      ctx.beginPath();
		      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
		      ctx.lineWidth = p.lineWidth;
		      ctx.strokeStyle = p.color;
		      ctx.stroke();
		      ctx.globalAlpha = 1;
		    }
		    return p;
		  }



		  var createCircle2 = function(x,y) {
		    var p = {};
		    p.x = x;
		    p.y = y;
		    p.color = colors[anime.random(0, colors.length - 1)];
		    p.color = "#000";
		    p.radius = 0;
		    p.alpha = 1;
		    p.lineWidth = 10;
		    p.draw = function() {
		      ctx.globalAlpha = p.alpha;
		      ctx.beginPath();
		      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
		      ctx.lineWidth = p.lineWidth;
		      ctx.strokeStyle = p.color;
		      ctx.stroke();
		      ctx.globalAlpha = 1;
		    }
		    return p;
		  }



		  var createParticule = function(x,y) {
		    var p = {};
		    p.x = x;
		    p.y = y;
		    p.color = colors[anime.random(0, colors.length - 1)];
		    p.radius = anime.random(getFontSize(), getFontSize() * 2);
		    p.draw = function() {
		      ctx.beginPath();
		      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
		      ctx.fillStyle = p.color;
		      ctx.fill();
		    }
		    return p;
		  }

		  var createParticles = function(x,y) {
		    var particules = [];
		    for (var i = 0; i < numberOfParticules; i++) {
		      var p = createParticule(x, y);
		      particules.push(p);
		    }
		    return particules;
		  }

		  var removeAnimation = function(animation) {
		    var index = animations.indexOf(animation);
		    if (index > -1) animations.splice(index, 1);
		  }

		  var animateParticules = function(x, y) {
		    setCanvasSize();
		    var particules = createParticles(x, y);
		    var circle = createCircle(x, y);
		    var circle2 = createCircle2(x,y)
		    var particulesAnimation = anime({
		      targets: particules,
		      x: function(p) { return p.x + anime.random(-distance, distance); },
		      y: function(p) { return p.y + anime.random(-distance, distance); },
		      radius: 0,
		      duration: function() { return anime.random(1200, 1800); },
		      easing: 'easeOutExpo',
		      complete: removeAnimation
		    });
		    var circleAnimation = anime({
		      targets: circle,
		      radius: function() { return anime.random(getFontSize() * 8.75, getFontSize() * 11.25); },
		      lineWidth: 0,
		      alpha: {
		        value: 0,
		        easing: 'linear',
		        duration: function() { return anime.random(400, 600); }
		      },
		      duration: function() { return anime.random(1200, 1800); },
		      easing: 'easeOutExpo',
		      complete: removeAnimation
		    });


		    var circleAnimation2 = anime({
		      targets: circle2,
		      radius: function() { return anime.random(getFontSize() * 8.75, getFontSize() * 11.25); },
		      lineWidth: 0,
		      alpha: {
		        value: 0,
		        easing: 'linear',
		        duration: function() { return anime.random(5000, 5500); }
		      },
		      duration: function() { return anime.random(1500, 2100); },
		      easing: 'easeOutElastic',
		      complete: removeAnimation
		    });


		    animations.push(particulesAnimation);
		    animations.push(circleAnimation);
		    animations.push(circleAnimation2);

		  }

		  var mainLoop = anime({
		    duration: Infinity,
		    update: function() {
		      ctx.clearRect(0, 0, canvas.width, canvas.height);
		      animations.forEach(function(anim) {
		        anim.animatables.forEach(function(animatable) {
		          animatable.target.draw();
		        });
		      });
		    }
		  });

		  document.addEventListener(tap, function(e) {
		    updateCoords(e);
		    animateParticules(x, y);
		  }, false);

		  window.addEventListener('resize', setCanvasSize, false);

		  return {
		    boom: animateParticules
		  }

		})();


		document.addEventListener('DOMContentLoaded', logoAnimation, false);


});