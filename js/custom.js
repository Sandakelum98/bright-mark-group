(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });

        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });

        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: '',
            controls: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

		// brands carousel
		$('.feature-list-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			navText: ['Prev', 'Next'],
			controls: false,
			// center:true,
			autoplayTimeout: 2000,
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				480: {
					items: 2
				},
				600: {
					items: 3
				},
				767: {
					items: 5
				},
				992: {
					items: 4
				},
				1199: {
					items: 4
				},
				2000: {
					items: 4
				}
			}
		});

		// services carousel
		$('.services-list-carousel').owlCarousel({
			loop: true,
			margin: 45,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			navText: ['Prev', 'Next'],
			controls: false,
			// center:true,
			autoplayTimeout: 2000,
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				480: {
					items: 2
				},
				600: {
					items: 2
				},
				767: {
					items: 2
				},
				992: {
					items: 2
				},
				1199: {
					items: 2
				},
				2000: {
					items: 2
				}
			}
		});

    });
})(jQuery);