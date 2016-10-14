var totalSeconds;
var interval;
var playStop = false;

	//Au clic sur le bouton Play/Stop, on change le status du bouton
$('#playStop').on('click', function(){
	if (playStop === true){
		clearInterval(interval);
		playStop = false;
		buttonPlay();
	}
	else if(playStop === false){
		buttonStop();
		play();
	}
});

	// Au clic sur le bouton Reset on repart avec les valeurs de l'user
$('#reset').on('click', function(){
	totalSeconds = parseInt($('#inputHours').val(), 10) * 3600 + parseInt($('#inputMinutes').val(), 10) * 60 + parseInt($('#inputSeconds').val(), 10);
});

	// Au clic sur Save, on lance le compte à rebours avec les valeurs de l'user
$('#save').on('click', function(){
	clearInterval(interval);
	totalSeconds = parseInt($('#inputHours').val(), 10) * 3600 + parseInt($('#inputMinutes').val(), 10) * 60 + parseInt($('#inputSeconds').val(), 10);
	if (totalSeconds){
		play();
	}
});

	// Démarre le compte à rebours
function play(){
	interval = setInterval(function(){
		playStop = true;
		buttonStop();
		$('#hours').text(addZero(Math.floor(totalSeconds / 3600)));
		$('#minutes').text(addZero(Math.floor((totalSeconds % 3600) / 60)));
		$('#seconds').text(addZero(totalSeconds % 3600 % 60));
		totalSeconds --;

		if(totalSeconds < 0){
			clearInterval(interval);
			playStop = false;
		}
	}, 1000);
}

	// Transformer le bouton Play/Stop en Play
function buttonPlay(){
	$('#playStop').text('Play');
	$('#playStop').removeClass('red').addClass('green');
}

	// Transformer le bouton Play/Stop en Stop
function buttonStop(){
	$('#playStop').text('Stop');
	$('#playStop').removeClass('green').addClass('red');
}

	// Ajouter un 0 devant les chiffres inférieurs à 10
function addZero(nombre){
	if(nombre < 10 ) {
		nombre = '0' + nombre;
	}
	return nombre;
}