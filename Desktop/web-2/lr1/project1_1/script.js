function Quantity() {
    let c = 0;
    let d = 100;
    let n = document.getElementById('inp_1').value;
    if (n <= 0) {
        alert('Внимание! Введите положительное число!');
    }
    else if (n > 100) {
        alert('Число больше ста! ');
    }
    else if ( n>0 && n<=100) {
        c = d - n; 
        if (c%10 == 1) {
            console.log('Остался ' + c + ' день.');
        }
        else if (c%10 == 0 || c%10 > 4) {
            console.log('Осталось ' + c + ' дней.');
        }
        else if (c%10 < 5) {
            console.log('Осталось ' + c + ' дня.');
        }
    }
}