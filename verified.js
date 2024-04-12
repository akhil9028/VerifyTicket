console.log("value = " + totalFare);
var urlParams = new URLSearchParams(window.location.search);
var totalFare = urlParams.get("totalFare");
var tickets = urlParams.get("tickets");
var idd = urlParams.get("id");
var time = urlParams.get("time");

var currentDate = new Date();

var dateString = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
var timeString = currentDate.toLocaleTimeString("en-US");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("totalFare").textContent = totalFare;
  document.getElementById("bus-id").textContent = idd;
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = dateString;
  document.getElementById("tickets").textContent = tickets;

  console.log("totalFare = " + totalFare);
});
