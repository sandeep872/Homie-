jQuery(document).ready(function() {
jQuery('.menu-btn').on('click', function () {
    jQuery('#bs-navbar').toggleClass('slide-menu')
	jQuery('.navbar-header').toggleClass('active-menu')
});

jQuery(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >=100) {
        jQuery(".header").addClass("fixed-header");
    } else {
        jQuery(".header").removeClass("fixed-header");
    }
});

              var owl = $('.latest-insights-slider');
              owl.owlCarousel({
                stagePadding: 50,
                margin:25,
                nav: true,
                loop: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
              })
			  
			  var owl = $('.property-slider-01');
              owl.owlCarousel({
                margin:0,
                nav: true,
                loop: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1
                  }
                  
                }
              })
jQuery('.check1').click(function() {
    jQuery('.tenant').toggleClass("active");
});
jQuery('.check2').click(function() {
    jQuery('.landlord').toggleClass("active");
});	 
jQuery('.visible-pw').click(function() {
    jQuery('.visible-pw').toggleClass("active");
});	



$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
});




});



$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
			margin:10,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
	
	
});

$(document).ready(function(){       
   $('#myModal').modal('show');
    }); 

