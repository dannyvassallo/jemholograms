function validateAge() {
    var Bdate = document.forms["age-gate"]["age"].value;
    var Bday = +new Date(Bdate);

    var age = (Date.now() - Bday) / (31557600000);
    if ( age < 13 ) {
        alertify.error('Sorry, but you are not eligible for this sweepstakes.');
        return false
    }
    else if ( $.isNumeric(age) == false ){
        alertify.error('Sorry, your age must be equal to a number.');
        return false
    }
    else{
        $('.gate').fadeOut();
        $("html,body").animate({ scrollTop: 0 }, "fast");        
        return false
    }
}
