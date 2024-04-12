console.log("value = " + totalFare);
var urlParams = new URLSearchParams(window.location.search);
var sum = urlParams.get("sum");
var totalFare = urlParams.get("totalFare");
var tickets = urlParams.get("tickets");
var idd;
var time = urlParams.get("time");

var currentDate = new Date();

var dateString = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
var timeString = currentDate.toLocaleTimeString("en-US");

var sum = totalFare;

var num = Number(sum);

var num = parseInt(sum);

idd = num % 1000;
num = num / 1000;
tickets = Math.floor(num % 100);

if (tickets >= 10 && tickets < 20) {
  fare = num / 100;
} else if (tickets > 20) {
  tickets = tickets % 10;
  fare = num / 100;
} else {
  fare = num / 10;
}
fare = Math.floor(fare);

console.log(idd);
console.log(tickets);
console.log(fare);

console.log(idd);
console.log(totalFare);
console.log(tickets);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("totalFare").textContent = fare;
  document.getElementById("bus-id").textContent = idd;
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = dateString;
  document.getElementById("tickets").textContent = tickets;

  console.log("totalFare = " + totalFare);
});
