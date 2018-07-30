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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._background = new objects.Background();
            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, 100, true);
            this._btnRestart = new objects.Button("btnRestart", config.Screen.HALF_WIDTH, 300, true);
            this._btnExit = new objects.Button("btnExit", config.Screen.HALF_WIDTH, 400, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._background.Update();
        };
        End.prototype.Reset = function () { };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting End Scene");
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._btnRestart);
            this.addChild(this._btnExit);
            this._btnRestart.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._btnExit.on("click", function () {
                var myWindow = window.open("", "_self");
                myWindow.document.write("");
                setTimeout(function () {
                    myWindow.close();
                }, 1000);
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map