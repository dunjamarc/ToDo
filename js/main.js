var main = function(){
	$('form').submit(function(){
		var item = $('input[class=form-control]').val();
		var html = '<li><input type="checkbox"> <span class="glyphicon glyphicon-star"></span> ' + item + ' <span class="glyphicon glyphicon-remove"></span></li>'
        $('.list').append(html);
        $('.form-control').val('');
        return false;
	});

	$('.btn').mouseup(function(){
		$('.btn').css({'background-color':'#EA435F', 'outline':'none', 'border':'1px solid #EA435F'});
	});

	$('form').submit(function(){
        window.scrollTo(0, 2000);
    });

	$(document).on('click', '.glyphicon-star', function(){
		$(this).toggleClass('active');
	});

	$(document).on('click', '.glyphicon-remove', function(){
		$(this).parent().remove();
	});
}

$(document).ready(main);