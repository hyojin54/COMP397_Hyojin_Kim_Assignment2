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
        Play.prototype._buildBirds = function () {
            for (var count = 0; count < this._birdsCount; count++) {
                this._birds.push(new objects.Bird());
            }
        };
        // public methods
        Play.prototype.Start = function () {
            console.log("%c Starting Play Scene", "font-style:italic; font-size:20px;");
            // sound
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._background = new objects.Background();
            this._runner = new objects.Runner();
            this._fruit = new objects.Fruit();
            // creates an empty array of type Bird
            this._birds = new Array();
            this._birdsCount = 2;
            this._buildBirds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._runner.Update();
            this._fruit.Update();
            managers.Collision.check(this._runner, this._fruit);
            this._birds.forEach(function (bird) {
                bird.Update();
                managers.Collision.check(_this._runner, bird);
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._runner);
            this.addChild(this._fruit);
            for (var _i = 0, _a = this._birds; _i < _a.length; _i++) {
                var bird = _a[_i];
                this.addChild(bird);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map