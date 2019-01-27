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
