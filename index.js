let userAge = {
  ageDay: 0,
  ageMonth: 0,
  ageYear: 0
}

// To get current date
let today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

// Get user inputs


// To set submit button
const submitButton = document.querySelector('.js-submit-button');

// When submit button is clicked
submitButton.addEventListener('click', () => {

  let maxDay;
  let validDay = false;
  let validMonth = false;
  let validYear = false;

  let inputDay = Number(document.getElementById('day').value);
  let inputMonth = Number(document.getElementById('month').value);
  let inputYear = Number(document.getElementById('year').value);

  // Reset errors
  document.querySelector('.js-text-year').classList.remove('invalid-top-text');
  document.querySelector('.js-input-year').classList.remove('invalid-user-input');
  document.querySelector('.js-year-error-message').classList.remove('display-error-message');

  document.querySelector('.js-text-month').classList.remove('invalid-top-text');
  document.querySelector('.js-input-month').classList.remove('invalid-user-input');
  document.querySelector('.js-month-error-message').classList.remove('display-error-message');

  document.querySelector('.js-text-day').classList.remove('invalid-top-text');
  document.querySelector('.js-input-day').classList.remove('invalid-user-input');
  document.querySelector('.js-day-error-message').classList.remove('display-error-message');

  document.querySelector('.js-age-years')
    .innerHTML = '--';
  document.querySelector('.js-age-months')
    .innerHTML =  '--';
  document.querySelector('.js-age-days')
    .innerHTML =  '--';

  // Validate input year
  if (inputYear > 0 && inputYear <= currentYear) {
    validYear = true;

  } else {
    document.querySelector('.js-text-year').classList.add('invalid-top-text');
    document.querySelector('.js-input-year').classList.add('invalid-user-input');
    document.querySelector('.js-year-error-message').classList.add('display-error-message');

  }

  // Validate input month
  if (inputMonth >= 1 && inputMonth <= 12) {
    validMonth = true;
    // Define the maximum days for each month
    if ([1, 3, 5, 7, 8, 10, 12].includes(inputMonth)) {
      maxDay = 31;

    } else if ([4, 6, 9, 11].includes(inputMonth)) {
      maxDay = 30;

    } else if (inputMonth === 2) {
      // Check for February considering leap years
      maxDay = (inputYear % 4 === 0 && (inputYear % 100 !== 0 || inputYear % 400 === 0)) 
      ? 29 
      : 28;

    }
  } else {
    document.querySelector('.js-text-month').classList.add('invalid-top-text');
    document.querySelector('.js-input-month').classList.add('invalid-user-input');
    document.querySelector('.js-month-error-message').classList.add('display-error-message');

  }

  // Validate input day
  if (inputDay >= 1 && inputDay <= maxDay) {
    validDay = true;

  } else {
    // Display error message or apply styles to indicate an invalid day
    document.querySelector('.js-text-day').classList.add('invalid-top-text');
    document.querySelector('.js-input-day').classList.add('invalid-user-input');
    document.querySelector('.js-day-error-message').classList.add('display-error-message');

  }

  // Calculate age after input validation
  if ((validYear && validMonth && validDay) === true) {
    userAge.ageYear = currentYear - inputYear;

    if (currentMonth >= inputMonth) {
      userAge.ageMonth = currentMonth - inputMonth;
    } else {
      userAge.ageYear--;
      userAge.ageMonth = 12 + currentMonth - inputMonth;
    }
  
    if (currentDay >= inputDay) {
      userAge.ageDay = currentDay - inputDay;
    } else {
      userAge.ageMonth--;
      userAge.ageDay = 31 + currentDay - inputDay;
    }
  
    if (userAge.ageMonth < 0) {
      userAge.ageMonth = 11;
      userAge.ageYear--;
    }
    
    // Display current age
    document.querySelector('.js-age-years')
      .innerHTML = String(userAge.ageYear).padStart(2, '0');
    document.querySelector('.js-age-months')
      .innerHTML =  String(userAge.ageMonth).padStart(2, '0');
    document.querySelector('.js-age-days')
      .innerHTML =  String(userAge.ageDay).padStart(2, '0');
  }
});
