//Onclick event listner for REGISTER button
$("#createAccount").click(function(){
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

    //For Checking All Input values are there
    /*if(firstName == ""){
        alert('Please Enter Your First Name');
    
    }

    else{*/

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

});

    $('#confirmPassword').on('keyup', function () {
                        if ($('#password').val() == $('#confirmPassword').val()) {
                        $('#message').html('Matching');
            document.getElementById("message").removeAttribute("style");
        document.getElementById("message").setAttribute("style", "color: #2dce89");
                        
                        //console.log('a');  //WORD
                        } else 
                        $('#message').html('Password Do not Match');
                        document.getElementById("message").removeAttribute("style");
	document.getElementById("message").setAttribute("style", "color: #f5365c");
                        
                        //console.log('b');
                    });


                    
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
            Pattern: "[!@@#$%^&*]",
            Target: "Symbols"
        }
        ];
    
        
            var password = $(this).val();
        
            
            $("#Length").removeClass(password.length > 6 ? "glyphicon-remove" : "glyphicon-ok");
            $("#Length").addClass(password.length > 6 ? "glyphicon-ok" : "glyphicon-remove");
            
            
            for (var i = 0; i < rules.length; i++) {
        
            $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
            $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
                }
            }

            $(document).ready(function() {
                $("#password").on('keyup', ValidatePassword)
            });
        