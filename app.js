var totalSeconds;
var interval;
var playStop = false;

$('#playStop').on('click', function(){
	if (playStop === true){
		clearInterval(interval);
		playStop = false;
	}
	else if(playStop === false){
		play();
	}
});

$('#reset').on('click', function(){
	totalSeconds = parseInt($('#inputHours').val(), 10) * 3600 + parseInt($('#inputMinutes').val(), 10) * 60 + parseInt($('#inputSeconds').val(), 10);
	play();
});

$('#save').on('click', function(){
	totalSeconds = parseInt($('#inputHours').val(), 10) * 3600 + parseInt($('#inputMinutes').val(), 10) * 60 + parseInt($('#inputSeconds').val(), 10);
	console.log(totalSeconds);
	play();
});

function play(){
	interval = setInterval(function(){
		playStop = true;
		$('#hours').text(Math.floor(totalSeconds / 3600));
		$('#minutes').text(Math.floor((totalSeconds % 3600) / 60));
		$('#seconds').text(totalSeconds % 3600 % 60 );
		totalSeconds --;
		if(totalSeconds < 0){
			clearInterval(interval);
			playStop = false;
		}
	}, 1000);
}