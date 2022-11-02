let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");
// لا تقم بتغيير او تخريب الكود الموجود فوق هذا الكومنت

// طبّق الخطوة 4 في أسفل هذا الكومنت
console.log(grades.pop())
console.log(grades);
// طبّق الخطوة 5 في أسفل هذا الكومنت
console.log(grades.push(99));
console.log(grades);
// طبّق الخطوة 6 أسفل هذا الكومنت
for (let index = 0; index < grades.length; index++) {
  const element = grades[index];
  all_grades_div.innerHTML += `<div>${element}</div>`
}
// grades.forEach(grade => {
// all_grades_div.innerHTML += `<div>${grade}</div>`
// });

function search() {
  let inputValue = document.getElementById("input").value;
  // طبّق الخطوة 7 أسفل هذا الكومنت
  let filteredGrades = grades.filter((grade) => grade == inputValue);
  let result = search_grades_div.innerHTML = `<div>${filteredGrades}</div>`;
  if (filteredGrades != inputValue) {
    console.log("The grade is not found")
    search_grades_div.innerHTML = `<div>${"no value"}</div>`;
  }
}

// طبّق الخطوة 8 و 9 أسفل هذا الكومنت
let randomIndex = Math.floor(Math.random()* grades.length);

// طبّق الخطوة 10 أسفل هذا الكومنت
function random() {
  random_grade_div.innerHTML = `<div>${grades[randomIndex]}</div>`
}

