    //Onclick event listner for REGISTER button
    $("#createAccount").click(function(){

        if(validateForm()) {

            if(passwordSatisfied()){

                if(validateConfirmPassword()){

                    //Getting value from page
                    var firstName = $( "#firstName" ).val();
                    var lastName = $( "#lastName" ).val();
                    var email = $( "#email" ).val();
                    var password = $( "#password" ).val();
                    var confirmPassword = $( "#confirmPassword" ).val();
                    var address = $( "#address" ).val();
                    var city = $( "#city" ).val();
                    var state = $( "#state" ).val();
                    var country = $( "#country" ).val();
                    var zipCode = $( "#zipCode" ).val();
                    var contactNumber = $( "#contactNumber" ).val();
                    var customCheckRegister = $( "#customCheckRegister" ).val();

                    //create promise for authenticating user
                    var createNewUserPromise = firebase.auth().createUserWithEmailAndPassword(email, password);
                    createNewUserPromise.then(function(){
                        firebase.auth().onAuthStateChanged(function(user){ //check the auth state of user to get uid of user
                            if (user){
                                var userid = user.uid;
                                //create promise for sending user data to database
                                var saveUserPromise = firebase.database().ref().child("data").child("tempUserInfo").child(userid).set({
                                        firstName: firstName,
                                        lastName :lastName,
                                        email: email,
                                        address: address,
                                        city: city,
                                        state: state , 
                                        country: country,
                                        zipCode: zipCode,
                                        contactNumber: contactNumber
                                });
                                
                                saveUserPromise.then(function(){
                                    console.log("done");
                                    self.location = "userType.html";
                                });
                                
                                //For checking Passowrd = Confirm Password. 
                                function checkPasswordMatch() {
                                    var password = $("#password").val();
                                    var confirmPassword = $("#confirmPassword").val();
                                
                                    if (password != confirmPassword)
                                        $("#divCheckPasswordMatch").html("Passwords do not match!");
                                    else
                                        $("#divCheckPasswordMatch").html("Passwords match.");
                                }
                                $(document).ready(function () {
                                $("#confirmPassword").keyup(checkPasswordMatch);
                                });
                                
                                saveUserPromise.catch(function(error){
                                    //creating promise to delete user if we auth user but was not able to store user info in database
                                    var userDeletePromise = firebase.auth().currentUser.delete();
                                    userDeletePromise.then(function() {
                                        console.log("Please try again, sorry but we are currently not able to sign you up.");
                                    });
                                    userDeletePromise.catch(function(error) {
                                        console.log("Oops!! Something went wrong please contact office.")
                                    });
                                });
                            } 

                        });
                    
                    });
                    createNewUserPromise.catch(function(error){
                            console.log(error.message);
                    });

                } else {

                    console.log("Confirm password doesn't match with password entered.")

                }

            } else{

                console.log("Password criteria doesn't match.")

            }

        }
    
    });

    function validateConfirmPassword() {
        if($('#password').val == $('#confirmPassword').val)
            return true;
        else
            return false;
    }

    //Checks wheter Passowrd matches the Confirm Passowrd field and display red and green color based on that. 
    $('#confirmPassword').on('keyup', function () {
        
        if($('#confirmPassword').val().length == 0){
            document.getElementById("message").removeAttribute("style");
            document.getElementById("message").setAttribute("style", "display: none;");
        } else {

            document.getElementById("message").removeAttribute("style");
            document.getElementById("message").setAttribute("style", "display: block;");
        
            if ($('#password').val() == $('#confirmPassword').val()) {
                $('#message').html('Passwords match');
                document.getElementById("message").removeAttribute("style");
                document.getElementById("message").setAttribute("style", "color: #2dce89");
            } else {
                $('#message').html('Passwords do not match!');
                document.getElementById("message").removeAttribute("style");
                document.getElementById("message").setAttribute("style", "color: #f5365c");
            }
        }
    });

    //Displays the empty fields as error in the console log along with the field names. 
    function validateForm() {

        var idNames = ["#firstName", "#lastName", "#email", "#password", "#confirmPassword", "#address", 
                        "#city", "#state", "#country", "#zipCode", "#contactNumber"];

        var decideTrueOrFalse = true;
        
        for(var i = 0; i<idNames.length; i++){
            var length = $(idNames[i]).val().length;
            if(length === 0) {

                //do something
                console.log("Error in " + idNames[i]);
                decideTrueOrFalse = false;
            
            }

        }

        // if($('input[type=checkbox]').attr('checked'))
        // console.log($("#customCheckRegister").val())
        

        return decideTrueOrFalse;
    }

    //If the password is being typed then only show the reuqirements for the password. Otherwise hide it. 
    $("#password").on('keyup', displayPasswordStrengthLogs)

    function displayPasswordStrengthLogs() {

        document.getElementById("confirmPassword").value = ""
        document.getElementById("message").removeAttribute("style");
        document.getElementById("message").setAttribute("style", "display: none;");

        if($("#password").val().length > 0){
            document.getElementById("PasswordStrengthLogs").removeAttribute("style");
            document.getElementById("PasswordStrengthLogs").setAttribute("style", "display: block;");
        } else {
            document.getElementById("PasswordStrengthLogs").removeAttribute("style");
            document.getElementById("PasswordStrengthLogs").setAttribute("style", "display: none;");
        }

        

        ValidatePassword();
        
        if(passwordSatisfied()){
            document.getElementById("PasswordStrengthLogs").removeAttribute("style");
            document.getElementById("PasswordStrengthLogs").setAttribute("style", "display: none;");
        }
    }

    //Validates the passowrd accoriding to the given requirements. 
    function ValidatePassword() {
        
        var rules = [{
            Pattern: "[A-Z]",
            Target: "UpperCase"
        },
        {
            Pattern: "[a-z]",
            Target: "LowerCase"
        },
        {
            Pattern: "[0-9]",
            Target: "Numbers"
        },
        {
            Pattern: "[!@@#$%^&*_]",
            Target: "Symbols"
        }];

        
        var password = $("#password").val();
        
        //Checks if the lenght of the password is atleast 7 characters. 
        $("#passwordLength").removeClass(password.length > 6 ? "passwordValidationFalseColor" : "passwordValidationTrueColor");
        $("#passwordLength").addClass(password.length > 6 ? "passwordValidationTrueColor" : "passwordValidationFalseColor");
        

        //Checks for the others rules as states above and displays the color (red for unfulfilled conditons and green for fulfilled) accordingly. 
        for (var i = 0; i < rules.length; i++) {
            $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "passwordValidationFalseColor" : "passwordValidationTrueColor"); 
            $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "passwordValidationTrueColor" : "passwordValidationFalseColor");
        }
    }

    function passwordSatisfied() {

        var ids = ["#passwordLength", "#UpperCase", "#LowerCase", "#Numbers", "#Symbols"];
        var count = 0;

        for(var i=0; i<ids.length; i++){
            if($(ids[i]).hasClass("passwordValidationTrueColor")){
                count++;
            }
        }

        if(count == ids.length && count>0)
            return true;
        else
            return false;


    }