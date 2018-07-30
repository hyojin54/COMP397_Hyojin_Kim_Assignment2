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
    var Runner = /** @class */ (function (_super) {
        __extends(Runner, _super);
        /**
         * Creates an instance of Runner.
         * @memberof Runner
         */
        function Runner() {
            var _this = _super.call(this, "runner") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Runner.prototype._checkBounds = function () {
            // check top boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
        };
        // public methods
        Runner.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 580;
        };
        Runner.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Runner.prototype.Reset = function () { };
        return Runner;
    }(objects.GameObject));
    objects.Runner = Runner;
})(objects || (objects = {}));
//# sourceMappingURL=runner.js.map