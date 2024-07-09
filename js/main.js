const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const miliseconds = now.getMilliseconds(); //1000 miliseconds per second
  const seconds = now.getSeconds(); //60 seconds per minute
  const minutes = now.getMinutes(); //60 minutes per hour
  const hours = now.getHours();   //24 hours per day

  //SET SECOND HAND DEGREES - CORRECTED FOR STARTING AT 90 DEGREES
  const secondsDegrees = (seconds / 60) * 360;
  const milisecondsDegrees = ((miliseconds/1000) / 60) * 360;
 
  secondHand.style.transform = `rotate(${secondsDegrees + milisecondsDegrees}deg)`;
  // console.log(`hora: ${seconds}, degrees: ${secondsDegrees}`);
  
  // console.log(`miliseconds: ${miliseconds/1000}, degrees: ${milisecondsDegrees}`);


  //SET MINUTE HAND
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // console.log(`hora: ${minutes}`);

  //SET HOUR HAND
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // console.log(`hora: ${hours}`);
}

setInterval(setDate, 100); //10 cycles per second refresh == 10hz (100 ms)
