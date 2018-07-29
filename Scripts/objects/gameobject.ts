module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // member variables
        public isCentered: boolean;
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;

        // Constructors
        constructor(imageString: string) {
            super(imageString);
            //super(managers.Game.AssetManager.getResult(imageString));

            this._initialize();
        }

        // private methods

        /**
         * This method initialized class memeber variables
         *
         * @private
         * @returns {void}
         */
        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
        }

        // public methods

        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }

    }
}