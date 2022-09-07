function getDate(){
    let date = new Date;
    let time = date.toTimeString();

    if (document.getElementById("Hours").selectedIndex == 0){ //{12 hours: 0; 24 hours: 1}
        if (date.getHours() > 12){
            hours = time.slice(0,2);
            hours = parseInt(hours) - 12;
            hours = String(hours).padStart(2, '0');
            time = hours += time.slice(2);
            time = time.slice(0,8) + " PM" + time.slice(8);
            console.log(hours);
        }
        else {
            time = time.slice(0,8) + " AM" + time.slice(8);
        }        
    }

    return [date.toDateString(), time];
}

function sendAlert(){
    let dateTime = getDate();
    document.getElementById("output").innerHTML='';
    alert(`Today is: ${dateTime[0]}\nThe time is: ${dateTime[1]}`);
}

function sendPage(){
    let dateTime = getDate();
    document.getElementById("output").innerHTML=
                                            `
                                            Today is: ${dateTime[0]} <br>
                                            The time is: ${dateTime[1]}
                                            `
}