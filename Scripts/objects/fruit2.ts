/**
 * fruit2.ts
 * This is fruit2 object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 30, 2018
 * Revision: 1.0
 */
namespace objects {
    export class Fruit2 extends objects.GameObject {
        // member variables
        private _verticalSpeed: number;
        private _horizontalSpeed: number;

        /**
         *Creates an instance of Fruit.
         * @memberof Fruit
         */
        constructor() {
            super("fruit2");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            //this._horizontalSpeed = 5;
            this.Reset();
        }

        public Update(): void {
            this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        }
    }
}
