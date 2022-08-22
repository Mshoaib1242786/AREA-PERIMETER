function printArea()
{
let table = document.getElementById('value').value;
let tables = document.getElementById('values').value;

 let length =parseInt(table);
 let width = parseInt(tables) ;
showArea = (length * width );
document.getElementById("test").innerHTML=showArea ;
}


function printPerimeter()
{
let table = document.getElementById("value1").value;
let tables = document.getElementById("values1").value;

 let length =parseInt(table);
 let width = parseInt(tables) ;
showPerimeter = (2*(length + width ));
document.getElementById("showResult").innerHTML=showPerimeter;
}