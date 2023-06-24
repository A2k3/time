function showDateTime() {
    var currentDate = new Date();

    var date = currentDate.toDateString();
    document.getElementById('date').textContent=`Date : ${date}`;

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var time = hours + " : "+ minutes + " : " + seconds;
    document.getElementById('time').textContent= `Time : ${time}`;

}

setInterval(showDateTime, 1000) ;

var audio = new Audio('assets/audio/mukile mukile.mp3');
var play = document.getElementById('play');
play.addEventListener('click', function(){
    audio.play();
})