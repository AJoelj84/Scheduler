// Function to ensure page loads before Items are added
$(function() {
  
//Variable to call time display at top of Page 
  var currentTime = dayjs();
    var currentDay = document.querySelector('#currentDay');
      currentDay.textContent = currentTime.format('dddd MMMM D, h:mm A');

// Variable and Functions to Create Time Blocks based on a 6am to 9pm Schedule, Hours can be shortened or extened through the for section in containerEl 
  var containerEl = document.querySelector('.container-fluid');
  for (var hour = 6; hour <= 21; hour++) {
    var timeBlockEl = document.createElement('div');
      timeBlockEl.classList.add('row', 'time-block');
      timeBlockEl.id = 'hour-' + hour;
        containerEl.appendChild(timeBlockEl);
//Variable Changes the Time to an AM/PM format
    var timeInputEl = document.createElement('div');
      timeInputEl.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
      timeInputEl.textContent = dayjs().hour(hour).format('h A');
        timeBlockEl.appendChild(timeInputEl);
  
    var inputAreaEl = document.createElement('textarea');
      inputAreaEl.classList.add('col-8', 'col-md-10', 'description');
        timeBlockEl.appendChild(inputAreaEl);
    

    var savedText = localStorage.getItem('hour-' + hour);
    if (savedText) {
      inputAreaEl.value = savedText;
    }


//Save Button Variable Creates Save Button for Each Row 
    var saveButtonEl = document.createElement('button');
      saveButtonEl.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
      saveButtonEl.setAttribute('aria-label', 'save');
      saveButtonEl.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';
        timeBlockEl.appendChild(saveButtonEl);

//Variable to pull Saved Input to the Hour Blocks  
    if (hour < currentTime.hour()) {
      timeBlockEl.classList.add('past');
    } else if (hour === currentTime.hour()) {
      timeBlockEl.classList.add('present');
    } else {
      timeBlockEl.classList.add('future');
    }

    saveButtonEl.addEventListener('click', function() {
      var inputText = this.previousElementSibling.value;
      var hourId = this.parentElement.id;
// Local Storage Item Set
      localStorage.setItem(hourId, inputText);
    });
  }

// Window event listener to get the saved data to store in appropriate sections
  window.addEventListener('beforeunload', function() {
    for (var hour = 6; hour <= 21; hour++) {
      var inputAreaEl = document.querySelector('#hour-' + hour + ' textarea');
      var hourId = 'hour-' + hour;
      localStorage.setItem(hourId, inputAreaEl.value);
    }
  });
});