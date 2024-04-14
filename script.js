const currentDate = new Date();
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

monthNameEl.innerText = currentDate.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = currentDate.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = currentDate.getDate();

yearEl.innerText = currentDate.getFullYear();
