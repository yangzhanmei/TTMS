$(document).ready(function () {
    $(".changeByMouse").mouseover(function () {
        $(this).css("height", function () { return $(this).height() + 50 });
        $(this).css("width", function () { return $(this).width() + 50 });
    });

    $(".changeByMouse").mouseout(function () {
        $(this).css("height", function () { return $(this).height() - 50 });
        $(this).css("width", function () { return $(this).width() - 50 });
    });
});