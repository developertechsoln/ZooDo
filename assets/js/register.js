$("#createAccount").click(function(){
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
//var phoneNumber = $( "#phoneNumber" ).val();
var customCheckRegister = $( "#customCheckRegister" ).val();

    var createNewUserPromise = firebase.auth().createUserWithEmailAndPassword(email, password);
    createNewUserPromise.then(function(){
        firebase.auth().onAuthStateChanged(function(user){
            if (user){
                 var userid = user.uid;
                var saveUserPromise = firebase.database().ref().child("Data").child("userInfo").child(userid).set({
                        firstName: firstName,
                        lastName :lastName,
                        email: email,
                        address: address,
                        city: city,
                        state: state , 
                        country: country,
                        zipCode: zipCode
                });
                saveUserPromise.then(function(){
                    console.log("done");
                });
                saveUserPromise.catch(function(error){
                    console.log("OOPS! some error occured");
                    
                });
            } 

        });
    
    });

    //hey 
    createNewUserPromise.catch(function(error){
            console.log(error.message);
    });
});
