// Disable Submit Button By Default
$(document).ready(function () {
    $("button[type=submit]").attr('disabled', 'disabled');
    // User Fills Out Form
    $("form").keypress(function () {
        if ($('#name').val().length >= 2 && $('#message').val().length >= 14 && $('#email').val().length > 0) {
            $("button[type=submit]").removeAttr('disabled');
        }
    });

    // Back to top button
    if ($('#ma_backToTop').length) {
        var scrollTrigger = 70, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#ma_backToTop').addClass('show');
                } else {
                    $('#ma_backToTop').removeClass('show');
                }
            };
        $(window).on('scroll', function () {
            backToTop();
        });
        $("a[href='#ma_backToTop']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });
    }
});




