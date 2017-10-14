/// <reference path="../Scripts/jquery-1.4.4-vsdoc.js" />
/// <reference path="../Scripts/qunit-git.js" />
/// <reference path="../Scripts/Base/Base.js" />

//mock event broker class
var taskboard = {};

taskboard.eventBroker = {
    Events: {},
    register: function (event, args) {
        if (this.Events[event]) { throw "Duplicate Event registered in base class: " + event; }
        this.Events[event] = args;
    },
    reset: function () { this.Events = []; }
}

var storage = {};

$(document).ready(function () {

    $.getScript("../Scripts/Base/Base.js", function () {

        test("base class registers all supported events with the event broker", function () {

            var expected = "", actual = "";

            var supportedEvents = {
                'mousedown': false,
                'mousemove': false,
                'mousestart': false,
                'ondragstart': false,
                'ondragmove': false,
                'ondragstop': false,
                'onmessage': false,
                'send': false
            };

            var tb = new base();
            for (var p in supportedEvents) {
                if (supportedEvents.hasOwnProperty(p)) {
                    expected = expected + p + " ";
                    if (tb.eventBroker.Events[p] !== undefined) {
                        actual = actual + p + " ";
                    }
                }
            }

            expect(1);

            equal(actual, expected, "All supported events are registered in base class.");

        });

        //test other mwthods here

    });

});