let random = Math.floor(Math.random() * 100);

function bot() {

    let ask = +prompt('Угадай число от 1 до 100');

    function counter(number) {

        switch (true) {
            case number > random:
                alert('Загаданное число меньше');
                console.log(random);
                break;
            case number < random:
                alert('Загаданное число больше');
                console.log(random);
                break;
            case number == random:
                alert('Поздравляю, Вы угадали!!!');
                console.log(random);
                break;
            default:
                alert('Введи число!');
                bot();
        }

        counter();
    }

    switch (true) {
        case true:
            counter(ask);
            break;
        default: alert('Игра окончена');
    }

}
bot();
