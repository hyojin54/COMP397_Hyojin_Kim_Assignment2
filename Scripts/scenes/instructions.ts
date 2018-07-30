/**
 * instructions.ts
 * This is instructions scene class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 30, 2018
 * Revision: 1.0
 */
namespace scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _instructionLabel: objects.Label;
        private _btnStart: objects.Button;
        private _btnExit: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            console.log(
                `%c Starting Start Scene`,
                "font-style:italic; font-size:20px;"
            );
            this._instructionLabel = new objects.Label(
                "This game is simple. \n\nYou can get fruits that each is 100 point, and avoid birds. \n\nIf you collide with the bird, you lose your one life. \n\nHave fun!! :)",
                "16px",
                "Consolas",
                "#000000",
                320,
                100,
                true
            );
            this._btnStart = new objects.Button("btnStart", 320, 300, true);
            this._btnExit = new objects.Button("btnExit", 320, 400, true);

            this.Main();
        }

        public Update(): void { }

        public Reset(): void { }

        public Main(): void {
            this.addChild(this._instructionLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnExit);

            this._btnStart.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.PLAY;
                    this.removeAllChildren();
                },
                this
            );

            this._btnExit.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.START;
                    this.removeAllChildren();
                },
                this
            );
        }
    }
}
