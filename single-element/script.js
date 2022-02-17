var fullList = $('li')
var slection = parseInt(prompt("enter the selection"))
var singleItem = fullList[(slection-1)]



$("p").html("<h3> the desired output is : "+ singleItem.innerHTML +"</h3>")