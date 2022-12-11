var holidayMessage = document.getElementById("holiday");
let msg = setTimeout(showMsg, 3000);
holidayMessage.addEventListener('click', clearinterval(msg));

function showMsg() {
    holidayMessage.style.visibility;
}