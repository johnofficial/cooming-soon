$(function() {
	contactForm();
	aboutPopUp();
	parallaxImg();
});

/* Ajax Contact Form */
function contactForm() {
  // Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

}

function aboutPopUp() {
	$('[data-info]').on('click', function (e) {
		e.preventDefault();
		if(!$('.light-box').hasClass('is-active')){
			$('.light-box').addClass('is-active');
        }else{
            $('.light-box').removeClass('is-active');
		}
    });
	$('.black-closer, .close-btn').on('click', function () {
        $('.light-box').removeClass('is-active');
    });
}

function parallaxImg() {
    $(window).mousemove(function(event) {
        $("#parallax-img").css({"-webkit-transform": "translate(-" +event.pageX/25+ "px, -"+event.pageY/25+"px)"});
    });
}