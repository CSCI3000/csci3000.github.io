let timerId = setTimeout(showHoliday, 3000);
let endTimer = clearTimeout(timerId);
function showHoliday() {
   let holiday  = document.getElementById("holiday");
   holiday.style.display = "block";
}


