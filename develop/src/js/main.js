$(window).on('resize',function(){
  // resize();
})

$("#js-menuButton").on("click", function() {
 $(this).toggleClass("active");
 $("#js-menu").slideToggle(400);
 if ($(window).width() < 768) {
   $("#js-menu li").hide();
   $("#js-menu li").each(function(i) {
     $(this)
       .delay(50 * i)
       .fadeIn(500);
   });
 }
 return false;
});

//dropdown//
$(".nav li").hover(function () {
	$(this).children("ul").stop().delay(200).animate({opacity: "toggle"}, 200);
});

//tabs//
// Show the first tab and hide the rest
$('.tabs li:first-child').addClass('active');
$('.tab_content').hide();
$('.tab_content:first').show();

// Click function
$('.tabs li').click(function(){
  $('.tabs li').removeClass('active');
  $(this).addClass('active');
  $('.tab_content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

//change_image//
$('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
});
// photo slider/

$(function(){
  $('#list_photo').slick({
    autoplay: true,
    swipe: false,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 3500,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false
  });
});

//anime
(function($){
	$.fn.scrollClass = function(config){
		var defaults = {};
		var config = $.extend(defaults, config);
		var target = this;
		function addAction(){
			var length = target.length;
			for(var i=0; i<length; i++){
				if(target.eq(i).hasClass('action')) continue;

				var in_position = target.eq(i).offset().top;
				var window_bottom_position = $(window).scrollTop() + $(window).height();
				if(in_position < window_bottom_position){
					target.eq(i).addClass('action');
				}
			}
		}
		addAction();

		$(window).on('scroll', $.throttle(250, function(){
			addAction();
		}));
		return target;
	};
} )(jQuery);
