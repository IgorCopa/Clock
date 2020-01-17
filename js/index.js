let time = document.getElementById('tm');

const clock = () => {
    let dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    if(hrs<10){
        hrs=`0${hrs}`;
    }if(min<10){
        min=`0${min}`;
    }if(sec<10){
        sec=`0${sec}`;
    }

    let clk = `${hrs}:${min}:${sec}`;
    time.value = clk;
}

let int = setInterval(clock, 1000);