// После замены массива на enum код стал удобнее и читаемее
// Больше не нужно держать в голове какие направления под какими индексами
// Что значительно упрощает поддержку кода
enum Directions {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

type Player = {
    x: number,
    y: number,
    move: (direction: string, amount: number) => void,
}


const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: string, amount: number) {
        switch (direction) {
            case 'Up':
                this.y += amount;
                break;
            case 'Down':
                this.y -= amount;
                break;
            case 'Left':
                this.x -= amount;
                break;
            case 'Right':
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Directions['Up'], 1);
player.move(Directions['Down'], 2);
player.move(Directions['Left'], 2);
player.move(Directions['Right'], 3);

console.log(player.x === 1);
console.log(player.y === -1);