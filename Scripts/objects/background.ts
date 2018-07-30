/**
 * background.ts
 * This is background object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace objects {
    export class Background extends createjs.Bitmap {
        // member variables
        private _horizontalSpeed: number;

        /**
         * Creates an instance of Background.
         * @memberof Background
         */
        constructor() {
            super(managers.Game.AssetManager.getResult("background"));

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check top boundary
            if (this.x >= 0) {
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this._horizontalSpeed = 3; // 3 pixels per frame
            this.Reset();
        }

        public Update(): void {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this.x = -600;
        }
    }
}