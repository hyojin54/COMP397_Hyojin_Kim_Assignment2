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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Start = function () {
            console.log("%c Starting Start Scene", "font-style:italic; font-size:20px;");
            this._instructionLabel = new objects.Label("This game is simple. \n\nYou can get fruits that each is 100 point, and avoid birds. \n\nIf you collide with the bird, you lose your one life. \n\nHave fun!! :)", "16px", "Consolas", "#000000", 320, 100, true);
            this._btnStart = new objects.Button("btnStart", 320, 300, true);
            this._btnExit = new objects.Button("btnExit", 320, 400, true);
            this.Main();
        };
        Instructions.prototype.Update = function () { };
        Instructions.prototype.Reset = function () { };
        Instructions.prototype.Main = function () {
            this.addChild(this._instructionLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnExit);
            this._btnStart.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                this.removeAllChildren();
            }, this);
            this._btnExit.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                this.removeAllChildren();
            }, this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map