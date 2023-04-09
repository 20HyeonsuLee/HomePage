let LoginButton = document.getElementById("LoginButton");
let LoginCancelButton = document.getElementById("LoginCancelButton");
let id = document.getElementById("id");
let pw = document.getElementById("pw");

LoginButton.addEventListener("click", function () {
  if (id.value == "" || pw.value == "") {
    alert("아이디 혹은 비밀번호를 입력해주세요.");
  } else if (id.value == "admin" && pw.value == "1234") {
    alert("로그인 되었습니다.");
  } else {
    alert("아이디 혹은 비밀번호를 확인해주세요.");
  }
});

LoginCancelButton.addEventListener("click", function () {
  location.href = "Main.html";
});
