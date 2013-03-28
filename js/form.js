$(document).ready(function () {

    $('form').submit(function (event) {

    // This part of the code determines that the all of the fields on the form have been filled.
    var form_ok = true;
    $(':input').removeClass('missing');
    
    // This part of the code determines that a field is missing.
    $(':input').each(function () {
        if ( ! $(this).val() ) {
            form_ok = false;
            $(this).addClass('missing');
        }
    });


    // The prompt appears if a field has been missed. Thanks to preventDefault the page does not re-direct.
    if (! form_ok) {
        event.preventDefault();
        alert('you missed a field!');
    // The prompt appears when the form has been submitted. Thanks to preventDefault the page does not re-direct.
    } else {
        event.preventDefault();
        alert('Thanks for the feedback!');
    }

    });

});