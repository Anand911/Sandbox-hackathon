let mins=30;
let secs=0;

let dispsecs=0;
let dispmins=0;

let interval=null;
let status="stopped";

function pomodoro()
{
    if(secs===0)
      {
          secs=60;
          mins--;
      }
    if(mins===0)
      {
          mins=30;
          secs=0;
      }
    else
       secs--; 
    if(secs<10)
       dispsecs="0"+secs.toString();
    else
       dispsecs=secs;
    if(mins<10)
       dispmins="0"+mins.toString();
    else
       dispmins=mins;
    document.getElementById("display").innerHTML=dispmins+":"+dispsecs;
}

function startstop()
{
     if(status==="stopped")
       {
        interval=window.setInterval(pomodoro,1000);
         document.getElementById("startstop").innerHTML="STOP";
         status="started";
       }
     else
       {
           if(mins>0)
             pop()
       }
}
function reset()
{
    status="stopped";
    window.clearInterval(interval)
    mins=30;
    secs=0;
    document.getElementById("display").innerHTML="00:00";
    document.getElementById("startstop").innerHTML="START";
}
function stop()
{
    window.clearInterval(interval);
    status="stopped";
    document.getElementById("startstop").innerHTML="START";
    document.querySelector('.popup').style.display='none';
}
function pop()
{
    document.querySelector('.popup').style.display='flex';
}
function nice()
{
    document.querySelector('.popup').style.display='none';
}