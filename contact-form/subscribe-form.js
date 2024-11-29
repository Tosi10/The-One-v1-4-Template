// JavaScript Document

// contact form
$(document).ready(function() {
	$('form#subscribe').submit(function() {
	$('form#subscribe .subscribeerror').remove();
	var hasError = false;
	$('.subscriberequiredField').each(function() {
	if(jQuery.trim($(this).val()) == '') {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="subscribeerror">Enter'+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('subscribeemail')) {
    var subscribeemailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!subscribeemailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="subscribeerror">Invalid'+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#subscribe input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
    $('form#subscribe').slideUp("fast", function() {
    $(this).before('<p class="subscribesuccess">Thank you for subscribing.</p>');
    });
    });
    }
    return false;
    });
});