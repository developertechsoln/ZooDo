function viewIntroduction(introductionJSON){
    $('#profile-picture').attr("src", introductionJSON.profileImg)
    $('#name').html(`${introductionJSON.firstName} ${introductionJSON.lastName}`);
    $('#personal-headline').html(`${introductionJSON.headline}`);
    var personalDescription = introductionJSON.personalDescription.replace(/\n/g, "</br>");
    $('#personal-description').html(`${personalDescription}`);
}

function viewEducation(educationJSON){
    var totalNumberOfEducation = Object.keys(educationJSON).length;
    var html = ``;
    $.each(educationJSON, function(i, education){
        html = `${html}<div class="row">
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
        if(i != totalNumberOfEducation){
            html = `${html}<hr style="margin-top:2%; margin-bottom: 4%;"></hr>`;
        }
    });
    $("#education-fields").html(html);
}

function viewWorkExperience(workExperienceJSON){
    var totalNumberOfWorkExperience = Object.keys(workExperienceJSON).length;
    var html = ``;
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
        if(i != totalNumberOfWorkExperience){
            html = `${html}<hr style="margin-top:2%; margin-bottom: 4%;"></hr>`;
        }
    });
    $("#work-fields").html(html);
}

$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userId = user.uid;

            var dbRefProfile = firebase.database().ref().child("data").child("employee").child("profile").child(userId);
            dbRefProfile.once("value", snap => {
                if(snap.exists()){
                    var profileJSON = snap.val();
                    var dbRefUserInfo = firebase.database().ref().child("data").child("employee").child("userInfo").child(userId);
                    dbRefUserInfo.once("value", snap => {
                        if(snap.exists()){
                            var userInfoJSOn = snap.val();
                            var introductionJson = {
                                firstName: userInfoJSOn.firstName,
                                lastName: userInfoJSOn.lastName,
                                profileImg: userInfoJSOn.profileImgData,
                                headline: profileJSON.personalIntro.headline,
                                personalDescription: profileJSON.personalIntro.personalDescription
                            }
                            viewIntroduction(introductionJson);
                            viewEducation(profileJSON.education);
                            viewWorkExperience(profileJSON.workExperience);
                            viewProfilePhotos(profileJSON.images);
                        }
                    });
                }
            });
        }
    });
});





/* Expected JSON Object for Photos - 

{

      image1: {
        url: "https://example.com/qwerty/1.png",
        name: "dsfe.jpg",
        description: "This is my first work"
      },

      image2: {
        url: "https://example.com/qwerty/2.png",
        name: "difsed.png",
        description: "This is my second work"
      }
}

*/
var viewProfilePhotos = (photoJSON) => {
    
    //total number of photos
    var numberOfPhotos = Object.keys(photoJSON).length;

    var photoHtml = `<div class="row ml-2">`;

    $.each(photoJSON, function(keyName, image) {
        var imgIndex = parseInt(keyName.replace('image',''));
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

        if(imgIndex % 3 == 0){
            photoHtml = `${photoHtml}</div>`;

            if(imgIndex < numberOfPhotos){
                photoHtml = `${photoHtml}<br>
                                         <div class="row ml-2">`;
            }                        
        }                          
    })
        
    $("#photos-section").html(photoHtml);
       
}   

var viewImageModal = (elementRef)=> {

    var imgSrc = $($(elementRef).parent().parent().children()[0]).attr('src')
    $("#ModalDispPic").attr('src',imgSrc);

    $(elementRef).attr('data-toggle','modal');
    $(elementRef).attr('data-target','#viewPicModal');
    $($(elementRef).attr('data-target')).modal('show');

    // console.log($("#ModalDispPic").attr('src'))
}

var viewImgDescModal = (elementRef)=>{

    var imgSrc = $($(elementRef).parent().parent().children()[0]).attr('src')
    $("#ModalDispDescImg").attr('src',imgSrc);

    $("#descContainer").html($(elementRef).attr('data'));
    // console.log($(elementRef).attr('data').toString())
    $(elementRef).attr('data-toggle','modal');
    $(elementRef).attr('data-target','#viewDescModal');
    $($(elementRef).attr('data-target')).modal('show');

}

// Function to write Modal code in HTML with JS givrn the URL Source and Description (Creates two modals - View Image and View Description)
var viewImageAndDesc = (imgIndex, sourceURL, imgDesc) => {

    $("#photo-section").append(
        "<!-- View Picture Modal "+imgIndex+" -->"+
        "<div class=\"modal fade\" id=\"viewPicModal"+imgIndex+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewPicModal"+imgIndex+"\" aria-hidden=\"true\">"+
            "<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">"+
                "<div class=\"modal-content\">"+
                    "<div class=\"modal-header\">"+
                        "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"+
                        "<span aria-hidden=\"true\">&times;</span>"+
                        "</button>"+
                    "</div>"+
                    "<div class=\"modal-body\">"+
                        "<img class=\"card-img-top mb-3 mt-3\" id=\"Pic1\" src=\""+sourceURL+"\">"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"+

        "<!-- Description Modal "+imgIndex+" -->"+
        "<div class=\"modal fade\" id=\"viewDescModal"+imgIndex+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewDescModal"+imgIndex+"\" aria-hidden=\"true\">"+
            "<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">"+
                "<div class=\"modal-content\">"+
                    "<div class=\"modal-header\">"+
                        "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"+
                        "<span aria-hidden=\"true\">&times;</span>"+
                        "</button>"+
                    "</div>"+
                    "<div class=\"modal-body\">"+
                        "<div class=\"row\">"+
                            "<div class=\"col-lg-6\">"+
                                "<img class=\"card-img-top mb-3 mt-3\" id=\"Pic1\" src=\""+sourceURL+"\">"+
                            "</div>"+
                            "<div class=\"col-lg-6\">"+
                                "<div class=\"container\" id=\"descCont\">"+
                                    imgDesc+ 
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"

    )
}


/* Expected json

{
    profileInfo: 
    {
        Introduction: 
        {
            firstName: "XYZ",
            lastName: "ABC",
            title: "Software Engineer @ Microsoft",
            profilePictureUrl: "https://example.com/qwerty/1.png"
        }

        Education: 
        {
            education1:
            {
                schoolName: "UVIC",
                degreeType: "Bachelor",
                courseName: "Computer Science",
                dateOfGraduation: "03-31-2017"
            }
            education2:
            {
                schoolName: "UBC",
                degreeType: "Bachelor",
                courseName: "Economics",
                dateOfGraduation: "03-31-2027"
            }
        }

        workExperience:
        {
            workExperience1:
            {
                companyName:"Microsoft",
                jobTitle: "QA",
                years: "5",
                description: "I worked for testing team."
            }
            workExperience2:
            {
                companyName:"Google",
                jobTitle: "Software Engineer",
                years: "2",
                description: "I worked for google assistance team."
            }
        }

        skills:
        {
            skill1:
            {
                skillName:"Java",
                skillDescription: "I am working with Java since 10 years."
            }
            skill2:
            {
                skillName:"Python",
                skillDescription: "I am working with Java since 1 year."
            }
        }
    }

    profileMedia:
    {
        photo1: 
        {
            pathInFirestore: "photo/uid",
            photoUrl: "https://example.com/qwerty/1.png",
            photoDescription: "My first work."
        }
        photo2: 
        {
            pathInFirestore: "photo/uid",
            photoUrl: "https://example.com/qwerty/2.png",
            photoDescription: "My second work."
        }
        video1:
        {
            pathInFirestore: "photo/uid",
            video1Url: "https://example.com/qwerty/1.mp4"
        }
        video2:
        {
            pathInFirestore: "photo/uid"
            video2Url: "https://example.com/qwerty/2.mp4"
        }
    }
    
}
*/    