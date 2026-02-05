// EVENT HANDLING
document.getElementById("calculateBtn")?.addEventListener("click", function () {

  // DOM MANIPULATION
  const name = document.getElementById("name").value.trim();
  const marks = document.querySelectorAll(".mark");
  const message = document.getElementById("message");

  // VALIDATION
  const pattern = /^[A-Za-z\s]+$/;
  if (!pattern.test(name)) {
    message.textContent = "Enter valid name (letters only)";
    message.style.color = "red";
    return;
  }

  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    let value = marks[i].value;

    if (value === "" || value < 0 || value > 100) {
      message.textContent = "Marks must be between 0 - 100";
      message.style.color = "red";
      return;
    }

    total += Number(value);
  }

  // FUNCTION
  function calculateAverage(total, count) {
    return total / count;
  }

  const avg = calculateAverage(total, marks.length);

  // CONDITIONS
  let grade = "";
  if (avg >= 80) grade = "A";
  else if (avg >= 60) grade = "B";
  else if (avg >= 40) grade = "C";
  else grade = "Fail";

  // REAL-LIFE SCENARIO
  localStorage.setItem("studentName", name);
  localStorage.setItem("totalMarks", total);
  localStorage.setItem("average", avg.toFixed(2));
  localStorage.setItem("grade", grade);

  window.location.href = "result.html";
});


// RESULT PAGE OUTPUT
if (document.getElementById("output")) {
  const name = localStorage.getItem("studentName");
  const total = localStorage.getItem("totalMarks");
  const avg = localStorage.getItem("average");
  const grade = localStorage.getItem("grade");

  document.getElementById("output").innerHTML =`
    <b>${name}</b> | Total: ${total} | Avg: ${avg} | Grade: ${grade}`;
}