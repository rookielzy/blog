var EventUtil = {
    // add event
    addHandler: function(element, type, handler) {
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        }
        else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = handler;
        }
    },

    // remove event
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }
        else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = null;
        }
    },

    // get event
    getEvent: function(event) {
        return event ? event : window.event;
    },

    // get target
    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    //stop default
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    },

    //stop bubble or catch
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    },

    //get char code
    getCharCode: function(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        }
        else {
            return event.keyCode;
        }
    },

    //
    getClipboardText: function(event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    //
    setClipboardText: function(event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        }
        else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    }
};