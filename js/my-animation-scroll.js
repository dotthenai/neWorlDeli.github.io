$(document).ready(function () {

    if (screen.width >= 768) {

        $(window).scroll(function () {

            var verticalScroll = $(this).scrollTop();

            if (verticalScroll >= 1300) {

                $('#food').addClass('fadeInLeft');
                $('#food').removeClass('hide-me');
            }

        });
    }
    if (screen.width <= 767) {
        $('.nav a').on('click', function () {
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
        });
    }

});