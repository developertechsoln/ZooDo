$("#employer").click(function(){
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            var userId = user.uid;
            var globalUserInfoPromise = firebase.database().ref().child("data").child("userInfo").child(userId).set("employer");
            globalUserInfoPromise.then(function(){
                var dbRefTempUserInfo = firebase.database().ref().child("data").child("tempUserInfo").child(userId);
                dbRefTempUserInfo.once("value", snap => {
                    if (snap.exists()){
                        var userInfo = snap.val();
                        var deleteTempUserInfoPromise = dbRefTempUserInfo.remove();
                        deleteTempUserInfoPromise.then(function(){
                            var storeUserInfoInEmployerPromise = firebase.database().ref().child("data").child("employer").child("userInfo").child(userId).set(userInfo);
                            storeUserInfoInEmployerPromise.then(function(){
                                console.log("DONE!");
                            });
                            storeUserInfoInEmployerPromise.catch(function(error){
                                console.log(error.message)
                            })
                        });
                        deleteTempUserInfoPromise.catch(function(error){
                            console.log(error.message);
                        })
                    } else {
                        console.log("Try Again")
                    }
                })
            });
            globalUserInfoPromise.catch(function(error){
                console.log(error.message)
            });
        }
    })
})


$("#employee").click(function(){
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            var userId = user.uid;
            var globalUserInfoPromise = firebase.database().ref().child("data").child("userInfo").child(userId).set("employee");
            globalUserInfoPromise.then(function(){
                var dbRefTempUserInfo = firebase.database().ref().child("data").child("tempUserInfo").child(userId);
                dbRefTempUserInfo.once("value", snap => {
                    if (snap.exists()){
                        var userInfo = snap.val();
                        var deleteTempUserInfoPromise = dbRefTempUserInfo.remove();
                        deleteTempUserInfoPromise.then(function(){
                            var storeUserInfoInEmployeePromise = firebase.database().ref().child("data").child("employee").child("userInfo").child(userId).set(userInfo);
                            storeUserInfoInEmployeePromise.then(function(){
                                console.log("DONE!");
                            });
                            storeUserInfoInEmployeePromise.catch(function(error){
                                console.log(error.message)
                            })
                        });
                        deleteTempUserInfoPromise.catch(function(error){
                            console.log(error.message);
                        })
                    } else {
                        console.log("Try Again")
                    }
                })
            });
            globalUserInfoPromise.catch(function(error){
                console.log(error.message)
            });
        }
    })
})

