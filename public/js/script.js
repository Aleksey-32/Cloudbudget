

$(document).ready(function() {
    $(".contact-form__select").select2({
        minimumResultsForSearch:-1,

    });  

    $(".nav-login__select").select2({
        minimumResultsForSearch:-1,
        selectionCssClass: 'nav-login-select__selection',
        dropdownCssClass: 'nav-login-select__dropdown',
    });

    $('.nav__toggle').click(function() {
        $('.nav__wrapper').toggleClass('nav__wrapper--is-active');
    })
    
});



