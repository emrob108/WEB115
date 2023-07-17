var mealPlan = "";

function generateMealPlan() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var goal = document.getElementById("goal").value;
  var days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  var meals = days.map(function (day) {
    return {
      breakfast: document.getElementById(day + "Breakfast").value,
      snack1: document.getElementById(day + "Snack1").value,
      lunch: document.getElementById(day + "Lunch").value,
      snack2: document.getElementById(day + "Snack2").value,
      dinner: document.getElementById(day + "Dinner").value,
    };
  });

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  mealPlan =
    "<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<style>" +
    "table { width: 100%; margin: 1em 0; border-collapse: collapse; }" +
    "td, th { border: 1px solid #ddd; padding: 8px; }" +
    "</style>" +
    "</head>" +
    "<body>" +
    '<h1 style="font-family: monospace;">Meal Plan for ' +
    name +
    "</h1>" +
    '<p style="font-family: monospace;">Email: ' +
    email +
    "</p>" +
    '<p style="font-family: monospace;">Goal for the week: ' +
    goal +
    "</p>";
  days.forEach(function (day, i) {
    mealPlan +=
      '<h2 style="font-family: monospace;">' +
      day.charAt(0).toUpperCase() +
      day.slice(1) +
      "</h2>" +
      "<table>" +
      "<tr><th>Meal</th><th>Menu</th></tr>" +
      "<tr><td>Breakfast</td><td>" +
      meals[i].breakfast +
      "</td></tr>" +
      "<tr><td>Snack</td><td>" +
      meals[i].snack1 +
      "</td></tr>" +
      "<tr><td>Lunch</td><td>" +
      meals[i].lunch +
      "</td></tr>" +
      "<tr><td>Snack</td><td>" +
      meals[i].snack2 +
      "</td></tr>" +
      "<tr><td>Dinner</td><td>" +
      meals[i].dinner +
      "</td></tr>" +
      "</table>";
  });

  mealPlan += "</body></html>";
  var w = window.open();
  w.document.write(mealPlan);
  w.document.close();

  var downloadLink = document.getElementById("downloadlink");
  var blob = new Blob([mealPlan], { type: "text/html;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "mealplan.html";
  downloadLink.style.display = "block";
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function printPlan() {
  if (!mealPlan) {
    alert("No meal plan generated yet!");
    return;
  }
  var w = window.open();
  w.document.write(mealPlan);
  w.document.close();
  w.print();
}
