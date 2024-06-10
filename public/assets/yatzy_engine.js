function calculateScore(game, scoreBox) {
    switch (scoreBox) {
        case 'ones':
            return game.diceValues.filter(value => value === 1).length;
        case 'twos':
            return game.diceValues.filter(value => value === 2).length * 2;
        case 'threes':
            return game.diceValues.filter(value => value === 3).length * 3;
        case 'fours':
            return game.diceValues.filter(value => value === 4).length * 4;
        case 'fives':
            return game.diceValues.filter(value => value === 5).length * 5;
        case 'sixes':
            return game.diceValues.filter(value => value === 6).length * 6;
        default:
            return 0;
    }
}

function updateOverallScore(game) {
    let upperScore = game.diceValues.reduce((total, value) => total + value, 0);
    game.score = upperScore;
    game.bonus = upperScore >= 63 ? 35 : 0;
}
