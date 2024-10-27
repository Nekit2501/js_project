// const input1 = document.querySelector(".number-input1");
// const input2 = document.querySelector(".number-input2");
// const input3 = document.querySelector(".number-input3");
// const but1 = document.querySelector(".butt1");
// const form = document.querySelector(".form");
// const result = document.querySelector(".asd");

// form.addEventListener("submit", button);

// function button(e) {
//   e.preventDefault();
//   const in1 = input1.value;
//   const in2 = input2.value;
//   const in3 = input3.value;

//   const v = Math.max(in1, in2, in3);
//   console.log(v);
//   result.textContent = v;

//   //   console.log(in1, in2, in3);
// }

const input1 = document.querySelector(".number-input1");
const input2 = document.querySelector(".number-input2");
const input3 = document.querySelector(".number-input3");
const but1 = document.querySelector(".butt1");
const form = document.querySelector(".form");
const result = document.querySelector(".asd");
const error = document.querySelector(".error");

input1.addEventListener("input", in1);
input2.addEventListener("input", in2);
input3.addEventListener("input", in3);

function in1(params) {
  const in1 = input1.value;
  const in2 = input2.value;
  const in3 = input3.value;
  if ((in1, in2, in3)) {
    error.textContent = "";
  }
  if (in1 !== "" && in2 !== "" && in3 !== "") {
    // Math.max(in1, in2, in3)

    console.log(Math.max(in1, in2, in3));
  } else {
    error.textContent = "заповнiть всi поля";
    error.style.color = "red";
  }
}

function in2(params) {
  const in1 = input1.value;
  const in2 = input2.value;
  const in3 = input3.value;
  if ((in1, in2, in3)) {
    error.textContent = "";
  }
  if (in1 !== "" && in2 !== "" && in3 !== "") {
    // Math.max(in1, in2, in3)

    console.log(Math.max(in1, in2, in3));
  } else {
    error.textContent = "заповнiть всi поля";
    error.style.color = "red";
  }
}
function in3(params) {
  const in1 = input1.value;
  const in2 = input2.value;
  const in3 = input3.value;
  if ((in1, in2, in3)) {
    error.textContent = "";
  }
  if (in1 !== "" && in2 !== "" && in3 !== "") {
    // Math.max(in1, in2, in3)

    console.log(Math.max(in1, in2, in3));
  } else {
    error.textContent = "заповнiть всi поля";
    error.style.color = "red";
  }
}
