function text_color(Id, Value) {
alert ('start')
var mas = document.getElementById(Id).innerHTML.split("");
var my_text = Value.length-1;
var count = 0;
var letter = mas[count];
while count <= my_text {
  alert(count,letter)
  letter = letter.toUpperCase()
  if letter = 'А' || 'О' || 'У' || 'Ы' || 'Э' || 'Я' || 'Ё' || 'Ю' || 'И' || 'Е' {
    mas[count] = "<font color = red>" + mas[count] + "</font>";
    count++;
}}  
document.getElementById(id).innerHTML = mas.join("");
}
// запуск onload = 'text_color(id, value)'