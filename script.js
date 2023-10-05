//set date we're counting down to
var countDownDate = new Date("Dec 2, 2023 00:00:00").getTime();

//update the count down every 1 second
var countDownInterval = setInterval(function()
{
    //get today's date
    var now = new Date().getTime();

    //find distance between now & count down date 
    var distance = countDownDate - now;

    //calculate days, hours, minutes and seconds
    var days = Math.floor(distance/(1000 * 60 * 60 *24));
    var hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);
    //display count down
    document.getElementById("countdown").innerHTML = "<span>" + days + "d<span> " + hours + "h<span " + minutes + "m<span> " + "<span>" + seconds +"s<span>";

    if(distance < 0)
    {
        clearInterval(countDownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);