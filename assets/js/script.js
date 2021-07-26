// variable containing the current date
var currentDate = moment();

var currentHour = currentDate.hour();

var displayDate = moment().format("dddd, MMMM Do");


// displays the current date at the top of the screen
$("#currentDay").text(displayDate);

$(".time-block").each(function() {
    // selects the span of each child inside the hour class
    var scheduleTime = $(".hour span", this);

    // converts the span into an integer
    var scheduleHour = parseInt(scheduleTime.text());
    
    // checks to see if the current hour is greater, less than, or equal to the schedule hour
    if (currentHour > scheduleHour) {
        // if the currentHour is greater than the scheduleHour adds the class of past to the time-block
        $(this).addClass("past");
    } else if (currentHour < scheduleHour) {
        // if the currentHour is less than the scheduleHour adds the class of future to the time-block
        $(this).addClass("future");
    } else {
        // otherwise if the times are equal it adds the class of present to the time-block
        $(this).addClass("present");
    };
});


// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("fiveAm")) {
    localStorage.setItem("fiveAm", '');
} else {
    $(".five-am textarea").text(localStorage.getItem("fiveAm")) ;
}

$(".five-am .saveBtn").on("click", function(){
    var text = $(".five-am textarea").val();

    localStorage.setItem("fiveAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("sixAm")) {
    localStorage.setItem("sixAm", '');
} else {
    $(".six-am textarea").text(localStorage.getItem("sixAm")) ;
}

$(".six-am .saveBtn").on("click", function(){
    var text = $(".six-am textarea").val();

    localStorage.setItem("sixAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("sevenAm")) {
    localStorage.setItem("sevenAm", '');
} else {
    $(".seven-am textarea").text(localStorage.getItem("sevenAm")) ;
}

$(".seven-am .saveBtn").on("click", function(){
    var text = $(".seven-am textarea").val();

    localStorage.setItem("sevenAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("eightAm")) {
    localStorage.setItem("eightAm", '');
} else {
    $(".eight-am textarea").text(localStorage.getItem("eightAm")) ;
}

$(".eight-am .saveBtn").on("click", function(){
    var text = $(".eight-am textarea").val();

    localStorage.setItem("eightAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("nineAm")) {
    localStorage.setItem("nineAm", '');
} else {
    $(".nine-am textarea").text(localStorage.getItem("nineAm")) ;
}

$(".nine-am .saveBtn").on("click", function(){
    var text = $(".nine-am textarea").val();

    localStorage.setItem("nineAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("tenAm")) {
    localStorage.setItem("tenAm", '');
} else {
    $(".ten-am textarea").text(localStorage.getItem("tenAm")) ;
}

$(".ten-am .saveBtn").on("click", function(){
    var text = $(".ten-am textarea").val();

    localStorage.setItem("tenAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("elevenAm")) {
    localStorage.setItem("elevenAm", '');
} else {
    $(".eleven-am textarea").text(localStorage.getItem("elevenAm")) ;
}

$(".eleven-am .saveBtn").on("click", function(){
    var text = $(".eleven-am textarea").val();

    localStorage.setItem("elevenAm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("noon")) {
    localStorage.setItem("noon", '');
} else {
    $(".noon textarea").text(localStorage.getItem("noon")) ;
}

$(".noon .saveBtn").on("click", function(){
    var text = $(".noon textarea").val();

    localStorage.setItem("noon", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("onePm")) {
    localStorage.setItem("onePm", '');
} else {
    $(".one-pm textarea").text(localStorage.getItem("onePm")) ;
}

$(".one-pm .saveBtn").on("click", function(){
    var text = $(".one-pm textarea").val();

    localStorage.setItem("onePm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("twoPm")) {
    localStorage.setItem("twoPm", '');
} else {
    $(".two-pm textarea").text(localStorage.getItem("twoPm")) ;
}

$(".two-pm .saveBtn").on("click", function(){
    var text = $(".two-pm textarea").val();

    localStorage.setItem("twoPm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("threePm")) {
    localStorage.setItem("threePm", '');
} else {
    $(".three-pm textarea").text(localStorage.getItem("threePm")) ;
}

$(".three-pm .saveBtn").on("click", function(){
    var text = $(".three-pm textarea").val();

    localStorage.setItem("threePm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("fourPm")) {
    localStorage.setItem("fourPm", '');
} else {
    $(".four-pm textarea").text(localStorage.getItem("fourPm")) ;
}

$(".four-pm .saveBtn").on("click", function(){
    var text = $(".four-pm textarea").val();

    localStorage.setItem("fourPm", text);
});

// checks to see if there is an item in localstorage to display within the textarea to ensure the data persists
if (!localStorage.getItem("fivePm")) {
    localStorage.setItem("fivePm", '');
} else {
    $(".five-pm textarea").text(localStorage.getItem("fivePm")) ;
}

$(".five-pm .saveBtn").on("click", function(){
    var text = $(".five-pm textarea").val();

    localStorage.setItem("fivePm", text);
});