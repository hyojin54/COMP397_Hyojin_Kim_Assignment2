/**
 * end.ts
 * This is end scene class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _background: objects.Background;
        private _btnRestart: objects.Button;
        private _btnExit: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        // public methods
        public Start(): void {
            this._background = new objects.Background();

            this._gameOverLabel = new objects.Label(
                "Game Over!",
                "80px",
                "Consolas",
                "#FFFF00",
                config.Screen.HALF_WIDTH,
                100,
                true
            );
            this._btnRestart = new objects.Button(
                "btnRestart",
                config.Screen.HALF_WIDTH,
                300,
                true
            );
            this._btnExit = new objects.Button(
                "btnExit",
                config.Screen.HALF_WIDTH,
                400,
                true
            );

            this.Main();
        }

        public Update(): void {
            this._background.Update();
        }

        public Reset(): void { }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Main(): void {
            console.log(`Starting End Scene`);

            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._btnRestart);
            this.addChild(this._btnExit);

            this._btnRestart.on(
                "click",
                function () {
                    managers.Game.ScoreBoardManager.Reset();
                    managers.Game.CurrentState = config.Scene.PLAY;
                },
                this
            );

            this._btnExit.on(
                "click",
                function () {
                    managers.Game.ScoreBoardManager.Reset();
                    managers.Game.CurrentState = config.Scene.START;
                },
                this
            );
        }
    }
}
