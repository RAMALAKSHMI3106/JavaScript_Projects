function showTime(){
const today=new Date();
const h=today.getHours();
const m=today.getMinutes();
const s=today.getSeconds();
const p=document.getElementById("period");
const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second"); 
const day=document.getElementById("dates");
day.innerHTML=today.toDateString();

if(h>=12){
    p.innerHTML="PM";
}else{
    p.innerHTML="AM";
} 
hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s; 
}
showTime();
setInterval(showTime,1000);
