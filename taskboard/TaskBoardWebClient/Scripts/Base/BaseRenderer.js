﻿/// <reference path="jquery-1.4.4-vsdoc.js" />
/// <reference path="ClassExtensions.js" />
/// <reference path="Base.js" />
/// <reference path="UIFactory.js" />


//base "abstract" class for taskboard renderers
function baseRenderer() {
    var Me = this;
    this.title = 'base';
    this.CEILING = 50;
    this.NOTEWIDTH = 125;
    this.PROJECTGAP = 30;
    this.MAXSCREENHIEGHT = 700;
    this.RANDOMMIN = 5;
    this.RANDOMMAX = 20;
    this.HEADERHEIGHT = 30;
    this.TRANSFORMLEFT = "transformed-left";
    this.TRANSFORMRIGHT = "transformed-right";

    //the method that renders
    this.render = null;

    this.UIFactory = taskboard.UIFactory;

    //an array sorting method - has trouble with mutli property sort in chrome 
    this.sortFunction = function (field1, comparer1, field2, comparer2) {

        return function (obj1, obj2) {
            var a = obj1[field1], b = obj2[field1], c, d, result;
            if (field2) {
                var c = obj1[field2];
                var d = obj2[field2];
            }

            if (comparer1) {
                result = comparer1(c, d);
            } else {
                if (a < b) {
                    result = -1;
                }
                else if (a > b) {
                    result = 1;
                } else {
                    result = 0;
                }
            }

            if (result == 0 && field2) {
                if (comparer2) {
                    return comparer2(c, d);
                } else {
                    if (c < d) return -1;
                    if (c > d) return 1;
                    return 0;
                }
            }

        }
    }

}
baseRenderer.inherits(base);