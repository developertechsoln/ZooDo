$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userId = user.uid;

            var dbRefProfile = firebase.database().ref().child("data").child("employee").child("profile").child(userId);
            dbRefProfile.once("value", snap => {
                if(snap.exists()){
                    var profileJSOn = snap.val();
                    var dbRefUserInfo = firebase.database().ref().child("data").child("employee").child("userInfo").child(userId);
                    dbRefUserInfo.once("value", snap => {
                        if(snap.exists()){
                            var userInfoJSOn = snap.val();
                            var introductionJson = {
                                firstName: userInfoJSOn.firstName,
                                lastName: userInfoJSOn.lastName,
                                profileImg: userInfoJSOn.profileImgData,
                                headline: profileJSOn.personalIntro.headline,
                                personalDescription: profileJSOn.personalIntro.personalDescription
                            }
                            viewNavbarDropMenu(introductionJson)
                            viewIntroduction(introductionJson);
                            viewEducation(profileJSOn.education);
                            viewWorkExperience(profileJSOn.workExperience);
                            viewProfilePhotos(profileJSOn.images);
                            viewVideos(profileJSOn.videos);
                        }
                    });
                }
            });
        }
    });
});

// Function to view the introduction 
function viewIntroduction(introductionJSON){
    // Add the profile picture
    $('#profile-picture').attr("src", introductionJSON.profileImg);
    // Adding name, headline and personal description 
    $('#name').html(`${introductionJSON.firstName} ${introductionJSON.lastName}`);
    $('#personal-headline').html(`${introductionJSON.headline}`);

    var personalDescription = introductionJSON.personalDescription.replace(/\n/g, "</br>");
    $('#personal-description').html(`${personalDescription}`);
}

// Function to view the name and profile pic in dropdown menu
function viewNavbarDropMenu(introductionJSON){
    // Adding the profile picture and name respectively
    $("#profilePicDropMenu").attr("src", introductionJSON.profileImg);
    $('#nameDropMenu').html(`${introductionJSON.firstName} ${introductionJSON.lastName}`);
}

// Function to view the Education section 
function viewEducation(educationJSON){
    // getting the total number of education 
    var totalNumberOfEducation = Object.keys(educationJSON).length;
    // Template string which will store the html of all the education 
    var eduHtml = ``;

    // for each education, add the education to the string
    $.each(educationJSON, function(i, education){
        eduHtml = `${eduHtml}<div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-7">
                                <h3 class="mb-0">${education.degreeType} in ${education.courseField}</h3>
                                <h5 class="text-muted">${education.school}</h5>
                            </div>
                            <div class="col-lg-5" style="text-align: right;">
                                <pre><h4>&nbsp;${education.dateOfGraduation}</h4></pre>
                            </div>
                        </div>
                    </div>
                </div>`;
        // there's a line after every education to separate two sections, so we add it here
        if(i != totalNumberOfEducation){
            eduHtml = `${eduHtml}<hr style="margin-top:2%; margin-bottom: 4%;"></hr>`;
        }
    });
    // Appending the template literal string to the education section (*** .append() also works in the same way)
    $("#education-fields").html(eduHtml);
}

// Function to view the Work Experience section 
function viewWorkExperience(workExperienceJSON){

    // If work experience is not empty
    if(workExperienceJSON != null && workExperienceJSON != {} && workExperienceJSON != undefined){
        // getting the total number of work experiences
        var totalNumberOfWorkExperience = Object.keys(workExperienceJSON).length;
        // Template string which will store the html of all the work experiences
        var html = ``;

        // for each work experience, add the it to the string
        $.each(workExperienceJSON, function(i, work){

            var workDescription = work.description.replace(/\n/g, "</br>");

            html = `${html}<div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-7">
                                            <h3 class="mb-0">${work.jobTitle}</h3>
                                            <h5 class="text-muted">${work.companyName}</h5>
                                        </div>
                                        <div class="col-lg-5" style="text-align: right;">
                                            <pre><h4>${work.years}</h4></pre>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p>${workDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            // there's a line after every work experience to separate two sections, so we add it here
            if(i != totalNumberOfWorkExperience){
                html = `${html}<hr style="margin-top:2%; margin-bottom: 4%;"></hr>`;
            }
        });
        // Appending the template literal string to the work experience section (*** .append() also works in the same way)
        $("#work-fields").html(html);
    }
    // If no work experience then remove the work experience section 
    else {
        $("#work-fields").parent().parent().parent().remove();
    }
}

// function to view the profile photos
function viewProfilePhotos(photoJSON) { 
    // if there is a photoJSON or if its not empty or undefined
    if(photoJSON != null && photoJSON != {} && photoJSON != undefined){
        //get the total number of photos
        var totalNumberOfPhotos = Object.keys(photoJSON).length;
        console.log(totalNumberOfPhotos)
        // Template String where the photos are added
        var photoHtml = ``;
        // If there are photos uploaded
        if(totalNumberOfPhotos){
            // Create the start of first row of the photos
            photoHtml = `<div class="row ml-2">`;
            // for each photo, add it to the "photoHtml" string
            $.each(photoJSON, function(keyName, image) {
                // the keyName appears as - "image1, image2, image3 etc", so we just grab the integers from there
                var imgIndex = parseInt(keyName.replace('image',''));

                // Get the URL and description of the image
                var urlSrc = image.url;
                var imgDescription = image.description;
                
                //TODO change image to iframe to improve UX
                photoHtml = `${photoHtml}<div class="card col-lg-3 border-primary">
                                            <div class="pic-content">
                                                <img class="card-img-top mb-3 mt-3" src="${urlSrc}">
                                                <div class="icons">
                                                    <a onClick="viewImageModal(this)" class="btn-icon btn-secondary" title="View Image" >
                                                        <span class="btn-inner--icon"><i class="far fa-eye"></i></span>
                                                    </a>
                                                    <hr>
                                                    <a onclick="viewImgDescModal(this)" data="${imgDescription}" class="btn-icon btn-secondary" title="View description" >
                                                        <span class="btn-inner--icon"><i class="fas fa-align-justify"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-1"></div>`;
                // If the imgIndex reaches a new row (the current row is filled with 3 photos)
                if(imgIndex % 3 == 0){
                    // Close the row since three photos are already added in the row
                    photoHtml = `${photoHtml}</div>`;
                    // adding a new row when the current one is filled
                    if(imgIndex < totalNumberOfPhotos){
                        photoHtml = `${photoHtml}<br> <div class="row ml-2">`;
                    }                        
                }                          
            })
        }
        else { 
            photoHtml = `<h3>No Photos.</h3>`;
        }
    // Appending the template literal string to the photos section 
    $("#photos-section").html(photoHtml);
    }
    // If there are no photos 
    else {
        $("#photos-section").html(`<h3>No Photos.</h3>`);
    }
}   

// Function to view the Image in a modal (it gives the source of image to the modal to view the picture)
function viewImageModal(elementRef){    
    // Get the url (image source) of the image
    var imgSrc = $($(elementRef).parent().parent().children()[0]).attr('src')
    // Change the modal's image source to the above
    $("#ModalDispPic").attr('src',imgSrc);
    // Adding properties to the icons to view the modal
    $(elementRef).attr('data-toggle','modal');
    $(elementRef).attr('data-target','#viewPicModal');
    $($(elementRef).attr('data-target')).modal('show');
}

// Function to view the Image and description in a modal (it gives the source of image and description to the modal)
function viewImgDescModal(elementRef){
    // Get the url (image source) of the image
    var imgSrc = $($(elementRef).parent().parent().children()[0]).attr('src')
    // Change the modal's image source to the above
    $("#ModalDispDescImg").attr('src',imgSrc);
    // Adding the description to html 
    $("#descContainer").html($(elementRef).attr('data').replace(/\n/g, "</br>"));

    // Adding properties to the icons to view the modal
    $(elementRef).attr('data-toggle','modal');
    $(elementRef).attr('data-target','#viewDescModal');
    $($(elementRef).attr('data-target')).modal('show');

}

// Function to view the videos section 
function viewVideos(videoJSON){
    // if there is a videoJSON or if its not empty or undefined
    if(videoJSON != null && videoJSON != {} && videoJSON != undefined){
        //total number of videos 
        var totalNumberOfVideos = Object.keys(videoJSON).length;
        // template string to add the videos
        var videoHtml = ``;
        // If there are videos present in the videoJSON
        if(totalNumberOfVideos){
            //html content to be appended in html file
            videoHtml = `<div class="row ml-2">`; 

            $.each(videoJSON, function(videoKeyName, video){
                console.log(video)
                var videoIndex = parseInt(videoKeyName.replace('video',''));
                var videoSrc = video.url;
                console.log("Video : " + videoSrc)

                videoHtml = `${videoHtml}<div class="card col-lg-3 border-primary" style="padding:10px;">
                                            <video style="max-width:100%;" controls>
                                                <source src="${videoSrc}">
                                            </video>
                                        </div>
                                        <div class="col-lg-1"></div>`;
                // var vidSrc = $("source");
                // vidSrc[0].src = URL.createObjectURL(videoSrc);
                // vidSrc.parent().load();
                // source.parent()[0].load();
                if(videoIndex % 3 == 0){
                    videoHtml = `${videoHtml}</div>`;

                    if(videoIndex < totalNumberOfVideos){
                        videoHtml = `${videoHtml}<br> <div class="row ml-2">`;
                    }                        
                }    
            })
        }
        // If there are no videos uploaded 
        else{
            videoHtml = `<h3>No Videos.</h3>`
        }
        // Appending the template literal to the videos section 
        $("#videos-section").html(videoHtml);
    }
    // if there are no videos
    else { 
        $("#videos-section").append(`<h3>No Videos.</h3>`);
    }
}