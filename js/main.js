$(document).ready(function() {

  initApp();
  
  function initApp() {
    // 1. Список материалов
    initMaterialsList();
    
    // 2. FAQ
    initFAQ();
    
    // 3. Валюты
    initCurrency();
    
    // 4. Навигация
    initNavigation();
  }

function initMaterialsList() {
    const $container = $('#materialsContainer');
    const $listContainer = $('.materials-list-container'); // Изменили селектор
    const $toggleBtn = $('.toggle-list-btn');

    if ($toggleBtn.length) {
        $toggleBtn.on('click', function() {
            $listContainer.slideToggle(300);
            $container.toggleClass('active');
        });

        $(document).on('click', function(e) {
            if (!$container.is(e.target) &&
                $container.has(e.target).length === 0 &&
                $listContainer.is(':visible')) {
                $listContainer.slideUp(300);
                $container.removeClass('active');
            }
        });
    }
}

  function initFAQ() {
    $('.faq-question').on('click', function(e) {
      e.preventDefault();
      const $question = $(this);
      const $answer = $question.next('.faq-answer');
      $answer.slideToggle(300);
      $question.toggleClass('active');
    });
  }

function initCurrency() {

    $('.card').each(function() {
        const priceElement = $(this).find('.price-new');
        const originalText = priceElement.text().trim();
        $(this).data('original-price', originalText);
        
        $(this).find('.currency-btn').first().addClass('active');
    });




    //! Обработка кнопок валют
    
    $('.currency-btn').on('click', function() {
        const card = $(this).closest('.card');
        const priceElement = card.find('.price-new');
        const originalPrice = card.data('original-price');
        const isDollar = $(this).find('svg.bi-currency-dollar').length > 0;

        if (isDollar) {
            const priceInRubles = parseFloat(originalPrice.replace(/[^\d.]/g, ''));
            const priceInDollars = (priceInRubles / 70).toFixed(2);
            priceElement.text(`${priceInDollars} $`);
        } else {
            priceElement.text(originalPrice);
        }
        card.find('.currency-btn').removeClass('active');
        $(this).addClass('active');
    });
}

  function initNavigation() {
    $('a.nav-link, .btn-warning').on('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800);
      }
    });

    $(window).on('scroll', function() {
      let scrollPos = $(document).scrollTop() + 100;
      $('a.nav-link').each(function() {
        let currLink = $(this);
        let refElement = $(currLink.attr('href'));
        if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('a.nav-link').removeClass('active font-weight-bold');
          currLink.addClass('active font-weight-bold');
        }
      });
    });
  }
});