var urlParams = new URLSearchParams(window.location.search);
var totalFare = urlParams.get("totalFare");
var tickets = urlParams.get("tickets");
var idd = urlParams.get("id");
console.log("value = " + totalFare);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("passPrice").textContent = totalFare;
  document.getElementById("bus-id").textContent = idd;
  // document.getElementById("time").textContent = timeString;
  // document.getElementById("date").textContent = dateString;
  document.getElementById("tickets").textContent = tickets;

  console.log("totalFare = " + totalFare);
});
