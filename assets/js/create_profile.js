$("#add-extra-education").click(function() {
    var educationInfoNumber = $("#extra-education").children().length + 2;
    $("#extra-education").append(
        "<div id=\"extra-education-" + educationInfoNumber + "\">" +
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

    if($("#extra-education").children().length > 0){
        document.getElementById("remove-extra-education").removeAttribute("style");
        document.getElementById("remove-extra-education").setAttribute("style", "display: inline-block;");
    }
});

$("#remove-extra-education").click(function() {
    var totalNumberOfEducationRecord = $("#extra-education").children().length + 1;
    var idName = "#extra-education-" + totalNumberOfEducationRecord;

    $(idName).remove();

    if($("#extra-education").children().length == 0) {
        document.getElementById("remove-extra-education").removeAttribute("style");
        document.getElementById("remove-extra-education").setAttribute("style", "display: none;");
    }
});