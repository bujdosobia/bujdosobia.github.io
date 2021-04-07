

let pics = [
 { country : "Spanyolország", picSrc : "Images/pic16.jpg", line1 : "Fotó album", line2 : "Portugália" },
 { country : "Spanyolország", picSrc : "Images/pic01.jpg", line1 : "Sevilla ", line2 : "Utca részlet" },
 { country : "Spanyolország", picSrc : "Images/pic02.jpg", line1 : "Sevilla ", line2 : "Főtér" },
 { country : "Spanyolország", picSrc : "Images/pic03.jpg", line1 : "Sevilla ", line2 : "Csónakázó tó" },
 { country : "Spanyolország", picSrc : "Images/pic04.jpg", line1 : "Sevilla ", line2 : "Lakóház" },
 { country : "Spanyolország", picSrc : "Images/pic11.jpg", line1 : "Granada ", line2 : "Alhambra" },
 { country : "Spanyolország", picSrc : "Images/pic15.jpg", line1 : "Granada ", line2 : "Alhambra" },
 { country : "Spanyolország", picSrc : "Images/pic14.jpg", line1 : "Granada", line2 : "Alhambra" },
 { country : "Spanyolország", picSrc : "Images/pic12.jpg", line1 : "Granada", line2 : "Alhambra" },
 { country : "Spanyolország", picSrc : "Images/pic13.jpg", line1 : "Granada", line2 : "Alhambra" },
 { country : "Spanyolország", picSrc : "Images/pic21.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic22.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic23.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic24.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic25.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic26.jpg", line1 : "Fuengirola", line2 : "Biopark" },
 { country : "Spanyolország", picSrc : "Images/pic31.jpg", line1 : "Malaga", line2 : "Utca részlet" },
 { country : "Portugália", picSrc : "Images/pic41.jpg", line1 : "Faro", line2 : "Tengerpart" },
 { country : "Portugália", picSrc : "Images/pic42.jpg", line1 : "Faro", line2 : "Tengerpart" }
 ]

let i = 0
let smallPicId = 0

let picQuery = ( (i) => {
    $('#actPic').attr( "src", pics[i].picSrc )
    $('h1').text( pics[i].line1 )
    $('p1').text( pics[i].country )
    $('p2').text( pics[i].line2 )
} )


$('body').css( { "background-color": "#eee", "font": "bold 36px Libre Baskerville" } )

$('body').append('<header id="head"></header>')
$('header').css( { "margin": "0 auto", "padding": "40px", "text-align": "center", "color": "#369", "text-shadow": "0px 9px 1px #bbb" } )
$('#head').text('Picture Book')

$('body').append(' <div id="bigPic" /> ')
$('#bigPic').css( { "margin": "0 auto", "padding": "0 20px", "width": "650px", "display": "flex", "justify-content": "space-between", "align-items": "center", "position": "relative" } )


$('#bigPic').append(' <a href="#" class="arr" id="arrL" ><</a> ')


$('#bigPic').append(' <img id="actPic" /> ')
$('#actPic').css( { "width": "530px", "box-shadow": "0 0 15px 9px #369" } )
$('#bigPic').append(' <div id="actTxt" /> ')
$('#actTxt').css( { "position": "absolute", "bottom": "0px", "left": "80px", "width": "510px", "height": "50px", "background": "black", "background": "rgba(0, 0, 0, 0.4)", "color": "#ccc", "padding": "10px", "font": "bold 10px Verdana" } )
$('#actTxt').append(' <h1></h1> ')
$('h1').css('margin', '0')
$('#actTxt').append(' <p1></p1><br> ')
$('#actTxt').append(' <p2></p2> ')

$('#bigPic').append(' <a href="#" class="arr" id="arrR" >></a> ')

$('.arr').css( { "text-decoration": "none", "font-size": "72px", "color": "#369", "text-shadow": "0px 10px 1px #ccc" } )


$('body').append(' <div id="footer"></div> ')
$('#footer').css( { "margin": "0 auto", "padding": "20px", "width": "600px", "display": "flex", "justify-content": "space-around", "flex-wrap": "wrap" } )


for (let i = 1; i < pics.length; i++) {

    $('#footer').append(' <img id=" ' + i + ' "  class="smallPic" src=" ' + pics[i].picSrc + ' " onclick="picQuery( parseInt(this.id) )" /> ')
    
    $('.smallPic').css( { "margin": "15px", "box-shadow": "0 0 15px 10px #369", "width": "120px", "height": "80px" } )
    $('.smallPic').hover(
         function () { $(this).css( "box-shadow", "0 0 15px 10px green" )},
         function () { $(this).css( "box-shadow", "0 0 15px 10px #369" )}
    )
}


picQuery(i)

$('#arrR').on("click", function() {
    i ++
    if (i < pics.length ) {        
        picQuery(i)
    } else {
        i = 0
        picQuery(i)
    }
} )

$('#arrL').on("click", function() {
    i --
    if (i >= 0 ) {
        picQuery(i)
    } else {
        i = pics.length -1
        picQuery(i)
    }
} )

