
function clockRefresh() {
    d = new Date()
    Y = d.getFullYear()
    M = d.getMonth()
    Dt = d.getDate()
    Dy = d.getDay()
    h = d.getHours()
    m = d.getMinutes()
  
    H_10 = (h-h%10)/10
    H_1 = (h%10)
    M_10 = (m-m%10)/10
    M_1 = (m%10) 
  
  monthNames = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
  dayNames = ["VASÁRNAP", "HÉTFŐ", "KEDD", "SZERDA", "CSÜTÖRTÖK", "PÉNTEK", "SZOMBAT"]
  
  }
  clockRefresh()
  
  
  function winSize() {
    xWindowSize = ( $(window).width() )
    yWindowSize = ( $(window).height() )
    contenerPad = xWindowSize/12
    fullSize = { "width":xWindowSize - contenerPad, "height":yWindowSize - contenerPad }
  }
  winSize()
  
  
  divAlign = { "display":"flex", "justify-content":"center", "align-items":"center" }
  divAlignRow = { "flex-direction":"row" }
  divAlignColumn = { "flex-direction":"column" }
  
  $("body").css( { "margin":"0", "background-color":"black" } ).css( divAlign ).css({"color":"lightgreen"})
  $("body").append("<div id='contener'>") 
   $("#contener").css( fullSize ).css( { "margin-top":contenerPad/2 } ).css( divAlign ).css( divAlignColumn )
  
  $("#contener").append("<div id='clockDesk'>")
  $("#contener").append("<div id='footer'>")
  
   $("#footer").css( { "width":$("#contener").width() } )
  $("#footer").css( { "margin-top":"9px", "box-shadow":" 0px 0px 11px 3px lightgreen inset", "padding":"9px 0 6px", "border-radius":"11px" } )
  $("#footer").css( { "color":"lightgreen", "font":"italic bold 12px Courier New", "text-align":"center" } ).text( "CREATED BY CompuLogiC")
  
   $("#clockDesk").css( { "width":$("#contener").width(), "height":$("#contener").height() - $("#footer").outerHeight() } ).css( divAlign )
  $("#clockDesk").css( { "box-shadow":" 0px 0px 20px 5px lightgreen inset", "border-radius":"15px" } )
  
  
  if( xWindowSize <= yWindowSize ){
    $("#clockDesk").css(divAlignColumn)
    $("#clockDesk").append( "<div id='calUDesk'>" )
    $("#clockDesk").append( "<div id='flipDesk'>" )
    $("#clockDesk").append( "<div id='calDDesk'>" )
    $("#calUDesk, #flipDesk, #calDDesk").css( { "width":$("#clockDesk").width()/2 } )//.css( {"border":"1px solid white"} )
  
    $("#calUDesk, #flipDesk, #calDDesk").css( divAlign ).css( divAlignRow )
    $("#calUDesk, #calDDesk").css( { "border":"solid lightgreen", "border-radius":"11px" } )
    $("#calUDesk").text( Y + " " +  monthNames[M] + " " + Dt + "." ).css( { "border-width":"5px 5px 1px 5px" } )
    $("#calDDesk").text( " " + dayNames[0] + " " ).css( { "border-width":"1px 5px 5px 5px" } )
  
    $("#clockDesk").css( { "font-family":"Anton", "font-size":$("#flipDesk").width()/8, "font-weight":"bold" } )
    $("#flipDesk").css( { "font-family":"Anton", "font-size":$("#flipDesk").width()/3, "font-weight":"bold" } )
  }
  
  if( xWindowSize > yWindowSize ){
    $("#clockDesk").css(divAlign).css(divAlignRow)
    $("#clockDesk").append( "<div id='flipDesk'>" )
    $("#clockDesk").append( "<div id='calDesk'>" )
  
    $(" #flipDesk, #calDesk").css(divAlign)
    $("#flipDesk").css(divAlignRow)
    $("#calDesk").css(divAlignColumn)
    $("#calDesk").append( "<div id='calUDesk'>" )
    $("#calDesk").append( "<div id='calDDesk'>" )
  
    $("#calUDesk, #calDDesk").css( divAlign ).css( divAlignRow ).css( { "padding":"3px", "border":"1px solid lightgreen", "border-radius":"9px"  } )
    $("#calUDesk, #flipDesk, #calDDesk").css( { "width":$("#contener").width()/3 } )//.css( {"border":"1px solid white"} )
  
    $("#calUDesk").text( Y + " " + monthNames[M] + " " + Dt+"." ).css( { "border-width":"3px 3px 1px 3px" } )
    $("#calDDesk").text( dayNames[Dy] ).css( { "border-width":"1px 3px 3px 3px" } ).css( { "margin":"2px" } )
  
    $("#clockDesk").css( { "font-family":"Anton", "font-size":$("#flipDesk").width()/11, "font-weight":"bold" } )
    $("#flipDesk").css( { "font-family":"Anton", "font-size":$("#flipDesk").width()/4, "font-weight":"bold" } )
  
  }
  
  
  $("#flipDesk").append( '<div id="dig3">' )
  $("#flipDesk").append( '<div id="dig2">' )
  $("#flipDesk").append( '<div id="dig1">' )
  $("#flipDesk").append( '<div id="dig0">' )
  
  $(" #dig3, #dig2, #dig1, #dig0 ").css( divAlign ).css( divAlignColumn )
  $("#dig3").append( '<div id="dig3U">' ).append( '<div id="dig3t">' ).append( '<div id="dig3D">' )
  $("#dig2").append( '<div id="dig2U">' ).append( '<div id="dig2t">' ).append( '<div id="dig2D">' )
  $("#dig1").append( '<div id="dig1U">' ).append( '<div id="dig1t">' ).append( '<div id="dig1D">' )
  $("#dig0").append( '<div id="dig0U">' ).append( '<div id="dig0t">' ).append( '<div id="dig0D">' )
  
  
  function clockSet() {
  $("#dig3t").text( H_10 )
  $("#dig2t").text( H_1 )
  $("#dig1t").text( M_10)
  $("#dig0t").text( M_1)
  }
  clockSet()
  
  $(" #dig3, #dig2, #dig1, #dig0 ").css( { "margin":"1px" } )//.css( {"border":"1px solid white"} )
  $("#dig1").css( { "margin-left":"11px" } )
  
  digUDWidth = $("#dig0t").width()
  digUDHeight = $("#dig0t").width()
  digUDborderRadius = $("#dig0t").width()/5
  digUDpadding = $("#dig0t").width()/5
  digUDborderWidth = $("#dig0t").width()/15
  
  $(" #dig3U, #dig2U, #dig1U, #dig0U, #dig3D, #dig2D, #dig1D, #dig0D ").css( { "border":"solid lightgreen", "border-radius":digUDborderRadius, "width":digUDWidth , "height":digUDHeight } )
  $(" #dig3U, #dig2U, #dig1U, #dig0U, #dig3D, #dig2D, #dig1D, #dig0D ").css( { "padding":"0", "padding-left":digUDpadding, "border-width":digUDborderWidth } )
  $(" #dig3U, #dig2U, #dig1U, #dig0U ").css( { "position":"relative", "top":$("#dig0U").height() + $("#dig0U").height()/7, "border-bottom-width":"1px" } )
  $(" #dig3D, #dig2D, #dig1D, #dig0D ").css( { "position":"relative", "bottom":$("#dig0U").height() + $("#dig0U").height()/7, "border-top-width":"1px" } )
  
  
  window.addEventListener("resize", (event) => {
    winSize()
    }
  )
  
  setInterval(() => {
    clockRefresh()
    clockSet()
  }, 999);