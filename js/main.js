$(document).ready(function () {

    initApp();

    function initApp() {
        // Список материалов
        initMaterialsList();

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

});