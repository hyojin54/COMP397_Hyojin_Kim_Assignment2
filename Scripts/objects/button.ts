/**
 * button.ts
 * This is button object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace objects {
    export class Button extends objects.GameObject {
        // member variables
        public isCentered: boolean;

        // constructor

        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(
            imageString: string,
            x: number = 0,
            y: number = 0,
            isCentered: boolean = false
        ) {
            super(imageString);

            this.isCentered = isCentered;
            if (isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            // setup event listeners
            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
        }

        // private methods

        private _MouseOver(): void {
            this.alpha = 0.7; // change alpha trasparency to 70%
        }

        private _MouseOut(): void {
            this.alpha = 1.0; // change alpha trasparency to 100%
        }

        // public methods

        public Start(): void { }

        public Update(): void { }

        public Reset(): void { }
    }
}
