$(function () { 
    $('.plans-pricing__tabs-btn--monthly').on('click', function() {
        $('.card__price--overlay').addClass("d-nones");
        $('.card__price--month').removeClass("d-nones");
        $('.plans-pricing__tabs-btn--yearly').removeClass("active");
        $('.plans-pricing__tabs-btn--monthly').addClass("active");
    });

    $('.plans-pricing__tabs-btn--yearly').on('click', function() {
        $('.card__price--overlay').removeClass("d-nones");
        $('.card__price--month').addClass("d-nones");
        $('.plans-pricing__tabs-btn--yearly').addClass("active");
        $('.plans-pricing__tabs-btn--monthly').removeClass("active");
    });
});