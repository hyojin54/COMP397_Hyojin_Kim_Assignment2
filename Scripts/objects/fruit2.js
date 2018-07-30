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
var objects;
(function (objects) {
    var Fruit2 = /** @class */ (function (_super) {
        __extends(Fruit2, _super);
        /**
         *Creates an instance of Fruit.
         * @memberof Fruit
         */
        function Fruit2() {
            var _this = _super.call(this, "fruit2") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Fruit2.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Fruit2.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            //this._horizontalSpeed = 5;
            this.Reset();
        };
        Fruit2.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Fruit2.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Fruit2;
    }(objects.GameObject));
    objects.Fruit2 = Fruit2;
})(objects || (objects = {}));
//# sourceMappingURL=fruit2.js.map