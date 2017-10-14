/// <reference path="jquery-1.4.4-vsdoc.js" />
/// <reference path="Services/DragHelper.js" />
/// <reference path="Services/Storage.js" />
/// <reference path="Services/WebSocketClient.js" />
/// <reference path="../Services/EventBroker.js" />

//Base class
function base() {
    var Me = this;
    this.eventBroker = taskboard.eventBroker;
    this.storage = taskboard.storage; 

    //used to randomise to make the taskboard look realistic
    this.rand = function (min, max) {
        var rnd = Math.floor(Math.random() * max);
        if (rnd < min) { rnd += min; }
        return rnd;
    }
}