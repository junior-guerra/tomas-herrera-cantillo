
$(".fade-slider").jdSlider({
    isSliding:false,
    isAuto:true,
    isLoop:true,
    isDrag:false,
    isInterval:2000,
    isCursor:false,
    speed:1000,});

const btn_menu = document.querySelector('.btn_menu');
const menu_items = document.querySelector('.menu_items');
// Toggle element visibility

function show(e) {
	e.classList.toggle('show');
}

btn_menu.addEventListener('click', () => {
	show(menu_items);
});

const cerrarMenu = document.getElementsByClassName('nav-enlaces');
for (const link of cerrarMenu) {
	link.addEventListener('click', () => {
		show(menu_items);
	});
}   

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
