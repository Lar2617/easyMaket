           //modal

           function openModal(id_modal)  {
            /*записываем в переменную наше модальное окно*/
            let modalWindow = document.querySelector(id_modal);

            if(modalWindow.classList.contains("active")) {
                modalWindow.classList.remove('active');
            }
            else {
                modalWindow.classList.add('active');
            }

            let butExit = modalWindow.querySelector('.butExit');
            
            /*если нажали на иконку крестика, то закрываем окно*/
            butExit.addEventListener('click', function() {
                modalWindow.classList.remove('active');
            })

            let backBlack = modalWindow.querySelector('.backBlack');

            /*если нажали на поле вне окна, то закрываем окно*/
            backBlack.addEventListener('click', function() {
                modalWindow.classList.remove('active');
            })

            }

        let burger = document.querySelector('.burger');
        let menu = document.querySelector('.header__nav');
        let menuLinks = menu.querySelectorAll('.header__list-item');

        burger.addEventListener('click', function() {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
        })

        menuLinks.forEach(function(el) {
        el.addEventListener('click', function() {

            burger.classList.remove('burger--active');

            menu.classList.remove('header__nav--active');

            document.body.classList.remove('stop-scroll');
        })})

        document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
        });
        });

        new Accordion('.accordion');

        const who__container = document.querySelector(".who")
        const who__swiper = new Swiper('.who .swiper', {
        // Optional parameters
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
            
        // Responsive breakpoints
        breakpoints: {
            560: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 8,
            },

            1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 8,
            },
            
        }})

        const experts__container = document.querySelector(".experts")
        const experts__swiper = new Swiper('.experts .swiper', {
        // Optional parameters
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
            
        // Navigation arrows
        navigation: {
            nextEl: '.exp-swiper-button-next',
            prevEl: '.exp-swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 68,
            },

            1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 45,
            },
            
            1919: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 37,
            },

        }})