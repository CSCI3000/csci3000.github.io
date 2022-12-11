var holidayMessage = document.getElementById("holiday");
let msg = setTimeout(showMsg,3000);
addEventListener('click',clearInterval(msg));
function showMsg(){
   holidayMessage.style.setProperty("visibility","visible");
}


   


