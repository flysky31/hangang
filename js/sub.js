$(document).ready(function() {
    // Show the "top" button when the user scrolls down 300px from the top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#topBtn.go_top').addClass("on");
        } else {
            $('#topBtn.go_top').removeClass("on");
        }
    });

    // Scroll to the top of the page when the "top" button is clicked
    $('#topBtn.go_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});