var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * bird.ts
 * This is bird object class
 *
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
var objects;
(function (objects) {
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        /**
         *Creates an instance of Bird.
         * @memberof Bird
         */
        function Bird() {
            var _this = _super.call(this, "bird") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bird.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Bird.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bird.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Bird.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Bird;
    }(objects.GameObject));
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map