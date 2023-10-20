// Set a start date to count down to
var countDownDate = new Date("Feb 10, 2024 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    

    // Time calculations for days, hours, minutes and seconds
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="days"
    document.getElementById("days").innerHTML = day + "d " + hours + "h " + minutes + "m " + seconds + "s ";


    // If the count down is finished, make another countdown for the closing date
        if (distance < 0) {
            clearInterval(x);

            // Set a new end date to count down to
            var newCountDownDate = new Date("Feb 10, 2024 18:00:00").getTime();
            
            // Get today's date and time
            var newNow = new Date().getTime();

            // Find the distance between now and the new end date
            var newDistance = newCountDownDate - newNow;

            // Time Calculation for the new date
            var day = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="days"
            document.getElementById("days").innerHTML = day + "d " + hours + "h " + minutes + "m " + seconds + "s "
        
        } 


}, 1000);
