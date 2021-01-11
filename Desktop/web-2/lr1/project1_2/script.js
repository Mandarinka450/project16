
    var output = '';
    var total = 10;
    for (var i=1; i<= total; i++) {
        output += i + ' ';
        for (j = 2; j <= total; j++) {
            output += i * j + ' ';

        }
        output += "\n"
    } 
    console.log(output);
