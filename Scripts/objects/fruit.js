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
 * fruit.ts
 * This is fruit object class
 *
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 30, 2018
 * Revision: 1.0
 */
var objects;
(function (objects) {
    var Fruit = /** @class */ (function (_super) {
        __extends(Fruit, _super);
        /**
         *Creates an instance of Fruit.
         * @memberof Fruit
         */
        function Fruit() {
            var _this = _super.call(this, "fruit1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Fruit.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH + this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Fruit.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Fruit.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Fruit.prototype.Reset = function () {
            this.x = -this.width;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight);
        };
        return Fruit;
    }(objects.GameObject));
    objects.Fruit = Fruit;
})(objects || (objects = {}));
//# sourceMappingURL=fruit.js.map