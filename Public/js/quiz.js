const fieldsets = document.querySelectorAll("fieldset");
const nextButton = document.querySelectorAll(".nextButton");
const prevButton = document.querySelectorAll(".prevButton");

Object.values(nextButton).map((item) => {
  let passed = false;
  item.addEventListener("click", () => {
    let currentElement;
    Object.values(fieldsets).map((item) => {
      if (item.classList.contains("question-active")) {
        currentElement = item;
      }
    });
    Object.values(currentElement.elements).map((item) => {
      if (item.checked) {
        passed = true;
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
  item.addEventListener("click", () => {
    let currentElement;
    Object.values(fieldsets).map((item) => {
      if (item.classList.contains("question-active")) {
        currentElement = item;
      }
    });
    currentElement.classList.remove("question-active");
    currentElement.previousElementSibling.classList.add("question-active");
  });
});
