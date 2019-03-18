"use strict";
exports.__esModule = true;
function distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.distance = distance;
var Cow = /** @class */ (function () {
    function Cow() {
        this.name = 'Ashwin';
    }
    Cow.prototype.MakeSound = function () {
        console.log('Moo!');
    };
    return Cow;
}());
exports.Cow = Cow;
