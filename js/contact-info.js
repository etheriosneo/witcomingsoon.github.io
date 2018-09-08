$(function() {

    "use scrict";

    /*-----------------------------------
     * GET IN TOUCH CONTACTS UPDATE
     *-----------------------------------*/
    
    var contactsRow = $('#get-in-touch-section .row');
    console.log(contactsRow);
    $.getJSON('./data/contact-info.json', (result) => {
        var members = result.members;
        members.forEach((member) => {
            var nameBlock = $("<div>" + member.name + "</div>");
            var titleBlock = $("<p>" + member.title + "</p>");
            var emailBlock = $("<div><a href=\"mailto:" + member.email + "\"><small>" + member.email + "</small></a></div>");
            var contactInfoBlock = $("<div class=\"contact-info-block\"></div>");
            contactInfoBlock.append(nameBlock, titleBlock, emailBlock);
            var colBlock = $("<div class=\"col-lg-4 col-md-6 col-sm-12 my-md text-center\"></div>");
            colBlock.append(contactInfoBlock);
            contactsRow.append(colBlock);
        });
    });
});