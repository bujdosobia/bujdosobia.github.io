$('body').append('<div id="panel">')
$('#panel').css( {  "width": "300px", /* "height":"300px", */
 "border-radius": "9px", "border": "solid gray thin", "background": "#cde"} )

$('#panel').append('<h1>')
$('h1').css( { "margin": "10px", "font-weight": "bold", "color": "#369" } )
$('h1').text('ToDos')

$('#panel').append('<div id="listHead">')
$('#panel').css( { "padding": " 0 20px" } )
$('#listHead').append('<input type="text" id="newItem" value="Create new task" maxlength="16">')
$('#listHead').append('<input type="button" id="addToList" value="Add to List">')
$('#newItem').css( { "margin": " 0 10px", "color": "lightgray" } )
$('#addToList').css( { "font-size": "11px" } )
$('#panel').append('<div id="listContent">')
$('#listContent').append('<fieldset>')
$('fieldset').css( { "margin": "20px 0", "background": "#cde", "border-radius": "5px" } )

$('fieldset').append('<legend>')
$('legend').text('LIST OF TASKS')
$('legend').css( { "color": "#369", "font-size": "10px" , "font-weight": "bold"} )
$('fieldset').append('<ul>')
$('ul').css( { "color": "#369", "list-style-type": "none", "font-weight": "bold", "padding": "0 10px"  } )
//$('ul').text('List')

$('#newItem').click( () => {
    $("#newItem").prop( 'value', '' )
    $('#newItem').css( { "color": "#136" } )
} )

$("#newItem").keyup(function(event) { 
    if (event.keyCode === 13) { 
        $("#addToList").click(); 
    } 
});

$('#addToList').click( () => {
    let liItem = $("#newItem").val()    

    $('ul').append( '<p><li><input type="image" class="chkLi" src="Images/checked01.svg" width="16" height="16">'
    + " " + liItem + " " +
    '<input type="image" class="delLi" src="Images/trash01.svg" width="16" height="16"><li></p>' )
    
    $('li').css( { "font-weight": "normal", "background": "white" } )
    $('#listHead').keypress()
    $('#newItem').css( { "color": "lightgray" } )
    $("#newItem").prop('value', 'Create new items')
        
} )

$('ul').on("click", ".delLi", function() {
    $(this).parent().remove()

} )

$('ul').on("click", ".chkLi", function() {
    $(this).parent().css('text-decoration', 'line-through')

} )

