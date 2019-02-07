//This function is called when "+" button is pressed.
//This function will add extra educatio information form for a user
$("#add-extra-education").click(function() {
    //this line will check in div block of html, how many form already exsists
    var educationInfoNumber = $("#extra-education").children().length + 2;
    //this is dynamic addition of content to html from js
    $("#extra-education").append(
        "<div id=\"extra-education-" + educationInfoNumber + "\">" + //adding different id for every info form so we can delete it
            "<br>"+
            "<h6 class=\"heading mb-4 text-center text-primary\">Education Information " + educationInfoNumber + "</h6>"+
            "<div class=\"pl-lg-4\">"+
                "<div class=\"row\">"+
                "<div class=\"col-lg-6\">"+
                    "<div class=\"form-group\">"+
                    "<label class=\"form-control-label\" for=\"input-username\">School/University</label>"+
                    "<input type=\"text\" id=\"\" class=\"form-control form-control-alternative\" placeholder=\"School/University\">"+
                    "</div>"+
                "</div>"+
                "<div class=\"col-lg-6\">"+
                    "<div class=\"form-group\">"+
                    "<label class=\"form-control-label\" for=\"input-email\">Degree Type</label>"+
                    "<select class=\"form-control form-control-alternative\">"+
                        "<option value=\"diploma\">Diploma</option>"+
                        "<option value=\"bachelors\">Bachelors</option>"+
                        "<option value=\"master\">Masters</option>"+
                        "<option value=\"etc\">Etc</option>"+
                    "</select>"+
                    "</div>"+
                "</div>"+
                "</div>"+
                "<div class=\"row\">"+
                "<div class=\"col-lg-6\">"+
                    "<div class=\"form-group\">"+
                    "<label class=\"form-control-label\" for=\"input-first-name\">Course Field</label>"+
                    "<select class=\"form-control form-control-alternative\">"+
                        "<option value=\"softwareEngineer\">Software Engineer</option>"+
                        "<option value=\"computerScience\">Computer Science</option>"+
                        "<option value=\"business\">Business</option>"+
                        "<option value=\"etc\">Etc</option>"+
                    "</select>"+
                    "</div>"+
                "</div>"+
                "<div class=\"col-lg-6\">"+
                    "<div class=\"form-group\">"+
                    "<label class=\"form-control-label\" for=\"input-last-name\">Date of Graduation</label>"+
                    "<input type=\"date\" id=\"CompletionDate\" class=\"form-control form-control-alternative\">"+
                    "</div>"+
                "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    );

    //we make remove info form button visible if we have any extra info form available
    if($("#extra-education").children().length > 0){
        document.getElementById("remove-extra-education").removeAttribute("style");
        document.getElementById("remove-extra-education").setAttribute("style", "display: inline-block;");
    }
});

//this function is called when remove extra eduacation info button is pressed 
$("#remove-extra-education").click(function() {
    //check total number of extra education info forms and making id name to remove last form
    var totalNumberOfEducationRecord = $("#extra-education").children().length + 1;
    var idName = "#extra-education-" + totalNumberOfEducationRecord;

    //remove last extra education form
    $(idName).remove();

    //check if their is any extra education form if no then remove button which was added to hide extra education form
    if($("#extra-education").children().length == 0) {
        document.getElementById("remove-extra-education").removeAttribute("style");
        document.getElementById("remove-extra-education").setAttribute("style", "display: none;");
    }
});


//This function is called when "+" button is pressed.
//This function will add extra work information form for a user
$("#add-extra-work-experience").click(function() {
    //this line will check in div block of html, how many form already exsists
    var workInfoNumber = $("#extra-work-experience").children().length + 2;
    //this is dynamic addition of content to html from js
    $("#extra-work-experience").append(
        "<div id=\"extra-work-experience-" + workInfoNumber + "\">" + //adding different id for every info form so we can delete it
            "<br>"+
            "<h6 class=\"heading-small text-muted mb-4\">Work Experience</h6>"+
            "<div id=\"work-experience-1\">"+
                "<h6 class=\"heading mb-4 text-center text-primary\">Work Experience " + workInfoNumber + "</h6>"+
                "<div class=\"pl-lg-4\">"+
                    "<div class=\"row\">"+
                    "<div class=\"col-lg-5\">"+
                        "<div class=\"form-group\">"+
                        "<label class=\"form-control-label\">Company Name</label>"+
                        "<input type=\"text\" id=\"\" class=\"form-control form-control-alternative\" placeholder=\"Company Name\">"+
                        "</div>"+
                    "</div>"+
                    "<div class=\"col-lg-5\">"+
                        "<div class=\"form-group\">"+
                        "<label class=\"form-control-label\">Job Title</label>"+
                        "<input type=\"text\" id=\"\" class=\"form-control form-control-alternative\" placeholder=\"Job Title\">"+
                        "</div>"+
                    "</div>"+
                    "<div class=\"col-lg-2\">"+
                        "<div class=\"form-group\">"+
                        "<label class=\"form-control-label\">Years</label>"+
                        "<select class=\"form-control form-control-alternative\">"+
                            "<option value=\"less-then-1-year\">< a year</option>"+
                            "<option value=\"1-year\">1 year</option>"+
                            "<option value=\"2-years\">2 years</option>"+
                            "<option value=\"3-years\">3 years</option>"+
                            "<option value=\"4-years\">4 years</option>"+
                            "<option value=\"5-years\">5 years</option>"+
                            "<option value=\"more-than-5-years\">> 5 years</option>"+
                        "</select>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                    "<div class=\"row\">"+
                    "<div class=\"col-lg-12\">"+
                        "<div class=\"form-group\">"+
                        "<label class=\"form-control-label\">Job Discription</label>"+
                        "<textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"Discribe your work in few words ...\"></textarea>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    );

    //we make remove info form button visible if we have any extra info form available
    if($("#extra-work-experience").children().length > 0){
        document.getElementById("remove-extra-work-experience").removeAttribute("style");
        document.getElementById("remove-extra-work-experience").setAttribute("style", "display: inline-block;");
    }
});

//this function is called when remove extra work info button is pressed 
$("#remove-extra-work-experience").click(function() {
    //check total number of extra education info forms and making id name to remove last form
    var totalNumberOfWorkExperienceRecord = $("#extra-work-experience").children().length + 1;
    var idName = "#extra-work-experience-" + totalNumberOfWorkExperienceRecord;

    //remove last extra education form
    $(idName).remove();

    //check if their is any extra education form if no then remove button which was added to hide extra education form
    if($("#extra-work-experience").children().length == 0) {
        document.getElementById("remove-extra-work-experience").removeAttribute("style");
        document.getElementById("remove-extra-work-experience").setAttribute("style", "display: none;");
    }
});

$("#add-skill").click(()=> {

    var number_of_skills = Math.floor(($("#all-skills").children().length + 3)/3);
    var skill_name = $("#skill-name").val();
    var skill_description = $("#skill-description").val();

    if(skill_name == "" && skill_description == ""){
        alert("Please fill in the required fields!")
    }
    else if(skill_name == ""){
        alert("Please fill in skill name to continue!")
    }
    else {
        $("#all-skills").append(
            "<br>"+
            "<div class=\"col-lg-4\" id = \"skill-number-" + number_of_skills + "\">"+
                "<div class=\"card bg-gradient-default\">"+
                    "<div class=\"card-body\">"+
                        "<div class=\"row align-items-center\">"+
                            "<div class=\"col ml--2\">"+
                                "<h3 class=\"card-title text-white\">" + skill_name + "</h3>"+
                                "<small class=\"text-white\">" + skill_description + "</small>"+
                            "</div>"+
                            "<div class=\"col-auto\">"+
                                "<button type=\"button\" class=\"btn btn-sm btn-danger\" id=\"remove-skill\">Remove</button>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
            "<br>"
        );
    }
});

//--------------------------------- UNDER DEVELOPEMENT -------------------------------//
// $("#remove-skill").click(()=> {
//     var number_of_skills = Math.floor(($("#all-skills").children().length + 3)/3);
//     console.log(number_of_skills);
//     var skill_to_be_deleted = "skill-number-" + number_of_skills;
//     console.log(skill_to_be_deleted);
//     $(skill_to_be_deleted).remove();
// });
//-----------------------------------------------------------------------------------//