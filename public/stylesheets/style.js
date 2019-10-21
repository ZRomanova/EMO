window.onload = function() {
for (let i = 0; ;i++) {
    if (document.getElementsByClassName('tc')[i] == undefined) break;
    else {
        mas = document.getElementsByClassName('tc')[i].innerHTML;
        var my_text = mas.length-1;
        mas = mas.split([''])
        var count = 0;
        var fin = '';
        while (count <= my_text) {
            var letter = mas[count];
            letter = letter.toUpperCase();
            if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
                letter = "<span class = red>" + letter + "</span>";
            };
            fin = fin + letter;
            count++;
        };   
    document.getElementsByClassName('tc')[i].innerHTML = fin;
    };
};
};

function text_color(id) {
    var t = document.getElementsById(id).innerHTML;
    var my_text = t.length-1;
    letter = t[my_text].toUpperCase();
    if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
        letter = "<span class = red>" + letter + "</span>";
        };
    document.getElementsById(id).innerHTML = str.slice(0 , my_text - 1) + letter;
};