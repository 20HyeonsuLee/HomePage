let SignUpButton = document.getElementById("SignUpButton");
let CancelButton = document.getElementById("CancelButton");
let id = document.getElementById("id");
let pw = document.getElementById("pw");
let pw_check = document.getElementById("pw-check");
let student_number = document.getElementById("student-number");
let phone_number = document.getElementById("phone-number");
let major = document.getElementById("major");

const regexPhoneNumber = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

function reset(msg, component) {
  alert("메일 형식을 확인해주세요.");
  component.value = "";
  component.focus();
}

id.addEventListener("change", function () {
  var re =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!re.test(id.value)) {
    reset("메일 형식을 확인해주세요.", id);
  }
});

pw_check.addEventListener("change", function () {
  if (pw.value !== pw_check.value) {
    reset("PW를 확인해주세요.", pw_check);
  }
});

student_number.addEventListener("change", function () {
  if (student_number.value.length != 10) {
    reset("학번 형식을 확인해주세요.", student_number);
  } else if (isNaN(student_number.value)) {
    reset("학번은 숫자로 입력해 주세요.", student_number);
  } else {
    let str = String(student_number.value).substring(5, 7);

    let data = JSON.parse(JSON.stringify(info));

    let majorData = data.find((v) => v.dept_nums.includes(str));

    if (majorData === undefined) {
      reset("학번 형식을 확인해주세요.", student_number);
    } else {
      major.value = majorData.name;
    }
  }
});

SignUpButton.addEventListener("click", function () {});

CancelButton.addEventListener("click", function () {
  location.href = "Login.html";
});
