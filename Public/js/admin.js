// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
const questionSelect = document.getElementById("questionSelect");
const questionContainer = document.getElementById("q/a");

questionSelect.addEventListener("change", (e) => {
  const count = parseInt(e.target.value);
  let data = "";
  for (let i = 1; i <= count; i++) {
    data += ` <div class="row choice-row">
                    <div class="col-md-12 mt-3 mb-3">
                        <input type="text" placeholder="Question ${i}" class="form-control" min="1" max="10" id="validationCustom03" value=""
                            required>
                        <div class="invalid-feedback">
                            Please enter the question.
                        </div>
                    </div>
                    <div class="col-md-3 d-flex">
                        <input type="radio" class="choice-radio" onchange="assignValue(this)" name="answer${i}" required>
                        <input type="text" class="form-control" min="1" max="10" id="validationCustom03" value=""
                            required>
                        <div class="invalid-feedback w-100">
                            Please enter the choice.
                        </div>
                    </div>
                    <div class="col-md-3 d-flex">
                        <input type="radio" class="choice-radio" onchange="assignValue(this)" name="answer${i}" required>
                        <input type="text" class="form-control" min="1" max="10" id="validationCustom03" value=""
                            required>
                        <div class="invalid-feedback w-100">
                            Please enter the choice.
                        </div>
                    </div>
                    <div class="col-md-3 d-flex">
                        <input type="radio" class="choice-radio" onchange="assignValue(this)" name="answer${i}" required>
                        <input type="text" class="form-control" min="1" max="10" id="validationCustom03" value=""
                            required>
                        <div class="invalid-feedback w-100">
                            Please enter the choice.
                        </div>
                    </div>
                    <div class="col-md-3 d-flex">
                        <input type="radio" class="choice-radio" onchange="assignValue(this)" name="answer${i}" required>
                        <input type="text" class="form-control" min="1" max="10" id="validationCustom03" value=""
                            required>
                        <div class="invalid-feedback w-100">
                            Please enter the choice.
                        </div>
                    </div>
                </div>`;
  }
  questionContainer.innerHTML = data;
});

function assignValue(val) {
  const answer = val.nextElementSibling.value;
  val.value = answer;
}
