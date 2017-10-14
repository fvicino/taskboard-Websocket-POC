/// <reference path="jquery-1.4.4-vsdoc.js" />
/// <reference path="../Base/namespace.js" />

//define a simple local storage objects
taskboard.storage = new function storage () {
    this.set = function (key, obj) {
        var tb = JSON.stringify(obj);
        window.localStorage.setItem(key, tb);
    }
    this.get = function (key) {
        var tb = window.localStorage.getItem(key);
        if (tb) {
            return JSON.parse(tb);
        }
        return null;
    }
} ();