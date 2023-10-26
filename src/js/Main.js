//------------------------------------------------------------------------
// Static class
//------------------------------------------------------------------------

/**
 * Base class for the webb-page, handles the eventlisteners and methods in general
 * @author  Zimone Björnler
 */
/** Class representing the window/document */
var Main =  {
    /**
     * Instance of a object which contains draggabel objects
     * @type {object}
     */
    drag : new DragnDrop(),

    /**
     * Adds eventlistener to the start buttons
     * @return {undefined}
     */
    init : function() {
        document.getElementById("icon-dice").addEventListener("click",Main.addDiceWindow);
        document.getElementById("icon-clock").addEventListener("click",Main.addClockArea);
    },

    /**
     * Creates a new instance of the DiceWindow and appends it to the page   
     * @return {undefined}
     */
    addDiceWindow : function() {
        var area = new DiceWindow();
        document.getElementById("page-content-wrapper").appendChild(area.window_element);
    },

    /**
     * Creates a new instance of the Clock and calls methods to add eventlisteners
     * @return  {undefined}
     */
    addClockArea : function() {
        var clock = new Clock();
        document.getElementById("page-content-wrapper").appendChild(clock.window_element);
    },

    /**
     * Playes the recieved sound file
     * @param {file} Soundfile that shall be played
     * @returns {undefined}
     */
    startSound : function(file) {
        var sound = new Audio(file);
        sound.play();
    },

    /**
     * Converts a number between 0-9 to it's name in text
     * Makes sure the input is an int before or else the switch statement wont work
     * @param {number} n the number to convert
     * @returns the number written out
     */
    numberConverter : function(n) {
        var n = parseInt(n);
        if(!isNaN(n)) {      
            switch(n) {
            case 0:
                n = "zero";
                break;
            case 1:
                n = "one";
                break;
            case 2:
                n = "two";
                break;
            case 3:
                n = "three";
                break;
            case 4:
                n = "four";
                break;
            case 5:
                n = "five";
                break;
            case 6:
                n = "six";
                break;
            case 7:
                n = "seven";
                break;
            case 8:
                n = "eight";
                break;
            case 9:
                n = "nine";
                break;
            }
            return n;
        }
    },

    /**
     * Changes the recieved elements background color to a random color
     * @param {DOMElement} elem 
     */
    changeColor : function(elem) {
        var randColor = Math.floor(Math.random()*16777215).toString(16);
        elem.style.backgroundColor = "#" + randColor;
    },
}
window.addEventListener("load",Main.init);
