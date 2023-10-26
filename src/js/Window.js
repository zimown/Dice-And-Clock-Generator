/** Class representing a draggable window */
var Window = function() {

    this.newWindow = function() {
        this.window_element = document.createElement("div");
        this.window_menu = document.createElement("div");
        this.close = document.createElement("div");
        this.close.className = "close";
        this.window_element.appendChild(this.window_menu);
        this.window_menu.appendChild(this.close);
    }
    
    /**
     * Moves clicked object above all others
     * @returns {undefined}
    */
    this.moveToTop = function() {    
        var time = Date.now().toString().slice(-9);
        this.style.zIndex = time; 
    } 
};

/**
 * Adds listeners to a window-instance
 * @returns {undefined}
 */
Window.prototype.addWindowListeners = function() {
    var w = this;
    this.drag();
    this.close.addEventListener("click",function() {w.closeArea(w)});
    this.window_element.addEventListener("mousedown",this.moveToTop);
    //this.window_menu.addEventListener("mousedown",a.dragArea);
}

/**
 * Adds a window to the drag-object
 * @returns {undefined}
 */
Window.prototype.drag = function() {
    Main.drag.add(this.window_element, this.window_menu);
    //this.window_element.style.position = "absolute";
}

/**
 * Removes the current window
 * @param   {object} area to remove
 * @returns {undefined}
 */
Window.prototype.closeArea = function(area) {
    area.window_element.remove();
}

/* egen drag and drop
    var self = this;
    var pos1 = 0;
    var posx = 0;
    var posy = 0;
    var clicked = {};

    this.dragArea = function(e) {
        posx = e.clientX;
        clicked = this.parentNode;
        document.onmouseup = self.closeDrag;
        document.onmousemove = self.moveArea;
    }

    this.moveArea = function(e) {
        clicked.style.position = "absolute";

        pos1 = posx - e.clientX;
        posx = e.clientX;
        posy = e.clientY;

        clicked.style.top = (posy-10) + "px";        
        clicked.style.left = (clicked.offsetLeft - pos1) + "px";
    }
    
    this.closeDrag = function() {
        document.onmouseup = null;
        document.onmousemove = null;
    }*/