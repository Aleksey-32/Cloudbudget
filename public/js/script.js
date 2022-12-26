

$(document).ready(function() {
    $(".contact-form__select").select2({    
        minimumResultsForSearch:-1,
        selectionCssClass: 'contact-form__select__selection',
        dropdownCssClass: 'contact-form__select__dropdown',

    });  

    $(".nav-login__select").select2({
        minimumResultsForSearch:-1,
        selectionCssClass: 'nav-login-select__selection',
        dropdownCssClass: 'nav-login-select__dropdown',
    });

    $('.nav__toggle').click(function() {
        $('.nav__wrapper').toggleClass('nav__wrapper--is-active'),
        $('.nav__toggle--hide').hide(2000).show(2000);
        
     });

    
    
});



