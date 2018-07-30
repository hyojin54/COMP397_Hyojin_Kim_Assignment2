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
 * runner.ts
 * This is runner object class
 *
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
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
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
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
            this.y = 0;
        };
        Runner.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Runner.prototype.Reset = function () { };
        return Runner;
    }(objects.GameObject));
    objects.Runner = Runner;
})(objects || (objects = {}));
//# sourceMappingURL=runner.js.map