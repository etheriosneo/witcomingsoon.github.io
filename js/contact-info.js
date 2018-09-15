$(function() {

    "use scrict";

    /*-----------------------------------
     * GET IN TOUCH CONTACTS UPDATE
     *-----------------------------------*/
    
    $.getJSON('./data/contact-info.json', (result) => {
        for (var type in result) {
            var members = result[type];
            var contactsRow = $('#contact-' + type + " .row");
            members.forEach((member) => {
                var nameBlock = $("<div>" + member.name + "</div>");
                var titleBlock = $("<p>" + member.title + "</p>");
                var emailBlock = $("<div><a href=\"mailto:" + member.email + "\"><small>" + member.email + "</small></a></div>");
                var contactInfoBlock = $("<div class=\"contact-info-block\"></div>");
                contactInfoBlock.append(nameBlock, titleBlock, emailBlock);
                var colBlock = $("<div class=\"col-lg-4 col-md-6 col-sm-12 my-sm text-center\"></div>");
                colBlock.append(contactInfoBlock);
                contactsRow.append(colBlock);
            });
        }
    });
});