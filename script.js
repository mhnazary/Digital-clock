let hours = document.getElementById('hour')
let minutes = document.getElementById('minute')
let seconds = document.getElementById('seconds')

function addedTime() {
    let time = new Date();
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    hours.innerHTML = hour
    minutes.innerHTML = minute
    if (second <10 ) {
        second = '0' + second  
    }else {
        second = second
    }
    seconds.innerHTML = second
    console.log('Hello world');
}

setInterval(addedTime, 1000)