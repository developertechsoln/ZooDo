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
var phoneNumber = $( "#phoneNumber" ).val();
var customCheckRegister = $( "#customCheckRegister" ).val();

    var createNewUserPromise = firebase.auth().createUserWithEmailAndPassword(email, password);
    createNewUserPromise.then(function(uid){
       console.log(uid); 
    });
    createNewUserPromise.catch(function(error){
        console.log(error);
    });
});
