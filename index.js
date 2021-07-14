$(document).ready(function () {
  $(".redirect").click(function (event) {
    event.preventDefault();
    window.location = "http://127.0.0.1:5500/signup.html";
  });
  $(".user-signup__form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/users",
      data: {
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        email: $("#email").val(),
        password: $("#signup_password").val(),
        gender: $("#gender").val(),
        expertise_id: $("#expertise_id").val(),
        date_of_birth: $("#dob").val(),
      },
      success: function (data, status, jqXHR) {
        if (data) {
          alert("Registration successful");
          location.reload();
        } else {
          alert("Somethong went wrong");
        }
      },
      error: function (xhr, status, errorThrown) {
        const errorXHR = xhr;
        console.log(errorXHR);
        if (errorXHR.status == 0) {
          alert("Server is down");
        } else if (errorXHR.responseJSON?.errorCode == "ER_DUP_ENTRY") {
          alert("Email already registered");
        } else {
          alert("Something went wrong");
        }
      },
    });
  });
});
