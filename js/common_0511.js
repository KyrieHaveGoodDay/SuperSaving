// 跑馬燈
var textSwiper = new Swiper('.slider_text .swiper-container', {
	loop: true,
	autoplay: true,
	speed: 200,
	delay: 3000,
	direction: 'vertical',
	mousewheel: false,
});

// 側選單
$('.right_menu .arrow_box').click(function () {
	$('.right_menu .arRight').toggleClass('rotate');
	$('.right_menu .menu_box').toggleClass('gohide');
});
$('.left_menu .arrow_box').click(function () {
	$('.left_menu .arLeft').toggleClass('rotate');
	$('.left_menu .menu_box').toggleClass('gohide');
});
$('li.subevent a, .menuMask').click(function () {
	$('.left_menu .menu_box, .menuMask').toggleClass('show');
});
$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.right_menu, .left_menu').addClass('subfixed');
	} else {
		$('.right_menu, .left_menu').removeClass('subfixed');
	}
});

// hashtag Smooth scrolling
var $clickTag = $('area[href^="#"], .menu_box a[href^="#"], .gotopMB a[href^="#"], a.gotheme');
$clickTag.click(function () {
	var target = $(this.getAttribute('href'));
	if ($(window).width() < 768) {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 300);
		}
		return false;
	} else {
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
		return false;
	}
});

// 影像地圖RWD
$('map').imageMapResize();

// 桌機版與手機版動畫
$(document).ready(function () {
	setTimeout(function () {
		$(".load-wrap").fadeOut(500);
		let main_width = $(window).width();
		if (main_width >= 768) {
			desktop()
		} else {
			mbPhone()
		}

	}, 1000)

})

// ani
function desktop() {
	// 箱子
	let spnaa = gsap.to('.box', { duration: 1, y: 100, repeat: -1, yoyo: true, paused: true })

	// 圓型
	const t2 = gsap.timeline({ repeat: -1, paused: true })
	t2.to('.circle', { duration: 1, rotate: 90, delay: 3 })
		.to('.circle', { duration: 1, rotate: 0, delay: 3 })


	// 左邊桶子
	const lefticon = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
	// x -20 y 30 往下
	lefticon.to('.leftbuy2', { duration: 0.6, x: 20, y: -30 })
		.to('.leftbuy3', { duration: 0.3, x: -20, y: 25 }, 0.1)
		.to('.leftbuy1', { duration: 0.6, x: -30, y: 70 }, 0.1)
		.to('.leftbuy5', { duration: 0.3, x: -20, y: 23 }, 0.1)
		.to('.leftbuy4', { duration: 0.3, x: -20, y: 28 }, 0.1)


	// righttbuy2
	// 右邊桶子
	const righticon = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
	righticon.to('.righttbuy2', { duration: 0.6, x: 20, y: 50 })
		.to('.righttbuy4', { duration: 0.3, x: -10, y: -25 }, 0.1)
		.to('.righttbuy1', { duration: 0.6, x: -30, y: -80 }, 0.1)
		.to('.righttbuy3', { duration: 0.3, x: -10, y: -20 }, 0.1)
		.to('.righttbuy5', { duration: 0.3, x: -10, y: -20 }, 0.1)



	let roll = gsap.to('.roll', { duration: 0.8, x: 100, repeat: -1, yoyo: true, paused: true })
	// blocks
	const blocks = gsap.timeline({ repeat: -1, yoyo: true, paused: true, ease: "power2.out" })
	blocks.to('.blocks', { duration: 1, x: -30, y: 60 })
	// .to('.blocks',{duration:1,x:-30,y:60})

	// 網家經濟學
	let textAni = gsap.timeline({ yoyo: true, paused: true })
	textAni.to('.text1', { duration: 0.5, right: '29%', top: '19%' })
		.to('.text2', { duration: 0.5, right: '19%', top: '23%' }, 0.5)
		.to('.text3', { duration: 0.5, right: '9%', top: '28%' }, 0.5)
		.to('.text4', { duration: 0.5, right: '-1.5%', top: '32.5%' }, 0.5)
		.to('.text5', { duration: 0.5, right: '-12%', top: '37%' }, 0.5)
	// 折價上下動
	let discount = gsap.timeline({ repeat: -1, paused: true })
	discount.to('.discount', { duration: 0.5, y: -60, delay: 2 })
		.to('.discount', { duration: 0.5, y: 0 })


	// 標題 超省節
	let main_title = gsap.timeline({ repeat: -1, paused: true })
	main_title.to('.title_1', { duration: 0.3, y: -60 })
		.to('.title_1', { duration: 0.3, y: 0 })
		.to('.title_2', { duration: 0.5, y: -30 }, 0.3)
		.to('.title_2', { duration: 0.5, y: 0 })
	let title_3 = gsap.to('.title_3', { duration: 0.6, left: '25%', top: '31%', repeat: -1, yoyo: true, paused: true })



	// resume 繼續播放
	spnaa.resume().play();
	t2.resume().play();
	lefticon.resume().play();
	righticon.resume().play();
	roll.resume().play();
	blocks.resume().play();
	textAni.resume().play();
	discount.resume().play();
	main_title.resume().play();
	title_3.resume().play();

	setInterval(function () {
		spnaa.pause();
		t2.pause();
		lefticon.pause();
		righticon.pause();
		roll.pause();
		blocks.pause();
		textAni.pause();
		discount.pause();
		main_title.pause();
		title_3.pause();
		console.log('stop!!');
		setTimeout(function () {
			console.log('go!!');
			spnaa.resume().play();
			t2.resume().play();
			lefticon.resume().play();
			righticon.resume().play();
			roll.resume().play();
			blocks.resume().play();
			textAni.resume().play();
			discount.resume().play();
			main_title.resume().play();
			title_3.resume().play();
		}, 3000)
	}, 13000)
}

function mbPhone() {
	// let t1 = gsap.timeline({repeat:-1,})
	// 網家經濟學
	let textAni = gsap.timeline({ yoyo: true, paused: true })
	textAni.to('.text1', { duration: 0.5, right: '34%', top: '19%' })
		.to('.text2', { duration: 0.5, right: '26%', top: '23.5%' }, 0.5)
		.to('.text3', { duration: 0.5, right: '18.5%', top: '28%' }, 0.5)
		.to('.text4', { duration: 0.5, right: '10.5%', top: '32.5%' }, 0.5)
		.to('.text5', { duration: 0.5, right: '2.5%', top: '36%' }, 0.5)



	// 咬住的形狀
	let cut_div = gsap.timeline({ repeat: -1, paused: true })
	cut_div.to('.cut', { duration: 0.7, y: 30, delay: 2.5 })
		.to('.cut', { duration: 0.7, y: 0 })

	// 標題 超省節
	let main_title = gsap.timeline({ repeat: -1, paused: true })
	main_title.to('.title_1', { duration: 0.3, y: -60 })
		.to('.title_1', { duration: 0.3, y: 0 })
		.to('.title_2', { duration: 0.5, y: -30 }, 0.3)

		.to('.title_2', { duration: 0.5, y: 0 })
	let title_3 = gsap.to('.title_3', { duration: 0.6, left: '23%', top: '47%', repeat: -1, yoyo: true, paused: true })

	// 折價上下動
	let discount = gsap.timeline({ repeat: -1, paused: true })
	discount.to('.discount_mb1', { duration: 0.5, x: 20, y: 10, delay: 2 })
		.to('.discount_mb1', { duration: 0.5, x: 0, y: 0 })



	textAni.resume().play();
	cut_div.resume().play();
	main_title.resume().play();
	title_3.resume().play();
	discount.resume().play();

	setInterval(function () {
		textAni.pause();
		cut_div.pause();
		main_title.pause();
		title_3.pause();
		discount.pause();
		console.log('stop!!');
		setTimeout(function () {
			console.log('go!!');
			textAni.resume().play();
			cut_div.resume().play();
			main_title.resume().play();
			title_3.resume().play();
			discount.resume().play();
		}, 3000)
	}, 10000)



}

