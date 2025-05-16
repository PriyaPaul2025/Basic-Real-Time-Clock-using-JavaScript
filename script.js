//Created a function on which const now date the date and time from the system in 12/24 hr format, in the date we added the format
function updateDateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString({
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  // grab the html element by their id and updated the text with const time and date so that it will be visible on the browser
  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}
//added setinterval so that time is updated in every second
setInterval(updateDateTime, 1000);
//called the function
updateDateTime();
