$(document).ready(function(){
    // Acordion for linked services
    $('.linked-services-toggler').on( 'click', function() {
        if ($('#linked-services-table-wrapper').css('display') == 'none') {
            $('.linked-services-toggler').toggleClass('is-hidden');
            $('#linked-services-table-wrapper').slideDown();                
        } else {
            $('.linked-services-toggler').toggleClass('is-hidden');
            $('#linked-services-table-wrapper').slideUp();    
        }
    });

    // Accordion for billing card
    $('.billing-card-toggler').on( 'click', function() {
        if ($('#billing-card .hx-card-content').css('display') == 'none') {
            $('.billing-card-toggler').toggleClass('is-hidden');
            $('#billing-card .hx-card-content').slideDown();                
        } else {
            $('.billing-card-toggler').toggleClass('is-hidden');
            $('#billing-card .hx-card-content').slideUp();    
        }
    });

    // Billing card tabs
    $('#tab-link-billing').on( 'click', function() {
        if ($('#billing-card .hx-card-content').css('display') == 'none') {
            $('.billing-card-toggler').toggleClass('is-hidden');
            $('#billing-card .hx-card-content').slideDown();      
        }

        $('#tab-content-billing').removeClass('is-hidden');
        $('#tab-content-notes').addClass('is-hidden');

        $(this).addClass('is-active').parent().addClass('is-active');
        $('#tab-link-notes').removeClass('is-active').parent().removeClass('is-active');

    });
    $('#tab-link-notes').on( 'click', function() {
        if ($('#billing-card .hx-card-content').css('display') == 'none') {
            $('.billing-card-toggler').toggleClass('is-hidden');
            $('#billing-card .hx-card-content').slideDown();      
        }
        
        $('#tab-content-billing').addClass('is-hidden');        
        $('#tab-content-notes').removeClass('is-hidden');

        $(this).addClass('is-active').parent().addClass('is-active');
        $('#tab-link-billing').removeClass('is-active').parent().removeClass('is-active');

    });

});


