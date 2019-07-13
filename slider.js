jQuery(document).ready(function($) {
    let slideCount = $('.sliderblock__list--pict').length
    let slideWidth = $('.sliderblock__list--pict').width
    let slideHeight = $('.sliderblock__list--pict').height
    let sliderUlWidth = slideCount * slideWidth

    $('.sliderblock--slider').css({
        width: slideWidth,
        height: slideHeight
    })
    $('.sliderblock__list').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    })
    $('.sliderblock__list--pict:last-child').prependTo('.sliderblock__list')

    function moveLeft() {
        $('.sliderblock__list').animate({
            left: +slideWidth
        }, 200, function() {
            $('.sliderblock__list--pict:last-child').prependTo('.sliderblock__list')
            $('.sliderblock__list').css('left', '')
        })
    }

    function moveRight() {
        $('.sliderblock__list').animate({
            left: -slideWidth
        }, 200, function() {
            $('.sliderblock__list--pict:first-child').appendTo('.sliderblock__list')
            $('.sliderblock__list').css('left', '')
        })
    }


    $('.sliderblock--prevarrow').click(function() {
        moveLeft()
    })
    $('.sliderblock--nextarrow').click(function() {
        moveRight()
    })


    setInterval(function() {
        moveRight()
    }, 3000)
})