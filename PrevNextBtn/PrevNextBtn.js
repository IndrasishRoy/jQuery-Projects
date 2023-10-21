$(document).ready(function() {
    $('.next').click(function(){
        $('.pages').find('.pageNumber.active').next().addClass('active');
        $('.pages').find('.pageNumber.active').prev().removeClass('active');
    })
    $('.prev').click(function(){
        $('.pages').find('.pageNumber.active').prev().addClass('active');
        $('.pages').find('.pageNumber.active').next().removeClass('active');
    })
    $('.pageNumber').click(function(){
        if (this != '.active') {
            $('.pages').find(this).addClass('active');//to find 'this(clicked element)' and add active class to it, present inside the class '.pages'  
            $('.pageNumber').not(this).removeClass('active'); //to remove the current active class from the class '.pages', which is not clicked/selected         
        } else {
            $('.pages').find('.pageNumber.active').removeClass('active');//in case the condition is false it will find and remove all the active classes from the class '.pages'
        }
    })
});