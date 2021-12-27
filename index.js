let a;
let date;
let time;
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString('en-US', options);
    time = ('0'+a.getHours()).slice(-2) + ":" + ('0'+a.getMinutes()).slice(-2) + ":" + ('0'+a.getSeconds()).slice(-2);
    document.getElementById("time").innerHTML = time + '<br>on ' + date;
}, 1000);