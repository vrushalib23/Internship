 

function validation() {
    
    let username = document.getElementById("username").value;
    let usernameError = document.getElementById("userError");
    let password = document.getElementById("password").value;
    let passError = document.getElementById("passError");
    let confimpassword = document.getElementById("confirmpassword").value;
    let confirmError = document.getElementById("confirmError");
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
     

    // Validation logic
    if (username.trim() == "") {
        usernameError.innerHTML = "Username should not be blank";
        return false;
    } else if (username.trim().length < 3 || username.trim().length > 6) {
        usernameError.innerHTML = "Username must be between 3 and 6 characters long";
        return false;
    }

    else if (password.trim() == "") {
        passError.innerHTML = "Password should not be blank";
        return false;
    }

   else if (confimpassword.trim() == "") {
        confirmError.innerHTML = "Confirm password should not be blank";
        return false;
    }

    else if (password.trim() != confimpassword.trim()) {
        confirmError.innerHTML = "Password and confirm password should match";
        return false;
    }
    else if (email.trim() !=  email.trim()) {
        emailError.innerHTML = "Password and confirm password should match";
        return false;
    }
      if (email.trim() === "") {
        emailError.innerHTML = "Email should not be blank";
        return false;
    }
    // If all validations pass
    return true;
}
