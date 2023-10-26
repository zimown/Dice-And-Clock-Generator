/** Class representing an area/window for dices, inherits from window */
var DiceWindow = function() {
    this.newWindow()
    /**
     * The total value of the dices in the area
     * @type {number}
     */
    this.count = 0;
    /**
     * An array for the current dices
     * @type {Array}
     */
    var dices = [];

    /**
     * Dynamically creating a diceWindow with DOM and adding classes
     * @type {DOMElement}
     */
    this.window_element.className = "dice-window-wrapper";
    this.window_menu.className = "dice-menubar-wrapper";
    this.dice_toolbar = document.createElement("div");
    this.dice_toolbar.className = "dice-toolbar-wrapper";
    this.ul = document.createElement("ul");
    this.add = document.createElement("li");
    this.add.className = "add";
    this.remove = document.createElement("li");
    this.remove.className = "remove";
    this.roll = document.createElement("li");
    this.roll.className = "roll";
    this.li = document.createElement("li");
    
    this.window_element.appendChild(this.dice_toolbar);
    this.dice_toolbar.appendChild(this.ul);
    this.ul.appendChild(this.add);
    this.ul.appendChild(this.remove);
    this.ul.appendChild(this.roll);
    this.ul.appendChild(this.li);

    this.dice_toolbar_counter = document.createElement("ul");
    this.dice_toolbar_counter.className = "dice-toolbar-counter-wrapper";
    this.li.appendChild(this.dice_toolbar_counter);
    for (var i = 0; i < 5; i++) {
        this.counting = document.createElement("li");
        this.counting.className = "zero";
        this.dice_toolbar_counter.appendChild(this.counting);
    }

    var dice = document.createElement("div");
    dice.className = "dice-content-wrapper";
    this.dice_ul = document.createElement("ul");
    dice.appendChild(this.dice_ul);
    this.window_element.appendChild(dice);

    /**
     * Creates a new dice object and adds it to the dice array
     * @returns {undefined}
     */
    this.addDice = function() {
        if (dices.length < 40) {
            var newDice = new Dice(this);
            dices[dices.length] = newDice;
            this.dice_ul.appendChild(newDice.dice)
        }
    }

    /**
     * Removes the last dice from the array
     * @returns {undefined}
     */
    this.removeDice = function() {
        if (dices.length) {
            var value = dices[dices.length-1].value;
            this.count -= value;
            dices = dices.slice(0,-1);
            this.dice_ul.lastChild.remove();
            this.showTotal();
        }
    }

    /**
     * Rerolls all the dices in the window
     * @returns {undefined}
     */
    this.reRoll = function() {
        var i = 0;
        while (i < dices.length) {
            dices[i].reRoll(dices[i]);
            i++;
        }
    }

    /**
     * Shows the total worth of the dices
     * @returns {undefined}
     */
    this.showTotal = function() {
        var total = String(this.count);
        var numbers = this.dice_toolbar_counter.childNodes;
        var j = numbers.length-1;
        while (total.length > 0) {
            numbers[j].className = Main.numberConverter(total.slice(-1));
            total = total.slice(0,-1);            
            j--;
        }
        while (j >= 0) {
            numbers[j].className = "zero";
            j--;
        }
    }
    this.addWindowListeners();
    this.addDiceWindowListeners();
};
DiceWindow.prototype = new Window();  

/**
 * Adds listeners to a created diceWindow object (window)
 * @param {object} a - the window
 * @return {undefined} 
 */
DiceWindow.prototype.addDiceWindowListeners = function() {
    var self = this;
    this.add.addEventListener("click",function() {self.addDice(); Main.startSound("src/wav/rclick.mp3")});
    this.remove.addEventListener("click",function() {self.removeDice(); Main.startSound("src/wav/add.wav")});
    this.roll.addEventListener("click",function() {self.reRoll(); Main.startSound("src/wav/camera.mp3")});
}