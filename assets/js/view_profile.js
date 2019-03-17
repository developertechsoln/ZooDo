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