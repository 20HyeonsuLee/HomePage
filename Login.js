let id = document.getElementById("id");
let pw = document.getElementById("pw");

document.getElementById("LoginButton").addEventListener("click", function () {
  if (id.value == "" || pw.value == "") {
    alert("아이디 혹은 비밀번호를 입력해주세요.");
  } else {
    if (id.value == "admin") {
      if (pw.value == "1234") {
        alert("로그인 되었습니다.");
      } else {
        const count = failureCount("admin");
        if (count >= 5) {
          alert("비밀번호를 5회 이상 잘못 입력하였습니다.");
        } else {
          alert("아이디 혹은 비밀번호를 확인해주세요.");
        }
      }
    } else {
      alert("아이디 혹은 비밀번호를 확인해주세요.");
    }
  }
});

document
  .getElementById("LoginCancelButton")
  .addEventListener("click", function () {
    location.href = "Main.html";
  });

function failureCount(key) {
  const item = sessionStorage.getItem(key);

  const count = item === null ? 1 : parseInt(item) + 1;

  console.log(count);

  sessionStorage.setItem(id.value, count);
  localStorage.setItem(id.value, count);

  return count;
}
