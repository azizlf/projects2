function homeFn() {

    const slidesPerViewSLD = window.innerWidth < 950 ? 1 : 3

    const configSwiperSLD = {
        loop: true,
        slidesPerView: slidesPerViewSLD,
        centeredSlides: true,
        navigation: {
            nextEl: '.sld-1-right',
            prevEl: '.sld-1-left',
        }
    }

        
        

    new Swiper('.sld-1', configSwiperSLD  )

    new Swiper('.sld-2', configSwiperSLD  )

    new Swiper('.sld-3', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sld-3-right',
            prevEl: '.sld-3-left',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    })

}