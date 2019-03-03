//This function is called when "+" button is pressed.
//This function will add extra education information form for a user
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

var skill_name_arr =[];
var skill_desc_arr = [];
var skill_num_arr = [];
var skill_n_index = 0;
var skill_d_index = 0;
// For storing the total number of skills
var total_number_of_skills = 1;
var number_of_sub_skills;
var number_of_skills;
$("#add-skill").click(()=> {
    number_of_skills = ($("#all-skills").children().length) /2;
    var sub_skill_string = "#sub-skills-"+number_of_skills;
    number_of_sub_skills = $(sub_skill_string).children().length;

    var skill_name = $("#skill-name").val();
    var skill_desc = $("#skill-description").val();


    if(skill_name == "" && skill_desc == ""){
        alert("Please fill in the required field to add a skill!");
    }
    else if(skill_name == ""){
        alert("Please fill in the Skill Name to add a skill!");
        document.getElementById("skill-description").value = "";
    } 
    else{
        skill_name_arr[skill_n_index] = skill_name;
        skill_desc_arr[skill_d_index] = skill_desc;
        skill_num_arr[skill_n_index] = total_number_of_skills;
        skill_n_index++;
        skill_d_index++;
        if(number_of_sub_skills < 3){
            $(sub_skill_string).append(
                "<div class=\"col-lg-4\"  id=\"skill-"+total_number_of_skills+"\">"+
                    "<div class=\"card bg-gradient-default card-stats mb-4 mb-xl-0\">"+
                        "<div class=\"card-body\">"+
                            "<div class=\"row align-items-center\">"+
                                "<div class=\"col ml--2\">"+
                                    "<h3 class=\"card-title text-white\">"+skill_name+"</h3>"+
                                    "<small class=\"text-white\">"+skill_desc+"</small>"+
                                "</div>"+
                                "<div class=\"col-auto\">"+
                                    "<button type=\"button\" class=\"btn btn-sm btn-danger\" id=\"remove-skill\" onclick = remove_skill("+total_number_of_skills+")>Remove</button>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            );
        }
        else {
            var sub_skill = "sub-skills-"+((number_of_skills)+1);
            $("#all-skills").append(
                "<div class=\"row\" id=\""+sub_skill +"\">"+
                    "<div class=\"col-lg-4\"  id=\"skill-"+total_number_of_skills+"\">"+
                        "<div class=\"card bg-gradient-default card-stats mb-4 mb-xl-0\">"+
                            "<div class=\"card-body\">"+
                                "<div class=\"row align-items-center\">"+
                                    "<div class=\"col ml--2\">"+
                                        "<h3 class=\"card-title text-white\">"+skill_name+"</h3>"+
                                        "<small class=\"text-white\">"+skill_desc+"</small>"+
                                    "</div>"+
                                    "<div class=\"col-auto\">"+
                                        "<button type=\"button\" class=\"btn btn-sm btn-danger\" id=\"remove-skill\" onclick = remove_skill("+total_number_of_skills+")>Remove</button>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<br>"
            );
        }
        document.getElementById("skill-name").value = "";
        document.getElementById("skill-description").value = "";
        total_number_of_skills++;
        console.log(skill_name_arr);
        console.log(skill_desc_arr);
        console.log(skill_num_arr);
    }
});

// three arrays - skill number, skills, skill desc

var remove_skill = (num_of_skill) => {
    // var count_card_delete = Math.ceil(num_of_skill/3);
    // var new_temp = count_card_delete - 1;
    // // var count_row = 0;
    // // if (number_of_sub_skills == 1){
    // //     $("#skill-"+num_of_skill).remove();
    // //     // count_row++;
    // // } else {
    // //     $("#skill-"+num_of_skill).remove();

    //     for(; new_temp < number_of_sub_skills; new_temp++){
    //         var new_ID = document.getElementById(new_temp);
    //         document.getElementById("sub-skill-"+count_card_delete).id=new_ID;
    //     }
    // }
    var sub_skill = $('#skill-'+num_of_skill).parent().attr('id');
    var sub_skill_num = parseInt(sub_skill.replace("sub-skills-",''));

    // console.log(sub_skill);
    // console.log(sub_skill_num);
    // console.log(num_of_skill);
    
        
        var id_last = $("#skill-"+num_of_skill).parent().attr('id');
        $("#skill-"+num_of_skill).remove();
        // console.log(id_last)
        var id_last_num = id_last.replace("sub-skills-",'');
        // console.log(id_last_num+ "after replace")
        var next_id_num = parseInt(id_last_num)+1;
        var next_id_name = "#sub-skills-"+next_id_num;
        // console.log(next_id_name)
        // var next_skill_id_name = next_id_name+ ":first-child";
        var next_skill_id = $(next_id_name).children(":first").attr("id");
        // console.log(next_skill_id);
        $('#' + next_skill_id).appendTo('#'+id_last);

        if($('#sub-skills-'+number_of_sub_skills).children().length == 0){
            $('#sub-skills-'+number_of_sub_skills).next('br').remove();
            $('#sub-skills-'+number_of_sub_skills).remove();
            number_of_sub_skills--;
        }
        // console.log(number_of_sub_skills + "-sub-skills");
        
        // for appropriately removing skills from the skill, description, skill number array 
        console.log(num_of_skill);
        for(var ch = 0; ch<skill_n_index; ch++){
            if (skill_num_arr[ch]==num_of_skill){
                skill_name_arr.splice(ch,1);
                skill_desc_arr.splice(ch,1);
                skill_num_arr.splice(ch,1);
            }
        }
        console.log(skill_name_arr);
        console.log(skill_desc_arr);
        console.log(skill_num_arr);
    // // $("#skill-"+num_of_skill).empty();
    // var target = $("#skill-"+num_of_skill);
    // $(target).remove();
}
// --------------------------------- UNDER DEVELOPEMENT -------------------------------//
// $("#remove-skill").click(()=> {

//     var skill_to_be_deleted = "skill-number-" + number_of_skills;
//     console.log(skill_to_be_deleted);
//     $(skill_to_be_deleted).remove();
// });
// -----------------------------------------------------------------------------------//

// For updating the headline when you click update headline button 
$("#update-headline").click(() => {
    var headline = $("#new-headline").val();
    // console.log(headline);
    if(headline == "" || (!headline.replace(/\s/g, '').length)){
        alert("Please fill in the headline box.");
    } else {
        $("#headline").text(headline);
        document.getElementById("new-headline").value = "";
    }
});

// For updating the headline when you press enter after writing your headline
$("#new-headline").keypress((event)=>{
    if(event.keyCode == 13){
        $("#update-headline").click();
    }
});

// A global object for storing the pictures
var image_object = [];
var photo_desc = [];

$("#add-photo-btn").click(() => {
    $("#add-photos").empty();
    $("#add-photos").append(
        "<div class=\"modal fade\" id=\"modal-default\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-default\" data-backdrop=\"static\" data-keyboard=\"false\" aria-hidden=\"true\">"+
        "<div class=\"modal-dialog modal- modal-dialog-centered modal-\" role=\"document\">"+
          "<div class=\"modal-content\">"+
            "<div class=\"modal-header\">"+
                "<h6 class=\"modal-title\" id=\"modal-title-default\">Upload Photos</h6>"+
                "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"+
                    "<span aria-hidden=\"true\">×</span>"+
                "</button>"+
            "</div>"+
        
            "<div class=\"modal-body\" id=\"modal_body\">"+
              "<div class=\"row\">"+
                "<div class=\"col-sm-4\"></div>"+
                "<div class=\"col-sm-4\">"+
                  "<label for=\"files\" class=\"btn btn-outline-primary\">"+
                      "<span class=\"btn-inner--text\">Browse</span>"+
                      " <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-upload-96\"></i></span>"+
                  "</label>"+
                  "<input id=\"files\" style=\"display: none\" type=\"file\" accept=\"image/\*\" multiple/>"+
                "</div>"+
                "<div class=\"col-sm-4\"></div>"+
              "</div>"+
            "</div>"+
                
            "<div class=\"modal-footer\" id=\"modal_footer\">"+
                // "<button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Cancel</button>"+
                // "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"next-button\" onClick=\"next_button()\">Next</button>"+
            "</div>"+
                
          "</div>"+
          "</div>"+
        "</div>"
    )

    $("#files").change(()=> {
        // Gets an object of images selected

        var numberOfFilesUploaded = document.querySelector('input[type=file]').files.length;
        for(var i=0; i<numberOfFilesUploaded; i++){
            image_object[i] = document.querySelector('input[type=file]').files[i];
        }
        if($.isEmptyObject(image_object)){
            alert("Please upload a file!");
        }else{
            upload_successful();
            setTimeout(()=> { 
                $("#modal_footer").empty();
                img_desc_temp(); 
                preview_image(); 
                if(image_object.length == 1){
                    img_footer();
                }else{
                    img_desc_foot(); 
                }
            },2000);
        }
    });
});

var next_click = new Boolean(false);
var current = 0;
var next_button = () => {
    next_click = true;
    var image_description = $("#image-description").val();
    // Do we need to make it in an important field?
    if(image_description == ""){
        alert("Please fill out the description!");
    } else{
        photo_desc[current] = image_description;
        if(current < image_object.length-1){
            current++;
            $("#modal_footer").empty();
            img_desc_temp();    
            preview_image(); 
            if(current == image_object.length-1){
                img_footer();
            } else {
                img_desc_foot(); 
            }
        } else{
            $("#modal_body").empty();
            $("#modal_footer").empty();
            $("#modal_body").append(
                "<h2>Photos Added Successfully!!</h2>"
            );
            setTimeout(() => {
                $("#modal-default").modal('hide');
                current = 0;
                next_click = false;
                photo_desc = [];
            },2000);
        }
    }
}
        
var img_footer = () => {
    if(image_object.length == 1){
        $("#modal_footer").append(
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"remove-photo-btn\" onClick=\"remove_photo_button()\">Remove</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" onClick=\"next_button()\" id=\"next-button-img\">Finish</button>"
        );
    } else {
        $("#modal_footer").append(
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"prev_photo_button\" onClick=\"prev_photo_button()\">Previous</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"remove-photo-btn\" onClick=\"remove_photo_button()\">Remove</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" onClick=\"next_button()\" id=\"next-button-img\">Finish</button>"
        );
    }
}

var upload_successful = ()=> {
    $("#modal_body").empty();
    $("#modal_footer").empty();
    $("#modal_body").append(
        "<h2>Media Uploaded Successfully!!</h2>"
    );
};

var img_desc_temp = ()=> {
    $("#modal_body").empty();
    if(photo_desc[current] == null){
        $("#modal_body").append(
            "<div class=\"row\">"+
                "<div class=\"col-lg-6\">"+
                    "<img id=\"new-image\" src=\"http://placehold.it/250\" alt=\"your image\" />"+
                "</div>"+
                "<div class=\"col-lg-6\">"+
                    "<textarea id=\"image-description\" rows=\"10\" class=\"form-control form-control-alternative\" placeholder=\"Anything special about the Photo?\"></textarea>"+
                "</div>"+
            "</div>"
        );
    } else {
        $("#modal_body").append(
            "<div class=\"row\">"+
                "<div class=\"col-lg-6\">"+
                    "<img id=\"new-image\" src=\"http://placehold.it/250\" alt=\"your image\" />"+
                "</div>"+
                "<div class=\"col-lg-6\">"+
                    "<textarea id=\"image-description\" rows=\"10\" class=\"form-control form-control-alternative\">"+ photo_desc[current] +"</textarea>"+
                "</div>"+
            "</div>"
        );
    }
   
};

var img_desc_foot = () => {
    if(current == 0){
        $("#modal_footer").append(
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"remove-photo-btn\" onClick=\"remove_photo_button()\">Remove</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" onClick=\"next_button()\" id=\"next-button-img\">Next</button>"
        );
    } else {
        $("#modal_footer").append(
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"prev_photo_button\" onClick=\"prev_photo_button()\">Previous</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" id=\"remove-photo-btn\" onClick=\"remove_photo_button()\">Remove</button>"+
            "<button type=\"button\" class=\"btn btn-outline-primary\" onClick=\"next_button()\" id=\"next-button-img\">Next</button>"
            // "<button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Cancel</button>"
        );
    }
};

var preview_image = function(input) {
    var reader = new FileReader();
    reader.onload = (e)=> {
        $("#new-image").attr('src',e.target.result);
    }
    reader.readAsDataURL(image_object[current]);
    next_click = false;
};

var prev_photo_button = ()=> {
    var image_description = $("#image-description").val();
    photo_desc[current] = image_description;
    current--;
    if(current < image_object.length-1){
        $("#modal_footer").empty();
        img_desc_temp();    
        preview_image(); 
        img_desc_foot(); 
    }
};

var remove_photo_button = ()=> {
    $("#modal_body").empty();
    $("#modal_footer").empty();
    $("#modal_body").append(
        "<h2>Media Removed Successfully!!</h2>"
    );
    setTimeout(()=> {
        image_object.splice(current, 1);
        photo_desc.splice(current,1);
        current--;
        if(image_object.length == 0){
            $("#modal-default").modal('hide');
            current = 0;
            next_click = false;
        } else if(current <= image_object.length-1  && current >= 0){ //when image removed is not first in the list, it displays the previous image in list
            $("#modal_footer").empty();
            img_desc_temp();    
            preview_image(); 
            img_desc_foot(); 
        } else { //when the image removed is first one in the list, it displays the next image in list
            current++;
            $("#modal_footer").empty();
            img_desc_temp();    
            preview_image(); 
            img_desc_foot(); 
        }
    }, 2000);
};

var total_number_of_videos = 1;
$(document).on("change", "#videos", function(evt) {

    var number_of_sub_videos = ($("#video_preview").children().length) /2;

    if(number_of_sub_videos == 0){
        number_of_sub_videos++;

        var sub_video = "sub-videos-"+number_of_sub_videos;
        $("#video_preview").append(
            "<div class=\"row\" id=\""+sub_video+"\">"+
                
            "</div>"+
            "<br>"
        );
    }

    var sub_video_string = "#sub-videos-"+number_of_sub_videos;
    var number_of_videos = $(sub_video_string).children().length;

    if(number_of_videos == 2){
    
        number_of_sub_videos++;

        var sub_video = "sub-videos-"+number_of_sub_videos;
        $("#video_preview").append(
            "<div class=\"row\" id=\""+sub_video+"\">"+
                
            "</div>"+
            "<br>"
        );

        sub_video_string = "#sub-videos-"+number_of_sub_videos;

        $(sub_video_string).append(
            "<div class=\"col-lg-6\" id=\"video-"+total_number_of_videos+"\">"+
                "<div style=\"width: auto;\">"+
                    "<div class=\"card card-stats mb-4 mb-lg-0\">"+
                        "<div class=\"card-body\">"+
                            "<div class=\"row\">"+
                                "<div class=\"col-12 text-center\">"+
                                    "<button type=\"button\" class=\"close\">"+
                                        "<span aria-hidden=\"true\" style=\"font-size: 125%; color: #f5365c;\">×</span>"+
                                    "</button><br><br>"+
                                    "<video style=\"max-width: 100%; z-index:1000\" controls>"+
                                        "<source id=\"video-preview-"+total_number_of_videos+"\">"+
                                    "</video>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        );
    } else {

        $(sub_video_string).append(
            "<div class=\"col-lg-6\" id=\"video-"+total_number_of_videos+"\">"+
                "<div style=\"width: auto;\">"+
                    "<div class=\"card card-stats mb-4 mb-lg-0\">"+
                        "<div class=\"card-body\">"+
                            "<div class=\"row\">"+
                                "<div class=\"col-12 text-center\">"+
                                    "<button type=\"button\" class=\"close\" id=\"remove-vid\">"+
                                        "<span aria-hidden=\"true\" style=\"font-size: 125%; color: #f5365c;\">×</span>"+
                                    "</button><br><br>"+
                                    "<video style=\"max-width: 100%;  z-index:1000\" controls>"+
                                        "<source id=\"video-preview-"+total_number_of_videos+"\">"+
                                    "</video>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        );
    }

    var video_preview_string = "#video-preview-"+total_number_of_videos;

    var source = $(video_preview_string);
    source[0].src = URL.createObjectURL(this.files[0]);
    source.parent()[0].load();

    total_number_of_videos++;
});


// Expected json

// {
//     profileInfo:{
//         Education:{
//             edu1:{

//             },
//             edu2:{

//             },
//             placeholder: "0"
//         },
//         Work:{
//             work1:{

//             },
//             work2:{

//             },
//             placeholder: "0"
//         }
//     },
//     profileMedia:{
//         media1:{
//             url: "",
//             storageName: "",
//             userSelectedName: "",
//             mediaFileType: "Image",
//             placeholder: "0"
//         },
//         media2:{
//             url: "",
//             storageName: "",
//             userSelectedName: "",
//             mediaFileType: "Video",
//             placeholder: "0"
//         }
//     },
//     placeholder: "0"
// }




// this function will store values of all fields;
$("#create-profile").click(function(){
    var userDescription = $("#description").val();
    var userDescription = $("#personal-description").val();
    var numberOfEducation = $("#extra-education").children().length + 1;
    var numberOfWorkExperience = $("#extra-work-experience").children().length + 1;
    var mainJson = {
        education:{},
        workExperience:{},
        personalDescription: userDescription
    };
    for (i = 1; i <= numberOfEducation; i++){
        var className = ".extra-education-" + i;
        var eduObj = $(className);
        var counter=1;
        eduObj.each(function(){
            if (counter == 1) {
                        mainJson.education["education" + counter]["university"]=$(this).val()
            }
            if (counter==2){
                    mainJson.education["education" + counter]["degreeType"]=$(this).val()
            }
            if (counter==3){
                    mainJson.education["education" + counter]["courseField"]=$(this).val()
            }
            if (counter==4){
                    mainJson.education["education" + counter]["dog"]=$(this).val()
            }
            counter++
        })
    }
    for (j = 1; j <= numberOfWorkExperience; j++){
        var className2 = ".extra-work-experience-" + j;
        var workExObj = $(className2);
        var counter2=1;
        workExObj.each(function(){
            if (counter2 == 1) {
                        mainJson.workExperience["workEducation" + counter2]["companyName"]=$(this).val()
            }
            if (counter2==2){
                    mainJson.workExperience["workExperience" + counter2]["jobTitle"]=$(this).val()
            }
            if (counter2==3){
                    mainJson.workExperience["workExperience" + counter2]["years"]=$(this).val()
            }
            if (counter2==4){
                    mainJson.workExperience["workExperience" + counter2]["description"]=$(this).val()
            }
            counter2++
        })
    }
});
/*
//This function is responsible to send all the files in file array to firebase storage
async function sendAllFilesToStorage(uid){
    
    //create variables
    var numberOfFiles = file.length;
    var URL = [];
    var fileUrl;

    //take one file at a time and send to storage
    for(var i=0; i<numberOfFiles; i++){
        
        //call a function to send file and wait till it returns an url
        fileUrl = await sendFileToStorage(i, uid, category)

        //if we are able to send file to firebase we will save its url else we will put null
        if(fileUrl != ""){ URL.push(fileUrl); }
        else{ URL.push(null); }

    }

    return URL;

}

//Send a single file to firebase storage
async function sendFileToStorage(index, uid, category){

    //collecting promise of file sent
    var filePromise = firebase.storage().ref().child(category).child(uid).child("profilePage").put(FILES[index]);
    filePromise.then(function(snapshot){

        //get the url of the file uploaded
        var getUrl = snapshot.ref.getDownloadURL();
        getUrl.then((url) => {
            return url; //return url
        })
        getUrl.catch(function(error){
            //TODO think on it
        })

    })
    filePromise.catch(function(error){
        return ""; //return an empty array if file is not uploaded
    })

}


//This function tries to send json to firebase 2 times if 1st fails and 
//if it successfully sends json returns true or remove all files from storage and retrun false
async function sendJsonToFirebase(profileJson) {

    firebase.auth().onAuthStateChanged(async function(user) {
	    if (user) {

            var userId = user.uid;

            //tries to send json 1st time
            var profileInfoPromise = firebase.database().ref().child("data").child("employee").child("profile").child(userId).set(profileJson);
            profileInfoPromise.then(function() {
                return true; //if 1st try successful
            });
            profileInfoPromise.catch(function(error) {
                
                //tries to send json 2nd time
                var profileInfoPromiseReTry = firebase.database().ref().child("data").child("employee").child("profile").child(userId).set(profileJson);
                profileInfoPromiseReTry.then(function() {
                    return true; //if 2nd try successful
                });
                profileInfoPromiseReTry.catch(async function(error) {
                    //delete all files from stroge and return false as both tries failed.
                    await removeAllFilesFormStorage(userId, profileJson); //this is asyncronous call, so we will wait till all files are deleted
                    return false;
                });

            })
        } else {
            //it deletes all the files and return false as no user is signed in
            console.log("No user is signed in.");
            await removeAllFilesFormStorage(userId, profileJson); //this is again asyncronous call, so we will wait till all files are deleted
            return false;
        }
    });

}

// This funciton deletes all profile files of a specified user id
async function removeAllFilesFormStorage(userId, profileJson){
    var numberOfMedia = Object.keys(profileJson.profileMedia).length;
    for(i=1; i<numberOfMedia; i++){
        var mediaName = "media" + i; //this is a statement which grabs media name as we will have multiple media
        var fileName = profileJson.profileMedia[mediaName].storageName; //once we have media name, we can now grab file name in storage
        var filePath = 'photo/'+userId+'/profile_images/'+fileName; //now we have file name in stroage, so we can give the path to that file in storage
        await removeFileFromStorage(filePath); //this is asyncronous call, so we will wait till required file is deleted
    }
    return;
}
*/
//This function will delete file from the path provided
function removeFileFromStorage(filePath) {

    var storageRef = firebase.storage().ref(filePath); //create reference to file
    var storageRefRemovePromise = storageRef.delete(); //delete
    storageRefRemovePromise.then(function() {
        return; //wait till we get result
    });
    storageRefRemovePromise.catch(function(error){
        //wait till we get result, if we are not able to delete file we will move ahead as file size will be comparitively small and
        //we don't want to waste time on it and also the failure rate is very less as firebase is scalable.
        return;  
    });

}
