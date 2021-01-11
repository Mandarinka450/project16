function Enter() {
    let name = document.getElementById('inp_1').value;
    if (!name || 0 === name.length) {
        alert('Вы ввели пустую строку! Введите имя пользователя!');
    }
    else if (confirm('Вы ввели ' + name + ' . Вы подтверждаете правильность имени пользователя?' )) {
        alert('Привет, ' + name + '!' );
    }
    else {
        alert('Увы и ах, введите снова имя пользователя!');
    }
}




