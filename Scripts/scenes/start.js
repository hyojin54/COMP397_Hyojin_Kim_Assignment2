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
 * start.ts
 * This is start scene class
 *
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
var scenes;
(function (scenes) {
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
            this._welcomeLabel = new objects.Label("Welcome! Enjoy the game!", "40px", "Consolas", "#000000", 320, 50, true);
            this._btnStart = new objects.Button("btnStart", 320, 200, true);
            this._btnInstructions = new objects.Button("btnInstructions", 320, 300, true);
            this._btnExit = new objects.Button("btnExit", 320, 400, true);
            this.Main();
        };
        Start.prototype.Update = function () { };
        Start.prototype.Reset = function () { };
        Start.prototype.Main = function () {
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstructions);
            this.addChild(this._btnExit);
            this._btnStart.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                this.removeAllChildren();
            }, this);
            this._btnInstructions.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTIONS;
                this.removeAllChildren();
            }, this);
            this._btnExit.on("click", function () {
                var myWindow = window.open("", "_self");
                myWindow.document.write("");
                setTimeout(function () {
                    myWindow.close();
                }, 1000);
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map