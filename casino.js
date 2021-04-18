let value1=document.getElementById(`value1`)
let value2=document.getElementById(`value2`)
let value3=document.getElementById(`value3`)
let inputspeed=document.getElementById(`inputspeed`)
let startid=document.getElementById(`startid`)
let stopid=document.getElementById(`stopid`)
let values=[`🥳`,`😡`,`😂`,`🥶`,`🤮`,`🥳`,`😴`]
function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}
let animationid
let updateintervaltime=function(speed){
    if(speed==`0`){
        clearInterval(animationid)
    }
    else{
        animationid=setInterval(()=>{
            value1.innerText=getRandomValue()
            value2.innerText=getRandomValue()
            value3.innerText=getRandomValue()
        },1000/speed)
    }
}
inputspeed.onchange=function(event){
    startid.onclick=function(){
        document.documentElement.style.setProperty(`--speed`,event.target.value)
        updateintervaltime(event.target.value)
    }
}
stopid.onclick=function(){
    inputspeed.value=`0`
    document.documentElement.style.setProperty(`--speed`,0)
    updateintervaltime(0)
}