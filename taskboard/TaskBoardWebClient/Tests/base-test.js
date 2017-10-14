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

        module("Base.js");

        test("rand method - random number generator", function () {

            var tb = new base();

            expect(1);

            var values = {}, count1 = 0, count2 = 0;

            values[tb.rand(1, 5)] = true;
            values[tb.rand(1, 5)] = true;
            values[tb.rand(1, 5)] = true;
            values[tb.rand(1, 5)] = true;
            values[tb.rand(1, 5)] = true;

            for (r in values) {
                if (values[r] > 0 && values[r] < 6) {
                    count1 = true;
                }
                else {
                    count1 = false;
                    break;
                }
            }

            ok(count1, "Rand returns valid numbers with in the defined  range");

        });
    });

});