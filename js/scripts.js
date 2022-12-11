let timerId = setTimeout(showHoliday, 3000);
clearTimeout(timerId);
function showHoliday() {
   let holiday  = document.getElementById("holiday");
   holiday.style.display = "block";
}


