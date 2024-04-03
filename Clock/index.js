const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hrs = document.querySelector(".hr");

function timer()
{
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    let secDegree = ((second/60) * 360) + 90;
    let minDegree = ((minute/60) * 360) + 90;
    let hrsDegree = ((hour/60) * 360) + 90;
    sec.style.transform = `rotate(${secDegree}deg)`;
    min.style.transform = `rotate(${minDegree}deg)`;
    hrs.style.transform = `rotate(${hrsDegree}deg)`;
}

setInterval(timer , 1000);