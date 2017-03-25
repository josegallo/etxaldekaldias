<script>

// home
jQuery(document).ready(function($){

	//get windows height
	var windowHeight = $(window).height();
	//console.log(windowHeight);
	//make height container = windows height
	$("div#Container-Etxalde-1").css({ "height":windowHeight});

	//padding fit auto height Text-video-home-1
	var tetxHeight = $("div#Text-video-home-1").outerHeight();
	//console.log(tetxHeight);
	var deltaPadding = (windowHeight/2) - (tetxHeight/2);
	//console.log(deltaPadding);
	$("div#Text-video-home-1").css({ "margin-top": deltaPadding + "px"});

	//hide when scroll
	$(window).scroll(function() {

    if ($(this).scrollTop()>0)
    {
        $('div#Text-video-home-1').hide();
        //console.log("scrollTop > 0");
    }
 	});

	if ($(window).width() > 770) {
	 	//hide after seconds
	 	$('div#Text-video-home-1').delay(4000).fadeOut(400);
 	} else {
 		$('div#Text-video-home-1').hide();
 	}

}); 	

//bioseguridad
jQuery(document).ready(function($){
	//get windows height
	var windowHeight = $(window).height();
	//console.log(windowHeight);
	//make height container = windows height
	$("div#Container-Etxalde-2").css({ "height":windowHeight});

	//padding fit auto height Text-video-home-1
	var tetxHeight2 = $("div#Text-video-bioseguridad").outerHeight();
	//console.log(tetxHeight2);
	var deltaPadding = (windowHeight/2) - (tetxHeight2/2);
	//console.log(deltaPadding);
	$("div#Text-video-bioseguridad").css({ "margin-top": deltaPadding + "px"});

	//hide when scroll
	$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('div#Text-video-bioseguridad').hide();
     }
 	});

 	if ($(window).width() > 770) {
 	//hide after seconds
 	$('div#Text-video-bioseguridad').delay(4000).fadeOut(400)
	} else {
		$('div#Text-video-bioseguridad').hide();
	}

}); 	

</script>