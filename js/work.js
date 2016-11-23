$(function(){

	var baa = function(){
		$("#ba").stop().animate({
		opacity: -10
		});
	};
	var baba = function(){
		$("#ba").stop().animate({
		top: "0px",
		right: "0px"
		});
	};

	var aaa = function(){
		$("#baa").stop().animate({
		opacity: -10
		});
	};
	var caca = function(){
		$("#baa").stop().animate({
		bottom: "0px",
		right: "0px"
		});
	};


	$("#kako").stop().mouseenter(function(){
		$("#ba").stop().animate({
			opacity: 1,
			top: "-50px",
			right: "-50px"
		},300, function() {
			setTimeout(baa,150);
			setTimeout(baba,300);
		});
	});
	$("#behance").mouseenter(function(){
		$("#baa").animate({
			opacity: 1,
			bottom: "50px",
			right: "30px"
		},200, function() {
			setTimeout(aaa,150);
			setTimeout(caca,300);
		});
	});


});