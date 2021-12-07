
$(".fade-slider").jdSlider({
    isSliding:false,
    isAuto:true,
    isLoop:true,
    isDrag:false,
    isInterval:2000,
    isCursor:false,
    speed:1000,});

addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')

    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }  

});    

$(".menu ul li a").click(function(e){

    e.preventDefault();

    var vinculo = $(this).attr("href");
    
    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000,)

});

$(".read_btn").click(function(e){

    e.preventDefault();

    var vinculo = $(this).attr("href");
    
    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000,)

});

$(".banner_area .read_more_btn").click(function(e){

    e.preventDefault();

    var vinculo = $(this).attr("href");
    
    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000,)

});

$(".read_more_btn-1").click(function(e){

    e.preventDefault();

    var vinculo = $(this).attr("href");
    
    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000,)

})
