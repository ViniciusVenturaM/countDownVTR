var countDownDate = new Date("Dec 05, 2022 08:00:00").getTime();


var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;


    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days + " dias "
    document.getElementById("hours").innerHTML = hours + " horas "
    document.getElementById("mins").innerHTML = minutes + " minutos e "
    document.getElementById("secs").innerHTML = seconds + " segundos "


    if (timeleft < 0) {
        clearInterval(myfunc);

        let dateInfos = Array.from(document.getElementsByClassName("dateInfo"));
        console.log(dateInfos[1]);

        for (let i = 0; i < 4; i++) {
            dateInfos[i].style.display = "none";
        }
        document.getElementById("end").innerHTML = "VTR NO DEV!";
    }
}, 1000);