var mouse=setInterval(myTimer,1000);
function myTimer(){
    var time = new Date();
    document.querySelector(".demo").innerHTML=time.toLocaleTimeString();
}