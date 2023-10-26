/** Class representing a clock, inherits from window */
var Clock = function() {
    this.newWindow();
    /**
     * Creating the clock-elements with DOM
     */
    this.window_element.className = "clock-window-wrapper";
    this.window_menu.className = "clock-menubar-wrapper";
    this.clock_content = document.createElement("div");
    this.clock_content.className = "clock-content-wrapper";
    this.clock_hours = document.createElement("ul");
    this.clock_hours.className = "clock-digit-wrapper hour";
    this.clock_minutes = document.createElement("ul");
    this.clock_minutes.className = "clock-digit-wrapper minute";
    this.clock_seconds = document.createElement("ul");
    this.clock_seconds.className = "clock-digit-wrapper second";

    this.clock_content.appendChild(this.clock_hours);
    this.clock_hours.appendChild(document.createElement("li"));
    this.clock_hours.appendChild(document.createElement("li"));

    this.clock_content.appendChild(this.clock_minutes);
    this.clock_minutes.appendChild(document.createElement("li"));
    this.clock_minutes.appendChild(document.createElement("li"));

    this.clock_content.appendChild(this.clock_seconds);
    this.clock_seconds.appendChild(document.createElement("li"));
    this.clock_seconds.appendChild(document.createElement("li"));

    this.window_element.appendChild(this.clock_content);
    Main.changeColor(this.clock_content);

    /**
     * Starts a clock when a new instance is created
     * Then calls the newTime method to update the clock
     * @returns {undefined}
     */
    this.startTime = function() {
        const time = new Date().toLocaleTimeString('it-IT');
        this.getSeconds(time);
        this.getMinutes(time);
        this.getHours(time);
        var clock = this;
        setInterval(function () {clock.newTime()}, 500);
    }

    /**
     * Gets the seconds and displays them in the DOM-structure
     * @param {string} time is the current time from which the seconds will be extracted
     */
    this.getSeconds = function(time) {
        var s = time.slice(-2);
        this.clock_seconds.firstChild.className = "clock-digit-"+Main.numberConverter(s.slice(0,-1));
        this.clock_seconds.lastChild.className = "clock-digit-"+Main.numberConverter(s.slice(-1));
    }
    /**
     * Gets the minutes and displays them in the DOM-structure
     * @param {string} time is the current time from which the minutes will be extracted
     */
    this.getMinutes = function(time) {
        var m = time.slice(3,5);
        this.clock_minutes.firstChild.className = "clock-digit-"+Main.numberConverter(m.slice(0,-1));
        this.clock_minutes.lastChild.className = "clock-digit-"+Main.numberConverter(m.slice(-1));
    }
    /**
     * Gets the hours and displays them in the DOM-structure
     * @param {string} time is the current time from which the hours will be extracted
     */
    this.getHours = function(time) {
        var h = time.slice(0,2);
        this.clock_hours.firstChild.className = "clock-digit-"+Main.numberConverter(h.slice(0,-1));
        this.clock_hours.lastChild.className = "clock-digit-"+Main.numberConverter(h.slice(-1));
    }

    /**
     * Calls the method to update seconds every time and to get the minutes every time a whole minute has passed (shows 00) and so on
     * @returns {undefined}  
     */
    this.newTime = function() {
        const time = new Date().toLocaleTimeString('it-IT');
        this.getSeconds(time);
        if (time.slice(-2) == "00") {
            this.getMinutes(time);
            if (time.slice(3,5) == "00") this.getHours(time);
        }
    }
    this.startTime();
    this.addWindowListeners(); 
}
Clock.prototype = new Window();