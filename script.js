
// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
$(function() {
  var currentTime = dayjs();

  var currentDay = document.querySelector("#currentDay");
  currentDay.textContent = currentTime.format("dddd MMMM D, h:mm A");

  var timeBlocks = document.querySelectorAll(".time-block");
  timeBlocks.forEach((timeBlock) => {
    var hour = parseInt(timeBlock.id.split("-")[1]);
    if (hour < currentTime.hour()) {
      timeBlock.classList.add("past");
    } else if (hour === currentTime.hour()) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });

  var saveButtons = document.querySelectorAll(".saveBtn");
  saveButtons.forEach((saveButton) => {
    saveButton.addEventListener("click", () => {
      var inputArea = saveButton.previousElementSibling;
      var inputValue = inputArea.value;
      var hour = saveButton.parentElement.id.split("-")[1];
      localStorage.setItem(hour, inputValue);
      var newTimeBlock = saveButton.parentElement.cloneNode(true);
      newTimeBlock.id = "hour-" + (parseInt(hour) + 1);
      var newInputArea = newTimeBlock.querySelector(".description");
      newInputArea.value = "";
      document.querySelector("#time-blocks").appendChild(newTimeBlock);
    });
  });

  for (var i = 9; i <= 17; i++) {
    var savedInput = localStorage.getItem(i);
    var inputArea = document.querySelector("#hour-" + i + " .description");
    if (savedInput) {
      inputArea.value = savedInput;
    }
  }
});


  
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
 


  
  
  
  
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
  

  
//  // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
  




  
//   // TODO: Add code to display the current date in the header of the page.
//         var currentDate = dayjs().format('MMMM D, YYYY');
//         $('#currentDay').text('The Current Date is ' + currentDate);
        

