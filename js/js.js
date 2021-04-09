function responseMenu(){
	$('ul.menu__dropdown li.menu__item').appendTo('ul.menu');
	var items = $('ul.menu li.menu__item');
	var max_width = $('ul.menu').width() - $('ul.menu li.menu__btn').outerWidth();
	var width = 0;
	var hide_from = 0;

	items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.menu__item').appendTo('ul.menu__dropdown');
		items.css({'width':(max_width / hide_from + 50) + 'px'});
		$('ul.menu li.menu__btn').show();
	}
	else
	{
		$('ul.menu li.menu__btn').hide();
	}
}

$(document).ready(function () {
	$('.menu__body').on('click', '.menu__toggle', function () {
		$('.menu__dropdown').toggle();
	});

	$(window).on('resize', function(){
		responseMenu();
	}).trigger('resize');

});