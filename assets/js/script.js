// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// gets the todays date form dayjs library 
var today = dayjs();
// gets the current hour from dayjs library
var hour = dayjs().hour();
// gets the .saveBtn id  
var saveButtonEl = $(".saveBtn");
// $(document).ready will execute once the DOM is loaded 
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage

  // eventlistener on save button  
  saveButtonEl.on("click", function () {
    // sets the value of the currently clicked text to  the variable text 
    var text = $(this).siblings().eq(1).val();
    // sets the text of the currently clicked time to the variable time 
    var time = $(this).siblings().eq(0).text();
    console.log(time, text);
    // sets time and text to the  localStorage 
    localStorage.setItem(time, text); 

  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
   // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //  $('.time-block').each(function() {
  //getting the key we stored along with the text, to allow us to input the correct text into the row

  
    var timeBlock = $(".time-block");
    timeBlock.each(function () {
//  gets the time from time-block id and split around the hyphen
      var timeBlockHour = $(this).attr("id").split("-")[1];
      console.log(timeBlockHour);
      // adds future past and present classes to timeblocks 
      if (timeBlockHour > hour) {
        $(this).addClass("future");
      } else if (timeBlockHour < hour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("present");
      }
  // gets the text content of the element with class hour 
      var TimeText = $(this).find(".hour").text();
  // gets the textarea from the localstorge that matches the timetext
      var TextArea = localStorage.getItem(TimeText);
// sets the value of textarea 
      $(this).find("textarea").val(TextArea); 
  
    });
    console.log(hour);

 
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function () {
    // this function sets the currentday using day.js library 
    $("#currentDay").text(dayjs().format("MMM D, YYYY hh:mm:ss A"));
  }, 1000);
});
