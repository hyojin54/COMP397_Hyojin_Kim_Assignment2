/**
 * gameobject.ts
 * This is game object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace objects {
    export abstract class GameObject extends createjs.Bitmap {
        // member variables
        public isCentered: boolean;
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        public isColliding: boolean;

        // Constructors
        constructor(imageString: string) {
            super(managers.Game.AssetManager.getResult(imageString));

            this.name = imageString;
            this._initialize();
        }

        // private methods

        /**
         * This method initialized class memeber variables
         *
         * @private
         * @returns {void}
         */
        private _initialize(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
        }

        // public methods

        public Start(): void { }

        public Update(): void { }

        public Reset(): void { }
    }
}
