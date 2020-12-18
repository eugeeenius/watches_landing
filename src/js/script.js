$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button type="button" class="slick-prev"><img src="icons/left.svg"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="icons/right.svg"></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          autoplay: false,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')
  });

  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault()
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    })
  }

  toggleClass('.catalog-item__link')
  toggleClass('.catalog-item__back')

  //Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consult').fadeIn('slow')
  })

  $('.modal__close').on('click', function() {
    $('.overlay, #consult, #order, #thanks').fadeOut('slow')
  })

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
      $('.overlay, #order').fadeIn('slow')
    })
  })

  //Validation
function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: 'required',
      email: {
        required: true,
        email:true
      },
    },
      messages: {
        name: {
          required: 'Пожалуйста, введите ваше имя',
          minlength: jQuery.validator.format('Поле должно содержать не менее {0} символов')
        },
        email: {
          required: 'Введите почту',
          email: 'Неправильно введен адрес почты'
        },
        phone: 'Пожалуйста, введите номер'
      }
  })
}

validateForms('#consult form')
validateForms('#order form')
validateForms('#consultation-form')

$('input[name=phone]').mask("+7 (999) 999-99-99")

})