/**
 * fruit.ts
 * This is fruit object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 30, 2018
 * Revision: 1.0
 */
namespace objects {
    export class Fruit extends objects.GameObject {
        // member variables
        private _horizontalSpeed: number;

        /**
         *Creates an instance of Fruit.
         * @memberof Fruit
         */
        constructor() {
            super("fruit1");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check right boundary
            if(this.x > config.Screen.WIDTH + this.halfWidth) {
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 5;
            this.Reset();
        }

        public Update(): void {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this.x = -this.width;
            this.y = Math.floor(
                Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight
            );
        }
    }
}
