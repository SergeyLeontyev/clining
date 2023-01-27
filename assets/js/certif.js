const sliderCerf = new Swiper('.certif-slider', {
	pagination: {
		el: '.main-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.main-button-next',
		prevEl: '.main-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		575: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 25
		},
	}
});

$('#certif-gallery').lightGallery({ thumbnail: !0, animateThumb: !1, showThumbByDefault: !1, });