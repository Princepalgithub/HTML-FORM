$(document).ready(function () {
  // Initialize form validation on the registration form
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Enter Your First Name",
      lastname: "Enter Your Last Name",
      email: "Enter Your Valid Email",
      password: {
        required: "Please correct Password",
        minlength: "Your password must be at least 5 characters long"
      }
    },
  
    submitHandler: function (form) {
      form.submit();
    }
  });
});
