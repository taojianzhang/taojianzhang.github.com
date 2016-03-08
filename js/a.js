
waitForJQuery();


function imim(){
   $('#the_footer').remove();
   var vbid = $("body").attr("vbid");
   $.get("http://0.0.0.0/serve_footer?vbid=" + vbid,function(footer){
	   $("body").append(footer);
	   $('#the_footer').height(1).show().delay(1000).animate({
		    height: 75,
		  }, 2000, function() {
				$('#the_footer #submit_footer').click(function (){
						$('.paypal-form .username').val($("body").attr("vbid"));
						$('.paypal-form .vbid').val($("body").attr("vbid"));
						$('.paypal-form').submit();
				});
		  });
   });
}

function waitForJQuery() {
    if (window.$){
    	$(document).ready(function () {
    		imim();
    	});
    } else {
        setTimeout(waitForJQuery, 200);
    }
}
