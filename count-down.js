const daysEl = document.getElementById("days");
const secondsEl = document.getElementById("seconds");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");




const newYears = "25 Dec 2021";

function countdown () {
	 const newYearsDate = new Date(newYears);
	 const currentDate  = new Date();
    const totalseconds = (newYearsDate-currentDate)/1000;

    
    const days = Math.floor(totalseconds/3600/24);

    const seconds = Math.floor(totalseconds)%60;

    const hours = Math.floor((totalseconds / 3600) % 24);

    const minutes = Math.floor(totalseconds / 60) % 60;



   

daysEl.innerHTML = days;
secondsEl.innerHTML = seconds;
minutesEl.innerHTML = minutes;
hoursEl.innerHTML = hours;

	
}



countdown();
setInterval(countdown,1000);