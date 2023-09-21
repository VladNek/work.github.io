
// // $(document).ready(function () {
// //   var modal = $('.modal'),
// //       modalBtn = $('[data-toggle=modal]'),
// //       closeBtn = $('.modal__close');

// //   modalBtn.on('click', function() {
// //    modal.toggleClass('modal--visible');
// //   });
// //   closeBtn.on('click', function (){
// //    modal.toggleClass('modal--visible');
// //   });

// //   var swiper = new Swiper('.swiper', {
// //    loop: true,
// //    pagination: {
// //      el: '.swiper-pagination',
// //      type: 'bullets',
// //    },
// //    navigation: {
// //      nextEl: '.swiper-button-next',
// //      prevEl: '.swiper-button-prev',
// //    },
// //   })
// //   var next = $('.swiper-button-next');
// //   var prev = $('.swiper-button-prev');
// //   var bullets = $('.swiper-pagination');

// //   next.css('left', prev.width() + 10 + bullets.width() + 10)
// //   bullets.css('left', prev.width() + 10)

// //   new WOW().init();

//   // Валидация формы 
//   $('.modal__form').validate({
//     errorClass: "invalid",
//     rules: {
//       // строчное правило 
//       userName: "required",
//       userPhone: "required",
//       // правило-бъект (блок)
//       userEmail: {
//         required: true,
//         email: true
//       }
//     }, // сообщения 
//     messages: {
//       userName: "Имя обязательно",
//       userPhone: "Телефон обязателен",
//       userEmail: {
//         required: "Oбязательно укажите email",
//         email: "Введите в формате: name@domain.com"
//       }
//     }
//   });

//   // маска для номера телефона 
//   $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder:"+7(___)___-__-__"});

//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [59.902298, 30.446160],
//             zoom: 9
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//         ),

//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             hintContent: 'Собственный значок метки',
//             balloonContent: 'Это красивая метка'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: 'img/home.png',
//             // Размеры метки.
//             iconImageSize: [30, 42],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),

//         myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//             hintContent: 'Собственный значок метки с контентом',
//             balloonContent: 'А эта — новогодняя',
//             iconContent: '12'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#imageWithContent',
//             // Своё изображение иконки метки.
//             iconImageHref: 'images/ball.png',
//             // Размеры метки.
//             iconImageSize: [32, 32],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-24, -24],
//             // Смещение слоя с содержимым относительно слоя с картинкой.
//             iconContentOffset: [15, 15],
//             // Макет содержимого.
//             iconContentLayout: MyIconContentLayout
//         });

//     myMap.geoObjects
//         .add(myPlacemark)
//         .add(myPlacemarkWithContent);
// });
// });

$(function(){
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

$(document).ready(function(){
$('.header__burger').click (function(event){
  $('.header__burger,.header__menu').toggleClass('active');
  $('body').toggleClass('lock');
 });
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.sub-header-catalog .arrow');
 for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subheader=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];
			thisLink.classList.add('parent');
	  arrow[i].addEventListener('click', function(){
			subheader.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	 body.classList.add('mouse');
}

new Swiper ('.image-slider',{
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
   // dynamicBullets: true,
			// spaceBetween: 30,

  },
		direction: 'vertical',

 });