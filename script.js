$(function(){


	var $divs = $("#container div");

	var $boxImg = $(document.createElement("img")).attr("src", "images/cover.png");

	$divs.each(function(index){
		
		var thisDiv = $(this);
		thisDiv.addClass("la").attr("id", "div"+index);

	});

	$divs.append($boxImg);

	/**
 	* Randomize array element order in-place.
 	* Using Fisher-Yates shuffle algorithm.
	*/

	var divArray = [8, 1, 3, 7, 6, 10, 5, 9, 2, 4, 11, 0];

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
    	    var j = Math.floor(Math.random() * (i + 1));
        	var temp = array[i];
        	array[i] = array[j];
        	array[j] = temp;
    	}
    	return array;
	}	 

	shuffleArray(divArray);

	var n=1;
	$("#div"+divArray[0]).css({"background-image":"url(images/"+n+".png)"});

	for (var i = 1; i < 12; i++) {
		
		if (n<6) {
			n=n+1;
		} else {
			n=1;
		}

		$("#div"+divArray[i]).css({"background-image":"url(images/"+n+".png)"});
	}


	var $divCntnr = $("#container");
	var $img = $("img");


	$img.on("click", function(event) {
		func1(event);
		});

	function func1(event) {

		$(event.target).addClass("clicked");

		//get .clicked array
		var clickedGrp = $(".clicked");

		var click1 = clickedGrp.eq(0).parent().css("background-image");
		var click2 = clickedGrp.eq(1).parent().css("background-image");

		// var divBg = $(event.target).parent().css("background-image");

		var numberClicked = $(".clicked").length;

		if (numberClicked>=2) {

			$("#lid").css({"display":"block"});

			if (click1 !== click2) {
				setTimeout(function(){
					$img.removeClass("clicked");
					$("#lid").css({"display":"none"});
				}, 1000);
			} else {
				clickedGrp.addClass("stay");
				$img.removeClass("clicked");
				$("#lid").css({"display":"none"});
			}
		}

		var completed = $(".stay").length;

		if (completed > 10 && numberClicked > 1) {
			$("p").css({"display":"block"});
		}
		
		console.log(event.target, numberClicked, completed);
	}

	// console.log($divs);

});












