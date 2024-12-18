const toggleButton = document.getElementById("toggle-calendar");
const calendarDropdown = document.getElementById("calendar-dropdown");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");
const calendarTitle = document.getElementById("calendar-title");

toggleButton.addEventListener("click", () => {
  if (calendarDropdown.style.display === "block") {
    calendarDropdown.style.display = "none";
  } else {
    calendarDropdown.style.display = "block";
  }
});

document.addEventListener("click", (ev) => {
  if (
    !ev.target.closest(".datepicker-container")
  ) {
    calendarDropdown.style.display = "none";
  }
});

nextMonth.addEventListener("click", () => {
  if (calendarTitle.innerText === "December 2022"){
    calendarTitle.innerText = "January 2023";
  } else if (calendarTitle.innerText === "November 2022") {
    calendarTitle.innerText = "December 2022";
  } else {
    alert("STAP IT!");
  }
});

prevMonth.addEventListener("click", () => {
  if (calendarTitle.innerText === "December 2022"){
    calendarTitle.innerText = "November 2022";
  } else if (calendarTitle.innerText === "January 2023") {
    calendarTitle.innerText = "December 2022";
  } else {
    alert("STAP IT!");
  }
});