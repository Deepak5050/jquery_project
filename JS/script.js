$(document).ready(function(){
	var newDiv;
	var i = 1;
	for (; i <= 256; i++){
		newDiv = $('<div class="makeGrid"></div>').html(i);;
		$('#gridWrapper').append(newDiv);
	};

	$(document).on('mouseover', '.makeGrid', function(){
		$(this).addClass('hoverEffect');
	});

	$('#btn').click(function(){
		var userInput, toNumber, totalDiv, newDiv, i;
		userInput = prompt("Enter a number", "16");
		toNumber = parseInt(userInput);
		totalDiv = toNumber * toNumber;
		i = 1;
		$('.makeGrid').remove();
		if(toNumber === 0 || isNaN(toNumber)){
			var userInput2 = prompt("Please enter a valid number")
			toNumber2 = parseInt(userInput2);
			totalDiv2 = toNumber2 * toNumber2;
			count = 1;
			for(; count <= totalDiv2 ; count++){
			newDiv = $('<div class="makeGrid"></div>').html(count);
			$('#gridWrapper').append(newDiv);
		};

		} else {
		for(; i <= totalDiv ; i++){
			newDiv = $('<div class="makeGrid"></div>').html(i);
			$('#gridWrapper').append(newDiv);
		};
	};
	});
});