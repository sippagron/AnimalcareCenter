/*
Template Name: Yammoe
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").stop().animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
jQuery("#contact_down").click(function () {
    jQuery("body,html").stop().animate({
        scrollTop: $(document).height()
    }, 600);

});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() < 950) {
        jQuery("#contact_down").addClass("visible");
    } else {
        jQuery("#contact_down").removeClass("visible");
    }
});
