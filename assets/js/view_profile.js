$(function viewIntroduction(var introductionJson){
    $.getJSON('introductionJson.json',function(data){
        console.log('Data successfully retrieved');
        $.each(data.introduction,function(i,intro)){
            $('ul').append('<li'+"First Name:"+intro.firstName+'</li>');
            $('ul').append('<li'+"Last Name:"+intro.lastName+'</li>');
            $('ul').append('<li'+"Title:"+intro.title+'</li>');
            $('ul').append('<li'+"Profile Picture:"+intro.profilePic+'</li>');
        });

    }.error(function(){
        console.log('error');
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
var loadProfilePhotos = (photoJSON) => {
    
    //total number of photos
    var numberOfPhotos = Object.keys(photoJSON).length;
    // number of rows of images (one row contains 3 images)
    var numberofRows = Math.ceil(numberOfPhotos/3);

    // If there are less than 3 photos, then just add in one row.
    if (numberofRows == 1) {
        for(var countPhoto = 1; countPhoto <= numberOfPhotos; countPhoto++){
            var imageNumberStr = "image"+countPhoto;
            var urlSrc = photoJSON[imageNumberStr].url;
            var imgDescription = photoJSON[imageNumberStr].description;

            //Add the first row
            $("#photos-section").append(
                "<div class=\"row ml-2\" id=\"photos-row-1\">"+
                "</div>"+
                "<br>"
            )
            
            // Add the photos in the row
            $("#photos-row-1").append(

                    "<div class=\"card col-lg-3 border-primary\" id=\"photo"+countPhoto+"\">"+
                        "<div class=\"pic-content\">"+
                            "<img class=\"card-img-top mb-3 mt-3\" src=\"+" urlSrc "+\">"+
                            "<div class=\"icons\">"+
                                "<a id=\"viewPic"+countPhoto+"\" class=\"btn-icon btn-secondary\" title=\"View Image\" data-toggle=\"modal\" data-target=\"#viewPicModal"+countPhoto+"\">"+
                                    "<span class=\"btn-inner--icon\"><i class=\"far fa-eye\"></i></span>"+
                                "</a>"+
                                "<hr>"+
                                "<a id\"viewDesc"+countPhoto+"\" class=\"btn-icon btn-secondary\" title=\"View description\" data-toggle=\"modal\" data-target=\"#viewDescModal"+countPhoto+"\">"+
                                    "<span class=\"btn-inner--icon\"><i class=\"fas fa-align-justify\"></i></span>"+
                                "</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
            )

            viewImageAndDesc(countPhoto, urlSrc, imgDescription);
        }
    }    
    // If there are more than 3 photos, then add a new row according to length.
    // else if(numberofRows > 1) {

    // }

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