class YatzyGame {
    constructor() {
        this.currentRoll = 0;
        this.diceValues = [0, 0, 0, 0, 0];
        this.keepDice = [false, false, false, false, false];
        this.score = 0;
        this.bonus = 0;
    }

    rollDice() {
        for (let i = 0; i < 5; i++) {
            if (!this.keepDice[i]) {
                this.diceValues[i] = rollDice();
            }
        }
        this.currentRoll++;
    }

    toggleKeepDice(index) {
        this.keepDice[index] = !this.keepDice[index];
    }

    resetGame() {
        this.currentRoll = 0;
        this.diceValues = [0, 0, 0, 0, 0];
        this.keepDice = [false, false, false, false, false];
        this.score = 0;
        this.bonus = 0;
    }
}
