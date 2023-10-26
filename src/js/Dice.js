/** Class representing a dice */
var Dice =  function(t) {
    /**
     * The dices value
     * @type {number}
     */
    this.value = 0;

    /**
     * Rolls the dice by generating a number between 1 and 6, then changing the elements class
     * Calls method to show dice count
     * @returns {undefined}
     */
    this.rollDice = function() {
        this.value = Math.ceil(Math.random()*6);
        var n = Main.numberConverter(this.value);
        this.dice.className = "dice dice-side-"+n+"";
        t.count += this.value;
        t.showTotal();
    }

    /**
     * Rerolls a certain dice by removing it's value from the total count and calling rollDice method
     * @returns {undefined}
     */
    this.reRoll = function() {
        t.count -= this.value;
        this.rollDice();
    }
  
    /**
     * Creating the dice with DOM and giving it a colored cover
     * @param {object} self is the current dice-object
     */
    this.constructor = (function(self) {  
        self.dice = document.createElement("li");
        self.color = document.createElement("div");
        self.dice.appendChild(self.color);
        self.color.className = "diceColor";        
        Main.changeColor(self.color);
        self.rollDice();
        self.dice.addEventListener("click",function() {self.reRoll()});
    })(this);
}