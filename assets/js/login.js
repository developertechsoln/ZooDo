// OnClick event listner for Sign In button
$("#signIn").click(()=>{
    // Getting email and password 
    var email = $("#email").val();
    var password = $("#password").val();

    // If the email or password are left empty
    if (email.length==0 || password.length==0){
        alert("Email and/or Password fields are empty. Please fill the required fields.");
    }

    // To check if the email and password are registered.
    var loginExistingUser = firebase.auth().signInWithEmailAndPassword(email,password);
    // If the user exists, then he/she is logged in.
    loginExistingUser.then(()=>{
        console.log("Successfully logged in!");
    })
    // If there is an error finding the user in the database. 
    loginExistingUser.catch((error)=>{
        if(error.message == "The email address is badly formatted."){
            console.log("Email is not correct!")
        } 
        else if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
            console.log("Wrong Email and/or Password or The user is no longer registered.");
        }
        else if(error.message == "The password is invalid or the user does not have a password."){
            console.log("Wrong Password. Please Try Again!");
        }
        else{
            console.log("error");
        }
    })

})
