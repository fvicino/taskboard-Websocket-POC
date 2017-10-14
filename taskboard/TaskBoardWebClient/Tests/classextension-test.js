/// <reference path="../Scripts/jquery-1.4.4-vsdoc.js" />
/// <reference path="../Scripts/qunit-git.js" />
/// <reference path="../Scripts/Base/ClassExtensions.js" />


$(document).ready(function () {

    $.getScript("../Scripts/Base/ClassExtensions.js", function () {

        module("ClassExtensions.js");

        test("inherits Function protoype method", function () {

            expect(9);

            function testbase() {
                this.ID = 9;
                this.TestFunction = function () { return 1; }
                this.Shelf = 99;
                this.TheGuts = function () { return 46; }
            }

            function sub1() {

            }
            sub1.inherits(testbase);
            s1 = new sub1();
            ok(s1.ID === 9, "Properties are inherited");
            ok(s1.TestFunction() === 1, "Functions are inhertited");


            sub1.prototype.NewProperty = 7;
            function sub2() {
            }
            sub2.inherits(testbase);
            s2 = new sub2();
            ok(s2.NewProperty === 7, "inheritance reuses prototype instances");


            sub1.prototype.ID = 4000;
            function dub2() {
                this.ID = 111;
                this.TestFunction = function () { return 70; }
                this.MyID = 99;
                this.MyFunction = function () { return 99; }
            }
            dub2.inherits(testbase);
            d2 = new dub2();

            ok(d2.Shelf == 99, "Unmodified properties are inherited on subtype");
            ok(d2.TheGuts() == 46, "Unmodified methods are inherited on subtype");
            ok(d2.ID === 111, "property values defined in subtypes are retained after inheritance");
            ok(d2.TestFunction() === 70, "overidden methods defined in subtypes are retained after inheritance");
            ok(d2.MyID === 99, "new property values defined in subtypes are retained after inheritance");
            ok(d2.MyFunction() === 99, "new methods defined in subtypes are retained after inheritance");


        });

    });
});