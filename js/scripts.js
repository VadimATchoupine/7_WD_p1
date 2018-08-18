$(document).ready(function(){
            
    // carousel speed settings
    $("#mycarousel").carousel({ interval: 100 });
    
    // carouselButton functionality
    $("#carouselButton").click(function() {
        
        if ( $("#carouselButton").children("span").hasClass('fa-pause') ) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        
        else if ( $("#carouselButton").children("span").hasClass('fa-play') ) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        };

    });

    // loginButton functionality
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    
    // reserveButton functionality
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
});