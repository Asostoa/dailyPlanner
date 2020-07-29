
var update = function () {
  document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM Do YYYY, H:mm:ss a');
}
setInterval(update, 1000);

$(".save").on("click", function () {

  var input = $(this).prev().val();
  var hour = $(this).prev().attr("id");

  localStorage.setItem(hour, input);
  console.log(hour)
});

// Setting input area for each hour to local storage
$(".text-entry1").val(localStorage.getItem("9am"));
$(".text-entry2").val(localStorage.getItem("10am"));
$(".text-entry3").val(localStorage.getItem("11am"));
$(".text-entry4").val(localStorage.getItem("12pm"));
$(".text-entry5").val(localStorage.getItem("1pm"));
$(".text-entry6").val(localStorage.getItem("2pm"));
$(".text-entry7").val(localStorage.getItem("3pm"));
$(".text-entry8").val(localStorage.getItem("4pm"));
$(".text-entry9").val(localStorage.getItem("5pm"));
$(".text-entry10").val(localStorage.getItem("6pm"));
$(".text-entry11").val(localStorage.getItem("7pm"));


if ((moment().format("H")) > 9) {
  $(".calendar-row1").addClass("past");
} else if ((moment().format("H")) < 9) {
  $(".calendar-row1").addClass("future");
} else if ((moment().format("H")) == 9) {
  $(".calendar-row1").addClass("present");
} else {
}
if ((moment().format("H")) > 10) {
  $(".calendar-row2").addClass("past");
} else if ((moment().format("H")) < 10) {
  $(".calendar-row2").addClass("future");
} else if ((moment().format("H")) == 10) {
  $(".calendar-row2").addClass("present");
} else {
}
if ((moment().format("H")) > 11) {
  $(".calendar-row3").addClass("past");
} else if ((moment().format("H")) < 11) {
  $(".calendar-row3").addClass("future");
} else if ((moment().format("H")) == 11) {
  $(".calendar-row3").addClass("present");
} else {
}
if ((moment().format("H")) > 12) {
  $(".calendar-row4").addClass("past");
} else if ((moment().format("H")) < 12) {
  $(".calendar-row4").addClass("future");
} else if ((moment().format("H")) == 12) {
  $(".calendar-row4").addClass("present");
} else {
}
if ((moment().format("H")) > 13) {
  $(".calendar-row5").addClass("past");
} else if ((moment().format("H")) < 13) {
  $(".calendar-row5").addClass("future");
} else if ((moment().format("H")) == 13) {
  $(".calendar-row5").addClass("present");
} else {
}
if ((moment().format("H")) > 14) {
  $(".calendar-row6").addClass("past");
} else if ((moment().format("H")) < 14) {
  $(".calendar-row6").addClass("future");
} else if ((moment().format("H")) == 14) {
  $(".calendar-row6").addClass("present");
} else {
}
if ((moment().format("H")) > 15) {
  $(".calendar-row7").addClass("past");
} else if ((moment().format("H")) < 15) {
  $(".calendar-row7").addClass("future");
} else if ((moment().format("H")) == 15) {
  $(".calendar-row7").addClass("present");
} else {
}
if ((moment().format("H")) > 16) {
  $(".calendar-row8").addClass("past");
} else if ((moment().format("H")) < 16) {
  $(".calendar-row8").addClass("future");
} else if ((moment().format("H")) == 16) {
  $(".calendar-row8").addClass("present");
} else {
}
if ((moment().format("H")) > 17) {
  $(".calendar-row9").addClass("past");
} else if ((moment().format("H")) < 17) {
  $(".calendar-row9").addClass("future");
} else if ((moment().format("H")) == 17) {
  $(".calendar-row9").addClass("present");
} else {
}

$(".delete").on("click", function () {

  var input = $(this).prev().val();
  var hour = $(this).prev().attr("id");

  localStorage.removeItem(hour);
  console.log(hour)
});
