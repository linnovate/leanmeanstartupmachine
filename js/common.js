var emailRegex = /\S+@\S+\.\S+/;
var telRegex = /^\d+$/;

$.fn.center = function() {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
}

function openLightbox(element) {
	$(".lightbox").removeClass("open").css('left', '-999px');
	$("." + element + ".lightbox").toggleClass("open").center();
	if (element == "form") $("." + element + ".lightbox").find("input").first().focus();
}

function changeNinja(input, haldID){
	$(input).removeClass("invalid");
	$(".ninja-half").attr("src", "img/ninja-half-" + haldID + ".jpg");
}

function validate(input) {
	$(input).val($(input).val().trim());
	
	if ($(input).val() == "") {
		$(input).addClass("invalid");
	} else {
		switch ($(input).attr("type")) {
			case "email":
				if (!emailRegex.test($(input).val())) $(input).addClass("invalid");
				break;
			case "tel":
				if (!telRegex.test($(input).val())) $(input).addClass("invalid");
				break;
		}
	}
}

function saveLeadCallback(data){
	alert(data);
}

$(document).ready(function() {
	WebFontConfig = {
		google: {
			families: ['Quantico:400,700:latin']
		}
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();

	$(document).keydown(function(e) {
		switch (e.which) {
			case 27 /* esc */ :
				$(".lightbox").removeClass("open").css('left', '-999px');
				break;
				// case 77 /* m */ :
				// 	openLightbox('mongo');
				// 	break;
				// case 65 /* a */ :
				// 	openLightbox('angular');
				// 	break;
				// case 69 /* e */ :
				// 	openLightbox('express');
				// 	break;
				// case 78 /* n */ :
				// 	openLightbox('node');
				// 	break;
				// case 13 /* n */ :
				// 	openLightbox('form');
				// 	break;
		}
	});

	$(document).click(function() {
		$(".lightbox").removeClass("open").css('left', '-999px');
	});

	$(".close").click(function() {
		$(".lightbox").removeClass("open").css('left', '-999px');
	});

	$("#stack").click(function(e) {
		e.stopPropagation();

	});

	$(".lightbox").click(function(e) {
		e.stopPropagation();
	});

	$("#stack").find("li").click(function(e) {
		e.preventDefault();
		openLightbox($("a", this).attr('rel'));
	});

	$("#leadForm").submit(function(e) {
		if (leadForm.first_name.value && leadForm.last_name.value && leadForm.phone.value && leadForm.email.value && telRegex.test(leadForm.phone.value) && emailRegex.test(leadForm.email.value)) {
			//Post Form Data
			var url = "https://dev.linnovate.net/lead/new?callback=saveLeadCallback&key=6dc339490d7476bc0d51c901cef020832ae6f9d6&project_id=leads&" + $("#leadForm").serialize();
			$.ajax({
		        url: url, 
		        dataType: 'jsonp',
		        success: function(data){
		            //There is error in the redmine! json is invalid
		        }
		    });

			//Close lightbox
			$(".lightbox").removeClass("open").css('left', '-999px');

			//Open lightbox
			openLightbox("success");

			//Clearing the form
			$("input[type=text], input[type=email], input[type=tel]").val("");
		}
		
		//Prevent form submission
		e.preventDefault();
	});
});