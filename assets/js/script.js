// variable containing the current date
var currentDate = moment();

var currentHour = currentDate.hour();

var displayDate = moment().format("dddd, MMMM Mo");

$("#currentDay").text(displayDate);


// set of if else if statements to check whether the hour is before, after, or current
if (currentHour > 5) {
    $(".five-am")
        .addClass("past");
} else if (currentHour < 5) {
    $(".five-am")
        .addClass("future");
} else {
    $(".five-am")
        .addClass("present");
};

if (currentHour > 6) {
    $(".six-am")
        .addClass("past");
} else if (currentHour < 6) {
    $(".six-am")
        .addClass("future");
} else {
    $(".six-am")
        .addClass("present");
};

if (currentHour > 7) {
    $(".seven-am")
        .addClass("past");
} else if (currentHour < 7) {
    $(".seven-am")
        .addClass("future");
} else {
    $(".seven-am")
        .addClass("present");
};

if (currentHour > 8) {
    $(".eight-am")
        .addClass("past");
} else if (currentHour < 8) {
    $(".eight-am")
        .addClass("future");
} else {
    $(".eight-am")
        .addClass("present");
};

if (currentHour > 9) {
    $(".nine-am")
        .addClass("past");
} else if (currentHour < 9) {
    $(".nine-am")
        .addClass("future");
} else {
    $(".nine-am")
        .addClass("present");
};

if (currentHour > 10) {
    $(".ten-am")
        .addClass("past");
} else if (currentHour < 10) {
    $(".ten-am")
        .addClass("future");
} else {
    $(".ten-am")
        .addClass("present");
};

if (currentHour > 11) {
    $(".eleven-am")
        .addClass("past");
} else if (currentHour < 11) {
    $(".eleven-am")
        .addClass("future");
} else {
    $(".eleven-am")
        .addClass("present");
};

if (currentHour > 12) {
    $(".noon")
        .addClass("past");
} else if (currentHour < 12) {
    $(".noon")
        .addClass("future");
} else {
    $(".noon")
        .addClass("present");
};

if (currentHour > 13) {
    $(".one-pm")
        .addClass("past");
} else if (currentHour < 13) {
    $(".one-pm")
        .addClass("future");
} else {
    $(".one-pm")
        .addClass("present");
};

if (currentHour > 14) {
    $(".two-pm")
        .addClass("past");
} else if (currentHour < 14) {
    $(".two-pm")
        .addClass("future");
} else {
    $(".two-pm")
        .addClass("present");
};

if (currentHour > 15) {
    $(".three-pm")
        .addClass("past");
} else if (currentHour < 15) {
    $(".three-pm")
        .addClass("future");
} else {
    $(".three-pm")
        .addClass("present");
};

if (currentHour > 16) {
    $(".four-pm")
        .addClass("past");
} else if (currentHour < 16) {
    $(".four-pm")
        .addClass("future");
} else {
    $(".four-pm")
        .addClass("present");
};


if (currentHour > 17) {
    $(".five-pm")
        .addClass("past");
} else if (currentHour < 17) {
    $(".five-pm")
        .addClass("future");
} else {
    $(".five-pm")
        .addClass("present");
}
