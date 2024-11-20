

//function showDateTime(fname,lname) {const current = new Date(); const datestring = current.toLocaleString();document.getElementById('showtime').textContent = "Current Date and Time: " + datestring;}//*

function myFunction(fname,lname){
    const date=new Date();
    const timestring=date.toLocaleString();

    document.getElementById('showtime').textContent= "Current time and date" + timestring;
}

