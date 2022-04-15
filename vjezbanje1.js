//zadatak : napraviti 2 diva,2dugmeta,uraditi click (onclick),mouseenter,mouseleave,i mijesano za moueseenter i mouseleave

//onclick
$('button').eq (0).click (function () {


    $('.div1').removeClass('noc').addClass ('dan');

})

$('button').eq(1).click (function () {


    $('.div1').removeClass('dan').addClass ('noc');

})




//mouseenter


$('button').eq (2).mouseenter(function () {   //mozseenter (function(){})   ili on ('mouseenter',function(){})


    $('.div2').removeClass('noc').addClass ('dan');

})

$('button').eq(3).on('mouseenter',function () {


    $('.div2').removeClass('dan').addClass ('noc');

})


//mouseleave

$('button').eq (4).mouseleave(function () {   //mozseenter (function(){})   ili on ('mouseenter',function(){})


    $('.div3').removeClass('noc').addClass ('dan');

})

$('button').eq(5).on('mouseleave',function () {


    $('.div3').removeClass('dan').addClass ('noc');

})




//kombinacija mouseenter i mouseleave

$('button').eq (6).click(function () {   


    $('.div4').removeClass('iskljuci').addClass ('dan');

})

$('button').eq(6).on('mouseleave',function () {


    $('.div4').removeClass('dan').addClass ('iskljuci');

})
