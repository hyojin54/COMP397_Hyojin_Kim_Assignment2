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
var Scenes;
(function (Scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            console.log("%c Starting Start Scene", "font-style:italic; font-size:20px;");
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 320, 200, true);
            this._startButton = new objects.Button("btnStart", 320, 300, true);
            this.Main();
        };
        Start.prototype.Update = function () { };
        Start.prototype.Reset = function () { };
        Start.prototype.Main = function () {
            this.addChild(this._startButton);
            this.addChild(this._welcomeLabel);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.EXIT;
                this.removeAllChildren();
            }, this);
        };
        return Start;
    }(objects.Scene));
    Scenes.Start = Start;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=start.js.map