/**
 * runner.ts
 * This is runner object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace objects {
    export class Runner extends objects.GameObject {

        /**
         * Creates an instance of Runner.
         * @memberof Runner
         */
        constructor() {
            super("runner");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check left boundary
            if(this.x < this.halfWidth){
                this.x = this.halfWidth;
            }

            // check right boundary
            if(this.x > config.Screen.WIDTH - this.halfWidth){
                this.x = config.Screen.WIDTH - this.halfWidth;
            }

            // check top boundary
            if(this.y < this.halfHeight){
                this.y = this.halfHeight;
            }

            // check bottom boundary
            if(this.y > config.Screen.HEIGHT - this.halfHeight){
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 580;
            this.y = 0;
        }

        public Update(): void {
            this.x = managers.Game.Stage.mouseX;
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        }

        public Reset(): void { }
    }
}
