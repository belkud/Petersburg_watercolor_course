$(document).ready(function () {

    initApp();

    function initApp() {
// Список материалов
initMaterialsList();

// Валюты
initCurrency();
    }

    function initMaterialsList() {
        const $container = $('#materialsContainer');
        const $listContainer = $('.materials-list-container'); // Изменили селектор
        const $toggleBtn = $('.toggle-list-btn');

        if ($toggleBtn.length) {
            $toggleBtn.on('click', function () {
                $listContainer.slideToggle(300);
                $container.toggleClass('active');
            });

            $(document).on('click', function (e) {
                if (!$container.is(e.target) &&
                    $container.has(e.target).length === 0 &&
                    $listContainer.is(':visible')) {
                    $listContainer.slideUp(300);
                    $container.removeClass('active');
                }
            });
        }
    }
function initCurrency() {

    $('.card').each(function() {
        const priceElement = $(this).find('.price-new');
        const originalText = priceElement.text().trim();
        $(this).data('original-price', originalText);
        
        $(this).find('.currency-btn').first().addClass('active');
    });




    // Обработка кнопок валют
    
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
});