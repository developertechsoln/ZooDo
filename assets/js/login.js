// OnClick event listner for Sign In button
$("#signIn").click(()=>{
    // Getting email and password 
    var email = $("#email").val();
    var password = $("#password").val();

    // If the email or password are left empty
    if (email.length==0 && password.length==0){
        alert("Email and Password fields are empty. Please fill the required fields.");
    } else if (email.length==0){
        alert("Email field is empty. Please fill the required email field.");
    } else if (password.length==0){
        alert("Password field is empty. Please fill the required password field.");
    } else {

        // To check if the email and password are registered.
        var loginExistingUser = firebase.auth().signInWithEmailAndPassword(email,password);
        // If the user exists, then he/she is logged in.
        loginExistingUser.then(()=>{
            console.log("Successfully logged in!");
        })
        // If there is an error finding the user in the database. 
        loginExistingUser.catch((error)=>{
            if(error.message == "The email address is badly formatted."){
                console.log("Email is not valid!")
            } 
            else if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                console.log("The user doesn't exsists.");
            }
            else if(error.message == "The password is invalid or the user does not have a password."){
                console.log("Email/password is incorrect, or user doesn't exists.");
            }
            else{
                console.log(error.message);
            }
        })
    }

})
