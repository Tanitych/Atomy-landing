$("input").on("change", function () {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
            .format(this.getAttribute("data-date-format"))
    )
}).trigger("change");

$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

//tilt
$(document).ready(function () {
    $('.js-tilt').tilt({
        speed: 1500,
        maxTilt: 10,
    })
})
