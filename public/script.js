var clientId = '933bc67dd9ff18eab500e8992a6b6a5f', 
    web = $('#container');

$(document).ready(function() {
  myTrack= "https://api.soundcloud.com/tracks/85758018";
  audioPlayer = new Audio(myTrack + '/stream?client_id=' + clientId);
});

$('#play').on('click', function() {
    audioPlayer.play();
  	$(audioPlayer).bind('timeupdate', updateTime);
    web.addClass( "playing" );
});

var updateTime = function () { 
    var thisPlayer = $(this);
    var widthOfProgressBar = Math.floor((100 / this.duration) * this.currentTime);
    $('#songIdForPorgessBar').css({
        'width': widthOfProgressBar + '%'
    });
}