// function sendToRegistration() {
//   alert("hi");
//   window.location.replace("http://127.0.0.1:5500/signup.html");
// }
$(document).ready(function () {
  $(".redirect").click(function (event) {
    event.preventDefault();
    window.location = "http://127.0.0.1:5500/signup.html";
  });
});
