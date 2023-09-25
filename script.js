
$(function () {
  
  $(".saveBtn").on("click", function () {
    
    // Get the ID of the parent time-block element
    var timeBlockId = $(this).closest(".time-block").attr("id");
    // Get the user input 
    var userInput = $(this).siblings(".description").val();
    // Save the user input in local storage 
    localStorage.setItem(timeBlockId, userInput);
  });
  
  var currentHour = dayjs().format('HH');

// Loop through each time-block div
var timeBlocks = document.getElementsByClassName("time-block");
for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  var hour = parseInt(timeBlock.id.split("-")[1]);

  // Compare the hour with the current hour 
  if (hour < currentHour) {
    timeBlock.classList.add("past");
    timeBlock.classList.remove("present");
    timeBlock.classList.remove("future");
  } else if (hour == currentHour) {
    timeBlock.classList.remove("past");
    timeBlock.classList.add("present");
    timeBlock.classList.remove("future");
  } else {
    timeBlock.classList.remove("past");
    timeBlock.classList.remove("present");
    timeBlock.classList.add("future");
  }
}

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");

    // Get the user input from local storage 
    var storedInput = localStorage.getItem(timeBlockId);

    // Set the stored input 
    $(this).find(".description").val(storedInput);
  });
  
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");

  // Display the current date 
  $("#currentDay").text(currentDate);

  

});
