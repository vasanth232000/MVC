const fieldsets = document.querySelectorAll("fieldset");
const nextButton = document.querySelectorAll(".nextButton");
const prevButton = document.querySelectorAll(".prevButton");
const submitBtn = document.getElementById("submitBtn");
const quizForm = document.getElementById("quizForm");
const currentQue = document.getElementById("currentQue");

Object.values(nextButton).map((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let currentElement;
    let passed = false;
    Object.values(fieldsets).map((item) => {
      if (item.classList.contains("question-active")) {
        currentElement = item;
      }
    });
    Object.values(currentElement.elements).map((item) => {
      if (item.checked) {
        passed = true;
        currentQue.innerHTML = parseInt(currentQue.innerHTML) + 1;
        currentElement.classList.remove("question-active");
        currentElement.nextElementSibling.classList.add("question-active");
      }
    });
    if (!passed) {
      Toastify({
        text: "Choose an option",
        position: "left",
        className: "info",
        style: {
          background:
            "linear-gradient( 70deg, rgb(188,52,62) 0%, rgb(240,70,81) 100%)",
        },
      }).showToast();
    }
  });
});

Object.values(prevButton).map((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let currentElement;
    Object.values(fieldsets).map((item) => {
      if (item.classList.contains("question-active")) {
        currentElement = item;
      }
    });
    currentQue.innerHTML = parseInt(currentQue.innerHTML) - 1;
    currentElement.classList.remove("question-active");
    currentElement.previousElementSibling.classList.add("question-active");
  });
});

submitBtn.addEventListener("click", (e) => {
  let passed = false;
  e.preventDefault();
  let currentElement;
  Object.values(fieldsets).map((item) => {
    if (item.classList.contains("question-active")) {
      currentElement = item;
    }
  });
  Object.values(currentElement.elements).map((item) => {
    if (item.checked) {
      passed = true;
      quizForm.submit();
    }
  });
  if (!passed) {
    Toastify({
      text: "Choose an option",
      position: "left",
      className: "info",
      style: {
        background:
          "linear-gradient( 70deg, rgb(188,52,62) 0%, rgb(240,70,81) 100%)",
      },
    }).showToast();
  }
});
