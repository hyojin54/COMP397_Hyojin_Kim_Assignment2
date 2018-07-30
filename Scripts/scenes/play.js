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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            console.log("%c Starting Play Scene", "font-style:italic; font-size:20px;");
            this._background = new objects.Background();
            this._runner = new objects.Runner();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._background.Update();
            this._runner.Update();
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._runner);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map