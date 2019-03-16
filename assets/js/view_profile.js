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